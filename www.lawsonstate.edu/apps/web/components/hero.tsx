'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type PathId = 'new' | 'transfer' | 'adult' | 'current'

const PATHS = [
  {
    id: 'new' as PathId,
    label: 'New Student',
    line1: 'DISCOVER YOUR',
    line2: 'JOURNEY.',
    sub: "Not sure where to start? We'll guide you from your first application to your first day — no prior college experience needed.",
    cta: 'Apply Free — 15 min',
    ctaHref: '/admissions/apply',
    sec: 'Explore 200+ Programs',
    secHref: '/academics',
    external: false,
  },
  {
    id: 'transfer' as PathId,
    label: 'Transfer Student',
    line1: 'YOUR CREDITS',
    line2: 'COME WITH YOU.',
    sub: 'Most credits transfer directly. See exactly where you stand and build your degree plan from day one.',
    cta: 'Transfer Guide',
    ctaHref: '/admissions/transfer',
    sec: 'Check My Credits',
    secHref: '/admissions/transfer',
    external: false,
  },
  {
    id: 'adult' as PathId,
    label: 'Adult Learner',
    line1: 'WORK. LEARN.',
    line2: 'ADVANCE.',
    sub: 'Earn industry credentials in months, not years — evenings & weekends, built around your life and your career.',
    cta: 'Workforce Programs',
    ctaHref: '/workforce',
    sec: 'Evening & Weekend Classes',
    secHref: '/workforce',
    external: false,
  },
  {
    id: 'current' as PathId,
    label: 'Current Student',
    line1: 'WELCOME BACK,',
    line2: 'COUGAR.',
    sub: 'Everything you need this semester — registration, financial aid, tutoring support, and your class schedule.',
    cta: 'Go to MyLawson',
    ctaHref: 'https://my.lawsonstate.edu',
    sec: 'Register for Classes',
    secHref: 'https://my.lawsonstate.edu',
    external: true,
  },
]

const PHOTO = 'https://www.lawsonstate.edu/_resources/assets/img/Lawson%20State%20Pic%204.jpg'
const NAVY  = 'oklch(0.12 0.05 261)'
const GOLD  = 'oklch(0.79 0.19 78)'
const GT    = 'oklch(0.11 0.03 261)'

