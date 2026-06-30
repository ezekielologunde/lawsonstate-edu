import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const CATEGORIES = ['All', 'Academics', 'Athletics', 'Student Life', 'Community', 'Awards & Honors', 'Workforce']

const FEATURED = {
  category: 'Awards & Honors',
  headline: 'Lawson State Recognized as a Caring Campus by the Alabama Community College System',
  date: 'May 2026',
  summary: 'Lawson State Community College has received the Caring Campus designation, affirming the College\'s commitment to student mental health, food security, and holistic wellbeing. The designation highlights expanded counseling services, the Cougar Pantry, and new peer support initiatives launched this academic year.',
  href: '/student-resources/health',
  cta: 'Learn About Health & Wellness',
}

const STORIES = [
  {
    category: 'Academics',
    headline: 'Nursing Program Achieves 96% NCLEX Pass Rate for Third Consecutive Year',
    date: 'April 2026',
    summary: 'The Lawson State Nursing Program continues to exceed state averages, with 96% of graduates passing the NCLEX-RN licensure exam on the first attempt.',
    href: '/academics',
  },
  {
    category: 'Athletics',
    headline: 'Cougar Men\'s Basketball Advances to ACCC Championship Game',
    date: 'March 2026',
    summary: 'The Lawson State Men\'s Basketball team earned a berth in the Alabama Community College Conference championship after an undefeated home season.',
    href: '/campus-life/athletics',
  },
  {
    category: 'Community',
    headline: 'Lawson State Partners with Jefferson County for Workforce Pipeline Initiative',
    date: 'February 2026',
    summary: 'A new partnership connects Lawson State graduates in Mechatronics, HVAC, and Welding directly with Jefferson County employers through an accelerated hiring pathway.',
    href: '/workforce',
  },
  {
    category: 'Student Life',
    headline: 'Student Government Association Launches Cougar Connect Peer Mentoring Program',
    date: 'January 2026',
    summary: 'New and returning students can now be matched with a trained peer mentor through the SGA-led Cougar Connect initiative, which pairs students within the same major or career interest.',
    href: '/campus-life',
  },
  {
    category: 'Awards & Honors',
    headline: 'Dr. James Mitchell Named ACCS Faculty Member of the Year',
    date: 'December 2025',
    summary: 'Professor of Mathematics Dr. James Mitchell was recognized at the annual ACCS convocation for innovative teaching methods that significantly improved developmental math completion rates.',
    href: '/about',
  },
  {
    category: 'Workforce',
    headline: 'New Cybersecurity Certificate Program Launches Spring 2026',
    date: 'November 2025',
    summary: 'Lawson State is expanding its Business & IT division with a new CompTIA Security+ aligned certificate program, developed in partnership with regional employers in banking and healthcare.',
    href: '/academics?tag=business',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Academics: 'oklch(0.42 0.17 261)',
  Athletics: 'oklch(0.50 0.19 27)',
  'Student Life': 'oklch(0.45 0.18 155)',
  Community: 'oklch(0.42 0.15 285)',
  'Awards & Honors': 'oklch(0.55 0.19 78)',
  Workforce: 'oklch(0.45 0.12 220)',
}

export default function NewsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>News & Stories</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Lawson State Community College
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            NEWS & STORIES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            The latest from our campus community — student achievements, program updates, partnerships, and Cougar pride.
          </p>
        </div>
      </section>

      {/* Category filter (static — future CMS hook point) */}
      <nav aria-label="News categories" style={{ background: 'white', borderBottom: '1px solid oklch(0.92 0.01 263)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
          <ul className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat, i) => (
              <li key={cat}>
                <span
                  className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full cursor-default"
                  style={{
                    background: i === 0 ? 'oklch(0.22 0.17 261)' : 'oklch(0.95 0.03 255)',
                    color: i === 0 ? 'white' : 'oklch(0.45 0.06 263)',
                  }}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Featured story */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <Link
            href={FEATURED.href}
            className="group block rounded-3xl p-8 lg:p-10 transition-shadow hover:shadow-xl"
            style={{ background: 'oklch(0.22 0.17 261)', boxShadow: '0 4px 24px oklch(0.22 0.17 261 / 0.25)' }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', letterSpacing: '0.12em' }}
              >
                {FEATURED.category}
              </span>
              <span className="text-sm" style={{ color: 'oklch(1 0 0 / 0.50)' }}>{FEATURED.date}</span>
              <span
                className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                style={{ background: 'oklch(0.79 0.19 78 / 0.15)', color: 'oklch(0.79 0.19 78)', letterSpacing: '0.08em' }}
              >
                Featured
              </span>
            </div>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
              {FEATURED.headline}
            </h2>
            <p style={{ fontSize: 'clamp(0.92rem, 1.2vw, 1rem)', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.75, maxWidth: '72ch', marginBottom: '1.5rem' }}>
              {FEATURED.summary}
            </p>
            <span className="inline-flex items-center font-bold text-sm" style={{ color: 'oklch(0.79 0.19 78)' }}>
              {FEATURED.cta} →
            </span>
          </Link>
        </div>
      </section>

      {/* Story grid */}
      <section className="py-10 px-6 pb-16" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STORIES.map((s) => {
              const accentColor = CATEGORY_COLORS[s.category] ?? 'oklch(0.42 0.17 261)'
              return (
                <Link
                  key={s.headline}
                  href={s.href}
                  className="group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-lg"
                  style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-bold uppercase px-2.5 py-0.5 rounded-full"
                      style={{ background: `${accentColor}18`, color: accentColor, letterSpacing: '0.1em' }}
                    >
                      {s.category}
                    </span>
                    <span className="text-xs" style={{ color: 'oklch(0.60 0.03 263)' }}>{s.date}</span>
                  </div>
                  <p className="font-display font-black mb-3 leading-tight" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>
                    {s.headline}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, flex: 1 }}>
                    {s.summary}
                  </p>
                  <span className="mt-4 font-bold text-xs" style={{ color: accentColor }}>
                    Read more →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social + calendar CTA */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Stay Connected</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Follow <strong style={{ color: 'oklch(0.79 0.19 78)' }}>@lawsonstate</strong> on Facebook and Instagram for the latest updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/calendar"
              className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              View Events Calendar →
            </Link>
            <a
              href="https://facebook.com/lawsonstate"
              target="_blank"
              rel="noopener noreferrer"
              className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}
            >
              Facebook
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
