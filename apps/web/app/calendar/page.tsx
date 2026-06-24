export const revalidate = 3600

import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import { createServerClient } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Upcoming Events — Lawson State',
  description:
    'Stay connected to campus life at Lawson State Community College — orientations, workshops, ceremonies, and more.',
}

type Event = { id: string; title: string; event_date: string; href: string }

function groupByMonth(events: Event[]) {
  const map: Record<string, Event[]> = {}
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
    day:     d,
    weekday: dt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
  }
}

export default async function CalendarPage() {
  const db    = createServerClient()
  const today = new Date().toISOString().split('T')[0]

  const { data } = await db
    .from('events')
    .select('id, title, event_date, href')
    .eq('is_published', true)
    .gte('event_date', today)
    .order('event_date')
    .order('sort_order')
    .limit(60)

  const grouped = groupByMonth(data ?? [])

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '32vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <img
          src="https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.96) 0%, oklch(0.22 0.17 261 / 0.80) 55%, oklch(0.16 0.13 263 / 0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <p
            className="font-display font-semibold uppercase mb-3"
            style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}
          >
            Campus Life
          </p>
          <h1
            className="font-display font-black text-white leading-none mb-3"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}
          >
            UPCOMING EVENTS
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.7 }}>
            Orientations, workshops, ceremonies, and community gatherings — all in one place.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">

          {grouped.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-lscc-muted mb-6" style={{ fontSize: '1.1rem' }}>No upcoming events at this time.</p>
              <Link
                href="https://www.lawsonstate.edu/about/calendar.php"
                target="_blank"
                rel="noopener noreferrer"
                className="press btn-shimmer font-bold px-6 py-3 rounded-lg inline-block"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
              >
                View Academic Calendar →
              </Link>
            </div>
          ) : (
            <div className="space-y-14">
              {grouped.map(([monthKey, monthEvents]) => (
                <div key={monthKey}>
                  {/* Month header */}
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

                  {/* Event rows */}
                  <div className="flex flex-col" style={{ borderTop: '1px solid oklch(0.93 0.01 263)' }}>
                    {monthEvents.map(event => {
                      const { day, weekday } = dateParts(event.event_date)
                      return (
                        <Link
                          key={event.id}
                          href={event.href}
                          className="group flex items-center gap-5 py-5"
                          style={{ borderBottom: '1px solid oklch(0.93 0.01 263)' }}
                        >
                          {/* Date block */}
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

                          {/* Vertical rule */}
                          <div
                            aria-hidden
                            style={{ width: '1px', height: '2.6rem', background: 'oklch(0.88 0.01 263)', flexShrink: 0 }}
                          />

                          {/* Title */}
                          <span
                            className="font-medium text-lscc-ink group-hover:text-lscc-blue flex-1 transition-colors"
                            style={{ fontSize: '1.05rem', lineHeight: 1.4 }}
                          >
                            {event.title}
                          </span>

                          {/* Arrow */}
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
          )}

          {/* Academic calendar CTA */}
          {grouped.length > 0 && (
            <div className="mt-16 pt-10 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
              <p className="text-lscc-muted text-sm flex-1">
                Looking for registration deadlines, finals schedules, or holiday closures?
              </p>
              <Link
                href="https://www.lawsonstate.edu/about/calendar.php"
                target="_blank"
                rel="noopener noreferrer"
                className="press btn-shimmer font-bold px-6 py-3 rounded-lg whitespace-nowrap shrink-0 inline-block text-center"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
              >
                Academic Calendar →
              </Link>
            </div>
          )}

        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
