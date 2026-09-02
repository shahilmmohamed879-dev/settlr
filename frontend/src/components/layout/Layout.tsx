import { ReactNode } from 'react'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
} 