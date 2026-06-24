'use client'

import { useState, useMemo, useCallback } from 'react'
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

  // Filter programs based on selected criteria
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
    <div className="bg-white">
      {/* Search bar */}
      <div className="sticky top-0 z-10 px-6 py-4 border-b border-oklch(0.90 0.01 263) bg-white md:relative md:border-0 md:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by program name, credential, or skill…"
              value={filters.search}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded-lg border border-oklch(0.85 0.02 263) bg-white text-sm focus:outline-none focus:ring-2 focus:ring-oklch(0.79 0.19 78) focus:border-transparent transition-all"
              aria-label="Search programs"
            />
            {filters.search && (
              <button
                onClick={() => clearFilter('search')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-lscc-muted hover:text-lscc-ink transition-colors"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Mobile filter toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-full flex items-center justify-between p-3 rounded-lg border border-oklch(0.85 0.02 263) mb-4 font-medium"
          aria-expanded={mobileOpen}
          aria-controls="filter-panel"
        >
          <span className="flex items-center gap-2">
            🔍 Filters {activeFilterCount > 0 && <span className="text-sm font-bold text-white bg-oklch(0.79 0.19 78) rounded-full px-2 py-0.5">{activeFilterCount}</span>}
          </span>
          <span>{mobileOpen ? '▲' : '▼'}</span>
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
                  <span className="text-xs font-semibold uppercase tracking-wide text-lscc-muted">Active filters</span>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-semibold text-oklch(0.79 0.19 78) hover:text-oklch(0.73 0.17 78) transition-colors"
                  >
                    Clear all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.search && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-oklch(0.97 0.015 263) border border-oklch(0.85 0.02 263) text-sm">
                      "{filters.search}"
                      <button
                        onClick={() => clearFilter('search')}
                        className="text-lscc-muted hover:text-lscc-ink"
                        aria-label="Remove search filter"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                  {filters.degreeTypes.map(type => (
                    <div key={type} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-oklch(0.97 0.015 263) border border-oklch(0.85 0.02 263) text-sm">
                      {type}
                      <button
                        onClick={() => toggleDegreeType(type)}
                        className="text-lscc-muted hover:text-lscc-ink"
                        aria-label={`Remove ${type} filter`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {filters.deliveryModes.map(mode => (
                    <div key={mode} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-oklch(0.97 0.015 263) border border-oklch(0.85 0.02 263) text-sm">
                      {DELIVERY_MODES[mode].label}
                      <button
                        onClick={() => toggleDeliveryMode(mode)}
                        className="text-lscc-muted hover:text-lscc-ink"
                        aria-label={`Remove ${DELIVERY_MODES[mode].label} filter`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {filters.categories.map(cat => (
                    <div key={cat} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-oklch(0.97 0.015 263) border border-oklch(0.85 0.02 263) text-sm">
                      {CATEGORIES[cat].label}
                      <button
                        onClick={() => toggleCategory(cat)}
                        className="text-lscc-muted hover:text-lscc-ink"
                        aria-label={`Remove ${CATEGORIES[cat].label} filter`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Degree Type filter */}
            <fieldset>
              <legend className="text-sm font-bold text-lscc-ink mb-3 block">Degree Type</legend>
              <div className="space-y-2">
                {(Object.entries(DEGREE_TYPES) as Array<[DegreeType, any]>).map(([type, info]) => (
                  <label key={type} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.degreeTypes.includes(type)}
                      onChange={() => toggleDegreeType(type)}
                      className="mt-1 w-4 h-4 rounded border-oklch(0.85 0.02 263) text-oklch(0.79 0.19 78) focus:ring-2 focus:ring-offset-0 focus:ring-oklch(0.79 0.19 78) cursor-pointer"
                      aria-label={`${type} - ${info.label}`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-lscc-ink group-hover:text-oklch(0.79 0.19 78) transition-colors">{type}</div>
                      <div className="text-xs text-lscc-muted">{info.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Delivery Mode filter */}
            <fieldset>
              <legend className="text-sm font-bold text-lscc-ink mb-3 block">How You'll Learn</legend>
              <div className="space-y-2">
                {(Object.entries(DELIVERY_MODES) as Array<[DeliveryMode, any]>).map(([mode, info]) => (
                  <label key={mode} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.deliveryModes.includes(mode)}
                      onChange={() => toggleDeliveryMode(mode)}
                      className="w-4 h-4 rounded border-oklch(0.85 0.02 263) text-oklch(0.79 0.19 78) focus:ring-2 focus:ring-offset-0 focus:ring-oklch(0.79 0.19 78) cursor-pointer"
                      aria-label={info.label}
                    />
                    <span className="font-medium text-sm text-lscc-ink group-hover:text-oklch(0.79 0.19 78) transition-colors">
                      {info.icon} {info.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Category filter */}
            <fieldset>
              <legend className="text-sm font-bold text-lscc-ink mb-3 block">Program Area</legend>
              <div className="space-y-2">
                {(Object.entries(CATEGORIES) as Array<[ProgramCategory, any]>).map(([cat, info]) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-4 h-4 rounded border-oklch(0.85 0.02 263) text-oklch(0.79 0.19 78) focus:ring-2 focus:ring-offset-0 focus:ring-oklch(0.79 0.19 78) cursor-pointer"
                      aria-label={info.label}
                    />
                    <span className="font-medium text-sm text-lscc-ink group-hover:text-oklch(0.79 0.19 78) transition-colors">{info.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </aside>

          {/* Results */}
          <main>
            <div className="mb-4">
              <p className="text-sm text-lscc-muted">
                Found <span className="font-bold text-lscc-ink">{filteredPrograms.length}</span> program{filteredPrograms.length !== 1 ? 's' : ''}
                {activeFilterCount > 0 && ` matching your criteria`}
              </p>
            </div>

            {filteredPrograms.length === 0 ? (
              <div className="py-12 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-lscc-ink mb-2">No programs found</h3>
                <p className="text-sm text-lscc-muted mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-sm font-semibold text-oklch(0.79 0.19 78) hover:text-oklch(0.73 0.17 78) transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredPrograms.map(program => (
                  <Link key={program.id} href={program.href}>
                    <article className="group p-5 rounded-xl border border-oklch(0.90 0.01 263) hover:border-oklch(0.79 0.19 78) transition-colors hover:shadow-lg bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: CATEGORIES[program.category].color }}>
                              {program.degreeType}
                            </span>
                            {program.jobPlacementRate && (
                              <span className="text-xs font-semibold text-oklch(0.55 0.08 263)">
                                📊 {program.jobPlacementRate}% placement
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-lscc-ink group-hover:text-oklch(0.79 0.19 78) transition-colors mb-2">
                            {program.name}
                          </h3>
                          <p className="text-sm text-lscc-muted mb-3">{program.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {program.deliveryModes.map(mode => (
                              <span key={mode} className="text-xs px-2.5 py-1 rounded-full bg-oklch(0.97 0.015 263) text-lscc-muted">
                                {DELIVERY_MODES[mode].icon} {DELIVERY_MODES[mode].label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-semibold text-lscc-ink mb-1">{program.duration}</div>
                          <div className="text-xs text-lscc-muted mb-3">{program.durationMonths} months</div>
                          <span className="text-oklch(0.79 0.19 78) group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
