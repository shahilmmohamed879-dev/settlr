#!/bin/bash

# Base Sepolia Deployment Script
# This script guides you through deploying your escrow system to Base Sepolia

set -e

echo "=========================================="
echo "  Base Sepolia Deployment Guide"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

cd /workspace/contracts

echo -e "${YELLOW}Step 1: Check Environment Variables${NC}"
echo "-------------------------------------------"

if [ -z "$PRIVATE_KEY" ]; then
    echo -e "${RED}❌ PRIVATE_KEY not set${NC}"
    echo "   You need to set your private key:"
    echo "   export PRIVATE_KEY=\"your_private_key_here\""
    echo ""
else
    echo -e "${GREEN}✓ PRIVATE_KEY is set${NC}"
fi

if [ -z "$TOKEN_ADDRESS" ]; then
    echo -e "${YELLOW}⚠ TOKEN_ADDRESS not set${NC}"
    echo "   Optional: Set an ERC20 token address (e.g., USDC on Base Sepolia)"
    echo "   export TOKEN_ADDRESS=\"0x...\""
    echo "   If not set, you'll need to configure it manually after deployment."
    echo ""
else
    echo -e "${GREEN}✓ TOKEN_ADDRESS is set: $TOKEN_ADDRESS${NC}"
fi

if [ -z "$VERIFIER_ADDRESS" ]; then
    echo -e "${YELLOW}ℹ VERIFIER_ADDRESS not set${NC}"
    echo "   Will use deployer address as verifier by default."
    echo ""
else
    echo -e "${GREEN}✓ VERIFIER_ADDRESS is set: $VERIFIER_ADDRESS${NC}"
fi

echo ""
echo -e "${YELLOW}Step 2: Verify Base Sepolia Configuration${NC}"
echo "-------------------------------------------"
echo "Network: Base Sepolia Testnet"
echo "Chain ID: 84532"
echo "RPC URL: https://sepolia.base.org"
echo "Block Explorer: https://sepolia.basescan.org"
echo "Faucet: https://www.alchemy.com/faucets/base-sepolia"
echo ""

echo -e "${YELLOW}Step 3: Check ETH Balance${NC}"
echo "-------------------------------------------"
echo "Before deploying, ensure your wallet has Base Sepolia ETH for gas."
echo "Get test ETH from: https://www.alchemy.com/faucets/base-sepolia"
echo ""
read -p "Press Enter after you have funded your wallet..." 

echo ""
echo -e "${YELLOW}Step 4: Compile Contracts${NC}"
echo "-------------------------------------------"
forge build
echo -e "${GREEN}✓ Contracts compiled successfully${NC}"
echo ""

echo -e "${YELLOW}Step 5: Deploy to Base Sepolia${NC}"
echo "-------------------------------------------"
echo "Deploying contracts..."
echo ""

# Build the forge command
DEPLOY_CMD="forge script script/DeployBaseSepolia.s.sol --rpc-url https://sepolia.base.org --broadcast -vvv"

# Add verification flag if ETHERSCAN_API_KEY is set
if [ -n "$ETHERSCAN_API_KEY" ]; then
    DEPLOY_CMD="$DEPLOY_CMD --verify --etherscan-api-key $ETHERSCAN_API_KEY"
    echo -e "${GREEN}✓ Verification enabled with Etherscan API key${NC}"
else
    echo -e "${YELLOW}⚠ ETHERSCAN_API_KEY not set${NC}"
    echo "   To verify contracts on Basescan, set:"
    echo "   export ETHERSCAN_API_KEY=\"your_basescan_api_key\""
    echo "   Get API key from: https://basescan.org/myapikey"
    echo ""
fi

echo "Running: $DEPLOY_CMD"
echo ""

# Execute deployment
$DEPLOY_CMD

echo ""
echo -e "${GREEN}=========================================="
echo "  Deployment Complete!"
echo "==========================================${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Copy the deployed contract addresses above"
echo "2. If TOKEN_ADDRESS was not set, deploy a new SettlrEscrow with a valid token"
echo "3. Approve the SettlrEscrow contract to spend your ERC20 tokens"
echo "4. Start creating tasks on the TaskMarket!"
echo ""
echo "View your contracts on Basescan: https://sepolia.basescan.org"
echo ""
