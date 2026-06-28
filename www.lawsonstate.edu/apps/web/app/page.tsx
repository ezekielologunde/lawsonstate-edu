export const revalidate = 3600 // 1 hour ISR

import { createServerClient, buildContentMap } from '@/lib/supabase'
import SkipToMainLink from '@/components/skip-to-main-link'
import StickyStudentNav from '@/components/sticky-student-nav'
import Nav from '@/components/nav'
import AnnouncementBanner from '@/components/announcement-banner'
import Hero from '@/components/hero'
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

  const [
    { data: programs },
    { data: featuredStory },
    { data: upcomingEvents },
    { data: pageRows },
  ] = await Promise.all([
    db.from('departments')
      .select('id, name, description, tag, href, grid_slot, image_url')
      .eq('is_featured_home', true)
      .order('display_order'),

    db.from('announcements')
      .select('id, title, excerpt, image_url, category, href, published_at')
      .eq('is_featured', true)
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(1)
      .maybeSingle(),

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

  return (
    <>
      <SkipToMainLink />
      <AnnouncementBanner />
      <Nav />
      <main id="main-content" className="mobile-nav-spacer">
        <Hero content={content.hero} />
        <StatsTicker />
        <Programs programs={programs ?? []} content={content.programs} />
        <Testimonials />
        <ValueSection />
        <AthleticsCallout />
        <Support content={content.support} />
        <NewsEvents
          featuredStory={featuredStory ?? null}
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
