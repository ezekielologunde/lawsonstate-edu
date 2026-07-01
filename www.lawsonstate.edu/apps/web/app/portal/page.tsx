'use client'

import { useState } from 'react'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

type Tab = 'new' | 'returning' | 'workforce'

const NEW_STEPS = [
  {
    step: '01',
    label: 'Apply Online',
    desc: 'Free application. Takes about 20 minutes. Apply at CollegeNet or the Lawson State portal.',
    href: '/admissions/apply',
    cta: 'Start Application →',
  },
  {
    step: '02',
    label: 'File Your FAFSA',
    desc: 'Most students receive aid. File at studentaid.gov using school code 001033. File early — aid is first-come, first-served.',
    href: '/financial-aid',
    cta: 'Financial Aid Guide →',
  },
  {
    step: '03',
    label: 'Talk to an Advisor',
    desc: 'Book a free appointment before you register. Your advisor will review your placement, program fit, and transfer credits. Walk in anytime.',
    href: '/advising',
    cta: 'Advising Center →',
  },
  {
    step: '04',
    label: 'Attend Orientation',
    desc: 'New Student Orientation (NSO) is required before your first semester. Meet advisors, set up your accounts, and leave ready to register.',
    href: '/orientation',
    cta: 'Orientation Guide →',
  },
  {
    step: '05',
    label: 'Register for Classes',
    desc: 'Follow the 7-step registration process — clear your holds, build your schedule in Banner/MyLawson, and confirm your financial aid.',
    href: '/registration',
    cta: 'Registration Steps →',
  },
]

const TOOLS = [
  { label: 'MyLawson',       desc: 'Register, view grades, pay bills, email',       href: 'https://experience.elluciancloud.com/lcc45/',           external: true },
  { label: 'Canvas LMS',     desc: 'All your online courses and assignments',        href: 'https://alabama.instructure.com',   external: true },
  { label: 'Tutor.com',      desc: 'Free 24/7 tutoring — 500+ subjects',            href: 'https://tutor.com',                     external: true },
  { label: 'Library',        desc: 'Research databases, study rooms, e-books',       href: '/library',                              external: false },
  { label: 'Bookstore',      desc: 'Birmingham Campus — 205.929.6010',              href: 'https://lawsonstatebirmingham.bkstr.com', external: true },
  { label: 'Academic Calendar', desc: 'Registration, finals, and holiday dates',   href: '/calendar',                              external: false },
  { label: 'Financial Aid',  desc: 'Check your aid status and disbursements',        href: '/financial-aid',                        external: false },
  { label: 'Help Desk',      desc: 'IT support — help@lawsonstate.edu',              href: 'mailto:help@lawsonstate.edu',            external: false },
]

const WORKFORCE_LINKS = [
  { label: 'Healthcare Programs',   desc: 'CNA, Medication Aide, CCMA, Pharmacy Tech', href: '/workforce' },
  { label: 'Customer Service',      desc: 'CSP — 8 weeks, industry partners',           href: '/workforce' },
  { label: 'Skilled Trades',        desc: 'Electrical, Welding, Automotive, Lineman',   href: '/workforce' },
  { label: 'FREE ACE Program',      desc: 'No-cost credentials + 1 college course',      href: '/workforce' },
  { label: 'Apprenticeships',       desc: '7 employer partners — earn while you learn',  href: '/workforce' },
  { label: 'All Programs',          desc: 'Browse every fast-track credential',          href: '/academics' },
]

const TAB_DATA: Record<Tab, { label: string; desc: string }> = {
  new:        { label: 'New Student',       desc: "Starting your college journey? We'll walk you step by step." },
  returning:  { label: 'Current Student',   desc: 'Already enrolled? Access all your tools and advising resources.' },
  workforce:  { label: 'Workforce / Skills', desc: 'Need a fast credential? Get job-ready in weeks, not years.' },
}

