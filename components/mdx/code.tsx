"use client"
import { useEffect, useState } from "react"
import { codeToHtml } from "shiki"
import { CopyButton } from "./copy-button"
import { useTheme } from "next-themes"


interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}


export default function CodeBlock({ code, language = "typescript", filename }: CodeBlockProps) {
  const [html, setHtml] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const{ theme} = useTheme()
  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighted = await codeToHtml(code, {
          lang: language,
          theme: theme === "dark" ? "github-dark" : "github-light",
        })
        setHtml(highlighted)
      } catch (error) {
        console.error("Error highlighting code:", error)
      } finally {
        setIsLoading(false)
      }
    }

    highlightCode()
  }, [code, language, theme])

  if (isLoading) {
    return <div className="p-4 text-muted-foreground">Loading code...</div>
  }

  return (
    <div className="relative w-full rounded-lg border border-border bg-card overflow-hidden mt-8 mb-8">
      {filename && (
        <div className="px-4 py-2 bg-muted border-b border-border text-sm font-mono text-muted-foreground">
          {filename}
        </div>
      )}
      <div className="relative">
        <div
          className="overflow-x-auto p-4 text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CopyButton text={code} />
      </div>
    </div>
  )
}
