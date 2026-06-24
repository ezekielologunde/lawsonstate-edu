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
  stat_1: '200+ programs offered',
  stat_2: '2 campuses across Alabama',
  stat_3: 'Founded 1949',
  stat_4: 'Accredited by SACSCOC',
}

const VIDEO_SRC   = 'https://www.lawsonstate.edu/_resources/assets/video/lawson-state-homepage-video.mp4'
const POSTER_IMG  = 'https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg'

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'oklch(0.22 0.17 261)' }}
    >
      {/* ── Background video (native — works on all devices) ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_IMG}
          className="absolute w-full h-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* ── Overlay — brand colour gradient over the video ── */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(150deg, oklch(0.22 0.17 261 / 0.88) 0%, oklch(0.16 0.13 263 / 0.68) 50%, oklch(0.22 0.17 261 / 0.88) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0"
          style={{
            height: '180px',
            background: 'linear-gradient(to bottom, transparent, oklch(0.22 0.17 261 / 0.55))',
          }}
        />
      </div>

      {/* ── Depth accent shapes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-40 rounded-full"
          style={{ width: '640px', height: '640px', background: 'oklch(0.28 0.16 261)', opacity: 0.10 }}
        />
        <div
          className="absolute bottom-0 -left-60 rounded-full"
          style={{ width: '560px', height: '560px', background: 'oklch(0.27 0.15 261)', opacity: 0.07 }}
        />
        <div
          className="absolute hidden lg:block"
          style={{
            top: '22%', right: '27%',
            width: '2px', height: '200px',
            background: 'oklch(0.79 0.19 78)',
            opacity: 0.38,
            transform: 'rotate(-10deg)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
        <h1
          className="font-display font-black leading-none mb-7"
          style={{ letterSpacing: '-0.02em', textWrap: 'balance' } as React.CSSProperties}
        >
          <span className="block text-white" style={{ fontSize: 'clamp(3.25rem, 9.5vw, 7rem)' }}>
            {c.headline_line1}
          </span>
          <span
            className="block"
            style={{ fontSize: 'clamp(3.25rem, 9.5vw, 7rem)', color: 'oklch(0.79 0.19 78)' }}
          >
            {c.headline_line2}
          </span>
        </h1>

        <p
          className="text-white/70 mb-11"
          style={{ fontSize: 'clamp(1rem, 1.7vw, 1.15rem)', lineHeight: 1.7, maxWidth: '46ch' }}
        >
          {c.subheadline}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={c.cta_primary_href}
            className="inline-flex items-center font-semibold px-8 py-4 rounded-lg transition-all hover:brightness-105 shadow-card"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9375rem' }}
          >
            {c.cta_primary_label}
          </Link>
          <Link
            href={c.cta_secondary_href}
            className="inline-flex items-center font-semibold px-8 py-4 rounded-lg text-white transition-colors hover:bg-white/10"
            style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.9375rem' }}
          >
            {c.cta_secondary_label}
          </Link>
        </div>

        {/* Fact strip */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-white/45"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}
        >
          {[c.stat_1, c.stat_2, c.stat_3, c.stat_4].filter(Boolean).map((stat) => {
            const [bold, ...rest] = stat.split(' ')
            return (
              <span key={stat}>
                <strong className="text-white font-semibold">{bold}</strong>
                {rest.length ? ' ' + rest.join(' ') : ''}
              </span>
            )
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden
      >
        <span className="text-white/35 uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.3em' }}>Explore</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="text-white/35"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes bounce { 0%, 100% { transform: none; } }
        }
      `}</style>
    </section>
  )
}
