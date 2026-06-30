import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Dual Enrollment & S.O.A.R. | Lawson State',
  description:
    'Dual enrollment at Lawson State for high school students. Earn college credit while in high school. Explore the Lawson State S.O.A.R. residential program with TMCF.',
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
const ACTIVE = '/admissions/dual-enrollment'

const MEETINGS = [
  { date: 'Tuesday, March 17', time: '5:30 PM – 6:30 PM' },
  { date: 'Wednesday, April 8', time: '5:30 PM – 6:30 PM' },
  { date: 'Tuesday, May 12', time: '5:30 PM – 6:30 PM' },
  { date: 'Wednesday, June 10', time: '5:30 PM – 6:30 PM' },
]

export default function DualEnrollmentPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Dual Enrollment</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            High School Students · College Credit · S.O.A.R.
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            DUAL ENROLLMENT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Grades 10–12 students can earn college credit at Lawson State while still in high school — over 51 courses available, and tuition may be waived through ACCS grants.
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

      {/* Dual Enrollment Intro */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Dual Enrollment Program</p>
            <h2 className="font-display font-black text-lscc-ink mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              EARN COLLEGE CREDIT IN HIGH SCHOOL
            </h2>
            <p className="text-lscc-muted mb-4" style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '54ch' }}>
              Dual Enrollment allows 10th–12th grade students to earn college credit while still in high school. Over 51 classes are available across 8+ pathways — online, virtual, or in-person.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Available to 10th–12th grade students',
                'Minimum 2.5 GPA required',
                'ACCS grant funding available — tuition may be waived',
                '51 classes across 8+ pathways',
                'Available online, virtually, or in-person',
                'Accelerated High School option for 11th–12th graders with 3.0+ GPA',
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm"
                  style={{ color: 'oklch(0.45 0.08 263)' }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', flexShrink: 0, marginTop: '0.15rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://lawsonstate.edu/admissions/default.aspx" target="_blank" rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}>
              Apply for Dual Enrollment →
            </a>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
            <div className="font-display font-bold text-lscc-ink mb-3">Required Documents</div>
            <ul className="space-y-2 text-sm text-lscc-muted">
              {[
                'Dual Enrollment Eligibility Form',
                'Official high school transcript',
                'Minimum 2.5 GPA verification',
                'Parent/guardian consent',
                'High school administrator approval',
              ].map(d => (
                <li key={d} className="flex items-start gap-2">
                  <span style={{ color: 'oklch(0.79 0.19 78)', flexShrink: 0 }}>→</span>{d}
                </li>
              ))}
            </ul>
            <Link href="/admissions/policies" className="inline-block mt-5 text-sm font-semibold"
              style={{ color: 'oklch(0.22 0.17 261)' }}>
              Download forms →
            </Link>
          </div>
        </div>
      </section>

      {/* S.O.A.R. Program */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest"
            style={{ background: 'oklch(0.79 0.19 78 / 0.15)', color: 'var(--lscc-eyebrow)', border: '1px solid oklch(0.79 0.19 78 / 0.3)' }}>
            In Partnership with TMCF
          </div>
          <h2 className="font-display font-black mb-3"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
            LAWSON STATE S.O.A.R.
          </h2>
          <p className="mb-10" style={{ color: 'oklch(0.40 0.04 261)', fontSize: '1rem', maxWidth: '58ch', lineHeight: 1.75 }}>
            Seeking, Observing and Achieving Results. Lawson State is looking for <strong style={{ color: 'oklch(0.16 0.04 261)' }}>100 dynamic rising seniors (Class of 2027)</strong> to participate in a week-long, on-campus boot camp with the Thurgood Marshall College Fund. <strong style={{ color: 'oklch(0.16 0.04 261)' }}>This program is FREE</strong> to all participants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: '📅',
                title: 'Program Dates',
                body: 'July 19 – July 24\nOne-week residential program. All participants must live on campus for the entire program.',
              },
              {
                icon: '🎓',
                title: 'Eligibility',
                body: 'Current high school juniors (Class of 2027). Must participate during the summer before senior year. Minimum 2.5 GPA required.',
              },
              {
                icon: '⏰',
                title: 'Application Deadline',
                body: 'Applications close July 5th. The application includes a Save & Continue option — students can complete it in multiple sessions.',
              },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-6"
                style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <div className="text-2xl mb-3" aria-hidden>{c.icon}</div>
                <div className="font-bold mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{c.title}</div>
                <p className="whitespace-pre-line" style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'oklch(0.40 0.04 261)' }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
            {/* Program overview */}
            <div>
              <h3 className="font-bold mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>Program Overview</h3>
              <p className="mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'oklch(0.40 0.04 261)' }}>
                SOAR provides a multi-year approach to preparing students for life beyond K-12. During Year 1, high school juniors are exposed to the vast array of opportunities following secondary education through an HBCU on-campus residential experience. Students engage with their host school throughout senior year.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'oklch(0.40 0.04 261)' }}>
                In Year 2, following high school graduation, students engage in enrichment and preparatory training for a successful transition to college or the workforce.
              </p>
              <div className="mt-5 flex gap-4 flex-wrap">
                <a href="https://lawsonstate.edu/admissions/default.aspx" target="_blank" rel="noopener noreferrer"
                  className="press btn-shimmer inline-flex items-center font-bold px-7 py-3 rounded-xl"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
                  Apply to S.O.A.R. →
                </a>
                <a href="https://www.tmcf.org/students-alumni/tmcf-soar/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center font-semibold px-7 py-3 rounded-xl transition-colors hover:bg-black/5"
                  style={{ border: '1px solid oklch(0.16 0.04 261 / 0.25)', color: 'oklch(0.16 0.04 261)', fontSize: '0.95rem' }}>
                  Learn More (TMCF) →
                </a>
              </div>
            </div>

            {/* Interest meetings */}
            <div className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
              <div className="font-bold mb-4" style={{ color: 'oklch(0.16 0.04 261)' }}>Interest Meetings</div>
              <div className="space-y-3">
                {MEETINGS.map(m => (
                  <div key={m.date} className="rounded-lg px-4 py-3"
                    style={{ background: 'oklch(0.97 0.01 263)', border: '1px solid oklch(0 0 0 / 0.10)' }}>
                    <div className="font-semibold text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{m.date}</div>
                    <div className="text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{m.time}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'oklch(0 0 0 / 0.10)' }}>
                <div className="text-xs font-semibold mb-1" style={{ color: 'oklch(0.50 0.03 261)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Questions?</div>
                <div className="text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>Mr. Dorian Waluyn</div>
                <div className="text-xs mt-0.5 mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>Executive Director of Strategic Initiatives</div>
                <a href="mailto:dwaluyn@lawsonstate.edu" className="text-sm hover:underline" style={{ color: 'var(--lscc-eyebrow)' }}>
                  dwaluyn@lawsonstate.edu
                </a>
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
