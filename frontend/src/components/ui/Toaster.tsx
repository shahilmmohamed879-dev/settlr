import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useToastStore } from '@/store/toastStore'
import { explorerTxUrl } from '@/config/constants'
import { cn } from '@/lib/utils'

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const styles = {
  success: 'border-emerald-800 bg-emerald-950/80',
  error: 'border-red-800 bg-red-950/80',
  info: 'border-blue-800 bg-blue-950/80',
  warning: 'border-amber-800 bg-amber-950/80',
}

const iconStyles = {
  success: 'text-emerald-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-amber-400',
}

export function Toaster() {
  const { toasts, removeToast } = useToastStore()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
      {toasts.map((toast) => {
        const Icon = icons[toast.type]
        return (
          <div
            key={toast.id}
            className={cn(
              'flex gap-3 p-4 rounded-lg border backdrop-blur-md shadow-lg animate-in slide-in-from-right',
              styles[toast.type]
            )}
          >
            <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', iconStyles[toast.type])} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-100">{toast.title}</p>
              {toast.description && (
                <p className="text-xs text-slate-400 mt-1">{toast.description}</p>
              )}
              {toast.txHash && (
                <a
                  href={explorerTxUrl(toast.txHash)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:underline mt-1 inline-block"
                >
                  View transaction →
                </a>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-500 hover:text-slate-300 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}