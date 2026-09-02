export type TaskStatus =
  | 'Created'
  | 'Funded'
  | 'BondLocked'
  | 'WorkSubmitted'
  | 'UnderReview'
  | 'ChangesRequested'
  | 'Completed'
  | 'Disputed'
  | 'Cancelled'

export type MarketStage = 'Open' | 'BidsIn' | 'WinnerSelected'

export interface TestCase {
  id: string
  label: string
  status: 'pending' | 'passed' | 'failed'
  detail?: string
}

export interface Bid {
  id: string
  taskId: string
  solverAddress: string
  solverName: string
  reputation: number // 0-5
  completionRate: number // 0-100
  bidAmount: number
  estimatedDays: number
  bondAmount: number
  proposal: string
  createdAt: string
}

export interface ActivityEvent {
  id: string
  taskId: string
  label: string
  detail?: string
  timestamp: string
  kind: 'onchain' | 'offchain' | 'system'
  txHash?: string
}

export interface Task {
  id: string
  title: string
  description: string
  category: string
  skills: string[]
  requirements: string
  acceptanceCriteria: string
  deliverables: string
  deadline: string // ISO date
  budget: number
  currency: 'USDC' | 'ETH'
  bondRequirement: number // percentage of budget, e.g. 10 = 10%
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  status: TaskStatus
  marketStage: MarketStage
  clientAddress: string
  clientName: string
  solverAddress?: string
  solverName?: string
  testCases: TestCase[]
  bids: Bid[]
  deliveryHash?: string
  proofId?: string
  proofTimestamp?: string
  settlementTxHash?: string
  bondTxHash?: string
  revisionCount: number
  maxRevisions: number
  lastChangeReason?: string
  reviewDeadline?: string
  disputeReason?: string
  disputeEvidence?: string
  disputeStatus?: 'Open' | 'Resolved-Client' | 'Resolved-Solver'
  createdAt: string
  activity: ActivityEvent[]
  srsHash: string // IPFS hash of test suite / SRS
}

export type UserRole = 'client' | 'solver' | null

export interface WalletState {
  connected: boolean
  address: string | null
  chainId: number | null
  chainName: string | null
  nativeBalance: string | null
  tokenBalance: string | null
  connecting: boolean
}

export type TxState = 'idle' | 'confirming' | 'pending' | 'success' | 'failed'

export interface TxRecord {
  id: string
  label: string
  state: TxState
  hash?: string
  error?: string
  createdAt: string
  taskId?: string
}