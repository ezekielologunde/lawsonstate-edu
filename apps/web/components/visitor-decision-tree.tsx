'use client'

import { useState } from 'react'
import Link from 'next/link'

const VISITOR_PATHS = [
  {
    id: 'new',
    label: 'New Student',
    description: "I'm a high school graduate or have no college experience",
    color: 'oklch(0.79 0.19 78)',
    icon: '🎓',
    headline: 'START YOUR JOURNEY',
    summary: "Not sure where to start? We'll guide you from your first application to your first day on campus — no prior college experience needed.",
    steps: [
      { label: 'Apply for admission', href: '/admissions/apply' },
      { label: 'Explore financial aid', href: '/financial-aid' },
      { label: 'Browse all 200+ programs', href: '/academics' },
      { label: 'Schedule a campus visit', href: '/visit' },
      { label: 'Attend orientation', href: '/orientation' },
    ],
    cta: 'Start My Application',
    ctaHref: '/admissions/apply',
  },
  {
    id: 'transfer',
    label: 'Transfer Student',
    description: 'I have college credits from another school',
    color: 'oklch(0.22 0.17 261)',
    icon: '→',
    headline: 'TRANSFER WITH CONFIDENCE',
    summary: 'Already have college credits? Most transfer directly. See exactly where you stand and build your degree plan from there.',
    steps: [
      { label: 'Transfer admissions info', href: '/admissions/transfer' },
      { label: 'Credit transfer guide', href: '/transfer/credits' },
      { label: 'Transfer program options', href: '/academics/transfer' },
      { label: 'Meet with an advisor', href: '/advising' },
    ],
    cta: 'Check My Credits',
    ctaHref: '/admissions/transfer',
  },
  {
    id: 'current',
    label: 'Current Student',
    description: 'I'm already enrolled at Lawson State',
    color: 'oklch(0.79 0.19 78)',
    icon: '✓',
    headline: 'EVERYTHING YOU NEED',
    summary: 'Everything you need to stay on track this semester — class registration, financial aid status, tutoring support, and academic advising.',
    steps: [
      { label: 'Register for classes', href: '/registration' },
      { label: 'Student portal login', href: '/student-portal' },
      { label: 'Financial aid status', href: '/financial-aid' },
      { label: 'Pay your bill', href: '/pay-bill' },
      { label: 'Get tutoring support', href: '/tutoring' },
    ],
    cta: 'Go to Student Portal',
    ctaHref: '/student-portal',
  },
  {
    id: 'adult',
    label: 'Career Changer / Adult Learner',
    description: 'I'm looking for career training or quick certification',
    color: 'oklch(0.22 0.17 261)',
    icon: '⚡',
    headline: 'ADVANCE YOUR CAREER',
    summary: 'Career change or a promotion? Earn industry-recognized credentials in months, not years — on evenings and weekends, around your life.',
    steps: [
      { label: 'Workforce programs', href: '/workforce' },
      { label: 'Certificate courses', href: '/academics/certificates' },
      { label: 'Continuing education', href: '/continuing-ed' },
      { label: 'Schedule a consultation', href: '/visit' },
    ],
    cta: 'Explore Workforce Programs',
    ctaHref: '/workforce',
  },
]

export default function VisitorDecisionTree() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-12 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 scroll-reveal">
          <h2
            className="font-display font-black leading-none mb-2"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
              letterSpacing: '-0.02em',
              color: 'oklch(0.18 0.12 261)',
            }}
          >
            FIND YOUR PATH
          </h2>
          <p className="text-lscc-muted text-sm">
            Select your situation below to see your next steps.
          </p>
        </div>

        {/* Decision cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {VISITOR_PATHS.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelected(selected === path.id ? null : path.id)}
              className="text-left p-6 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-md"
              style={{
                background: selected === path.id ? path.color : 'white',
                border: `2px solid ${path.color}`,
                color: selected === path.id ? 'white' : 'inherit',
              }}
              aria-expanded={selected === path.id}
              aria-controls={`panel-${path.id}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className="font-display font-bold mb-1"
                    style={{ fontSize: '1.1rem' }}
                  >
                    {path.label}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      opacity: selected === path.id ? 0.95 : 0.7,
                    }}
                  >
                    {path.description}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '1.5rem',
                    opacity: selected === path.id ? 1 : 0.5,
                    transition: 'transform 0.2s',
                    transform: selected === path.id ? 'rotate(180deg)' : 'rotate(0)',
                  }}
                >
                  ▼
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Expanded panel */}
        {selected && (
          <div
            id={`panel-${selected}`}
            className="rounded-2xl p-8 mb-8 scroll-reveal"
            style={{
              background: 'oklch(0.96 0.010 263)',
              border: '1px solid oklch(0 0 0 / 0.07)',
            }}
          >
            {VISITOR_PATHS.map((path) => {
              if (path.id !== selected) return null

              return (
                <div key={path.id}>
                  <h3
                    className="font-display font-black leading-none mb-3"
                    style={{
                      fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                      letterSpacing: '-0.02em',
                      color: path.color,
                    }}
                  >
                    {path.headline}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      maxWidth: '44ch',
                      color: 'oklch(0.45 0.08 263)',
                    }}
                  >
                    {path.summary}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-sm uppercase mb-3" style={{ color: 'oklch(0.30 0.12 263)' }}>
                      Your next steps
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {path.steps.map(({ label, href }) => (
                        <li key={label}>
                          <Link
                            href={href}
                            className="inline-flex items-center gap-2 py-2 text-sm font-medium transition-colors hover:text-lscc-gold"
                            style={{ color: 'oklch(0.30 0.12 263)' }}
                          >
                            <span
                              aria-hidden
                              style={{
                                color: path.color,
                                fontSize: '0.7rem',
                              }}
                            >
                              →
                            </span>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={path.ctaHref}
                    className="press btn-shimmer inline-block font-bold px-8 py-3 rounded-lg"
                    style={{
                      background: path.color,
                      color: 'white',
                      fontSize: '0.875rem',
                    }}
                  >
                    {path.cta} →
                  </Link>
                </div>
              )
            })}
          </div>
        )}

        {/* Help text */}
        <div
          className="text-center text-sm"
          style={{ color: 'oklch(0.45 0.08 263)' }}
        >
          <p>Not sure which category fits? Contact admissions at (205) XXX-XXXX</p>
        </div>
      </div>
    </section>
  )
}
