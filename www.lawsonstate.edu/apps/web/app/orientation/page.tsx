import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'New Student Orientation | Lawson State',
  description:
    'Complete orientation at Lawson State Community College. Complete My Lawson Online Orientation and attend Connection Days — your in-person welcome to campus.',
}

const ORIENTATION_STEPS = [
  {
    n: '1',
    tag: 'Online',
    title: 'Complete My Lawson Online Orientation',
    body: 'All new students must complete the My Lawson New Student Online Orientation before attending Connection Days or registering for classes. This self-paced module covers essential information about campus resources, academic policies, financial aid, and student services.',
    cta: { label: 'Access Online Orientation', href: 'https://my.lawsonstate.edu' },
    external: true,
  },
  {
    n: '2',
    tag: 'In-Person',
    title: 'Attend Connection Days',
    body: 'Connection Days is our in-person orientation event held before each semester. You will meet faculty and staff, tour the campus, get your student ID, set up your email and portal access, and connect with fellow students who are just starting out.',
    note: 'Connection Days is required for all first-time college students.',
  },
  {
    n: '3',
    tag: 'Next Step',
    title: 'Register for Classes',
    body: 'Once you complete orientation, you are cleared to register for your first semester of classes. Your academic advisor will help you build a schedule that matches your program and your goals.',
    cta: { label: 'Learn About Registration', href: '/registration' },
  },
]

const WHAT_YOULL_DO = [
  { icon: '🎓', title: 'Meet Your Classmates', body: 'Connect with other incoming students who are starting their journey alongside you.' },
  { icon: '📋', title: 'Get Your Student ID', body: 'Your LSCC ID card gives you access to campus facilities, the library, and student discounts.' },
  { icon: '💻', title: 'Set Up Campus Technology', body: 'Get help activating your student email, Canvas LMS account, and My Lawson portal login.' },
  { icon: '📚', title: 'Tour the Campus', body: 'Guided tours of classrooms, labs, tutoring centers, the library, and student services offices.' },
  { icon: '💰', title: 'Review Financial Aid', body: 'Meet with the Financial Aid office to confirm your award status and understand your bill.' },
  { icon: '🗺️', title: 'Learn Campus Resources', body: 'Discover free tutoring, counseling, the food pantry, and 30+ clubs and organizations.' },
]

export default function OrientationPage() {
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
            <Link href="/admissions/apply" className="hover:text-white transition-colors">How to Apply</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>New Student Orientation</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Online + In-Person · All New Students
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            NEW STUDENT ORIENTATION
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Orientation is how you go from accepted to ready. Complete two steps — online and in-person — and you&apos;re set for your first semester.
          </p>
        </div>
      </section>

      {/* Orientation Steps */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Required for All New Students</p>
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            TWO STEPS TO GET STARTED
          </h2>
          <div className="space-y-5">
            {ORIENTATION_STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl p-7 flex gap-6 items-start"
                style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-black text-lg"
                    style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                    {s.n}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ background: 'oklch(0.95 0.03 255)', color: 'var(--lscc-eyebrow)', whiteSpace: 'nowrap' }}>
                    {s.tag}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lscc-ink mb-2" style={{ fontSize: '1.1rem' }}>
                    Step {s.n}: {s.title}
                  </h3>
                  <p className="text-lscc-muted mb-3" style={{ fontSize: '0.96rem', lineHeight: 1.7 }}>{s.body}</p>
                  {s.note && (
                    <p className="text-sm italic px-4 py-3 rounded-lg mb-3"
                      style={{ color: 'oklch(0.45 0.08 263)', background: 'oklch(0.97 0.012 263)', borderLeft: '3px solid oklch(0.79 0.19 78)' }}>
                      {s.note}
                    </p>
                  )}
                  {s.cta && (
                    s.external ? (
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
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Do at Connection Days */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-3"
            style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Connection Days
          </p>
          <h2 className="font-display font-black text-lscc-ink mb-10"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em' }}>
            WHAT HAPPENS ON CAMPUS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHAT_YOULL_DO.map((item) => (
              <div key={item.title} className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.012 263)', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="text-2xl mb-3" aria-hidden>{item.icon}</div>
                <h3 className="font-display font-bold text-lscc-ink mb-2" style={{ fontSize: '1rem' }}>
                  {item.title}
                </h3>
                <p className="text-lscc-muted" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-display font-semibold uppercase mb-3"
                style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
                Questions About Orientation?
              </p>
              <h2 className="font-display font-black text-white mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
                WE&apos;RE HERE TO HELP
              </h2>
              <p className="text-white/70 mb-8" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '50ch' }}>
                Contact Student Services at either campus if you have questions about orientation dates, online orientation access, or Connection Days activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="press btn-shimmer inline-flex items-center font-bold px-8 py-3.5 rounded-xl"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}>
                  Contact Us →
                </Link>
                <Link href="/portal"
                  className="press inline-flex items-center font-bold px-8 py-3.5 rounded-xl border"
                  style={{ color: 'white', borderColor: 'oklch(1 0 0 / 0.25)', fontSize: '0.97rem' }}>
                  Student Portal Hub
                </Link>
              </div>
            </div>

            {/* Contact card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5" style={{ background: 'oklch(0.28 0.18 261)' }}>
                <div className="font-display font-bold mb-1 text-white text-sm">Birmingham Campus</div>
                <div className="text-white/60 text-xs mb-3 leading-relaxed">Student Services<br />3060 Wilson Road SW</div>
                <a href="tel:+12059252515" className="text-sm font-semibold hover:underline block" style={{ color: 'oklch(0.79 0.19 78)' }}>
                  205.925.2515
                </a>
              </div>
              <div className="rounded-2xl p-5" style={{ background: 'oklch(0.28 0.18 261)' }}>
                <div className="font-display font-bold mb-1 text-white text-sm">Bessemer Campus</div>
                <div className="text-white/60 text-xs mb-3 leading-relaxed">Student Services Bldg A<br />1100 Ninth Ave SW</div>
                <a href="tel:+12059293416" className="text-sm font-semibold hover:underline block" style={{ color: 'oklch(0.79 0.19 78)' }}>
                  205.929.3416
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
