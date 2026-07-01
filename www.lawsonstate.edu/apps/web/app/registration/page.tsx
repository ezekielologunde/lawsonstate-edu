import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Class Registration | Lawson State',
  description: 'Register for classes at Lawson State Community College. Seven-step process: advisor, holds, schedule, Banner, verify, pay, and technology setup.',
}

// ── Data ─────────────────────────────────────────────────────────

const STEPS = [
  {
    n: 1,
    title: 'Meet With Your Advisor',
    body: 'Before anything else, connect with your academic advisor. They will review your placement scores, confirm your program of study, and build a course plan that fits your goals.',
    cta: { label: 'Book an Advising Appointment', href: '/advising/book', external: false },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    n: 2,
    title: 'Clear All Holds',
    body: 'Financial, academic, or administrative holds block registration. Log in to My Lawson to see any holds on your account, then contact the appropriate office to resolve them before your registration date.',
    cta: { label: 'Log In to My Lawson', href: 'https://experience.elluciancloud.com/lcc45/', external: true },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    n: 3,
    title: 'Review the Course Schedule',
    body: 'Search available courses by subject, time of day, campus location, or delivery method (in-person, online, or hybrid). Courses run at both the Birmingham and Bessemer campuses, and fully online through Canvas.',
    cta: { label: 'Browse Course Schedule', href: 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON', external: true },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    n: 4,
    title: 'Register in Banner / My Lawson',
    body: 'Add courses to your schedule in Banner Self-Service — either directly at the ACCS registration site or after logging in through the MyLawson portal. Registration opens several weeks before each semester — current students get priority access before general registration.',
    cta: { label: 'Open Class Registration', href: 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON', external: true },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    n: 5,
    title: 'Verify Your Schedule',
    body: 'After enrolling, confirm your course section numbers, meeting times, campus locations, and total credit hours. Full-time is 12+ credits per semester. Verify your schedule matches your advisor-approved plan.',
    cta: { label: 'Check Academic Calendar', href: '/calendar', external: false },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    n: 6,
    title: 'Confirm Payment or Financial Aid',
    body: 'After registering, confirm your financial aid award covers your balance — or arrange a payment plan through the Bursar\'s Office. Unpaid balances result in removal from courses before the semester begins.',
    cta: { label: 'Financial Aid Options', href: '/financial-aid', external: false },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    n: 7,
    title: 'Set Up Your Student Technology',
    body: 'Activate your Lawson State email, log in to Canvas for your course materials, and get your student ID card from campus. All student communications — including class updates — go to your LSCC email.',
    cta: { label: 'IT Help Desk', href: 'mailto:help@lawsonstate.edu', external: true },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="26" height="26">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
]

const QUICK_LINKS = [
  { label: 'MyLawson Portal', note: 'Log in · holds · add/drop', href: 'https://experience.elluciancloud.com/lcc45/', external: true },
  { label: 'Register / Class Schedule', note: 'Search & add classes', href: 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON', external: true },
  { label: 'Book Advising', note: 'Free · no wait list', href: '/advising/book', external: false },
  { label: 'New Student Orientation', note: 'Required before you register', href: '/orientation', external: false },
  { label: 'Academic Calendar', note: 'Registration dates & deadlines', href: '/calendar', external: false },
  { label: 'Financial Aid', note: 'FAFSA · grants · payment plans', href: '/financial-aid', external: false },
]

const NEED_TO_KNOW = [
  { title: 'Placement Testing', body: 'Most new students take the ACCUPLACER before registering. Your scores determine which English and Math courses you are eligible for. Testing is free and available on both campuses.' },
  { title: 'Registration Dates', body: 'Priority registration opens for current students first, followed by general registration. Check the academic calendar for specific open dates each semester.', href: '/calendar', cta: 'View Academic Calendar' },
  { title: 'Credit Load', body: 'Full-time students carry 12 or more credit hours per semester. Part-time is 11 credits or fewer. Financial aid eligibility — including Pell Grant — is tied to your enrollment status.' },
  { title: 'Waitlisting', body: 'If a course is full, join the waitlist in My Lawson. When a seat opens, you must log back in and confirm enrollment or the seat passes to the next student on the list.' },
]

// ── Page ─────────────────────────────────────────────────────────

export default function RegistrationPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative px-6 overflow-hidden" style={{ background: 'oklch(0.22 0.17 261)', minHeight: '32vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '3.5rem' }}>
        <HeroPhoto src="https://www.lawsonstate.edu/news/Drive_In_Registration_ART.jpg" alt="Drive-in registration at Lawson State" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Registration</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.80rem', letterSpacing: '0.22em' }}>
            Advising · Scheduling · Enrollment
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            REGISTER FOR<br />CLASSES
          </h1>
          <p style={{ fontSize: 'clamp(0.96rem, 1.4vw, 1.08rem)', color: 'oklch(1 0 0 / 0.68)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Seven steps from accepted to enrolled — with your advisor, your schedule, and your aid in place before day one.
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <div style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '1px solid oklch(0.68 0.20 76)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {QUICK_LINKS.map(link => (
              link.external
                ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all hover:scale-[1.02]" style={{ background: 'oklch(0.13 0.12 261)', color: 'oklch(0.79 0.19 78)' }}>
                    <span className="font-bold" style={{ fontSize: '0.83rem' }}>{link.label}</span>
                    <span className="hidden sm:inline" style={{ fontSize: '0.73rem', color: 'oklch(1 0 0 / 0.45)' }}>{link.note}</span>
                  </a>
                : <Link key={link.label} href={link.href} className="press flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all hover:scale-[1.02]" style={{ background: 'oklch(0.13 0.12 261)', color: 'oklch(0.79 0.19 78)' }}>
                    <span className="font-bold" style={{ fontSize: '0.83rem' }}>{link.label}</span>
                    <span className="hidden sm:inline" style={{ fontSize: '0.73rem', color: 'oklch(1 0 0 / 0.45)' }}>{link.note}</span>
                  </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 7-Step Visual Flow */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Step-by-Step Process</p>
          <h2 className="font-display font-black leading-none mb-10" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW REGISTRATION WORKS</h2>

          {/* Step tracker */}
          <div className="mb-10 hidden sm:flex items-center" aria-hidden>
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex items-center flex-1 min-w-0">
                <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-display font-black" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.88rem' }}>{s.n}</div>
                {i < STEPS.length - 1 && <div className="flex-1 h-0.5 mx-1" style={{ background: 'oklch(0.22 0.17 261 / 0.18)' }} />}
              </div>
            ))}
          </div>

          {/* Step cards — vertical timeline on mobile, 2-col on desktop */}
          <div className="relative">
            {/* Vertical connector line (mobile) */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 sm:hidden" style={{ background: 'oklch(0.22 0.17 261 / 0.15)' }} aria-hidden />

            <div className="space-y-5">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-5 items-start">
                  {/* Mobile: step badge on left timeline */}
                  <div className="sm:hidden shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-black relative z-10" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.88rem' }}>
                    {s.n}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}>
                    <div className="flex items-start gap-5 p-6">
                      {/* Desktop: step number + icon block */}
                      <div className="hidden sm:flex shrink-0 flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)' }}>
                          {s.icon}
                        </div>
                        <span className="font-display font-black" style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: 'oklch(0.65 0.03 261)', textTransform: 'uppercase' }}>Step {s.n}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-black mb-2" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.01em' }}>
                          <span className="sm:hidden" style={{ color: 'var(--lscc-eyebrow)', marginRight: '0.4em', fontSize: '0.85rem' }}>Step {s.n}:</span>
                          {s.title}
                        </h3>
                        <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.75 }}>{s.body}</p>
                        {s.cta.external
                          ? <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-bold transition-opacity hover:opacity-70" style={{ fontSize: '0.84rem', color: 'var(--lscc-eyebrow)' }}>
                              {s.cta.label} →
                            </a>
                          : <Link href={s.cta.href} className="inline-block mt-4 font-bold transition-opacity hover:opacity-70" style={{ fontSize: '0.84rem', color: 'var(--lscc-eyebrow)' }}>
                              {s.cta.label} →
                            </Link>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need to Know */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Key Information</p>
          <h2 className="font-display font-black leading-none mb-10" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT YOU NEED TO KNOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NEED_TO_KNOW.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 263)', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7 }}>{item.body}</p>
                {item.href && (
                  <Link href={item.href} className="inline-block mt-3 font-bold hover:opacity-70 transition-opacity" style={{ fontSize: '0.82rem', color: 'var(--lscc-eyebrow)' }}>
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advising CTA */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.80rem', letterSpacing: '0.22em' }}>Need Help Getting Started?</p>
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>TALK TO YOUR ADVISOR</h2>
          <p className="mb-8 mx-auto" style={{ fontSize: '1rem', color: 'oklch(1 0 0 / 0.68)', lineHeight: 1.7, maxWidth: '50ch' }}>
            Not sure which courses to take? Your academic advisor builds you a semester-by-semester plan that fits your goals, your program, and your schedule — at no cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/advising/book" className="press btn-shimmer font-bold px-8 py-3.5 rounded-xl" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}>
              Book an Appointment →
            </Link>
            <Link href="/advising" className="press font-bold px-8 py-3.5 rounded-xl text-white" style={{ border: '2px solid oklch(1 0 0 / 0.25)', fontSize: '0.96rem' }}>
              Advising Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Registrar contact */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Registrar&apos;s Office</p>
          <h2 className="font-display font-black leading-none mb-8" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CONTACT THE REGISTRAR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { campus: 'Birmingham Campus', location: 'Academic Success Center\n3060 Wilson Road, SW\nBirmingham, AL 35221', phone: '205-925-6996', tel: '+12059256996' },
              { campus: 'Bessemer Campus', location: 'Student Services Building A\n1100 Ninth Avenue SW\nBessemer, AL 35022', phone: '205-929-3418', tel: '+12059293418' },
            ].map(c => (
              <div key={c.campus} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-3" style={{ fontSize: '0.96rem', color: 'oklch(0.16 0.04 261)' }}>{c.campus}</p>
                <p className="mb-4" style={{ fontSize: '0.84rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.location}</p>
                <a href={`tel:${c.tel}`} className="font-bold hover:underline" style={{ fontSize: '0.88rem', color: 'oklch(0.22 0.17 261)' }}>{c.phone}</a>
              </div>
            ))}
            {/* Hours table */}
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
              <p className="font-display font-black mb-4" style={{ fontSize: '0.96rem', color: 'oklch(0.16 0.04 261)' }}>Office Hours</p>
              <table className="w-full" style={{ fontSize: '0.85rem' }}>
                <tbody>
                  {[
                    ['Mon – Thu', '8:00 AM – 6:30 PM'],
                    ['Friday', '8:00 AM – 5:00 PM'],
                    ['Saturday', 'Closed'],
                  ].map(([day, hrs]) => (
                    <tr key={day} style={{ borderBottom: '1px solid oklch(0 0 0 / 0.06)' }}>
                      <td className="py-2 font-semibold" style={{ color: 'oklch(0.45 0.04 261)', width: '45%' }}>{day}</td>
                      <td className="py-2 font-bold" style={{ color: hrs === 'Closed' ? 'oklch(0.55 0.03 261)' : 'oklch(0.22 0.17 261)' }}>{hrs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3" style={{ fontSize: '0.75rem', color: 'oklch(0.60 0.03 261)' }}>All times Central (CST)</p>
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
