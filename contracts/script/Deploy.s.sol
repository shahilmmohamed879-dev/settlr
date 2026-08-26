// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {TaskMarket} from "../src/TaskMarket.sol";

contract DeploymentMockUSDC {
    string public constant name = "Mock USDC";
    string public constant symbol = "mUSDC";
    uint8 public constant decimals = 6;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function mint(
        address to,
        uint256 amount
    ) external {
        balanceOf[to] += amount;
    }

    function approve(
        address spender,
        uint256 amount
    ) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    function transfer(
        address to,
        uint256 amount
    ) external returns (bool) {
        require(
            balanceOf[msg.sender] >= amount,
            "Insufficient balance"
        );

        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;

        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool) {
        require(
            balanceOf[from] >= amount,
            "Insufficient balance"
        );

        require(
            allowance[from][msg.sender] >= amount,
            "Insufficient allowance"
        );

        allowance[from][msg.sender] -= amount;
        balanceOf[from] -= amount;
        balanceOf[to] += amount;

        return true;
    }
}

contract Deploy is Script {

    function run() external returns (
        DeploymentMockUSDC token,
        ProofRegistry proofRegistry,
        SettlrEscrow escrow,
        TaskMarket market
    ) {
        vm.startBroadcast();

        // --------------------------------------------------------
        // 1. Deploy mock USDC
        // --------------------------------------------------------

        token = new DeploymentMockUSDC();

        // --------------------------------------------------------
        // 2. Deploy ProofRegistry
        // --------------------------------------------------------
        //
        // The deployer becomes:
        //   owner
        //   verifier
        //

        proofRegistry = new ProofRegistry(
            msg.sender
        );

        // --------------------------------------------------------
        // 3. Deploy Escrow
        // --------------------------------------------------------

        escrow = new SettlrEscrow(
            address(token),
            address(proofRegistry)
        );

        // --------------------------------------------------------
        // 4. Deploy TaskMarket
        // --------------------------------------------------------

        market = new TaskMarket();

        vm.stopBroadcast();
    }
}