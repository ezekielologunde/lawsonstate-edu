import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'How to Apply — First Time Students | Lawson State',
  description:
    'Apply to Lawson State Community College. Free online application, rolling admissions. Follow four steps to complete your general admissions process.',
}

const STEPS = [
  {
    n: '1',
    title: 'Complete the Application',
    body: 'Our online application process is free and easy to complete. Complete your free general admissions application and review the General Admissions Table to see what you must submit.',
    extras: [
      { label: 'Start your free application', href: 'https://lawsonstate.edu/admissions/default.aspx' },
      { label: 'Contact an Enrollment Specialist', href: '#specialists' },
    ],
  },
  {
    n: '2',
    title: 'Submit Required Admissions Documents',
    body: 'Log back into your Lawson State Application portal to view the required admissions checklist. These documents must be submitted to the Admissions & Enrollment Services Office to complete your general admissions process.',
    extras: [
      { label: 'Log in to your Application Portal', href: 'https://lawsonstate.edu/admissions/default.aspx' },
    ],
  },
  {
    n: '3',
    title: 'Submit Official Transcripts',
    body: 'Submit your final high school transcript by mail (ATTN: ADMISSIONS) or email to admissions@lawsonstate.edu. If you earned your GED, request your official GED score report. If applicable, submit official transcripts from all previously attended colleges or universities.',
    note: 'Students with a conferred bachelor\'s degree need only submit an official transcript from the degree-granting institution.',
    extras: [],
  },
  {
    n: '4',
    title: 'Confirm Your Admission Status',
    body: 'Log back into your Lawson State Application Portal and confirm that all admissions requirements are complete. You will receive a communication confirming your acceptance status.',
    extras: [
      { label: 'Log in to Application Portal', href: 'https://lawsonstate.edu/admissions/default.aspx' },
    ],
  },
]

const SPECIALISTS = [
  { name: 'Katrina Harrell', initials: 'KH' },
  { name: 'Raquel Smith',    initials: 'RS' },
  { name: 'Tracy Spence',    initials: 'TS' },
]

const NEXT_STEPS = [
  { title: 'Paying for College',  desc: 'Explore grants, scholarships, and financial aid options to fund your education.', href: '/financial-aid' },
  { title: 'Registration',        desc: 'Connect with an advisor and begin the class registration process once accepted.', href: '/registration' },
  { title: 'Orientation',         desc: 'Complete My Lawson New Student Orientation and attend Connection Days on campus.', href: '/orientation' },
]

const SUBNAV = [
  { label: 'First Time Students',          href: '/admissions/apply' },
  { label: 'Non-Degree Seekers',           href: '/admissions/non-degree' },
  { label: 'Transferring from Another College', href: '/admissions/transfer' },
  { label: 'International Students',       href: '/admissions/international' },
  { label: 'Transient Students',           href: '/admissions/transient' },
  { label: 'Admissions Policies & Forms',  href: '/admissions/policies' },
  { label: 'Dual Enrollment',              href: '/admissions/dual-enrollment' },
  { label: 'Veterans & Military',          href: '/admissions/veterans' },
]

