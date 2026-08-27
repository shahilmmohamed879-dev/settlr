#!/bin/bash

# Base Sepolia Deployment Script
# This script automates the deployment process to Base Sepolia testnet

set -e  # Exit on error

echo "=========================================="
echo "  Base Sepolia Deployment Script"
echo "=========================================="
echo ""

# Load environment variables
if [ -f .env ]; then
    echo "✓ Loading environment variables from .env"
    export $(grep -v '^#' .env | xargs)
else
    echo "⚠ Warning: .env file not found. Using environment variables."
fi

# Validate PRIVATE_KEY is set
if [ -z "$PRIVATE_KEY" ] || [ "$PRIVATE_KEY" = "your_wallet_private_key_here" ]; then
    echo "❌ ERROR: PRIVATE_KEY not set or still using placeholder"
    echo ""
    echo "Please update .env file with your actual private key:"
    echo "  PRIVATE_KEY=\"your_actual_private_key\""
    echo ""
    echo "OR set it as environment variable:"
    echo "  export PRIVATE_KEY=\"your_actual_private_key\""
    echo ""
    exit 1
fi

# Check if forge is installed
if ! command -v forge &> /dev/null; then
    echo "❌ ERROR: Foundry/forge not installed"
    echo "Install with: curl -L https://foundry.paradigm.xyz | bash"
    exit 1
fi

echo "✓ Foundry detected"
echo ""

# Get deployer address
DEPLOYER_ADDRESS=$(cast wallet address $PRIVATE_KEY 2>/dev/null || echo "unknown")
echo "Deployer Address: $DEPLOYER_ADDRESS"
echo ""

# Check balance (optional, non-blocking)
echo "Checking balance on Base Sepolia..."
BALANCE=$(cast balance --rpc-url https://sepolia.base.org $DEPLOYER_ADDRESS 2>/dev/null || echo "0")
echo "Current Balance: $BALANCE ETH"
echo ""

# Check if balance is too low
if [ "$BALANCE" = "0" ] || [ "$BALANCE" = "0.0" ]; then
    echo "⚠ WARNING: Balance appears to be 0 or could not be checked"
    echo "Get test ETH from: https://www.alchemy.com/faucets/base-sepolia"
    echo ""
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build contracts
echo "Building contracts..."
cd contracts
forge build --force
cd ..
echo "✓ Contracts built successfully"
echo ""

# Prepare deployment command
DEPLOY_CMD="forge script contracts/script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --verify \
  -vvv"

echo "=========================================="
echo "  Ready to Deploy!"
echo "=========================================="
echo ""
echo "Network: Base Sepolia (Chain ID: 84532)"
echo "RPC URL: https://sepolia.base.org"
echo "Explorer: https://sepolia.basescan.org"
echo ""

if [ -n "$TOKEN_ADDRESS" ] && [ "$TOKEN_ADDRESS" != "0x0000000000000000000000000000000000000000" ]; then
    echo "Token Address: $TOKEN_ADDRESS (USDC)"
else
    echo "Token Address: NOT SET (will deploy without token)"
fi

echo ""
echo "Deployment Command:"
echo "$DEPLOY_CMD"
echo ""

read -p "Proceed with deployment? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "🚀 Deploying contracts..."
echo ""

# Execute deployment
eval $DEPLOY_CMD

echo ""
echo "=========================================="
echo "  Deployment Complete!"
echo "=========================================="
echo ""
echo "Next Steps:"
echo "1. Save the deployed contract addresses"
echo "2. Approve token spending (if using ERC20)"
echo "3. Test the system with a sample task"
echo ""
echo "For token approval, run:"
echo "  cast send --private-key \$PRIVATE_KEY --rpc-url https://sepolia.base.org \$TOKEN_ADDRESS \"approve(address,uint256)(bool)\" <SettlrEscrow_Address> 115792089237316195423570985008687907853269984665640564039457584007913129639935"
echo ""
