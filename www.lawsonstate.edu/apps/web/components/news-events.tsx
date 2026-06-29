import Link from 'next/link'

export type NewsStory = {
  id: string
  title: string
  excerpt: string | null
  image_url: string | null
  category: string | null
  href: string | null
  published_at: string | null
}

export type CalendarEvent = {
  id: string
  title: string
  event_date: string
  href: string
}

function dateParts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const dt = new Date(y, m - 1, d)
  return {
    day:     d,
    month:   dt.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    weekday: dt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
  }
}

function formatStoryDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default function NewsEvents({
  featuredStory,
  events,
}: {
  featuredStory: NewsStory | null
  events: CalendarEvent[]
}) {
  return (
    <section
      style={{ background: 'oklch(0.14 0.10 261)', paddingBlock: '5rem' }}
      aria-label="News and Events"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 scroll-reveal">
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'oklch(0.79 0.19 78)', marginBottom: '0.4rem', fontWeight: 700 }}>
              06 — Campus life
            </p>
            <h2
              className="font-display font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', letterSpacing: '-0.04em' }}
            >
              WHAT'S HAPPENING
            </h2>
          </div>
          <div className="hidden md:flex gap-5">
            <Link
              href="/calendar"
              className="inline-flex items-center gap-1 font-semibold transition-colors"
              style={{ fontSize: '0.82rem', color: 'oklch(0.79 0.19 78)' }}
            >
              All News
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center gap-1 font-semibold transition-colors"
              style={{ fontSize: '0.82rem', color: 'oklch(0.79 0.19 78)' }}
            >
              Full Calendar
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Featured story */}
          {featuredStory ? (
            <Link
              href={featuredStory.href ?? '/calendar'}
              className="scroll-reveal group block rounded-2xl overflow-hidden"
              style={{ background: 'oklch(0.22 0.16 261)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={featuredStory.image_url ?? 'https://www.lawsonstate.edu/_resources/assets/img/Lawson%20State%20Pic%204.jpg'}
                  alt={featuredStory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 30%, oklch(0.22 0.16 261) 100%)' }} />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="font-display font-black"
                    style={{
                      fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                      padding: '0.28rem 0.72rem', borderRadius: '999px',
                      background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)',
                    }}
                  >
                    {featuredStory.category ?? 'Campus News'}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="p-6">
                <h3
                  className="font-display font-black text-white leading-tight mb-3"
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', letterSpacing: '-0.03em',
                    transition: 'color 0.2s',
                  }}
                >
                  {featuredStory.title}
                </h3>
                {featuredStory.excerpt && (
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'oklch(1 0 0 / 0.55)', marginBottom: '1rem', maxWidth: '65ch' }}>
                    {featuredStory.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  {featuredStory.published_at && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--lscc-muted-on-dark)', letterSpacing: '0.04em' }}>
                      {formatStoryDate(featuredStory.published_at)}
                    </span>
                  )}
                  <span
                    className="inline-flex items-center gap-1 font-bold"
                    style={{ fontSize: '0.78rem', color: 'oklch(0.79 0.19 78)' }}
                  >
                    Read story
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ) : (
            <div
              className="rounded-2xl flex items-center justify-center"
              style={{ aspectRatio: '16/9', background: 'oklch(0.14 0.07 261)' }}
            >
              <p style={{ fontSize: '0.88rem', color: 'var(--lscc-muted-on-dark)' }}>No featured story yet.</p>
            </div>
          )}

          {/* Events sidebar */}
          <div
            className="scroll-reveal rounded-2xl overflow-hidden"
            style={{ background: 'oklch(0.22 0.16 261)' }}
          >
            <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid oklch(1 0 0 / 0.10)' }}>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>
                Upcoming Events
              </p>
            </div>

            {events.length > 0 ? (
              <div className="flex flex-col">
                {events.map((event, i) => {
                  const { day, month, weekday } = dateParts(event.event_date)
                  return (
                    <Link
                      key={event.id}
                      href={event.href}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/5"
                      style={{ borderBottom: i < events.length - 1 ? '1px solid oklch(1 0 0 / 0.06)' : 'none' }}
                    >
                      {/* Date block */}
                      <div
                        className="shrink-0 flex flex-col items-center justify-center rounded-xl"
                        style={{ width: '44px', height: '44px', background: 'oklch(0.30 0.20 261)' }}
                      >
                        <span style={{ fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.10em', color: 'oklch(0.79 0.19 78)', lineHeight: 1 }}>
                          {month}
                        </span>
                        <span className="font-display font-black text-white leading-none" style={{ fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
                          {day}
                        </span>
                      </div>

                      <span
                        className="text-sm font-medium flex-1 leading-snug"
                        style={{ color: 'oklch(1 0 0 / 0.80)', transition: 'color 0.2s' }}
                      >
                        {event.title}
                      </span>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ color: 'oklch(1 0 0 / 0.25)' }} aria-hidden>
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <p className="px-5 py-6" style={{ fontSize: '0.85rem', color: 'var(--lscc-muted-on-dark)' }}>
                No upcoming events right now.
              </p>
            )}

            <div className="px-5 py-4" style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-1.5 font-bold"
                style={{ fontSize: '0.78rem', color: 'oklch(0.79 0.19 78)' }}
              >
                View full calendar
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile links */}
        <div className="md:hidden flex gap-6 mt-8" style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)', paddingTop: '1.5rem' }}>
          <Link href="/calendar" className="font-semibold" style={{ fontSize: '0.82rem', color: 'oklch(0.79 0.19 78)' }}>All News →</Link>
          <Link href="/calendar" className="font-semibold" style={{ fontSize: '0.82rem', color: 'oklch(0.79 0.19 78)' }}>Full Calendar →</Link>
        </div>
      </div>
    </section>
  )
}
