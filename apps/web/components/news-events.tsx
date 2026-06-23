import Link from 'next/link'

const featuredStory = {
  date: 'Jun 19, 2026',
  category: 'Campus News',
  title: 'Lawson State Celebrates Juneteenth with Annual Cultural Festival',
  excerpt:
    'Students, faculty, and the Birmingham community came together to honor Juneteenth with music, food, art, and education across both campuses.',
  href: '/news',
  image: 'https://www.lawsonstate.edu/_resources/assets/img/campus.jpg',
}

const events = [
  { date: 'Jun 25', title: 'Last Day — Summer M1 Session', href: '/calendar' },
  { date: 'Jun 25', title: 'Final Exam Day', href: '/calendar' },
  { date: 'Jun 26', title: 'Drop/Add Period Begins', href: '/calendar' },
  { date: 'Jul 4',  title: 'Campus Closed — Independence Day', href: '/calendar' },
  { date: 'Jul 7',  title: 'Summer M2 Session Begins', href: '/calendar' },
]

export default function NewsEvents() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <h2
            className="font-display font-black text-lscc-ink leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            WHAT'S HAPPENING
          </h2>
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <Link href="/news" className="text-lscc-blue hover:underline">
              All News →
            </Link>
            <Link href="/calendar" className="text-lscc-blue hover:underline">
              Full Calendar →
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12">
          {/* Featured story */}
          <Link href={featuredStory.href} className="group block">
            <div
              className="overflow-hidden rounded-xl mb-5 bg-lscc-blue-100"
              style={{ aspectRatio: '16 / 9' }}
            >
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span
              className="text-xs font-semibold uppercase"
              style={{ letterSpacing: '0.12em', color: 'oklch(0.27 0.13 263)' }}
            >
              {featuredStory.category}
            </span>
            <h3
              className="font-display font-bold text-lscc-ink mt-2 mb-3 group-hover:text-lscc-blue transition-colors"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.015em' }}
            >
              {featuredStory.title}
            </h3>
            <p
              className="text-lscc-muted text-sm leading-relaxed"
              style={{ maxWidth: '65ch' }}
            >
              {featuredStory.excerpt}
            </p>
            <span className="text-lscc-muted text-xs mt-3 block">{featuredStory.date}</span>
          </Link>

          {/* Events list */}
          <div>
            <h3
              className="font-display font-bold text-lscc-ink mb-6"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
            >
              Upcoming Events
            </h3>
            <div className="flex flex-col" style={{ borderTop: '1px solid oklch(0.90 0.01 263)' }}>
              {events.map((event) => (
                <Link
                  key={event.title}
                  href={event.href}
                  className="group flex items-start gap-4 py-4 transition-colors"
                  style={{ borderBottom: '1px solid oklch(0.90 0.01 263)' }}
                >
                  <span
                    className="shrink-0 font-display font-bold text-sm pt-0.5"
                    style={{ color: 'oklch(0.83 0.16 82)', minWidth: '3.5rem' }}
                  >
                    {event.date}
                  </span>
                  <span className="text-sm font-medium text-lscc-ink group-hover:text-lscc-blue transition-colors leading-snug">
                    {event.title}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/calendar"
              className="mt-6 inline-block text-sm font-semibold text-lscc-blue hover:underline"
            >
              View full academic calendar →
            </Link>
          </div>
        </div>

        {/* Mobile links */}
        <div className="md:hidden flex gap-6 mt-10 text-sm font-semibold">
          <Link href="/news" className="text-lscc-blue hover:underline">All News →</Link>
          <Link href="/calendar" className="text-lscc-blue hover:underline">Full Calendar →</Link>
        </div>
      </div>
    </section>
  )
}
