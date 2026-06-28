'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { SAMPLE_PROGRAMS, CATEGORIES, DEGREE_TYPES, type ProgramCategory, type DegreeType } from '@/lib/programs-data'

const CAT_TABS: { id: ProgramCategory | 'all'; label: string }[] = [
  { id: 'all',              label: 'All Programs' },
  { id: 'health-professions', label: 'Health Sciences' },
  { id: 'business-it',      label: 'Business & IT' },
  { id: 'career-technical', label: 'Career Technical' },
  { id: 'college-transfer', label: 'Transfer' },
  { id: 'other',            label: 'Other' },
]

const DEGREE_TABS: { id: DegreeType | 'all'; label: string }[] = [
  { id: 'all', label: 'Any Credential' },
  { id: 'AA',  label: 'Associate (AA)' },
  { id: 'AS',  label: 'Associate (AS)' },
  { id: 'AAS', label: 'AAS Degree' },
  { id: 'AOT', label: 'AOT Degree' },
  { id: 'CER', label: 'Certificate' },
  { id: 'STC', label: 'Short Certificate' },
]

const DELIVERY_LABEL: Record<string, string> = {
  ground: 'On Campus', hybrid: 'Hybrid', online: 'Online', virtual: 'Virtual',
}

const CATEGORY_ACCENT: Record<string, string> = {
  'health-professions': 'oklch(0.55 0.16 160)',
  'business-it':        'oklch(0.55 0.18 261)',
  'career-technical':   'oklch(0.79 0.19 78)',
  'college-transfer':   'oklch(0.62 0.18 280)',
  'other':              'oklch(0.55 0.10 263)',
}

