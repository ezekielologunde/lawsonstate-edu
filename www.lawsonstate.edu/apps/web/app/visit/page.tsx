import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import VisitPersonas from '@/components/visit-personas'
import CampusMaps from '@/components/campus-maps'

export const metadata: Metadata = {
  title: 'Visit Us | Lawson State Community College',
  description: 'Plan your visit to Lawson State Community College — campus maps, directions, and guidance for parents, adult learners, and high school students.',
}

export default function VisitPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg" alt="Lawson State Community College campus" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Visit Us</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Two Campuses · Birmingham &amp; Bessemer
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            VISIT US
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            See the campus, meet the people, and get your questions answered — in person. Find your starting point below, or jump straight to a campus map and directions.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Schedule a Visit
            </Link>
            <Link href="/orientation" className="press hero-cta-ghost inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '0.95rem' }}>
              New Student Orientation
            </Link>
          </div>
        </div>
      </section>

      {/* Persona guidance */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Your Starting Point</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>WHO&apos;S VISITING?</h2>
          </div>
          <VisitPersonas />
        </div>
      </section>

      {/* Interactive campus maps */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Find Your Way</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>CAMPUS MAPS</h2>
            <p className="mt-2 max-w-[60ch]" style={{ fontSize: '1rem', color: 'oklch(0.50 0.03 261)' }}>
              Search either campus&apos;s building directory or tap a map to zoom in — official maps, straight from campus operations.
            </p>
          </div>
          <CampusMaps />
        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
