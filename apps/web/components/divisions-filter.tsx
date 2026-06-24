'use client'

import { useState } from 'react'
import Link from 'next/link'

export type Division = {
  id: string
  number: string
  name: string
  desc: string
  highlights: string[]
  href: string
  bg: string
  dark: boolean
}

type FilterId = 'all' | 'career-technical' | 'college-transfer' | 'health-professions' | 'business-it'

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all',               label: 'All Programs' },
  { id: 'career-technical',  label: 'Career Technical' },
  { id: 'college-transfer',  label: 'College Transfer' },
  { id: 'health-professions',label: 'Health Professions' },
  { id: 'business-it',       label: 'Business & IT' },
]

export default function DivisionsFilter({ divisions }: { divisions: Division[] }) {
  const [active, setActive] = useState<FilterId>('all')

  const visible = active === 'all' ? divisions : divisions.filter(d => d.id === active)

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter programs by division">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className="press px-4 py-2 rounded-full font-semibold"
            style={{
              fontSize: '0.82rem',
              background: active === f.id ? 'oklch(0.48 0.22 27)' : 'oklch(0.94 0.015 263)',
              color:      active === f.id ? 'white'                : 'oklch(0.32 0.12 263)',
              border:     `1px solid ${active === f.id ? 'transparent' : 'oklch(0 0 0 / 0.09)'}`,
              transition: 'background 0.15s ease, color 0.15s ease',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Division cards */}
      <div className="space-y-6">
        {visible.map(div => (
          <div
            key={div.id}
            className="card-lift rounded-2xl p-8 shadow-card"
            style={{ background: div.bg, border: div.dark ? 'none' : '1px solid oklch(0.92 0.01 263)' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div
                  className="font-display font-black mb-2"
                  style={{ fontSize: '0.96rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '0.1em' }}
                >
                  {div.number}
                </div>
                <h3
                  className="font-display font-black leading-none mb-3"
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                    letterSpacing: '-0.02em',
                    color: div.dark ? 'white' : 'oklch(0.11 0.03 261)',
                  }}
                >
                  {div.name}
                </h3>
                <p
                  className="mb-5 leading-relaxed"
                  style={{ fontSize: '1.08rem', color: div.dark ? 'oklch(1 0 0 / 0.75)' : 'oklch(0.48 0.06 261)', maxWidth: '56ch' }}
                >
                  {div.desc}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {div.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2.5 text-sm" style={{ color: div.dark ? 'oklch(1 0 0 / 0.70)' : 'oklch(0.35 0.1 261)' }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', marginTop: '0.18rem', flexShrink: 0 }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <Link
                  href={div.href}
                  className="press btn-shimmer hero-cta-red font-bold px-6 py-3 rounded-lg whitespace-nowrap block text-center"
                  style={{ background: 'oklch(0.48 0.22 27)', color: 'white', fontSize: '1rem' }}
                >
                  Explore programs →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
