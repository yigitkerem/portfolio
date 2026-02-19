export default function SkyfallenPanel() {
  const products = [
    {
      name: 'Skyfallen Success Manager ↗',
      desc: 'Client-facing SaaS portal — project requests, progress tracking, support, and payments. Built with Laravel, React, MySQL, SAML.',
    },
    {
      name: 'Skyfallen ONE',
      desc: 'Internal business management tool. CRM, task management, and project ops — all in-house.',
    },
    {
      name: 'SkyTrac · pharmacodex · Skyfallen Cloud',
      desc: 'Retail software products serving healthcare, hospitality, and SMBs.',
    },
    {
      name: 'KüçükRobotçuk · The Skyfallen (blog) · 50+ open source tools',
      desc: 'The nonprofit arm. Free Turkish tech journalism, English publications, and open-source contributions — no ads, funded from company earnings.',
    },
  ]

  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ ./skyfallen --status
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          The Skyfallen<br />
          <em className="italic text-text">Company.</em>
        </div>
      </div>

      <p className="text-sm md:text-base text-text leading-relaxed mb-6">
        Founded in 2016, incorporated in London in 2021. A global tech consulting company born from a simple idea: small businesses deserve good software too. Serves 100+ clients across 14+ countries. Has a retail arm, enterprise arm, and a nonprofit wing. Still running while I'm in college.
      </p>

      {products.map((product, i) => (
        <div
          key={i}
          className="bg-bg border border-border2 p-5 md:p-6 mb-3 transition-colors hover:border-green"
        >
          <div className="text-green text-sm md:text-base font-medium mb-1">{product.name}</div>
          <div className="text-text-dim text-xs md:text-sm leading-relaxed">{product.desc}</div>
        </div>
      ))}

      <div className="mt-5 text-xs md:text-sm text-text-dim">
        withskyfallen.com · github.com/SkyfallenHQ · HQ: 12 Constance Street, E16 2DQ, London
      </div>
    </div>
  )
}
