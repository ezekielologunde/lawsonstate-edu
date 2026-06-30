import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const SERVICES = [
  {
    label: 'Tutor.com',
    tagline: 'Free · 24/7 · 500+ subjects',
    desc: 'Lawson State students get unlimited free access to Tutor.com — live tutors on demand, any time of day. Connect from your laptop, phone, or tablet. No appointment needed.',
    cta: 'Access Tutor.com',
    href: 'https://tutor.com',
    external: true,
    how: 'Log in to MyLawson → Student Resources → Tutor.com',
  },
  {
    label: 'R.A.C.E. Advising Center',
    tagline: 'Reaching Academic & Career Excellence',
    desc: 'Academic advisors help you plan your course schedule, stay on track for transfer or graduation, and connect you with campus support services. Available at both campuses.',
    cta: 'Find Your Advisor',
    href: '/contact',
    external: false,
    how: 'Walk in or call 205.929.2113 · Both campuses',
  },
  {
    label: 'S.P.A.C.E. Center',
    tagline: 'Student Positive Academic Center of Excellence',
    desc: 'Peer tutoring, study groups, academic workshops, and one-on-one support for at-risk students. Located on the Birmingham Campus.',
    cta: 'Learn More',
    href: '/contact',
    external: false,
    how: 'Birmingham Campus · 205.925.2515',
  },
  {
    label: 'Writing & Math Lab',
    tagline: 'Free walk-in assistance',
    desc: 'Get help with papers, essays, math homework, and test preparation from trained instructors. No appointment required during open lab hours.',
    cta: 'Get Lab Hours',
    href: '/contact',
    external: false,
    how: 'Check posted hours each semester',
  },
  {
    label: 'Library & Research Help',
    tagline: 'Databases, e-books, and research guides',
    desc: 'The Lawson State Library provides access to academic databases, research guides, e-books, and study spaces. Research librarians are available to help you find sources.',
    cta: 'Visit Library',
    href: 'https://lawsonstate.edu/Library',
    external: true,
    how: 'Birmingham Campus · 205.929.6397',
  },
  {
    label: 'Disability Services',
    tagline: 'Accommodations & accessibility',
    desc: 'If you have a documented disability, Disability Services coordinates academic accommodations including extended test time, note-taking assistance, and accessible formats.',
    cta: 'Request Accommodations',
    href: '/contact',
    external: false,
    how: 'Contact Student Affairs · 205.929.6437',
  },
]

const TIPS = [
  "Don't wait until you're failing — reach out as soon as you feel behind.",
  'Tutoring is a sign of strength, not weakness. High achievers use it too.',
  'Visit the library for quiet study space during finals and midterms.',
  'Peer tutors often explain concepts in ways that click faster than lectures.',
  'Your advisor can help you drop, add, or withdraw before the deadline.',
]

export default function TutoringPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Tutoring &amp; Support</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Academic Support · Student Services
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            TUTORING &amp; SUPPORT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Free tutoring, academic advising, and peer support — available to every Lawson State student, every semester.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://tutor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Open Tutor.com<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Find an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>All Services</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>YOUR SUPPORT NETWORK</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => {
              const inner = (
                <div
                  className="group press flex flex-col h-full rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                  style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.05)' }}
                >
                  <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.68rem', letterSpacing: '0.18em' }}>{s.tagline}</p>
                  <p className="font-display font-black mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</p>
                  <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{s.desc}</p>
                  <div className="rounded-lg px-3 py-2 mb-4" style={{ background: 'oklch(0.95 0.03 255)' }}>
                    <p className="text-xs" style={{ color: 'oklch(0.50 0.04 261)' }}>{s.how}</p>
                  </div>
                  <span className="font-bold flex items-center gap-1" style={{ fontSize: '0.82rem', color: 'oklch(0.42 0.17 261)' }}>
                    {s.cta} →
                    {s.external && <span className="sr-only"> (opens in new tab)</span>}
                  </span>
                </div>
              )
              return s.external ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <Link key={s.label} href={s.href}>{inner}</Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Success tips */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Tips</p>
            <h2 className="font-display font-black mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>SUCCEED THIS SEMESTER</h2>
            <ul className="flex flex-col gap-4">
              {TIPS.map((tip, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="font-display font-black shrink-0"
                    style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.4rem', lineHeight: 1, marginTop: '0.1rem', letterSpacing: '-0.03em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontSize: '0.95rem', color: 'oklch(0.35 0.04 261)', lineHeight: 1.7 }}>{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact card */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
          >
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Get Help Now</p>
            <p className="font-display font-black mb-4" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>STILL NOT SURE WHERE TO START?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Your advisor is your best first call. They can point you to exactly the right resource — whether it&apos;s tutoring, counseling, disability services, or financial help.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.929.2113</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Email:</span> counseling@lawsonstate.edu</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Locations:</span> R.A.C.E. Center · Both campuses</div>
            </div>
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Talk to an Advisor
            </Link>
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
