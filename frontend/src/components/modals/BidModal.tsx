import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Task } from '@/types'
import { useTaskStore } from '@/store/taskStore'
import { useToastStore } from '@/store/toastStore'

interface BidModalProps {
  task: Task
  open: boolean
  onClose: () => void
}

export function BidModal({ task, open, onClose }: BidModalProps) {
  const [amount, setAmount] = useState('')
  const [days, setDays] = useState('')
  const [proposal, setProposal] = useState('')
  const [loading, setLoading] = useState(false)
  const { addBid } = useTaskStore()
  const { addToast } = useToastStore()

  const bondAmount = task.budget * (task.bondRequirement / 100)
  const numAmount = parseFloat(amount) || 0
  const numDays = parseInt(days) || 0

  const handleSubmit = async () => {
    if (!numAmount || !numDays || !proposal.trim()) {
      addToast({ type: 'error', title: 'Missing fields', description: 'Please fill in all required fields.' })
      return
    }
    setLoading(true)
    addToast({ type: 'info', title: 'Locking bond...', description: `Confirm transaction to lock ${bondAmount} USDC bond` })
    
    await new Promise((r) => setTimeout(r, 2000))
    
    const newBid = {
      id: 'b' + Math.random().toString(36).slice(2, 7),
      taskId: task.id,
      solverAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      solverName: 'You',
      reputation: 4.5,
      completionRate: 95,
      bidAmount: numAmount,
      estimatedDays: numDays,
      bondAmount,
      proposal,
      createdAt: new Date().toISOString(),
    }
    addBid(task.id, newBid)
    
    addToast({
      type: 'success',
      title: 'Bid submitted!',
      description: `Your bid of ${numAmount} USDC has been placed. Bond locked.`,
      txHash: '0x' + Math.random().toString(16).slice(2, 12),
    })
    
    setLoading(false)
    setAmount(''); setDays(''); setProposal('')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Submit Bid" size="md">
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-400">Task: <span className="text-slate-200 font-medium">{task.title}</span></p>
          <p className="text-sm text-slate-400 mt-1">Budget: <span className="text-slate-200 font-medium">{task.budget} {task.currency}</span></p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Bid Amount ({task.currency})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder={`Suggested: ${task.budget}`}
            className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Estimated Days
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            placeholder="e.g. 14"
            className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Proposal
          </label>
          <textarea
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            rows={4}
            placeholder="Describe your approach, relevant experience, and why you're the best fit..."
            className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
        </div>

        <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-900">
          <p className="text-xs text-amber-300">
            ⚠️ You must lock <span className="font-bold">{bondAmount} {task.currency}</span> ({task.bondRequirement}% of budget) as a commitment bond. 
            This will be returned upon successful completion or forfeited if you abandon the work.
          </p>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
          <Button onClick={handleSubmit} isLoading={loading} className="flex-1">
            Lock Bond & Submit Bid
          </Button>
        </div>
      </div>
    </Modal>
  )
}