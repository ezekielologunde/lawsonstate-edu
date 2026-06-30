import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const BENEFITS = [
  { title: 'Health Insurance', desc: 'Medical, dental, and vision coverage for employees and eligible dependents through the State Employees\' Insurance Board (SEIB).' },
  { title: 'Retirement', desc: 'Enrollment in the Teachers\' Retirement System of Alabama (TRS) — a defined benefit plan with employer contributions.' },
  { title: 'Tuition Assistance', desc: 'Employees and their dependents may be eligible for reduced tuition at Alabama two-year colleges and select four-year universities.' },
  { title: 'Paid Leave', desc: 'Annual, sick, and personal leave in accordance with the Alabama Community College System leave policy. State holidays observed.' },
  { title: 'Professional Development', desc: 'Funding for conferences, certifications, and continuing education to support career growth and instructional excellence.' },
  { title: 'Campus Community', desc: 'Join an HBCU with more than 50 years of legacy — a tight-knit campus committed to student success and community impact.' },
]

const CATEGORIES = [
  { title: 'Faculty Positions', desc: 'Full-time and adjunct instructor positions across all academic divisions — health sciences, business, STEM, trades, humanities, and more.', icon: '🎓' },
  { title: 'Administrative & Professional', desc: 'Positions in student services, registrar, financial aid, IT, marketing, institutional research, and executive leadership.', icon: '💼' },
  { title: 'Technical & Support Staff', desc: 'Campus safety, facilities, custodial services, food service, and skilled trades support roles on both campuses.', icon: '🔧' },
  { title: 'Temporary & Part-Time', desc: 'Adjunct faculty, student workers, grant-funded positions, and seasonal positions as needs arise throughout the year.', icon: '⏱' },
]

const STEPS = [
  { n: '01', title: 'Search Open Positions', body: 'All current vacancies are posted on the ACCS Employment portal (jobs.accs.edu). Create a profile and search for Lawson State Community College positions.' },
  { n: '02', title: 'Submit Your Application', body: 'Apply directly through the ACCS portal. Most positions require a résumé, cover letter, official transcripts (for faculty), and professional references.' },
  { n: '03', title: 'Review & Interview', body: 'Qualified applicants are contacted by Human Resources. Interviews may include a skills demonstration or teaching presentation for faculty positions.' },
  { n: '04', title: 'Background Check & Offer', body: 'Selected candidates complete a background check as required by the Alabama Community College System. Official offer letters are issued by Human Resources.' },
]

export default function CareersPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Career Opportunities</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Faculty · Staff · Administration
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            CAREER OPPORTUNITIES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Join Lawson State Community College — one of Alabama&apos;s most storied HBCUs, where more than 50 years of academic excellence meets a genuine commitment to student success and community impact.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://jobs.accs.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              View Open Positions
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/contact" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Contact HR →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Opportunities</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>POSITION CATEGORIES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CATEGORIES.map((c) => (
              <div key={c.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.75rem' }} aria-hidden>{c.icon}</span>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{c.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://jobs.accs.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-7 py-3.5 rounded-xl text-sm"
              style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
            >
              Browse All Current Openings at ACCS Portal →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Application Process</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO APPLY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Why Work Here</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>EMPLOYEE BENEFITS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.22 0.17 261)' }}>{b.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Human Resources Office</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>205.929.6301 · hr@lawsonstate.edu · Birmingham Campus</p>
          </div>
          <a
            href="https://jobs.accs.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
          >
            View Open Positions →
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
