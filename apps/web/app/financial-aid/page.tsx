import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Financial Aid — Tuition, Grants & Scholarships at Lawson State',
  description:
    'Tuition at Lawson State is $131/credit hour for in-state students. Explore Pell Grants, scholarships, work-study, and veterans benefits. No federal student loans.',
}

const TUITION_ROWS = [
  ['In-State Tuition', '$131 / semester hour'],
  ['Out-of-State Tuition', '$262 / credit hour'],
  ['Facilities Renewal Fee', '$15 / semester hour'],
  ['Technology Fee', '$15 / semester hour'],
  ['Special Building Fee', '$10 / semester hour'],
  ['ACCS Enhancement Fee', '$10 / semester hour'],
  ['Bond Surety Fee', '$1 / semester hour'],
  ['Student Insurance', '$10 / term'],
  ['Online/Virtual Course Fee', '$50 / course (additional)'],
]

const ROOM_BOARD = [
  ['Room & Board — Fall/Spring', '$2,380 / term'],
  ['Room & Board — Summer', '$1,190 / term'],
]

const AID_TYPES = [
  {
    type: 'Pell Grant',
    desc: 'Federal need-based grant that does not require repayment. Complete the FAFSA to determine eligibility. The Pell Grant is one of the primary sources of aid for Lawson State students.',
    badge: 'Need-Based',
    badgeColor: 'oklch(0.22 0.17 261)',
  },
  {
    type: 'Grants',
    desc: 'Need-based funding awarded through the FAFSA. Grants do not need to be repaid. FAFSA must be submitted each academic year. Lawson State awards approximately $1.5M in scholarship and grant funds annually.',
    badge: 'No Repayment',
    badgeColor: 'oklch(0.35 0.15 261)',
  },
  {
    type: 'Scholarships',
    desc: 'Merit and need-based scholarships available through the Lawson State Foundation and external partners including Athens State, Jacksonville State, Troy, UAB, and The University of Alabama.',
    badge: 'Merit & Need',
    badgeColor: 'oklch(0.22 0.17 261)',
  },
  {
    type: 'Work-Study',
    desc: 'Part-time on-campus employment for eligible students to help cover educational costs. Earn while you learn — hours are flexible around your class schedule.',
    badge: 'Employment',
    badgeColor: 'oklch(0.35 0.15 261)',
  },
  {
    type: 'Veterans Benefits',
    desc: 'Lawson State provides specialized support for veterans to navigate VA benefits. Our Veterans Services office helps decode your VA education entitlements and connect you with campus resources.',
    badge: 'Veterans',
    badgeColor: 'oklch(0.22 0.17 261)',
  },
]

const REFUND = [
  { week: 'Before classes begin', pct: '100%' },
  { week: '1st week of classes', pct: '100%' },
  { week: '2nd week of classes', pct: '75%' },
  { week: '3rd week of classes', pct: '50%' },
  { week: '4th week of classes', pct: '25%' },
  { week: '5th week and beyond', pct: '0%' },
]

const TRANSFER_SCHOLARSHIPS = [
  { school: 'University of Alabama', award: 'Up to full tuition (4 semesters)', req: '3.5 GPA, 45+ transferable hours' },
  { school: 'UAB', award: '$6,250/semester (4 semesters)', req: '3.45+ GPA with 48+ hours' },
  { school: 'Troy University', award: '$12,000/year (2 years)', req: '3.5 GPA, 45+ transferable hours' },
  { school: 'Jacksonville State', award: 'Full tuition', req: '3.5 GPA, 45+ hours, competitive' },
  { school: 'Athens State', award: 'Tuition + books + housing', req: 'STEM focus; ASSIST Program' },
]

