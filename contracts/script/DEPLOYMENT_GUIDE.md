# Deploy to Base Sepolia Testnet

This guide explains how to deploy the Settlr escrow system to Base Sepolia testnet.

## Prerequisites

1. **Install Foundry** (already done in this environment):
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

2. **Get Base Sepolia ETH**:
   - Visit: https://www.alchemy.com/faucets/base-sepolia
   - Or: https://faucets.chain.link/base-sepolia
   - You'll need ETH for gas fees

3. **Get Test USDC** (optional but recommended):
   - Base Sepolia USDC address: `0x036CbD53842c5426634e7929541eC2318f3dCF7e`
   - Get tokens from faucet or bridge from mainnet

## Environment Setup

Set your environment variables:

```bash
# REQUIRED: Your private key (DO NOT share this!)
export PRIVATE_KEY="your_wallet_private_key_here"

# OPTIONAL: Verifier address (defaults to your deployer address)
export VERIFIER_ADDRESS="0xYourVerifierAddressHere"

# OPTIONAL: ERC20 token address (e.g., USDC on Base Sepolia)
# If not set, you'll need to configure it manually after deployment
export TOKEN_ADDRESS="0x036CbD53842c5426634e7929541eC2318f3dCF7e"  # USDC on Base Sepolia
```

## Deployment Command

```bash
cd contracts
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --verify \
  -vvv
```

### Without Verification (faster):
```bash
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  -vvv
```

## Verify Contracts Manually (if --verify fails)

If automatic verification fails, verify each contract manually:

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

## Post-Deployment Steps

1. **Record Contract Addresses**: Save all deployed contract addresses from the deployment output.

2. **Configure Token** (if deployed without token):
   - If you deployed without a token address, you'll need to redeploy SettlrEscrow with a valid ERC20 token address.

3. **Approve Token Spending**:
   Before users can interact with the escrow, they need to approve token spending:
   ```solidity
   // Example using cast
   cast send \
     --private-key $PRIVATE_KEY \
     --rpc-url https://sepolia.base.org \
     <Token_Address> \
     "approve(address,uint256)(bool)" \
     <SettlrEscrow_Address> \
     115792089237316195423570985008687907853269984665640564039457584007913129639935
   ```

4. **Test the System**:
   - Post a task on TaskMarket
   - Have freelancers bid
   - Select a winner
   - Create escrow via SettlementOrchestrator
   - Fund the task
   - Lock freelancer bond
   - Submit work
   - Accept or request changes

## Network Information

- **Network**: Base Sepolia
- **Chain ID**: 84532
- **RPC URL**: https://sepolia.base.org
- **Block Explorer**: https://sepolia.basescan.org
- **Currency**: ETH (testnet)

## Common Tokens on Base Sepolia

| Token | Address |
|-------|---------|
| USDC | `0x036CbD53842c5426634e7929541eC2318f3dCF7e` |
| DAI | `0x0B2FddeC9C168a7Ca1F867A06b58E41653a5C229` |
| WETH | `0x4200000000000000000000000000000000000006` |

## Troubleshooting

### "nonce too low" error
```bash
# Wait for transactions to confirm or increase gas price
forge script script/DeployBaseSepolia.s.sol \
  --rpc-url https://sepolia.base.org \
  --broadcast \
  --with-gas-price 1000000000  # 1 gwei
```

### "insufficient funds" error
- Get more test ETH from faucets
- Check your balance: `cast balance --rpc-url https://sepolia.base.org <your_address>`

### Verification fails
- Wait a few minutes for the block explorer to index
- Try manual verification (see above)
- Ensure constructor arguments are correctly encoded

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit your private key to version control
- Use a dedicated deployment wallet for testnet
- For mainnet deployment, use a multi-sig wallet and thorough auditing
- This is testnet code - always audit before mainnet deployment
