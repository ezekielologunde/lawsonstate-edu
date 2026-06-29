import Link from 'next/link'

const PATHWAYS = [
  {
    label: 'Associate Degrees',
    sub: '& Transfer Programs',
    description: "Start your bachelor's journey here. Transfer-ready degrees designed to move seamlessly to UAB, Auburn, Alabama, and 50+ partner universities.",
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/grads%20lawson.jpeg',
    href: '/programs',
    tag: '60+ degree programs',
    accent: 'oklch(0.79 0.19 78)',
    textColor: 'oklch(0.11 0.03 261)',
  },
  {
    label: 'CTE Certificates',
    sub: '& Workforce Training',
    description: 'Industry-certified credentials in months, not years. Real tools, real instructors, real jobs waiting the day you graduate.',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/Rich%20Raymond%20Mechatronics.jpg',
    href: '/programs?type=CER',
    tag: '30+ CTE programs',
    accent: 'oklch(0.65 0.22 35)',
    textColor: 'white',
  },
  {
    label: 'Online Programs',
    sub: 'Learn on Your Schedule',
    description: 'Earn your degree from anywhere. Fully online and hybrid options built around work, family, and the rest of your life.',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/Computer%20Sci%20Zoom2.jpg',
    href: '/programs?delivery=online',
    tag: 'Flexible learning',
    accent: 'oklch(0.62 0.20 220)',
    textColor: 'white',
  },
  {
    label: 'Military & Veterans',
    sub: 'We Honor Your Service',
    description: 'Dedicated support for active-duty service members, veterans, and their families. Your service translates to real college credit.',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/college_students3.jpg',
    href: '/admissions',
    tag: 'Military-friendly',
    accent: 'oklch(0.60 0.18 152)',
    textColor: 'white',
  },
]

export default function ProgramPathways() {
  return (
    <section
      style={{ background: 'oklch(0.92 0.05 255)', paddingBlock: '5rem' }}
      aria-label="Program Pathways"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10 scroll-reveal">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', color: 'oklch(0.30 0.15 261)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            Where Will You Go?
          </p>
          <h2
            className="font-display font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', letterSpacing: '-0.04em', color: 'oklch(0.11 0.03 261)' }}
          >
            CHOOSE YOUR <span style={{ color: 'oklch(0.30 0.15 261)' }}>PATH</span>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-grid">
          {PATHWAYS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group card-lift press relative overflow-hidden flex flex-col justify-end rounded-2xl"
              style={{ minHeight: '340px', textDecoration: 'none' }}
            >
              {/* Photo */}
              <img
                src={p.photo}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, oklch(0.06 0.04 261 / 0.95) 0%, oklch(0.06 0.04 261 / 0.45) 55%, transparent 100%)',
                }}
              />
              {/* Content */}
              <div className="relative z-10 p-7">
                {/* Tag pill */}
                <span
                  className="inline-block font-bold mb-3"
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                    background: p.accent,
                    color: p.textColor,
                  }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-display font-black text-white leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', letterSpacing: '-0.03em' }}
                >
                  {p.label}
                </h3>
                <p style={{ fontSize: '0.78rem', letterSpacing: '0.06em', color: p.accent, marginBottom: '0.6rem', fontWeight: 600 }}>
                  {p.sub}
                </p>
                <p className="text-white/75 mb-5" style={{ fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '38ch' }}>
                  {p.description}
                </p>
                <span
                  className="inline-flex items-center gap-2 font-bold transition-gap"
                  style={{ fontSize: '0.82rem', color: p.accent, letterSpacing: '0.04em' }}
                >
                  Explore
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