export default function PortalPage() {
  const [tab, setTab] = useState<Tab>('new')

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg" alt="A Lawson State student" position="center 35%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Gateway · Lawson State CC
          </p>
          <h1 className="font-display font-black leading-none mb-3" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', letterSpacing: '-0.025em', color: 'white' }}>
            YOUR PORTAL
          </h1>
          <p style={{ fontSize: '1.08rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '52ch' }}>
            Everything you need — from first application to graduation — in one place.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://experience.elluciancloud.com/lcc45/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center gap-2 font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.55 0.22 27)', color: 'white', fontSize: '0.95rem' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="18" height="18">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              Log In to MyLawson
              <span className="sr-only"> (Ellucian Banner — opens in new tab)</span>
            </a>
            <Link
              href="/registration"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              How to Register ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Journey selector */}
      <div style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '1px solid oklch(0.68 0.20 76)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <p className="font-display font-bold shrink-0" style={{ fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(0.11 0.03 261)' }}>
            I am a:
          </p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Student journey type">
            {(Object.entries(TAB_DATA) as [Tab, { label: string; desc: string }][]).map(([key, { label }]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className="press font-bold rounded-lg px-5 py-2 transition-all"
                style={{
                  background: tab === key ? 'oklch(0.13 0.12 261)' : 'oklch(0.11 0.03 261 / 0.15)',
                  color: tab === key ? 'oklch(0.79 0.19 78)' : 'oklch(0.11 0.03 261)',
                  fontSize: '0.88rem',
                  border: tab === key ? '2px solid oklch(0.13 0.12 261)' : '2px solid transparent',
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-sm" style={{ color: 'oklch(0.11 0.03 261 / 0.65)', fontStyle: 'italic' }}>
            {TAB_DATA[tab].desc}
          </p>
        </div>
      </div>

      {/* Tab content */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">

          {/* New student steps */}
          {tab === 'new' && (
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-5">
              {NEW_STEPS.map((s) => (
                <div key={s.step} className="card-lift rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <div className="font-display font-black mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--lscc-eyebrow)' }}>STEP {s.step}</div>
                  <h3 className="font-display font-bold mb-2" style={{ fontSize: '1.15rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</h3>
                  <p className="leading-relaxed mb-4" style={{ fontSize: '0.94rem', color: 'oklch(0.40 0.04 261)' }}>{s.desc}</p>
                  <Link href={s.href} className="link-reveal font-semibold" style={{ fontSize: '0.92rem', color: 'var(--lscc-eyebrow)' }}>
                    {s.cta}
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Returning student tools */}
          {tab === 'returning' && (
            <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TOOLS.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  target={t.external ? '_blank' : undefined}
                  rel={t.external ? 'noopener noreferrer' : undefined}
                  className="card-lift press rounded-2xl p-5 block"
                  style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>
                      {t.label}
                      {t.external && <span className="sr-only"> (opens in new tab)</span>}
                    </h3>
                    {t.external && (
                      <span aria-hidden style={{ fontSize: '0.65rem', background: 'oklch(0.95 0.03 255)', color: 'oklch(0.50 0.03 261)', padding: '0.1rem 0.4rem', borderRadius: '99px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        External
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'oklch(0.50 0.03 261)' }}>{t.desc}</p>
                </Link>
              ))}
            </div>
          )}

          {/* Workforce links */}
          {tab === 'workforce' && (
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {WORKFORCE_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="card-lift press rounded-2xl p-6 block" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <h3 className="font-display font-bold mb-1" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{l.label}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'oklch(0.50 0.03 261)' }}>{l.desc}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Advising — two tracks */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>Free · No Appointment Required for Walk-Ins</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>ADVISING SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Admission advising */}
            <div className="rounded-2xl p-8 scroll-reveal" style={{ background: 'oklch(0.22 0.17 261)' }}>
              <div className="font-display font-black mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--lscc-eyebrow-on-dark)' }}>FOR PROSPECTIVE STUDENTS</div>
              <h3 className="font-display font-bold mb-3 text-white" style={{ fontSize: '1.3rem' }}>Admission Advising</h3>
              <p className="leading-relaxed mb-6" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.72)' }}>
                Not sure where to start? Talk to an Admissions advisor before you apply. We will walk you through program options, placement, financial aid, and your next step.
              </p>
              <div className="space-y-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.70)' }}>
                <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.925.2515</div>
                <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Hours:</span> Mon–Fri 8 AM – 5 PM</div>
                <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Walk-ins:</span> Birmingham & Bessemer campuses</div>
              </div>
              <Link href="/contact" className="press btn-shimmer inline-block font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>
                Talk to Admissions →
              </Link>
            </div>

            {/* Academic advising */}
            <div className="rounded-2xl p-8 scroll-reveal" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
              <div className="font-display font-black mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.18em', color: 'var(--lscc-eyebrow)' }}>FOR ENROLLED STUDENTS</div>
              <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.3rem', color: 'oklch(0.16 0.04 261)' }}>Academic Advising</h3>
              <p className="leading-relaxed mb-6" style={{ fontSize: '0.96rem', color: 'oklch(0.40 0.04 261)' }}>
                Already enrolled? Your academic advisor helps you plan your courses, stay on track for transfer or graduation, and connect with support services on both campuses.
              </p>
              <div className="space-y-2 mb-6 text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>
                <div><span style={{ color: 'var(--lscc-eyebrow)', fontWeight: 700 }}>Phone:</span> 205.929.2113</div>
                <div><span style={{ color: 'var(--lscc-eyebrow)', fontWeight: 700 }}>Email:</span> counseling@lawsonstate.edu</div>
                <div><span style={{ color: 'var(--lscc-eyebrow)', fontWeight: 700 }}>Centers:</span> R.A.C.E. Advising · S.P.A.C.E. Center (both campuses)</div>
              </div>
              <a href="mailto:counseling@lawsonstate.edu" className="press inline-block font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>
                Email an Advisor →
              </a>
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
