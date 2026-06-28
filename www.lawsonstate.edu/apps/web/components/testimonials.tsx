'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const DURATION = 6000

const TABS = [
  {
    id: 'achieve',
    label: 'Achieve',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/nursing.jpg',
    program: 'Health Sciences',
    quote: 'Lawson State gave me every resource I needed to become a licensed nurse. The instructors pushed me because they knew I could handle it — and I graduated with a job already lined up.',
    name: 'Destiny T.',
    detail: 'Practical Nursing · Class of 2024',
    href: '/programs?area=health-professions',
    cta: 'Explore Health Programs',
  },
  {
    id: 'belong',
    label: 'Belong',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/college_students3.jpg',
    program: 'Student Life',
    quote: "I was the first person in my family to go to college. Walking onto campus for the first time felt like I'd finally found the right room. Everyone here is rooting for each other.",
    name: 'Marcus W.',
    detail: 'Business Administration · Class of 2025',
    href: '/student-life',
    cta: 'Discover Student Life',
  },
  {
    id: 'transform',
    label: 'Transform',
    photo: 'https://www.lawsonstate.edu/_resources/assets/img/Rich%20Raymond%20Mechatronics.jpg',
    program: 'Career & Technical',
    quote: "I came in not knowing how to read a wiring diagram. Twelve months later I'm troubleshooting industrial automation systems on the plant floor. The hands-on training is the real deal.",
    name: 'Rich R.',
    detail: 'Mechatronics Technology · Class of 2023',
    href: '/programs?area=career-technical',
    cta: 'Explore CTE Programs',
  },
]

export default function Testimonials() {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const tab = TABS[activeIdx]

  const goTo = (idx: number) => {
    setActiveIdx(idx)
    setProgressKey((k) => k + 1)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % TABS.length)
      setProgressKey((k) => k + 1)
    }, DURATION)
  }

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        goTo((idx - 1 + TABS.length) % TABS.length)
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        goTo((idx + 1) % TABS.length)
        break
      case 'Home':
        e.preventDefault()
        goTo(0)
        break
      case 'End':
        e.preventDefault()
        goTo(TABS.length - 1)
        break
    }
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % TABS.length)
      setProgressKey((k) => k + 1)
    }, DURATION)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <section
      style={{ background: 'oklch(0.18 0.14 261)', paddingBlock: '5rem' }}
      aria-label="Student Testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'oklch(0.79 0.19 78)', textTransform: 'uppercase', marginBottom: '0.4rem', fontWeight: 700 }}>
              02 — Real Student Stories
            </p>
            <h2 className="font-display font-black text-white leading-none wipe-reveal" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', letterSpacing: '-0.04em' }}>
              STUDENTS WHO <span style={{ color: 'oklch(0.79 0.19 78)' }}>DID IT</span>
            </h2>
          </div>

          {/* Tab pills with progress bars */}
          <div className="flex gap-3" role="tablist" aria-label="Student story categories">
            {TABS.map((t, i) => {
              const isActive = activeIdx === i
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goTo(i)}
                  onKeyDown={(e) => handleTabKeyDown(e, i)}
                  className="relative flex flex-col items-center gap-1 press"
                  style={{ minWidth: '5rem' }}
                >
                  <span
                    className="font-bold transition-colors"
                    style={{
                      fontSize: '0.85rem',
                      color: isActive ? 'oklch(0.79 0.19 78)' : 'var(--lscc-muted-on-dark)',
                    }}
                  >
                    {t.label}
                  </span>
                  {/* Progress track */}
                  <div style={{ width: '100%', height: '2px', borderRadius: '2px', background: 'oklch(1 0 0 / 0.12)', overflow: 'hidden' }}>
                    {isActive && (
                      <div
                        key={`prog-${progressKey}-${i}`}
                        style={{
                          height: '100%',
                          background: 'oklch(0.79 0.19 78)',
                          animation: `tprog ${DURATION}ms linear forwards`,
                        }}
                      />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main content card */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] overflow-hidden"
          style={{ borderRadius: '24px', minHeight: '460px' }}
        >
          {/* Photo — crossfades on tab change */}
          <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
            <img
              key={tab.id}
              src={tab.photo}
              alt={`${tab.name} — ${tab.program}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ animation: 'tfade 0.55s ease' }}
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, oklch(0.12 0.08 261 / 0.55) 0%, transparent 55%)' }}
            />
            {/* Program badge */}
            <div
              className="absolute bottom-5 left-5"
              style={{
                background: 'oklch(0.79 0.19 78)',
                color: 'oklch(0.11 0.03 261)',
                fontSize: '0.70rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.28rem 0.7rem',
                borderRadius: '999px',
              }}
            >
              {tab.program}
            </div>
          </div>

          {/* Quote content */}
          <div
            className="flex flex-col justify-center"
            style={{ background: 'oklch(0.24 0.18 261)', padding: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            {/* Big decorative quote mark */}
            <svg
              width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden
              style={{ marginBottom: '1rem', color: 'oklch(0.79 0.19 78)', opacity: 0.6 }}
            >
              <path d="M0 36V20C0 8.954 8.954 0 20 0h4v8h-4c-6.627 0-12 5.373-12 12v1h12V36H0zm28 0V20C28 8.954 36.954 0 48 0h0v8h-4c-6.627 0-12 5.373-12 12v1h12V36H28z" fill="currentColor" />
            </svg>

            <blockquote
              key={tab.id}
              className="font-display font-bold text-white"
              style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                lineHeight: 1.50,
                letterSpacing: '-0.02em',
                marginBottom: '2rem',
                animation: 'tfade 0.55s ease',
              }}
            >
              {tab.quote}
            </blockquote>

            {/* Gold separator */}
            <div style={{ width: '44px', height: '3px', background: 'oklch(0.79 0.19 78)', borderRadius: '2px', marginBottom: '1.2rem' }} />

            <p className="font-semibold text-white" style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>
              {tab.name}
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--lscc-muted-on-dark)', letterSpacing: '0.04em', marginBottom: '1.8rem' }}>
              {tab.detail}
            </p>

            <Link
              href={tab.href}
              className="press inline-flex items-center gap-2 font-bold self-start"
              style={{ fontSize: '0.85rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '0.02em' }}
            >
              {tab.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes tfade {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tprog {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tfade { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
