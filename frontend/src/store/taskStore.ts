import { create } from 'zustand'
import { Task, TaskStatus, MarketStage, Bid } from '@/types'
import { demoTasks } from '@/data/demoData'

interface TaskStore {
  tasks: Task[]
  getTask: (id: string) => Task | undefined
  addTask: (task: Task) => void
  addBid: (taskId: string, bid: Bid) => void
  selectWinner: (taskId: string, bidId: string) => void
  submitWork: (taskId: string, deliveryHash: string) => void
  approveWork: (taskId: string) => void
  requestChanges: (taskId: string, reason: string) => void
  raiseDispute: (taskId: string, reason: string) => void
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: demoTasks,
  getTask: (id) => get().tasks.find((t) => t.id === id),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  addBid: (taskId, bid) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? { ...t, bids: [...t.bids, bid], marketStage: 'BidsIn' as MarketStage }
          : t
      ),
    })),
  selectWinner: (taskId, bidId) =>
    set((state) => {
      const task = state.tasks.find((t) => t.id === taskId)
      const bid = task?.bids.find((b) => b.id === bidId)
      if (!task || !bid) return state
      return {
        tasks: state.tasks.map((t) =>
          t.id === taskId
            ? {
                ...t,
                status: 'BondLocked' as TaskStatus,
                marketStage: 'WinnerSelected' as MarketStage,
                solverAddress: bid.solverAddress,
                solverName: bid.solverName,
              }
            : t
        ),
      }
    }),
  submitWork: (taskId, deliveryHash) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: 'WorkSubmitted' as TaskStatus,
              deliveryHash,
              proofTimestamp: new Date().toISOString(),
            }
          : t
      ),
    })),
  approveWork: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: 'Completed' as TaskStatus,
              settlementTxHash: '0x' + Math.random().toString(16).slice(2, 12),
            }
          : t
      ),
    })),
  requestChanges: (taskId, reason) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: 'ChangesRequested' as TaskStatus,
              lastChangeReason: reason,
              revisionCount: t.revisionCount + 1,
            }
          : t
      ),
    })),
  raiseDispute: (taskId, reason) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: 'Disputed' as TaskStatus,
              disputeReason: reason,
              disputeStatus: 'Open',
            }
          : t
      ),
    })),
}))