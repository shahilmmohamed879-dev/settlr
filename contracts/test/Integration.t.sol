// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
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

    function setUp() public {
        token = new IntegrationMockUSDC();

        vm.prank(owner);
        proofRegistry = new ProofRegistry(
            address(this)
        );

        escrow = new SettlrEscrow(
            address(token),
            address(proofRegistry)
        );

        market = new TaskMarket();

        token.mint(
            client,
            100_000e6
        );

        token.mint(
            freelancer,
            100_000e6
        );

        vm.prank(client);
        token.approve(
            address(escrow),
            type(uint256).max
        );

        vm.prank(freelancer);
        token.approve(
            address(escrow),
            type(uint256).max
        );
    }

    function testCompleteTaskSettlementFlow() public {
        // --------------------------------
        // 1. Client posts task
        // --------------------------------

        vm.prank(client);

        uint256 marketTaskId =
            market.postTask(
                BUDGET,
                "QmSRSHash"
            );

        assertEq(marketTaskId, 1);

        // --------------------------------
        // 2. Freelancer submits bid
        // --------------------------------

        vm.prank(freelancer);

        market.submitBid(
            marketTaskId
        );

        // --------------------------------
        // 3. Client selects freelancer
        // --------------------------------

        vm.prank(client);

        market.selectWinner(
            marketTaskId
        );

        assertEq(
            market.getWinner(marketTaskId),
            freelancer
        );

        // --------------------------------
        // 4. Create escrow task
        // --------------------------------

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

        escrow.createTask(intent);

        // --------------------------------
        // 5. Client funds escrow
        // --------------------------------

        vm.prank(client);

        escrow.fundTask(1);

        // --------------------------------
        // 6. Freelancer locks bond
        // --------------------------------

        vm.prank(freelancer);

        escrow.lockFreelancerBond(1);

        // --------------------------------
        // 7. Freelancer submits work
        // --------------------------------

        vm.prank(freelancer);

        escrow.submitWork(
            1,
            "QmDeliveryHash"
        );

        // --------------------------------
        // 8. Proof verification
        // --------------------------------

        vm.prank(address(this));

        proofRegistry.registerReceipt(
            1,
            "QmReceiptHash",
            hex"1234"
        );

        assertTrue(
            proofRegistry.verifyReceipt(1)
        );

        // --------------------------------
        // 9. Client releases payment
        // --------------------------------

        uint256 freelancerBefore =
            token.balanceOf(freelancer);

        vm.prank(client);

        escrow.releasePayment(1);

        uint256 freelancerAfter =
            token.balanceOf(freelancer);

        // 100% payment + 20% bond returned
        uint256 expected =
            BUDGET + (BUDGET * 2_000 / 10_000);

        assertEq(
            freelancerAfter - freelancerBefore,
            expected
        );

        SettlrEscrow.EscrowTask memory task =
            escrow.getTask(1);

        assertEq(
            uint256(task.status),
            uint256(
                SettlrEscrow.TaskStatus.Completed
            )
        );
    }
}