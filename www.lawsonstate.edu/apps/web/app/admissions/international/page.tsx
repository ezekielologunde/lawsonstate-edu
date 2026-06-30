import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'International Students â€” Admissions | Lawson State',
  description:
    'International student admissions at Lawson State Community College. F-1 and M-1 visa requirements, transcript evaluation, financial support, and TOEFL scores.',
}

const SUBNAV = [
  { label: 'First Time Students',               href: '/admissions/apply' },
  { label: 'Non-Degree Seekers',                href: '/admissions/non-degree' },
  { label: 'Transferring from Another College', href: '/admissions/transfer' },
  { label: 'International Students',            href: '/admissions/international' },
  { label: 'Transient Students',                href: '/admissions/transient' },
  { label: 'Admissions Policies & Forms',       href: '/admissions/policies' },
  { label: 'Dual Enrollment',                   href: '/admissions/dual-enrollment' },
  { label: 'Veterans & Military',               href: '/admissions/veterans' },
]
const ACTIVE = '/admissions/international'

const REQUIREMENTS = [
  {
    title: 'Application for General Admissions',
    body: 'All applicants must complete an application for admissions for the semester in which they plan to attend and enroll in classes.',
  },
  {
    title: 'Visa & Passport',
    body: 'A VISA recognized and accepted by the United States Government and/or a current, valid passport or other official documentation to verify lawful presence. Lawson State is authorized to admit international student applicants who hold an F-1 or M-1 visa.',
  },
  {
    title: 'International Transcript Evaluation',
    body: 'A certified original, translated, and evaluated copy of the student\'s high school transcript. Documents must be reviewed by Educational Credential Evaluators (ece.org), World Education Services (wes.org), or a member-agency of NACES (naces.org) in the United States, at the applicant\'s expense. An official report should be forwarded directly to the Admissions Office.',
  },
  {
    title: 'Statement of Financial Support',
    body: 'A signed, notarized statement verifying adequate financial support. Recent bank statements indicating sufficient funds to cover financial obligations must be included. The College offers no financial assistance or scholarships for international students.',
  },
  {
    title: 'Health & Immunization Record',
    body: 'Proof of immunization and medical history forms. Documentation demonstrating adequate health and life insurance, inclusive of a repatriation benefit. This must be maintained during all periods of enrollment.',
  },
  {
    title: 'TOEFL / IELTS Scores',
    body: 'A minimum score of 5.5 on the IELTS, or a total score of 61 on the Internet-based TOEFL, 173 on the computer-based TOEFL, or 500 on the paper-based TOEFL. Scores must be sent by ETS/TOEFL. The English exam may be waived for students from English-speaking countries including Australia, Canada, England, Ireland, Jamaica, Nigeria, and others â€” contact Admissions to verify.',
  },
  {
    title: 'Class Registration',
    body: 'F-1 visa holders must be enrolled at full-time status â€” 12 semester hours or more â€” and must make satisfactory progress in a degree program. The Bessemer Campus is not authorized to admit or enroll international students. All international student applicants must attend the Birmingham Campus.',
  },
  {
    title: 'Tuition & Fees',
    body: 'International students are assessed tuition at the out-of-state student rate â€” two times the basic in-state residential tuition rate, plus applicable technology and facility fees. Tuition and fees are subject to change. Fees are non-negotiable and non-refundable.',
  },
]

export default function InternationalPage() {
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
            <span className="mx-2" aria-hidden>â€º</span>
            <Link href="/admissions" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>â€º</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>International Students</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            F-1 &amp; M-1 Visa Â· Birmingham Campus
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            INTERNATIONAL STUDENTS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Lawson State welcomes international students pursuing F-1 or M-1 visa status. Review all requirements below â€” unconditional acceptance is required before I-20 issuance.
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

      {/* Intro */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto max-w-3xl">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>International Students</p>
          <h2 className="font-display font-black text-lscc-ink mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            WELCOME TO LAWSON STATE
          </h2>
          <p className="text-lscc-muted mb-4" style={{ fontSize: '1.02rem', lineHeight: 1.75 }}>
            Lawson State Community College expressly encourages multiculturalism through a geographically diverse student body. An international student applicant is a foreign student (F-1 or M-1) who wishes to attend Lawson State while in the USA.
          </p>
          <p className="text-lscc-muted mb-6" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            International applicants must complete all requirements below and be <strong className="text-lscc-ink">unconditionally accepted</strong> before being issued their I-20 and proceeding to class registration.
          </p>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold"
            style={{ background: 'oklch(0.97 0.012 263)', border: '1.5px solid oklch(0.79 0.19 78 / 0.3)', color: 'oklch(0.22 0.17 261)' }}>
            <span aria-hidden>ðŸ“</span>
            All international students must attend the <strong>Birmingham Campus</strong> â€” the Bessemer Campus is not authorized to enroll international students.
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Required Documents</p>
          <h2 className="font-display font-black text-lscc-ink mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            INTERNATIONAL STUDENT ADMISSIONS REQUIREMENTS
          </h2>
          <div className="space-y-4">
            {REQUIREMENTS.map((req, i) => (
              <div key={req.title} className="rounded-2xl p-6 flex gap-5 items-start"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-black"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9rem' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lscc-ink mb-1" style={{ fontSize: '1rem' }}>{req.title}</h3>
                  <p className="text-lscc-muted" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>{req.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer/Transient note */}
      <section className="py-10 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-6 max-w-3xl"
            style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <h3 className="font-bold text-lscc-ink mb-2" style={{ fontSize: '1rem' }}>
              Transient or Transfer International Students
            </h3>
            <p className="text-lscc-muted" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
              Must submit a Transient/Transfer Clearance Form signed by the foreign student advisor at the institution from which the prospective student comes. Transfer students must also submit a copy of the Form I-20 from the institution from which the student transfers, a copy of the student&apos;s VISA and Passport, and a medical health history with proof of vaccinations.
            </p>
            <Link href="/admissions/policies" className="inline-block mt-3 font-semibold text-sm"
              style={{ color: 'oklch(0.22 0.17 261)' }}>
              Download forms â†’
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Contact Us</p>
          <h2 className="font-display font-black mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
            QUESTIONS ABOUT INTERNATIONAL ADMISSIONS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            <div className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
              <div className="font-bold mb-1" style={{ color: 'oklch(0.16 0.04 261)' }}>Dr. Cyrus Vance</div>
              <div className="text-sm mb-3" style={{ color: 'var(--lscc-eyebrow)' }}>Dean of Students</div>
              <a href="mailto:cvance@lawsonstate.edu" className="text-sm block hover:underline mb-1" style={{ color: 'oklch(0.40 0.04 261)' }}>cvance@lawsonstate.edu</a>
              <a href="tel:+12059296361" className="text-sm block hover:underline" style={{ color: 'oklch(0.40 0.04 261)' }}>205-929-6361</a>
            </div>
            <div className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
              <div className="font-bold mb-1" style={{ color: 'oklch(0.16 0.04 261)' }}>Admissions Office</div>
              <div className="text-sm mb-3" style={{ color: 'var(--lscc-eyebrow)' }}>Birmingham Campus</div>
              <a href="tel:+12059296309" className="text-sm block hover:underline mb-1" style={{ color: 'oklch(0.40 0.04 261)' }}>205-929-6309</a>
              <a href="mailto:admissions@lawsonstate.edu" className="text-sm block hover:underline" style={{ color: 'oklch(0.40 0.04 261)' }}>admissions@lawsonstate.edu</a>
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

