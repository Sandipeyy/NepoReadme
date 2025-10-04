"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useReadmeStore } from "@/lib/store"
import { Download, Copy, Check } from "lucide-react"
import { useState } from "react"
import { generateMarkdown } from "@/lib/markdown-generator"

export function ReadmePreview() {
  const { config } = useReadmeStore()
  const [copied, setCopied] = useState(false)
  const markdown = generateMarkdown(config)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "README.md"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="sticky top-8 border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">Live Preview</CardTitle>
            <CardDescription className="text-muted-foreground">See your README in real-time</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={handleCopy} className="bg-transparent">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-muted p-4">
          <pre className="whitespace-pre-wrap break-words font-mono text-xs text-foreground">{markdown}</pre>
        </div>
      </CardContent>
    </Card>
  )
}