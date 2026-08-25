// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ITaskMarket {
    enum TaskStatus {
        Open,
        Assigned,
        InProgress,
        Submitted,
        Completed,
        Cancelled,
        Disputed
    }

    struct Task {
        uint256 taskId;
        address client;
        uint256 reward;
        bytes32 requirementsHash;
        TaskStatus status;
        address solver;
        uint256 createdAt;
        uint256 deadline;
        bytes32 submissionHash;
    }

    struct Bid {
        address solver;
        uint256 amount;
        uint256 submittedAt;
        bool accepted;
    }

    function createTask(
        bytes32 requirementsHash,
        uint256 deadline
    ) external payable returns (uint256 taskId);

    function submitBid(
        uint256 taskId,
        uint256 amount
    ) external;

    function acceptBid(
        uint256 taskId,
        address solver
    ) external;

    function startTask(
        uint256 taskId
    ) external;

    function submitWork(
        uint256 taskId,
        bytes32 submissionHash
    ) external;

    function getTask(
        uint256 taskId
    ) external view returns (Task memory);

    function getBids(
        uint256 taskId
    ) external view returns (Bid[] memory);
}