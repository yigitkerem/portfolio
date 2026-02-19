'use client'

interface WelcomePanelProps {
  onCommand: (cmd: string) => void
}

export default function WelcomePanel({ onCommand }: WelcomePanelProps) {
  return (
    <div>
      <pre className="text-green text-[11px] leading-tight mb-8 opacity-70">
        {`╔═════════════════════════════════════╗
║   T H E · W O R L D · O F · Y K O   ║
╚═════════════════════════════════════╝`}
      </pre>
      <div className="font-serif text-[clamp(36px,4vw,56px)] font-bold text-text-bright leading-tight mb-2">
        Yiğit Kerem<br />
        <em className="italic text-green">Oktay.</em>
      </div>
      <div className="text-xs text-text-dim tracking-wider mb-8">
        ECE @ UIUC · Founder, The Skyfallen Company
      </div>

      <div className="grid grid-cols-4 gap-px bg-border border border-border my-6">
        {[
          { num: '9', label: 'Age started' },
          { num: '100+', label: 'Customers' },
          { num: '14+', label: 'Countries' },
          { num: '4.0', label: 'GPA' },
        ].map((stat, i) => (
          <div key={i} className="bg-bg p-5 text-center">
            <div className="font-serif text-[32px] font-bold text-green leading-none">
              {stat.num}
            </div>
            <div className="text-[10px] text-text-dim tracking-widest uppercase mt-1.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm text-text-dim mb-4">
        Type a command on the left, or click one:
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
        {[
          { cmd: 'whoami', desc: 'About me' },
          { cmd: 'skills', desc: 'Technical stack' },
          { cmd: 'experience', desc: 'Work history' },
          { cmd: 'awards', desc: 'Achievements' },
          { cmd: 'skyfallen', desc: 'The company' },
          { cmd: 'origin', desc: 'The real story' },
          { cmd: 'contact', desc: 'Get in touch' },
          { cmd: 'help', desc: 'All commands' },
        ].map((item) => (
          <div
            key={item.cmd}
            onClick={() => onCommand(item.cmd)}
            className="bg-bg border border-border2 p-4 md:p-5 cursor-pointer transition-all hover:border-green hover:bg-green-glow"
          >
            <div className="text-green text-sm md:text-base font-medium">{item.cmd}</div>
            <div className="text-text-dim text-xs md:text-sm mt-1">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
