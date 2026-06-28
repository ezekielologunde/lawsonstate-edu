import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Transferring from Another College — Admissions | Lawson State',
  description:
    'Transfer to Lawson State Community College. Most credits transfer. Learn about transfer requirements, credit evaluation, and the Alabama STARS system.',
}

const SUBNAV = [
  { label: 'First Time Students',               href: '/admissions/apply' },
  { label: 'Non-Degree Seekers',                href: '/admissions/non-degree' },
  { label: 'Transferring from Another College', href: '/admissions/transfer' },
  { label: 'International Students',            href: '/admissions/international' },
  { label: 'Transient Students',                href: '/admissions/transient' },
  { label: 'Admissions Policies & Forms',       href: '/admissions/policies' },
  { label: 'Dual Enrollment',                   href: '/admissions/dual-enrollment' },
]
const ACTIVE = '/admissions/transfer'

const STEPS = [
  { n: '1', title: 'Complete the Application', body: 'Fill out the free online application for general admissions. Select your intended program and specify that you are a transfer student.' },
  { n: '2', title: 'Submit Required Documents', body: 'Log into your application portal to view the required admissions checklist and submit all necessary documents.' },
  { n: '3', title: 'Send Official Transcripts', body: 'Request official transcripts from ALL previously attended colleges or universities be sent directly to Lawson State. Students with a conferred bachelor\'s degree need only submit a transcript from the degree-granting institution.' },
  { n: '4', title: 'Confirm Your Admission Status', body: 'Log back into your application portal to verify all requirements are complete and receive your acceptance decision.' },
]

const REQUIREMENTS = [
  'Official transcripts required from ALL previously attended colleges',
  'D grades from other institutions are not accepted for transfer credit',
  'Transfer GPA below 2.0 results in Academic Probation status at enrollment',
  'At least 25% of total credit hours must be completed at Lawson State',
  'Credit for AP, CLEP, DANTES, or military coursework accepted (up to 25% of program hours)',
  'Alabama Transfers / STARS system protects community college credits statewide',
]

export default function TransferPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative py-14 px-6 overflow-hidden"
        style={{ background: 'oklch(0.42 0.17 261)', minHeight: '24vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.42 0.17 261 / 0.97) 0%, oklch(0.38 0.15 263 / 0.75) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Transferring from Another College</span>
          </p>
          <h1 className="font-display font-black text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.025em' }}>
            TRANSFER STUDENTS
          </h1>
        </div>
      </section>

      {/* Subnav */}
      <nav aria-label="How to Apply navigation" className="border-b overflow-x-auto"
        style={{ background: 'white', borderColor: 'oklch(0.92 0.01 263)' }}>
        <ul className="max-w-7xl mx-auto px-6 flex gap-0 min-w-max">
          {SUBNAV.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}
                className="inline-block py-4 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
                style={{
                  borderColor: href === ACTIVE ? 'oklch(0.79 0.19 78)' : 'transparent',
                  color: href === ACTIVE ? 'oklch(0.22 0.17 261)' : 'oklch(0.45 0.08 263)',
                }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Intro */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <h2 className="font-display font-black text-lscc-ink mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              YOUR HOME AWAY FROM HOME
            </h2>
            <p className="text-lscc-muted mb-6" style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '54ch' }}>
              Lawson State is a great place to continue your education after attending another college or university. Most credits transfer — follow the steps below to get started.
            </p>
            <a href="https://lawsonstate.edu/admissions/default.aspx" target="_blank" rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}>
              Apply as a Transfer Student →
            </a>
          </div>

          {/* Requirements */}
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-display font-bold text-lscc-ink mb-4">Transfer Requirements</div>
            <ul className="space-y-2.5">
              {REQUIREMENTS.map(r => (
                <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(0.45 0.08 263)' }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            THE TRANSFER APPLICATION PROCESS
          </h2>
          <div className="space-y-5">
            {STEPS.map(s => (
              <div key={s.n} className="rounded-2xl p-6 flex gap-5 items-start"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-lg"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lscc-ink mb-1" style={{ fontSize: '1.05rem' }}>Step {s.n}: {s.title}</h3>
                  <p className="text-lscc-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-bold text-lscc-ink mb-2">Birmingham Campus</div>
            <div className="text-sm text-lscc-muted leading-relaxed mb-3">3060 Wilson Road SW, Birmingham, AL 35221</div>
            <a href="tel:+12059296309" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-6309</a>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-bold text-lscc-ink mb-2">Bessemer Campus</div>
            <div className="text-sm text-lscc-muted leading-relaxed mb-3">1100 Ninth Avenue SW, Bessemer, AL 35022</div>
            <a href="tel:+12059293418" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-3418</a>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-bold text-lscc-ink mb-2">Hours</div>
            <div className="text-sm text-lscc-muted mb-3">Mon–Thu: 8:00 AM – 6:30 PM<br />Fri: 8:00 AM – 5:00 PM</div>
            <a href="mailto:admissions@lawsonstate.edu" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>admissions@lawsonstate.edu</a>
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
