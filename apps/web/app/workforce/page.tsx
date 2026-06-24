import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Workforce Development — Fast-Track Training at Lawson State',
  description:
    'Short-term, skills-focused workforce programs at Lawson State. Customer service, healthcare, manufacturing, and more — some programs are FREE. Birmingham & Bessemer, AL.',
}

const PROGRAMS = [
  {
    category: 'Healthcare',
    color: 'oklch(0.22 0.17 261)',
    items: [
      { name: 'Medication Aide', duration: '8 weeks / 100 hours', cost: '$1,300', detail: '60 theory hours + 40 clinical hours. 98% passing rate on certification exam. Evening schedule.' },
      { name: 'Pharmacy Technician Certification', duration: '16 weeks', cost: '$2,400', detail: 'Virtual campus, daytime schedule. Prepares for national certification exam.' },
      { name: 'Certified Clinical Medical Assistant (CCMA)', duration: '30 weeks', cost: '$6,275', detail: 'Hybrid blend, evening schedule. Requires: Age 18+, HS diploma/GED, TABE exam, background check, required vaccinations.' },
      { name: 'Certified Nursing Assistant (CNA)', duration: '5 weeks', cost: 'Via Adult Ed', detail: 'Offered through the Adult Education "Educate to Elevate" program.' },
    ],
  },
  {
    category: 'Customer Service',
    color: 'oklch(0.35 0.15 261)',
    items: [
      { name: 'Customer Service Professional (CSP)', duration: '8 weeks', cost: '$1,000', detail: 'Industry partners include Alabama Power, Blue Cross Blue Shield of Alabama, Protective Life, Regions Bank, and Rx Benefits.' },
    ],
  },
  {
    category: 'Biotechnology',
    color: 'oklch(0.28 0.13 261)',
    items: [
      { name: 'Biotechnician Training', duration: '4 weeks', cost: 'FREE', detail: 'Employer-sponsored program. Prepares students for entry-level biotech lab positions.' },
    ],
  },
  {
    category: 'Manufacturing & Logistics',
    color: 'oklch(0.22 0.17 261)',
    items: [
      { name: 'Certified Production Technician (CPT)', duration: 'Varies', cost: 'See office', detail: 'MSSC (Manufacturing Skill Standards Council) certification. Industry-recognized credential.' },
      { name: 'Certified Logistics Technician (CLT)', duration: 'Varies', cost: 'See office', detail: 'MSSC certification. Supply chain and logistics career pathway.' },
    ],
  },
  {
    category: 'Craft Training',
    color: 'oklch(0.28 0.13 261)',
    items: [
      { name: 'Electrical', duration: 'Varies', cost: 'See office', detail: 'Trade craft training in electrical work.' },
      { name: 'Welding', duration: 'Varies', cost: 'See office', detail: 'Trade craft training in welding techniques.' },
      { name: 'Automotive', duration: 'Varies', cost: 'See office', detail: 'Workforce-focused automotive training.' },
      { name: 'Lineman Worker Training', duration: 'Varies', cost: 'See office', detail: 'Utility line worker training for electrical infrastructure roles.' },
      { name: 'Natural Gas Utility Worker Training', duration: 'Varies', cost: 'See office', detail: 'Specialized training for the natural gas utility industry.' },
    ],
  },
]

const OUTCOMES = [
  { number: '52', label: 'Line Worker Graduates (2022)' },
  { number: '98%', label: 'Medication Aide Pass Rate' },
  { number: '7', label: 'Apprenticeship Partners' },
  { number: '25', label: 'Workforce Programs' },
]

