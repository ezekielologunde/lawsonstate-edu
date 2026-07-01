'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import LiveCalendarWidget from './live-calendar-widget'

export type CalendarEvent = { id: string; title: string; event_date: string; href: string }

function groupByMonth(events: CalendarEvent[]) {
  const map: Record<string, CalendarEvent[]> = {}
  for (const e of events) {
    const key = e.event_date.slice(0, 7)
    map[key] ??= []
    map[key].push(e)
  }
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b))
}

function monthLabel(key: string) {
  const [y, m] = key.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase()
}

function dateParts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return {
    day: d,
    weekday: dt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
  }
}

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function monthKeyOf(year: number, month0: number) {
  return `${year}-${String(month0 + 1).padStart(2, '0')}`
}

function buildMonthGrid(year: number, month0: number) {
  const firstOfMonth = new Date(year, month0, 1)
  const startWeekday = firstOfMonth.getDay() // 0=Sun
  const daysInMonth = new Date(year, month0 + 1, 0).getDate()
  const cells: { date: Date | null; iso: string | null }[] = []

  for (let i = 0; i < startWeekday; i++) cells.push({ date: null, iso: null })
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month0, d)
    const iso = `${year}-${String(month0 + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    cells.push({ date, iso })
  }
  while (cells.length % 7 !== 0) cells.push({ date: null, iso: null })

  const weeks: typeof cells[] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

export default function CalendarView({ events }: { events: CalendarEvent[] }) {
  const [viewMode, setViewMode] = useState<'list' | 'month'>('list')

  const today = useMemo(() => new Date(), [])
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const grouped = groupByMonth(events)

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {}
    for (const e of events) {
      map[e.event_date] ??= []
      map[e.event_date].push(e)
    }
    return map
  }, [events])

  const year = cursor.getFullYear()
  const month0 = cursor.getMonth()
  const weeks = buildMonthGrid(year, month0)
  const currentMonthKey = monthKeyOf(year, month0)
  const monthEventCount = events.filter((e) => e.event_date.slice(0, 7) === currentMonthKey).length

  const todayIso = today.toISOString().split('T')[0]
  const selectedEvents = selectedDate ? (eventsByDate[selectedDate] ?? []) : []

  function goToMonth(delta: number) {
    setCursor(new Date(year, month0 + delta, 1))
    setSelectedDate(null)
  }

  // Fall back to the live, officially-maintained calendar widget rather than
  // dead-ending on an empty state — covers us if our own events table is
  // ever empty or unreachable.
  if (events.length === 0) {
    return (
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <LiveCalendarWidget />
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6" style={{ background: 'white' }}>
      <div className="max-w-4xl mx-auto">

        {/* View toggle */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div
            role="tablist"
            aria-label="Calendar view"
            className="inline-flex p-1 rounded-xl"
            style={{ background: 'oklch(0.95 0.03 255)' }}
          >
            <button
              role="tab"
              aria-selected={viewMode === 'list'}
              onClick={() => setViewMode('list')}
              className="font-bold px-5 py-2 rounded-lg text-sm transition-colors"
              style={{
                background: viewMode === 'list' ? 'oklch(0.22 0.17 261)' : 'transparent',
                color: viewMode === 'list' ? 'white' : 'oklch(0.45 0.06 263)',
              }}
            >
              List
            </button>
            <button
              role="tab"
              aria-selected={viewMode === 'month'}
              onClick={() => setViewMode('month')}
              className="font-bold px-5 py-2 rounded-lg text-sm transition-colors"
              style={{
                background: viewMode === 'month' ? 'oklch(0.22 0.17 261)' : 'transparent',
                color: viewMode === 'month' ? 'white' : 'oklch(0.45 0.06 263)',
              }}
            >
              Month
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="space-y-14">
            {grouped.map(([monthKey, monthEvents]) => (
              <div key={monthKey}>
                <div
                  className="flex items-center gap-4 mb-6 pb-3"
                  style={{ borderBottom: '2px solid oklch(0.22 0.17 261)' }}
                >
                  <h2
                    className="font-display font-black"
                    style={{ fontSize: '0.88rem', letterSpacing: '0.22em', color: 'oklch(0.22 0.17 261)' }}
                  >
                    {monthLabel(monthKey)}
                  </h2>
                  <div style={{ flex: 1, height: '0' }} />
                  <span
                    className="font-semibold"
                    style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.08 263)' }}
                  >
                    {monthEvents.length} event{monthEvents.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="flex flex-col" style={{ borderTop: '1px solid oklch(0.93 0.01 263)' }}>
                  {monthEvents.map((event) => {
                    const { day, weekday } = dateParts(event.event_date)
                    return (
                      <Link
                        key={event.id}
                        href={event.href}
                        className="group flex items-center gap-5 py-5"
                        style={{ borderBottom: '1px solid oklch(0.93 0.01 263)' }}
                      >
                        <div className="shrink-0 flex flex-col items-center" style={{ width: '3rem' }}>
                          <span
                            className="font-semibold uppercase"
                            style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: 'oklch(0.55 0.08 263)', lineHeight: 1.2 }}
                          >
                            {weekday}
                          </span>
                          <span
                            className="font-display font-black leading-none"
                            style={{ fontSize: '2rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.02em' }}
                          >
                            {day}
                          </span>
                        </div>

                        <div
                          aria-hidden
                          style={{ width: '1px', height: '2.6rem', background: 'oklch(0.88 0.01 263)', flexShrink: 0 }}
                        />

                        <span
                          className="font-medium text-lscc-ink group-hover:text-lscc-blue flex-1 transition-colors"
                          style={{ fontSize: '1.05rem', lineHeight: 1.4 }}
                        >
                          {event.title}
                        </span>

                        <span
                          aria-hidden
                          className="shrink-0 transition-colors text-lscc-muted group-hover:text-lscc-blue"
                          style={{ fontSize: '1.1rem' }}
                        >
                          →
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Month nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => goToMonth(-1)}
                aria-label="Previous month"
                className="press w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: 'oklch(0.95 0.03 255)', color: 'oklch(0.22 0.17 261)' }}
              >
                ‹
              </button>
              <div className="text-center">
                <h2
                  className="font-display font-black"
                  style={{ fontSize: '1.4rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}
                >
                  {monthLabel(currentMonthKey)}
                </h2>
                <p style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.08 263)' }}>
                  {monthEventCount} event{monthEventCount !== 1 ? 's' : ''} this month
                </p>
              </div>
              <button
                onClick={() => goToMonth(1)}
                aria-label="Next month"
                className="press w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{ background: 'oklch(0.95 0.03 255)', color: 'oklch(0.22 0.17 261)' }}
              >
                ›
              </button>
            </div>

            {/* Weekday header */}
            <div className="grid grid-cols-7 mb-2">
              {WEEKDAY_LABELS.map((w) => (
                <div
                  key={w}
                  className="text-center font-bold uppercase"
                  style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: 'oklch(0.55 0.08 263)', padding: '0.5rem 0' }}
                >
                  {w}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1">
              {weeks.flat().map((cell, i) => {
                if (!cell.iso) {
                  return <div key={i} style={{ aspectRatio: '1' }} />
                }
                const dayEvents = eventsByDate[cell.iso] ?? []
                const isToday = cell.iso === todayIso
                const isSelected = cell.iso === selectedDate
                const hasEvents = dayEvents.length > 0

                return (
                  <button
                    key={i}
                    onClick={() => hasEvents && setSelectedDate(isSelected ? null : cell.iso)}
                    disabled={!hasEvents}
                    className="flex flex-col items-center justify-start rounded-lg transition-colors"
                    style={{
                      aspectRatio: '1',
                      padding: '0.4rem 0.2rem',
                      background: isSelected ? 'oklch(0.22 0.17 261)' : hasEvents ? 'oklch(0.95 0.03 255)' : 'transparent',
                      cursor: hasEvents ? 'pointer' : 'default',
                      border: isToday ? '1.5px solid oklch(0.79 0.19 78)' : '1px solid transparent',
                    }}
                  >
                    <span
                      className="font-semibold"
                      style={{
                        fontSize: '0.85rem',
                        color: isSelected ? 'white' : isToday ? 'oklch(0.55 0.19 27)' : 'oklch(0.28 0.04 261)',
                      }}
                    >
                      {cell.date!.getDate()}
                    </span>
                    {hasEvents && (
                      <span
                        className="mt-1 rounded-full"
                        style={{
                          width: '5px',
                          height: '5px',
                          background: isSelected ? 'oklch(0.79 0.19 78)' : 'oklch(0.55 0.19 27)',
                        }}
                        aria-hidden
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Selected day events */}
            {selectedDate && selectedEvents.length > 0 && (
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
                <p
                  className="font-bold uppercase mb-4"
                  style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: 'oklch(0.55 0.08 263)' }}
                >
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
                <div className="flex flex-col gap-3">
                  {selectedEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={event.href}
                      className="group flex items-center justify-between gap-4 p-4 rounded-xl transition-colors"
                      style={{ background: 'oklch(0.95 0.03 255)' }}
                    >
                      <span className="font-medium text-lscc-ink group-hover:text-lscc-blue transition-colors" style={{ fontSize: '1rem' }}>
                        {event.title}
                      </span>
                      <span aria-hidden className="shrink-0 text-lscc-muted group-hover:text-lscc-blue transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Academic calendar CTA */}
        <div className="mt-16 pt-10 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
          <p className="text-lscc-muted text-sm flex-1">
            Looking for registration deadlines, finals schedules, or holiday closures?
          </p>
          <Link
            href="https://www.lawsonstate.edu/calendar/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer font-bold px-6 py-3 rounded-lg whitespace-nowrap shrink-0 inline-block text-center"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
          >
            Academic Calendar →
          </Link>
        </div>

      </div>
    </section>
  )
}
