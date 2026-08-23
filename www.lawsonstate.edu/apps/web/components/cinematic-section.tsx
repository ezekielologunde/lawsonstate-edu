'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const BG = 'https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg'

export default function CinematicSection() {
  const bgRef   = useRef<HTMLDivElement>(null)
  const secRef  = useRef<HTMLElement>(null)
  const rafRef  = useRef<number | undefined>(undefined)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true)
      return
    }
    const tick = () => {
      if (bgRef.current && secRef.current) {
        const rect   = secRef.current.getBoundingClientRect()
        const offset = rect.top * 0.25
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.18)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [reduceMotion])

  return (
    <section
      ref={secRef}
      style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
      aria-label="Our Legacy"
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: 'absolute', inset: '-18%',
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover', backgroundPosition: 'center 35%',
          transform: 'scale(1.18)', willChange: 'transform',
        }}
      />

      {/* Cinematic layered scrim */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, oklch(0.07 0.05 263 / 0.92) 0%, oklch(0.12 0.08 263 / 0.78) 50%, oklch(0.07 0.05 263 / 0.95) 100%)' }} />

      {/* Gold accent bar — top */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent 0%, oklch(0.79 0.19 78) 35%, oklch(0.79 0.19 78) 65%, transparent 100%)',
      }} />

      {/* Floating orbs */}
      {!reduceMotion && (
        <>
          <div aria-hidden className="float-orb" style={{ position: 'absolute', top: '10%', right: '6%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.10) 0%, transparent 65%)', filter: 'blur(48px)', pointerEvents: 'none' }} />
          <div aria-hidden className="float-orb-reverse" style={{ position: 'absolute', bottom: '12%', left: '4%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.12) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        </>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '54rem', padding: 'clamp(3rem, 8vw, 5rem) 1.5rem', textAlign: 'center' }}>

        {/* Eyebrow badge */}
        <div className="wipe-reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <span aria-hidden style={{ width: '36px', height: '1.5px', background: 'oklch(0.79 0.19 78 / 0.55)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'oklch(0.79 0.19 78)' }}>
            Est. 1949 &middot; 75 Years Strong
          </span>
          <span aria-hidden style={{ width: '36px', height: '1.5px', background: 'oklch(0.79 0.19 78 / 0.55)', flexShrink: 0 }} />
        </div>

        {/* Ghost headline number — purely decorative */}
        <div
          className="font-display font-black wipe-reveal"
          aria-hidden
          style={{
            fontSize: 'clamp(5rem, 20vw, 16rem)', lineHeight: 0.82,
            letterSpacing: '-0.06em',
            color: 'transparent',
            WebkitTextStroke: '1.5px oklch(0.79 0.19 78 / 0.35)',
            marginBottom: '1.5rem',
            userSelect: 'none',
          }}
        >
          150K
        </div>

        <h2
          className="font-display font-black text-white wipe-reveal"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', lineHeight: 1.04, letterSpacing: '-0.04em', marginBottom: '1.5rem', textShadow: '0 2px 32px oklch(0.08 0.04 263 / 0.65)' }}
        >
          Graduates who changed{' '}
          <span style={{ color: 'oklch(0.79 0.19 78)' }}>Birmingham.</span>
        </h2>

        <p className="wipe-reveal" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.80, color: 'oklch(1 0 0 / 0.72)', maxWidth: '44ch', margin: '0 auto 2.5rem' }}>
          For 75 years, Lawson State has been the engine of opportunity for this city&mdash;sending graduates into nursing, business, trades, and far beyond.
        </p>

        {/* CTAs */}
        <div className="wipe-reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/about"
            className="press btn-shimmer inline-flex items-center font-bold px-8 py-4 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
          >
            Our Story
          </Link>
          <Link
            href="/admissions/apply"
            className="press cta-urgent inline-flex items-center font-semibold px-8 py-4 rounded-xl text-white"
            style={{ border: '1.5px solid oklch(1 0 0 / 0.32)', fontSize: '0.95rem' }}
          >
            Start Your Chapter
          </Link>
        </div>
      </div>
    </section>
  )
}
