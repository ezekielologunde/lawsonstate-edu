import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const PROGRAMS = [
  {
    name: 'Student Support Services (SSS)',
    label: 'TRiO SSS',
    desc: 'Provides academic support, personal counseling, career exploration, tutoring, financial aid advising, and cultural enrichment for qualifying students. The goal: help you persist, transfer, or graduate.',
    eligibility: [
      'First-generation college student (neither parent holds a bachelor\'s degree)',
      'Income-eligible per federal guidelines',
      'OR documented disability',
    ],
    services: ['Academic advising', 'Personal counseling', 'Tutoring referrals', 'Financial literacy workshops', 'Cultural trips and enrichment events', 'Transfer planning and college visits'],
  },
  {
    name: 'Educational Talent Search',
    label: 'TRiO ETS',
    desc: 'Serves middle and high school students in the greater Birmingham area who have the potential for postsecondary education. Prepares students for college entry through test prep, campus visits, and financial aid coaching.',
    eligibility: [
      '6th–12th grade students from target schools',
      'First-generation college student and/or income-eligible',
      'Enrolled in a target school in the service area',
    ],
    services: ['ACT/SAT prep', 'College visits', 'FAFSA workshops', 'Career exploration', 'Mentoring by college students', 'Application assistance'],
  },
]

const QUALIFY = [
  { label: 'Are you a first-generation college student?', desc: 'If neither of your parents has a four-year college degree, you qualify as first-generation.' },
  { label: 'Do you meet income guidelines?', desc: 'Federal income limits apply. Household income thresholds vary by family size. Ask TRiO to check your eligibility — it\'s free and confidential.' },
  { label: 'Do you have a documented disability?', desc: 'Students with physical, learning, or mental health disabilities may qualify regardless of income or first-gen status.' },
]

const APPLY_STEPS = [
  { n: '01', title: 'Contact TRiO', body: 'Call or visit the TRiO office on the Birmingham Campus. A counselor will walk you through the eligibility check.' },
  { n: '02', title: 'Complete an Application', body: 'Fill out the TRiO SSS intake application. You\'ll need to provide income documentation and confirm first-generation status.' },
  { n: '03', title: 'Meet Your Counselor', body: 'Once accepted, you\'re matched with a dedicated TRiO counselor who will support you throughout your time at Lawson State.' },
  { n: '04', title: 'Access Services', body: 'Attend advising sessions, workshops, tutoring, and cultural events — all free and designed around your success.' },
]

export default function TrioPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>TRiO Programs</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Federal TRIO Programs · First-Generation Students
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            TRiO PROGRAMS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Federally funded programs designed to help first-generation, low-income, and disabled students access, persist in, and complete higher education.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Contact TRiO Office
            </Link>
            <Link
              href="#eligibility"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Check Eligibility ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Two Programs</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT WE OFFER</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-7"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.05)' }}
              >
                <span
                  className="inline-block font-bold uppercase text-xs px-3 py-0.5 rounded-full mb-3"
                  style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.1em' }}
                >
                  {p.label}
                </span>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>{p.name}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{p.desc}</p>

                <div className="rounded-xl p-4 mb-4" style={{ background: 'oklch(0.95 0.03 255)' }}>
                  <p className="font-bold text-xs uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Eligibility</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.eligibility.map((e) => (
                      <li key={e} className="flex gap-2 text-xs" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.55 }}>
                        <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-xs uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Services Include</p>
                  <div className="flex flex-wrap gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full px-3 py-1 font-medium"
                        style={{ background: 'oklch(0.79 0.19 78 / 0.10)', color: 'oklch(0.42 0.15 78)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Am I Eligible?</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>QUALIFY IF YOU ARE...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {QUALIFY.map((q) => (
              <div
                key={q.label}
                className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{q.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{q.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm" style={{ color: 'oklch(0.50 0.04 261)' }}>
            Not sure if you qualify? <Link href="/contact" className="underline hover:no-underline" style={{ color: 'oklch(0.42 0.17 261)' }}>Contact the TRiO office</Link> — the intake process is free and we welcome all inquiries.
          </p>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Getting Started</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO JOIN TRiO</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLY_STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>TRiO Student Support Services</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              205.929.6454 · trio@lawsonstate.edu · Birmingham Campus
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Contact TRiO
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
