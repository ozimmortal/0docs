import { Github } from "lucide-react"

interface GitHubStatsProps {
  count: string | number
  label?: string
}

export function GitHubStats({ count, label = "Stars" }: GitHubStatsProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2">
      <Github className="h-5 w-5 text-white" />
      <span className="text-sm font-semibold text-white">
        {count}
        {label && <span className="ml-1 text-xs text-slate-400">+</span>}
      </span>
    </div>
  )
}
