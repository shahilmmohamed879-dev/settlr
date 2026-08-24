// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {SettlrTaskMarket} from "../src/SettlrTaskMarket.sol";

contract SettlrTaskMarketTest is Test {
    SettlrTaskMarket taskMarket;

    address client = address(0x1);
    address freelancer1 = address(0x2);
    address freelancer2 = address(0x3);
    address stranger = address(0x4);

    string constant SRS_HASH = "QmSettlrSRSHash123";

    function setUp() public {
        taskMarket = new SettlrTaskMarket();
    }

    function _createTask() internal returns (uint256) {
        vm.prank(client);
        return taskMarket.postTask(1000, SRS_HASH);
    }

    // 1. Client can create a task
    function test_PostTask() public {
        uint256 taskId = _createTask();

        SettlrTaskMarket.Task memory task = taskMarket.getTask(taskId);

        assertEq(task.id, taskId);
        assertEq(task.client, client);
        assertEq(task.budget, 1000);
        assertEq(task.srsHash, SRS_HASH);
        assertEq(
            uint256(task.status),
            uint256(SettlrTaskMarket.TaskStatus.OPEN)
        );
    }

    // 2. Zero budget is rejected
    function test_RevertWhen_ZeroBudget() public {
        vm.prank(client);

        vm.expectRevert("Budget must be greater than zero");
        taskMarket.postTask(0, SRS_HASH);
    }

    // 3. Empty SRS hash is rejected
    function test_RevertWhen_EmptySrsHash() public {
        vm.prank(client);

        vm.expectRevert("SRS hash required");
        taskMarket.postTask(1000, "");
    }

    // 4. Freelancer can submit a bid
    function test_SubmitBid() public {
        uint256 taskId = _createTask();

        vm.prank(freelancer1);
        taskMarket.submitBid(taskId);

        assertTrue(
            taskMarket.hasSubmittedBid(taskId, freelancer1)
        );

        address[] memory bidders = taskMarket.getBidders(taskId);

        assertEq(bidders.length, 1);
        assertEq(bidders[0], freelancer1);
    }

    // 5. Duplicate bids are rejected
    function test_RevertWhen_DuplicateBid() public {
        uint256 taskId = _createTask();

        vm.startPrank(freelancer1);

        taskMarket.submitBid(taskId);

        vm.expectRevert("Bid already submitted");
        taskMarket.submitBid(taskId);

        vm.stopPrank();
    }

    // 6. Client cannot bid on own task
    function test_RevertWhen_ClientBidsOnOwnTask() public {
        uint256 taskId = _createTask();

        vm.prank(client);

        vm.expectRevert("Client cannot bid");
        taskMarket.submitBid(taskId);
    }

    // 7. Multiple freelancers can bid
    function test_MultipleFreelancersCanBid() public {
        uint256 taskId = _createTask();

        vm.prank(freelancer1);
        taskMarket.submitBid(taskId);

        vm.prank(freelancer2);
        taskMarket.submitBid(taskId);

        address[] memory bidders = taskMarket.getBidders(taskId);

        assertEq(bidders.length, 2);
        assertEq(bidders[0], freelancer1);
        assertEq(bidders[1], freelancer2);
    }

    // 8. Only the client can select the winner
    function test_RevertWhen_NonClientSelectsWinner() public {
        uint256 taskId = _createTask();

        vm.prank(freelancer1);
        taskMarket.submitBid(taskId);

        vm.prank(stranger);

        vm.expectRevert("Only client can select");
        taskMarket.selectWinner(taskId, freelancer1);
    }

    // 9. Client cannot select someone who did not bid
    function test_RevertWhen_SelectingNonBidder() public {
        uint256 taskId = _createTask();

        vm.prank(client);

        vm.expectRevert("Freelancer did not submit a bid");
        taskMarket.selectWinner(taskId, freelancer1);
    }

    // 10. Client can select a valid bidder
    function test_SelectWinner() public {
        uint256 taskId = _createTask();

        vm.prank(freelancer1);
        taskMarket.submitBid(taskId);

        vm.prank(client);
        taskMarket.selectWinner(taskId, freelancer1);

        SettlrTaskMarket.Task memory task =
            taskMarket.getTask(taskId);

        assertEq(task.selectedFreelancer, freelancer1);

        assertEq(
            uint256(task.status),
            uint256(SettlrTaskMarket.TaskStatus.ASSIGNED)
        );
    }

    // 11. Winner cannot be selected twice
    function test_RevertWhen_SelectWinnerTwice() public {
        uint256 taskId = _createTask();

        vm.prank(freelancer1);
        taskMarket.submitBid(taskId);

        vm.prank(freelancer2);
        taskMarket.submitBid(taskId);

        vm.prank(client);
        taskMarket.selectWinner(taskId, freelancer1);

        vm.prank(client);

        vm.expectRevert("Freelancer already selected");
        taskMarket.selectWinner(taskId, freelancer2);
    }
}