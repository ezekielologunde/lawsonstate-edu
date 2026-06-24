import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import ProgramsFilter from '@/components/programs-filter'

export const metadata: Metadata = {
  title: 'Find Your Program — 200+ Degrees & Certificates at Lawson State',
  description: 'Filter by degree type, delivery mode, and program area to find the perfect program for your goals. Career technical, college transfer, health professions, business & IT.',
}

export default function ProgramsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-16 px-6 overflow-hidden"
        style={{ background: 'oklch(0.42 0.17 261)', minHeight: '28vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <img
          src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.42 0.17 261 / 0.96) 0%, oklch(0.42 0.17 261 / 0.80) 55%, oklch(0.42 0.17 261 / 0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full px-6">
          <p
            className="font-display font-semibold uppercase mb-3"
            style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}
          >
            Programs & Degrees
          </p>
          <h1
            className="font-display font-black text-white leading-none mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.025em' }}
          >
            FIND YOUR PATH
          </h1>
          <p className="text-white/75 max-w-2xl" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: 1.6 }}>
            Explore 200+ degrees, certificates, and training programs. Filter by credential type, how you want to learn, and your area of interest.
          </p>
        </div>
      </section>

      {/* Programs Filter */}
      <ProgramsFilter />

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
