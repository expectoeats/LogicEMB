'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export default function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-700 my-4">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">{filename || language}</span>
        </div>
        <button onClick={copy} className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="code-block rounded-none"><code>{code}</code></pre>
    </div>
  )
}