export default function WorkforcePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.13 263 / 0.82) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>
            Fast-Track Skills Training · Bessemer Campus
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}>
            WORKFORCE DEVELOPMENT
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
            The Office of Workforce Development offers short-term, employer-aligned training programs. Get job-ready skills — fast. Some programs are completely free.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="tel:+12059296384"
              className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
            >
              Call 205.929.6384
            </a>
            <Link href="/academics" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
              Browse All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Outcome stats */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {OUTCOMES.map(o => (
            <div key={o.label} className="text-center">
              <div className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.03em' }}>{o.number}</div>
              <div className="font-semibold uppercase mt-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.11 0.03 261 / 0.6)' }}>{o.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Training Programs</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>FAST-TRACK CREDENTIALS</h2>
          </div>
          <div className="space-y-10">
            {PROGRAMS.map(cat => (
              <div key={cat.category} className="scroll-reveal">
                <h3
                  className="font-display font-black text-white rounded-xl px-5 py-3 mb-4 inline-block"
                  style={{ background: cat.color, fontSize: '1.1rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {cat.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map(item => (
                    <div
                      key={item.name}
                      className="card-lift rounded-xl p-6 shadow-card"
                      style={{ background: 'oklch(0.97 0.015 263)', border: '1px solid oklch(0.92 0.01 263)' }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="font-display font-bold text-lscc-ink leading-snug" style={{ fontSize: '1.08rem' }}>{item.name}</h4>
                        <span
                          className="shrink-0 font-black rounded-lg px-3 py-1"
                          style={{
                            background: item.cost === 'FREE' ? 'oklch(0.79 0.19 78)' : 'oklch(0.22 0.17 261)',
                            color: 'white',
                            fontSize: '0.96rem',
                          }}
                        >
                          {item.cost}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem' }}>⏱</span>
                        <span className="font-semibold text-lscc-muted" style={{ fontSize: '0.92rem' }}>{item.duration}</span>
                      </div>
                      <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.08rem' }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alabama Career Essentials */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.06 263)' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>No-Cost Program</p>
              <h2 className="font-display font-black leading-none text-white mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
                ALABAMA CAREER ESSENTIALS (ACE)
              </h2>
              <p className="text-white/75 leading-relaxed mb-6" style={{ fontSize: '1.1rem' }}>
                A completely free program that prepares you for the workforce — and gives you real credentials and college credit when you're done.
              </p>
              <a
                href="mailto:timminifield@lawsonstate.edu"
                className="press font-bold px-6 py-3 rounded-lg inline-block"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
              >
                Ask About ACE →
              </a>
            </div>
            <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎓', label: 'ACT National Career Readiness Certificate (NCRC)' },
                { icon: '📜', label: 'Alabama Certified Employee Certificate' },
                { icon: '📚', label: '1 free college course (up to 4 credit hours)' },
                { icon: '✅', label: 'Articulated credit for WKO 110 (3 credits)' },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-5" style={{ background: 'oklch(0.19 0.08 263)', border: '1px solid oklch(1 0 0 / 0.07)' }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-white/80 leading-snug" style={{ fontSize: '1.1rem' }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeships */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
                <div className="font-display font-black text-white mb-2" style={{ fontSize: '3rem', letterSpacing: '-0.04em' }}>7</div>
                <p className="text-white/75" style={{ fontSize: '1.05rem' }}>Apprenticeship Program Partners working with Lawson State students</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Earn While You Learn</p>
              <h2 className="font-display font-black leading-none text-lscc-ink mb-4" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
                APPRENTICESHIP PROGRAMS
              </h2>
              <p className="text-lscc-muted leading-relaxed mb-4" style={{ fontSize: '1.1rem' }}>
                Lawson State partners with 7 employers to offer registered apprenticeship programs — structured on-the-job training combined with classroom instruction. Earn an income while earning your credential.
              </p>
              <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.1rem' }}>
                Contact the Workforce Development office to learn which employer partners are currently hiring apprentices and whether your field of interest is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.97 0.015 263)' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)', boxShadow: '0 1px 3px oklch(0.11 0.03 261 / 0.06), 0 4px 18px oklch(0.11 0.03 261 / 0.1)' }}>
            <h2 className="font-display font-black text-lscc-ink mb-6" style={{ fontSize: '1.3rem', letterSpacing: '-0.015em' }}>Contact Workforce Development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.79 0.19 78)' }}>Contact</div>
                <p className="font-medium text-lscc-ink">Ms. Tomeka Minnifield</p>
                <a href="tel:+12059296384" className="text-lscc-muted hover:text-lscc-blue transition-colors block">205.929.6384</a>
                <a href="mailto:timminifield@lawsonstate.edu" className="text-lscc-muted hover:text-lscc-blue transition-colors block">timminifield@lawsonstate.edu</a>
              </div>
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.79 0.19 78)' }}>Location</div>
                <p className="text-lscc-muted">Millsap Building</p>
                <p className="text-lscc-muted">Bessemer Campus</p>
                <p className="text-lscc-muted">1100 Ninth Avenue SW</p>
                <p className="text-lscc-muted">Bessemer, AL 35022</p>
              </div>
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.79 0.19 78)' }}>Hours</div>
                <p className="text-lscc-muted">Monday–Friday</p>
                <p className="text-lscc-muted">8:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
