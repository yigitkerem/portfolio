'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import TitleBar from '@/components/TitleBar'
import TerminalPane from '@/components/TerminalPane'
import DisplayPane from '@/components/DisplayPane'
import TerminalOutput from '@/components/TerminalOutput'
import SuggestedCommands from '@/components/SuggestedCommands'
import WelcomePanel from '@/components/panels/WelcomePanel'
import WhoamiPanel from '@/components/panels/WhoamiPanel'
import SkillsPanel from '@/components/panels/SkillsPanel'
import ExperiencePanel from '@/components/panels/ExperiencePanel'
import AwardsPanel from '@/components/panels/AwardsPanel'
import SkyfallenPanel from '@/components/panels/SkyfallenPanel'
import OriginPanel from '@/components/panels/OriginPanel'
import ContactPanel from '@/components/panels/ContactPanel'

function escHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default function Home() {
  const [activePanel, setActivePanel] = useState('welcome')
  const [outputLines, setOutputLines] = useState<Array<{ text: string; className: string }>>([])
  const bootedRef = useRef(false)
  const [openingComplete, setOpeningComplete] = useState(false)
  const [overlayExiting, setOverlayExiting] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [showMobileOverlay, setShowMobileOverlay] = useState(false)
  const mobileOverlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const MOBILE_OVERLAY_DELAY_MS = 2500

  const addLine = (text: string, className = 'output') => {
    setOutputLines((prev) => [...prev, { text, className }])
  }

  const blank = () => addLine('', 'blank')

  const addPromptLine = (cmd: string) => {
    addLine(
      `<span class="text-cyan">yko</span><span class="text-muted">@</span><span class="text-cyan">skynux</span> <span class="text-blue">~</span> <span class="text-green">%</span> <span class="text-text-bright">${escHtml(cmd)}</span>`,
      'prompt'
    )
  }

  const showPanel = (id: string) => {
    setActivePanel(id)
  }

  const runCommand = (cmd: string) => {
    const raw = cmd.trim()
    if (!raw) return

    addPromptLine(raw)
    blank()

    const parts = raw.split(' ')
    const c = parts[0].toLowerCase()

    switch (c) {
      case 'help':
        addLine('Available commands:', 'info')
        blank()
        ;[
          ['whoami', 'Who is Yigit Kerem Oktay'],
          ['skills', 'Technical stack and tools'],
          ['experience', 'Work history (alias: exp)'],
          ['awards', 'Competitions and achievements'],
          ['skyfallen', 'The Skyfallen Company overview'],
          ['origin', 'The real story — in Turkish'],
          ['contact', 'Get in touch'],
          ['neofetch', 'System info with Skyfallen branding'],
          ['back / home', 'Return to welcome screen'],
          ['cd [dir]', 'Change directory (e.g. cd whoami)'],
          ['clear', 'Clear terminal output'],
          ['ls', 'List available sections'],
          ['date', 'Current date and time'],
          ['echo [text]', 'Print text to terminal'],
          ['github', 'Open GitHub profile'],
          ['email', 'Open email client'],
          ['resume', 'Open PDF resume in a new tab'],
          ['kucukrobotcuk / blog', 'Open kucukrobotcuk blog'],
        ].forEach(([cmd, desc]) => {
          addLine(
            `  <span style="color:var(--green);width:120px;display:inline-block">${cmd.padEnd(16, ' ')}</span><span style="color:var(--text-dim)">${desc}</span>`
          )
        })
        blank()
        addLine('Tip: use ↑↓ for command history, Tab for autocomplete', 'dim')
        showPanel('welcome')
        break

      case 'whoami':
        addLine('Loading profile...', 'dim')
        showPanel('whoami')
        break

      case 'skills':
        addLine('Loading skill tree...', 'dim')
        showPanel('skills')
        break

      case 'experience':
      case 'exp':
        addLine('Fetching work history...', 'dim')
        showPanel('experience')
        break

      case 'awards':
        addLine('Displaying achievements...', 'dim')
        showPanel('awards')
        break

      case 'skyfallen':
        addLine('Connecting to Skyfallen systems...', 'dim')
        addLine('Status: <span style="color:var(--green)">● OPERATIONAL</span> · withskyfallen.com')
        showPanel('skyfallen')
        break

      case 'origin':
        addLine('Reading kucukrobotcuk/hakkinda.txt...', 'dim')
        addLine('<span style="color:var(--amber)">Note: file is in Turkish. This is intentional.</span>')
        showPanel('origin')
        break

      case 'back':
      case 'home':
        addLine('Returning to welcome screen...', 'dim')
        showPanel('welcome')
        break

      case 'cd': {
        const dir = parts[1]?.toLowerCase().trim()
        const sections = ['whoami', 'skills', 'experience', 'awards', 'skyfallen', 'origin', 'contact']
        if (!dir || dir === '~' || dir === '/' || dir === '..') {
          addLine('Returning to home...', 'dim')
          showPanel('welcome')
        } else if (sections.includes(dir)) {
          addLine(`Changing directory to ${dir}...`, 'dim')
          showPanel(dir)
        } else {
          addLine(`cd: no such file or directory: ${escHtml(dir)}`, 'error')
        }
        break
      }

      case 'contact':
        addLine('Routing packets to sksh...', 'dim')
        addLine('Response time: <span style="color:var(--green)">fast</span>')
        showPanel('contact')
        break

      case 'clear':
        setOutputLines([])
        showPanel('welcome')
        return

      case 'ls':
        addLine('Available sections in ~:', 'info')
        blank()
        ;['whoami', 'skills', 'experience', 'awards', 'skyfallen', 'origin', 'contact'].forEach(
          (s) => {
            addLine(
              `  <span style="color:var(--cyan)">drwxr-xr-x</span>  <span style="color:var(--green)">${s}/</span>`
            )
          }
        )
        showPanel('welcome')
        break

      case 'pwd':
        addLine('/home/yko')
        break

      case 'date':
        addLine(
          new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short',
          })
        )
        break

      case 'echo':
        const msg = parts.slice(1).join(' ')
        addLine(msg ? escHtml(msg) : '')
        break

      case 'github':
        addLine(
          'Opening <a href="https://github.com/yigitkerem" target="_blank" style="color:var(--green)">github.com/yigitkerem</a>...',
          'success'
        )
        window.open('https://github.com/yigitkerem', '_blank')
        break

      case 'email':
        addLine(
          'Opening mail client for <span style="color:var(--green)">yk@skfn.net</span>...',
          'success'
        )
        window.location.href = 'mailto:yk@skfn.net'
        break

      case 'resume':
      case 'cv':
        addLine(
          'Opening <span style="color:var(--green)">resume.pdf</span> in a new tab...',
          'success'
        )
        window.open('/resume.pdf', '_blank')
        break

      case 'kucukrobotcuk':
      case 'blog':
        addLine(
          'Opening <a href="https://kucukrobotcuk.com" target="_blank" style="color:var(--green)">kucukrobotcuk.com</a>...',
          'success'
        )
        window.open('https://kucukrobotcuk.com', '_blank')
        break

      case 'neofetch':
        blank()
        ;[
          ['OS', 'Skyfallen Kernel 10.0'],
          ['Host', 'UIUC ECE'],
          ['Shell', 'sksh (Skyfallen Shell) on skynux'],
          ['Uptime', '9 years, still building'],
          ['Packages', '100+ clients, 14+ countries'],
          ['CPU', 'Assembly-fluent brain'],
          ['Memory', '4.0 GPA @ UIUC'],
          ['GPU', 'Scanning Tunnelling Microscope'],
          ['Locale', 'TR, EN — Istanbul → Urbana IL'],
          ['Manufacturer', 'The Skyfallen Company'],
        ].forEach(([k, v]) => {
          addLine(
            `  <span style="color:var(--green);font-weight:700;display:inline-block;width:120px">${k}</span><span style="color:var(--text)">${v}</span>`
          )
        })
        blank()
        addLine(
          '  <span style="background:var(--green);color:var(--bg)"> </span><span style="background:var(--cyan)"> </span><span style="background:var(--amber)"> </span><span style="background:var(--red)"> </span><span style="background:var(--blue)"> </span><span style="background:var(--text)"> </span>'
        )
        blank()
        addLine('  <span style="color:var(--text-dim);font-style:italic">Designed in Istanbul, assembled in the US</span>', 'dim')
        blank()
        addLine('  <span style="color:var(--green)">withskyfallen.com</span>', 'success')
        blank()
        showPanel('welcome')
        break

      case 'uname': {
        const unameDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).replace(',', '')
        addLine(`Skyfallen-Kernel 10.0 sksh #1 SMP ${unameDate} x86_64 GNU/Linux`)
        break
      }
        break

      case 'secret':
        addLine('██████████ ACCESS GRANTED ██████████', 'warn')
        blank()
        addLine("Things that don't fit on a resume:", 'info')
        blank()
        addLine('  · Shipped 800kg of robotics gear across the Atlantic in high school')
        addLine('  · DJed the closing ceremony of an 800-person UN conference')
        addLine('  · Asked for a domain name as a birthday gift in 6th grade')
        addLine('  · Filed UK corporate taxes while preparing for IB exams')
        addLine("  · Recovered a lost childhood blog from old hard drives and mom's dusty boxes")
        addLine(
          "  · Mentored middle schoolers to a national robotics win without being there full-time"
        )
        addLine('  · Founded a company at 9, incorporated it at 15, still running it at 19')
        blank()
        addLine('████████████████████████████████████', 'warn')
        break

      case 'sudo':
        addLine('guest is not in the sudoers file. This incident will be reported.', 'error')
        break

      case 'rm':
        if (parts.includes('-rf') || parts.includes('-r')) {
          addLine('Nice try. The portfolio remains.', 'error')
        } else {
          addLine(`rm: cannot remove '${parts[1] || ''}': Operation not permitted`, 'error')
        }
        break

      case 'vim':
      case 'nano':
      case 'emacs':
        addLine(`Opening ${c}... just kidding, this is sksh.`, 'warn')
        break

      case 'git':
        if (parts[1] === 'blame') {
          addLine('All commits authored by: Yigit Kerem Oktay <yk@skfn.net>', 'dim')
        } else if (parts[1] === 'log') {
          addLine('commit a3f9b2c (HEAD -> main) — "still shipping, 10 years later"')
          addLine('commit 77e1d4a — "incorporated UK Ltd, age 15"')
          addLine('commit 221f993 — "first client, first invoice"')
          addLine('commit 0000001 — "initial commit: pharmacy IT, age 10"')
        } else if (parts[1] === 'status') {
          addLine('On branch main')
          addLine('Your branch is up to date with \'origin/main\'.')
          addLine('')
          addLine('nothing to commit, working tree clean')
        } else {
          addLine(`git: '${parts[1] || ''}' — see github.com/yigitkerem`, 'dim')
        }
        break

      default:
        addLine(`command not found: ${escHtml(c)}`, 'error')
        addLine(`Type <span style="color:var(--green)">help</span> to see available commands.`, 'dim')
    }

    blank()
  }

  const bootLines = useMemo(() => {
    const unameDate = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).replace(',', '')
    return [
      { text: `Skyfallen-Kernel 10.0 sksh #1 SMP ${unameDate} x86_64 GNU/Linux`, className: 'output' },
      { text: 'sksh (skyfallen shell) v22.04.16', className: 'success' },
      { text: '─────────────────────────────────────', className: 'dim' },
      { text: 'Initializing biographical data...', className: 'dim' },
      { text: '[  OK  ] Loaded: The Skyfallen Company (2016–present)', className: 'output' },
      { text: '[  OK  ] Loaded: ECE @ UIUC (2025–present)', className: 'output' },
      { text: '[  OK  ] Loaded: Lyding Group semiconductor research', className: 'output' },
      { text: '[  OK  ] Verified: 100+ clients, 14+ countries, 4.0 GPA', className: 'output' },
      { text: '[  OK  ] Awards: Uber Hackathon ×1, Teknofest finalist, NSS 3rd place', className: 'output' },
      { text: '─────────────────────────────────────', className: 'dim' },
      { text: 'All systems operational. Type <span style="color:var(--green)">help</span> to begin.', className: 'success' },
      { text: '', className: 'blank' },
    ]
  }, [])

  // Run boot sequence in the real terminal, then fade overlay (display pane only)
  useEffect(() => {
    if (bootedRef.current) return
    bootedRef.current = true
    // After "sksh" intro (1s), stream boot lines into the actual terminal
    const startBoot = setTimeout(() => {
      let lineIdx = 0
      function bootNext() {
        if (lineIdx >= bootLines.length) {
          setTimeout(() => setOverlayExiting(true), 500)
          return
        }
        addLine(bootLines[lineIdx].text, bootLines[lineIdx].className)
        lineIdx += 1
        setTimeout(bootNext, lineIdx === 1 ? 120 : 70)
      }
      bootNext()
    }, 1000)
  }, [bootLines])

  const renderPanel = () => {
    switch (activePanel) {
      case 'whoami':
        return <WhoamiPanel />
      case 'skills':
        return <SkillsPanel />
      case 'experience':
        return <ExperiencePanel />
      case 'awards':
        return <AwardsPanel />
      case 'skyfallen':
        return <SkyfallenPanel />
      case 'origin':
        return <OriginPanel />
      case 'contact':
        return <ContactPanel />
      default:
        return <WelcomePanel onCommand={runCommand} />
    }
  }

  const showBackButton = activePanel !== 'welcome' && activePanel !== ''

  // On mobile: delay showing the panel overlay so the command is visible in the terminal first
  useEffect(() => {
    if (mobileOverlayTimeoutRef.current) {
      clearTimeout(mobileOverlayTimeoutRef.current)
      mobileOverlayTimeoutRef.current = null
    }
    if (activePanel === 'welcome' || activePanel === '') {
      setShowMobileOverlay(false)
      return
    }
    mobileOverlayTimeoutRef.current = setTimeout(() => {
      setShowMobileOverlay(true)
      mobileOverlayTimeoutRef.current = null
    }, MOBILE_OVERLAY_DELAY_MS)
    return () => {
      if (mobileOverlayTimeoutRef.current) clearTimeout(mobileOverlayTimeoutRef.current)
    }
  }, [activePanel])

  const handleOverlayTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target === overlayRef.current && e.propertyName === 'opacity') {
      setOpeningComplete(true)
    }
  }

  // Safety: if overlay is exiting but transitionend never fires
  useEffect(() => {
    if (!overlayExiting) return
    const fallback = setTimeout(() => setOpeningComplete(true), 800)
    return () => clearTimeout(fallback)
  }, [overlayExiting])

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-[480px_1fr] grid-rows-[32px_1fr] h-screen w-full ${
        activePanel === 'origin' ? 'light-mode' : ''
      }`}
    >
      <TitleBar activePanel={activePanel} />
      <div className={`${activePanel === 'origin' ? 'bg-gray-100 border-gray-300' : 'bg-terminal-bg border-border'} md:border-r flex flex-col overflow-hidden min-h-0`}>
        <TerminalOutput lines={outputLines} activePanel={activePanel} />
        {activePanel === 'welcome' && (
          <SuggestedCommands onCommand={runCommand} activePanel={activePanel} />
        )}
        <TerminalPane onCommand={runCommand} activePanel={activePanel} />
      </div>
      {/* Desktop: panel in second column. Mobile: panel shown as full-screen overlay when a command is run. */}
      <div className="hidden md:flex min-h-0 overflow-hidden w-full h-full relative">
        <DisplayPane activePanel={activePanel}>{renderPanel()}</DisplayPane>
        {/* Overlay only over display pane: sksh intro, then fades to reveal panel */}
        <div
          ref={overlayRef}
          onTransitionEnd={handleOverlayTransitionEnd}
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-terminal-bg transition-opacity duration-700 ease-out ${
            overlayExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ transitionProperty: 'opacity' }}
          aria-hidden={openingComplete}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-green text-lg md:text-xl tracking-widest opacity-0 animate-opening-text">
              logging in as yko@skynux...
            </div>
            <div className="w-2 h-4 bg-green opacity-0 animate-opening-cursor" style={{ animationDelay: '400ms' }} />
          </div>
        </div>
      </div>
      {/* Mobile: full-screen panel overlay after a short delay; animates in with slide-up + fade */}
      {showBackButton && (
        <div
          className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300 ease-out ${
            activePanel === 'origin' ? 'bg-white' : 'bg-panel-bg'
          } ${
            showMobileOverlay
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-full pointer-events-none'
          }`}
          aria-modal
          role="dialog"
          aria-hidden={!showMobileOverlay}
        >
          <div className="flex-1 min-h-0 overflow-hidden">
            <DisplayPane activePanel={activePanel}>{renderPanel()}</DisplayPane>
          </div>
          <div className="flex-shrink-0 p-4 border-t border-border">
            <button
              type="button"
              onClick={() => runCommand('back')}
              className={`w-full py-3 font-medium text-sm rounded ${
                activePanel === 'origin'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-bg border border-border2 text-green hover:border-green'
              }`}
            >
              ← Back to terminal
            </button>
          </div>
        </div>
      )}
      {/* Desktop: floating Back button */}
      {showBackButton && (
        <button
          onClick={() => runCommand('back')}
          className={`hidden md:block fixed bottom-6 right-6 px-4 md:px-5 py-2 md:py-3 transition-all z-50 font-medium text-sm md:text-base ${
            activePanel === 'origin'
              ? 'bg-red-600 text-white hover:bg-red-700 border-2 border-red-800'
              : 'bg-bg border border-border2 text-green hover:border-green hover:bg-green-glow'
          }`}
          style={activePanel === 'origin' ? {
            backgroundColor: '#dc2626',
            color: '#ffffff',
            borderColor: '#991b1b',
            boxShadow: '0 8px 16px rgba(220, 38, 38, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset'
          } : {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          ← Back
        </button>
      )}
    </div>
  )
}
