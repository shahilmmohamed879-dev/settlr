#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"; RPC_URL="${ANVIL_RPC_URL:-http://127.0.0.1:8545}"
curl -sf -X POST "$RPC_URL" -H 'Content-Type: application/json' --data '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}' >/dev/null || { echo 'Anvil is not running. Run ./start-anvil.sh'; exit 1; }
cd "$ROOT/contracts"; forge build --force; forge script script/DeployLocal.s.sol:DeployLocal --rpc-url "$RPC_URL" --broadcast -vvv
JSON=$(find broadcast/DeployLocal.s.sol/31337 -name run-latest.json | head -1)
[ -n "$JSON" ] || { echo 'Deployment succeeded but broadcast JSON not found'; exit 1; }
mapfile -t ADDRS < <(python3 - "$JSON" <<'PY'
import json,sys
x=json.load(open(sys.argv[1])); print('\n'.join(t['contractAddress'] for t in x['transactions'] if t.get('contractAddress')))
PY
)
[ ${#ADDRS[@]} -ge 5 ] || { echo 'Could not read deployed addresses'; exit 1; }
cat > "$ROOT/../frontend/.env.local" <<ENV
VITE_ANVIL_RPC_URL=$RPC_URL
VITE_TOKEN_ADDRESS=${ADDRS[0]}
VITE_TASK_MARKET_ADDRESS=${ADDRS[2]}
VITE_ESCROW_ADDRESS=${ADDRS[3]}
VITE_ORCHESTRATOR_ADDRESS=${ADDRS[4]}
ENV
echo "Frontend contract configuration written to frontend/.env.local"