export default function ApplyPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>First Time Students</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Free Application · Rolling Admissions
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            HOW TO APPLY
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Our online application is free and takes minutes. Follow four steps to complete your admissions process and get started at Lawson State.
          </p>
        </div>
      </section>

      {/* Subnav */}
      <nav aria-label="How to Apply navigation" className="border-b overflow-x-auto"
        style={{ background: 'white', borderColor: 'oklch(0.92 0.01 263)' }}>
        <ul className="max-w-7xl mx-auto px-6 flex gap-0 min-w-max">
          {SUBNAV.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block py-4 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
                style={{
                  borderColor: href === '/admissions/apply' ? 'oklch(0.79 0.19 78)' : 'transparent',
                  color: href === '/admissions/apply' ? 'oklch(0.22 0.17 261)' : 'oklch(0.45 0.08 263)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Intro + Quote */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>First Time Students</p>
            <h2 className="font-display font-black text-lscc-ink mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
              TAKE THE FIRST STEP TOWARD YOUR FUTURE
            </h2>
            <p className="text-lscc-muted mb-4" style={{ fontSize: '1.02rem', lineHeight: 1.75, maxWidth: '54ch' }}>
              Determine what type of applicant you are and follow the steps to apply. Reach out to Admissions if you have any questions — we are currently accepting applications.
            </p>
            <p className="font-semibold text-lscc-muted mb-6" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '54ch' }}>
              Our online application process is <strong className="text-lscc-ink">free and easy to complete.</strong> If you need help, reach out to us. We are here to help!
            </p>
            <a
              href="https://lawsonstate.edu/admissions/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}
            >
              Apply Now — It&apos;s Free →
            </a>
          </div>

          {/* Student quote */}
          <blockquote
            className="rounded-2xl p-8"
            style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
          >
            <div aria-hidden className="text-3xl mb-4" style={{ color: 'var(--lscc-eyebrow)' }}>"</div>
            <p className="mb-5" style={{ fontSize: '1rem', lineHeight: 1.75, color: 'oklch(0.16 0.04 261)' }}>
              Applying to college can be scary. Lawson State made it easy for me.
            </p>
            <footer>
              <div className="font-bold text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>Kenmia Boware</div>
              <div className="text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>Criminal Justice Major</div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Step-by-Step</p>
          <h2 className="font-display font-black text-lscc-ink mb-10" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            THE APPLICATION PROCESS
          </h2>
          <p className="text-lscc-muted mb-10 -mt-6" style={{ fontSize: '0.95rem', maxWidth: '60ch' }}>
            Lawson State is currently accepting applicants for upcoming semesters. Paper copy of applications available upon request.
          </p>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl p-7 flex gap-6 items-start"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-display font-black text-lg"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                  {s.n}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lscc-ink mb-2" style={{ fontSize: '1.1rem' }}>
                    Step {s.n}: {s.title}
                  </h3>
                  <p className="text-lscc-muted mb-3" style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>{s.body}</p>
                  {s.note && (
                    <p className="text-sm italic mb-3 px-4 py-3 rounded-lg"
                      style={{ color: 'oklch(0.45 0.08 263)', background: 'oklch(0.97 0.012 263)', borderLeft: '3px solid oklch(0.79 0.19 78)' }}>
                      {s.note}
                    </p>
                  )}
                  {s.extras.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      {s.extras.map(e => (
                        <a key={e.href} href={e.href}
                          className="text-sm font-semibold transition-colors hover:underline"
                          style={{ color: 'oklch(0.22 0.17 261)' }}>
                          {e.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Acceptance status explainer */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Conditional Acceptance',
                body: 'Students who have not submitted all required documentation will be admitted as conditional status. Failure to provide documentation by the end of the first semester will prevent future registration and official transcript release.',
                accent: 'oklch(0.65 0.18 55)',
              },
              {
                title: 'Unconditional Acceptance',
                body: 'Students who have submitted all required documentation will be admitted unconditionally and may register for classes without restriction.',
                accent: 'oklch(0.55 0.16 160)',
              },
            ].map(a => (
              <div key={a.title} className="rounded-xl p-6"
                style={{ background: 'white', border: `1.5px solid ${a.accent}30` }}>
                <div className="font-bold mb-2" style={{ fontSize: '1rem', color: a.accent }}>{a.title}</div>
                <p className="text-lscc-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Specialists */}
      <section id="specialists" className="py-16 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-3"
            style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.85rem', letterSpacing: '0.22em' }}>
            Here to Help You
          </p>
          <h2 className="font-display font-black mb-3"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
            MEET YOUR ENROLLMENT SPECIALISTS
          </h2>
          <p className="mb-10" style={{ color: 'oklch(0.40 0.04 261)', fontSize: '0.96rem', maxWidth: '56ch' }}>
            Your Enrollment Specialist is here to assist you through the admissions and enrollment process. Contact them any time you need help beginning your academic journey.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {SPECIALISTS.map(s => (
              <div key={s.name} className="rounded-2xl p-6 flex items-center gap-4"
                style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-lg"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                  {s.initials}
                </div>
                <div>
                  <div className="font-bold" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.name}</div>
                  <div className="text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>Enrollment Specialist</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>After Acceptance</p>
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            NEXT STEPS AFTER ACCEPTANCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NEXT_STEPS.map(ns => (
              <Link key={ns.href} href={ns.href}
                className="group rounded-2xl p-7 block transition-all hover:shadow-lg"
                style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <h3 className="font-display font-bold text-lscc-ink mb-2 group-hover:text-lscc-gold transition-colors"
                  style={{ fontSize: '1.05rem' }}>
                  {ns.title}
                </h3>
                <p className="text-lscc-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>{ns.desc}</p>
                <span className="font-semibold text-sm" style={{ color: 'oklch(0.22 0.17 261)' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            GET IN TOUCH WITH ADMISSIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Birmingham */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-3 text-lscc-ink">Birmingham Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-4">
                Academic Success Center, First Floor<br />
                3060 Wilson Road, SW<br />
                Birmingham, AL 35221
              </div>
              <a href="tel:+12059296309" className="font-semibold text-sm hover:underline block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>
                📞 205-929-6309
              </a>
              <a href="mailto:admissions@lawsonstate.edu" className="font-semibold text-sm hover:underline" style={{ color: 'oklch(0.22 0.17 261)' }}>
                ✉ admissions@lawsonstate.edu
              </a>
            </div>

            {/* Bessemer */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-3 text-lscc-ink">Bessemer Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-4">
                Student Services Building A<br />
                Second Floor Lobby – Admissions Desk<br />
                1100 Ninth Avenue SW, Bessemer, AL 35022
              </div>
              <a href="tel:+12059293418" className="font-semibold text-sm hover:underline block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>
                📞 205-929-3418
              </a>
              <a href="sms:+12057076422" className="font-semibold text-sm hover:underline" style={{ color: 'oklch(0.22 0.17 261)' }}>
                💬 Text: 205-707-6422
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-3 text-lscc-ink">Office Hours</div>
              <div className="space-y-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'oklch(0.79 0.19 78)' }}>Mon – Thu</div>
                  <div className="text-lscc-ink font-medium text-sm">8:00 AM – 6:30 PM</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: 'oklch(0.79 0.19 78)' }}>Friday</div>
                  <div className="text-lscc-ink font-medium text-sm">8:00 AM – 5:00 PM</div>
                </div>
                <div className="text-xs mt-3" style={{ color: 'oklch(0.55 0.05 263)' }}>All times Central Standard Time (CST)</div>
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
