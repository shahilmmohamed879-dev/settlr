// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Types} from "./Types.sol";
import {ITaskMarket} from "./interfaces/ITaskMarket.sol";
import {ISettlrEscrow} from "./interfaces/ISettlrEscrow.sol";

/**
 * @title SettlementOrchestrator
 * @notice Links TaskMarket winner selection to SettlrEscrow task creation.
 *         Client posts on market → bids → selects winner → creates linked escrow via this contract.
 */
contract SettlementOrchestrator {
    ITaskMarket public immutable market;
    ISettlrEscrow public immutable escrow;

    mapping(uint256 => uint256) public marketToEscrow; // marketTaskId => escrowTaskId
    mapping(uint256 => uint256) public escrowToMarket; // escrowTaskId => marketTaskId

    event EscrowCreatedFromMarket(
        uint256 indexed marketTaskId,
        uint256 indexed escrowTaskId,
        address indexed client,
        address freelancer,
        uint256 budget
    );

    constructor(address _market, address _escrow) {
        require(_market != address(0) && _escrow != address(0), "Invalid");
        market = ITaskMarket(_market);
        escrow = ISettlrEscrow(_escrow);
    }

    /**
     * @notice After market winner is selected, client creates the escrow task in one call.
     * @param marketTaskId TaskMarket id
     * @param deadline Unix deadline for the escrow work
     * @return escrowTaskId New id on SettlrEscrow
     */
    function createEscrowFromMarket(uint256 marketTaskId, uint256 deadline)
        external
        returns (uint256 escrowTaskId)
    {
        require(marketToEscrow[marketTaskId] == 0, "Already linked");

        (
            address client,
            uint256 budget,
            string memory srsHash,
            address winner,
            bool exists,
            bool winnerSelected
        ) = _readMarketTask(marketTaskId);

        require(exists, "Market task missing");
        require(winnerSelected, "No winner yet");
        require(msg.sender == client, "Not client");
        require(winner != address(0), "Invalid winner");
        require(deadline > block.timestamp, "Invalid deadline");

        Types.TaskIntent memory intent = Types.TaskIntent({
            client: client,
            freelancer: winner,
            budget: budget,
            deadline: deadline,
            srsHash: srsHash,
            createdAt: block.timestamp
        });

        escrowTaskId = escrow.createTask(intent);

        marketToEscrow[marketTaskId] = escrowTaskId;
        escrowToMarket[escrowTaskId] = marketTaskId;

        emit EscrowCreatedFromMarket(
            marketTaskId,
            escrowTaskId,
            client,
            winner,
            budget
        );
    }

    /// @dev TaskMarket.tasks public getter skips the dynamic bidders array.
    function _readMarketTask(uint256 taskId)
        internal
        view
        returns (
            address client,
            uint256 budget,
            string memory srsHash,
            address winner,
            bool exists,
            bool winnerSelected
        )
    {
        // Same order as MarketTask fields minus bidders[]
        (client, budget, srsHash, winner, exists, winnerSelected) =
            TaskMarketView(address(market)).tasks(taskId);
    }
}

/// Minimal view surface so we can decode the public mapping getter
interface TaskMarketView {
    function tasks(uint256)
        external
        view
        returns (
            address client,
            uint256 budget,
            string memory srsHash,
            address winner,
            bool exists,
            bool winnerSelected
        );
}