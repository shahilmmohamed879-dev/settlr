// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library RiskScore {
    uint256 internal constant BPS = 10_000;
    uint256 internal constant MIN_BOND_BPS = 500;
    uint256 internal constant MAX_BOND_BPS = 5_000;

    function calculateBond(
        uint256 budget,
        uint256 riskScore,
        uint256 reputationScore
    ) internal pure returns (uint256) {
        uint256 bondBps = 2_000;

        if (riskScore > BPS) {
            bondBps = bondBps * riskScore / BPS;
        }

        if (reputationScore < BPS) {
            bondBps = bondBps * reputationScore / BPS;
        }

        if (bondBps < MIN_BOND_BPS) {
            bondBps = MIN_BOND_BPS;
        }

        if (bondBps > MAX_BOND_BPS) {
            bondBps = MAX_BOND_BPS;
        }

        return budget * bondBps / BPS;
    }
}
