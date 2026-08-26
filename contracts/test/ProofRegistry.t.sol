// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";

contract ProofRegistryTest is Test {
    ProofRegistry registry;

    address owner = address(1);
    address verifier = address(2);
    address newVerifier = address(3);
    address attacker = address(4);

    uint256 constant TASK_ID = 1;

    function setUp() public {
        vm.startPrank(owner);
        registry = new ProofRegistry(verifier);
        vm.stopPrank();
    }

    function testConstructorSetsVerifier() public view {
        assertEq(registry.owner(), owner);
        assertEq(registry.verifier(), verifier);
    }

    function testVerifierCanRegisterReceipt() public {
        vm.prank(verifier);

        bool result = registry.registerReceipt(
            TASK_ID,
            "QmReceiptHash",
            hex"1234"
        );

        assertTrue(result);
        assertTrue(registry.verifyReceipt(TASK_ID));
    }

    function testUnauthorizedUserCannotRegisterReceipt() public {
        vm.prank(attacker);

        vm.expectRevert("Not verifier");

        registry.registerReceipt(
            TASK_ID,
            "QmReceiptHash",
            hex"1234"
        );
    }

    function testCanRegisterMultipleReceiptsForRevisions() public {
    vm.startPrank(verifier);

    registry.registerReceipt(TASK_ID, "QmReceiptHash1", hex"1234");
    registry.registerReceipt(TASK_ID, "QmReceiptHash2", hex"5678");

    vm.stopPrank();

    assertEq(registry.getReceiptCount(TASK_ID), 2);
    assertTrue(registry.verifyReceipt(TASK_ID));

    (string memory hash, bool verified, ) = registry.getLatestReceipt(TASK_ID);
    assertEq(hash, "QmReceiptHash2");
    assertTrue(verified);
}

    function testCannotRegisterEmptyReceiptHash() public {
        vm.prank(verifier);

        vm.expectRevert("Empty receipt hash");

        registry.registerReceipt(
            TASK_ID,
            "",
            hex"1234"
        );
    }

    function testCannotRegisterTaskZero() public {
        vm.prank(verifier);

        vm.expectRevert("Invalid task ID");

        registry.registerReceipt(
            0,
            "QmReceiptHash",
            hex"1234"
        );
    }

    function testOwnerCanUpdateVerifier() public {
        vm.prank(owner);

        registry.setVerifier(newVerifier);

        assertEq(registry.verifier(), newVerifier);
    }

    function testUnauthorizedUserCannotUpdateVerifier() public {
        vm.prank(attacker);

        vm.expectRevert("Not owner");

        registry.setVerifier(newVerifier);
    }

    function testNewVerifierCanRegisterAfterUpdate() public {
        vm.prank(owner);
        registry.setVerifier(newVerifier);

        vm.prank(newVerifier);

        bool result = registry.registerReceipt(
            TASK_ID,
            "QmReceiptHash",
            hex"1234"
        );

        assertTrue(result);
        assertTrue(registry.verifyReceipt(TASK_ID));
    }
}