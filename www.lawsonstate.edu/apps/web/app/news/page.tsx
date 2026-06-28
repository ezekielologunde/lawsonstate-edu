'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

type Announcement = {
  id: string
  title: string
  body: string | null
  published_at: string | null
  category: string | null
  link: string | null
}

const CATEGORIES = ['All', 'Academic', 'Campus Life', 'Financial Aid', 'Events', 'General']

export default function NewsPage() {
  const [items, setItems] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/announcements')
        if (res.ok) {
          const data = await res.json()
          setItems(data)
        }
      } catch {
        // fail silently — show static fallback below
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = filter === 'All' ? items : items.filter((i) => i.category === filter)

  function formatDate(str: string | null) {
    if (!str) return ''
    const d = new Date(str)
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.95 0.03 255)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="relative max-w-7xl mx-auto w-full">
            <p className="page-fade-1 font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>What's Happening</p>
            <h1 className="page-fade-2 font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>NEWS & ANNOUNCEMENTS</h1>
            <p className="page-fade-3 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'oklch(0.40 0.04 261)' }}>
              Stay up to date with the latest news, academic updates, and campus events from Lawson State Community College.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-6 px-6 sticky top-0 z-40" style={{ background: 'oklch(0.92 0.05 255)', borderBottom: '1px solid oklch(0 0 0 / 0.08)' }}>
          <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="press px-4 py-2 rounded-xl font-semibold text-sm transition-colors"
                style={
                  filter === cat
                    ? { background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }
                    : { background: 'white', color: 'oklch(0.40 0.04 261)', border: '1px solid oklch(0 0 0 / 0.12)' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="rounded-2xl h-56 animate-pulse" style={{ background: 'oklch(0.88 0.03 255)' }} />
                ))}
              </div>
            )}

            {!loading && filtered.length === 0 && (
              <div className="text-center py-20">
                <div className="font-display font-bold mb-3" style={{ fontSize: '1.3rem', color: 'oklch(0.16 0.04 261)' }}>No announcements yet</div>
                <p style={{ color: 'oklch(0.50 0.03 261)' }}>Check back soon or follow us on social media for the latest updates.</p>
                <div className="flex justify-center gap-4 mt-8">
                  <Link href="/calendar" className="press px-5 py-2.5 rounded-xl font-semibold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                    View Calendar →
                  </Link>
                </div>
              </div>
            )}

            {!loading && filtered.length > 0 && (
              <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    className="card-lift rounded-2xl p-7 flex flex-col"
                    style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
                  >
                    {item.category && (
                      <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-3 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>
                        {item.category}
                      </span>
                    )}
                    <h2 className="font-display font-bold mb-3 leading-snug flex-1" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{item.title}</h2>
                    {item.body && (
                      <p className="mb-4" style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.body}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid oklch(0 0 0 / 0.07)' }}>
                      <time className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'oklch(0.60 0.03 261)' }}>{formatDate(item.published_at)}</time>
                      {item.link && (
                        <a href={item.link} className="link-reveal text-xs font-bold" style={{ color: 'var(--lscc-eyebrow)' }}>Read more →</a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Calendar CTA */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>UPCOMING EVENTS</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>View registration deadlines, class schedules, and campus events on our academic calendar.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/calendar" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                View Calendar →
              </Link>
              <Link href="/campus-life" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Campus Life
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
