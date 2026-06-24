import Link from 'next/link'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  subheadline:         'Affordable tuition, flexible schedules, and 200+ career-ready programs — built for first-gen students, working adults, and career changers in Birmingham, AL.',
  cta_primary_label:   'Start My Application',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Browse Programs',
  cta_secondary_href:  '/academics',
}

const STATS = [
  { number: '200+', label: 'Programs' },
  { number: '2',    label: 'Campuses' },
  { number: '51',   label: 'Dual Enrollment' },
  { number: '1949', label: 'Est.' },
]

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, oklch(0.22 0.17 261) 0%, oklch(0.18 0.14 262) 100%)',
        minHeight: '60vh',
      }}
    >
      {/* Subtle decorative glow (respects prefers-reduced-motion) */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: '-8%',
          right: '4%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, oklch(0.79 0.19 78 / 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full py-16 sm:py-20"
        style={{ paddingTop: 'calc(var(--lscc-banner-h, 0px) + 3rem)' }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="font-display font-semibold uppercase mb-4"
            style={{
              color: 'oklch(0.79 0.19 78)',
              fontSize: '0.85rem',
              letterSpacing: '0.18em',
            }}
          >
            Lawson State Community College · Birmingham, AL
          </p>

          {/* Main headline - STATIC, no animation */}
          <h1
            className="font-display font-black leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              letterSpacing: '-0.03em',
              color: 'white',
            }}
          >
            Start Your Future at Lawson State
          </h1>

          {/* Subheadline */}
          <p
            className="mb-8"
            style={{
              color: 'oklch(1 0 0 / 0.85)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              lineHeight: 1.72,
              maxWidth: '50ch',
            }}
          >
            {c.subheadline}
          </p>

          {/* Key stats bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10 pb-10"
            style={{
              borderBottom: '1px solid oklch(1 0 0 / 0.15)',
            }}
          >
            {STATS.map((s) => (
              <div key={s.number} className="flex flex-col gap-1">
                <span
                  className="font-display font-black text-white leading-none"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {s.number}
                </span>
                <span
                  className="uppercase font-semibold"
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    color: 'oklch(1 0 0 / 0.60)',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={c.cta_primary_href}
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-lg transition-colors"
              style={{
                background: 'oklch(0.79 0.19 78)',
                color: 'oklch(0.11 0.03 261)',
                fontSize: '1rem',
              }}
            >
              {c.cta_primary_label}
            </Link>
            <Link
              href={c.cta_secondary_href}
              className="press inline-flex items-center font-semibold px-8 py-3.5 rounded-lg text-white transition-colors hover:bg-white/10"
              style={{
                border: '2px solid oklch(1 0 0 / 0.3)',
                fontSize: '1rem',
              }}
            >
              {c.cta_secondary_label}
            </Link>
          </div>
        </div>
      </div>

      {/* CSS for prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
