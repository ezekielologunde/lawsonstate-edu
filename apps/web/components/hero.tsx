'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  subheadline:         "Birmingham's HBCU since 1949 — quality education, career training, and community leadership for the next generation.",
  cta_primary_label:   'Apply Now',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Explore Programs',
  cta_secondary_href:  '/academics',
}

const WORDS = ['FUTURE', 'CAREER', 'DEGREE', 'STORY']

const STATS = [
  { number: '200+', label: 'Programs' },
  { number: '2',    label: 'Campuses' },
  { number: '51',   label: 'Dual Enrollment' },
  { number: '1949', label: 'Est.' },
]

const PATHS = [
  { label: 'New Student',     sub: 'Apply & get started',   href: '/admissions/apply' },
  { label: 'Transfer Student', sub: 'Transfer your credits', href: '/admissions/transfer' },
  { label: 'Current Student', sub: 'Portal & resources',    href: '/student-portal' },
  { label: 'Adult Learner',   sub: 'Workforce & certs',     href: '/workforce' },
]

const TICKER = [
  'HBCU PROUD', 'EST. 1949', 'EXCELLENCE', '200+ PROGRAMS',
  'BIRMINGHAM, AL', 'SACSCOC ACCREDITED', 'COMMUNITY FIRST', 'YOUR FUTURE STARTS HERE',
]

const VIDEO_SRC  = 'https://www.lawsonstate.edu/_resources/assets/video/lawson-state-homepage-video.mp4'
const POSTER_IMG = 'https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg'

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  const [wordIdx, setWordIdx]   = useState(0)
  const [exiting, setExiting]   = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true)
      const t = setTimeout(() => {
        setWordIdx(i => (i + 1) % WORDS.length)
        setExiting(false)
      }, 320)
      return () => clearTimeout(t)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ background: 'oklch(0.22 0.17 261)', minHeight: '82vh' }}
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <video
          autoPlay muted loop playsInline preload="auto" poster={POSTER_IMG}
          className="absolute w-full h-full object-cover object-center"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.95) 0%, oklch(0.16 0.13 263 / 0.78) 55%, oklch(0.22 0.17 261 / 0.90) 100%)',
          }}
        />
      </div>

      {/* ── Gold glow ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: '-8%', right: '8%',
          width: '480px', height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.13) 0%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'glow-pulse 5.5s ease-in-out infinite',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 lg:gap-14 items-center">

          {/* LEFT: headline + CTAs */}
          <div>
            <p
              className="hero-block font-display font-semibold uppercase mb-5"
              style={{
                color: 'oklch(0.79 0.19 78)',
                fontSize: '0.7rem',
                letterSpacing: '0.22em',
                animationDelay: '0.05s',
              }}
            >
              Lawson State Community College · Birmingham, AL
            </p>

            <h1
              className="font-display font-black leading-none mb-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              {/* Static line 1 */}
              <span
                className="hero-word block text-white"
                style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)', animationDelay: '0.1s' }}
              >
                WHERE YOUR
              </span>

              {/* Animated cycling word */}
              <span
                className="block"
                style={{
                  fontSize: 'clamp(2.8rem, 8vw, 6.8rem)',
                  color: 'oklch(0.79 0.19 78)',
                  overflow: 'hidden',
                  lineHeight: 1.0,
                }}
                aria-live="polite"
                aria-label={WORDS[wordIdx]}
              >
                <span
                  style={{
                    display: 'inline-block',
                    opacity:   exiting ? 0 : 1,
                    transform: exiting ? 'translateY(-18px)' : 'translateY(0)',
                    transition: exiting
                      ? 'opacity 0.28s ease-in, transform 0.28s ease-in'
                      : 'opacity 0.32s ease-out, transform 0.32s ease-out',
                  }}
                >
                  {WORDS[wordIdx]}
                </span>
              </span>

              {/* Static line 3 */}
              <span
                className="hero-word block text-white"
                style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)', animationDelay: '0.22s' }}
              >
                BEGINS HERE.
              </span>
            </h1>

            <p
              className="hero-block text-white/60 mb-8"
              style={{
                fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                lineHeight: 1.75,
                maxWidth: '44ch',
                animationDelay: '0.38s',
              }}
            >
              {c.subheadline}
            </p>

            <div
              className="hero-block flex flex-wrap gap-3"
              style={{ animationDelay: '0.48s' }}
            >
              <Link
                href={c.cta_primary_href}
                className="press btn-shimmer hero-cta-gold inline-flex items-center font-bold px-7 py-3.5 rounded-lg"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.875rem' }}
              >
                {c.cta_primary_label}
              </Link>
              <Link
                href={c.cta_secondary_href}
                className="press hero-cta-ghost inline-flex items-center font-semibold px-7 py-3.5 rounded-lg text-white"
                style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '0.875rem' }}
              >
                {c.cta_secondary_label}
              </Link>
            </div>
          </div>

          {/* RIGHT: path selector (desktop) */}
          <div className="hidden lg:flex flex-col">
            <p
              className="uppercase font-semibold mb-3"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: 'oklch(1 0 0 / 0.3)' }}
            >
              I am a...
            </p>
            <div className="flex flex-col gap-2">
              {PATHS.map((path) => (
                <Link
                  key={path.label}
                  href={path.href}
                  className="press group flex items-center justify-between rounded-xl px-4 py-3 transition-colors"
                  style={{
                    background: 'oklch(1 0 0 / 0.07)',
                    border: '1px solid oklch(1 0 0 / 0.11)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div>
                    <div
                      className="font-display font-bold text-white leading-none mb-0.5"
                      style={{ fontSize: '0.82rem' }}
                    >
                      {path.label}
                    </div>
                    <div
                      className="text-white/40"
                      style={{ fontSize: '0.62rem' }}
                    >
                      {path.sub}
                    </div>
                  </div>
                  <span
                    className="text-white/30 group-hover:text-lscc-gold transition-colors"
                    style={{ fontSize: '0.8rem' }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid oklch(1 0 0 / 0.1)',
          }}
        >
          {STATS.map((s) => (
            <div key={s.number} className="flex flex-col gap-0.5">
              <span
                className="font-display font-black text-white leading-none"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', letterSpacing: '-0.035em' }}
              >
                {s.number}
              </span>
              <span
                className="text-white/40 uppercase font-medium"
                style={{ fontSize: '0.58rem', letterSpacing: '0.16em' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee ticker ── */}
      <div
        className="relative marquee-strip"
        style={{ borderTop: '1px solid oklch(1 0 0 / 0.09)' }}
      >
        <div className="marquee-track py-3">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center font-bold uppercase whitespace-nowrap"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                paddingRight: '2.5rem',
                color: 'oklch(1 0 0 / 0.22)',
              }}
            >
              {item}
              <span
                className="ml-2.5"
                style={{ color: 'oklch(0.79 0.19 78)', opacity: 0.4 }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
