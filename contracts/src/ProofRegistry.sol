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

    mapping(uint256 => Receipt) private receipts;

    event ReceiptRegistered(
        uint256 indexed taskId,
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
        require(receipts[_taskId].timestamp == 0, "Receipt already exists");

        receipts[_taskId] = Receipt({
            receiptHash: _receiptHash,
            signature: _signature,
            verified: true,
            timestamp: block.timestamp
        });

        emit ReceiptRegistered(
            _taskId,
            _receiptHash,
            block.timestamp
        );

        return true;
    }

    function verifyReceipt(
        uint256 _taskId
    ) external view override returns (bool) {
        return receipts[_taskId].verified;
    }

    function setVerifier(address _newVerifier) external onlyOwner {
        require(_newVerifier != address(0), "Invalid verifier");

        address oldVerifier = verifier;
        verifier = _newVerifier;

        emit VerifierUpdated(oldVerifier, _newVerifier);
    }
}

