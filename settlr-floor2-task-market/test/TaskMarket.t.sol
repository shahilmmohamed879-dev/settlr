// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {ITaskMarket} from "../src/interfaces/ITaskMarket.sol";

contract TaskMarketTest is Test {
    TaskMarket market;

    address client = address(1);
    address freelancer1 = address(2);
    address freelancer2 = address(3);
    address attacker = address(4);

    uint256 constant BUDGET = 1_000e6;
    uint256 constant BID_1 = 800e6;
    uint256 constant BID_2 = 700e6;

    uint256 deadline;

    function setUp() public {
        market = new TaskMarket();
        deadline = block.timestamp + 7 days;
    }

    function _postTask() internal returns (uint256) {
        vm.prank(client);

        return market.postTask(
            BUDGET,
            "QmSRSHash",
            deadline
        );
    }

    // =============================================================
    // TASK CREATION
    // =============================================================

    function testClientCanPostTask() public {
        uint256 taskId = _postTask();

        ITaskMarket.Task memory task = market.getTask(taskId);

        assertEq(task.taskId, taskId);
        assertEq(task.client, client);
        assertEq(task.budget, BUDGET);
        assertEq(task.srsHash, "QmSRSHash");
        assertEq(
            uint256(task.status),
            uint256(ITaskMarket.TaskStatus.Open)
        );
        assertEq(task.freelancer, address(0));
        assertEq(task.deadline, deadline);
        assertEq(task.submissionHash, bytes32(0));
    }

    function testTaskIdsIncrement() public {
        uint256 first = _postTask();

        vm.prank(client);

        uint256 second = market.postTask(
            BUDGET,
            "QmSecondSRS",
            deadline
        );

        assertEq(first, 1);
        assertEq(second, 2);
    }

    function testCannotCreateTaskWithZeroBudget() public {
        vm.prank(client);

        vm.expectRevert(TaskMarket.InvalidBudget.selector);

        market.postTask(
            0,
            "QmSRSHash",
            deadline
        );
    }

    function testCannotCreateTaskWithEmptySRS() public {
        vm.prank(client);

        vm.expectRevert(TaskMarket.InvalidSRSHash.selector);

        market.postTask(
            BUDGET,
            "",
            deadline
        );
    }

    function testCannotCreateTaskWithPastDeadline() public {
        vm.prank(client);

        vm.expectRevert(TaskMarket.InvalidDeadline.selector);

        market.postTask(
            BUDGET,
            "QmSRSHash",
            block.timestamp
        );
    }

    // =============================================================
    // BIDDING
    // =============================================================

    function testFreelancerCanSubmitBid() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);

        market.submitBid(taskId, BID_1);

        ITaskMarket.Bid[] memory bids =
            market.getBids(taskId);

        assertEq(bids.length, 1);
        assertEq(bids[0].freelancer, freelancer1);
        assertEq(bids[0].amount, BID_1);
        assertTrue(!bids[0].accepted);
    }

    function testMultipleFreelancersCanBid() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(freelancer2);
        market.submitBid(taskId, BID_2);

        ITaskMarket.Bid[] memory bids =
            market.getBids(taskId);

        assertEq(bids.length, 2);
        assertEq(bids[0].freelancer, freelancer1);
        assertEq(bids[0].amount, BID_1);
        assertEq(bids[1].freelancer, freelancer2);
        assertEq(bids[1].amount, BID_2);
    }

    function testClientCannotBid() public {
        uint256 taskId = _postTask();

        vm.prank(client);

        vm.expectRevert(TaskMarket.ClientCannotBid.selector);

        market.submitBid(taskId, BID_1);
    }

    function testFreelancerCannotBidTwice() public {
        uint256 taskId = _postTask();

        vm.startPrank(freelancer1);

        market.submitBid(taskId, BID_1);

        vm.expectRevert(TaskMarket.AlreadyBid.selector);

        market.submitBid(taskId, BID_1);

        vm.stopPrank();
    }

    function testCannotBidAboveBudget() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);

        vm.expectRevert(TaskMarket.InvalidBidAmount.selector);

        market.submitBid(taskId, BUDGET + 1);
    }

    function testCannotBidZero() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);

        vm.expectRevert(TaskMarket.InvalidBidAmount.selector);

        market.submitBid(taskId, 0);
    }

    function testCannotBidOnInvalidTask() public {
        vm.prank(freelancer1);

        vm.expectRevert(TaskMarket.TaskNotFound.selector);

        market.submitBid(999, BID_1);
    }

    // =============================================================
    // WINNER SELECTION
    // =============================================================

    function testClientCanSelectWinner() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(freelancer2);
        market.submitBid(taskId, BID_2);

        vm.prank(client);

        market.selectWinner(
            taskId,
            freelancer2
        );

        ITaskMarket.Task memory task =
            market.getTask(taskId);

        assertEq(task.freelancer, freelancer2);

        assertEq(
            uint256(task.status),
            uint256(ITaskMarket.TaskStatus.Assigned)
        );

        assertEq(
            market.getAcceptedBid(taskId),
            BID_2
        );
    }

    function testOnlyClientCanSelectWinner() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(attacker);

        vm.expectRevert(TaskMarket.NotClient.selector);

        market.selectWinner(
            taskId,
            freelancer1
        );
    }

    function testCannotSelectNonBidder() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);

        vm.expectRevert(TaskMarket.BidNotFound.selector);

        market.selectWinner(
            taskId,
            freelancer2
        );
    }

    function testCannotSelectWinnerTwice() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.expectRevert(TaskMarket.TaskNotOpen.selector);

        market.selectWinner(
            taskId,
            freelancer1
        );
    }

    // =============================================================
    // START TASK
    // =============================================================

    function testSelectedFreelancerCanStartTask() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.prank(freelancer1);
        market.startTask(taskId);

        ITaskMarket.Task memory task =
            market.getTask(taskId);

        assertEq(
            uint256(task.status),
            uint256(ITaskMarket.TaskStatus.InProgress)
        );
    }

    function testOtherFreelancerCannotStartTask() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.prank(freelancer2);

        vm.expectRevert(TaskMarket.NotFreelancer.selector);

        market.startTask(taskId);
    }

    function testCannotStartUnassignedTask() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);

        vm.expectRevert(TaskMarket.InvalidTaskStatus.selector);

        market.startTask(taskId);
    }

    // =============================================================
    // WORK SUBMISSION
    // =============================================================

    function testFreelancerCanSubmitWork() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.prank(freelancer1);
        market.startTask(taskId);

        bytes32 submissionHash =
            keccak256("submission");

        vm.prank(freelancer1);

        market.submitWork(
            taskId,
            submissionHash
        );

        ITaskMarket.Task memory task =
            market.getTask(taskId);

        assertEq(
            uint256(task.status),
            uint256(ITaskMarket.TaskStatus.Submitted)
        );

        assertEq(
            task.submissionHash,
            submissionHash
        );
    }

    function testOtherFreelancerCannotSubmitWork() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.prank(freelancer1);
        market.startTask(taskId);

        vm.prank(freelancer2);

        vm.expectRevert(TaskMarket.NotFreelancer.selector);

        market.submitWork(
            taskId,
            keccak256("submission")
        );
    }

    function testCannotSubmitEmptySubmissionHash() public {
        uint256 taskId = _postTask();

        vm.prank(freelancer1);
        market.submitBid(taskId, BID_1);

        vm.prank(client);
        market.selectWinner(
            taskId,
            freelancer1
        );

        vm.prank(freelancer1);
        market.startTask(taskId);

        vm.prank(freelancer1);

        vm.expectRevert(
            TaskMarket.InvalidSubmissionHash.selector
        );

        market.submitWork(
            taskId,
            bytes32(0)
        );
    }
}