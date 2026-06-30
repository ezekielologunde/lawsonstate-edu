import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const SERVICES = [
  {
    label: 'Résumé & Cover Letter Help',
    desc: 'Career coaches review your résumé and cover letter — in person or via Handshake. We\'ll help you tailor them to the jobs you actually want.',
    how: 'Drop in or schedule on Handshake',
    icon: '📄',
  },
  {
    label: 'Mock Interviews',
    desc: 'Practice interviews with career staff or industry partners. Recorded sessions available so you can review your own performance.',
    how: 'Book with Career Services',
    icon: '🎤',
  },
  {
    label: 'College Central Network',
    desc: 'Our exclusive job board — browse internships and full-time positions posted specifically for Lawson State students and alumni.',
    href: 'https://www.collegecentral.com/lawsonstate',
    external: true,
    how: 'Free access with LSCC email',
    icon: '💼',
  },
  {
    label: 'Career Coach Assessment',
    desc: 'Discover careers that fit your strengths, values, and interests. The Career Coach tool generates a personalized career and program match.',
    href: 'https://lawsonstate.emsicc.com',
    external: true,
    how: 'Free for LSCC students',
    icon: '🧭',
  },
  {
    label: 'Career & Community Resource Fair',
    desc: 'Annual on-campus event connecting students with 50+ employers, nonprofits, military branches, and four-year colleges. Held each spring.',
    how: 'See calendar for date · Birmingham Campus',
    icon: '🤝',
  },
  {
    label: 'Transfer College Visits',
    desc: 'Representatives from four-year colleges visit the Birmingham campus every week during the academic year. Meet with them about transfer admission and scholarships.',
    how: 'Walk-in · Birmingham Campus schedule posted each semester',
    icon: '🎓',
  },
  {
    label: 'Professional Attire Closet',
    desc: 'The Cougar Clothing Closet provides free professional clothing for interviews and career events. Ask at Student Services for access.',
    how: 'Free · Student Services · Both campuses',
    icon: '👔',
  },
  {
    label: 'LinkedIn & Online Presence',
    desc: 'Career coaches help you build a strong LinkedIn profile and digital footprint so employers can find you online.',
    how: 'Included in résumé coaching sessions',
    icon: '🌐',
  },
]

const EMPLOYERS = [
  'UAB Health System', 'Jefferson County', 'City of Birmingham', 'Honda Manufacturing',
  'Mercedes-Benz (MBUSI)', 'Protective Life', 'Regions Bank', 'Children\'s of Alabama',
]

const STEPS = [
  { n: '01', title: 'Create Your Handshake Account', body: 'Sign up at joinhandshake.com with your LSCC student email to access jobs, appointments, and career events.' },
  { n: '02', title: 'Get Your Résumé Reviewed', body: 'Stop by Career Services or book an appointment on Handshake. Your first résumé review is always free.' },
  { n: '03', title: 'Explore Career Coach', body: 'Take the assessment at lawsonstate.emsicc.com to discover career paths aligned with your interests and earning potential goals.' },
  { n: '04', title: 'Apply to Jobs & Internships', body: 'Use College Central Network to browse opportunities. Apply early — many positions close quickly.' },
]

export default function CareerServicesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Career Services</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Career Development · Student Success
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            CAREER SERVICES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Résumé coaching, mock interviews, a job board, and employer connections — all free for Lawson State students and alumni.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://lawsonstate.emsicc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Career Coach Tool<span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href="https://www.collegecentral.com/lawsonstate"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Job Board →<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>All Free for LSCC Students</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT WE OFFER</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => {
              const inner = (
                <div
                  className="group press flex flex-col h-full rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                  style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}
                >
                  <span style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }} aria-hidden>{s.icon}</span>
                  <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)', lineHeight: 1.25 }}>{s.label}</p>
                  <p style={{ fontSize: '0.82rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{s.desc}</p>
                  <div className="text-xs rounded-md px-3 py-1.5" style={{ background: 'oklch(0.95 0.03 255)', color: 'oklch(0.50 0.04 261)' }}>{s.how}</div>
                  {s.href && (
                    <span className="font-bold text-xs mt-3" style={{ color: 'oklch(0.42 0.17 261)' }}>
                      Open →{s.external && <span className="sr-only"> (opens in new tab)</span>}
                    </span>
                  )}
                </div>
              )
              if (s.href && s.external) {
                return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              }
              return <div key={s.label}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* Getting started steps */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>New to Career Services</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>GET STARTED IN 4 STEPS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Employers + contact */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Who Hires Cougars</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>LOCAL EMPLOYERS</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our graduates are hired across healthcare, manufacturing, government, banking, and technology. Regional employers actively recruit at LSCC career events.
            </p>
            <div className="flex flex-wrap gap-2">
              {EMPLOYERS.map((e) => (
                <span
                  key={e}
                  className="rounded-full px-4 py-1.5 font-semibold text-sm"
                  style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.08)', color: 'oklch(0.30 0.05 261)' }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Career Services</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>SCHEDULE AN APPOINTMENT</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Our career coaches are available in person on both campuses and virtually through Handshake. Walk-ins welcome during office hours.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.929.6360</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Email:</span> careers@lawsonstate.edu</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Hours:</span> Mon–Fri · 8 AM – 5 PM</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Locations:</span> Both campuses</div>
            </div>
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Contact Career Services
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
