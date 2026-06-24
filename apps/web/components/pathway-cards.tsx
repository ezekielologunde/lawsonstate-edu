'use client'

import { useState } from 'react'
import Link from 'next/link'

const PATHS = [
  {
    id:       'new',
    label:    'New Student',
    headline: 'START YOUR JOURNEY',
    desc:     "Ready to begin at Lawson State? Here's everything from applying to showing up on day one.",
    links: [
      { label: 'Apply for admission',      href: '/admissions/apply' },
      { label: 'Explore financial aid',    href: '/financial-aid' },
      { label: 'Browse all 200+ programs', href: '/academics' },
      { label: 'Schedule a campus visit',  href: '/visit' },
      { label: 'Attend orientation',       href: '/orientation' },
    ],
    cta:     'Begin your application',
    ctaHref: '/admissions/apply',
    photo:   'https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg',
  },
  {
    id:       'transfer',
    label:    'Transfer Student',
    headline: 'TRANSFER WITH CONFIDENCE',
    desc:     'Coming from another school? We make credit transfer clear, fast, and straightforward.',
    links: [
      { label: 'Transfer admissions info',  href: '/admissions/transfer' },
      { label: 'Credit transfer guide',     href: '/transfer/credits' },
      { label: 'Transfer program options',  href: '/academics/transfer' },
    ],
    cta:     'Start your transfer',
    ctaHref: '/admissions/transfer',
    photo:   'https://live.staticflickr.com/65535/55258970853_28b8ea04e9_z.jpg',
  },
  {
    id:       'current',
    label:    'Current Student',
    headline: 'EVERYTHING YOU NEED',
    desc:     'Register for classes, check your aid, pay your bill, and get academic support — all in one place.',
    links: [
      { label: 'Register for classes',  href: '/registration' },
      { label: 'Student portal login',  href: '/student-portal' },
      { label: 'Financial aid status',  href: '/financial-aid' },
      { label: 'Pay your bill',         href: '/pay-bill' },
    ],
    cta:     'Go to student portal',
    ctaHref: '/student-portal',
    photo:   'https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg',
  },
  {
    id:       'workforce',
    label:    'Adult Learner',
    headline: 'ADVANCE YOUR CAREER',
    desc:     'Certificates, workforce training, and continuing ed programs built around your life and schedule.',
    links: [
      { label: 'Workforce programs',    href: '/workforce' },
      { label: 'Certificate courses',   href: '/academics/certificates' },
      { label: 'Continuing education',  href: '/continuing-ed' },
    ],
    cta:     'Explore workforce programs',
    ctaHref: '/workforce',
    photo:   'https://live.staticflickr.com/65535/55259233505_3af8bb2b74_z.jpg',
  },
]

export default function PathwayCards() {
  const [active, setActive] = useState(0)
  const path = PATHS[active]

  return (
    <section className="py-16 px-6" style={{ background: 'oklch(0.14 0.06 263)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-8 scroll-reveal">
          <h2
            className="font-display font-black text-white leading-none mb-1"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', letterSpacing: '-0.02em' }}
          >
            FIND YOUR PATH
          </h2>
          <p className="text-white/40 text-sm">Wherever you're starting from, we have a route for you.</p>
        </div>

        {/* Tab strip */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-0.5 -mx-1 px-1">
          {PATHS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className="press shrink-0 px-5 py-2.5 rounded-full font-bold whitespace-nowrap transition-all duration-200"
              style={{
                fontSize:   '0.8rem',
                background: active === i ? 'oklch(0.79 0.19 78)' : 'oklch(1 0 0 / 0.07)',
                color:      active === i ? 'oklch(0.11 0.03 261)' : 'oklch(1 0 0 / 0.50)',
                border:     `1px solid ${active === i ? 'transparent' : 'oklch(1 0 0 / 0.11)'}`,
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Content panel — key forces re-mount + CSS fade */}
        <div
          key={path.id}
          className="tab-content grid grid-cols-1 md:grid-cols-[3fr_2fr] rounded-2xl overflow-hidden"
          style={{
            background: 'oklch(0.19 0.08 263)',
            border:     '1px solid oklch(1 0 0 / 0.07)',
          }}
        >
          {/* Text + CTA */}
          <div className="p-8 flex flex-col justify-between gap-8">
            <div>
              <h3
                className="font-display font-black text-white leading-none mb-3"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}
              >
                {path.headline}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ maxWidth: '44ch' }}>
                {path.desc}
              </p>
              <ul className="flex flex-col gap-0.5">
                {path.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="link-reveal inline-flex items-center gap-2 py-1.5 text-sm font-medium text-white/65 hover:text-white transition-colors"
                    >
                      <span aria-hidden style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.7rem' }}>→</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={path.ctaHref}
              className="press btn-shimmer font-bold px-6 py-3 rounded-lg whitespace-nowrap self-start"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.875rem' }}
            >
              {path.cta} →
            </Link>
          </div>

          {/* Photo panel */}
          <div className="hidden md:block relative" style={{ minHeight: '280px' }}>
            <img
              src={path.photo}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, oklch(0.19 0.08 263 / 0.75) 0%, oklch(0.19 0.08 263 / 0.15) 60%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
