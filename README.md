# Settlr Full Stack (Local Anvil)

## Requirements
- Foundry (`anvil`, `forge`)
- Node.js 18+
- MetaMask

## Run
```bash
./run-local.sh
```
This starts Anvil, deploys MockERC20 + ProofRegistry + TaskMarket + SettlrEscrow + SettlementOrchestrator, writes frontend contract addresses to `frontend/.env.local`, installs frontend dependencies, and starts Vite.

Open the Vite URL, connect MetaMask, and use the local network:
- RPC: `http://127.0.0.1:8545`
- Chain ID: `84532`

Import an Anvil test account into MetaMask using one of the private keys printed by Anvil. Never use these local development keys on a real network.

## Current real integration
The frontend now performs a real wallet connection and real on-chain `TaskMarket.postTask` transaction. The deployed backend also includes bidding, winner selection, escrow creation, funding, freelancer bond locking and work submission contracts. The remaining UI actions still need their mock handlers replaced with calls to those deployed methods for a fully end-to-end UI workflow.
