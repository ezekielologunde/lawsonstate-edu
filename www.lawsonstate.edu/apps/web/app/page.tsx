export const revalidate = 3600 // 1 hour ISR

import { createServerClient, buildContentMap } from '@/lib/supabase'
import { NEWS_ARTICLES } from '@/lib/news-data'
import { FEATURED_PROGRAMS_FALLBACK } from '@/lib/featured-programs-fallback'
import SkipToMainLink from '@/components/skip-to-main-link'
import StickyStudentNav from '@/components/sticky-student-nav'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import PathwayCards from '@/components/pathway-cards'
import Programs from '@/components/programs'
import Support from '@/components/support'
import NewsEvents from '@/components/news-events'
import StatsTicker from '@/components/stats-ticker'
import Testimonials from '@/components/testimonials'
import ValueSection from '@/components/value-section'
import AthleticsCallout from '@/components/athletics-callout'
import ActionStrip from '@/components/action-strip'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

import HBCUPopup from '@/components/hbcu-popup'

export default async function Home() {
  const db = createServerClient()
  const today = new Date().toISOString().split('T')[0]

  // "What's Happening" pulls from the real, complete news archive (108 articles,
  // kept current with the live site) rather than the Supabase `announcements`
  // table, which only ever has a handful of admin-entered rows — this is the
  // same single source of truth used by /news.
  const stories = [...NEWS_ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4)
    .map(a => ({
      id: a.slug,
      title: a.title,
      excerpt: a.excerpt,
      image_url: a.image,
      category: a.category,
      href: `/news/${a.slug}`,
      published_at: a.date,
    }))

  const [
    { data: programs },
    { data: upcomingEvents },
    { data: pageRows },
  ] = await Promise.all([
    db.from('departments')
      .select('id, name, description, tag, href, grid_slot, image_url')
      .eq('is_featured_home', true)
      .order('display_order'),

    db.from('events')
      .select('id, title, event_date, href')
      .eq('is_published', true)
      .gte('event_date', today)
      .order('event_date')
      .order('sort_order')
      .limit(7),

    db.from('page_content')
      .select('section, key, value')
      .eq('page_slug', 'home'),
  ])

  const content = buildContentMap(pageRows ?? [])

  // Supabase can come back empty in Production due to env var misconfiguration
  // (same issue as the calendar) — fall back to the real featured-program data
  // instead of letting the section silently collapse to the generic teaser.
  const featuredPrograms = programs && programs.length > 0 ? programs : FEATURED_PROGRAMS_FALLBACK

  return (
    <>
      <SkipToMainLink />
      <Nav />
      <main id="main-content" className="mobile-nav-spacer">
        <Hero content={content.hero} />
        <StatsTicker />
        <PathwayCards />
        <Programs programs={featuredPrograms} content={content.programs} />
        <Testimonials />
        <ValueSection />
        <AthleticsCallout />
        <Support content={content.support} />
        <NewsEvents
          stories={stories}
          events={upcomingEvents ?? []}
        />
        <ActionStrip />
        <Prefooter content={content.prefooter} />
      </main>
      <SiteFooter />
      <MobileBottomNav />
      <StickyStudentNav />
      <HBCUPopup />
    </>
  )
}
