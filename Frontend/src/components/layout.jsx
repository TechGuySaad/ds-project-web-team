import Link from "next/link"
import { Home, Cloud } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
  activeInsight?: string
}

export function Layout({ children, activeInsight }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <header className="p-4 border-b border-[#1e3a5f]">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4">
            <span>2024/12/02</span>
            <span>Mon</span>
            <span>20:01:22</span>
          </div>
          <h1 className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
            {activeInsight || "Smart City Environment Monitoring System"}
          </h1>
          <div className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            <span>Cloudy</span>
            <span>67F-71F</span>
            <Link href="/" className="ml-2">
              <Home className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

