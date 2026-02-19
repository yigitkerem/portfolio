export default function WhoamiPanel() {
  return (
    <div>
      <div className="mb-7 pb-4 border-b border-border">
        <div className="text-xs md:text-sm tracking-widest uppercase text-green mb-1.5">
          $ whoami
        </div>
        <div className="font-serif text-[clamp(24px,3vw,40px)] md:text-[clamp(28px,4vw,48px)] font-bold text-text-bright leading-tight">
          A builder who started<br />
          <em className="italic text-text">before high school.</em>
        </div>
      </div>

      {[
        {
          key: 'name',
          value: 'Yigit Kerem Oktay',
        },
        {
          key: 'current_role',
          value: 'B.S. Electrical & Computer Engineering, UIUC (2025–2028)<br />Undergraduate Researcher, Lyding Group — Scanning Tunnelling Microscopy<br />Founder & Director, The Skyfallen Company (2016–present)',
        },
        {
          key: 'location',
          value: 'Urbana, IL 61801 · Originally from Istanbul & Erzincan, Turkey',
        },
        {
          key: 'origin_story',
          value: 'Started "IT consulting" at age 9 at my mother\'s pharmacy in Erzincan — setting up CCTV, computers, and the Turkish Health Ministry\'s drug sale system because nobody else could. First paying clients at 10. Incorporated a UK Limited company at 15. Filed British taxes as a high schooler in Istanbul. Now studying the same semiconductor chips I\'ve been building products on for years — from the atomic level up.',
        },
        {
          key: 'gradesscores',
          value: 'UIUC: 4.0 · IB Diploma: Math HL · Physics HL · CS HL',
        },
        {
          key: 'fun_facts',
          value: '- Shipped 800kg of robotics equipment across the Atlantic in a commercial flight<br />- DJed the closing ceremony of an 800-person MUN conference<br />- Asked for a domain name as a birthday gift in 6th grade<br />- Mentored middle schoolers to a robotics win a robotics prize I never won',
        },
      ].map((block, i) => (
        <div key={i} className="bg-bg border border-border2 p-5 md:p-6 mb-4">
          <div className="text-xs md:text-sm text-cyan mb-1">{block.key}</div>
          <div
            className="text-sm md:text-base text-text-bright leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.value }}
          />
        </div>
      ))}
    </div>
  )
}
