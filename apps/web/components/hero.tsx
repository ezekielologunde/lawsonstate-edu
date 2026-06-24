import Link from 'next/link'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  headline_line1:      'DISCOVER YOUR',
  headline_line2:      'FUTURE',
  subheadline:         'at Lawson State Community College — quality education, career training, and community leadership for Birmingham and beyond.',
  cta_primary_label:   'Apply Now',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Explore Programs',
  cta_secondary_href:  '/academics',
}

const TICKER = [
  'HBCU PROUD', 'EST. 1949', 'EXCELLENCE', '200+ PROGRAMS',
  'BIRMINGHAM, AL', 'SACSCOC ACCREDITED', 'COMMUNITY FIRST', 'YOUR FUTURE STARTS HERE',
]

const VIDEO_SRC  = 'https://www.lawsonstate.edu/_resources/assets/video/lawson-state-homepage-video.mp4'
const POSTER_IMG = 'https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg'

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c      = { ...DEFAULTS, ...content }
  const words1 = c.headline_line1.split(' ')
  const words2 = c.headline_line2.split(' ')
  const totalWords = words1.length + words2.length

  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'oklch(0.22 0.17 261)' }}
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <video
          autoPlay muted loop playsInline preload="auto" poster={POSTER_IMG}
          className="absolute w-full h-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(150deg, oklch(0.22 0.17 261 / 0.92) 0%, oklch(0.16 0.13 263 / 0.72) 50%, oklch(0.22 0.17 261 / 0.92) 100%)',
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0"
          style={{ height: '220px', background: 'linear-gradient(to bottom, transparent, oklch(0.22 0.17 261 / 0.70))' }}
        />
      </div>

      {/* ── Animated gold glow orb ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: '12%', right: '8%',
          width: '520px', height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.16) 0%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'glow-pulse 5.5s ease-in-out infinite',
        }}
      />
      {/* ── Secondary blue orb ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: '20%', left: '-5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.35 0.18 261 / 0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'glow-pulse 7s ease-in-out infinite 2s',
        }}
      />

      {/* ── Diagonal accent line ── */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        aria-hidden
        style={{
          top: '22%', right: '27%',
          width: '2px', height: '180px',
          background: 'oklch(0.79 0.19 78)',
          opacity: 0.35,
          transform: 'rotate(-12deg)',
        }}
      />

      {/* ── Floating stat card (desktop only) ── */}
      <div
        className="float-slow absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-0"
        aria-hidden
        style={{
          background: 'oklch(1 0 0 / 0.07)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid oklch(1 0 0 / 0.14)',
          borderRadius: '18px',
          padding: '1.5rem 1.75rem',
          minWidth: '170px',
          animationDelay: '0.5s',
        }}
      >
        <StatRow number="200+" label="Programs" />
        <div style={{ height: '1px', background: 'oklch(1 0 0 / 0.1)', margin: '1rem 0' }} />
        <StatRow number="2" label="Campuses" />
        <div style={{ height: '1px', background: 'oklch(1 0 0 / 0.1)', margin: '1rem 0' }} />
        <StatRow number="1949" label="Est." gold />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-6 w-full">
        <h1
          className="font-display font-black leading-none mb-7"
          style={{ letterSpacing: '-0.02em' } as React.CSSProperties}
        >
          {/* Line 1 — word-by-word entrance */}
          <span className="block" style={{ fontSize: 'clamp(3.25rem, 9.5vw, 7rem)' }}>
            {words1.map((word, i) => (
              <span
                key={i}
                className="hero-word text-white"
                style={{ animationDelay: `${0.05 + i * 0.13}s` }}
              >
                {word}
                {i < words1.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
          {/* Line 2 — gold */}
          <span className="block" style={{ fontSize: 'clamp(3.25rem, 9.5vw, 7rem)' }}>
            {words2.map((word, i) => (
              <span
                key={i}
                className="hero-word"
                style={{
                  color: 'oklch(0.79 0.19 78)',
                  animationDelay: `${0.05 + (words1.length + i) * 0.13}s`,
                }}
              >
                {word}
                {i < words2.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="hero-block text-white/70 mb-11"
          style={{
            fontSize: 'clamp(1rem, 1.7vw, 1.15rem)',
            lineHeight: 1.7,
            maxWidth: '46ch',
            animationDelay: `${0.05 + totalWords * 0.13}s`,
          }}
        >
          {c.subheadline}
        </p>

        <div
          className="hero-block flex flex-wrap gap-4"
          style={{ animationDelay: `${0.05 + totalWords * 0.13 + 0.18}s` }}
        >
          <Link
            href={c.cta_primary_href}
            className="press btn-shimmer hero-cta-gold inline-flex items-center font-semibold px-8 py-4 rounded-lg shadow-card"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9375rem' }}
          >
            {c.cta_primary_label}
          </Link>
          <Link
            href={c.cta_secondary_href}
            className="press hero-cta-ghost inline-flex items-center font-semibold px-8 py-4 rounded-lg text-white"
            style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.9375rem' }}
          >
            {c.cta_secondary_label}
          </Link>
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        className="relative mt-auto marquee-strip"
        style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}
      >
        <div className="marquee-track py-4 gap-0">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-white/28 text-xs font-bold uppercase whitespace-nowrap"
              style={{ letterSpacing: '0.18em', paddingRight: '2.5rem' }}
            >
              {item}
              <span className="ml-2.5" style={{ color: 'oklch(0.79 0.19 78)', opacity: 0.45 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatRow({ number, label, gold }: { number: string; label: string; gold?: boolean }) {
  return (
    <div>
      <div
        className="font-display font-black"
        style={{
          fontSize: number.length <= 3 ? '2rem' : '1.4rem',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: gold ? 'oklch(0.79 0.19 78)' : 'white',
        }}
      >
        {number}
      </div>
      <div className="text-white/45 uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', marginTop: '3px' }}>
        {label}
      </div>
    </div>
  )
}
