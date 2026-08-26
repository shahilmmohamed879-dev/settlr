// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {ITaskMarket} from "../src/interfaces/ITaskMarket.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {Types} from "../src/Types.sol";

contract IntegrationMockUSDC {
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(
        address to,
        uint256 amount
    ) external {
        balanceOf[to] += amount;
    }

    function approve(
        address spender,
        uint256 amount
    ) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transfer(
        address to,
        uint256 amount
    ) external returns (bool) {
        require(
            balanceOf[msg.sender] >= amount,
            "Insufficient balance"
        );

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;

        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool) {
        require(
            balanceOf[from] >= amount,
            "Insufficient balance"
        );

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

contract IntegrationTest is Test {
    TaskMarket market;
    SettlrEscrow escrow;
    ProofRegistry proofRegistry;
    IntegrationMockUSDC token;

    address owner = address(1);
    address client = address(2);
    address freelancer = address(3);

    uint256 constant BUDGET = 1_000e6;
    uint256 constant MARKET_REWARD = 1 ether;

    bytes32 constant REQUIREMENTS_HASH =
        keccak256("QmSRSHash");

    bytes32 constant SUBMISSION_HASH =
        keccak256("QmDeliveryHash");

    function setUp() public {
        // Deploy mock token
        token = new IntegrationMockUSDC();

        // Deploy proof registry
        vm.prank(owner);

        proofRegistry = new ProofRegistry(
            address(this)
        );

        // Deploy escrow
        escrow = new SettlrEscrow(
            address(token),
            address(proofRegistry)
        );

        // Deploy Floor 2 TaskMarket
        market = new TaskMarket();

        // Give client USDC
        token.mint(
            client,
            100_000e6
        );

        // Give freelancer USDC
        token.mint(
            freelancer,
            100_000e6
        );

        // Client approves escrow
        vm.prank(client);

        token.approve(
            address(escrow),
            type(uint256).max
        );

        // Freelancer approves escrow
        vm.prank(freelancer);

        token.approve(
            address(escrow),
            type(uint256).max
        );

        // Give client ETH for TaskMarket reward
        vm.deal(
            client,
            10 ether
        );

        // Give freelancer ETH for testing
        vm.deal(
            freelancer,
            10 ether
        );
    }

    function testCompleteTaskSettlementFlow() public {
        // =========================================================
        // 1. CLIENT CREATES TASK
        // =========================================================

        uint256 deadline =
            block.timestamp + 7 days;

        vm.prank(client);

        uint256 marketTaskId =
            market.createTask{value: MARKET_REWARD}(
                REQUIREMENTS_HASH,
                deadline
            );

        assertEq(
            marketTaskId,
            1
        );

        ITaskMarket.Task memory marketTask =
            market.getTask(marketTaskId);

        assertEq(
            marketTask.taskId,
            marketTaskId
        );

        assertEq(
            marketTask.client,
            client
        );

        assertEq(
            marketTask.reward,
            MARKET_REWARD
        );

        assertEq(
            marketTask.requirementsHash,
            REQUIREMENTS_HASH
        );

        assertEq(
            uint256(marketTask.status),
            uint256(
                ITaskMarket.TaskStatus.Open
            )
        );

        assertEq(
            marketTask.solver,
            address(0)
        );

        // =========================================================
        // 2. FREELANCER SUBMITS BID
        // =========================================================

        uint256 bidAmount = 0.7 ether;

        vm.prank(freelancer);

        market.submitBid(
            marketTaskId,
            bidAmount
        );

        ITaskMarket.Bid[] memory bids =
            market.getBids(marketTaskId);

        assertEq(
            bids.length,
            1
        );

        assertEq(
            bids[0].solver,
            freelancer
        );

        assertEq(
            bids[0].amount,
            bidAmount
        );

        assertFalse(
            bids[0].accepted
        );

        // =========================================================
        // 3. CLIENT ACCEPTS BID
        // =========================================================

        vm.prank(client);

        market.acceptBid(
            marketTaskId,
            freelancer
        );

        marketTask =
            market.getTask(marketTaskId);

        assertEq(
            marketTask.solver,
            freelancer
        );

        assertEq(
            uint256(marketTask.status),
            uint256(
                ITaskMarket.TaskStatus.Assigned
            )
        );

        bids =
            market.getBids(marketTaskId);

        assertTrue(
            bids[0].accepted
        );

        // =========================================================
        // 4. FREELANCER STARTS TASK
        // =========================================================

        vm.prank(freelancer);

        market.startTask(
            marketTaskId
        );

        marketTask =
            market.getTask(marketTaskId);

        assertEq(
            uint256(marketTask.status),
            uint256(
                ITaskMarket.TaskStatus.InProgress
            )
        );

        assertEq(
            marketTask.solver,
            freelancer
        );

        // =========================================================
        // 5. FREELANCER SUBMITS WORK
        // =========================================================

        vm.prank(freelancer);

        market.submitWork(
            marketTaskId,
            SUBMISSION_HASH
        );

        marketTask =
            market.getTask(marketTaskId);

        assertEq(
            uint256(marketTask.status),
            uint256(
                ITaskMarket.TaskStatus.Submitted
            )
        );

        assertEq(
            marketTask.submissionHash,
            SUBMISSION_HASH
        );

        // =========================================================
        // 6. CREATE ESCROW TASK
        // =========================================================

        Types.TaskIntent memory intent =
            Types.TaskIntent({
                client: client,
                freelancer: freelancer,
                budget: BUDGET,
                deadline: block.timestamp + 7 days,
                srsHash: "QmSRSHash",
                createdAt: block.timestamp
            });

        vm.prank(client);

        escrow.createTask(
            intent
        );

        // =========================================================
        // 7. CLIENT FUNDS ESCROW
        // =========================================================

        vm.prank(client);

        escrow.fundTask(
            1
        );

        // =========================================================
        // 8. FREELANCER LOCKS BOND
        // =========================================================

        vm.prank(freelancer);

        escrow.lockFreelancerBond(
            1
        );

        // =========================================================
        // 9. FREELANCER SUBMITS DELIVERY
        // =========================================================

        vm.prank(freelancer);

        escrow.submitWork(
            1,
            "QmDeliveryHash"
        );

        // =========================================================
        // 10. PROOF REGISTRY VERIFICATION
        // =========================================================

        vm.prank(address(this));

        proofRegistry.registerReceipt(
            1,
            "QmReceiptHash",
            hex"1234"
        );

        assertTrue(
            proofRegistry.verifyReceipt(1)
        );

        // =========================================================
        // 11. CLIENT RELEASES PAYMENT
        // =========================================================

        uint256 freelancerBefore =
            token.balanceOf(freelancer);

        vm.prank(client);

        escrow.releasePayment(
            1
        );

        uint256 freelancerAfter =
            token.balanceOf(freelancer);

        // Payment = 100%
        // Bond = 20%
        // Total returned = 120%
        uint256 expected =
            BUDGET +
            (BUDGET * 2_000 / 10_000);

        assertEq(
            freelancerAfter - freelancerBefore,
            expected
        );

        // =========================================================
        // 12. VERIFY ESCROW COMPLETED
        // =========================================================

        SettlrEscrow.EscrowTask memory escrowTask =
            escrow.getTask(1);

        assertEq(
            uint256(escrowTask.status),
            uint256(
                SettlrEscrow.TaskStatus.Completed
            )
        );

        assertEq(
            escrowTask.freelancerBond,
            0
        );

        assertEq(
            escrowTask.deliveryHash,
            "QmDeliveryHash"
        );
    }
}