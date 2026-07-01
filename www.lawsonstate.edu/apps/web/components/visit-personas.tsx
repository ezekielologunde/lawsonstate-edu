'use client'

import { useState } from 'react'
import Link from 'next/link'

const PERSONAS = [
  {
    id: 'parents',
    label: 'Parents & Families',
    eyebrow: 'Supporting a student',
    headline: "WHAT YOU'LL WANT TO SEE",
    summary: "You're weighing cost, safety, and whether this is the right next step for your student. A visit is the fastest way to answer all three — walk the campus, meet an advisor, and ask about cost and financial aid face to face.",
    links: [
      { label: 'Cost & financial aid overview', href: '/financial-aid' },
      { label: 'Campus safety', href: '/campus-life/safety' },
      { label: 'Talk to an advisor', href: '/advising' },
      { label: 'Contact & campus hours', href: '/contact' },
    ],
    cta: 'Explore Financial Aid',
    ctaHref: '/financial-aid',
  },
  {
    id: 'adult',
    label: 'Adult Learners',
    eyebrow: 'Coming back to school',
    headline: 'FIT COLLEGE AROUND YOUR LIFE',
    summary: "Whether it's been a few years or a few decades, come see what's changed. Ask about evening and weekend options, credit for prior coursework, and how fast you can finish a workforce credential.",
    links: [
      { label: 'Weekend College', href: '/academics/weekend-college' },
      { label: 'Workforce & short-term credentials', href: '/workforce' },
      { label: 'Returning student advising', href: '/advising/returning' },
      { label: 'Schedule an advising appointment', href: '/advising/book' },
    ],
    cta: 'See Weekend College',
    ctaHref: '/academics/weekend-college',
  },
  {
    id: 'highschool',
    label: 'High Schoolers',
    eyebrow: 'Starting early or starting fresh',
    headline: 'GET A HEAD START',
    summary: "See the campus you'll actually attend — whether that's after graduation or right now through dual enrollment. Meet current students, tour a program lab, and find out how classes here count toward your diploma or degree.",
    links: [
      { label: 'Dual Enrollment', href: '/admissions/dual-enrollment' },
      { label: 'High school student admissions', href: '/admissions/high-school' },
      { label: 'New student orientation', href: '/orientation' },
      { label: 'Browse all programs', href: '/academics' },
    ],
    cta: 'Learn About Dual Enrollment',
    ctaHref: '/admissions/dual-enrollment',
  },
]

export default function VisitPersonas() {
  const [active, setActive] = useState(0)
  const persona = PERSONAS[active]

  return (
    <div>
      {/* Tab strip */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide" role="tablist" aria-label="Choose your visit type">
        {PERSONAS.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className="press shrink-0 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all"
            style={{
              fontSize: '0.85rem',
              background: active === i ? 'oklch(0.79 0.19 78)' : 'white',
              color: active === i ? 'oklch(0.11 0.03 261)' : 'oklch(0.40 0.04 261)',
              border: `1px solid ${active === i ? 'transparent' : 'oklch(0 0 0 / 0.10)'}`,
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div
        key={persona.id}
        className="tab-content grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-0 rounded-2xl overflow-hidden"
        style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}
      >
        <div className="p-8">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.74rem', letterSpacing: '0.2em' }}>{persona.eyebrow}</p>
          <h3 className="font-display font-black mb-4 leading-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>{persona.headline}</h3>
          <p className="text-sm leading-relaxed mb-6" style={{ maxWidth: '52ch', color: 'oklch(0.42 0.04 261)' }}>{persona.summary}</p>
          <Link
            href={persona.ctaHref}
            className="press btn-shimmer inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-sm"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
          >
            {persona.cta} →
          </Link>
        </div>
        <div className="p-8" style={{ background: 'oklch(0.97 0.015 255)', borderTop: '1px solid oklch(0 0 0 / 0.06)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'oklch(0.50 0.03 261)' }}>Helpful links</p>
          <ul className="flex flex-col gap-1">
            {persona.links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="link-reveal inline-flex items-center gap-2 py-1.5 text-sm font-medium transition-colors"
                  style={{ color: 'oklch(0.30 0.12 263)' }}
                >
                  <span aria-hidden style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.7rem' }}>→</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
