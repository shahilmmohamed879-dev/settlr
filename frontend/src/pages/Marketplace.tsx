import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, ArrowUpRight, TrendingUp, Briefcase, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/Badge'
import { useTaskStore } from '@/store/taskStore'
import { TaskStatus } from '@/types'
import { cn } from '@/lib/utils'

const STATUS_FILTERS: Array<'all' | TaskStatus> = ['all', 'Created', 'Funded', 'BondLocked', 'WorkSubmitted', 'UnderReview', 'Completed', 'Disputed']

export function Marketplace() {
  const { tasks } = useTaskStore()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | TaskStatus>('all')

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      const matchesSearch = !search || 
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase()) ||
        t.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
      const matchesStatus = statusFilter === 'all' || t.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [tasks, search, statusFilter])

  const totalBudget = tasks.reduce((sum, t) => sum + t.budget, 0)
  const activeTasks = tasks.filter((t) => !['Completed', 'Cancelled'].includes(t.status)).length
  const completedTasks = tasks.filter((t) => t.status === 'Completed').length

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Task Marketplace</h1>
          <p className="text-slate-400 mt-1">Discover and bid on trustless, on-chain verified work.</p>
        </div>
        <Link to="/post">
          <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" /> Post a Task
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-blue-950 border border-blue-900 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Active Tasks</p>
              <p className="text-2xl font-bold text-slate-100">{activeTasks}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Completed</p>
              <p className="text-2xl font-bold text-slate-100">{completedTasks}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-amber-950 border border-amber-900 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Total Value</p>
              <p className="text-2xl font-bold text-slate-100">{totalBudget.toLocaleString()} <span className="text-sm text-slate-400">USDC</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks by title, skill, or category..."
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <Button variant="outline" className="sm:w-auto w-full">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {STATUS_FILTERS.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                statusFilter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              )}
            >
              {status === 'all' ? 'All' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Task Grid */}
      {filtered.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-slate-400">No tasks match your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((task) => (
            <Link key={task.id} to={`/task/${task.id}`}>
              <Card className="h-full hover:border-slate-700 transition-colors group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <StatusBadge status={task.status} />
                    <span className="text-xs text-slate-500">{task.category}</span>
                  </div>
                  <CardTitle className="mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {task.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Budget</span>
                      <span className="font-semibold text-slate-100">{task.budget.toLocaleString()} {task.currency}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Bond</span>
                      <span className="font-medium text-slate-200">{task.bondRequirement}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Difficulty</span>
                      <span className="font-medium text-slate-200">{task.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Bids</span>
                      <span className="font-medium text-slate-200">{task.bids.length}</span>
                    </div>
                    <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
                      {task.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="text-xs px-2 py-1 rounded-md bg-slate-800 text-slate-300">{skill}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}