'use client'

interface SuggestedCommandsProps {
  onCommand: (cmd: string) => void
  activePanel?: string
}

const SUGGESTED = [
  { cmd: 'whoami', desc: 'About me' },
  { cmd: 'skills', desc: 'Technical stack' },
  { cmd: 'experience', desc: 'Work history' },
  { cmd: 'awards', desc: 'Achievements' },
  { cmd: 'skyfallen', desc: 'The company' },
  { cmd: 'origin', desc: 'The real story' },
  { cmd: 'contact', desc: 'Get in touch' },
  { cmd: 'resume', desc: 'PDF resume' },
  { cmd: 'blog', desc: 'kucukrobotcuk' },
  { cmd: 'help', desc: 'All commands' },
]

export default function SuggestedCommands({ onCommand, activePanel }: SuggestedCommandsProps) {
  const isLightMode = activePanel === 'origin'

  return (
    <div className="md:hidden flex-shrink-0 px-4 pb-3">
      <div className={`text-[11px] ${isLightMode ? 'text-gray-600' : 'text-text-dim'} mb-2`}>
        Tap a command:
      </div>
      <div className="grid grid-cols-2 gap-2">
        {SUGGESTED.map((item) => (
          <button
            key={item.cmd}
            type="button"
            onClick={() => onCommand(item.cmd)}
            className={`text-left font-mono rounded border px-3 py-2.5 transition-all active:scale-[0.98] ${
              isLightMode
                ? 'bg-white border-gray-300 text-gray-900 hover:border-green-600 hover:bg-green-50'
                : 'bg-bg border-border2 text-text-bright hover:border-green hover:bg-green-glow'
            }`}
          >
            <span className={`text-xs font-medium ${isLightMode ? 'text-green-600' : 'text-green'}`}>
              {item.cmd}
            </span>
            <span className={`block text-[10px] mt-0.5 ${isLightMode ? 'text-gray-500' : 'text-text-dim'}`}>
              {item.desc}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
