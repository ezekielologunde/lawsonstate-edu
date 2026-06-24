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
    weekday: dt.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
  }
}

function formatStoryDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
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
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2
            className="font-display font-black text-lscc-ink leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            WHAT'S HAPPENING
          </h2>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <Link href="/news" className="text-lscc-blue hover:underline">All News →</Link>
            <Link href="/calendar" className="text-lscc-blue hover:underline">Full Calendar →</Link>
          </div>
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12">
          {/* Featured story */}
          {featuredStory ? (
            <Link href={featuredStory.href ?? '/news'} className="group block">
              <div
                className="overflow-hidden rounded-xl mb-5 bg-lscc-blue-100"
                style={{ aspectRatio: '16 / 9' }}
              >
                {featuredStory.image_url ? (
                  <img
                    src={featuredStory.image_url}
                    alt={featuredStory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-end p-8"
                    style={{ background: 'oklch(0.27 0.13 263)' }}
                  >
                    <span
                      className="font-display font-black text-white leading-none"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em', maxWidth: '20ch' }}
                    >
                      {featuredStory.title}
                    </span>
                  </div>
                )}
              </div>
              <span
                className="text-xs font-semibold uppercase"
                style={{ letterSpacing: '0.12em', color: 'oklch(0.27 0.13 263)' }}
              >
                {featuredStory.category ?? 'Campus News'}
              </span>
              <h3
                className="font-display font-bold text-lscc-ink mt-2 mb-3 group-hover:text-lscc-blue transition-colors"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.015em' }}
              >
                {featuredStory.title}
              </h3>
              {featuredStory.excerpt && (
                <p className="text-lscc-muted text-sm leading-relaxed" style={{ maxWidth: '65ch' }}>
                  {featuredStory.excerpt}
                </p>
              )}
              {featuredStory.published_at && (
                <span className="text-lscc-muted text-xs mt-3 block">
                  {formatStoryDate(featuredStory.published_at)}
                </span>
              )}
            </Link>
          ) : (
            <div className="flex items-center justify-center rounded-xl bg-lscc-blue-50" style={{ aspectRatio: '16 / 9' }}>
              <p className="text-lscc-muted text-sm">No featured story yet.</p>
            </div>
          )}

          {/* Events list */}
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <h3
                className="font-display font-bold text-lscc-ink"
                style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
              >
                Upcoming Events
              </h3>
              <Link
                href="/calendar"
                className="text-xs font-semibold hover:underline"
                style={{ color: 'oklch(0.42 0.22 248)' }}
              >
                See all →
              </Link>
            </div>
            {events.length > 0 ? (
              <div className="flex flex-col" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
                {events.map((event) => {
                  const { day, weekday } = dateParts(event.event_date)
                  return (
                    <Link
                      key={event.id}
                      href={event.href}
                      className="group flex items-center gap-4 py-4 transition-colors"
                      style={{ borderBottom: '1px solid oklch(0.90 0.01 263)' }}
                    >
                      {/* Date block */}
                      <div className="shrink-0 flex flex-col items-center" style={{ minWidth: '2.6rem' }}>
                        <span
                          className="font-semibold uppercase"
                          style={{ fontSize: '0.6rem', letterSpacing: '0.06em', color: 'oklch(0.55 0.08 263)', lineHeight: 1.2 }}
                        >
                          {weekday}
                        </span>
                        <span
                          className="font-display font-black leading-none"
                          style={{ fontSize: '1.6rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.02em' }}
                        >
                          {day}
                        </span>
                      </div>
                      {/* Divider */}
                      <div
                        aria-hidden
                        style={{ width: '1px', height: '2.2rem', background: 'oklch(0.88 0.01 263)', flexShrink: 0 }}
                      />
                      <span className="text-sm font-medium text-lscc-ink group-hover:text-lscc-blue transition-colors leading-snug flex-1">
                        {event.title}
                      </span>
                      <span aria-hidden className="text-lscc-muted group-hover:text-lscc-blue transition-colors shrink-0" style={{ fontSize: '0.9rem' }}>
                        →
                      </span>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <p className="text-lscc-muted text-sm">No upcoming events right now.</p>
            )}
            <Link
              href="/calendar"
              className="mt-5 inline-block text-sm font-semibold hover:underline"
              style={{ color: 'oklch(0.42 0.22 248)' }}
            >
              View full calendar →
            </Link>
          </div>
        </div>

        <div className="md:hidden flex gap-6 mt-10 text-sm font-semibold">
          <Link href="/news" className="text-lscc-blue hover:underline">All News →</Link>
          <Link href="/calendar" className="text-lscc-blue hover:underline">Full Calendar →</Link>
        </div>
      </div>
    </section>
  )
}
