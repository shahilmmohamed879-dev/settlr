// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {Types} from "../src/Types.sol";

contract EndToEndTest is Test {
    SettlrEscrow escrow;
    ProofRegistry proofRegistry;
    MockUSDC token;

    address client = address(0x1);
    address freelancer = address(0x2);

    uint256 constant BUDGET = 1000e6;
    uint256 constant BOND = 100e6;

    string constant SRS_HASH = "QmSettlrSRSHash123";

    string constant RECEIPT_HASH =
        "34eda0f3390da573ed9c071c401346b39675b070f2feae55fe271ef692de276b";

    function setUp() public {
        proofRegistry = new ProofRegistry(address(this));

        token = new MockUSDC();

        escrow = new SettlrEscrow(
            address(token),
            address(proofRegistry)
        );

        token.mint(client, 100_000e6);
        token.mint(freelancer, 100_000e6);

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

    function _createIntent()
        internal
        view
        returns (Types.TaskIntent memory)
    {
        return Types.TaskIntent({
            client: client,
            freelancer: freelancer,
            budget: BUDGET,
            deadline: block.timestamp + 7 days,
            srsHash: SRS_HASH,
            createdAt: block.timestamp
        });
    }

    function test_EndToEnd_TaskToProofToSettlement()
        public
    {
        // ---------------------------------------------------------
        // 1. CREATE TASK
        // ---------------------------------------------------------

        Types.TaskIntent memory intent = _createIntent();

        vm.prank(client);
        escrow.createTask(intent);

        uint256 taskId = 1;

        // Read the public mapping correctly by destructuring
        (
            Types.TaskIntent memory storedIntent,
            ,
            ,
            ,
            
        ) = escrow.tasks(taskId);

        assertEq(
            storedIntent.client,
            client
        );

        assertEq(
            storedIntent.freelancer,
            freelancer
        );

        assertEq(
            storedIntent.budget,
            BUDGET
        );

        assertEq(
            storedIntent.srsHash,
            SRS_HASH
        );

        // ---------------------------------------------------------
        // 2. FUND ESCROW
        // ---------------------------------------------------------

        vm.prank(client);
        escrow.fundTask(taskId);

        // ---------------------------------------------------------
        // 3. LOCK FREELANCER BOND
        // ---------------------------------------------------------

        vm.prank(freelancer);
        escrow.lockFreelancerBond(taskId);

        // ---------------------------------------------------------
        // 4. SUBMIT WORK
        // ---------------------------------------------------------

        string memory deliveryHash =
            "QmSettlrDeliveryHash123";

        vm.prank(freelancer);

        escrow.submitWork(
            taskId,
            deliveryHash
        );

        // ---------------------------------------------------------
        // 5. MODULE 4 RECEIPT
        // ---------------------------------------------------------

        proofRegistry.registerReceipt(
            taskId,
            RECEIPT_HASH,
            hex"1234"
        );

        // ---------------------------------------------------------
        // 6. VERIFY RECEIPT
        // ---------------------------------------------------------

        bool verified =
            proofRegistry.verifyReceipt(taskId);

        assertTrue(verified);

        // ---------------------------------------------------------
        // 7. RELEASE PAYMENT
        // ---------------------------------------------------------

        vm.prank(client);

        escrow.releasePayment(taskId);

        // ---------------------------------------------------------
        // 8. VERIFY FINAL STATE
        // ---------------------------------------------------------

        (
            ,
            ,
            ,
            ,
            SettlrEscrow.TaskStatus status
        ) = escrow.tasks(taskId);

        assertEq(
            uint256(status),
            uint256(
                SettlrEscrow.TaskStatus.Completed
            )
        );
    }
}


/*
 * Minimal ERC20 used only by this test.
 */
contract MockUSDC {
    string public constant name = "Mock USDC";
    string public constant symbol = "mUSDC";
    uint8 public constant decimals = 6;

    mapping(address => uint256) public balanceOf;

    mapping(
        address => mapping(address => uint256)
    ) public allowance;

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