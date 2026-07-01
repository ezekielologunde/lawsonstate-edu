// force-dynamic: the ISR build-time snapshot was baking in an empty events
// list (Vercel's build-time static generation wasn't reliably returning fresh
// Supabase data here, even though the same query works correctly at request
// time and via RLS-as-anon). Real events data matters more than shaving a
// request off a low-traffic page, so always fetch fresh per request.
export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import CalendarView from '@/components/calendar-view'
import { createServerClient } from '@/lib/supabase'
import { fetchCalendarFeed } from '@/lib/calendar-feed'

export const metadata: Metadata = {
  title: 'Upcoming Events — Lawson State',
  description:
    'Stay connected to campus life at Lawson State Community College — orientations, workshops, ceremonies, and more.',
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
    .limit(200)

  // Supabase is the richer, hand-curated source when it's working. If it
  // comes back empty (e.g. misconfigured credentials), fall back to the
  // real-time public RSS feed from the same calendar system the official
  // site uses — no credentials required, so it can't suffer the same failure.
  const events = data && data.length > 0 ? data : await fetchCalendarFeed()

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <Image
          src="https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.96) 0%, oklch(0.22 0.17 261 / 0.80) 55%, oklch(0.16 0.13 263 / 0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <p
            className="font-display font-semibold uppercase mb-3"
            style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '1.08rem', letterSpacing: '0.22em' }}
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

      <CalendarView events={events} />

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
