'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const TRADES = [
  { label: 'Automotive\nTechnology', glyph: '🔧', color: 'oklch(0.30 0.12 261)', accent: 'oklch(0.55 0.14 261)' },
  { label: 'Welding\nTechnology',    glyph: '⚡', color: 'oklch(0.22 0.10 50)',  accent: 'oklch(0.60 0.18 50)'  },
  { label: 'Electrical\nTechnology', glyph: '💡', color: 'oklch(0.20 0.10 100)', accent: 'oklch(0.65 0.18 85)'  },
  { label: 'HVAC',                   glyph: '❄️', color: 'oklch(0.22 0.12 220)', accent: 'oklch(0.55 0.16 225)' },
  { label: 'Industrial\nMaintenance', glyph: '⚙️', color: 'oklch(0.18 0.08 270)', accent: 'oklch(0.50 0.15 270)' },
  { label: 'Construction\nTechnology', glyph: '🏗️', color: 'oklch(0.26 0.10 45)', accent: 'oklch(0.55 0.16 55)' },
]

export default function MakersFixers() {
  const sectionRef = useRef<HTMLElement>(null)
  const stripRef   = useRef<HTMLDivElement>(null)
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
      style={{ background: 'oklch(0.10 0.04 261)', paddingBlock: '7rem 5rem' }}
    >
      {/* Mouse-follow glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 700px 500px at ${glowPos.x}% ${glowPos.y}%, oklch(0.79 0.19 78 / 0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Parallax texture lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, oklch(1 0 0) 0px, oklch(1 0 0) 1px, transparent 1px, transparent 72px)',
          transform: `translateY(${parallaxY * 0.5}px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Kicker */}
        <p
          className="font-display font-black uppercase mb-6"
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.22em',
            color: 'oklch(0.79 0.19 78)',
            transform: `translateY(${parallaxY * 0.3}px)`,
          }}
        >
          Career & Technical Education · Est. 1949
        </p>

        {/* Headline with parallax */}
        <div
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
          className="mb-8"
        >
          <h2
            className="font-display font-black text-white leading-none"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
              maxWidth: '14ch',
            }}
          >
            WHAT WILL
            <br />
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>YOU BUILD?</span>
          </h2>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-start mb-16">
          {/* Body copy */}
          <div
            className="scroll-reveal"
            style={{ transform: `translateY(${parallaxY * 0.2}px)` }}
          >
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                lineHeight: 1.75,
                color: 'oklch(1 0 0 / 0.72)',
                maxWidth: '52ch',
                marginBottom: '1.5rem',
              }}
            >
              At Lawson State, we train the makers and fixers that keep our world running. Whether it's wiring a building, welding a frame, tuning an engine, or keeping the air on — you'll learn it here, with real tools, real equipment, and instructors who've done the work.
            </p>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
                lineHeight: 1.75,
                color: 'oklch(1 0 0 / 0.55)',
                maxWidth: '50ch',
                marginBottom: '2.5rem',
              }}
            >
              Our Career Technical Education programs are built around industry partnerships — including Snap-on Tools — so you graduate with the credentials employers are already looking for.
            </p>
            <Link
              href="/academics"
              className="press btn-shimmer inline-flex items-center font-bold gap-2 rounded-xl px-8 py-4"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Explore CTE Programs →
            </Link>
          </div>

          {/* Snap-on partner callout */}
          <div
            className="scroll-reveal rounded-2xl p-6"
            style={{
              background: 'oklch(1 0 0 / 0.04)',
              border: '1px solid oklch(1 0 0 / 0.10)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              className="font-display font-bold uppercase mb-3"
              style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'oklch(0.79 0.19 78)' }}
            >
              Industry Partner
            </p>
            <p
              className="font-display font-black text-white mb-3"
              style={{ fontSize: '1.6rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Snap-on Tools
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'oklch(1 0 0 / 0.60)' }}>
              Our Automotive Technology students train with professional-grade Snap-on equipment — the same tools used in dealerships across the country. Graduate ready to work on day one.
            </p>
            <div
              className="mt-5 pt-5 flex items-center gap-3"
              style={{ borderTop: '1px solid oklch(1 0 0 / 0.10)' }}
            >
              <div
                className="rounded-lg flex items-center justify-center text-white font-bold"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'oklch(0.55 0.14 24)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.02em',
                }}
              >
                S-on
              </div>
              <div>
                <p className="font-semibold text-white" style={{ fontSize: '0.85rem' }}>Snap-on Tools</p>
                <p style={{ fontSize: '0.72rem', color: 'oklch(1 0 0 / 0.45)' }}>Official Equipment Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal trade strip — scroll-snap */}
      <div ref={stripRef} className="relative">
        <div
          className="flex gap-4 overflow-x-auto px-6 pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            maxWidth: '100vw',
          }}
        >
          {TRADES.map((trade, i) => (
            <TradeCard key={trade.label} trade={trade} index={i} scrollPct={scrollPct} />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.1)' }}
        >
          {[
            { n: '30+', label: 'CTE Certificates' },
            { n: '100%', label: 'Hands-On Training' },
            { n: '92%', label: 'Job Placement Rate' },
            { n: '1st', label: 'Class Priority Placement' },
          ].map((s) => (
            <div key={s.n}>
              <div
                className="font-display font-black text-white"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.04em' }}
              >
                {s.n}
              </div>
              <div
                className="uppercase font-semibold"
                style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'oklch(1 0 0 / 0.50)', marginTop: '2px' }}
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
  scrollPct,
}: {
  trade: (typeof TRADES)[0]
  index: number
  scrollPct: number
}) {
  const [hovered, setHovered] = useState(false)
  const delay = index * 0.06

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="press relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
      style={{
        scrollSnapAlign: 'start',
        width: 'clamp(200px, 28vw, 240px)',
        height: 'clamp(260px, 35vw, 320px)',
        background: trade.color,
        border: `1px solid oklch(1 0 0 / 0.08)`,
        transform: `translateY(${hovered ? -8 : 0}px) scale(${hovered ? 1.02 : 1})`,
        transition: `transform 350ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}s, box-shadow 350ms ease`,
        boxShadow: hovered
          ? `0 20px 60px oklch(0 0 0 / 0.5), 0 0 0 1px ${trade.accent}`
          : '0 4px 20px oklch(0 0 0 / 0.3)',
      }}
    >
      {/* Radial accent */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 120%, ${trade.accent} 0%, transparent 65%)`,
          opacity: hovered ? 0.7 : 0.35,
          transition: 'opacity 350ms ease',
        }}
      />

      {/* Glyph */}
      <div
        className="absolute"
        style={{
          top: '1.5rem',
          right: '1.5rem',
          fontSize: '2.5rem',
          opacity: hovered ? 0.9 : 0.55,
          transition: 'opacity 300ms ease, transform 350ms cubic-bezier(0.23, 1, 0.32, 1)',
          transform: hovered ? 'scale(1.2) rotate(-5deg)' : 'none',
          filter: 'grayscale(0.2)',
        }}
        aria-hidden
      >
        {trade.glyph}
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="font-display font-black text-white leading-tight"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            letterSpacing: '-0.01em',
            whiteSpace: 'pre-line',
          }}
        >
          {trade.label}
        </p>
        <p
          style={{
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            color: 'oklch(1 0 0 / 0.50)',
            marginTop: '4px',
            textTransform: 'uppercase',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 250ms ease, transform 250ms ease',
          }}
        >
          View Program →
        </p>
      </div>
    </div>
  )
}
