'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

type HeroContent = Record<string, string>

const VIDEO_SRC = 'https://www.lawsonstate.edu/_resources/assets/video/lawson-state-homepage-video.mp4'
const POSTER_SRC = 'https://www.lawsonstate.edu/_resources/assets/img/grads%20lawson.jpeg'

const DEFAULTS: HeroContent = {
  subheadline:         'Alabama’s proud HBCU since 1949 — 200+ career-ready programs across two Birmingham campuses.',
  cta_primary_label:   'Apply Now',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Explore Programs',
  cta_secondary_href:  '/academics',
}

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  const videoEl   = useRef<HTMLVideoElement>(null)
  const videoWrap = useRef<HTMLDivElement>(null)
  const scrollY   = useRef(0)
  const rafRef    = useRef<number | undefined>(undefined)

  const [playing,      setPlaying]      = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true)
      setPlaying(false)
    }
  }, [])

  // Single subtle moving effect: a whisper of scroll parallax on the video.
  // No cursor parallax, no breathing layers — restrained by design.
  useEffect(() => {
    if (reduceMotion) return
    const onScroll = () => { scrollY.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    const tick = () => {
      if (videoWrap.current) {
        videoWrap.current.style.transform = `translate3d(0, ${scrollY.current * 0.15}px, 0)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [reduceMotion])

  const toggleVideo = () => {
    const v = videoEl.current
    if (!v) return
    if (playing) v.pause()
    else v.play().catch(() => {})
    setPlaying(!playing)
  }

  return (
    <section
      className="hero-video relative flex items-center overflow-hidden"
      aria-label="Welcome to Lawson State Community College"
      style={{ minHeight: 'clamp(600px, 84vh, 820px)' }}
    >
      {/* Background video (poster fallback) — slow Ken Burns on the <video>,
          parallax translate on the wrapper (separate layers, no transform clash). */}
      <div ref={videoWrap} aria-hidden className="absolute inset-0" style={{ willChange: 'transform' }}>
        <video
          ref={videoEl}
          className={reduceMotion ? 'absolute inset-0 w-full h-full object-cover' : 'absolute inset-0 w-full h-full object-cover hero-kenburns'}
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      </div>

      {/* Premium scrim — dense on the left for text legibility (≥4.5:1 white),
          easing to reveal the video on the right. Plus a soft bottom vignette. */}
      <div aria-hidden className="absolute inset-0" style={{
        background:
          'linear-gradient(96deg, oklch(0.13 0.07 263 / 0.88) 0%, oklch(0.15 0.07 263 / 0.66) 42%, oklch(0.18 0.06 263 / 0.18) 78%, transparent 100%)',
      }} />
      <div aria-hidden className="absolute inset-0" style={{
        background: 'linear-gradient(0deg, oklch(0.11 0.05 263 / 0.55) 0%, transparent 32%)',
      }} />

      {/* Content — one calm column, generous whitespace */}
      <div className="relative w-full max-w-7xl mx-auto px-6"
        style={{ paddingTop: 'calc(var(--lscc-banner-h, 0px) + 2rem)', paddingBottom: '2rem', zIndex: 2 }}>
        <div style={{ maxWidth: '40rem' }}>

          {/* Eyebrow — gold hairline + tracked label */}
          <div className="flex items-center gap-3 mb-7 page-fade-1">
            <span aria-hidden style={{ width: '38px', height: '2px', background: 'oklch(0.79 0.19 78)', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '0.72rem', letterSpacing: '0.24em', textTransform: 'uppercase',
              color: 'oklch(0.96 0.04 82)',
            }}>
              Proud HBCU · Est. 1949
            </span>
          </div>

          {/* Headline — short, premium, single gold accent */}
          <h1 className="font-display font-black page-fade-2" style={{
            fontSize: 'clamp(2.8rem, 6.4vw, 5rem)', letterSpacing: '-0.04em',
            lineHeight: 0.98, color: 'white', marginBottom: '1.5rem',
            textShadow: '0 2px 30px oklch(0.08 0.04 263 / 0.5)',
          }}>
            Your future starts{' '}
            <span style={{ color: 'oklch(0.84 0.17 82)' }}>here.</span>
          </h1>

          {/* Subhead — one concise line */}
          <p className="page-fade-3" style={{
            color: 'oklch(1 0 0 / 0.82)', fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            lineHeight: 1.65, maxWidth: '40ch', marginBottom: '2.5rem',
            textShadow: '0 1px 16px oklch(0.08 0.04 263 / 0.45)',
          }}>
            {c.subheadline}
          </p>

          {/* CTAs — one dominant gold, one quiet ghost */}
          <div className="flex flex-wrap items-center gap-4 page-fade-4">
            <Link
              href={c.cta_primary_href}
              className="press btn-shimmer inline-flex items-center justify-center font-bold rounded-xl"
              style={{
                background: 'oklch(0.79 0.19 78)', color: 'oklch(0.16 0.13 263)',
                fontSize: '1rem', padding: '1rem 2.25rem',
                boxShadow: '0 10px 34px oklch(0.79 0.19 78 / 0.30)',
              }}
            >
              {c.cta_primary_label}
            </Link>
            <Link
              href={c.cta_secondary_href}
              className="press hero-ghost inline-flex items-center justify-center font-semibold rounded-xl text-white"
              style={{
                border: '1.5px solid oklch(1 0 0 / 0.45)', fontSize: '1rem', padding: '1rem 2rem',
              }}
            >
              {c.cta_secondary_label}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span style={{ fontSize: '0.56rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.45)' }}>
          Scroll
        </span>
        <div style={{
          width: '1.5px', height: '38px',
          background: 'linear-gradient(to bottom, oklch(1 0 0 / 0.55), transparent)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
      </div>

      {/* Video play/pause — restrained control, also a reduced-motion courtesy */}
      {!reduceMotion && (
        <button onClick={toggleVideo}
          className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 press"
          style={{
            background: 'oklch(1 0 0 / 0.10)', border: '1px solid oklch(1 0 0 / 0.25)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '999px', padding: '0.5rem 1.05rem',
            color: 'oklch(1 0 0 / 0.85)', fontSize: '0.68rem', fontWeight: 700,
            letterSpacing: '0.10em', cursor: 'pointer', zIndex: 2,
          }}
          aria-label={playing ? 'Pause background video' : 'Play background video'}>
          {playing ? (
            <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>PAUSE</>
          ) : (
            <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden><polygon points="5 3 19 12 5 21 5 3"/></svg>PLAY</>
          )}
        </button>
      )}

      <style>{`
        .hero-kenburns { animation: kenburns 26s ease-in-out infinite; transform-origin: center; }
        .hero-video .hero-ghost { transition: background 0.2s ease, border-color 0.2s ease; }
        .hero-video .hero-ghost:hover { background: oklch(1 0 0 / 0.12); border-color: oklch(1 0 0 / 0.7); }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns { animation: none; }
          .hero-video .scrollLine, .hero-video [style*="scrollLine"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
