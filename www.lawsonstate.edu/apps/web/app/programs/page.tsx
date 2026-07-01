import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <Image
          src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg"
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
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.96) 0%, oklch(0.22 0.17 261 / 0.80) 55%, oklch(0.18 0.15 262 / 0.55) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <p
            className="font-display font-semibold uppercase mb-3"
            style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '1.08rem', letterSpacing: '0.22em' }}
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

      {/* Editorial band — orientation for BROWSERS before they reach the finder:
          quick stats + jump-into-a-division cards (deep-link the filter via ?area=). */}
      <section className="py-10 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-x-9 gap-y-3 mb-8">
            {[
              ['200+', 'Programs & credentials'],
              ['4', 'Academic divisions'],
              ['$131', 'Per credit hour — in-state'],
              ['100%', 'AGSC transfer-ready'],
            ].map(([v, l]) => (
              <div key={l} className="flex items-baseline gap-2">
                <span className="font-display font-black" style={{ fontSize: '1.8rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}>{v}</span>
                <span className="font-semibold uppercase" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'oklch(0.42 0.04 261)' }}>{l}</span>
              </div>
            ))}
          </div>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.76rem', letterSpacing: '0.2em' }}>Jump into a division</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Health Professions', desc: 'Nursing, Dental, EMS, Pharmacy Tech', href: '/programs?area=health-professions' },
              { name: 'Business & IT',       desc: 'Accounting, CIS, Cybersecurity, Admin', href: '/programs?area=business-it' },
              { name: 'Trades & CTE',        desc: 'Welding, HVAC, Automotive, Mechatronics', href: '/programs?area=career-technical' },
              { name: 'College Transfer',    desc: 'Finish two years, transfer to a university', href: '/programs?area=college-transfer' },
            ].map((d) => (
              <Link key={d.name} href={d.href} className="press group flex flex-col rounded-2xl p-5 transition-shadow hover:shadow-md" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{d.name}</p>
                <p style={{ fontSize: '0.8rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.5, marginBottom: '0.75rem' }}>{d.desc}</p>
                <span className="mt-auto inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>Filter programs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Filter — Suspense required: it reads useSearchParams for ?area deep-links */}
      <Suspense fallback={<div style={{ minHeight: '40vh', background: 'oklch(0.95 0.03 255)' }} aria-hidden />}>
        <ProgramsFilter />
      </Suspense>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
