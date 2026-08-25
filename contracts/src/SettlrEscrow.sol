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

    // Review window duration (3 days)
    uint256 public constant REVIEW_WINDOW = 3 days;

    // Maximum free revision rounds
    uint256 public constant MAX_REVISIONS = 3;

    enum TaskStatus {
        Created,
        Funded,
        BondLocked,
        WorkSubmitted,
        UnderReview,        // NEW — Floor 5
        ChangesRequested,   // NEW — Floor 5
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
        uint256 reviewDeadline;     // NEW
        uint256 revisionCount;      // NEW
        string lastChangeReason;    // NEW
    }

    mapping(uint256 => EscrowTask) public tasks;

    // ---------- Events ----------
    event TaskCreated(
        uint256 indexed taskId,
        address indexed client,
        address indexed freelancer,
        uint256 budget
    );
    event TaskFunded(uint256 indexed taskId, uint256 amount);
    event FreelancerBondLocked(uint256 indexed taskId, uint256 amount);
    event WorkSubmitted(uint256 indexed taskId, string deliveryHash);
    event PaymentReleased(uint256 indexed taskId, uint256 payment, uint256 bond);
    event ChangeIntentCreated(
        uint256 indexed taskId,
        uint256 additionalBudget,
        uint256 extendedDeadline
    );
    event DisputeOpened(uint256 indexed taskId);

    // NEW Floor 5 events
    event ReviewStarted(uint256 indexed taskId, uint256 reviewDeadline);
    event WorkAccepted(uint256 indexed taskId);
    event ChangesRequested(uint256 indexed taskId, string reason, uint256 revisionCount);
    event RevisionSubmitted(uint256 indexed taskId, string deliveryHash);
    event FeatureRequested(uint256 indexed taskId, uint256 additionalBudget);

    // NEW Floor 6 events
    event DisputeResolved(uint256 indexed taskId, bool clientWins);

    // ---------- Modifiers ----------
    modifier onlyClient(uint256 taskId) {
        require(msg.sender == tasks[taskId].intent.client, "Not client");
        _;
    }

    modifier onlyFreelancer(uint256 taskId) {
        require(msg.sender == tasks[taskId].intent.freelancer, "Not freelancer");
        _;
    }

    modifier taskExists(uint256 taskId) {
        require(taskId > 0 && taskId < nextTaskId, "Invalid task");
        _;
    }

    constructor(address _token, address _proofRegistry) {
        require(_token != address(0), "Invalid token");
        require(_proofRegistry != address(0), "Invalid registry");
        token = IERC20(_token);
        proofRegistry = IProofRegistry(_proofRegistry);
    }

    // ========== EXISTING CORE FUNCTIONS ==========

    function createTask(Types.TaskIntent calldata _intent) external override {
        require(_intent.client == msg.sender, "Client mismatch");
        require(_intent.freelancer != address(0), "Invalid freelancer");
        require(_intent.budget > 0, "Invalid budget");
        require(_intent.deadline > block.timestamp, "Invalid deadline");

        uint256 taskId = nextTaskId++;

        tasks[taskId] = EscrowTask({
            intent: _intent,
            freelancerBond: 0,
            additionalBudget: 0,
            deliveryHash: "",
            status: TaskStatus.Created,
            reviewDeadline: 0,
            revisionCount: 0,
            lastChangeReason: ""
        });

        emit TaskCreated(taskId, _intent.client, _intent.freelancer, _intent.budget);
    }

    function fundTask(uint256 _taskId) external taskExists(_taskId) onlyClient(_taskId) {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.Created, "Invalid status");

        require(
            token.transferFrom(msg.sender, address(this), task.intent.budget),
            "Transfer failed"
        );

        task.status = TaskStatus.Funded;
        emit TaskFunded(_taskId, task.intent.budget);
    }

    function lockFreelancerBond(uint256 _taskId)
        external
        override
        taskExists(_taskId)
        onlyFreelancer(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.Funded, "Task not funded");

        uint256 bond = RiskScore.calculateBond(task.intent.budget, 10_000, 10_000);

        require(
            token.transferFrom(msg.sender, address(this), bond),
            "Bond transfer failed"
        );

        task.freelancerBond = bond;
        task.status = TaskStatus.BondLocked;
        emit FreelancerBondLocked(_taskId, bond);
    }

    function submitWork(uint256 _taskId, string calldata _deliveryHash)
        external
        override
        taskExists(_taskId)
        onlyFreelancer(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.BondLocked, "Bond not locked");
        require(bytes(_deliveryHash).length > 0, "Empty delivery hash");

        task.deliveryHash = _deliveryHash;
        task.status = TaskStatus.WorkSubmitted;
        emit WorkSubmitted(_taskId, _deliveryHash);
    }

    // ========== FLOOR 5 — CLIENT ACCEPTANCE ==========

    /**
     * @notice Move task into UnderReview after proof is verified.
     * Can be called by anyone once proof exists (usually the verifier or client).
     */
    function startReview(uint256 _taskId) external override taskExists(_taskId) {
        EscrowTask storage task = tasks[_taskId];
        require(
            task.status == TaskStatus.WorkSubmitted || task.status == TaskStatus.ChangesRequested,
            "Invalid status for review"
        );
        require(proofRegistry.verifyReceipt(_taskId), "Proof not verified");

        task.status = TaskStatus.UnderReview;
        task.reviewDeadline = block.timestamp + REVIEW_WINDOW;

        emit ReviewStarted(_taskId, task.reviewDeadline);
    }

    /**
     * @notice Client accepts the work → money released.
     * Also allows auto-accept after review window expires.
     */
    function acceptWork(uint256 _taskId) external override taskExists(_taskId) {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.UnderReview, "Not under review");

        // Either client accepts OR review window has expired
        require(
            msg.sender == task.intent.client || block.timestamp >= task.reviewDeadline,
            "Only client or after timeout"
        );

        _release(task, _taskId);
        emit WorkAccepted(_taskId);
    }

    /**
     * @notice Client requests changes within original scope (free up to MAX_REVISIONS).
     */
    function requestChanges(uint256 _taskId, string calldata _reason)
        external
        override
        taskExists(_taskId)
        onlyClient(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.UnderReview, "Not under review");
        require(task.revisionCount < MAX_REVISIONS, "Max revisions reached");
        require(bytes(_reason).length > 0, "Reason required");

        task.status = TaskStatus.ChangesRequested;
        task.revisionCount += 1;
        task.lastChangeReason = _reason;
        task.reviewDeadline = 0;

        emit ChangesRequested(_taskId, _reason, task.revisionCount);
    }

    /**
     * @notice Freelancer submits a revision after changes were requested.
     */
    function submitRevision(uint256 _taskId, string calldata _deliveryHash)
        external
        override
        taskExists(_taskId)
        onlyFreelancer(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.ChangesRequested, "No changes requested");
        require(bytes(_deliveryHash).length > 0, "Empty delivery hash");

        task.deliveryHash = _deliveryHash;
        // Status stays ChangesRequested until new proof is registered and startReview is called again
        emit RevisionSubmitted(_taskId, _deliveryHash);
    }

    /**
     * @notice Request additional feature (new scope) → requires both approvals + top-up.
     */
    function requestAdditionalFeature(
        uint256 _taskId,
        Types.ChangeIntent calldata _change
    ) external override taskExists(_taskId) {
        EscrowTask storage task = tasks[_taskId];
        require(
            msg.sender == task.intent.client || msg.sender == task.intent.freelancer,
            "Not participant"
        );
        require(
            task.status == TaskStatus.UnderReview || task.status == TaskStatus.WorkSubmitted,
            "Invalid status"
        );
        require(_change.taskId == _taskId, "Task mismatch");
        require(
            _change.approvedByClient && _change.approvedByFreelancer,
            "Both approvals required"
        );

        // Client must send the additional funds
        if (_change.additionalBudget > 0) {
            require(
                token.transferFrom(task.intent.client, address(this), _change.additionalBudget),
                "Top-up failed"
            );
            task.additionalBudget += _change.additionalBudget;
        }

        if (_change.extendedDeadline > 0) {
            task.intent.deadline = _change.extendedDeadline;
        }
        if (bytes(_change.newSrsHash).length > 0) {
            task.intent.srsHash = _change.newSrsHash;
        }

        emit FeatureRequested(_taskId, _change.additionalBudget);
        emit ChangeIntentCreated(_taskId, _change.additionalBudget, _change.extendedDeadline);
    }
            // Keep original createChangeIntent for compatibility
    function createChangeIntent(
        uint256 _taskId,
        Types.ChangeIntent calldata _change
    ) external override taskExists(_taskId) {
        EscrowTask storage task = tasks[_taskId];

        require(
            msg.sender == task.intent.client || msg.sender == task.intent.freelancer,
            "Not participant"
        );
        require(_change.taskId == _taskId, "Task mismatch");
        require(
            _change.approvedByClient && _change.approvedByFreelancer,
            "Both approvals required"
        );

        if (_change.additionalBudget > 0) {
            require(
                token.transferFrom(task.intent.client, address(this), _change.additionalBudget),
                "Top-up failed"
            );
            task.additionalBudget += _change.additionalBudget;
        }

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
    

    // Keep old releasePayment for backward compatibility (now just calls accept path)
    function releasePayment(uint256 _taskId)
        external
        override
        taskExists(_taskId)
        onlyClient(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(
            task.status == TaskStatus.UnderReview || task.status == TaskStatus.WorkSubmitted,
            "Cannot release"
        );
        require(proofRegistry.verifyReceipt(_taskId), "Proof not verified");

        _release(task, _taskId);
    }

    // ========== FLOOR 6 — DISPUTE ==========

    function openDispute(
        uint256 _taskId,
        Types.DisputeEvidence calldata _evidence
    ) external override taskExists(_taskId) {
        EscrowTask storage task = tasks[_taskId];
        require(
            msg.sender == task.intent.client || msg.sender == task.intent.freelancer,
            "Not participant"
        );
        require(
            task.status == TaskStatus.UnderReview ||
            task.status == TaskStatus.ChangesRequested ||
            task.status == TaskStatus.WorkSubmitted,
            "Cannot dispute now"
        );
        require(_evidence.taskId == _taskId, "Task mismatch");
        require(bytes(_evidence.receiptHash).length > 0, "Missing evidence");

        task.status = TaskStatus.Disputed;
        emit DisputeOpened(_taskId);
    }

    /**
     * @notice Simple resolution for MVP (mock arbitrator).
     * Later this will be called by Kleros callback.
     * @param _clientWins true = client wins (freelancer loses bond + payment stays with client)
     */
    function resolveDispute(uint256 _taskId, bool _clientWins)
        external
        override
        taskExists(_taskId)
    {
        EscrowTask storage task = tasks[_taskId];
        require(task.status == TaskStatus.Disputed, "Not disputed");

        // For now anyone can call (will be restricted to arbitrator later)
        uint256 payment = task.intent.budget + task.additionalBudget;
        uint256 bond = task.freelancerBond;

        task.status = TaskStatus.Completed;
        task.freelancerBond = 0;

        if (_clientWins) {
            // Client keeps the budget, bond goes to client
            require(token.transfer(task.intent.client, payment + bond), "Transfer failed");
        } else {
            // Solver wins → normal release
            require(
                token.transfer(task.intent.freelancer, payment + bond),
                "Transfer failed"
            );
        }

        emit DisputeResolved(_taskId, _clientWins);
        emit PaymentReleased(_taskId, payment, bond);
    }

    // ========== INTERNAL ==========

    function _release(EscrowTask storage task, uint256 _taskId) internal {
        uint256 payment = task.intent.budget + task.additionalBudget;
        uint256 bond = task.freelancerBond;

        task.status = TaskStatus.Completed;
        task.freelancerBond = 0;

        require(
            token.transfer(task.intent.freelancer, payment + bond),
            "Payment failed"
        );

        emit PaymentReleased(_taskId, payment, bond);
    }

    // ========== VIEW ==========

    function getTask(uint256 _taskId)
        external
        view
        taskExists(_taskId)
        returns (EscrowTask memory)
    {
        return tasks[_taskId];
    }
}
