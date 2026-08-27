# 🚀 Deploy to Base Sepolia - Quick Start Guide

Your project is **100% ready** to deploy to Base Sepolia testnet! Follow these steps:

## 📋 Prerequisites

### 1. Get Base Sepolia Test ETH
Before deploying, fund your wallet with test ETH:
- **Faucet**: https://www.alchemy.com/faucets/base-sepolia
- **Alternative**: https://faucets.chain.link/base-sepolia

### 2. (Optional) Get Test ERC20 Tokens
For testing the escrow with real tokens:
- **USDC on Base Sepolia**: Check https://sepolia.basescan.org for USDC contract
- Or deploy your own test token

### 3. Get Basescan API Key (Optional - for contract verification)
- Visit: https://basescan.org/myapikey
- Create an API key to verify your contracts on the block explorer

---

## 🔧 Deployment Steps

### Option A: Interactive Script (Recommended)

```bash
cd /workspace/contracts

# Set your private key (NEVER share this!)
export PRIVATE_KEY="your_wallet_private_key_here"

# Optional: Set ERC20 token address (e.g., USDC on Base Sepolia)
export TOKEN_ADDRESS="0x..."

# Optional: Set verifier address (defaults to your deployer address)
export VERIFIER_ADDRESS="0x..."

# Optional: Set Basescan API key for contract verification
export ETHERSCAN_API_KEY="your_basescan_api_key"

# Run the deployment script
./deploy-base-sepolia.sh
```

### Option B: Direct Forge Command

```bash
cd /workspace/contracts

# Set environment variables
export PRIVATE_KEY="your_wallet_private_key_here"
export TOKEN_ADDRESS="0x..."  # Optional
export VERIFIER_ADDRESS="0x..."  # Optional

# Deploy without verification
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  -vvv

# Deploy WITH verification on Basescan
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --verify \
  --etherscan-api-key YOUR_BASESCAN_API_KEY \
  -vvv
```

---

## 📦 What Gets Deployed

The deployment script will deploy 4 contracts in sequence:

1. **ProofRegistry** - Manages work submission receipts and IPFS hashes
2. **TaskMarket** - Marketplace for posting and bidding on tasks
3. **SettlrEscrow** - Main escrow contract holding funds and managing lifecycle
4. **SettlementOrchestrator** - Bridges TaskMarket and SettlrEscrow

After deployment, the script automatically:
- Sets the orchestrator address in the escrow contract
- Displays all contract addresses
- Provides next steps

---

## 🔍 Network Information

| Property | Value |
|----------|-------|
| **Network** | Base Sepolia Testnet |
| **Chain ID** | 84532 |
| **RPC URL** | https://sepolia.base.org |
| **Block Explorer** | https://sepolia.basescan.org |
| **Currency** | ETH (testnet) |

---

## ✅ Post-Deployment Checklist

After successful deployment:

1. **Save Contract Addresses** - Copy all 4 deployed addresses from the output
2. **Verify on Basescan** - If you used `--verify`, check contracts on the explorer
3. **Fund with Tokens** - If using ERC20 tokens, transfer some to your wallet
4. **Approve Escrow** - Approve SettlrEscrow to spend your tokens:
   ```solidity
   // Example using cast or ethers.js
   cast send $TOKEN_ADDRESS "approve(address,uint256)" $ESCROW_ADDRESS $AMOUNT \
     --private-key $PRIVATE_KEY \
     --rpc-url https://sepolia.base.org
   ```
5. **Test the System** - Create a task, submit work, and test the full workflow!

---

## 🛠 Troubleshooting

### "insufficient funds" error
- Get more test ETH from the faucet
- Wait a few minutes for the faucet transaction to confirm

### "nonce too low" error
- Wait for pending transactions to confirm
- Or increase gas price slightly

### Contract verification failed
- Ensure ETHERSCAN_API_KEY is set correctly
- Try manual verification on Basescan website
- Wait a few minutes and retry

### "invalid private key" error
- Ensure your private key doesn't have "0x" prefix in some shells
- Try: `export PRIVATE_KEY=${PRIVATE_KEY#0x}`

---

## 📞 Support

If you encounter issues:
1. Check the full deployment logs for specific errors
2. Verify your wallet has sufficient test ETH
3. Ensure you're using the correct RPC URL
4. Check Base Sepolia network status: https://status.base.org

---

## 🎯 Next Steps After Deployment

Once deployed, you can:
- Interact via Web3 frontend (connect to Base Sepolia network)
- Use cast/forge commands to test contracts
- Monitor events on Basescan
- Integrate with Kleros for dispute resolution
- Build your dApp on top of these contracts!

**Happy deploying! 🚀**
