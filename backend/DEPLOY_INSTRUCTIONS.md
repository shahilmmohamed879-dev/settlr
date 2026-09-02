# 🚀 Base Sepolia Deployment Guide

Your project is **READY TO DEPLOY** to Base Sepolia testnet! Follow these steps:

## 📋 Quick Start (3 Steps)

### Step 1: Get Your Private Key

Export your private key from your wallet (MetaMask, etc.):
- Open MetaMask → Settings → Security & Privacy → Reveal Secret Recovery Phrase
- **OR** use a dedicated deployment wallet (recommended for testnet)

⚠️ **SECURITY WARNING**: Never share your private key or commit it to GitHub!

### Step 2: Update .env File

Edit the `.env` file in the root directory:

```bash
# Replace with YOUR actual private key
PRIVATE_KEY="your_actual_private_key_here"

# Optional: Use your address as verifier (leave empty to use deployer address)
VERIFIER_ADDRESS=""

# Optional: Token address (USDC on Base Sepolia - already set)
TOKEN_ADDRESS="0x036CbD53842c5426634e7929541eC2318f3dCF7e"
```

### Step 3: Get Test ETH

Visit one of these faucets to get Base Sepolia ETH:
- 🔗 https://www.alchemy.com/faucets/base-sepolia
- 🔗 https://faucets.chain.link/base-sepolia

You'll need ~0.01-0.05 ETH for deployment gas fees.

---

## 🎯 Deploy Using Automated Script (Recommended)

```bash
cd /workspace
./deploy.sh
```

The script will:
- ✅ Validate your private key
- ✅ Check your balance
- ✅ Build all contracts
- ✅ Deploy all 4 contracts
- ✅ Verify on Basescan
- ✅ Show you all contract addresses

---

## 🎯 Deploy Manually

If you prefer manual control:

```bash
# Load environment
source .env

# Deploy with verification
cd contracts
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --verify \
  -vvv
```

### Without Verification (Faster)

```bash
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  -vvv
```

---

## 📦 What Gets Deployed

The deployment script deploys 4 contracts in order:

| # | Contract | Purpose |
|---|----------|---------|
| 1 | **ProofRegistry** | Verifies work submission receipts |
| 2 | **TaskMarket** | Marketplace for posting/bidding on tasks |
| 3 | **SettlrEscrow** | Main escrow contract holding funds |
| 4 | **SettlementOrchestrator** | Bridges marketplace to escrow |

---

## ✅ Post-Deployment Steps

### 1. Save Contract Addresses

After deployment, you'll see output like:
```
ProofRegistry: 0x...
TaskMarket: 0x...
SettlrEscrow: 0x...
SettlementOrchestrator: 0x...
```

**Save these addresses!** You'll need them for your frontend/dApp.

### 2. Approve Token Spending (If Using USDC)

Users must approve the escrow contract to spend their tokens:

```bash
# Replace <SettlrEscrow_Address> with your deployed address
cast send \
  --private-key $PRIVATE_KEY \
  --rpc-url https://sepolia.base.org \
  $TOKEN_ADDRESS \
  "approve(address,uint256)(bool)" \
  <SettlrEscrow_Address> \
  115792089237316195423570985008687907853269984665640564039457584007913129639935
```

### 3. Test the System

Create a test task flow:
1. Post a task on TaskMarket
2. Have a freelancer bid
3. Select winner and create escrow
4. Fund the escrow
5. Lock freelancer bond
6. Submit work
7. Accept delivery

---

## 🔍 Verify Contracts Manually

If automatic verification fails:

```bash
# Verify ProofRegistry
forge verify-contract \
  --chain-id 84532 \
  --constructor-args $(cast abi-encode "constructor(address)" 0xYourVerifierAddress) \
  <ProofRegistry_Address> \
  src/ProofRegistry.sol:ProofRegistry

# Verify TaskMarket
forge verify-contract \
  --chain-id 84532 \
  <TaskMarket_Address> \
  src/TaskMarket.sol:TaskMarket

# Verify SettlrEscrow
forge verify-contract \
  --chain-id 84532 \
  --constructor-args $(cast abi-encode "constructor(address,address)" 0xTokenAddress 0xProofRegistryAddress) \
  <SettlrEscrow_Address> \
  src/SettlrEscrow.sol:SettlrEscrow

# Verify SettlementOrchestrator
forge verify-contract \
  --chain-id 84532 \
  --constructor-args $(cast abi-encode "constructor(address,address)" 0xTaskMarketAddress 0xEscrowAddress) \
  <Orchestrator_Address> \
  src/SettlementOrchestrator.sol:SettlementOrchestrator
```

Then view on: https://sepolia.basescan.org

---

## 🛠 Troubleshooting

### "nonce too low" error
Wait for transactions to confirm or increase gas price:
```bash
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --with-gas-price 1000000000
```

### "insufficient funds" error
- Get more test ETH from faucets
- Check balance: `cast balance --rpc-url https://sepolia.base.org <your_address>`

### "PRIVATE_KEY not set" error
- Ensure `.env` file exists and has valid PRIVATE_KEY
- Or export: `export PRIVATE_KEY="your_key"`

### Verification fails
- Wait 1-2 minutes for Basescan to index
- Try manual verification (see above)
- Check constructor arguments are correct

---

## 📊 Network Information

| Property | Value |
|----------|-------|
| **Network** | Base Sepolia |
| **Chain ID** | 84532 |
| **RPC URL** | https://sepolia.base.org |
| **Block Explorer** | https://sepolia.basescan.org |
| **Currency** | ETH (testnet) |

### Test Tokens on Base Sepolia

| Token | Address |
|-------|---------|
| USDC | `0x036CbD53842c5426634e7929541eC2318f3dCF7e` |
| DAI | `0x0B2FddeC9C168a7Ca1F867A06b58E41653a5C229` |
| WETH | `0x4200000000000000000000000000000000000006` |

---

## 🔐 Security Notes

⚠️ **IMPORTANT**:
- ✅ Use a dedicated deployment wallet for testnet
- ✅ Never commit private keys to version control
- ✅ Add `.env` to `.gitignore` (already done)
- ⚠️ This is TESTNET code - audit before mainnet deployment
- ⚠️ For mainnet, use multi-sig wallet and professional audit

---

## 📞 Need Help?

1. Check the full guide: `contracts/script/DEPLOYMENT_GUIDE.md`
2. Review deployment script: `contracts/script/DeployBaseSepolia.s.sol`
3. Run tests first: `cd contracts && forge test`

---

**Ready? Let's deploy!** 🚀

```bash
./deploy.sh
```
