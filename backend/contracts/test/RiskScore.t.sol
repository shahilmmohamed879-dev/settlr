// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {RiskScore} from "../src/libraries/RiskScore.sol";

contract RiskScoreTest is Test {
    function testNormalBondCalculation() public {
        uint256 budget = 1000e6;

        uint256 bond = RiskScore.calculateBond(
            budget,
            10_000, // 1.0x risk
            10_000  // 1.0x reputation
        );

        assertEq(bond, 200e6);
    }

    function testHigherRiskIncreasesBond() public {
        uint256 budget = 1000e6;

        uint256 lowRiskBond = RiskScore.calculateBond(
            budget,
            10_000,
            10_000
        );

        uint256 highRiskBond = RiskScore.calculateBond(
            budget,
            20_000,
            10_000
        );

        assertGt(highRiskBond, lowRiskBond);
    }

    function testBetterReputationReducesBond() public {
        uint256 budget = 1000e6;

        uint256 normalBond = RiskScore.calculateBond(
            budget,
            10_000,
            10_000
        );

        uint256 trustedSolverBond = RiskScore.calculateBond(
            budget,
            10_000,
            7_500
        );

        assertLt(trustedSolverBond, normalBond);
    }

    function testMinimumBondIsEnforced() public {
        uint256 budget = 1000e6;

        uint256 bond = RiskScore.calculateBond(
            budget,
            1_000,
            1_000
        );

        assertEq(bond, 50e6);
    }

    function testMaximumBondIsEnforced() public {
        uint256 budget = 1000e6;

        uint256 bond = RiskScore.calculateBond(
            budget,
            100_000,
            100_000
        );

        assertEq(bond, 500e6);
    }
}