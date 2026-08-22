// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Types
 * @notice Shared structs for the Settlr protocol.
 */
library Types {
    
    // The official, signed job agreement
    struct TaskIntent {
        address client;
        address freelancer;
        uint256 budget;           // In test USDC
        uint256 deadline;         // Unix timestamp
        string srsHash;           // IPFS hash of the approved test suite
        uint256 createdAt;
    }

    // A signed request to change scope, price, or deadline
    struct ChangeIntent {
        uint256 taskId;
        string newSrsHash;        // New IPFS hash for updated tests
        uint256 additionalBudget; // Extra funds required
        uint256 extendedDeadline; // New deadline
        bool approvedByClient;
        bool approvedByFreelancer;
    }

    // Evidence package submitted to Kleros in a dispute
    struct DisputeEvidence {
        uint256 taskId;
        string receiptHash;       // IPFS hash of the signed grader receipt
        string srsHash;           // Original SRS hash
        string changeIntentHash;  // IPFS hash of ChangeIntent (if applicable)
        uint256 timestamp;
    }
}
