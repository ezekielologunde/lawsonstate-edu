import Link from 'next/link'

const SPORTS_STATS = [
  { n: '14', label: 'NJCAA Sports' },
  { n: '5', label: 'Championships' },
  { n: '100+', label: 'Student-Athletes' },
  { n: '2', label: 'Campuses' },
]

export default function AthleticsCallout() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'oklch(0.92 0.05 255)', paddingBlock: '4.5rem' }}
      aria-label="Monarch Athletics"
    >
      {/* Real athletics photo background */}
      <img
        src="https://www.lawsonstate.edu/_resources/assets/img/athletics/hero-athletics.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.10 }}
        loading="lazy"
        decoding="async"
      />
      {/* Background glow orb */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-20%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.15) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

          {/* Left — copy */}
          <div className="scroll-reveal">
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'oklch(0.55 0.15 68)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
              04 — Lawson State Athletics
            </p>
            <h2
              className="font-display font-black leading-none mb-4"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
            >
              COMPETE AT THE <span style={{ color: 'oklch(0.55 0.15 68)' }}>NEXT LEVEL</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.80, color: 'oklch(0.40 0.04 261)', maxWidth: '50ch', marginBottom: '2rem' }}>
              Lawson State student-athletes compete in NJCAA athletics and earn academic scholarships. Train hard, compete harder, graduate ready.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-8">
              {SPORTS_STATS.map((s) => (
                <div key={s.n}>
                  <div
                    className="font-display font-black leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', letterSpacing: '-0.05em', color: 'oklch(0.16 0.04 261)' }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.03 261)', marginTop: '2px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/athletics"
              className="press btn-shimmer inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Explore Monarch Athletics
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Right — sport name tiles */}
          <div
            className="stagger-grid hidden lg:grid grid-cols-2 gap-2"
            aria-hidden
          >
            {['Soccer', 'Basketball', 'Baseball', 'Volleyball', 'Track & Field', 'Tennis'].map((sport, i) => {
              const tone = i % 3
              const bg = tone === 0 ? 'oklch(0.79 0.19 78)' : tone === 2 ? 'oklch(0.96 0.05 88)' : 'white'
              const fg = 'oklch(0.16 0.04 261)'
              return (
              <div
                key={sport}
                className="flex items-center justify-center font-display font-bold rounded-xl"
                style={{
                  padding: '1rem 1.1rem',
                  background: bg,
                  border: tone === 0 ? '1px solid transparent' : '1px solid oklch(0 0 0 / 0.08)',
                  boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: fg,
                }}
              >
                {sport}
              </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
