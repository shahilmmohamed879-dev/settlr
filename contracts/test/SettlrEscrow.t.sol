// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {Types} from "../src/Types.sol";

contract MockUSDC {
    string public name = "Mock USDC";
    string public symbol = "USDC";
    uint8 public decimals = 6;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(address to, uint256 amount) external {
        balanceOf[to] += amount;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;

        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool) {
        require(balanceOf[from] >= amount, "Insufficient balance");
        require(
            allowance[from][msg.sender] >= amount,
            "Insufficient allowance"
        );

        allowance[from][msg.sender] -= amount;
        balanceOf[from] -= amount;
        balanceOf[to] += amount;

        return true;
    }
}

contract SettlrEscrowTest is Test {
    MockUSDC token;
    ProofRegistry proofRegistry;
    SettlrEscrow escrow;

    address owner = address(1);
    address client = address(2);
    address freelancer = address(3);
    address attacker = address(4);

    uint256 constant BUDGET = 1_000e6;
    uint256 constant TASK_ID = 1;

    function setUp() public {
        vm.prank(owner);
        proofRegistry = new ProofRegistry(address(this));

        escrow = new SettlrEscrow(
            address(token = new MockUSDC()),
            address(proofRegistry)
        );

        token.mint(client, 100_000e6);
        token.mint(freelancer, 100_000e6);

        vm.prank(client);
        token.approve(address(escrow), type(uint256).max);

        vm.prank(freelancer);
        token.approve(address(escrow), type(uint256).max);
    }

    function _createTask() internal {
        Types.TaskIntent memory intent = Types.TaskIntent({
            client: client,
            freelancer: freelancer,
            budget: BUDGET,
            deadline: block.timestamp + 7 days,
            srsHash: "QmSRSHash",
            createdAt: block.timestamp
        });

        vm.prank(client);
        escrow.createTask(intent);
    }

    function _fundTask() internal {
        _createTask();

        vm.prank(client);
        escrow.fundTask(TASK_ID);
    }

    function _lockBond() internal {
        _fundTask();

        vm.prank(freelancer);
        escrow.lockFreelancerBond(TASK_ID);
    }

    function _submitWork() internal {
        _lockBond();

        vm.prank(freelancer);
        escrow.submitWork(TASK_ID, "QmDeliveryHash");
    }

    function testCreateTask() public {
        _createTask();

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(TASK_ID);

        assertEq(task.intent.client, client);
        assertEq(task.intent.freelancer, freelancer);
        assertEq(task.intent.budget, BUDGET);
        assertEq(task.intent.srsHash, "QmSRSHash");
        assertEq(
            uint256(task.status),
            uint256(SettlrEscrow.TaskStatus.Created)
        );
    }

    function testClientCanFundTask() public {
        _createTask();

        uint256 clientBefore = token.balanceOf(client);

        vm.prank(client);
        escrow.fundTask(TASK_ID);

        assertEq(
            token.balanceOf(client),
            clientBefore - BUDGET
        );

        assertEq(
            token.balanceOf(address(escrow)),
            BUDGET
        );

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(TASK_ID);

        assertEq(
            uint256(task.status),
            uint256(SettlrEscrow.TaskStatus.Funded)
        );
    }

    function testFreelancerCanLockBond() public {
        _fundTask();

        uint256 expectedBond = BUDGET * 2_000 / 10_000;

        vm.prank(freelancer);
        escrow.lockFreelancerBond(TASK_ID);

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(TASK_ID);

        assertEq(task.freelancerBond, expectedBond);

        assertEq(
            uint256(task.status),
            uint256(SettlrEscrow.TaskStatus.BondLocked)
        );

        assertEq(
            token.balanceOf(address(escrow)),
            BUDGET + expectedBond
        );
    }

    function testFreelancerCanSubmitWork() public {
        _lockBond();

        vm.prank(freelancer);
        escrow.submitWork(
            TASK_ID,
            "QmDeliveryHash"
        );

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(TASK_ID);

        assertEq(
            task.deliveryHash,
            "QmDeliveryHash"
        );

        assertEq(
            uint256(task.status),
            uint256(SettlrEscrow.TaskStatus.WorkSubmitted)
        );
    }

    function testCannotFundTaskTwice() public {
        _fundTask();

        vm.prank(client);

        vm.expectRevert("Invalid status");

        escrow.fundTask(TASK_ID);
    }

    function testOnlyFreelancerCanLockBond() public {
        _fundTask();

        vm.prank(attacker);

        vm.expectRevert("Not freelancer");

        escrow.lockFreelancerBond(TASK_ID);
    }

    function testCannotSubmitWorkBeforeBond() public {
        _fundTask();

        vm.prank(freelancer);

        vm.expectRevert("Bond not locked");

        escrow.submitWork(
            TASK_ID,
            "QmDeliveryHash"
        );
    }

    function testCannotSubmitEmptyDeliveryHash() public {
        _lockBond();

        vm.prank(freelancer);

        vm.expectRevert("Empty delivery hash");

        escrow.submitWork(TASK_ID, "");
    }

    function testCannotReleaseBeforeProof() public {
        _submitWork();

        vm.prank(client);

        vm.expectRevert("Proof not verified");

        escrow.releasePayment(TASK_ID);
    }

    function testCannotOpenDisputeWithWrongTaskId() public {
        _createTask();

        Types.DisputeEvidence memory evidence =
            Types.DisputeEvidence({
                taskId: 999,
                receiptHash: "receipt",
                srsHash: "QmSRSHash",
                changeIntentHash: "",
                timestamp: block.timestamp
            });

        vm.prank(client);

        vm.expectRevert("Cannot dispute now");

        escrow.openDispute(
            TASK_ID,
            evidence
        );
    }

    function testClientAndFreelancerCanCreateApprovedChange() public {
        _createTask();

        Types.ChangeIntent memory change =
            Types.ChangeIntent({
                taskId: TASK_ID,
                newSrsHash: "QmNewSRS",
                additionalBudget: 200e6,
                extendedDeadline: block.timestamp + 14 days,
                approvedByClient: true,
                approvedByFreelancer: true
            });

        vm.prank(client);

        escrow.createChangeIntent(
            TASK_ID,
            change
        );

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(TASK_ID);

        assertEq(
            task.additionalBudget,
            200e6
        );

        assertEq(
            task.intent.srsHash,
            "QmNewSRS"
        );
    }
}