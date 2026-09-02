import { create } from 'zustand'
import { TxRecord, TxState } from '@/types'

interface TxStore {
  transactions: TxRecord[]
  addTx: (tx: Omit<TxRecord, 'id' | 'createdAt'>) => void
  updateTx: (id: string, updates: Partial<TxRecord>) => void
}

export const useTxStore = create<TxStore>((set) => ({
  transactions: [],
  addTx: (tx) => {
    const newTx: TxRecord = {
      ...tx,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString(),
    }
    set((state) => ({ transactions: [newTx, ...state.transactions] }))
  },
  updateTx: (id, updates) => {
    set((state) => ({
      transactions: state.transactions.map((tx) =>
        tx.id === id ? { ...tx, ...updates } : tx
      ),
    }))
  },
}))