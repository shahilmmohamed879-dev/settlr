import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Task } from '@/types'
import { useTaskStore } from '@/store/taskStore'
import { useToastStore } from '@/store/toastStore'
import { CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react'

interface ReviewModalProps {
  task: Task
  open: boolean
  onClose: () => void
}

type ReviewAction = 'approve' | 'changes' | 'dispute'

export function ReviewModal({ task, open, onClose }: ReviewModalProps) {
  const [action, setAction] = useState<ReviewAction>('approve')
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)
  const { approveWork, requestChanges, raiseDispute } = useTaskStore()
  const { addToast } = useToastStore()

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))

    if (action === 'approve') {
      approveWork(task.id)
      addToast({
        type: 'success',
        title: 'Work approved & settled!',
        description: `${task.budget} ${task.currency} released to solver. Bond returned.`,
        txHash: '0x' + Math.random().toString(16).slice(2, 12),
      })
    } else if (action === 'changes') {
      if (!reason.trim()) {
        addToast({ type: 'error', title: 'Reason required', description: 'Please explain what needs to change.' })
        setLoading(false); return
      }
      requestChanges(task.id, reason)
      addToast({
        type: 'warning',
        title: 'Changes requested',
        description: 'Solver has been notified. Bond remains locked.',
      })
    } else {
      if (!reason.trim()) {
        addToast({ type: 'error', title: 'Reason required', description: 'Please explain the dispute.' })
        setLoading(false); return
      }
      raiseDispute(task.id, reason)
      addToast({
        type: 'error',
        title: 'Dispute raised',
        description: 'Funds are frozen pending resolution.',
        txHash: '0x' + Math.random().toString(16).slice(2, 12),
      })
    }

    setLoading(false)
    setReason('')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Review Submission" size="md">
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-400">Task: <span className="text-slate-200 font-medium">{task.title}</span></p>
          {task.deliveryHash && (
            <p className="text-xs text-slate-500 mt-2 font-mono">Delivery: {task.deliveryHash}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Your Decision</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setAction('approve')}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-colors ${
                action === 'approve'
                  ? 'border-emerald-600 bg-emerald-950/30 text-emerald-300'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-xs font-medium">Approve</span>
            </button>
            <button
              onClick={() => setAction('changes')}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-colors ${
                action === 'changes'
                  ? 'border-amber-600 bg-amber-950/30 text-amber-300'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              <RotateCcw className="h-5 w-5" />
              <span className="text-xs font-medium">Request Changes</span>
            </button>
            <button
              onClick={() => setAction('dispute')}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition-colors ${
                action === 'dispute'
                  ? 'border-red-600 bg-red-950/30 text-red-300'
                  : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
              }`}
            >
              <AlertTriangle className="h-5 w-5" />
              <span className="text-xs font-medium">Dispute</span>
            </button>
          </div>
        </div>

        {action !== 'approve' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              {action === 'changes' ? 'What needs to change?' : 'Reason for dispute'}
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder={action === 'changes' ? 'Describe the required changes...' : 'Explain why the deliverables do not meet acceptance criteria...'}
              className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          </div>
        )}

        {action === 'approve' && (
          <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-900">
            <p className="text-xs text-emerald-300">
              ✓ Approving will release <span className="font-bold">{task.budget} {task.currency}</span> to the solver and return their bond.
            </p>
          </div>
        )}

        {action === 'dispute' && (
          <div className="p-3 rounded-lg bg-red-950/30 border border-red-900">
            <p className="text-xs text-red-300">
              ⚠️ Disputing will freeze funds pending resolution. Both parties' bonds may be at risk.
            </p>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
          <Button
            onClick={handleSubmit}
            isLoading={loading}
            variant={action === 'dispute' ? 'danger' : action === 'changes' ? 'secondary' : 'primary'}
            className="flex-1"
          >
            Confirm {action === 'approve' ? 'Approval' : action === 'changes' ? 'Changes Request' : 'Dispute'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}