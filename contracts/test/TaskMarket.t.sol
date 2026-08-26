// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {ITaskMarket} from "../src/interfaces/ITaskMarket.sol";

contract TaskMarketTest is Test {
    TaskMarket internal taskMarket;

    address internal client;
    address internal solver;
    address internal anotherSolver;

    uint256 internal constant TASK_REWARD = 1 ether;
    uint256 internal constant BID_AMOUNT = 0.7 ether;
    uint256 internal constant SECOND_BID_AMOUNT = 0.5 ether;

    bytes32 internal constant REQUIREMENTS_HASH =
        keccak256("SETTLR-TASK-REQUIREMENTS");

    bytes32 internal constant SUBMISSION_HASH =
        keccak256("SETTLR-WORK-SUBMISSION");

    bytes32 internal constant SECOND_SUBMISSION_HASH =
        keccak256("SETTLR-SECOND-SUBMISSION");

    function setUp() public {
        taskMarket = new TaskMarket();

        client = makeAddr("client");
        solver = makeAddr("solver");
        anotherSolver = makeAddr("anotherSolver");

        vm.deal(client, 10 ether);
        vm.deal(solver, 10 ether);
        vm.deal(anotherSolver, 10 ether);
    }

    // =============================================================
    // HELPERS
    // =============================================================

    function _createTask() internal returns (uint256 taskId) {
        uint256 deadline = block.timestamp + 7 days;

        vm.prank(client);

        taskId = taskMarket.createTask{value: TASK_REWARD}(
            REQUIREMENTS_HASH,
            deadline
        );
    }

    function _createAndAssignTask()
        internal
        returns (uint256 taskId)
    {
        taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        vm.prank(client);

        taskMarket.acceptBid(
            taskId,
            solver
        );
    }

    function _createAndStartTask()
        internal
        returns (uint256 taskId)
    {
        taskId = _createAndAssignTask();

        vm.prank(solver);

        taskMarket.startTask(taskId);
    }

    // =============================================================
    // TASK CREATION
    // =============================================================

    function testCreateTask() public {
        uint256 deadline = block.timestamp + 7 days;

        vm.prank(client);

        uint256 taskId = taskMarket.createTask{value: TASK_REWARD}(
            REQUIREMENTS_HASH,
            deadline
        );

        ITaskMarket.Task memory task =
            taskMarket.getTask(taskId);

        assertEq(task.taskId, taskId);
        assertEq(task.client, client);
        assertEq(task.reward, TASK_REWARD);
        assertEq(
            task.requirementsHash,
            REQUIREMENTS_HASH
        );

        assertEq(
            uint256(task.status),
            uint256(
                ITaskMarket.TaskStatus.Open
            )
        );

        assertEq(task.solver, address(0));
        assertEq(task.createdAt, block.timestamp);
        assertEq(task.deadline, deadline);
        assertEq(task.submissionHash, bytes32(0));
    }

    function testCannotCreateTaskWithZeroReward() public {
        uint256 deadline = block.timestamp + 7 days;

        vm.prank(client);

        vm.expectRevert(
            TaskMarket.InvalidReward.selector
        );

        taskMarket.createTask{value: 0}(
            REQUIREMENTS_HASH,
            deadline
        );
    }

    function testCannotCreateTaskWithPastDeadline() public {
        uint256 deadline = block.timestamp - 1;

        vm.prank(client);

        vm.expectRevert(
            TaskMarket.InvalidDeadline.selector
        );

        taskMarket.createTask{value: TASK_REWARD}(
            REQUIREMENTS_HASH,
            deadline
        );
    }

    // =============================================================
    // BIDDING
    // =============================================================

    function testSubmitBid() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        ITaskMarket.Bid[] memory bids =
            taskMarket.getBids(taskId);

        assertEq(bids.length, 1);
        assertEq(bids[0].solver, solver);
        assertEq(bids[0].amount, BID_AMOUNT);
        assertFalse(bids[0].accepted);
    }

    function testMultipleSolversCanBid() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        vm.prank(anotherSolver);

        taskMarket.submitBid(
            taskId,
            SECOND_BID_AMOUNT
        );

        ITaskMarket.Bid[] memory bids =
            taskMarket.getBids(taskId);

        assertEq(bids.length, 2);

        assertEq(
            bids[0].solver,
            solver
        );

        assertEq(
            bids[0].amount,
            BID_AMOUNT
        );

        assertEq(
            bids[1].solver,
            anotherSolver
        );

        assertEq(
            bids[1].amount,
            SECOND_BID_AMOUNT
        );
    }

    function testCannotSubmitZeroBid() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidBidAmount.selector
        );

        taskMarket.submitBid(
            taskId,
            0
        );
    }

    function testCannotSubmitBidAboveReward() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidBidAmount.selector
        );

        taskMarket.submitBid(
            taskId,
            TASK_REWARD + 1
        );
    }

    function testClientCannotBidOnOwnTask() public {
        uint256 taskId = _createTask();

        vm.prank(client);

        vm.expectRevert(
            TaskMarket.CannotBidOwnTask.selector
        );

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );
    }

    function testCannotBidAfterDeadline() public {
        uint256 taskId = _createTask();

        vm.warp(
            block.timestamp + 7 days
        );

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.DeadlinePassed.selector
        );

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );
    }

    // =============================================================
    // BID ACCEPTANCE
    // =============================================================

    function testAcceptBid() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        vm.prank(client);

        taskMarket.acceptBid(
            taskId,
            solver
        );

        ITaskMarket.Task memory task =
            taskMarket.getTask(taskId);

        assertEq(
            task.solver,
            solver
        );

        assertEq(
            uint256(task.status),
            uint256(
                ITaskMarket.TaskStatus.Assigned
            )
        );

        ITaskMarket.Bid[] memory bids =
            taskMarket.getBids(taskId);

        assertTrue(
            bids[0].accepted
        );
    }

    function testOnlyClientCanAcceptBid() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        vm.prank(anotherSolver);

        vm.expectRevert(
            TaskMarket.NotTaskClient.selector
        );

        taskMarket.acceptBid(
            taskId,
            solver
        );
    }

    function testCannotAcceptNonexistentBid() public {
        uint256 taskId = _createTask();

        vm.prank(client);

        vm.expectRevert(
            TaskMarket.BidNotFound.selector
        );

        taskMarket.acceptBid(
            taskId,
            solver
        );
    }

    function testCannotAcceptAnotherBidAfterAssignment() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        taskMarket.submitBid(
            taskId,
            BID_AMOUNT
        );

        vm.prank(anotherSolver);

        taskMarket.submitBid(
            taskId,
            SECOND_BID_AMOUNT
        );

        vm.prank(client);

        taskMarket.acceptBid(
            taskId,
            solver
        );

        vm.prank(client);

        vm.expectRevert(
            TaskMarket.TaskNotOpen.selector
        );

        taskMarket.acceptBid(
            taskId,
            anotherSolver
        );
    }

    function testCannotBidAfterAssignment() public {
        uint256 taskId =
            _createAndAssignTask();

        vm.prank(anotherSolver);

        vm.expectRevert(
            TaskMarket.TaskNotOpen.selector
        );

        taskMarket.submitBid(
            taskId,
            SECOND_BID_AMOUNT
        );
    }

    // =============================================================
    // START TASK
    // =============================================================

    function testSolverCanStartAssignedTask() public {
        uint256 taskId =
            _createAndAssignTask();

        vm.prank(solver);

        taskMarket.startTask(taskId);

        ITaskMarket.Task memory task =
            taskMarket.getTask(taskId);

        assertEq(
            uint256(task.status),
            uint256(
                ITaskMarket.TaskStatus.InProgress
            )
        );

        assertEq(
            task.solver,
            solver
        );
    }

    function testWrongSolverCannotStartTask() public {
        uint256 taskId =
            _createAndAssignTask();

        vm.prank(anotherSolver);

        vm.expectRevert(
            TaskMarket.NotTaskSolver.selector
        );

        taskMarket.startTask(taskId);
    }

    function testCannotStartUnassignedTask() public {
        uint256 taskId = _createTask();

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidTaskStatus.selector
        );

        taskMarket.startTask(taskId);
    }

    function testCannotStartTaskAfterDeadline() public {
        uint256 taskId =
            _createAndAssignTask();

        vm.warp(
            block.timestamp + 7 days
        );

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.DeadlinePassed.selector
        );

        taskMarket.startTask(taskId);
    }

    // =============================================================
    // WORK SUBMISSION
    // =============================================================

    function testSolverCanSubmitWork() public {
        uint256 taskId =
            _createAndStartTask();

        vm.prank(solver);

        taskMarket.submitWork(
            taskId,
            SUBMISSION_HASH
        );

        ITaskMarket.Task memory task =
            taskMarket.getTask(taskId);

        assertEq(
            uint256(task.status),
            uint256(
                ITaskMarket.TaskStatus.Submitted
            )
        );

        assertEq(
            task.submissionHash,
            SUBMISSION_HASH
        );
    }

    function testWrongSolverCannotSubmitWork() public {
        uint256 taskId =
            _createAndStartTask();

        vm.prank(anotherSolver);

        vm.expectRevert(
            TaskMarket.NotTaskSolver.selector
        );

        taskMarket.submitWork(
            taskId,
            SUBMISSION_HASH
        );
    }

    function testCannotSubmitWorkBeforeStarting() public {
        uint256 taskId =
            _createAndAssignTask();

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidTaskStatus.selector
        );

        taskMarket.submitWork(
            taskId,
            SUBMISSION_HASH
        );
    }

    function testCannotSubmitEmptySubmissionHash() public {
        uint256 taskId =
            _createAndStartTask();

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidSubmissionHash.selector
        );

        taskMarket.submitWork(
            taskId,
            bytes32(0)
        );
    }

    function testCannotSubmitWorkAfterDeadline() public {
        uint256 taskId =
            _createAndStartTask();

        vm.warp(
            block.timestamp + 7 days
        );

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.DeadlinePassed.selector
        );

        taskMarket.submitWork(
            taskId,
            SUBMISSION_HASH
        );
    }

    function testCannotSubmitWorkTwice() public {
        uint256 taskId =
            _createAndStartTask();

        vm.prank(solver);

        taskMarket.submitWork(
            taskId,
            SUBMISSION_HASH
        );

        vm.prank(solver);

        vm.expectRevert(
            TaskMarket.InvalidTaskStatus.selector
        );

        taskMarket.submitWork(
            taskId,
            SECOND_SUBMISSION_HASH
        );
    }

    // =============================================================
    // TASK LOOKUPS
    // =============================================================

    function testCannotGetNonexistentTask() public {
        vm.expectRevert(
            TaskMarket.TaskNotFound.selector
        );

        taskMarket.getTask(999);
    }

    function testCannotGetBidsForNonexistentTask() public {
        vm.expectRevert(
            TaskMarket.TaskNotFound.selector
        );

        taskMarket.getBids(999);
    }
}