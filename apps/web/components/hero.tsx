'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import SearchBar from './search-bar'
import CursorGlow from './cursor-glow'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  subheadline:         'Affordable tuition, flexible schedules, and 200+ career-ready programs — built for first-gen students, working adults, and career changers in Birmingham, AL.',
  cta_primary_label:   'Apply Now',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Browse Programs',
  cta_secondary_href:  '/academics',
}

const STATS = [
  { target: 200, suffix: '+', label: 'Programs' },
  { target: 2,   suffix: '',  label: 'Campuses' },
  { target: 51,  suffix: '',  label: 'Dual Enrollment' },
  { target: 1949, suffix: '', label: 'Est.' },
]

const CATEGORIES = [
  { label: 'Health Sciences', href: '/academics?tag=health' },
  { label: 'Business',        href: '/academics?tag=business' },
  { label: 'Trades & CTE',   href: '/academics?tag=trades' },
  { label: 'Transfer',        href: '/academics?tag=transfer' },
  { label: 'Online',          href: '/academics?tag=online' },
]

function StatCounter({ target, suffix, label, active, delay = 0 }: {
  target: number; suffix: string; label: string; active: boolean; delay?: number
}) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) { setVal(target); return }
    const t = setTimeout(() => {
      const dur = 1800
      let s: number | null = null
      const raf = (ts: number) => {
        if (!s) s = ts
        const p = Math.min((ts - s) / dur, 1)
        const e = 1 - Math.pow(1 - p, 4)
        setVal(Math.round(e * target))
        if (p < 1) requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }, delay)
    return () => clearTimeout(t)
  }, [active, target, delay])
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', letterSpacing: '-0.05em' }}>
        {val.toLocaleString()}{suffix}
      </span>
      <span className="uppercase font-semibold" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'oklch(1 0 0 / 0.50)' }}>
        {label}
      </span>
    </div>
  )
}

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }
  const videoRef  = useRef<HTMLIFrameElement>(null)
  const [playing,      setPlaying]      = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [statsActive,  setStatsActive]  = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) { setReduceMotion(true); setPlaying(false) }
    // start count-up after entrance animations finish
    const t = setTimeout(() => setStatsActive(true), 900)
    return () => clearTimeout(t)
  }, [])

  const toggleVideo = () => {
    videoRef.current?.contentWindow?.postMessage(
      JSON.stringify({ method: playing ? 'pause' : 'play' }),
      'https://player.vimeo.com'
    )
    setPlaying(!playing)
  }

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ minHeight: '100dvh' }} aria-label="Hero">

      {/* Fallback kenburns bg */}
      <div aria-hidden className="absolute inset-0" style={{
        backgroundImage: `url('https://www.lawsonstate.edu/_resources/assets/img/grads%20lawson.jpeg')`,
        backgroundSize: 'cover', backgroundPosition: 'center 30%',
        animation: reduceMotion ? 'none' : 'kenburns 25s ease-in-out infinite alternate',
      }} />

      {/* Vimeo ambient — desktop only */}
      {!reduceMotion && (
        <div aria-hidden className="absolute inset-0 overflow-hidden hidden md:block" style={{ pointerEvents: 'none' }}>
          <iframe ref={videoRef}
            src="https://player.vimeo.com/video/1058690019?background=1&autoplay=1&loop=1&muted=1"
            className="absolute"
            style={{ top:'50%',left:'50%',width:'100vw',height:'56.25vw',minHeight:'100vh',minWidth:'177.78vh',transform:'translate(-50%,-50%)',border:0,pointerEvents:'none' }}
            allow="autoplay; fullscreen"
            loading="lazy"
            title="" />
        </div>
      )}

      {/* Scrim — deeper on left for text legibility */}
      <div aria-hidden className="absolute inset-0" style={{
        background: 'linear-gradient(108deg, oklch(0.08 0.05 261 / 0.96) 0%, oklch(0.10 0.05 261 / 0.82) 42%, oklch(0.10 0.05 261 / 0.44) 100%)',
      }} />

      {/* Gold glow orb */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        top: '-8%', right: '-4%', width: '800px', height: '800px', borderRadius: '50%',
        background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.18) 0%, transparent 68%)',
        filter: 'blur(80px)',
      }} />

      {/* Mouse-tracking cursor glow */}
      {!reduceMotion && <CursorGlow />}

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 w-full"
        style={{ paddingTop: 'calc(var(--lscc-banner-h, 0px) + 5rem)', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '700px' }}>

          {/* HBCU eyebrow badge */}
          <div className="flex items-center gap-3 mb-5 h-fade-1">
            <span
              className="inline-flex items-center font-display font-black"
              style={{
                fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '0.3rem 0.8rem', borderRadius: '999px',
                background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)',
              }}
            >
              PROUD HBCU
            </span>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.12em', color: 'oklch(1 0 0 / 0.55)', textTransform: 'uppercase' }}>
              Est. 1949 · Birmingham, AL
            </span>
          </div>

          <h1 className="font-display font-black mb-6 h-fade-2"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', letterSpacing: '-0.04em', lineHeight: 0.93, color: 'white' }}>
            Start Your Future<br />
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>at Lawson State</span>
          </h1>

          <p className="mb-8 h-fade-3"
            style={{ color: 'oklch(1 0 0 / 0.78)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, maxWidth: '52ch' }}>
            {c.subheadline}
          </p>

          {/* Search */}
          <div className="mb-4 h-fade-4" style={{ maxWidth: '540px' }}>
            <div style={{ borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 40px oklch(0 0 0 / 0.40)' }}>
              <SearchBar />
            </div>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10 h-fade-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.label} href={cat.href}
                className="press inline-flex items-center font-semibold transition-colors"
                style={{
                  fontSize: '0.78rem', letterSpacing: '0.02em',
                  padding: '0.38rem 0.9rem', borderRadius: '999px',
                  background: 'oklch(1 0 0 / 0.10)', color: 'oklch(1 0 0 / 0.90)',
                  border: '1px solid oklch(1 0 0 / 0.22)',
                  backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                }}>
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Animated stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10 pb-10 h-fade-5"
            style={{ borderBottom: '1px solid oklch(1 0 0 / 0.14)' }}>
            {STATS.map((s, i) => (
              <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label}
                active={statsActive && !reduceMotion} delay={i * 120} />
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 h-fade-5">
            <Link href={c.cta_primary_href}
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
              {c.cta_primary_label}
            </Link>
            <Link href={c.cta_secondary_href}
              className="press inline-flex items-center font-semibold px-8 py-3.5 rounded-xl text-white hover:bg-white/10 transition-colors"
              style={{ border: '2px solid oklch(1 0 0 / 0.35)', fontSize: '1rem' }}>
              {c.cta_secondary_label}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2" aria-hidden>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.38)' }}>
          Scroll
        </span>
        <div style={{
          width: '1.5px', height: '40px',
          background: 'linear-gradient(to bottom, oklch(1 0 0 / 0.50), transparent)',
          animation: 'scrollLine 1.8s ease-in-out infinite',
        }} />
      </div>

      {/* Video play/pause — desktop only */}
      {!reduceMotion && (
        <button onClick={toggleVideo}
          className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 press"
          style={{
            background: 'oklch(1 0 0 / 0.10)', border: '1px solid oklch(1 0 0 / 0.25)',
            backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '999px', padding: '0.5rem 1.1rem',
            color: 'oklch(1 0 0 / 0.85)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.10em', cursor: 'pointer',
          }}
          aria-label={playing ? 'Pause background video' : 'Play background video'}>
          {playing ? (
            <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>PAUSE VIDEO</>
          ) : (
            <><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden><polygon points="5 3 19 12 5 21 5 3"/></svg>PLAY VIDEO</>
          )}
        </button>
      )}

      <style>{`
        .h-fade-1{animation:hfade 0.7s ease-out 0.10s both;}
        .h-fade-2{animation:hfade 0.7s ease-out 0.25s both;}
        .h-fade-3{animation:hfade 0.7s ease-out 0.40s both;}
        .h-fade-4{animation:hfade 0.7s ease-out 0.55s both;}
        .h-fade-5{animation:hfade 0.7s ease-out 0.70s both;}
        @keyframes hfade{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scrollLine{0%{transform:scaleY(0);transform-origin:top;opacity:1}60%{transform:scaleY(1);transform-origin:top;opacity:1}100%{transform:scaleY(1);transform-origin:top;opacity:0}}
        @media(prefers-reduced-motion:reduce){.h-fade-1,.h-fade-2,.h-fade-3,.h-fade-4,.h-fade-5{animation:none}}
      `}</style>
    </section>
  )
}
