// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IProofRegistry {
    function registerReceipt(
        uint256 _taskId, 
        string calldata _receiptHash, 
        bytes calldata _signature
    ) external returns (bool);
    
    function verifyReceipt(uint256 _taskId) external view returns (bool);
}

