"use client"

import { Terminal } from "lucide-react"
import { CopyButton } from "./copy-button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface CLICommandProps {
  command: string
  description?: string
  className?: string
}

export function CLICommand({ command, description, className }: CLICommandProps) {
  return (
    <div
      className={cn(
        "group relative w-full rounded-lg border border-border bg-card overflow-hidden mt-6 shadow-sm transition-colors",
        "hover:border-muted-foreground/40 hover:bg-card/80",
        className
      )}
    >
      {description && (
        <div className="px-4 py-2 bg-muted/60 border-b border-border text-sm text-muted-foreground">
          {description}
        </div>
      )}

      <div className="relative">
        <ScrollArea className="w-full ">
          <div
            className={cn(
              "flex items-center gap-2 px-3 py-4 font-mono text-sm text-foreground",
              "bg-gradient-to-br from-primary/[0.05] to-background/60",
              "min-w-full "
            )}
          >
            <Terminal className="w-4 h-4 text-primary shrink-0 opacity-80 absolute top-5 left-3" />
            <pre className="whitespace-pre select-text leading-relaxed text-sm pl-6">
              {command}
            </pre>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <CopyButton
          text={command}
          className="top-3 right-2 opacity-100 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  )
}
