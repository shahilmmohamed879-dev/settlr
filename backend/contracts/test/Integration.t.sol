// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {SettlementOrchestrator} from "../src/SettlementOrchestrator.sol";
import {Types} from "../src/Types.sol";

contract IntegrationMockUSDC {
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

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(balanceOf[from] >= amount, "Insufficient balance");
        require(allowance[from][msg.sender] >= amount, "Insufficient allowance");
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
    SettlementOrchestrator orchestrator;
    IntegrationMockUSDC token;

    address client = address(2);
    address freelancer = address(3);
    address otherBidder = address(4);

    uint256 constant BUDGET = 1_000e6;

    function setUp() public {
        token = new IntegrationMockUSDC();

        proofRegistry = new ProofRegistry(address(this)); // this contract = verifier
        market = new TaskMarket();
        escrow = new SettlrEscrow(address(token), address(proofRegistry));
        orchestrator = new SettlementOrchestrator(address(market), address(escrow));
        escrow.setOrchestrator(address(orchestrator));

        token.mint(client, 100_000e6);
        token.mint(freelancer, 100_000e6);

        vm.prank(client);
        token.approve(address(escrow), type(uint256).max);

        vm.prank(freelancer);
        token.approve(address(escrow), type(uint256).max);
    }

    function testFullFlow_MarketToEscrowSettlement() public {
        // 1. Post
        vm.prank(client);
        uint256 marketId = market.postTask(BUDGET, "QmSRSHash");
        assertEq(marketId, 1);

        // 2. Bids
        vm.prank(otherBidder);
        market.submitBid(marketId);

        vm.prank(freelancer);
        market.submitBid(marketId);

        // 3. Client picks specific winner (not first bidder)
        vm.prank(client);
        market.selectWinner(marketId, freelancer);
        assertEq(market.getWinner(marketId), freelancer);

        // 4. Orchestrator creates linked escrow
        vm.prank(client);
        uint256 escrowId = orchestrator.createEscrowFromMarket(
            marketId,
            block.timestamp + 7 days
        );

        assertEq(escrowId, 1);
        assertEq(orchestrator.marketToEscrow(marketId), escrowId);
        assertEq(orchestrator.escrowToMarket(escrowId), marketId);

        SettlrEscrow.EscrowTask memory t = escrow.getTask(escrowId);
        assertEq(t.intent.client, client);
        assertEq(t.intent.freelancer, freelancer);
        assertEq(t.intent.budget, BUDGET);
        assertEq(t.intent.srsHash, "QmSRSHash");

        // 5. Fund
        vm.prank(client);
        escrow.fundTask(escrowId);

        // 6. Bond
        vm.prank(freelancer);
        escrow.lockFreelancerBond(escrowId);

        // 7. Submit work
        vm.prank(freelancer);
        escrow.submitWork(escrowId, "QmDeliveryHash");

        // 8. Proof
        proofRegistry.registerReceipt(escrowId, "QmReceiptHash", hex"1234");
        assertTrue(proofRegistry.verifyReceipt(escrowId));

        // 9. Review + accept
        escrow.startReview(escrowId);

        uint256 before = token.balanceOf(freelancer);

        vm.prank(client);
        escrow.acceptWork(escrowId);

        uint256 bond = BUDGET * 2_000 / 10_000;
        assertEq(token.balanceOf(freelancer) - before, BUDGET + bond);

        t = escrow.getTask(escrowId);
        assertEq(uint256(t.status), uint256(SettlrEscrow.TaskStatus.Completed));
    }

    function testCannotLinkTwice() public {
        vm.prank(client);
        uint256 marketId = market.postTask(BUDGET, "QmSRS");

        vm.prank(freelancer);
        market.submitBid(marketId);

        vm.prank(client);
        market.selectWinner(marketId, freelancer);

        vm.prank(client);
        orchestrator.createEscrowFromMarket(marketId, block.timestamp + 1 days);

        vm.prank(client);
        vm.expectRevert("Already linked");
        orchestrator.createEscrowFromMarket(marketId, block.timestamp + 1 days);
    }

    function testCannotCreateEscrowBeforeWinner() public {
        vm.prank(client);
        uint256 marketId = market.postTask(BUDGET, "QmSRS");

        vm.prank(client);
        vm.expectRevert("No winner yet");
        orchestrator.createEscrowFromMarket(marketId, block.timestamp + 1 days);
    }
}