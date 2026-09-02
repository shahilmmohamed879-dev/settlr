import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Task } from '@/types'
import { useTaskStore } from '@/store/taskStore'
import { useToastStore } from '@/store/toastStore'
import { Upload, FileText } from 'lucide-react'

interface SubmitWorkModalProps {
  task: Task
  open: boolean
  onClose: () => void
}

export function SubmitWorkModal({ task, open, onClose }: SubmitWorkModalProps) {
  const [ipfsHash, setIpfsHash] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const { submitWork } = useTaskStore()
  const { addToast } = useToastStore()

  const handleSubmit = async () => {
    if (!ipfsHash.trim()) {
      addToast({ type: 'error', title: 'Missing IPFS hash', description: 'Please upload your deliverables first.' })
      return
    }
    setLoading(true)
    addToast({ type: 'info', title: 'Uploading to IPFS...', description: 'Pinning deliverables and registering proof.' })
    
    await new Promise((r) => setTimeout(r, 2500))
    submitWork(task.id, ipfsHash)
    
    addToast({
      type: 'success',
      title: 'Work submitted!',
      description: 'Proof registered on-chain. Client has been notified for review.',
      txHash: '0x' + Math.random().toString(16).slice(2, 12),
    })
    
    setLoading(false)
    setIpfsHash(''); setNotes('')
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Submit Deliverables" size="md">
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-400">Task: <span className="text-slate-200 font-medium">{task.title}</span></p>
          <p className="text-xs text-slate-500 mt-2">
            Revision {task.revisionCount + 1} of {task.maxRevisions} allowed
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Upload Deliverables
          </label>
          <div
            onClick={() => setIpfsHash('Qm' + Math.random().toString(36).slice(2, 44))}
            className="flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed border-slate-700 bg-slate-900/50 hover:border-blue-600 hover:bg-slate-900 transition-colors cursor-pointer"
          >
            <Upload className="h-8 w-8 text-slate-500 mb-2" />
            <p className="text-sm text-slate-300">Click to upload files</p>
            <p className="text-xs text-slate-500 mt-1">Files will be pinned to IPFS</p>
          </div>
          {ipfsHash && (
            <div className="mt-2 flex items-center gap-2 p-2 rounded-md bg-emerald-950/30 border border-emerald-900">
              <FileText className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-emerald-300 font-mono truncate">IPFS: {ipfsHash}</span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Submission Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Summarize what was delivered and how it meets the acceptance criteria..."
            className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
          <Button onClick={handleSubmit} isLoading={loading} className="flex-1">
            Submit & Register Proof
          </Button>
        </div>
      </div>
    </Modal>
  )
}