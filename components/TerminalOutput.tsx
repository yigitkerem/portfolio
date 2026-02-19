'use client'

import { useEffect, useRef } from 'react'

interface TerminalOutputProps {
  lines: Array<{ text: string; className: string }>
  activePanel?: string
}

export default function TerminalOutput({ lines, activePanel }: TerminalOutputProps) {
  const outputRef = useRef<HTMLDivElement>(null)
  const isLightMode = activePanel === 'origin'

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div
      ref={outputRef}
      className={`flex-1 overflow-y-auto px-5 pt-5 pb-2 ${isLightMode ? 'scrollbar-light' : 'scrollbar-thin'} scroll-smooth ${isLightMode ? 'text-gray-900' : ''}`}
      onClick={() => {
        // Keep focus on input when clicking output
        const input = document.querySelector('input[type="text"]') as HTMLInputElement
        input?.focus()
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          className={`mb-0.5 whitespace-pre-wrap break-words min-h-[20px] ${
            line.className === 'prompt'
              ? isLightMode ? 'text-gray-900' : 'text-text'
              : line.className === 'error'
              ? isLightMode ? 'text-red-600' : 'text-red'
              : line.className === 'success'
              ? isLightMode ? 'text-green-600' : 'text-green'
              : line.className === 'info'
              ? isLightMode ? 'text-blue-600' : 'text-cyan'
              : line.className === 'warn'
              ? isLightMode ? 'text-amber-600' : 'text-amber'
              : line.className === 'dim'
              ? isLightMode ? 'text-gray-600' : 'text-text-dim'
              : line.className === 'blank'
              ? 'h-2'
              : isLightMode ? 'text-gray-900' : 'text-text'
          }`}
          dangerouslySetInnerHTML={{ __html: line.text }}
        />
      ))}
    </div>
  )
}
