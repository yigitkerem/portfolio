export default function ExperiencePanel() {
  const experiences = [
    {
      period: '2025 – Present',
      role: 'Undergraduate Researcher',
      org: 'Lyding Group · UIUC, Urbana IL',
      points: [
        'Hands-on Scanning Tunnelling Microscopy for atomic-scale semiconductor observation',
        'Semiconductor design research under faculty supervision',
        'Redesigning signal processing circuity for the STMs using FPGAs, microcontrollers and modern web interfaces',
      ],
    },
    {
      period: '2016 – Present',
      role: 'Founder & Director',
      org: 'The Skyfallen Company · London · Chicago · Istanbul',
      points: [
        'Incorporated Skyfallen Limited in London, UK at 15 — UK taxes, legal paperwork, international banking',
        'Built internal SaaS tools with Laravel, React, MySQL, SAML (Skyfallen ONE & Success Manager)',
        '100+ clients across 14+ countries: websites, apps, embedded devices, IT infrastructure',
        'Hired and managed remote employees; maintained 5-star reviews since 2016',
        'Published 50+ open-source tools via SkyfallenHQ GitHub org',
      ],
    },
    {
      period: '2021 – 2025',
      role: 'Team Captain & Club President',
      org: 'Koç School FRC Club · Istanbul, Turkey',
      points: [
        'Led 40-person team (robotics, electronics, ML, HR, marketing, finance)',
        'Coordinated 800kg of equipment + 20 people for international US competition',
        'Ran multi-stage admissions for 200+ applicants/year — 4% acceptance rate',
        'Secured $10,000+ in sponsorships; designed and built school workshop from scratch',
        'Founded FTC Jr. club (RAMs Jr.) — mentored 9 middle schoolers to competition wins',
      ],
    },
    {
      period: '2019 – 2021',
      role: 'Operations Manager & Head of IT',
      org: 'MUNDP · Koç School · Istanbul, Turkey',
      points: [
        'Helped run 800-person international MUN conference (25-year tradition)',
        'Coordinated a 40-person team and school facilities such as catering and security',
        'Built custom web platform: participant tracking, badge printing, gate security scanning',
        'Managed sponsorships from Turkey\'s top consumer brands',
        'Also DJed the closing party (this is real)',
      ],
    },
    {
      period: '2013 – 2020',
      role: 'IT Setup & Night Shift · Age 9–16',
      org: 'Aksoy Eczanesi · Erzincan, Turkey',
      points: [
        'Self-taught: installed CCTV, 5-computer network, Turkish Health Ministry drug system',
        'Worked night shifts at the pharmacy register — first taste of "client work"',
        'This is where the whole thing started',
      ],
    },
  ]

  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ cat experience.log
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          What I've<br />
          <em className="italic text-text">actually done.</em>
        </div>
      </div>

      {experiences.map((exp, i) => (
        <div key={i} className="border-l-2 border-border2 pl-5 md:pl-6 mb-8 relative">
          <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-green border-2 border-bg" />
          <div className="text-xs md:text-sm text-green tracking-wider">{exp.period}</div>
          <div className="font-serif text-xl md:text-2xl font-bold text-text-bright my-1">{exp.role}</div>
          <div className="text-xs md:text-sm text-text-dim mb-2.5">{exp.org}</div>
          <ul className="list-none">
            {exp.points.map((point, j) => (
              <li
                key={j}
                className="text-sm md:text-base text-text pl-3.5 relative mb-1.5 leading-relaxed"
              >
                <span className="absolute left-0 text-green text-xs top-0.5">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
