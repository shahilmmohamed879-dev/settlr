import * as React from "react"
import { cn } from "@/lib/utils"
import { TaskStatus, MarketStage } from "@/types"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline'
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "bg-slate-800 text-slate-300",
      success: "bg-emerald-900/50 text-emerald-400 border border-emerald-800",
      warning: "bg-amber-900/50 text-amber-400 border border-amber-800",
      danger: "bg-red-900/50 text-red-400 border border-red-800",
      info: "bg-blue-900/50 text-blue-400 border border-blue-800",
      outline: "border border-slate-700 text-slate-400",
    }

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors", variants[variant], className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export const StatusBadge = ({ status }: { status: TaskStatus | MarketStage }) => {
  const statusMap: Record<string, 'default' | 'success' | 'warning' | 'danger' | 'info'> = {
    'Created': 'info',
    'Funded': 'success',
    'BondLocked': 'warning',
    'WorkSubmitted': 'info',
    'UnderReview': 'warning',
    'ChangesRequested': 'warning',
    'Completed': 'success',
    'Disputed': 'danger',
    'Cancelled': 'danger',
    'Open': 'info',
    'BidsIn': 'warning',
    'WinnerSelected': 'success',
  }
  return <Badge variant={statusMap[status] || 'default'}>{status}</Badge>
} 