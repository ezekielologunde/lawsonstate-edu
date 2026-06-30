import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Admissions Policies & Forms | Lawson State',
  description:
    'Lawson State Community College admissions policies, procedures, and downloadable forms. Alabama Community College System policies, general admissions requirements.',
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
const ACTIVE = '/admissions/policies'

const FORMS = [
  {
    title: 'Accelerated High School Student Form',
    desc: 'Form used to determine initial High School Accelerated Enrollment student eligibility.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Admissions Appeal Form',
    desc: 'Form for re-admitted/transfer students applying to Lawson State and currently serving a suspension from another college/university.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Eligibility for In-State Residency',
    desc: 'Form used to demonstrate eligibility for in-state residency status.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Dual Enrollment Eligibility Form',
    desc: 'Form used to determine initial High School Dual Enrollment student eligibility.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Dual Enrollment Acknowledgement Form',
    desc: 'Used to ensure enrolled DE students understand semester class and enrollment requirements.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'GED Score Report Request',
    desc: 'Used to request your GED score report (only for those taken in Alabama to be sent to LSCC). Contact Ms. Streety at 205-929-3415 for assistance.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'International Student Transfer/Transient Clearance Form',
    desc: 'Required for all foreign transfer students in compliance with the Immigration and Naturalization Service regulations.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'International Affidavit of Financial Support',
    desc: 'Affidavit of financial support for international students. Must be notarized.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'International Student Medical History Form',
    desc: 'International student applicants must have a notarized copy of the medical history form mailed to the Admissions Office.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'International Student Proof of Immunization Form',
    desc: 'Used to validate that an international student applicant has received all required immunizations.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Request for Free Course Due to GED Acquisition',
    desc: 'Used to request 1 free course based on acquisition of GED on or after July 1, 2002.',
    href: 'https://lawsonstate.edu/admissions/',
  },
  {
    title: 'Transient Letter Request Form',
    desc: 'To request that a Lawson State Community College transient approval letter be forwarded to another institution.',
    href: 'https://lawsonstate.edu/admissions/',
  },
]

export default function PoliciesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Admissions Policies & Forms</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            ACCS Board Policies · Downloadable Forms
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ADMISSIONS POLICIES &amp; FORMS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Admissions policies at Lawson State are governed by the Alabama Community College System. Download the forms you need or contact the Admissions Office.
          </p>
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

      {/* Policies intro */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto max-w-3xl">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>ACCS Policies</p>
          <h2 className="font-display font-black text-lscc-ink mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            ADMISSIONS POLICIES &amp; PROCEDURES
          </h2>
          <p className="text-lscc-muted mb-5" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            Admission policies at Lawson State Community College are administered by the Division of Student Services, under the direction of the Dean of Students and the Director of Admissions & Enrollment Management.
          </p>
          <p className="text-lscc-muted mb-8" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            The Office of Admissions and Enrollment Management is responsible for interpreting and implementing Alabama Community College System Board of Trustee Policies, as well as local policies in regard to the admission of students to the college.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Alabama Community College System Policies', sub: '801.01 Admission General', href: 'https://www.accs.edu/' },
              { label: 'Board Policies & Chancellor\'s Procedures', sub: '800.00 – 801.04', href: 'https://www.accs.edu/' },
              { label: 'Admissions & Enrollment Management Manual', sub: 'Lawson State General Policies', href: 'https://lawsonstate.edu/admissions/' },
              { label: 'General Admissions Table', sub: 'What you must submit', href: 'https://lawsonstate.edu/admissions/' },
            ].map(p => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                className="rounded-xl p-5 block hover:shadow-md transition-shadow"
                style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="font-semibold text-lscc-ink mb-1" style={{ fontSize: '0.95rem' }}>{p.label}</div>
                <div className="text-sm" style={{ color: 'oklch(0.55 0.08 263)' }}>{p.sub} →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Downloadable Forms</p>
          <h2 className="font-display font-black text-lscc-ink mb-2"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            LAWSON STATE ADMISSIONS FORMS
          </h2>
          <p className="text-lscc-muted mb-8" style={{ fontSize: '0.95rem' }}>
            Download the form you need or visit the Admissions office for a paper copy.
          </p>
          <div className="space-y-3">
            {FORMS.map(f => (
              <div key={f.title}
                className="rounded-xl p-5 flex items-start justify-between gap-6"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-lscc-ink mb-0.5" style={{ fontSize: '0.97rem' }}>{f.title}</div>
                  <div className="text-sm text-lscc-muted" style={{ lineHeight: 1.6 }}>{f.desc}</div>
                </div>
                <a href={f.href} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 font-bold text-xs px-4 py-2 rounded-lg whitespace-nowrap"
                  style={{ background: 'oklch(0.42 0.17 261)', color: 'white' }}>
                  Download
                </a>
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
            <div className="text-sm text-lscc-muted leading-relaxed mb-3">3060 Wilson Road SW<br />Birmingham, AL 35221</div>
            <a href="tel:+12059296309" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-6309</a>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-bold text-lscc-ink mb-2">Bessemer Campus</div>
            <div className="text-sm text-lscc-muted leading-relaxed mb-3">1100 Ninth Avenue SW<br />Bessemer, AL 35022</div>
            <a href="tel:+12059293418" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-3418</a>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-bold text-lscc-ink mb-2">Email & Text</div>
            <a href="mailto:admissions@lawsonstate.edu" className="font-semibold text-sm block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>admissions@lawsonstate.edu</a>
            <a href="sms:+12057076422" className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>Text: 205-707-6422</a>
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
