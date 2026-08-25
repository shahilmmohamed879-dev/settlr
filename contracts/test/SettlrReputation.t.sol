// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {SettlrReputation} from "../src/SettlrReputation.sol";

contract SettlrReputationTest is Test {
    SettlrReputation reputation;

    address owner = address(this);
    address freelancer = address(0x1);
    address newOwner = address(0x2);
    address stranger = address(0x3);

    function setUp() public {
        reputation = new SettlrReputation();
    }

    // 1. Contract deployer is the owner
    function test_OwnerIsSetCorrectly() public {
        assertEq(reputation.owner(), owner);
    }

    // 2. Completed task updates history
    function test_RecordCompletedTask() public {
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        SettlrReputation.ReputationProfile memory profile =
            reputation.getProfile(freelancer);

        assertEq(profile.totalTasks, 1);
        assertEq(profile.completedTasks, 1);
        assertEq(profile.disputedTasks, 0);
        assertEq(profile.cancelledTasks, 0);
    }

    // 3. Disputed task updates history
    function test_RecordDisputedTask() public {
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.DISPUTED
        );

        SettlrReputation.ReputationProfile memory profile =
            reputation.getProfile(freelancer);

        assertEq(profile.totalTasks, 1);
        assertEq(profile.completedTasks, 0);
        assertEq(profile.disputedTasks, 1);
        assertEq(profile.cancelledTasks, 0);
    }

    // 4. Cancelled task updates history
    function test_RecordCancelledTask() public {
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.CANCELLED
        );

        SettlrReputation.ReputationProfile memory profile =
            reputation.getProfile(freelancer);

        assertEq(profile.totalTasks, 1);
        assertEq(profile.completedTasks, 0);
        assertEq(profile.disputedTasks, 0);
        assertEq(profile.cancelledTasks, 1);
    }

    // 5. Only owner can record outcomes
    function test_RevertWhen_NonOwnerRecordsOutcome() public {
        vm.prank(stranger);

        vm.expectRevert("Only owner can record outcome");
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );
    }

    // 6. Invalid freelancer address is rejected
    function test_RevertWhen_InvalidFreelancer() public {
        vm.expectRevert("Invalid freelancer");

        reputation.recordTaskOutcome(
            address(0),
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );
    }

    // 7. Reputation score is calculated correctly
    function test_ReputationScore() public {
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        reputation.recordTaskOutcome(
            freelancer,
            2,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        reputation.recordTaskOutcome(
            freelancer,
            3,
            SettlrReputation.TaskOutcome.DISPUTED
        );

        reputation.recordTaskOutcome(
            freelancer,
            4,
            SettlrReputation.TaskOutcome.CANCELLED
        );

        assertEq(
            reputation.getReputationScore(freelancer),
            50
        );
    }

    // 8. Risk score is calculated correctly
    function test_RiskScore() public {
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        reputation.recordTaskOutcome(
            freelancer,
            2,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        reputation.recordTaskOutcome(
            freelancer,
            3,
            SettlrReputation.TaskOutcome.DISPUTED
        );

        reputation.recordTaskOutcome(
            freelancer,
            4,
            SettlrReputation.TaskOutcome.CANCELLED
        );

        assertEq(
            reputation.getRiskScore(freelancer),
            50
        );
    }

    // 9. New freelancer starts with zero scores
    function test_NewFreelancerHasZeroScores() public {
        assertEq(reputation.getReputationScore(freelancer), 0);
        assertEq(reputation.getRiskScore(freelancer), 0);
    }

    // 10. Owner can transfer ownership
    function test_TransferOwnership() public {
        reputation.transferOwnership(newOwner);

        assertEq(reputation.owner(), newOwner);
    }

    // 11. Old owner loses permission after transfer
    function test_RevertWhen_OldOwnerRecordsAfterTransfer() public {
        reputation.transferOwnership(newOwner);

        vm.expectRevert("Only owner can record outcome");
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );
    }

    // 12. New owner gains permission
    function test_NewOwnerCanRecordOutcome() public {
        reputation.transferOwnership(newOwner);

        vm.prank(newOwner);
        reputation.recordTaskOutcome(
            freelancer,
            1,
            SettlrReputation.TaskOutcome.COMPLETED
        );

        SettlrReputation.ReputationProfile memory profile =
            reputation.getProfile(freelancer);

        assertEq(profile.totalTasks, 1);
        assertEq(profile.completedTasks, 1);
    }
}