// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SettlrTaskMarket
 * @notice Floor 3 of SETTLR.
 * Handles task creation, freelancer bidding, and winner selection.
 */
contract SettlrTaskMarket {
    enum TaskStatus {
        OPEN,
        ASSIGNED
    }

    struct Task {
        uint256 id;
        address client;
        address selectedFreelancer;
        uint256 budget;
        string srsHash;
        uint256 createdAt;
        TaskStatus status;
        bool exists;
    }

    uint256 private nextTaskId;

    mapping(uint256 => Task) private tasks;

    mapping(uint256 => mapping(address => bool)) private hasBid;

    mapping(uint256 => address[]) private bidders;

    event TaskPosted(
        uint256 indexed taskId,
        address indexed client,
        uint256 budget,
        string srsHash
    );

    event BidSubmitted(
        uint256 indexed taskId,
        address indexed freelancer
    );

    event WinnerSelected(
        uint256 indexed taskId,
        address indexed client,
        address indexed freelancer
    );

    function postTask(
        uint256 _budget,
        string calldata _srsHash
    ) external returns (uint256 taskId) {
        require(_budget > 0, "Budget must be greater than zero");
        require(bytes(_srsHash).length > 0, "SRS hash required");

        taskId = nextTaskId;
        nextTaskId++;

        tasks[taskId] = Task({
            id: taskId,
            client: msg.sender,
            selectedFreelancer: address(0),
            budget: _budget,
            srsHash: _srsHash,
            createdAt: block.timestamp,
            status: TaskStatus.OPEN,
            exists: true
        });

        emit TaskPosted(taskId, msg.sender, _budget, _srsHash);
    }

    function submitBid(uint256 _taskId) external {
        require(tasks[_taskId].exists, "Task does not exist");

        Task storage task = tasks[_taskId];

        require(task.status == TaskStatus.OPEN, "Task is not open");
        require(msg.sender != task.client, "Client cannot bid");
        require(!hasBid[_taskId][msg.sender], "Bid already submitted");

        hasBid[_taskId][msg.sender] = true;
        bidders[_taskId].push(msg.sender);

        emit BidSubmitted(_taskId, msg.sender);
    }

    function selectWinner(
        uint256 _taskId,
        address _freelancer
    ) external {
        require(tasks[_taskId].exists, "Task does not exist");

        Task storage task = tasks[_taskId];

        require(msg.sender == task.client, "Only client can select");
        require(task.status == TaskStatus.OPEN, "Freelancer already selected");
        require(
            hasBid[_taskId][_freelancer],
            "Freelancer did not submit a bid"
        );

        task.selectedFreelancer = _freelancer;
        task.status = TaskStatus.ASSIGNED;

        emit WinnerSelected(_taskId, task.client, _freelancer);
    }

    function getTask(
        uint256 _taskId
    ) external view returns (Task memory) {
        require(tasks[_taskId].exists, "Task does not exist");
        return tasks[_taskId];
    }

    function getBidders(
        uint256 _taskId
    ) external view returns (address[] memory) {
        require(tasks[_taskId].exists, "Task does not exist");
        return bidders[_taskId];
    }

    function hasSubmittedBid(
        uint256 _taskId,
        address _freelancer
    ) external view returns (bool) {
        require(tasks[_taskId].exists, "Task does not exist");
        return hasBid[_taskId][_freelancer];
    }
}