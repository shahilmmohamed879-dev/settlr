// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ITaskMarket} from "./interfaces/ITaskMarket.sol";

contract TaskMarket is ITaskMarket {
    struct MarketTask {
        address client;
        uint256 budget;
        string srsHash;
        address[] bidders;
        address winner;
        bool exists;
        bool winnerSelected;
    }

    uint256 public nextTaskId = 1;

    mapping(uint256 => MarketTask) public tasks;

    mapping(uint256 => mapping(address => bool)) public hasBid;

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
        address indexed freelancer
    );

    modifier taskExists(uint256 _taskId) {
        require(
            tasks[_taskId].exists,
            "Task does not exist"
        );
        _;
    }

    modifier onlyClient(uint256 _taskId) {
        require(
            msg.sender == tasks[_taskId].client,
            "Not client"
        );
        _;
    }

    function postTask(
        uint256 _budget,
        string calldata _srsHash
    )
        external
        override
        returns (uint256)
    {
        require(_budget > 0, "Invalid budget");
        require(
            bytes(_srsHash).length > 0,
            "Empty SRS hash"
        );

        uint256 taskId = nextTaskId++;

        MarketTask storage task = tasks[taskId];

        task.client = msg.sender;
        task.budget = _budget;
        task.srsHash = _srsHash;
        task.exists = true;

        emit TaskPosted(
            taskId,
            msg.sender,
            _budget,
            _srsHash
        );

        return taskId;
    }

    function submitBid(
        uint256 _taskId
    )
        external
        override
        taskExists(_taskId)
    {
        MarketTask storage task = tasks[_taskId];

        require(
            msg.sender != task.client,
            "Client cannot bid"
        );

        require(
            !task.winnerSelected,
            "Winner already selected"
        );

        require(
            !hasBid[_taskId][msg.sender],
            "Already bid"
        );

        hasBid[_taskId][msg.sender] = true;
        task.bidders.push(msg.sender);

        emit BidSubmitted(
            _taskId,
            msg.sender
        );
    }

    /*
     * Current interface does not contain a winner parameter.
     * Therefore the client selects from the submitted bidders
     * using the bidder index.
     */
    function selectWinner(
    uint256 _taskId,
    address _freelancer
)
    external
    override
    taskExists(_taskId)
    onlyClient(_taskId)
{
    MarketTask storage task = tasks[_taskId];

    require(!task.winnerSelected, "Winner already selected");
    require(task.bidders.length > 0, "No bidders");
    require(hasBid[_taskId][_freelancer], "Not a bidder");

    task.winner = _freelancer;
    task.winnerSelected = true;

    emit WinnerSelected(_taskId, _freelancer);
}

    function getBidders(
        uint256 _taskId
    )
        external
        view
        taskExists(_taskId)
        returns (address[] memory)
    {
        return tasks[_taskId].bidders;
    }

    function getWinner(
        uint256 _taskId
    )
        external
        view
        taskExists(_taskId)
        returns (address)
    {
        return tasks[_taskId].winner;
    }
}