import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Class Registration | Lawson State',
  description:
    'Register for classes at Lawson State Community College. Learn how to connect with your advisor, search the course schedule, and enroll through My Lawson.',
}

const STEPS = [
  {
    n: '1',
    title: 'Meet With Your Academic Advisor',
    body: 'Before registering for classes, connect with your assigned academic advisor. Your advisor will review your placement test results, discuss your program of study, and help you select the right courses for your academic goals.',
    cta: { label: 'Find Your Advisor', href: '/portal' },
  },
  {
    n: '2',
    title: 'Review the Course Schedule',
    body: 'Search available courses by subject, time, campus, or delivery method. Courses are offered at both the Birmingham and Bessemer campuses, as well as online through Canvas.',
    cta: { label: 'Browse Course Schedule', href: 'https://www.lawsonstate.edu/admissions/default.aspx' },
    external: true,
  },
  {
    n: '3',
    title: 'Register Through My Lawson',
    body: 'Log in to My Lawson — the student portal — to add courses to your schedule. You can register for courses, drop or swap sections, and view your confirmed schedule. Registration opens several weeks before each semester.',
    cta: { label: 'Log In to My Lawson', href: 'https://my.lawsonstate.edu' },
    external: true,
  },
  {
    n: '4',
    title: 'Pay Your Bill',
    body: "After registering, confirm your financial aid award covers your balance or arrange payment. Unpaid balances may result in removal from courses. Payment plans are available through the Bursar’s Office.",
    cta: { label: 'View Payment Options', href: '/financial-aid' },
  },
]

const NEED_TO_KNOW = [
  {
    title: 'Placement Testing',
    body: 'Most new students take the ACCUPLACER placement test before registering. Your scores determine which English and Math courses you are eligible for.',
  },
  {
    title: 'Registration Dates',
    body: 'Priority registration opens for current students first, followed by general registration. Check the academic calendar for specific open registration dates each semester.',
    href: '/calendar',
  },
  {
    title: 'Credit Load',
    body: 'Full-time students carry 12 or more credit hours per semester. Part-time enrollment is 11 credits or fewer. Financial aid eligibility is tied to your enrollment status.',
  },
  {
    title: 'Waitlisting',
    body: 'If a course is full, you may be able to join a waitlist in My Lawson. If a seat opens and you are next on the waitlist, you must log in and confirm enrollment or it will be passed to the next student.',
  },
]

export default function RegistrationPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative py-14 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '24vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions/apply" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Registration</span>
          </p>
          <h1 className="font-display font-black text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', letterSpacing: '-0.025em' }}>
            CLASS REGISTRATION
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.65 }}>
            Accepted? Great. Now let&apos;s get you into classes. Here&apos;s exactly how registration works at Lawson State.
          </p>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            HOW REGISTRATION WORKS
          </h2>
          <div className="space-y-5">
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
                  <p className="text-lscc-muted mb-4" style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>{s.body}</p>
                  {s.external ? (
                    <a href={s.cta.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                      style={{ color: 'oklch(0.22 0.17 261)' }}>
                      {s.cta.label} →<span className="sr-only"> (opens in new tab)</span>
                    </a>
                  ) : (
                    <Link href={s.cta.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                      style={{ color: 'oklch(0.22 0.17 261)' }}>
                      {s.cta.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need to Know */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            WHAT YOU NEED TO KNOW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NEED_TO_KNOW.map((item) => (
              <div key={item.title} className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <h3 className="font-display font-bold mb-2 text-lscc-ink" style={{ fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p className="text-lscc-muted" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{item.body}</p>
                {item.href && (
                  <Link href={item.href}
                    className="inline-block mt-3 text-sm font-semibold hover:underline"
                    style={{ color: 'oklch(0.22 0.17 261)' }}>
                    View Academic Calendar →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advising CTA */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-display font-semibold uppercase mb-3"
            style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Need Help Getting Started?
          </p>
          <h2 className="font-display font-black text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
            TALK TO YOUR ADVISOR
          </h2>
          <p className="text-white/70 mb-8 mx-auto" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '52ch' }}>
            Not sure which classes to take? Your academic advisor can help you build a schedule that fits your goals, your program, and your life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/portal"
              className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}>
              Find My Advisor →
            </Link>
            <Link href="/contact"
              className="press inline-flex items-center font-bold px-8 py-3.5 rounded-xl border"
              style={{ color: 'white', borderColor: 'oklch(1 0 0 / 0.25)', fontSize: '0.97rem' }}>
              Contact Advising
            </Link>
          </div>
        </div>
      </section>

      {/* Contact — Registrar */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-black text-lscc-ink mb-8"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}>
            CONTACT THE REGISTRAR&apos;S OFFICE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-3 text-lscc-ink">Birmingham Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-4">
                Academic Success Center<br />
                3060 Wilson Road, SW<br />
                Birmingham, AL 35221
              </div>
              <a href="tel:+12059256996" className="font-semibold text-sm hover:underline block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>
                📞 205-925-6996
              </a>
            </div>
            <div className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
              <div className="font-display font-bold mb-3 text-lscc-ink">Bessemer Campus</div>
              <div className="text-lscc-muted text-sm leading-relaxed mb-4">
                Student Services Building A<br />
                1100 Ninth Avenue SW<br />
                Bessemer, AL 35022
              </div>
              <a href="tel:+12059293418" className="font-semibold text-sm hover:underline block mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>
                📞 205-929-3418
              </a>
            </div>
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
