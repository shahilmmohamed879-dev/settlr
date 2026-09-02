import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Wallet, FileText, Activity, CheckCircle2, Send, Eye, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { useTaskStore } from '@/store/taskStore'
import { useWalletStore } from '@/store/walletStore'
import { useToastStore } from '@/store/toastStore'
import { explorerTxUrl } from '@/config/constants'
import { BidModal } from '@/components/modals/BidModal'
import { SubmitWorkModal } from '@/components/modals/SubmitWorkModal'
import { ReviewModal } from '@/components/modals/ReviewModal'

export function TaskDetail() {
  const { id } = useParams()
  const task = useTaskStore((s) => s.tasks.find((t) => t.id === id))
  const { connected, connect, connecting } = useWalletStore()
  const { selectWinner } = useTaskStore()
  const { addToast } = useToastStore()

  const [bidOpen, setBidOpen] = useState(false)
  const [submitOpen, setSubmitOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)

  if (!task) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-100">Task not found</h2>
        <Link to="/" className="text-blue-400 hover:underline mt-2 inline-block">Return to Marketplace</Link>
      </div>
    )
  }

  const handleBid = () => {
    if (!connected) { connect(); return }
    setBidOpen(true)
  }

  const handleSelectWinner = async (bidId: string) => {
    addToast({ type: 'info', title: 'Selecting winner...', description: 'Confirm transaction to assign solver.' })
    await new Promise((r) => setTimeout(r, 1500))
    selectWinner(task.id, bidId)
    addToast({
      type: 'success',
      title: 'Winner selected!',
      description: 'Solver has been notified to lock bond and begin work.',
      txHash: '0x' + Math.random().toString(16).slice(2, 12),
    })
  }

  const canBid = task.status === 'Funded' || task.status === 'Created'
  const canSubmit = task.status === 'BondLocked' && task.solverName === 'You'
  const canReview = task.status === 'WorkSubmitted' && task.clientName === 'You'
  const canSelectWinner = task.status === 'Funded' && task.bids.length > 0 && task.clientName === 'You'

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center text-sm text-slate-400 hover:text-slate-100">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <StatusBadge status={task.status} />
                    <span className="text-sm text-slate-500">{task.category}</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">{task.difficulty}</span>
                  </div>
                  <CardTitle className="text-2xl">{task.title}</CardTitle>
                  <p className="text-sm text-slate-500 mt-1">Posted by {task.clientName} • {new Date(task.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Description</h3>
                <p className="text-slate-400 leading-relaxed">{task.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Requirements
                  </h3>
                  <p className="text-sm text-slate-400">{task.requirements}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Acceptance Criteria
                  </h3>
                  <p className="text-sm text-slate-400">{task.acceptanceCriteria}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {task.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>

              {task.testCases.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-3">Test Cases (SRS)</h3>
                  <div className="space-y-2">
                    {task.testCases.map((tc) => (
                      <div key={tc.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                        <span className="text-sm text-slate-300">{tc.label}</span>
                        <StatusBadge status={tc.status === 'passed' ? 'Completed' : tc.status === 'failed' ? 'Disputed' : 'Created'} />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-mono">IPFS: {task.srsHash}</p>
                </div>
              )}

              {/* Dispute info */}
              {task.status === 'Disputed' && task.disputeReason && (
                <div className="p-4 rounded-lg bg-red-950/30 border border-red-900">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <h3 className="text-sm font-semibold text-red-300">Active Dispute</h3>
                  </div>
                  <p className="text-sm text-red-200">{task.disputeReason}</p>
                  {task.disputeStatus && (
                    <p className="text-xs text-red-400 mt-2">Status: {task.disputeStatus}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5" /> Activity Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...task.activity].reverse().map((event, i) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-2 w-2 rounded-full mt-2 ${event.kind === 'onchain' ? 'bg-blue-500' : event.kind === 'system' ? 'bg-slate-500' : 'bg-emerald-500'}`} />
                      {i < task.activity.length - 1 && <div className="w-px flex-1 bg-slate-800 my-1" />}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-sm font-medium text-slate-200">{event.label}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-xs text-slate-500">{new Date(event.timestamp).toLocaleString()}</p>
                        {event.txHash && (
                          <a href={explorerTxUrl(event.txHash)} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline font-mono">
                            TX ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Task Details */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Task Details</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Budget</span>
                <span className="text-xl font-bold text-slate-100">{task.budget.toLocaleString()} {task.currency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Bond Required</span>
                <span className="text-sm font-medium text-slate-200">{task.bondRequirement}% ({(task.budget * task.bondRequirement / 100).toFixed(0)})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Difficulty</span>
                <span className="text-sm font-medium text-slate-200">{task.difficulty}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Deadline</span>
                <span className="text-sm font-medium text-slate-200 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {new Date(task.deadline).toLocaleDateString()}
                </span>
              </div>
              {task.solverName && (
                <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                  <span className="text-sm text-slate-400">Solver</span>
                  <span className="text-sm font-medium text-slate-200">{task.solverName}</span>
                </div>
              )}
              {task.revisionCount > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Revisions</span>
                  <span className="text-sm font-medium text-slate-200">{task.revisionCount}/{task.maxRevisions}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Action Card */}
          <Card>
            <CardContent className="p-4 space-y-3">
              {canBid && (
                <Button className="w-full" size="lg" onClick={handleBid} isLoading={connecting}>
                  <Wallet className="mr-2 h-4 w-4" /> Submit Bid
                </Button>
              )}
              {canSubmit && (
                <Button className="w-full" size="lg" onClick={() => setSubmitOpen(true)}>
                  <Send className="mr-2 h-4 w-4" /> Submit Work
                </Button>
              )}
              {canReview && (
                <Button className="w-full" size="lg" onClick={() => setReviewOpen(true)}>
                  <Eye className="mr-2 h-4 w-4" /> Review Submission
                </Button>
              )}
              {!canBid && !canSubmit && !canReview && !canSelectWinner && (
                <p className="text-sm text-slate-500 text-center py-2">
                  {task.status === 'Completed' ? '✓ This task has been completed and settled.' :
                   task.status === 'Disputed' ? '⚠ This task is in dispute.' :
                   'No actions available for this task.'}
                </p>
              )}
              {!connected && canBid && (
                <p className="text-xs text-center text-slate-500">Connect wallet to bid</p>
              )}
            </CardContent>
          </Card>

          {/* Bids */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <span>Bids ({task.bids.length})</span>
                <StatusBadge status={task.marketStage} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {task.bids.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4">No bids yet. Be the first!</p>
              ) : (
                <div className="space-y-3">
                  {task.bids.map((bid) => (
                    <div key={bid.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium text-slate-200">{bid.solverName}</span>
                          <div className="flex gap-2 text-xs text-slate-500 mt-1">
                            <span>★ {bid.reputation}</span>
                            <span>{bid.completionRate}%</span>
                            <span>{bid.estimatedDays}d</span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-400">{bid.bidAmount} {task.currency}</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">{bid.proposal}</p>
                      {canSelectWinner && (
                        <Button size="sm" variant="outline" className="w-full" onClick={() => handleSelectWinner(bid.id)}>
                          Select as Winner
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <BidModal task={task} open={bidOpen} onClose={() => setBidOpen(false)} />
      <SubmitWorkModal task={task} open={submitOpen} onClose={() => setSubmitOpen(false)} />
      <ReviewModal task={task} open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </div>
  )
}