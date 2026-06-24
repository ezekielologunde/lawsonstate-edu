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

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
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
    <section className="py-14 px-6 bg-white">
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
            <h3
              className="font-display font-bold text-lscc-ink mb-6"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
            >
              Upcoming Events
            </h3>
            {events.length > 0 ? (
              <div className="flex flex-col" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
                {events.map((event) => (
                  <Link
                    key={event.id}
                    href={event.href}
                    className="group flex items-start gap-4 py-4 transition-colors"
                    style={{ borderBottom: '1px solid oklch(0.90 0.01 263)' }}
                  >
                    <span
                      className="shrink-0 font-display font-bold text-sm pt-0.5"
                      style={{ color: 'oklch(0.83 0.16 82)', minWidth: '3.5rem' }}
                    >
                      {formatDate(event.event_date)}
                    </span>
                    <span className="text-sm font-medium text-lscc-ink group-hover:text-lscc-blue transition-colors leading-snug">
                      {event.title}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-lscc-muted text-sm">No upcoming events.</p>
            )}
            <Link
              href="/calendar"
              className="mt-6 inline-block text-sm font-semibold text-lscc-blue hover:underline"
            >
              View full academic calendar →
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
