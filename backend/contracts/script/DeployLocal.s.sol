// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {SettlementOrchestrator} from "../src/SettlementOrchestrator.sol";
import {MockERC20} from "./MockERC20.sol";

/**
 * @dev Deployment script for local Anvil testing
 * 
 * Usage:
 * 1. Start Anvil: anvil --chain-id 31337
 * 2. Deploy: forge script script/DeployLocal.s.sol --rpc-url http://127.0.0.1:8545 --broadcast -vvv
 * 
 * Local Network Info:
 * - Chain ID: 31337 (Base Sepolia)
 * - RPC URL: http://127.0.0.1:8545
 * - Default Account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
 * - Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
 */
contract DeployLocal is Script {
    // Local network configuration
    uint256 public constant LOCAL_CHAIN_ID = 31337;
    
    function run() external {
        // Use the default Anvil account
        uint256 deployerPrivateKey = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
        address verifierAddress = vm.addr(deployerPrivateKey);
        
        vm.startBroadcast(deployerPrivateKey);
        
        console.log("Deploying to Local Anvil (Chain ID: %d)...", LOCAL_CHAIN_ID);
        console.log("Deployer address:", vm.addr(deployerPrivateKey));
        console.log("Verifier address:", verifierAddress);
        
        // Step 1: Deploy Mock ERC20 Token for testing
        console.log("\n=== Deploying MockERC20 Token ===");
        MockERC20 token = new MockERC20("Test USDC", "tUSDC", 6);
        console.log("MockERC20 deployed at:", address(token));
        
        // Mint some tokens to the deployer for testing
        token.mint(vm.addr(deployerPrivateKey), 1000000 * 10**6); // 1M tokens
        console.log("Minted 1M tokens to deployer");
        
        // Step 2: Deploy ProofRegistry (requires verifier address)
        console.log("\n=== Deploying ProofRegistry ===");
        ProofRegistry proofRegistry = new ProofRegistry(verifierAddress);
        console.log("ProofRegistry deployed at:", address(proofRegistry));
        
        // Step 3: Deploy TaskMarket
        console.log("\n=== Deploying TaskMarket ===");
        TaskMarket taskMarket = new TaskMarket();
        console.log("TaskMarket deployed at:", address(taskMarket));
        
        // Step 4: Deploy SettlrEscrow (requires token and proofRegistry addresses)
        console.log("\n=== Deploying SettlrEscrow ===");
        SettlrEscrow escrow = new SettlrEscrow(address(token), address(proofRegistry));
        console.log("SettlrEscrow deployed at:", address(escrow));
        
        // Step 5: Deploy SettlementOrchestrator (requires market and escrow addresses)
        console.log("\n=== Deploying SettlementOrchestrator ===");
        SettlementOrchestrator orchestrator = new SettlementOrchestrator(
            address(taskMarket),
            address(escrow)
        );
        console.log("SettlementOrchestrator deployed at:", address(orchestrator));
        
        // Step 6: Configure integrations
        console.log("\n=== Configuring Integrations ===");
        
        // Set orchestrator in SettlrEscrow
        escrow.setOrchestrator(address(orchestrator));
        console.log("Orchestrator set in SettlrEscrow");
        
        console.log("\n=== Deployment Summary ===");
        console.log("Network: Local Anvil");
        console.log("Chain ID:", LOCAL_CHAIN_ID);
        console.log("RPC URL: http://127.0.0.1:8545");
        console.log("-------------------------------------------");
        console.log("MockERC20 Token:", address(token));
        console.log("ProofRegistry:", address(proofRegistry));
        console.log("TaskMarket:", address(taskMarket));
        console.log("SettlrEscrow:", address(escrow));
        console.log("SettlementOrchestrator:", address(orchestrator));
        console.log("-------------------------------------------");
        console.log("\nDeployment complete!");
        console.log("\nNext steps:");
        console.log("1. Fund your wallet with test ETH (already has 10000 ETH)");
        console.log("2. Approve the SettlrEscrow contract to spend your tokens:");
        console.log("   cast send <TOKEN_ADDRESS> 'approve(address,uint256)' <ESCROW_ADDRESS> <AMOUNT> --private-key <PRIVATE_KEY> --rpc-url http://127.0.0.1:8545");
        console.log("3. Test the full workflow on-chain!");
        
        vm.stopBroadcast();
    }
}
