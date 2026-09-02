// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {SettlrEscrow} from "../src/SettlrEscrow.sol";
import {TaskMarket} from "../src/TaskMarket.sol";
import {ProofRegistry} from "../src/ProofRegistry.sol";
import {SettlementOrchestrator} from "../src/SettlementOrchestrator.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Deployment script for Base Sepolia testnet
 * 
 * Usage:
 * 1. Set your private key: export PRIVATE_KEY="your_private_key_here"
 * 2. Set verifier address: export VERIFIER_ADDRESS="0x..." (can be deployer address for testing)
 * 3. Set token address: export TOKEN_ADDRESS="0x..." (optional, deploys mock if not set)
 * 4. Deploy: forge script script/DeployBaseSepolia.s.sol --rpc-url https://sepolia.base.org --broadcast --verify -vvv
 * 
 * Base Sepolia Info:
 * - Chain ID: 84532
 * - RPC URL: https://sepolia.base.org
 * - Block Explorer: https://sepolia.basescan.org
 * - Faucet: https://www.alchemy.com/faucets/base-sepolia
 */
contract DeployBaseSepolia is Script {
    // Base Sepolia configuration
    uint256 public constant BASE_SEPOLIA_CHAIN_ID = 84532;
    
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address verifierAddress = vm.envOr("VERIFIER_ADDRESS", vm.addr(deployerPrivateKey));
        
        // Validate private key is set
        require(deployerPrivateKey != 0, "PRIVATE_KEY environment variable not set");
        
        vm.startBroadcast(deployerPrivateKey);
        
        console.log("Deploying to Base Sepolia (Chain ID: %d)...", BASE_SEPOLIA_CHAIN_ID);
        console.log("Deployer address:", vm.addr(deployerPrivateKey));
        console.log("Verifier address:", verifierAddress);
        
        // Step 1: Deploy ProofRegistry (requires verifier address)
        console.log("\n=== Deploying ProofRegistry ===");
        ProofRegistry proofRegistry = new ProofRegistry(verifierAddress);
        console.log("ProofRegistry deployed at:", address(proofRegistry));
        
        // Step 2: Deploy TaskMarket
        console.log("\n=== Deploying TaskMarket ===");
        TaskMarket taskMarket = new TaskMarket();
        console.log("TaskMarket deployed at:", address(taskMarket));
        
        // Step 3: Deploy SettlrEscrow (requires token and proofRegistry addresses)
        console.log("\n=== Deploying SettlrEscrow ===");
        address tokenAddress = vm.envOr("TOKEN_ADDRESS", address(0));
        if (tokenAddress == address(0)) {
            console.log("WARNING: No token address provided. Deploying with address(0).");
            console.log("You must set a valid ERC20 token address before funding tasks.");
        }
        SettlrEscrow escrow = new SettlrEscrow(tokenAddress, address(proofRegistry));
        console.log("SettlrEscrow deployed at:", address(escrow));
        
        // Step 4: Deploy SettlementOrchestrator (requires market and escrow addresses)
        console.log("\n=== Deploying SettlementOrchestrator ===");
        SettlementOrchestrator orchestrator = new SettlementOrchestrator(
            address(taskMarket),
            address(escrow)
        );
        console.log("SettlementOrchestrator deployed at:", address(orchestrator));
        
        // Step 5: Configure integrations
        console.log("\n=== Configuring Integrations ===");
        
        // Set orchestrator in SettlrEscrow
        escrow.setOrchestrator(address(orchestrator));
        console.log("Orchestrator set in SettlrEscrow");
        
        console.log("\n=== Deployment Summary ===");
        console.log("Network: Base Sepolia");
        console.log("Chain ID:", BASE_SEPOLIA_CHAIN_ID);
        console.log("Block Explorer: https://sepolia.basescan.org");
        console.log("-------------------------------------------");
        console.log("ProofRegistry:", address(proofRegistry));
        console.log("TaskMarket:", address(taskMarket));
        console.log("SettlrEscrow:", address(escrow));
        console.log("SettlementOrchestrator:", address(orchestrator));
        if (tokenAddress == address(0)) {
            console.log("Token Address: NOT SET (configure manually)");
        } else {
            console.log("Token Address:", tokenAddress);
        }
        console.log("-------------------------------------------");
        console.log("\nDeployment complete!");
        console.log("\nNext steps:");
        console.log("1. If token address was not set, configure it by deploying a new escrow with a valid token");
        console.log("2. Fund your wallet with Base Sepolia ETH from faucet");
        console.log("3. Get test USDC or other ERC20 tokens on Base Sepolia");
        console.log("4. Approve the SettlrEscrow contract to spend your tokens");
        
        vm.stopBroadcast();
    }
}
