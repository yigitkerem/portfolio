export default function AwardsPanel() {
  const awards = [
    {
      year: '2022',
      title: '🏆 1st Place — Uber Global Hackathon (Middle East)',
      desc: 'AI skin disease detection app built in 48h. Won the region, competed against 5 worldwide finalists.',
    },
    {
      year: '2021',
      title: '🥇 Teknofest National Finalist',
      desc: 'AR mobile conferencing app for remote classrooms. Finalist among 100,000+ contestants.',
    },
    {
      year: '2023',
      title: '🥉 NSS Space Settlement — 3rd Place Worldwide',
      desc: 'Placed 3rd among 8,000+ global teams designing a Venus-orbiting space settlement (formerly NASA competition).',
    },
    {
      year: '2024',
      title: '🤖 FTC Finalist Alliance Award',
      desc: 'Mentored 8 middle schoolers to 2nd place among 40 Turkish teams. As their coach, not a participant.',
    },
    {
      year: '2024',
      title: '🌌 NSS "Live in a Healthy Space" — 1st Place ×2',
      desc: 'Mentored two separate student groups — both won 1st place independently in the same competition.',
    },
    {
      year: '2021–25',
      title: '📘 IB Diploma + CS Department Award ×2',
      desc: 'IB Math HL, Physics HL, CS HL. CS Department Award given to one student per year — won it two consecutive years.',
    },
    {
      year: '2016–25',
      title: '📝 Academic High Honours — Every Year',
      desc: 'Awarded by Turkey\'s Ministry of Education for GPA above 85.00 on the national scale, every year of high school.',
    },
  ]

  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ ls ./awards/
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          Moments that<br />
          <em className="italic text-text">stood out.</em>
        </div>
      </div>

      {awards.map((award, i) => (
        <div key={i} className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-6 py-4.5 md:py-5 border-b border-border">
          <div>
            <div className="text-xs md:text-sm text-amber">{award.year}</div>
          </div>
          <div>
            <div className="text-sm md:text-base text-text-bright font-medium mb-1">{award.title}</div>
            <div className="text-xs md:text-sm text-text-dim leading-relaxed">{award.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