export default function Hero({ content = {} }: { content?: Record<string, string> }) {
  const [selected, setSelected] = useState<PathId>('new')
  const [ready, setReady]       = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    try {
      const s = localStorage.getItem('lscc-user-type') as PathId | null
      if (s && PATHS.find(p => p.id === s)) setSelected(s)
    } catch {}
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  const pick = (id: PathId) => {
    setSelected(id)
    try { localStorage.setItem('lscc-user-type', id) } catch {}
  }

  const onMove = (e: React.MouseEvent) => {
    const el = heroRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r  = el.getBoundingClientRect()
    const dx = (e.clientX - r.left - r.width  / 2) / r.width
    const dy = (e.clientY - r.top  - r.height / 2) / r.height
    el.querySelectorAll<HTMLElement>('[data-par]').forEach(b => {
      const p = parseFloat(b.dataset.par ?? '1')
      b.style.transform = `translate(${dx * p * 28}px, ${dy * p * 20}px)`
    })
  }

  const active = PATHS.find(p => p.id === selected)!

  const fade = (delay = 0): React.CSSProperties => ({
    opacity:    ready ? 1 : 0,
    transform:  ready ? 'none' : 'translateY(18px)',
    transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s`,
  })

  return (
    <section
      ref={heroRef}
      onMouseMove={onMove}
      aria-label="Welcome to Lawson State Community College"
      style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', background: NAVY }}
    >
      {/* ── Background: campus photo + Ken Burns cam-pan ── */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${PHOTO})`,
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
          animation: 'lscc-cam-pan 24s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* ── Overlays — lighter to let the campus photo breathe ── */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${NAVY}55 0%, ${NAVY}18 40%, ${NAVY}88 80%, ${NAVY} 100%)` }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, oklch(0.16 0.06 261 / 0.46) 0%, transparent 52%)' }} />

      {/* ── Animated orbs (video-like ambient light) ── */}
      <div data-par="0.9" aria-hidden style={{ position: 'absolute', top: '12%', right: '8%', width: 'min(500px, 44vw)', height: 'min(500px, 44vw)', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.20) 0%, transparent 70%)', filter: 'blur(52px)', animation: 'lscc-orb-a 16s ease-in-out infinite', transition: 'transform .35s ease-out', willChange: 'transform', pointerEvents: 'none' }} />
      <div data-par="1.5" aria-hidden style={{ position: 'absolute', top: '38%', left: '-8%', width: 'min(380px, 34vw)', height: 'min(380px, 34vw)', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.14) 0%, transparent 70%)', filter: 'blur(44px)', animation: 'lscc-orb-b 20s ease-in-out infinite', transition: 'transform .35s ease-out', willChange: 'transform', pointerEvents: 'none' }} />
      <div data-par="0.5" aria-hidden style={{ position: 'absolute', bottom: '22%', right: '22%', width: 'min(260px, 24vw)', height: 'min(260px, 24vw)', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.10) 0%, transparent 70%)', filter: 'blur(36px)', animation: 'lscc-orb-a 12s ease-in-out infinite reverse', transition: 'transform .35s ease-out', willChange: 'transform', pointerEvents: 'none' }} />

      {/* ── Main content ── */}
      <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(4rem,10vw,8rem) clamp(1rem,4.5vw,3rem) clamp(2rem,5vw,4rem)', maxWidth: '1360px', width: '100%', margin: '0 auto' }}>

        {/* Badge */}
        <div style={{ ...fade(0), display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'oklch(0.79 0.19 78 / 0.14)', border: `1px solid oklch(0.79 0.19 78 / 0.35)`, color: GOLD, padding: '6px 14px', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
          <span aria-hidden style={{ width: '6px', height: '6px', borderRadius: '50%', background: GOLD, flexShrink: 0, animation: 'lscc-pulse 2s infinite' }} />
          {content.badge ?? 'Fall 2026 Registration Now Open'}
        </div>

        {/* Headline — re-animates on path change */}
        <h1
          key={selected}
          className="font-display font-black"
          style={{ fontSize: 'clamp(2.8rem, 8.5vw, 7.5rem)', lineHeight: 0.87, letterSpacing: '-0.04em', color: 'white', margin: '0 0 1.4rem', animation: 'lscc-slide-up .50s cubic-bezier(.23,1,.32,1) both' }}
        >
          <span style={{ display: 'block' }}>{active.line1}</span>
          <span style={{ display: 'block', color: GOLD }}>{active.line2}</span>
        </h1>

        {/* Sub */}
        <p
          key={`s-${selected}`}
          style={{ fontSize: 'clamp(1rem, 1.7vw, 1.2rem)', lineHeight: 1.72, color: 'oklch(1 0 0 / 0.72)', maxWidth: '52ch', margin: '0 0 2.2rem', animation: 'lscc-slide-up .50s cubic-bezier(.23,1,.32,1) .08s both' }}
        >
          {active.sub}
        </p>

        {/* CTAs */}
        <div key={`c-${selected}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.8rem', animation: 'lscc-slide-up .50s cubic-bezier(.23,1,.32,1) .15s both' }}>
          {active.external ? (
            <a href={active.ctaHref} target="_blank" rel="noreferrer" className="press btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GOLD, color: GT, fontWeight: 700, fontSize: '0.93rem', padding: '.85rem 1.75rem', borderRadius: '12px', textDecoration: 'none' }}>
              {active.cta}
              <ArrowIcon />
            </a>
          ) : (
            <Link href={active.ctaHref} className="press btn-shimmer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GOLD, color: GT, fontWeight: 700, fontSize: '0.93rem', padding: '.85rem 1.75rem', borderRadius: '12px' }}>
              {active.cta}
              <ArrowIcon />
            </Link>
          )}
          {active.external ? (
            <a href={active.secHref} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'oklch(1 0 0 / 0.88)', fontWeight: 600, fontSize: '0.93rem', padding: '.85rem 1.5rem', borderRadius: '12px', border: '1.5px solid oklch(1 0 0 / 0.22)', textDecoration: 'none' }}>
              {active.sec}
            </a>
          ) : (
            <Link href={active.secHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'oklch(1 0 0 / 0.88)', fontWeight: 600, fontSize: '0.93rem', padding: '.85rem 1.5rem', borderRadius: '12px', border: '1.5px solid oklch(1 0 0 / 0.22)' }}>
              {active.sec}
            </Link>
          )}
        </div>

        {/* User type selector */}
        <div role="group" aria-label="I am a..." style={{ ...fade(0.45), display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.38)', marginRight: '4px' }}>I am a</span>
          {PATHS.map(path => {
            const on = selected === path.id
            return (
              <button
                key={path.id}
                onClick={() => pick(path.id)}
                aria-pressed={on}
                className="press"
                style={{
                  padding: '7px 16px', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700,
                  cursor: 'pointer', border: 'none',
                  background:  on ? GOLD : 'oklch(1 0 0 / 0.09)',
                  color:       on ? GT   : 'oklch(1 0 0 / 0.72)',
                  boxShadow:   on ? `0 0 0 2px ${GOLD}, 0 0 20px oklch(0.79 0.19 78 / 0.30)` : 'none',
                  transition:  'all .22s ease',
                }}
              >
                {path.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden style={{ position: 'absolute', bottom: '1.8rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', animation: 'lscc-scroll-bounce 2.4s ease-in-out infinite', pointerEvents: 'none' }}>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.35)', fontWeight: 700 }}>Scroll</span>
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" stroke="oklch(1 0 0 / 0.30)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="1 1 8 8 15 1" />
        </svg>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
