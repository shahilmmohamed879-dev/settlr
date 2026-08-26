```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ITaskMarket} from "./interfaces/ITaskMarket.sol";

contract TaskMarket is ITaskMarket {
    uint256 private _nextTaskId;

    mapping(uint256 => Task) private _tasks;
    mapping(uint256 => Bid[]) private _bids;

    event TaskCreated(
        uint256 indexed taskId,
        address indexed client,
        uint256 reward,
        bytes32 requirementsHash,
        uint256 deadline
    );

    event BidSubmitted(
        uint256 indexed taskId,
        address indexed solver,
        uint256 amount
    );

    event BidAccepted(
        uint256 indexed taskId,
        address indexed solver,
        uint256 amount
    );

    event TaskStarted(
        uint256 indexed taskId,
        address indexed solver
    );

    event WorkSubmitted(
        uint256 indexed taskId,
        address indexed solver,
        bytes32 submissionHash
    );

    error InvalidDeadline();
    error InvalidReward();
    error TaskNotFound();
    error TaskNotOpen();
    error NotTaskClient();
    error CannotBidOwnTask();
    error InvalidBidAmount();
    error BidNotFound();
    error BidAlreadyAccepted();
    error DeadlinePassed();
    error NotTaskSolver();
    error InvalidTaskStatus();
    error InvalidSubmissionHash();

    constructor() {
        _nextTaskId = 1;
    }

    // =============================================================
    // CREATE TASK
    // =============================================================

    function createTask(
        bytes32 requirementsHash,
        uint256 deadline
    ) external payable returns (uint256 taskId) {
        if (msg.value == 0) {
            revert InvalidReward();
        }

        if (deadline <= block.timestamp) {
            revert InvalidDeadline();
        }

        taskId = _nextTaskId++;

        _tasks[taskId] = Task({
            taskId: taskId,
            client: msg.sender,
            reward: msg.value,
            requirementsHash: requirementsHash,
            status: TaskStatus.Open,
            solver: address(0),
            createdAt: block.timestamp,
            deadline: deadline,
            submissionHash: bytes32(0)
        });

        emit TaskCreated(
            taskId,
            msg.sender,
            msg.value,
            requirementsHash,
            deadline
        );
    }

    // =============================================================
    // SUBMIT BID
    // =============================================================

    function submitBid(
        uint256 taskId,
        uint256 amount
    ) external {
        Task storage task = _getTask(taskId);

        if (task.status != TaskStatus.Open) {
            revert TaskNotOpen();
        }

        if (block.timestamp >= task.deadline) {
            revert DeadlinePassed();
        }

        if (msg.sender == task.client) {
            revert CannotBidOwnTask();
        }

        if (amount == 0 || amount > task.reward) {
            revert InvalidBidAmount();
        }

        _bids[taskId].push(
            Bid({
                solver: msg.sender,
                amount: amount,
                submittedAt: block.timestamp,
                accepted: false
            })
        );

        emit BidSubmitted(
            taskId,
            msg.sender,
            amount
        );
    }

    // =============================================================
    // ACCEPT BID
    // =============================================================

    function acceptBid(
        uint256 taskId,
        address solver
    ) external {
        Task storage task = _getTask(taskId);

        if (msg.sender != task.client) {
            revert NotTaskClient();
        }

        if (task.status != TaskStatus.Open) {
            revert TaskNotOpen();
        }

        Bid[] storage bids = _bids[taskId];

        for (uint256 i = 0; i < bids.length; i++) {
            if (bids[i].solver == solver) {
                if (bids[i].accepted) {
                    revert BidAlreadyAccepted();
                }

                bids[i].accepted = true;

                task.solver = solver;
                task.status = TaskStatus.Assigned;

                emit BidAccepted(
                    taskId,
                    solver,
                    bids[i].amount
                );

                return;
            }
        }

        revert BidNotFound();
    }

    // =============================================================
    // START TASK
    // =============================================================

    function startTask(
        uint256 taskId
    ) external {
        Task storage task = _getTask(taskId);

        if (task.status != TaskStatus.Assigned) {
            revert InvalidTaskStatus();
        }

        if (task.solver != msg.sender) {
            revert NotTaskSolver();
        }

        if (block.timestamp >= task.deadline) {
            revert DeadlinePassed();
        }

        task.status = TaskStatus.InProgress;

        emit TaskStarted(
            taskId,
            msg.sender
        );
    }

    // =============================================================
    // SUBMIT WORK
    // =============================================================

    function submitWork(
        uint256 taskId,
        bytes32 submissionHash
    ) external {
        Task storage task = _getTask(taskId);

        if (task.solver != msg.sender) {
            revert NotTaskSolver();
        }

        if (task.status != TaskStatus.InProgress) {
            revert InvalidTaskStatus();
        }

        if (block.timestamp >= task.deadline) {
            revert DeadlinePassed();
        }

        if (submissionHash == bytes32(0)) {
            revert InvalidSubmissionHash();
        }

        task.submissionHash = submissionHash;
        task.status = TaskStatus.Submitted;

        emit WorkSubmitted(
            taskId,
            msg.sender,
            submissionHash
        );
    }

    // =============================================================
    // GET TASK
    // =============================================================

    function getTask(
        uint256 taskId
    ) external view returns (Task memory) {
        return _getTask(taskId);
    }

    // =============================================================
    // GET BIDS
    // =============================================================

    function getBids(
        uint256 taskId
    ) external view returns (Bid[] memory) {
        _getTask(taskId);

        return _bids[taskId];
    }

    // =============================================================
    // INTERNAL TASK LOOKUP
    // =============================================================

    function _getTask(
        uint256 taskId
    ) internal view returns (Task storage task) {
        task = _tasks[taskId];

        if (task.client == address(0)) {
            revert TaskNotFound();
        }
    }
}
```
