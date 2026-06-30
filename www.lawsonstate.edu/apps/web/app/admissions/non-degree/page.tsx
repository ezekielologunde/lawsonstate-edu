import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Non-Degree Seekers â€” Admissions | Lawson State',
  description:
    'Enroll at Lawson State as a non-degree seeker. Take up to 7 semester hours per semester for personal enrichment, career development, or lifelong learning.',
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
const ACTIVE = '/admissions/non-degree'

const STEPS = [
  {
    n: '1', title: 'Complete the Application',
    body: 'Fill out the free online application for general admissions. Select "Non-Degree Seeking" as your enrollment type.',
  },
  {
    n: '2', title: 'Submit Required Documents',
    body: 'Log into your application portal to view the required admissions checklist. Submit documents to the Admissions & Enrollment Services Office.',
  },
  {
    n: '3', title: 'Register for Classes',
    body: 'Once admitted, contact an advisor to register for up to 7 semester hours. Classes are available on campus, online, and in hybrid format.',
  },
]

export default function NonDegreePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative py-14 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '24vh', display: 'flex', alignItems: 'flex-end' }}>
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>â€º</span>
            <Link href="/admissions" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>â€º</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Non-Degree Seekers</span>
          </p>
          <h1 className="font-display font-black text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.025em' }}>
            NON-DEGREE SEEKERS
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <h2 className="font-display font-black text-lscc-ink mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              LEARN FOR THE JOY OF LEARNING
            </h2>
            <p className="text-lscc-muted mb-4"
              style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '54ch' }}>
              A non-degree seeking student enrolls in <strong className="text-lscc-ink">up to 7 semester hours per semester</strong> for personal enrichment â€” and who is not seeking a formal academic award.
            </p>
            <p className="text-lscc-muted mb-6"
              style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '54ch' }}>
              Reach out to Admissions if you have any questions. We are currently accepting applications for all 2025 semesters.
            </p>
            <a href="https://lawsonstate.edu/admissions/default.aspx" target="_blank" rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}>
              Apply Now â€” It&apos;s Free â†’
            </a>
          </div>

          {/* Semester dates */}
          <div className="rounded-2xl p-7" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
            <div className="font-display font-bold mb-5" style={{ fontSize: '1.05rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'oklch(0.16 0.04 261)' }}>
              Upcoming Start Dates
            </div>
            <div className="space-y-4">
              {[
                { sem: 'Summer 2025', date: 'May 21st' },
                { sem: 'Fall 2025',   date: 'August 18th' },
              ].map(s => (
                <div key={s.sem} className="flex items-center justify-between py-3 border-b"
                  style={{ borderColor: 'oklch(0 0 0 / 0.10)' }}>
                  <span className="font-semibold" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{s.sem}</span>
                  <span className="font-bold" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.97rem' }}>{s.date}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>
              Applications accepted year-round. No application fee.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            THE APPLICATION PROCESS
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
                  <h3 className="font-display font-bold text-lscc-ink mb-1" style={{ fontSize: '1.05rem' }}>
                    Step {s.n}: {s.title}
                  </h3>
                  <p className="text-lscc-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>
            GET IN TOUCH WITH ADMISSIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-2 text-lscc-ink">Birmingham Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-3">Academic Success Center, First Floor<br />3060 Wilson Road SW, Birmingham, AL 35221</div>
              <a href="tel:+12059296309" className="font-semibold text-sm block" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-6309</a>
            </div>
            <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-2 text-lscc-ink">Bessemer Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-3">Student Services Building A, Second Floor<br />1100 Ninth Avenue SW, Bessemer, AL 35022</div>
              <a href="tel:+12059293418" className="font-semibold text-sm block" style={{ color: 'oklch(0.22 0.17 261)' }}>205-929-3418</a>
            </div>
            <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-2 text-lscc-ink">Hours &amp; Contact</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-3">Monâ€“Thu: 8:00 AM â€“ 6:30 PM<br />Fri: 8:00 AM â€“ 5:00 PM</div>
              <a href="sms:+12057076422" className="font-semibold text-sm block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>Text: 205-707-6422</a>
              <a href="mailto:admissions@lawsonstate.edu" className="font-semibold text-sm block" style={{ color: 'oklch(0.22 0.17 261)' }}>admissions@lawsonstate.edu</a>
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

