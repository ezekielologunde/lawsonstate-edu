'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const TRADES = [
  { label: 'Automotive Technology',  sub: 'Engines, diagnostics & repair',    icon: 'auto',  bg: 'oklch(0.28 0.16 26)',  accent: 'oklch(0.60 0.24 28)'  },
  { label: 'Welding Technology',      sub: 'Metal fab & structural welding',   icon: 'weld',  bg: 'oklch(0.32 0.15 55)',  accent: 'oklch(0.68 0.22 58)'  },
  { label: 'Electrical Technology',   sub: 'Power systems & wiring',           icon: 'elec',  bg: 'oklch(0.26 0.18 248)', accent: 'oklch(0.58 0.24 248)' },
  { label: 'HVAC',                    sub: 'Heating, cooling & air quality',   icon: 'hvac',  bg: 'oklch(0.28 0.15 78)',  accent: 'oklch(0.60 0.22 78)'  },
  { label: 'Industrial Maintenance',  sub: 'Machinery & systems upkeep',       icon: 'indus', bg: 'oklch(0.26 0.16 261)', accent: 'oklch(0.56 0.22 261)' },
  { label: 'Construction Technology', sub: 'Building trades & project mgmt',   icon: 'const', bg: 'oklch(0.30 0.16 78)',  accent: 'oklch(0.62 0.22 78)'  },
]

