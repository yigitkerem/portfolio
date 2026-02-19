'use client'

import { useEffect, useRef, useState } from 'react'

interface TerminalPaneProps {
  onCommand: (cmd: string) => void
  activePanel?: string
}

export default function TerminalPane({ onCommand, activePanel }: TerminalPaneProps) {
  const isLightMode = activePanel === 'origin'
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [tempInput, setTempInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim()
      if (cmd) {
        setHistory([cmd, ...history])
        setHistoryIdx(-1)
        setTempInput('')
        onCommand(cmd)
        setInput('')
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIdx === -1) setTempInput(input)
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1
        setHistoryIdx(newIdx)
        setInput(history[newIdx])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx > -1) {
        const newIdx = historyIdx - 1
        setHistoryIdx(newIdx)
        setInput(newIdx === -1 ? tempInput : history[newIdx])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const val = input.toLowerCase().trim()
      if (!val) return
      const COMMANDS = ['help', 'whoami', 'skills', 'experience', 'exp', 'awards', 'skyfallen', 'origin', 'contact', 'back', 'cd', 'clear', 'ls', 'pwd', 'date', 'echo', 'neofetch', 'secret', 'uname', 'github', 'email']
      const match = COMMANDS.find(c => c.startsWith(val))
      if (match) {
        setInput(match)
      }
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex items-center px-5 pb-4 gap-0 flex-shrink-0">
        <span className={`${isLightMode ? 'text-green-600' : 'text-green'} whitespace-nowrap mr-2 flex-shrink-0 text-[13px]`}>
          <span className={isLightMode ? 'text-blue-600' : 'text-cyan'}>yko</span>
          <span className={isLightMode ? 'text-gray-500' : 'text-muted'}>@</span>
          <span className={isLightMode ? 'text-blue-600' : 'text-cyan'}>skynux</span>
          <span className={isLightMode ? 'text-blue-700' : 'text-blue'}> ~</span>
          <span className={isLightMode ? 'text-green-600' : 'text-green'}> %</span>
        </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`flex-1 bg-transparent border-none outline-none font-mono text-[13px] ${isLightMode ? 'text-gray-900 caret-green-600' : 'text-text-bright caret-green'} leading-relaxed`}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />
    </div>
  )
}
