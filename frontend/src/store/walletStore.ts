import { create } from 'zustand'
import { WalletState } from '@/types'
import { ANVIL_ACCOUNTS, connectWallet, selectAnvilAccount } from '@/lib/web3'

interface WalletStore extends WalletState {
  accountIndex: number
  accountLabel: string | null
  connect: () => Promise<void>
  selectAccount: (index: number) => Promise<void>
  disconnect: () => void
  setConnecting: (v: boolean) => void
}

const savedIndex = Number(localStorage.getItem('settlr-anvil-account') ?? '0')

export const useWalletStore = create<WalletStore>((set) => ({
  connected: false,
  address: null,
  chainId: null,
  chainName: null,
  nativeBalance: null,
  tokenBalance: null,
  connecting: false,
  accountIndex: ANVIL_ACCOUNTS[savedIndex]?.index ?? 0,
  accountLabel: ANVIL_ACCOUNTS[savedIndex]?.label ?? 'Client',

  connect: async () => {
    set({ connecting: true })
    try {
      const w = await connectWallet()
      set({
        connected: true,
        address: w.address,
        chainId: 31337,
        chainName: 'Local Anvil',
        nativeBalance: w.balance,
        tokenBalance: null,
        accountIndex: w.accountIndex,
        accountLabel: w.accountLabel,
        connecting: false,
      })
    } catch (e) {
      set({ connecting: false })
      throw e
    }
  },

  selectAccount: async (index) => {
    set({ connecting: true })
    try {
      selectAnvilAccount(index)
      const w = await connectWallet()
      set({
        connected: true,
        address: w.address,
        chainId: 31337,
        chainName: 'Local Anvil',
        nativeBalance: w.balance,
        tokenBalance: null,
        accountIndex: w.accountIndex,
        accountLabel: w.accountLabel,
        connecting: false,
      })
    } catch (e) {
      set({ connecting: false })
      throw e
    }
  },

  disconnect: () => set({
    connected: false,
    address: null,
    chainId: null,
    chainName: null,
    nativeBalance: null,
    tokenBalance: null,
  }),

  setConnecting: (connecting) => set({ connecting }),
}))
