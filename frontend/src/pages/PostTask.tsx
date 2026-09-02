import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useTaskStore } from '@/store/taskStore'
import { useWalletStore } from '@/store/walletStore'
import { useToastStore } from '@/store/toastStore'
import { Task } from '@/types'
import { postTaskOnChain } from '@/lib/web3'

const CATEGORIES = ['Smart Contracts', 'Frontend', 'Backend', 'Design', 'Security', 'Documentation', 'Testing', 'DevOps', 'Other']
const SKILLS = ['Solidity', 'Foundry', 'React', 'TypeScript', 'Viem', 'Tailwind', 'Figma', 'Node.js', 'Python', 'Rust']

export function PostTask() {
  const navigate = useNavigate()
  const { addTask } = useTaskStore()
  const { connected, connect, connecting } = useWalletStore()
  const { addToast } = useToastStore()

  const [form, setForm] = useState({
    title: '', description: '', category: 'Smart Contracts',
    requirements: '', acceptanceCriteria: '', deliverables: '',
    budget: '', deadline: '', bondRequirement: '10',
    difficulty: 'Intermediate' as Task['difficulty'],
    currency: 'USDC' as Task['currency'],
  })
  const [skills, setSkills] = useState<string[]>([])
  const [testCases, setTestCases] = useState<{ label: string }[]>([])
  const [loading, setLoading] = useState(false)

  const toggleSkill = (skill: string) => {
    setSkills((prev) => prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill])
  }

  const addTestCase = () => setTestCases([...testCases, { label: '' }])
  const removeTestCase = (i: number) => setTestCases(testCases.filter((_, idx) => idx !== i))
  const updateTestCase = (i: number, label: string) => {
    const updated = [...testCases]; updated[i] = { label }; setTestCases(updated)
  }

  const handleSubmit = async () => {
    if (!connected) { try { await connect() } catch (e:any) { addToast({ type: 'error', title: 'Wallet connection failed', description: e.message }); return } }
    if (!form.title || !form.description || !form.budget || !form.deadline) {
      addToast({ type: 'error', title: 'Missing fields', description: 'Please fill in all required fields.' })
      return
    }
    setLoading(true)
    addToast({ type: 'info', title: 'Creating task...', description: 'Confirm transaction to create task on-chain.' })
    
    try {
    const srsHash = 'local:' + btoa(unescape(encodeURIComponent(JSON.stringify({ title: form.title, requirements: form.requirements, acceptanceCriteria: form.acceptanceCriteria, tests: testCases })))).slice(0, 48)
    const onchain = await postTaskOnChain(parseFloat(form.budget), srsHash)
    const newTask: Task = {
      id: onchain.id,
      title: form.title, description: form.description, category: form.category,
      skills, requirements: form.requirements, acceptanceCriteria: form.acceptanceCriteria,
      deliverables: form.deliverables, deadline: form.deadline,
      budget: parseFloat(form.budget), currency: form.currency,
      bondRequirement: parseInt(form.bondRequirement), difficulty: form.difficulty,
      status: 'Created', marketStage: 'Open',
      clientAddress: useWalletStore.getState().address || '', clientName: 'You',
      testCases: testCases.filter((tc) => tc.label).map((tc, i) => ({
        id: 'tc' + i, label: tc.label, status: 'pending',
      })),
      bids: [], revisionCount: 0, maxRevisions: 3,
      createdAt: new Date().toISOString(),
      activity: [{ id: 'a' + Date.now(), taskId: '', label: 'Task Created', timestamp: new Date().toISOString(), kind: 'system' }],
      srsHash,
    }
    addTask(newTask)
    
    addToast({
      type: 'success',
      title: 'Task created!',
      description: 'Your task is now live on the marketplace.',
      txHash: onchain.hash,
    })
    
    setLoading(false)
    navigate('/task/' + newTask.id)
    } catch (e:any) { setLoading(false); addToast({ type:'error', title:'Transaction failed', description:e.shortMessage || e.message }) }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button onClick={() => navigate(-1)} className="inline-flex items-center text-sm text-slate-400 hover:text-slate-100">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </button>

      <div>
        <h1 className="text-3xl font-bold text-slate-100">Post a New Task</h1>
        <p className="text-slate-400 mt-1">Define the work, set the budget, and let solvers bid.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Task Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Title *</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Build On-Chain Proof of Completion Module"
              className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              placeholder="Describe the work in detail..."
              className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Difficulty</label>
              <select
                value={form.difficulty}
                onChange={(e) => setForm({ ...form, difficulty: e.target.value as Task['difficulty'] })}
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Required Skills</label>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    skills.includes(skill)
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Scope & Acceptance</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Requirements</label>
            <textarea value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} rows={3} placeholder="Technical and non-technical requirements..." className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Acceptance Criteria</label>
            <textarea value={form.acceptanceCriteria} onChange={(e) => setForm({ ...form, acceptanceCriteria: e.target.value })} rows={3} placeholder="How will the work be judged as complete?" className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Deliverables</label>
            <textarea value={form.deliverables} onChange={(e) => setForm({ ...form, deliverables: e.target.value })} rows={2} placeholder="What files/artifacts will be delivered?" className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Test Cases (SRS)</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-slate-500">Define the automated tests that will verify the work. These will be stored on IPFS and used for on-chain verification.</p>
          {testCases.map((tc, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={tc.label}
                onChange={(e) => updateTestCase(i, e.target.value)}
                placeholder={`Test case ${i + 1} description`}
                className="flex-1 h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button onClick={() => removeTestCase(i)} className="px-3 text-slate-500 hover:text-red-400">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={addTestCase} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Test Case
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Budget & Terms</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Budget *</label>
              <input
                type="number"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="e.g. 2500"
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Currency</label>
              <select
                value={form.currency}
                onChange={(e) => setForm({ ...form, currency: e.target.value as Task['currency'] })}
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Deadline *</label>
              <input
                type="date"
                value={form.deadline.slice(0, 10)}
                onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Bond Requirement (%)</label>
              <input
                type="number"
                value={form.bondRequirement}
                onChange={(e) => setForm({ ...form, bondRequirement: e.target.value })}
                min="1" max="50"
                className="w-full h-10 px-3 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {form.budget && (
            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900">
              <p className="text-xs text-blue-300">
                💡 Solvers will need to lock <span className="font-bold">{(parseFloat(form.budget) * parseInt(form.bondRequirement) / 100).toFixed(2)} {form.currency}</span> as bond. You'll escrow <span className="font-bold">{form.budget} {form.currency}</span> upon creation.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-3 pt-4">
        <Button variant="outline" onClick={() => navigate(-1)} className="flex-1">Cancel</Button>
        <Button onClick={handleSubmit} isLoading={loading || connecting} className="flex-1">
          {connected ? 'Create & Fund Task' : 'Connect Wallet to Create'}
        </Button>
      </div>
    </div>
  )
}