// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IProofRegistry} from "./interfaces/IProofRegistry.sol";

contract ProofRegistry is IProofRegistry {
    struct Receipt {
        string receiptHash;
        bytes signature;
        bool verified;
        uint256 timestamp;
    }

    address public owner;
    address public verifier;

    // taskId => list of receipts (supports revisions)
    mapping(uint256 => Receipt[]) private receipts;

    event ReceiptRegistered(
        uint256 indexed taskId,
        uint256 indexed receiptIndex,
        string receiptHash,
        uint256 timestamp
    );

    event VerifierUpdated(
        address indexed oldVerifier,
        address indexed newVerifier
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyVerifier() {
        require(msg.sender == verifier, "Not verifier");
        _;
    }

    constructor(address _verifier) {
        require(_verifier != address(0), "Invalid verifier");
        owner = msg.sender;
        verifier = _verifier;
    }

    function registerReceipt(
        uint256 _taskId,
        string calldata _receiptHash,
        bytes calldata _signature
    ) external override onlyVerifier returns (bool) {
        require(_taskId != 0, "Invalid task ID");
        require(bytes(_receiptHash).length > 0, "Empty receipt hash");

        receipts[_taskId].push(
            Receipt({
                receiptHash: _receiptHash,
                signature: _signature,
                verified: true,
                timestamp: block.timestamp
            })
        );

        uint256 index = receipts[_taskId].length - 1;
        emit ReceiptRegistered(_taskId, index, _receiptHash, block.timestamp);
        return true;
    }

    /// @notice True if the latest receipt for the task is verified
    function verifyReceipt(uint256 _taskId)
        external
        view
        override
        returns (bool)
    {
        Receipt[] storage list = receipts[_taskId];
        if (list.length == 0) return false;
        return list[list.length - 1].verified;
    }

    function getReceiptCount(uint256 _taskId) external view returns (uint256) {
        return receipts[_taskId].length;
    }

    function getLatestReceipt(uint256 _taskId)
        external
        view
        returns (string memory receiptHash, bool verified, uint256 timestamp)
    {
        Receipt[] storage list = receipts[_taskId];
        require(list.length > 0, "No receipts");
        Receipt storage r = list[list.length - 1];
        return (r.receiptHash, r.verified, r.timestamp);
    }

    function setVerifier(address _newVerifier) external onlyOwner {
        require(_newVerifier != address(0), "Invalid verifier");
        address oldVerifier = verifier;
        verifier = _newVerifier;
        emit VerifierUpdated(oldVerifier, _newVerifier);
    }
}