function TradeIcon({ name }: { name: string }) {
  const props = {
    width: 28, height: 28, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.5, strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'auto': return (
      <svg {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
    case 'weld': return (
      <svg {...props}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    )
    case 'elec': return (
      <svg {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
    case 'hvac': return (
      <svg {...props}>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="2" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="22"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="2" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="22" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    )
    case 'indus': return (
      <svg {...props}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    )
    case 'const': return (
      <svg {...props}>
        <path d="M3 22L12 3L21 22H3z"/>
        <line x1="12" y1="3" x2="12" y2="22"/>
        <line x1="7.5" y1="15" x2="16.5" y2="15"/>
      </svg>
    )
    default: return null
  }
}

export default function MakersFixers() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollPct, setScrollPct] = useState(0)
  const [glowPos, setGlowPos]     = useState({ x: 50, y: 50 })

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const vh   = window.innerHeight
      const pct  = Math.max(0, Math.min(1, 1 - (rect.top + rect.height) / (vh + rect.height)))
      setScrollPct(pct)
    }

    const onMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      if (e.clientY < rect.top || e.clientY > rect.bottom) return
      setGlowPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top)  / rect.height) * 100,
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouse, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  const parallaxY = -scrollPct * 40

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'oklch(0.12 0.06 261)', paddingBlock: '1.5rem 1rem' }}
    >
      {/* Mouse-follow glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 600px 400px at ${glowPos.x}% ${glowPos.y}%, oklch(0.79 0.19 78 / 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline with parallax */}
        <div
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
          className="mb-5"
        >
          <h2
            className="font-display font-black text-white leading-none"
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.04em',
              maxWidth: '14ch',
            }}
          >
            WHAT WILL
            <br />
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>YOU BUILD?</span>
          </h2>
        </div>

        {/* Vimeo video — CTE showcase */}
        <div
          className="relative overflow-hidden mb-6"
          style={{ borderRadius: '16px', aspectRatio: '16 / 9' }}
        >
          <iframe
            src="https://player.vimeo.com/video/1058690019?h=ff50502b3b&color=c9a227&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lawson State Career Technical Education"
          />
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-10 items-start mb-6">
          {/* Body copy — no scroll-reveal, no parallax transform */}
          <div style={{ opacity: 1 }}>
            <p
              style={{
                fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                lineHeight: 1.7,
                color: 'oklch(1 0 0 / 0.72)',
                maxWidth: '52ch',
                marginBottom: '1rem',
              }}
            >
              At Lawson State, we train the makers and fixers that keep our world running. Whether it&apos;s wiring a building, welding a frame, tuning an engine, or keeping the air on — you&apos;ll learn it here, with real tools, real equipment, and instructors who&apos;ve done the work.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
                lineHeight: 1.7,
                color: 'oklch(1 0 0 / 0.55)',
                maxWidth: '50ch',
                marginBottom: '1.5rem',
              }}
            >
              Our Career Technical Education programs are built around industry partnerships — including Snap-on Tools — so you graduate with the credentials employers are already looking for.
            </p>
            <Link
              href="/academics"
              className="press btn-shimmer inline-flex items-center font-bold gap-2 rounded-xl px-6 py-3"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Explore CTE Programs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          {/* Snap-on partner callout — solid border, no shadow, no glassmorphism */}
          <div
            style={{
              background: 'oklch(0.20 0.10 261)',
              border: '1.5px solid oklch(0.35 0.15 261)',
              borderRadius: '14px',
              padding: '1.1rem',
            }}
          >
            <p
              className="font-display font-bold mb-3"
              style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'oklch(0.79 0.19 78)', textTransform: 'uppercase' }}
            >
              Industry Partner
            </p>
            <p
              className="font-display font-black text-white mb-2"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Snap-on Tools
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'oklch(1 0 0 / 0.60)' }}>
              Our Automotive Technology students train with professional-grade Snap-on equipment — the same tools used in dealerships across the country. Graduate ready to work on day one.
            </p>
            <div
              className="mt-5 pt-5 flex items-center gap-3"
              style={{ borderTop: '1.5px solid oklch(0.35 0.15 261)' }}
            >
              <div
                className="flex items-center justify-center text-white font-bold"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'oklch(0.44 0.22 24)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.02em',
                  flexShrink: 0,
                }}
              >
                S
              </div>
              <div>
                <p className="font-semibold text-white" style={{ fontSize: '0.85rem' }}>Snap-on Tools</p>
                <p style={{ fontSize: '0.72rem', color: 'oklch(1 0 0 / 0.45)' }}>Official Equipment Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trade grid */}
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRADES.map((trade, i) => (
            <TradeCard key={trade.label} trade={trade} index={i} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 mt-5">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.1)' }}
        >
          {[
            { n: '30+',  label: 'CTE Certificates' },
            { n: '100%', label: 'Hands-On Training' },
            { n: '92%',  label: 'Job Placement Rate' },
            { n: '1st',  label: 'Class Priority Placement' },
          ].map((s) => (
            <div key={s.n}>
              <div
                className="font-display font-black"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.04em', color: 'oklch(0.79 0.19 78)' }}
              >
                {s.n}
              </div>
              <div
                className="uppercase font-semibold"
                style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'oklch(1 0 0 / 0.55)', marginTop: '2px' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TradeCard({
  trade,
  index,
}: {
  trade: (typeof TRADES)[0]
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const delay = index * 0.06

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="press relative overflow-hidden cursor-pointer"
      style={{
        width: '100%',
        height: 'clamp(165px, 21vw, 200px)',
        borderRadius: '14px',
        background: trade.bg,
        transform: `translateY(${hovered ? -8 : 0}px) scale(${hovered ? 1.02 : 1})`,
        transition: `transform 350ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}s, box-shadow 350ms ease`,
        boxShadow: hovered
          ? `0 20px 60px oklch(0 0 0 / 0.5), 0 0 0 1.5px ${trade.accent}`
          : '0 4px 20px oklch(0 0 0 / 0.3)',
      }}
    >
      {/* Radial accent gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 120%, ${trade.accent} 0%, transparent 65%)`,
          opacity: hovered ? 0.7 : 0.35,
          transition: 'opacity 350ms ease',
        }}
      />

      {/* Icon — top-center */}
      <div
        className="absolute"
        style={{
          top: '1rem',
          left: '50%',
          transform: hovered ? 'translateX(-50%) scale(1.15)' : 'translateX(-50%)',
          color: trade.accent,
          opacity: hovered ? 1 : 0.75,
          transition: 'opacity 300ms ease, transform 350ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <TradeIcon name={trade.icon} />
      </div>

      {/* Label — bottom-aligned */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p
          className="font-display font-black text-white leading-tight"
          style={{
            fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)',
            letterSpacing: '-0.02em',
          }}
        >
          {trade.label}
        </p>
        <p
          style={{
            fontSize: '0.68rem',
            color: 'oklch(1 0 0 / 0.55)',
            marginTop: '3px',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(5px)',
            transition: 'opacity 250ms ease, transform 250ms ease',
          }}
        >
          {trade.sub}
        </p>
      </div>
    </div>
  )
}
