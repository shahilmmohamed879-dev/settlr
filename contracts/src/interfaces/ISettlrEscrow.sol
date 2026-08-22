// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {Types} from "../Types.sol";

interface ISettlrEscrow {
    // Core Actions
    function createTask(Types.TaskIntent calldata _intent) external;
    function lockFreelancerBond(uint256 _taskId) external;
    function submitWork(uint256 _taskId, string calldata _deliveryHash) external;
    function releasePayment(uint256 _taskId) external;
    
    // Changes & Disputes
    function createChangeIntent(uint256 _taskId, Types.ChangeIntent calldata _change) external;
    function openDispute(uint256 _taskId, Types.DisputeEvidence calldata _evidence) external;
}

