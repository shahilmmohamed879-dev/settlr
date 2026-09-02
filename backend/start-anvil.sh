#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
docker compose up -d anvil
printf 'Anvil RPC: http://127.0.0.1:8545\n'
printf 'Chain ID: 31337\n'
printf 'Check: curl -s -X POST http://127.0.0.1:8545 -H "Content-Type: application/json" --data '\''{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'\''\n'
