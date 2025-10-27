"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <Tooltip delayDuration={50} >
      <TooltipTrigger asChild>
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="icon"
          aria-label="Copy text"
          className={cn(
            "absolute top-3 right-3 h-7 w-7 rounded-md transition-all",
            "hover:bg-muted/70 hover:scale-105 active:scale-95",
            "focus-visible:ring-1 focus-visible:ring-ring",
            className
          )}
        >
          {copied ? (
            <Check className="size-4 text-green-600 transition-all duration-150" />
          ) : (
            <Copy className="size-4 text-muted-foreground transition-all duration-150" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6} className="text-xs font-bold" >
        {copied ? "Copied!" : "Copy"}
      </TooltipContent>
    </Tooltip>
  )
}
