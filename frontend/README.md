# Settlr — Trustless Task Settlement (Frontend)

Reconstructed from a previous chat session and verified to build cleanly
(`tsc -b` and `vite build` both pass with zero errors).

## Stack
React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + Zustand + React Router 6

## Setup
```bash
npm install
npm run dev      # local dev server
npm run build    # production build (already verified working)
```

## What's included
- **Marketplace** (`/`) — browse tasks, stats overview, search/filter UI
- **Task Detail** (`/task/:id`) — full brief, test cases, activity timeline, bids, action buttons that change task status
- **Post Task** (`/post`) — form to create a new task
- **My Tasks** (`/my-tasks`) — dashboard of tasks by role
- **Bid / Submit Work / Review modals** — the core interaction flows (bid → lock bond → submit work → approve/request changes/dispute)
- **Toast notification system** for tx feedback
- **Wallet connect (mock)** — `DEMO_MODE = true` in `src/config/constants.ts` simulates a wallet connection; no real Web3 library is wired up yet

## State
- `walletStore` — mock wallet connection state
- `taskStore` — all task data + status-transition actions (bids, work submission, review, disputes)
- `txStore` / `toastStore` — transaction + notification tracking
- `demoData.ts` — seed tasks covering every `TaskStatus`

## Known gaps (next steps, not yet built)
- No real on-chain integration (wagmi/viem) — everything is mocked/simulated
- No smart contract ABIs wired to the UI
- No persistence — state resets on reload
- `npm run lint` not yet verified (build/typecheck are clean; lint config wasn't part of this session)

## Design
Dark theme, slate/blue palette, card-based layouts, status badges per `TaskStatus`/`MarketStage`.
