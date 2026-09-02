#!/usr/bin/env bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
"$ROOT/backend/start-anvil.sh" &
ANVIL_PID=$!
trap 'kill $ANVIL_PID 2>/dev/null || true' EXIT
sleep 2
"$ROOT/backend/deploy-local.sh"
cd "$ROOT/frontend"
npm install
npm run dev -- --host 0.0.0.0
