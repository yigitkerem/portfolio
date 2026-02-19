export default function SkillsPanel() {
  const skillGroups = [
    {
      label: 'Languages',
      tags: ['PHP', 'Swift', 'JavaScript / TypeScript', 'Go', 'C/C++', 'Assembly', 'Python', 'SQL', 'C'],
    },
    {
      label: 'Web & Mobile',
      tags: ['Laravel', 'Next.js', 'React', 'Node.js', 'SwiftUI', 'WordPress', 'TailwindCSS', 'SAML'],
    },
    {
      label: 'Infrastructure & Data',
      tags: ['Linux Sysadmin', 'Cisco', 'MySQL', 'PostgreSQL', 'HTTP API Design', 'Git', 'Server Administration', 'Docker', 'Kubernetes'],
    },
    {
      label: 'Hardware & Research',
      tags: ['Scanning Tunnelling Microscopy', 'Semiconductor Design', 'Electronics Manufacturing', 'Robotics', '3D Printing & CAD', 'Smart Building Design'],
    },
    {
      label: 'Business',
      tags: ['Company Incorporation', 'Globalisation', 'Fintech', 'Business Development', 'Tax & Regulatory Compliance', , 'UI/UX Design', 'SEO Optimization', 'International Logistics'],
    },
    {
      label: 'Current coursework @ UIUC',
      tags: ['ECE 110 — Introduction to Electronics', 'ECE 120 — Introduction to Computing', 'ECE 220 — Computer Systems & Programming', 'CS 124 — Introduction to Computer Science', 'CS 173 — Discrete Structures', 'MATH 221 — Calculus I', 'MATH 231 — Calculus II', 'MATH 241 — Calculus III', 'PHYS 211 — Mechanics'],
    },
  ]

  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ skills --list
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          The stack I<br />
          <em className="italic text-text">actually ship with.</em>
        </div>
      </div>

      {skillGroups.map((group, i) => (
        <div key={i} className="mb-6">
          <div className="text-xs md:text-sm tracking-widest uppercase text-cyan mb-2.5 flex items-center gap-2.5">
            {group.label}
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {group.tags.map((tag, j) => (
              <span
                key={j}
                className="text-xs md:text-sm text-text bg-bg border border-border2 px-3 md:px-4 py-1.5 md:py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
