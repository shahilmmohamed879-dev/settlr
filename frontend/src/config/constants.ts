export const DEMO_MODE = false

export const SUPPORTED_CHAIN = {
  id: 31337, // Local Anvil
  name: 'Local Anvil',
  rpcUrl: import.meta.env.VITE_ANVIL_RPC_URL || 'http://127.0.0.1:8545',
  blockExplorer: '',
  nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
}

export const CONTRACT_ADDRESSES = {
  taskMarket: (import.meta.env.VITE_TASK_MARKET_ADDRESS as string) || '0x0000000000000000000000000000000000000000',
  settlrEscrow: (import.meta.env.VITE_SETTLR_ESCROW_ADDRESS as string) || '0x0000000000000000000000000000000000000000',
  proofRegistry: (import.meta.env.VITE_PROOF_REGISTRY_ADDRESS as string) || '0x0000000000000000000000000000000000000000',
  settlementToken: (import.meta.env.VITE_TOKEN_ADDRESS as string) || '0x0000000000000000000000000000000000000000',
}

export const SETTLEMENT_TOKEN = {
  symbol: 'USDC',
  decimals: 6,
}

export function explorerTxUrl(hash: string) {
  return SUPPORTED_CHAIN.blockExplorer ? `${SUPPORTED_CHAIN.blockExplorer}/tx/${hash}` : `#${hash}`
}

export function explorerAddressUrl(address: string) {
  return SUPPORTED_CHAIN.blockExplorer ? `${SUPPORTED_CHAIN.blockExplorer}/address/${address}` : `#${address}`
}