export default function ProgramCatalog() {
  const [query,   setQuery]   = useState('')
  const [cat,     setCat]     = useState<ProgramCategory | 'all'>('all')
  const [degree,  setDegree]  = useState<DegreeType | 'all'>('all')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    return SAMPLE_PROGRAMS.filter(p => {
      if (cat    !== 'all' && p.category   !== cat)    return false
      if (degree !== 'all' && p.degreeType !== degree) return false
      if (q) {
        const searchable = `${p.name} ${p.description} ${(p.tags ?? []).join(' ')}`.toLowerCase()
        if (!searchable.includes(q)) return false
      }
      return true
    })
  }, [query, cat, degree])

  const visible = showAll ? filtered : filtered.slice(0, 24)

  return (
    <div>
      {/* Search + filters */}
      <div className="mb-8 space-y-4">
        {/* Search input */}
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 pointer-events-none"
            style={{ color: 'oklch(0.50 0.03 261)' }}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowAll(false) }}
            placeholder="Search programs — nursing, welding, cybersecurity, culinary…"
            className="w-full pl-12 pr-4 py-3.5 rounded-xl font-medium"
            style={{
              background: 'white', border: '1.5px solid oklch(0 0 0 / 0.15)',
              color: 'oklch(0.16 0.04 261)', fontSize: '0.95rem', outline: 'none',
            }}
          />
          {query && (
            <button onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2"
              style={{ color: 'oklch(0.50 0.03 261)', fontSize: '1.1rem', lineHeight: 1 }}
              aria-label="Clear search">×</button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CAT_TABS.map(t => {
            const active = cat === t.id
            return (
              <button key={t.id} onClick={() => { setCat(t.id as ProgramCategory | 'all'); setShowAll(false) }}
                role="tab" aria-selected={active}
                className="press font-semibold rounded-xl px-4 py-2 transition-all"
                style={{
                  fontSize: '0.80rem', letterSpacing: '0.02em',
                  background: active ? 'oklch(0.79 0.19 78)' : 'white',
                  color:      active ? 'oklch(0.11 0.03 261)' : 'oklch(0.40 0.04 261)',
                  border:     active ? 'none' : '1px solid oklch(0 0 0 / 0.10)',
                }}>
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Degree type row */}
        <div className="flex flex-wrap gap-2">
          {DEGREE_TABS.map(t => {
            const active = degree === t.id
            return (
              <button key={t.id} onClick={() => { setDegree(t.id as DegreeType | 'all'); setShowAll(false) }}
                className="press rounded-lg px-3 py-1.5 transition-all"
                style={{
                  fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em',
                  background: active ? 'oklch(0.42 0.17 261)' : 'transparent',
                  color:      active ? 'white'              : 'oklch(0.50 0.03 261)',
                  border:     '1px solid ' + (active ? 'oklch(0.42 0.17 261)' : 'oklch(0 0 0 / 0.10)'),
                }}>
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Count */}
        <p style={{ fontSize: '0.78rem', color: 'oklch(0.50 0.03 261)' }}>
          {filtered.length === SAMPLE_PROGRAMS.length
            ? `${SAMPLE_PROGRAMS.length} programs available`
            : `${filtered.length} program${filtered.length !== 1 ? 's' : ''} found`}
        </p>
      </div>

      {/* Program grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 rounded-2xl" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <p style={{ fontSize: '1.1rem', color: 'oklch(0.50 0.03 261)', marginBottom: '0.5rem' }}>
            No programs match your search.
          </p>
          <button onClick={() => { setQuery(''); setCat('all'); setDegree('all') }}
            className="press font-semibold"
            style={{ fontSize: '0.82rem', color: 'oklch(0.55 0.15 68)', textDecoration: 'underline' }}>
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map(p => {
              const accent = CATEGORY_ACCENT[p.category] ?? CATEGORY_ACCENT.other
              const isHighDemand = (p.jobPlacementRate ?? 0) >= 90
              const catLabel = CATEGORIES[p.category]?.label ?? p.category
              return (
                <Link key={p.id} href={p.href}
                  className="group flex flex-col rounded-2xl overflow-hidden card-lift press"
                  style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>

                  {/* Accent top bar */}
                  <div style={{ height: '3px', background: accent, flexShrink: 0 }} />

                  <div className="flex flex-col flex-1 p-5">
                    {/* Top badges */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="font-bold rounded-full px-2.5 py-0.5"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.10em', textTransform: 'uppercase', background: 'oklch(0 0 0 / 0.06)', color: 'oklch(0.40 0.04 261)' }}>
                        {DEGREE_TYPES[p.degreeType]?.label ?? p.degreeType}
                      </span>
                      {isHighDemand && (
                        <span className="font-bold rounded-full px-2.5 py-0.5"
                          style={{ fontSize: '0.65rem', letterSpacing: '0.10em', textTransform: 'uppercase', background: accent + '22', color: accent }}>
                          High Demand
                        </span>
                      )}
                      {p.transferable && (
                        <span className="font-bold rounded-full px-2.5 py-0.5"
                          style={{ fontSize: '0.65rem', letterSpacing: '0.10em', textTransform: 'uppercase', background: 'oklch(0.62 0.18 280 / 0.15)', color: 'oklch(0.50 0.18 280)' }}>
                          Transfer
                        </span>
                      )}
                    </div>

                    {/* Program name */}
                    <h3 className="font-display font-black leading-tight mb-2"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', letterSpacing: '-0.02em', flex: 'none', color: 'oklch(0.16 0.04 261)' }}>
                      {p.name}
                    </h3>

                    {/* Description */}
                    <p className="flex-1 leading-relaxed mb-4"
                      style={{ fontSize: '0.80rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>
                      {p.description}
                    </p>

                    {/* Bottom row */}
                    <div className="flex items-end justify-between gap-3 mt-auto">
                      <div className="flex flex-col gap-1.5">
                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden
                            style={{ color: 'oklch(0.50 0.03 261)', flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                          </svg>
                          <span style={{ fontSize: '0.70rem', color: 'oklch(0.50 0.03 261)', fontWeight: 600 }}>
                            {p.duration}
                          </span>
                        </div>
                        {/* Delivery modes */}
                        <div className="flex flex-wrap gap-1">
                          {p.deliveryModes.map(m => (
                            <span key={m} className="rounded px-1.5 py-0.5"
                              style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.04em', background: 'oklch(0 0 0 / 0.05)', color: 'oklch(0.50 0.03 261)' }}>
                              {DELIVERY_LABEL[m]}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Placement rate */}
                      {p.jobPlacementRate && (
                        <div className="flex flex-col items-end shrink-0">
                          <span className="font-display font-black leading-none"
                            style={{ fontSize: '1.5rem', letterSpacing: '-0.04em', color: accent }}>
                            {p.jobPlacementRate}%
                          </span>
                          <span style={{ fontSize: '0.58rem', color: 'oklch(0.50 0.03 261)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '1px' }}>
                            placed
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-4 pt-4 flex items-center justify-between"
                      style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)' }}>
                      <span style={{ fontSize: '0.70rem', color: 'oklch(0.50 0.03 261)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {catLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold"
                        style={{ fontSize: '0.78rem', color: accent, transition: 'gap 0.2s' }}>
                        View Program
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5">
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Show more */}
          {!showAll && filtered.length > 24 && (
            <div className="mt-8 text-center">
              <button onClick={() => setShowAll(true)}
                className="press inline-flex items-center gap-2 font-bold px-8 py-3.5 rounded-xl"
                style={{ background: 'white', border: '1.5px solid oklch(0.16 0.04 261 / 0.25)', color: 'oklch(0.16 0.04 261)', fontSize: '0.9rem' }}>
                Show all {filtered.length} programs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
