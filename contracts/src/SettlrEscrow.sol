// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Types} from "./Types.sol";
import {ISettlrEscrow} from "./interfaces/ISettlrEscrow.sol";
import {IProofRegistry} from "./interfaces/IProofRegistry.sol";
import {RiskScore} from "./libraries/RiskScore.sol";

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

contract SettlrEscrow is ISettlrEscrow {
    IERC20 public immutable token;
    IProofRegistry public immutable proofRegistry;

    uint256 public nextTaskId = 1;

    enum TaskStatus {
        Created,
        Funded,
        BondLocked,
        WorkSubmitted,
        Completed,
        Disputed,
        Cancelled
    }

    struct EscrowTask {
        Types.TaskIntent intent;
        uint256 freelancerBond;
        uint256 additionalBudget;
        string deliveryHash;
        TaskStatus status;
    }

    mapping(uint256 => EscrowTask) public tasks;

    event TaskCreated(
        uint256 indexed taskId,
        address indexed client,
        address indexed freelancer,
        uint256 budget
    );

    event TaskFunded(
        uint256 indexed taskId,
        uint256 amount
    );

    event FreelancerBondLocked(
        uint256 indexed taskId,
        uint256 amount
    );

    event WorkSubmitted(
        uint256 indexed taskId,
        string deliveryHash
    );

    event PaymentReleased(
        uint256 indexed taskId,
        uint256 payment,
        uint256 bond
    );

    event ChangeIntentCreated(
        uint256 indexed taskId,
        uint256 additionalBudget,
        uint256 extendedDeadline
    );

    event DisputeOpened(uint256 indexed taskId);

    modifier onlyClient(uint256 taskId) {
        require(
            msg.sender == tasks[taskId].intent.client,
            "Not client"
        );
        _;
    }

    modifier onlyFreelancer(uint256 taskId) {
        require(
            msg.sender == tasks[taskId].intent.freelancer,
            "Not freelancer"
        );
        _;
    }

    modifier taskExists(uint256 taskId) {
        require(
            taskId > 0 && taskId < nextTaskId,
            "Invalid task"
        );
        _;
    }

    constructor(
        address _token,
        address _proofRegistry
    ) {
        require(_token != address(0), "Invalid token");
        require(_proofRegistry != address(0), "Invalid registry");

        token = IERC20(_token);
        proofRegistry = IProofRegistry(_proofRegistry);
    }

    function createTask(
        Types.TaskIntent calldata _intent
    ) external override {
        require(_intent.client == msg.sender, "Client mismatch");
        require(
            _intent.freelancer != address(0),
            "Invalid freelancer"
        );
        require(_intent.budget > 0, "Invalid budget");
        require(_intent.deadline > block.timestamp, "Invalid deadline");

        uint256 taskId = nextTaskId++;

        tasks[taskId] = EscrowTask({
            intent: _intent,
            freelancerBond: 0,
            additionalBudget: 0,
            deliveryHash: "",
            status: TaskStatus.Created
        });

        emit TaskCreated(
            taskId,
            _intent.client,
            _intent.freelancer,
            _intent.budget
        );
    }

    /*
     * Client deposits the agreed task budget into escrow.
     */
    function fundTask(
        uint256 _taskId
    )
        external
        taskExists(_taskId)
        onlyClient(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            task.status == TaskStatus.Created,
            "Invalid status"
        );

        require(
            token.transferFrom(
                msg.sender,
                address(this),
                task.intent.budget
            ),
            "Transfer failed"
        );

        task.status = TaskStatus.Funded;

        emit TaskFunded(
            _taskId,
            task.intent.budget
        );
    }

    function lockFreelancerBond(
        uint256 _taskId
    )
        external
        override
        taskExists(_taskId)
        onlyFreelancer(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            task.status == TaskStatus.Funded,
            "Task not funded"
        );

        /*
         * Default 1.0x risk and 1.0x reputation.
         * RiskScore therefore produces the normal 20% bond.
         */
        uint256 bond = RiskScore.calculateBond(
            task.intent.budget,
            10_000,
            10_000
        );

        require(
            token.transferFrom(
                msg.sender,
                address(this),
                bond
            ),
            "Bond transfer failed"
        );

        task.freelancerBond = bond;
        task.status = TaskStatus.BondLocked;

        emit FreelancerBondLocked(
            _taskId,
            bond
        );
    }

    function submitWork(
        uint256 _taskId,
        string calldata _deliveryHash
    )
        external
        override
        taskExists(_taskId)
        onlyFreelancer(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            task.status == TaskStatus.BondLocked,
            "Bond not locked"
        );

        require(
            bytes(_deliveryHash).length > 0,
            "Empty delivery hash"
        );

        task.deliveryHash = _deliveryHash;
        task.status = TaskStatus.WorkSubmitted;

        emit WorkSubmitted(
            _taskId,
            _deliveryHash
        );
    }

    /*
     * Payment can only be released after the
     * ProofRegistry confirms objective verification.
     */
    function releasePayment(
        uint256 _taskId
    )
        external
        override
        taskExists(_taskId)
        onlyClient(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            task.status == TaskStatus.WorkSubmitted,
            "Work not submitted"
        );

        require(
            proofRegistry.verifyReceipt(_taskId),
            "Proof not verified"
        );

        uint256 payment = task.intent.budget +
            task.additionalBudget;

        uint256 bond = task.freelancerBond;

        task.status = TaskStatus.Completed;
        task.freelancerBond = 0;

        require(
            token.transfer(
                task.intent.freelancer,
                payment + bond
            ),
            "Payment failed"
        );

        emit PaymentReleased(
            _taskId,
            payment,
            bond
        );
    }

    function createChangeIntent(
        uint256 _taskId,
        Types.ChangeIntent calldata _change
    )
        external
        override
        taskExists(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            msg.sender == task.intent.client ||
            msg.sender == task.intent.freelancer,
            "Not participant"
        );

        require(
            _change.taskId == _taskId,
            "Task mismatch"
        );

        require(
            _change.approvedByClient &&
            _change.approvedByFreelancer,
            "Both approvals required"
        );

        task.additionalBudget += _change.additionalBudget;

        if (_change.extendedDeadline > 0) {
            task.intent.deadline = _change.extendedDeadline;
        }

        if (bytes(_change.newSrsHash).length > 0) {
            task.intent.srsHash = _change.newSrsHash;
        }

        emit ChangeIntentCreated(
            _taskId,
            _change.additionalBudget,
            _change.extendedDeadline
        );
    }

    function openDispute(
        uint256 _taskId,
        Types.DisputeEvidence calldata _evidence
    )
        external
        override
        taskExists(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];

        require(
            msg.sender == task.intent.client ||
            msg.sender == task.intent.freelancer,
            "Not participant"
        );

        require(
            _evidence.taskId == _taskId,
            "Task mismatch"
        );

        require(
            bytes(_evidence.receiptHash).length > 0,
            "Missing evidence"
        );

        task.status = TaskStatus.Disputed;

        emit DisputeOpened(_taskId);
    }

    function getTask(
        uint256 _taskId
    )
        external
        view
        taskExists(_taskId)
        returns (EscrowTask memory)
    {
        return tasks[_taskId];
    }
}