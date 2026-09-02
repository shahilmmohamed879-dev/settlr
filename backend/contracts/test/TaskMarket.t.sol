// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";

contract TaskMarketTest is Test {
    TaskMarket market;

    address client = address(1);
    address freelancer1 = address(2);
    address freelancer2 = address(3);
    address attacker = address(4);

    uint256 constant BUDGET = 1_000e6;

    function setUp() public {
        market = new TaskMarket();
    }

    function _postTask() internal returns (uint256) {
        vm.prank(client);

        return market.postTask(
            BUDGET,
            "QmSRSHash"
        );
    }

    // ---------------------------------------------------------
    // TASK CREATION
    // ---------------------------------------------------------

    function testClientCanPostTask() public {
        uint256 taskId = _postTask();

        (
            address taskClient,
            uint256 budget,
            string memory srsHash,
            ,
            bool exists,
            bool winnerSelected
        ) = market.tasks(taskId);

        assertEq(taskClient, client);
        assertEq(budget, BUDGET);
        assertEq(srsHash, "QmSRSHash");
        assertTrue(exists);
        assertFalse(winnerSelected);
    }

    function testTaskIdsIncrement() public {
        uint256 first = _postTask();

        vm.prank(client);

        uint256 second = market.postTask(
            BUDGET,
            "QmSecondSRS"
        );

        assertEq(first, 1);
        assertEq(second, 2);
    }

    // ---------------------------------------------------------
    // BIDDING
    // ---------------------------------------------------------

    function testFreelancerCanSubmitBid() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);

        market.submitBid(taskId);

        address[] memory bidders =
            market.getBidders(taskId);

        assertEq(bidders.length, 1);
        assertEq(bidders[0], freelancer1);
    }

    function testMultipleFreelancersCanBid() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId);

        vm.prank(freelancer2);
        market.submitBid(taskId);

        address[] memory bidders =
            market.getBidders(taskId);

        assertEq(bidders.length, 2);
        assertEq(bidders[0], freelancer1);
        assertEq(bidders[1], freelancer2);
    }

    function testClientCannotBid() public {
        uint256 taskId = _postTask();

        vm.prank(client);

        vm.expectRevert("Client cannot bid");

        market.submitBid(taskId);
    }

    function testFreelancerCannotBidTwice() public {
        uint256 taskId = _postTask();

        vm.startPrank(freelancer1);

        market.submitBid(taskId);

        vm.expectRevert("Already bid");

        market.submitBid(taskId);

        vm.stopPrank();
    }

    function testCannotBidOnInvalidTask() public {
        vm.prank(freelancer1);

        vm.expectRevert("Task does not exist");

        market.submitBid(999);
    }

    // ---------------------------------------------------------
    // WINNER SELECTION
    // ---------------------------------------------------------

    function testClientCanSelectWinner() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId);

        vm.prank(client);
        market.selectWinner(taskId, freelancer1);

        assertEq(
            market.getWinner(taskId),
            freelancer1
        );
    }

    function testClientCanSelectSpecificBidder() public {
    uint256 taskId = _postTask();

    vm.prank(freelancer1);
    market.submitBid(taskId);

    vm.prank(freelancer2);
    market.submitBid(taskId);

    vm.prank(client);
    market.selectWinner(taskId, freelancer2);

    assertEq(market.getWinner(taskId), freelancer2);
}

function testCannotSelectNonBidder() public {
    uint256 taskId = _postTask();

    vm.prank(freelancer1);
    market.submitBid(taskId);

    vm.prank(client);
    vm.expectRevert("Not a bidder");
    market.selectWinner(taskId, freelancer2);
}

    function testCannotSelectWinnerWithoutBids() public {
        uint256 taskId = _postTask();

        vm.prank(client);

        vm.expectRevert("No bidders");

        market.selectWinner(taskId, freelancer1);
    }

    function testOnlyClientCanSelectWinner() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId);

        vm.prank(attacker);

        vm.expectRevert("Not client");

        market.selectWinner(taskId, freelancer1);
    }

    function testCannotSelectWinnerTwice() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId);

        vm.prank(client);
        market.selectWinner(taskId, freelancer1);

        vm.prank(client);

        vm.expectRevert("Winner already selected");

        market.selectWinner(taskId, freelancer1);
    }

    function testCannotBidAfterWinnerSelected() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId);

        vm.prank(client);
        market.selectWinner(taskId, freelancer1);

        vm.prank(freelancer2);

        vm.expectRevert("Winner already selected");

        market.submitBid(taskId);
    }
}