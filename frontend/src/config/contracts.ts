export const ANVIL_CHAIN_ID = 31337
export const ANVIL_RPC_URL =
  import.meta.env.VITE_ANVIL_RPC_URL || 'http://127.0.0.1:8545'

export const contracts = {
  taskMarket:
    import.meta.env.VITE_TASK_MARKET_ADDRESS ||
    '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',

  escrow:
    import.meta.env.VITE_ESCROW_ADDRESS ||
    '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',

  token:
    import.meta.env.VITE_TOKEN_ADDRESS ||
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',

  orchestrator:
    import.meta.env.VITE_ORCHESTRATOR_ADDRESS ||
    '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',

  proofRegistry:
    import.meta.env.VITE_PROOF_REGISTRY_ADDRESS ||
    '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
}

export const taskMarketAbi = [
  'function postTask(uint256 _budget,string _srsHash) returns (uint256)',
  'function submitBid(uint256 _taskId)',
  'function selectWinner(uint256 _taskId,address _freelancer)',
  'function getBidders(uint256 _taskId) view returns (address[])',

  'event TaskPosted(uint256 indexed taskId,address indexed client,uint256 budget,string srsHash)',
  'event BidSubmitted(uint256 indexed taskId,address indexed freelancer)',
  'event WinnerSelected(uint256 indexed taskId,address indexed freelancer)',
]

export const tokenAbi = [
  'function approve(address spender,uint256 amount) returns (bool)',
  'function allowance(address owner,address spender) view returns (uint256)',
  'function balanceOf(address account) view returns (uint256)',
  'function decimals() view returns (uint8)',
]

export const escrowAbi = [
  'function fundTask(uint256 taskId)',
  'function lockFreelancerBond(uint256 taskId)',
  'function submitWork(uint256 taskId,bytes32 deliveryHash)',
  'function releasePayment(uint256 taskId)',
  'function requestChanges(uint256 taskId,string reason)',
  'function openDispute(uint256 taskId,string reason)',

  'function getTask(uint256 taskId) view returns (tuple(bytes32 id, address client, address freelancer, uint256 reward, uint256 bond, uint8 status, bytes32 deliveryHash, uint256 createdAt, uint256 deadline))',

  'event TaskFunded(uint256 indexed taskId,uint256 amount)',
  'event FreelancerBondLocked(uint256 indexed taskId,uint256 amount)',
  'event WorkSubmitted(uint256 indexed taskId,bytes32 deliveryHash)',
  'event PaymentReleased(uint256 indexed taskId,uint256 amount)',
]

export const proofRegistryAbi = [
  'function registerReceipt(uint256 taskId,bytes32 receiptHash)',
  'function verifyReceipt(uint256 taskId) view returns (bool)',
  'function getReceipt(uint256 taskId) view returns (bytes32)',
]