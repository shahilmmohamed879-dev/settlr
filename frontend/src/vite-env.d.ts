/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TASK_MARKET_ADDRESS: string
  readonly VITE_SETTLR_ESCROW_ADDRESS: string
  readonly VITE_PROOF_REGISTRY_ADDRESS: string
  readonly VITE_TOKEN_ADDRESS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 