export default function ContactPanel() {
  const contacts = [
    { label: 'email', value: 'yk@skfn.net', href: 'mailto:yk@skfn.net' },
    { label: 'phone', value: '217.318.1364' },
    { label: 'linkedin', value: 'linkedin.com/in/yigitkerem', href: 'https://linkedin.com/in/yigitkerem' },
    { label: 'github', value: 'github.com/yigitkerem', href: 'https://github.com/yigitkerem' },
    { label: 'company', value: 'withskyfallen.com', href: 'https://withskyfallen.com' },
    { label: 'location', value: 'Urbana, IL 61801 · UIUC Campus' },
  ]

  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ ping sksh
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          Let's build<br />
          <em className="italic text-text">something real.</em>
        </div>
      </div>

      {contacts.map((contact, i) => (
        <div key={i} className="flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-border">
          <div className="text-xs md:text-sm text-text-dim w-[100px] md:w-[120px] flex-shrink-0">
            {contact.label}
          </div>
          <div className="text-green text-sm md:text-base">
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-green no-underline hover:underline"
              >
                {contact.value}
              </a>
            ) : (
              contact.value
            )}
          </div>
        </div>
      ))}

      <div className="mt-7 text-sm md:text-base text-text-dim leading-relaxed">
        Open to: research collaborations, internships (hardware/software), Skyfallen projects, and interesting conversations about building things from nothing.
      </div>
    </div>
  )
}