export default function FinancialAidPage() {
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
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>2025–2026 · Grants, Scholarships & More</p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}>FINANCIAL AID</h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
            Lawson State is one of the most affordable paths to a college education. At $131/credit hour in-state, your investment goes further here.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="https://studentaid.gov/h/apply-for-aid/fafsa" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
              Complete the FAFSA
            </Link>
            <Link href="/admissions/apply" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-start gap-3">
          <span className="shrink-0 font-black text-lscc-ink" style={{ fontSize: '1rem' }}>!</span>
          <p className="font-semibold text-lscc-ink" style={{ fontSize: '1rem' }}>
            <strong>Important:</strong> Lawson State Community College does NOT participate in the federal student loan program. Students seeking loans should explore private loan options. Grants, scholarships, and work-study are available.
          </p>
        </div>
      </div>

      {/* Tuition & Fees */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>2025–2026 Academic Year</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>TUITION & FEES</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-reveal">
            <div>
              <h3 className="font-display font-bold mb-4 text-lscc-ink" style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>Per-Credit-Hour Costs</h3>
              <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid oklch(0.92 0.01 263)' }}>
                <table className="w-full">
                  <tbody>
                    {TUITION_ROWS.map((row, i) => (
                      <tr key={row[0]} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 263)' }}>
                        <td className="px-5 py-3 text-lscc-muted" style={{ fontSize: '1rem' }}>{row[0]}</td>
                        <td className="px-5 py-3 font-bold text-lscc-ink text-right" style={{ fontSize: '1rem', whiteSpace: 'nowrap' }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold mb-4 text-lscc-ink" style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>Room & Board</h3>
              <div className="overflow-hidden rounded-2xl mb-6" style={{ border: '1px solid oklch(0.92 0.01 263)' }}>
                <table className="w-full">
                  <tbody>
                    {ROOM_BOARD.map((row, i) => (
                      <tr key={row[0]} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 263)' }}>
                        <td className="px-5 py-3 text-lscc-muted" style={{ fontSize: '1rem' }}>{row[0]}</td>
                        <td className="px-5 py-3 font-bold text-lscc-ink text-right" style={{ fontSize: '1rem', whiteSpace: 'nowrap' }}>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'oklch(0.97 0.015 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <h4 className="font-display font-bold mb-2 text-lscc-ink" style={{ fontSize: '1.05rem' }}>Payment Due Date</h4>
                <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.1rem' }}>
                  Payment is due before the first day of class. A $25 late registration fee and $25 late payment fee apply for payments made after the deadline.
                </p>
              </div>
              <div className="mt-4 rounded-xl p-5" style={{ background: 'oklch(0.97 0.015 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <h4 className="font-display font-bold mb-2 text-lscc-ink" style={{ fontSize: '1.05rem' }}>Payment Plan</h4>
                <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.1rem' }}>
                  A 4-installment monthly payment plan is available through TouchNet. Contact Financial Aid for enrollment details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aid Types */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.97 0.015 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Funding Options</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>TYPES OF FINANCIAL AID</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AID_TYPES.map(a => (
              <div key={a.type} className="card-lift rounded-2xl p-6 shadow-card" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-black text-lscc-ink" style={{ fontSize: '1.05rem' }}>{a.type}</h3>
                  <span className="font-bold rounded-full px-3 py-1 text-white" style={{ fontSize: '0.76rem', letterSpacing: '0.1em', background: a.badgeColor }}>{a.badge}</span>
                </div>
                <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.1rem' }}>{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 scroll-reveal rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h3 className="font-display font-black text-white mb-2" style={{ fontSize: '1.3rem', letterSpacing: '-0.015em' }}>Start with the FAFSA</h3>
                <p className="text-white/75" style={{ fontSize: '0.92rem', maxWidth: '52ch' }}>
                  The Free Application for Federal Student Aid (FAFSA) determines your eligibility for all federal and state grants. It's free and takes about 30 minutes. Submit it as early as possible — awards are limited.
                </p>
              </div>
              <Link
                href="https://studentaid.gov/h/apply-for-aid/fafsa"
                className="press btn-shimmer font-bold px-6 py-3 rounded-lg whitespace-nowrap block text-center shrink-0"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
              >
                Complete FAFSA →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Schedule */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Withdrawal Policy</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>REFUND SCHEDULE</h2>
            <p className="text-lscc-muted mt-2" style={{ fontSize: '1.08rem' }}>If you withdraw from a course, the amount refunded depends on when you withdraw.</p>
          </div>
          <div className="scroll-reveal overflow-hidden rounded-2xl shadow-card" style={{ border: '1px solid oklch(0.92 0.01 263)', maxWidth: '36rem' }}>
            <table className="w-full">
              <thead>
                <tr style={{ background: 'oklch(0.22 0.17 261)' }}>
                  <th className="text-left px-6 py-4 font-display font-bold text-white" style={{ fontSize: '0.92rem', letterSpacing: '0.05em' }}>Withdrawal Period</th>
                  <th className="text-right px-6 py-4 font-display font-bold text-white" style={{ fontSize: '0.92rem', letterSpacing: '0.05em' }}>Refund</th>
                </tr>
              </thead>
              <tbody>
                {REFUND.map((r, i) => (
                  <tr key={r.week} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 263)' }}>
                    <td className="px-6 py-3 text-lscc-muted" style={{ fontSize: '1rem' }}>{r.week}</td>
                    <td
                      className="px-6 py-3 font-bold text-right"
                      style={{ fontSize: '1.05rem', color: r.pct === '100%' ? 'oklch(0.5 0.15 145)' : r.pct === '0%' ? 'oklch(0.5 0.2 25)' : 'oklch(0.11 0.03 261)' }}
                    >
                      {r.pct}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Transfer Scholarships */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.06 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>After Lawson State</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>TRANSFER SCHOLARSHIPS</h2>
            <p className="text-white/65 mt-2" style={{ fontSize: '1.08rem' }}>Completing your degree at Lawson State unlocks exclusive scholarship opportunities at Alabama's top universities.</p>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRANSFER_SCHOLARSHIPS.map(s => (
              <div key={s.school} className="rounded-xl p-6" style={{ background: 'oklch(0.19 0.08 263)', border: '1px solid oklch(1 0 0 / 0.07)' }}>
                <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: '1rem' }}>{s.school}</h3>
                <div className="font-bold mb-2" style={{ fontSize: '1.1rem', color: 'oklch(0.79 0.19 78)' }}>{s.award}</div>
                <div className="text-white/65" style={{ fontSize: '0.92rem' }}>{s.req}</div>
              </div>
            ))}
          </div>
          <p className="text-white/40 mt-6" style={{ fontSize: '0.92rem' }}>
            Contact the Career &amp; Transfer Office (205-929-3514) for deadlines and application requirements.
          </p>
        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
