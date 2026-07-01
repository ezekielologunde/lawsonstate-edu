import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import NewsArchive from '@/components/news-archive'
import { NEWS_ARTICLES } from '@/lib/news-data'

export const metadata: Metadata = {
  title: 'News & Stories | Lawson State',
  description: 'The latest from Lawson State Community College — student achievements, program updates, partnerships, and Cougar pride.',
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
        <HeroPhoto src="https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg" alt="Lawson State campus" position="center 35%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>News & Stories</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Lawson State Community College · {NEWS_ARTICLES.length} Stories
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            NEWS & STORIES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            The latest from our campus community — student achievements, program updates, partnerships, and Cougar pride.
          </p>
        </div>
      </section>

      <NewsArchive articles={NEWS_ARTICLES} />

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
              href="https://www.facebook.com/LawsonStateCC"
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

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
