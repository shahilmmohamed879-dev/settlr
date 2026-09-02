import { Link } from 'react-router-dom'
import { Wallet, CheckCircle2, Plus, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useWalletStore } from '@/store/walletStore'
import { ANVIL_ACCOUNTS } from '@/lib/web3'

export function Header() {
  const { connected, address, chainName, accountIndex, accountLabel, connecting, connect, selectAccount, disconnect } = useWalletStore()
  const formatAddress = (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-slate-100">Settlr</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors">Marketplace</Link>
          <Link to="/my-tasks" className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors">My Tasks</Link>
          <Link to="/post" className="text-sm font-medium text-slate-300 hover:text-slate-100 transition-colors">Post Task</Link>
        </nav>

        <div className="flex items-center gap-4">
          {connected && (
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-xs text-slate-400">{chainName} · {accountLabel}</span>
              <span className="text-sm font-medium text-slate-200">{formatAddress(address!)}</span>
            </div>
          )}
          {connected ? (
            <div className="flex items-center gap-2">
              <div className="relative hidden lg:block">
                <select
                  value={accountIndex}
                  onChange={(e) => void selectAccount(Number(e.target.value))}
                  disabled={connecting}
                  className="appearance-none rounded-md border border-slate-700 bg-slate-900 py-2 pl-3 pr-8 text-sm text-slate-200 outline-none focus:border-blue-500 disabled:opacity-50"
                  aria-label="Select local Anvil account"
                >
                  {ANVIL_ACCOUNTS.map((account) => (
                    <option key={account.index} value={account.index}>
                      #{account.index} · {account.label} · {formatAddress(account.address)}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-slate-400" />
              </div>
              <Link to="/post">
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" /> Post Task
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={disconnect}>Disconnect</Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => void connect()} isLoading={connecting}>
              <Wallet className="mr-2 h-4 w-4" /> Use Local Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
