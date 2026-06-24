'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Program, DegreeType, DeliveryMode, ProgramCategory } from '@/lib/programs-data'
import { DEGREE_TYPES, DELIVERY_MODES, CATEGORIES, SAMPLE_PROGRAMS } from '@/lib/programs-data'

interface ProgramsFilterState {
  search: string
  degreeTypes: DegreeType[]
  deliveryModes: DeliveryMode[]
  categories: ProgramCategory[]
}

export default function ProgramsFilter() {
  const [filters, setFilters] = useState<ProgramsFilterState>({
    search: '',
    degreeTypes: [],
    deliveryModes: [],
    categories: [],
  })

  const [mobileOpen, setMobileOpen] = useState(false)

  const filteredPrograms = useMemo(() => {
    return SAMPLE_PROGRAMS.filter((program) => {
      const matchesSearch = filters.search === '' ||
        program.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        program.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        (program.tags?.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase())))

      const matchesDegree = filters.degreeTypes.length === 0 || filters.degreeTypes.includes(program.degreeType)
      const matchesDelivery = filters.deliveryModes.length === 0 || filters.deliveryModes.some(mode => program.deliveryModes.includes(mode))
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(program.category)

      return matchesSearch && matchesDegree && matchesDelivery && matchesCategory
    })
  }, [filters])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }))
  }

  const toggleDegreeType = (type: DegreeType) => {
    setFilters(prev => ({
      ...prev,
      degreeTypes: prev.degreeTypes.includes(type)
        ? prev.degreeTypes.filter(t => t !== type)
        : [...prev.degreeTypes, type],
    }))
  }

  const toggleDeliveryMode = (mode: DeliveryMode) => {
    setFilters(prev => ({
      ...prev,
      deliveryModes: prev.deliveryModes.includes(mode)
        ? prev.deliveryModes.filter(m => m !== mode)
        : [...prev.deliveryModes, mode],
    }))
  }

  const toggleCategory = (cat: ProgramCategory) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat],
    }))
  }

  const clearFilter = (key: keyof ProgramsFilterState) => {
    setFilters(prev => ({
      ...prev,
      [key]: key === 'search' ? '' : [],
    }))
  }

  const clearAllFilters = () => {
    setFilters({ search: '', degreeTypes: [], deliveryModes: [], categories: [] })
    setMobileOpen(false)
  }

  const activeFilterCount = [
    filters.search ? 1 : 0,
    filters.degreeTypes.length,
    filters.deliveryModes.length,
    filters.categories.length,
  ].reduce((a, b) => a + b, 0)

  return (
    <div style={{ background: 'oklch(0.14 0.10 261)' }}>
      {/* Search bar */}
      <div className="sticky top-0 z-10 px-6 py-4 md:relative md:py-6"
        style={{ background: 'oklch(0.14 0.10 261)', borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <label htmlFor="program-search" className="sr-only">Search programs</label>
            <input
              id="program-search"
              type="search"
              placeholder="Search by program name, credential, or skill…"
              value={filters.search}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none transition-all"
              style={{
                background: 'oklch(0.22 0.16 261)',
                border: '1.5px solid oklch(1 0 0 / 0.15)',
                color: 'white',
              }}
            />
            {filters.search && (
              <button
                onClick={() => clearFilter('search')}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                style={{ color: 'oklch(1 0 0 / 0.45)' }}
                aria-label="Clear search"
              >
                <span aria-hidden="true">✕</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-full flex items-center justify-between p-3 rounded-lg mb-4 font-medium"
          style={{ border: '1px solid oklch(1 0 0 / 0.12)', color: 'oklch(1 0 0 / 0.75)' }}
          aria-expanded={mobileOpen}
          aria-controls="filter-panel"
          aria-label={`Filters${activeFilterCount > 0 ? `, ${activeFilterCount} active` : ''}`}
        >
          <span className="flex items-center gap-2" aria-hidden="true">
            Filters {activeFilterCount > 0 && (
              <span className="text-sm font-bold rounded-full px-2 py-0.5"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                {activeFilterCount}
              </span>
            )}
          </span>
          <span aria-hidden="true">{mobileOpen ? '▲' : '▼'}</span>
        </button>

        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Filters panel */}
          <aside
            id="filter-panel"
            className={`space-y-6 ${mobileOpen ? 'block' : 'hidden md:block'} md:sticky md:top-24 md:h-fit`}
            role="region"
            aria-label="Program filters"
          >
            {/* Active filters display */}
            {activeFilterCount > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: 'oklch(1 0 0 / 0.45)' }}>
                    Active filters
                  </span>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-semibold transition-colors"
                    style={{ color: 'oklch(0.79 0.19 78)' }}
                    aria-label="Clear all filters"
                  >
                    Clear all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.search && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                      style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.12)', color: 'oklch(1 0 0 / 0.75)' }}>
                      "{filters.search}"
                      <button onClick={() => clearFilter('search')}
                        style={{ color: 'oklch(1 0 0 / 0.45)' }}
                        aria-label="Remove search filter">
                        <span aria-hidden="true">✕</span>
                      </button>
                    </div>
                  )}
                  {filters.degreeTypes.map(type => (
                    <div key={type} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                      style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.12)', color: 'oklch(1 0 0 / 0.75)' }}>
                      {type}
                      <button onClick={() => toggleDegreeType(type)}
                        style={{ color: 'oklch(1 0 0 / 0.45)' }}
                        aria-label={`Remove ${type} filter`}>
                        <span aria-hidden="true">✕</span>
                      </button>
                    </div>
                  ))}
                  {filters.deliveryModes.map(mode => (
                    <div key={mode} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                      style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.12)', color: 'oklch(1 0 0 / 0.75)' }}>
                      {DELIVERY_MODES[mode].label}
                      <button onClick={() => toggleDeliveryMode(mode)}
                        style={{ color: 'oklch(1 0 0 / 0.45)' }}
                        aria-label={`Remove ${DELIVERY_MODES[mode].label} filter`}>
                        <span aria-hidden="true">✕</span>
                      </button>
                    </div>
                  ))}
                  {filters.categories.map(cat => (
                    <div key={cat} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
                      style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.12)', color: 'oklch(1 0 0 / 0.75)' }}>
                      {CATEGORIES[cat].label}
                      <button onClick={() => toggleCategory(cat)}
                        style={{ color: 'oklch(1 0 0 / 0.45)' }}
                        aria-label={`Remove ${CATEGORIES[cat].label} filter`}>
                        <span aria-hidden="true">✕</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Degree Type filter */}
            <fieldset>
              <legend className="text-sm font-bold mb-3 block text-white">Degree Type</legend>
              <div className="space-y-2">
                {(Object.entries(DEGREE_TYPES) as Array<[DegreeType, any]>).map(([type, info]) => (
                  <label key={type} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.degreeTypes.includes(type)}
                      onChange={() => toggleDegreeType(type)}
                      className="mt-1 w-4 h-4 rounded cursor-pointer"
                      style={{ accentColor: 'oklch(0.79 0.19 78)' }}
                      aria-label={`${type} - ${info.label}`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-white">{type}</div>
                      <div className="text-xs" style={{ color: 'oklch(1 0 0 / 0.50)' }}>{info.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Delivery Mode filter */}
            <fieldset>
              <legend className="text-sm font-bold mb-3 block text-white">How You'll Learn</legend>
              <div className="space-y-2">
                {(Object.entries(DELIVERY_MODES) as Array<[DeliveryMode, any]>).map(([mode, info]) => (
                  <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.deliveryModes.includes(mode)}
                      onChange={() => toggleDeliveryMode(mode)}
                      className="w-4 h-4 rounded cursor-pointer"
                      style={{ accentColor: 'oklch(0.79 0.19 78)' }}
                    />
                    <span className="font-medium text-sm text-white">
                      {info.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Category filter */}
            <fieldset>
              <legend className="text-sm font-bold mb-3 block text-white">Program Area</legend>
              <div className="space-y-2">
                {(Object.entries(CATEGORIES) as Array<[ProgramCategory, any]>).map(([cat, info]) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded cursor-pointer"
                      style={{ accentColor: 'oklch(0.79 0.19 78)' }}
                      aria-label={info.label}
                    />
                    <span className="font-medium text-sm text-white">{info.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </aside>

          {/* Results */}
          <section aria-label="Program search results">
            <div className="mb-4" role="status" aria-live="polite" aria-atomic="true">
              <p className="text-sm" style={{ color: 'oklch(1 0 0 / 0.55)' }}>
                Found <span className="font-bold text-white">{filteredPrograms.length}</span> program{filteredPrograms.length !== 1 ? 's' : ''}
                {activeFilterCount > 0 && ` matching your criteria`}
              </p>
            </div>

            {filteredPrograms.length === 0 ? (
              <div className="py-12 text-center">
                <h3 className="text-lg font-bold text-white mb-2">No programs found</h3>
                <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'oklch(1 0 0 / 0.55)' }}>
                  Try adjusting your filters or search terms to find what you&apos;re looking for.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: 'oklch(0.79 0.19 78)' }}
                  aria-label="Clear all filters and show all programs"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredPrograms.map((program, i) => (
                  <Link key={program.id} href={program.href}>
                    <article
                      className="card-appear group p-5 rounded-xl transition-colors"
                      style={{ border: '1px solid oklch(1 0 0 / 0.10)', background: 'oklch(0.20 0.15 261)', animationDelay: `${i * 0.04}s` }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white"
                              style={{ background: CATEGORIES[program.category].color }}>
                              {program.degreeType}
                            </span>
                            {program.jobPlacementRate && (
                              <span className="text-xs font-semibold" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
                                {program.jobPlacementRate}% placement
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 transition-colors"
                            style={{ '--hover-color': 'oklch(0.79 0.19 78)' } as React.CSSProperties}>
                            {program.name}
                          </h3>
                          <p className="text-sm mb-3" style={{ color: 'oklch(1 0 0 / 0.65)' }}>{program.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {program.deliveryModes.map(mode => (
                              <span key={mode} className="text-xs px-2.5 py-1 rounded-full"
                                style={{ background: 'oklch(1 0 0 / 0.08)', color: 'oklch(1 0 0 / 0.55)' }}>
                                {DELIVERY_MODES[mode].label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-semibold text-white mb-1">{program.duration}</div>
                          <div className="text-xs mb-3" style={{ color: 'oklch(1 0 0 / 0.45)' }}>{program.durationMonths} months</div>
                          <span style={{ color: 'oklch(0.79 0.19 78)' }} className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
