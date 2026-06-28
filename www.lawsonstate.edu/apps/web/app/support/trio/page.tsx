import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'TRiO Programs | Lawson State Community College',
  description:
    'TRiO Student Support Services at Lawson State Community College — federally funded programs helping first-generation, low-income, and disabled students succeed. Three programs, two campuses, one mission.',
}

const PROGRAMS = [
  {
    name: 'Upward Bound',
    origin: 'Economic Opportunity Act of 1964',
    desc: 'The original TRiO program, Upward Bound helps high school students prepare for and succeed in college. It provides academic instruction, tutoring, mentoring, and college preparatory activities.',
    eligibility: 'High school students from low-income families or who would be first-generation college students.',
  },
  {
    name: 'Talent Search',
    origin: 'Higher Education Act of 1965',
    desc: 'Talent Search identifies and assists students from disadvantaged backgrounds who have the potential to succeed in higher education. It provides information about financial aid, college selection, and application assistance.',
    eligibility: 'Students in grades 6–12 from schools where at least 50% are from low-income backgrounds.',
  },
  {
    name: 'Student Support Services',
    origin: 'Higher Education Amendments of 1968',
    desc: 'SSS provides academic coaching, advising, tutoring, financial literacy workshops, and personal counseling for eligible college students already enrolled. Our goal: graduation and transfer to 4-year institutions.',
    eligibility: 'Current college students who are first-generation, low-income, or have a documented disability.',
  },
]

const MISSION_STATS = [
  { value: '3', label: 'Federal Programs' },
  { value: '2', label: 'Campuses Served' },
  { value: '1', label: 'Mission: Student Success' },
  { value: 'Free', label: 'All TRiO Services' },
]

export default function TrioPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.04 261 / 0.85) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-15%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.13) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Federal Outreach & Student Services</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>TRiO PROGRAMS</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Three Programs. Two Campuses. One Mission: Student Success. Federal TRiO programs support first-generation, low-income, and disabled students from disadvantaged backgrounds.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="stagger-grid grid grid-cols-2 md:grid-cols-4 gap-6">
              {MISSION_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-black mb-1" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div className="font-semibold uppercase tracking-wide" style={{ fontSize: '0.82rem', color: 'oklch(1 0 0 / 0.75)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>60+ Years of Impact</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>HISTORY OF TRiO</h2>
            </div>
            <div className="rounded-2xl p-8 mb-12" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
              <p className="leading-relaxed" style={{ fontSize: '1.02rem', color: 'oklch(0.35 0.04 261)' }}>
                TRiO began with <strong>Upward Bound</strong>, which emerged from the Economic Opportunity Act of 1964 in response to the War on Poverty. In 1965, <strong>Talent Search</strong> was created as part of the Higher Education Act. In 1968, <strong>Student Support Services</strong> was authorized by the Higher Education Amendments. By the late 1960s, the term &quot;TRiO&quot; was coined to describe these three federal programs designed to level the playing field in higher education.
              </p>
              <p className="leading-relaxed mt-4" style={{ fontSize: '1rem', color: 'oklch(0.40 0.04 261)' }}>
                The Federal TRiO Programs are designed to identify and provide services for individuals from disadvantaged backgrounds — helping them overcome class, social, and cultural barriers to higher education.
              </p>
            </div>
          </div>
        </section>

        {/* The 3 Programs */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>At Lawson State</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>THREE PROGRAMS</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PROGRAMS.map((p) => (
                <div key={p.name} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <span className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--lscc-eyebrow)' }}>{p.origin}</span>
                  <h3 className="font-display font-black mb-3" style={{ fontSize: '1.2rem', color: 'oklch(0.16 0.04 261)' }}>{p.name}</h3>
                  <p className="leading-relaxed mb-4 flex-1" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{p.desc}</p>
                  <div className="rounded-xl p-4" style={{ background: 'oklch(0.95 0.03 255)' }}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: 'var(--lscc-eyebrow)' }}>Eligibility</p>
                    <p style={{ fontSize: '0.88rem', color: 'oklch(0.40 0.04 261)' }}>{p.eligibility}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.16 0.04 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>APPLY FOR TRiO SERVICES</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.75)' }}>Contact us to find out if you qualify for free TRiO student support services.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:help@lawsonstate.edu" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                Contact TRiO Office →
              </a>
              <Link href="/contact" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Campus Locations
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
