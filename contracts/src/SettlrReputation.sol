// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title SettlrReputation
 * @notice Floor 7 of SETTLR.
 * Tracks freelancer task history, reputation, and risk.
 */
contract SettlrReputation {

    enum TaskOutcome {
        COMPLETED,
        DISPUTED,
        CANCELLED
    }

    struct ReputationProfile {
        uint256 totalTasks;
        uint256 completedTasks;
        uint256 disputedTasks;
        uint256 cancelledTasks;
    }

    // Protocol administrator allowed to record outcomes
    address public owner;

    // Freelancer => Reputation profile
    mapping(address => ReputationProfile) private profiles;

    event TaskOutcomeRecorded(
        address indexed freelancer,
        uint256 indexed taskId,
        TaskOutcome outcome
    );

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can record outcome");
        _;
    }

    /**
     * @notice Records the final outcome of a freelancer's task.
     */
    function recordTaskOutcome(
        address _freelancer,
        uint256 _taskId,
        TaskOutcome _outcome
    ) external onlyOwner {
        require(_freelancer != address(0), "Invalid freelancer");

        ReputationProfile storage profile = profiles[_freelancer];

        profile.totalTasks++;

        if (_outcome == TaskOutcome.COMPLETED) {
            profile.completedTasks++;
        } else if (_outcome == TaskOutcome.DISPUTED) {
            profile.disputedTasks++;
        } else if (_outcome == TaskOutcome.CANCELLED) {
            profile.cancelledTasks++;
        }

        emit TaskOutcomeRecorded(
            _freelancer,
            _taskId,
            _outcome
        );
    }

    /**
     * @notice Returns the freelancer's complete history.
     */
    function getProfile(
        address _freelancer
    ) external view returns (ReputationProfile memory) {
        return profiles[_freelancer];
    }

    /**
     * @notice Returns reputation from 0 to 100.
     * Reputation = completed tasks / total tasks * 100.
     */
    function getReputationScore(
        address _freelancer
    ) external view returns (uint256) {
        ReputationProfile memory profile = profiles[_freelancer];

        if (profile.totalTasks == 0) {
            return 0;
        }

        return
            (profile.completedTasks * 100) /
            profile.totalTasks;
    }

    /**
     * @notice Returns risk from 0 to 100.
     * Risk = (disputed + cancelled) / total tasks * 100.
     */
    function getRiskScore(
        address _freelancer
    ) external view returns (uint256) {
        ReputationProfile memory profile = profiles[_freelancer];

        if (profile.totalTasks == 0) {
            return 0;
        }

        return
            ((profile.disputedTasks + profile.cancelledTasks) * 100) /
            profile.totalTasks;
    }

    /**
     * @notice Transfers protocol administration.
     */
    function transferOwnership(
        address _newOwner
    ) external onlyOwner {
        require(_newOwner != address(0), "Invalid owner");

        address previousOwner = owner;
        owner = _newOwner;

        emit OwnershipTransferred(previousOwner, _newOwner);
    }
}