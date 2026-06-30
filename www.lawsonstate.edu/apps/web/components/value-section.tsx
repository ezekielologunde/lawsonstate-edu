'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

type StatDef = {
  prefix?: string
  target: number
  suffix: string
  unit: string
  label: string
  sub: string
}

const STATS: StatDef[] = [
  {
    prefix: '$', target: 131, suffix: '',
    unit: '/credit hr',
    label: 'In-state tuition',
    sub: 'One of the most affordable colleges in Alabama',
  },
  {
    target: 80, suffix: '%',
    unit: 'of students',
    label: 'Receive financial aid',
    sub: 'Pell Grants, scholarships & more available',
  },
  {
    target: 2, suffix: ' yrs',
    unit: 'or less',
    label: 'To earn your degree',
    sub: 'Start working or transfer sooner',
  },
]

function CountUp({ prefix = '', target, suffix, active, delay = 0 }: {
  prefix?: string; target: number; suffix: string; active: boolean; delay?: number
}) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) { setVal(target); return }
    const t = setTimeout(() => {
      const dur = 1600
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
  return <>{prefix}{val}{suffix}</>
}

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true)
      setActive(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: 'oklch(0.92 0.05 255)', paddingBlock: '5rem' }}
      aria-label="Tuition and Value"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.8fr] gap-0">

          {/* Left — headline */}
          <div className="scroll-reveal lg:pr-12 mb-10 lg:mb-0 flex flex-col justify-center">
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'var(--lscc-eyebrow)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
              03 — Exceptional value
            </p>
            <h2
              className="font-display font-black leading-none mb-5"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
            >
              A DEGREE THAT<br />
              <span style={{ color: 'var(--lscc-eyebrow)' }}>WON&apos;T BREAK<br />THE BANK</span>
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.80, color: 'oklch(0.40 0.04 261)', maxWidth: '38ch', marginBottom: '2rem' }}>
              Lawson State combines rigorous academics, hands-on training, and real career outcomes — at a fraction of the cost of a four-year university.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admissions/apply"
                className="press btn-shimmer inline-flex items-center font-bold px-7 py-3 rounded-xl"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9rem' }}
              >
                Apply Now
              </Link>
              <Link
                href="/financial-aid"
                className="press inline-flex items-center font-semibold px-7 py-3 rounded-xl transition-colors hover:bg-black/5"
                style={{ border: '2px solid oklch(0.16 0.04 261 / 0.25)', color: 'oklch(0.16 0.04 261)', fontSize: '0.9rem' }}
              >
                Explore Financial Aid
              </Link>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block mx-0" style={{ background: 'oklch(0 0 0 / 0.10)' }} />

          {/* Right — animated stats */}
          <div className="lg:pl-12 flex flex-col justify-center gap-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="flex items-start gap-5 py-7"
                style={{ borderBottom: i < STATS.length - 1 ? '1px solid oklch(0 0 0 / 0.10)' : 'none' }}
              >
                <div className="shrink-0">
                  <div
                    className="font-display font-black leading-none"
                    style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', letterSpacing: '-0.05em', color: 'oklch(0.16 0.04 261)' }}
                  >
                    <CountUp prefix={s.prefix} target={s.target} suffix={s.suffix}
                      active={active && !reduced} delay={i * 160} />
                  </div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--lscc-eyebrow)', fontWeight: 700, marginTop: '2px' }}>
                    {s.unit}
                  </div>
                </div>
                <div className="pt-1">
                  <p className="font-display font-bold" style={{ fontSize: '1rem', letterSpacing: '-0.01em', marginBottom: '0.2rem', color: 'oklch(0.16 0.04 261)' }}>
                    {s.label}
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'oklch(0.45 0.03 261)', lineHeight: 1.5 }}>
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
