'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const PATHS = [
  {
    id: 'new',
    label: 'New Student',
    eyebrow: 'Just starting out?',
    accent: 'oklch(0.79 0.19 78)',
    accentText: 'oklch(0.11 0.03 261)',
    headline: 'START YOUR JOURNEY',
    summary: "Not sure where to start? We'll guide you from your first application to your first day on campus — no prior college experience needed.",
    steps: [
      { label: 'Apply for admission', href: '/admissions/apply' },
      { label: 'Explore financial aid', href: '/financial-aid' },
      { label: 'Browse all 200+ programs', href: '/academics' },
      { label: 'Schedule a campus visit', href: '/contact' },
      { label: 'Attend orientation', href: '/admissions/apply' },
    ],
    cta: 'Start My Application',
    ctaHref: '/admissions/apply',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden className="w-10 h-10">
        <path d="M24 6L6 16l18 10 18-10L24 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M6 16v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 19v10c0 4 5 8 12 8s12-4 12-8V19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'transfer',
    label: 'Transfer Student',
    eyebrow: 'Coming from another school?',
    accent: 'oklch(0.62 0.20 220)',
    accentText: 'white',
    headline: 'TRANSFER WITH CONFIDENCE',
    summary: 'Already have college credits? Most transfer directly. See exactly where you stand and build your degree plan from there.',
    steps: [
      { label: 'Transfer admissions info', href: '/admissions/transfer' },
      { label: 'Credit transfer guide', href: '/admissions/transfer' },
      { label: 'Transfer program options', href: '/programs?area=college-transfer' },
      { label: 'Meet with an advisor', href: '/campus-life' },
    ],
    cta: 'Check My Credits',
    ctaHref: '/admissions/transfer',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden className="w-10 h-10">
        <path d="M8 18h32M30 10l10 8-10 8M40 30H8M18 22l-10 8 10 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'current',
    label: 'Current Student',
    eyebrow: 'Already enrolled?',
    accent: 'oklch(0.60 0.18 152)',
    accentText: 'white',
    headline: 'EVERYTHING YOU NEED',
    summary: 'Everything you need to stay on track this semester — registration, financial aid status, tutoring support, and academic advising.',
    steps: [
      { label: 'Register for classes', href: 'https://my.lawsonstate.edu' },
      { label: 'Student portal login', href: 'https://my.lawsonstate.edu' },
      { label: 'Financial aid status', href: '/financial-aid' },
      { label: 'Pay your bill', href: 'https://my.lawsonstate.edu' },
      { label: 'Get tutoring support', href: '/support/academic' },
    ],
    cta: 'Go to Student Portal',
    ctaHref: 'https://my.lawsonstate.edu',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden className="w-10 h-10">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <path d="M15 24l7 7 11-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'adult',
    label: 'Career Changer',
    eyebrow: 'Ready for a change?',
    accent: 'oklch(0.65 0.22 35)',
    accentText: 'white',
    headline: 'ADVANCE YOUR CAREER',
    summary: 'Earn industry-recognized credentials in months, not years — on evenings and weekends, around your life.',
    steps: [
      { label: 'Workforce programs', href: '/workforce' },
      { label: 'Certificate courses', href: '/programs?type=CER' },
      { label: 'Continuing education', href: '/workforce' },
      { label: 'Schedule a consultation', href: '/contact' },
    ],
    cta: 'Explore Workforce Programs',
    ctaHref: '/workforce',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden className="w-10 h-10">
        <path d="M26 8l-12 16h10l-2 16 12-16H24l2-16z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function VisitorDecisionTree() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<string>('new')

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.06 }
    )
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  const active = PATHS.find((p) => p.id === selected) ?? PATHS[0]

  return (
    <section
      ref={sectionRef}
      style={{ background: 'oklch(0.92 0.05 255)', paddingBlock: '5rem' }}
      aria-label="Find Your Path"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', color: 'var(--lscc-eyebrow)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Your Starting Point
          </p>
          <h2
            className="font-display font-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
          >
            I AM A<span style={{ color: 'var(--lscc-eyebrow)' }}>...</span>
          </h2>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {PATHS.map((path, i) => {
            const isActive = selected === path.id
            return (
              <button
                key={path.id}
                onClick={() => setSelected(path.id)}
                aria-pressed={isActive}
                className={`text-left rounded-2xl press transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  padding: '1.6rem 1.4rem',
                  transitionDelay: `${i * 80}ms`,
                  background: isActive ? path.accent : 'white',
                  border: `2px solid ${isActive ? path.accent : 'oklch(0 0 0 / 0.08)'}`,
                  boxShadow: isActive ? `0 0 40px ${path.accent}44` : '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
                  color: isActive ? path.accentText : 'oklch(0.16 0.04 261)',
                }}
              >
                <div
                  className="mb-4"
                  style={{ color: isActive ? path.accentText : path.accent }}
                >
                  {path.icon}
                </div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.35rem', opacity: 0.7 }}>
                  {path.eyebrow}
                </p>
                <p className="font-display font-black leading-tight" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', letterSpacing: '-0.02em' }}>
                  {path.label}
                </p>
              </button>
            )
          })}
        </div>

        {/* Expanded panel */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'white',
            border: `2px solid ${active.accent}33`,
            boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-0"
            style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {/* Summary */}
            <div className="lg:pr-8">
              <h3
                className="font-display font-black mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em', color: active.accent }}
              >
                {active.headline}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'oklch(0.40 0.04 261)', maxWidth: '48ch', marginBottom: '1.5rem' }}>
                {active.summary}
              </p>
              <Link
                href={active.ctaHref}
                className="press btn-shimmer inline-flex items-center gap-2 font-bold px-7 py-3 rounded-xl"
                style={{ background: active.accent, color: active.accentText, fontSize: '0.95rem' }}
              >
                {active.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden lg:block" style={{ background: 'oklch(0 0 0 / 0.10)' }} />

            {/* Steps */}
            <div className="lg:pl-8 mt-8 lg:mt-0">
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.50 0.03 261)', marginBottom: '1rem' }}>
                Your next steps
              </p>
              <ul className="flex flex-col gap-1">
                {active.steps.map(({ label, href }, i) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-3 py-2 transition-colors"
                      style={{ color: 'oklch(0.40 0.04 261)' }}
                    >
                      <span
                        className="shrink-0 flex items-center justify-center font-bold"
                        style={{
                          width: '22px', height: '22px', borderRadius: '50%',
                          background: `${active.accent}22`, color: active.accent,
                          fontSize: '0.62rem',
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm group-hover:opacity-70 transition-opacity">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
