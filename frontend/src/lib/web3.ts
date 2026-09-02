import {
  Contract,
  JsonRpcProvider,
  HDNodeWallet,
  Wallet,
  parseUnits,
  formatUnits,
  keccak256,
  toUtf8Bytes,
} from 'ethers'

import {
  ANVIL_CHAIN_ID,
  ANVIL_RPC_URL,
  contracts,
  taskMarketAbi,
  tokenAbi,
  escrowAbi,
  proofRegistryAbi,
} from '@/config/contracts'

const ANVIL_MNEMONIC =
  'test test test test test test test test test test test junk'

export const ANVIL_ACCOUNTS = Array.from({ length: 11 }, (_, index) => {
  const wallet = HDNodeWallet.fromPhrase(
    ANVIL_MNEMONIC,
    undefined,
    `m/44'/60'/0'/0/${index}`,
  )

  return {
    index,
    label:
      index === 0
        ? 'Client'
        : index === 1
          ? 'Solver'
          : index === 2
            ? 'Tester'
            : `Account ${index}`,
    address: wallet.address,
    privateKey: wallet.privateKey,
  }
})

const provider = new JsonRpcProvider(
  ANVIL_RPC_URL,
  ANVIL_CHAIN_ID,
  { staticNetwork: true },
)

let selectedAccountIndex = Number(
  localStorage.getItem('settlr-anvil-account') ?? '0',
)

export function getProvider() {
  return provider
}

export function getSelectedAccount() {
  return ANVIL_ACCOUNTS[selectedAccountIndex] ?? ANVIL_ACCOUNTS[0]
}

export function selectAnvilAccount(index: number) {
  if (!ANVIL_ACCOUNTS[index]) {
    throw new Error('Invalid Anvil account selected')
  }

  selectedAccountIndex = index
  localStorage.setItem('settlr-anvil-account', String(index))
}

export function getSigner() {
  return new Wallet(
    getSelectedAccount().privateKey,
    provider,
  )
}

export async function ensureAnvil() {
  const network = await provider.getNetwork()

  if (Number(network.chainId) !== ANVIL_CHAIN_ID) {
    throw new Error(
      `Connected to chain ${network.chainId}. Expected local Anvil chain ${ANVIL_CHAIN_ID}.`,
    )
  }
}

export async function connectWallet() {
  await ensureAnvil()

  const account = getSelectedAccount()
  const balance = await provider.getBalance(account.address)

  return {
    address: account.address,
    balance: formatUnits(balance, 18),
    accountIndex: account.index,
    accountLabel: account.label,
  }
}

/* -------------------------------------------------------------------------- */
/* TASK MARKET                                                                 */
/* -------------------------------------------------------------------------- */

export async function postTaskOnChain(
  budget: number,
  srsHash: string,
) {
  await ensureAnvil()

  if (!contracts.taskMarket) {
    throw new Error('TaskMarket address is missing')
  }

  const signer = getSigner()

  const market = new Contract(
    contracts.taskMarket,
    taskMarketAbi,
    signer,
  )

  const tx = await market.postTask(
    parseUnits(String(budget), 6),
    srsHash,
  )

  const receipt = await tx.wait()

  for (const log of receipt.logs) {
    try {
      const parsed = market.interface.parseLog(log)

      if (parsed?.name === 'TaskPosted') {
        return {
          id: parsed.args.taskId.toString(),
          hash: tx.hash,
        }
      }
    } catch {
      // Ignore logs belonging to other contracts.
    }
  }

  throw new Error(
    'Task transaction confirmed but TaskPosted event was not found',
  )
}

/* -------------------------------------------------------------------------- */
/* TOKEN                                                                       */
/* -------------------------------------------------------------------------- */

export async function getTokenBalance(address?: string) {
  await ensureAnvil()

  const token = new Contract(
    contracts.token,
    tokenAbi,
    provider,
  )

  const account = address ?? getSelectedAccount().address

  const balance = await token.balanceOf(account)

  return formatUnits(balance, 6)
}

export async function approveEscrow(amount: number) {
  await ensureAnvil()

  const signer = getSigner()

  const token = new Contract(
    contracts.token,
    tokenAbi,
    signer,
  )

  const amountUnits = parseUnits(String(amount), 6)

  const tx = await token.approve(
    contracts.escrow,
    amountUnits,
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

export async function getEscrowAllowance(address?: string) {
  await ensureAnvil()

  const token = new Contract(
    contracts.token,
    tokenAbi,
    provider,
  )

  const owner =
    address ?? getSelectedAccount().address

  const allowance = await token.allowance(
    owner,
    contracts.escrow,
  )

  return formatUnits(allowance, 6)
}

/* -------------------------------------------------------------------------- */
/* ESCROW                                                                      */
/* -------------------------------------------------------------------------- */

export async function fundTaskOnChain(taskId: string) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const tx = await escrow.fundTask(
    BigInt(taskId),
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

export async function lockSolverBondOnChain(
  taskId: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const tx = await escrow.lockFreelancerBond(
    BigInt(taskId),
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

export async function submitWorkOnChain(
  taskId: string,
  deliveryHash: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const hash = deliveryHash.startsWith('0x')
    ? deliveryHash
    : keccak256(toUtf8Bytes(deliveryHash))

  const tx = await escrow.submitWork(
    BigInt(taskId),
    hash,
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    deliveryHash: hash,
    receipt,
  }
}

export async function releasePaymentOnChain(
  taskId: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const tx = await escrow.releasePayment(
    BigInt(taskId),
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

export async function requestChangesOnChain(
  taskId: string,
  reason: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const tx = await escrow.requestChanges(
    BigInt(taskId),
    reason,
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

export async function openDisputeOnChain(
  taskId: string,
  reason: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const escrow = new Contract(
    contracts.escrow,
    escrowAbi,
    signer,
  )

  const tx = await escrow.openDispute(
    BigInt(taskId),
    reason,
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receipt,
  }
}

/* -------------------------------------------------------------------------- */
/* PROOF REGISTRY                                                              */
/* -------------------------------------------------------------------------- */

export async function registerProofOnChain(
  taskId: string,
  receiptHash: string,
) {
  await ensureAnvil()

  const signer = getSigner()

  const registry = new Contract(
    contracts.proofRegistry,
    proofRegistryAbi,
    signer,
  )

  const hash = receiptHash.startsWith('0x')
    ? receiptHash
    : keccak256(toUtf8Bytes(receiptHash))

  const tx = await registry.registerReceipt(
    BigInt(taskId),
    hash,
  )

  const receipt = await tx.wait()

  return {
    hash: tx.hash,
    receiptHash: hash,
    receipt,
  }
}

export async function verifyProofOnChain(
  taskId: string,
) {
  await ensureAnvil()

  const registry = new Contract(
    contracts.proofRegistry,
    proofRegistryAbi,
    provider,
  )

  return await registry.verifyReceipt(
    BigInt(taskId),
  )
}