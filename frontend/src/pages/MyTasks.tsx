import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { useTaskStore } from '@/store/taskStore'
import { useWalletStore } from '@/store/walletStore'
import { Wallet, Briefcase, ArrowRight, TrendingUp, CheckCircle2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tab = 'client' | 'solver'

export function MyTasks() {
  const { tasks } = useTaskStore()
  const { connected, connect, connecting } = useWalletStore()
  const [tab, setTab] = useState<Tab>('solver')

  if (!connected) {
    return (
      <div className="max-w-md mx-auto text-center py-20 space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
          <Wallet className="h-8 w-8 text-slate-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Connect Your Wallet</h2>
        <p className="text-slate-400">Link your wallet to view your tasks, bids, and earnings.</p>
        <Button onClick={connect} isLoading={connecting} size="lg">
          <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
        </Button>
      </div>
    )
  }

  const myClientTasks = tasks.filter((t) => t.clientName === 'You' || t.clientAddress === '0x742d35Cc6634C0532925a3b844Bc454e4438f44e')
  const mySolverTasks = tasks.filter((t) => t.solverName === 'You' || t.bids.some((b) => b.solverName === 'You'))

  const activeTasks = tab === 'client' ? myClientTasks : mySolverTasks
  const completedCount = activeTasks.filter((t) => t.status === 'Completed').length
  const inProgressCount = activeTasks.filter((t) => !['Completed', 'Cancelled', 'Disputed'].includes(t.status)).length
  const totalEarned = activeTasks.filter((t) => t.status === 'Completed').reduce((sum, t) => sum + t.budget, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-100">My Tasks</h1>
        <p className="text-slate-400 mt-1">Track your work, bids, and earnings.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-blue-950 border border-blue-900 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">In Progress</p>
              <p className="text-2xl font-bold text-slate-100">{inProgressCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Completed</p>
              <p className="text-2xl font-bold text-slate-100">{completedCount}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-amber-950 border border-amber-900 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Total {tab === 'solver' ? 'Earned' : 'Spent'}</p>
              <p className="text-2xl font-bold text-slate-100">{totalEarned.toLocaleString()} <span className="text-sm text-slate-400">USDC</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-800">
        <button
          onClick={() => setTab('solver')}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-colors relative',
            tab === 'solver' ? 'text-slate-100' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          As Solver
          {tab === 'solver' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
        </button>
        <button
          onClick={() => setTab('client')}
          className={cn(
            'px-4 py-2 text-sm font-medium transition-colors relative',
            tab === 'client' ? 'text-slate-100' : 'text-slate-500 hover:text-slate-300'
          )}
        >
          As Client
          {tab === 'client' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
        </button>
      </div>

      {/* Task List */}
      {activeTasks.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Clock className="h-12 w-12 text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400">No tasks {tab === 'solver' ? 'bid on' : 'posted'} yet.</p>
            <Link to="/">
              <Button variant="outline" className="mt-4">
                {tab === 'solver' ? 'Browse Marketplace' : 'Post a Task'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {activeTasks.map((task) => (
            <Link key={task.id} to={`/task/${task.id}`}>
              <Card className="hover:border-slate-700 transition-colors">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <StatusBadge status={task.status} />
                      <span className="text-xs text-slate-500">{task.category}</span>
                    </div>
                    <p className="font-medium text-slate-100 truncate">{task.title}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {tab === 'solver' ? `Client: ${task.clientName}` : `Solver: ${task.solverName || 'Not assigned'}`}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-slate-100">{task.budget.toLocaleString()} {task.currency}</p>
                    <p className="text-xs text-slate-500">
                      Due {new Date(task.deadline).toLocaleDateString()}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}