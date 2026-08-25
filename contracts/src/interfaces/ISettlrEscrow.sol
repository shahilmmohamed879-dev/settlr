// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {Types} from "../Types.sol";

interface ISettlrEscrow {
    // Core Actions (existing)
    function createTask(Types.TaskIntent calldata _intent) external;
    function lockFreelancerBond(uint256 _taskId) external;
    function submitWork(uint256 _taskId, string calldata _deliveryHash) external;
    function releasePayment(uint256 _taskId) external;

    // Changes & Disputes (existing + extended)
    function createChangeIntent(uint256 _taskId, Types.ChangeIntent calldata _change) external;
    function openDispute(uint256 _taskId, Types.DisputeEvidence calldata _evidence) external;

    // ========== FLOOR 5 — Client Acceptance ==========
    function startReview(uint256 _taskId) external;
    function acceptWork(uint256 _taskId) external;
    function requestChanges(uint256 _taskId, string calldata _reason) external;
    function submitRevision(uint256 _taskId, string calldata _deliveryHash) external;
    function requestAdditionalFeature(
        uint256 _taskId,
        Types.ChangeIntent calldata _change
    ) external;

    // ========== FLOOR 6 — Dispute Resolution ==========
    function resolveDispute(uint256 _taskId, bool _clientWins) external;
}
