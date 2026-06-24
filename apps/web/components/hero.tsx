'use client'

import Link from 'next/link'
import SearchBar from './search-bar'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  subheadline:         'Affordable tuition, flexible schedules, and 200+ career-ready programs — built for first-gen students, working adults, and career changers in Birmingham, AL.',
  cta_primary_label:   'Apply Now',
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

const CATEGORIES = [
  { label: 'Health Sciences', href: '/academics?tag=health' },
  { label: 'Business',        href: '/academics?tag=business' },
  { label: 'Trades & CTE',   href: '/academics?tag=trades' },
  { label: 'Transfer',        href: '/academics?tag=transfer' },
  { label: 'Online',          href: '/academics?tag=online' },
]

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: '100dvh' }}
      aria-label="Hero"
    >
      {/* Fallback background image — mobile + video-failure */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://www.lawsonstate.edu/_resources/assets/img/grads%20lawson.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          animation: 'kenburns 25s ease-in-out infinite alternate',
        }}
      />

      {/* Vimeo ambient video — desktop only, loops silently in background */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden hidden md:block"
        style={{ pointerEvents: 'none' }}
      >
        <iframe
          src="https://player.vimeo.com/video/1058690019?background=1&autoplay=1&loop=1&muted=1"
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
            transform: 'translate(-50%, -50%)',
            border: 0,
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen"
          title=""
        />
      </div>

      {/* Gradient scrim — left-heavy for text legibility, opens toward right */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(108deg, oklch(0.10 0.06 261 / 0.94) 0%, oklch(0.12 0.06 261 / 0.80) 42%, oklch(0.12 0.06 261 / 0.44) 100%)',
        }}
      />

      {/* Gold radial glow — top right */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.14) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full"
        style={{
          paddingTop: 'calc(var(--lscc-banner-h, 0px) + 5rem)',
          paddingBottom: '4rem',
        }}
      >
        <div style={{ maxWidth: '680px' }}>

          <p
            className="font-display font-semibold uppercase mb-5 h-fade-1"
            style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.20em' }}
          >
            Lawson State Community College · Birmingham, AL
          </p>

          <h1
            className="font-display font-black mb-6 h-fade-2"
            style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'white',
            }}
          >
            Start Your Future<br />
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>at Lawson State</span>
          </h1>

          <p
            className="mb-8 h-fade-3"
            style={{
              color: 'oklch(1 0 0 / 0.80)',
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.75,
              maxWidth: '52ch',
            }}
          >
            {c.subheadline}
          </p>

          {/* Large search bar */}
          <div className="mb-4 h-fade-4" style={{ maxWidth: '540px' }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 40px oklch(0 0 0 / 0.40)' }}>
              <SearchBar />
            </div>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10 h-fade-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="press inline-flex items-center font-semibold transition-colors"
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.02em',
                  padding: '0.38rem 0.9rem',
                  borderRadius: '999px',
                  background: 'oklch(1 0 0 / 0.10)',
                  color: 'oklch(1 0 0 / 0.90)',
                  border: '1px solid oklch(1 0 0 / 0.22)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10 pb-10 h-fade-5"
            style={{ borderBottom: '1px solid oklch(1 0 0 / 0.15)' }}
          >
            {STATS.map((s) => (
              <div key={s.number} className="flex flex-col gap-1">
                <span
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', letterSpacing: '-0.04em' }}
                >
                  {s.number}
                </span>
                <span
                  className="uppercase font-semibold"
                  style={{ fontSize: '0.73rem', letterSpacing: '0.14em', color: 'oklch(1 0 0 / 0.55)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 h-fade-5">
            <Link
              href={c.cta_primary_href}
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
            >
              {c.cta_primary_label}
            </Link>
            <Link
              href={c.cta_secondary_href}
              className="press inline-flex items-center font-semibold px-8 py-3.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              style={{ border: '2px solid oklch(1 0 0 / 0.35)', fontSize: '1rem' }}
            >
              {c.cta_secondary_label}
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        .h-fade-1 { animation: hfade 0.7s ease-out 0.10s both; }
        .h-fade-2 { animation: hfade 0.7s ease-out 0.25s both; }
        .h-fade-3 { animation: hfade 0.7s ease-out 0.40s both; }
        .h-fade-4 { animation: hfade 0.7s ease-out 0.55s both; }
        .h-fade-5 { animation: hfade 0.7s ease-out 0.70s both; }
        @keyframes hfade {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .h-fade-1,.h-fade-2,.h-fade-3,.h-fade-4,.h-fade-5 { animation: none; }
        }
      `}</style>
    </section>
  )
}
