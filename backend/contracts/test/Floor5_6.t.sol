// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {Types} from "../src/Types.sol";

contract MockERC20 {
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
        require(balanceOf[msg.sender] >= amount, "balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(balanceOf[from] >= amount, "balance");
        require(allowance[from][msg.sender] >= amount, "allowance");
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        allowance[from][msg.sender] -= amount;
        return true;
    }
}

contract Floor5_6Test is Test {
    SettlrEscrow public escrow;
    ProofRegistry public registry;
    MockERC20 public token;

    address client = makeAddr("client");
    address freelancer = makeAddr("freelancer");
    address verifier = makeAddr("verifier");
    address stranger = makeAddr("stranger");

    uint256 constant BUDGET = 1000e6;

    function setUp() public {
        token = new MockERC20();
        registry = new ProofRegistry(verifier);
        escrow = new SettlrEscrow(address(token), address(registry));

        token.mint(client, 10_000e6);
        token.mint(freelancer, 10_000e6);

        vm.prank(client);
        token.approve(address(escrow), type(uint256).max);

        vm.prank(freelancer);
        token.approve(address(escrow), type(uint256).max);
    }

    function _createAndFund() internal returns (uint256 taskId) {
        Types.TaskIntent memory intent = Types.TaskIntent({
            client: client,
            freelancer: freelancer,
            budget: BUDGET,
            deadline: block.timestamp + 30 days,
            srsHash: "ipfs://srs",
            createdAt: block.timestamp
        });

        vm.prank(client);
        escrow.createTask(intent);
        taskId = 1;

        vm.prank(client);
        escrow.fundTask(taskId);

        vm.prank(freelancer);
        escrow.lockFreelancerBond(taskId);
    }

    function _submitWorkAndProve(uint256 taskId) internal {
        vm.prank(freelancer);
        escrow.submitWork(taskId, "ipfs://delivery");

        vm.prank(verifier);
        registry.registerReceipt(taskId, "ipfs://receipt", "0xsig");
    }

    // ========== FLOOR 5 ==========

    function testStartReviewAndAccept() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);

        escrow.startReview(taskId);

        vm.prank(client);
        escrow.acceptWork(taskId);

        assertGt(token.balanceOf(freelancer), 0);
    }

    function testAutoAcceptAfterTimeout() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);

        escrow.startReview(taskId);

        vm.warp(block.timestamp + 4 days);

        // Anyone can call after timeout
        escrow.acceptWork(taskId);

        assertGt(token.balanceOf(freelancer), 0);
    }

    function testRequestChanges() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);

        escrow.startReview(taskId);

        vm.prank(client);
        escrow.requestChanges(taskId, "Missing feature X");

        // Status should now be ChangesRequested (we just check it doesn't revert)
    }

    function testOnlyClientCanRequestChanges() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);
        escrow.startReview(taskId);

        vm.prank(stranger);
        vm.expectRevert("Not client");
        escrow.requestChanges(taskId, "hack");
    }

    // ========== FLOOR 6 ==========

    function testDisputeClientWins() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);
        escrow.startReview(taskId);

        Types.DisputeEvidence memory evidence = Types.DisputeEvidence({
            taskId: taskId,
            receiptHash: "ipfs://receipt",
            srsHash: "ipfs://srs",
            changeIntentHash: "",
            timestamp: block.timestamp
        });

        vm.prank(client);
        escrow.openDispute(taskId, evidence);

        uint256 clientBefore = token.balanceOf(client);
        escrow.resolveDispute(taskId, true); // client wins

        assertGt(token.balanceOf(client), clientBefore);
    }

    function testDisputeSolverWins() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);
        escrow.startReview(taskId);

        Types.DisputeEvidence memory evidence = Types.DisputeEvidence({
            taskId: taskId,
            receiptHash: "ipfs://receipt",
            srsHash: "ipfs://srs",
            changeIntentHash: "",
            timestamp: block.timestamp
        });

        vm.prank(client);
        escrow.openDispute(taskId, evidence);

        uint256 freelancerBefore = token.balanceOf(freelancer);
        escrow.resolveDispute(taskId, false); // solver wins

        assertGt(token.balanceOf(freelancer), freelancerBefore);
    }

    function testCannotDisputeAfterAccept() public {
        uint256 taskId = _createAndFund();
        _submitWorkAndProve(taskId);
        escrow.startReview(taskId);

        vm.prank(client);
        escrow.acceptWork(taskId);

        Types.DisputeEvidence memory evidence = Types.DisputeEvidence({
            taskId: taskId,
            receiptHash: "ipfs://receipt",
            srsHash: "ipfs://srs",
            changeIntentHash: "",
            timestamp: block.timestamp
        });

        vm.prank(client);
        vm.expectRevert("Cannot dispute now");
        escrow.openDispute(taskId, evidence);
    }
}
