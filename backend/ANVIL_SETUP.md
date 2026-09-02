# Local Anvil Setup

This project now supports a persistent local Anvil blockchain through Docker Compose.

## Start the blockchain

```bash
./start-anvil.sh
```

RPC URL: `http://127.0.0.1:8545`  
Chain ID: `84532`

## Deploy the full Settlr stack

```bash
./deploy-local.sh
```

The deployment script deploys, in order:

1. MockERC20 (tUSDC)
2. ProofRegistry
3. TaskMarket
4. SettlrEscrow
5. SettlementOrchestrator
6. Sets the orchestrator on SettlrEscrow

## Stop / reset

```bash
docker compose down
```

To reset all chain state, run:

```bash
docker compose down --volumes
docker compose up -d anvil
```

## Direct Foundry commands

If Foundry is installed locally instead of Docker:

```bash
anvil --chain-id 84532
cd contracts
forge script script/DeployLocal.s.sol:DeployLocal --rpc-url http://127.0.0.1:8545 --broadcast -vvv
```
