import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Academic Support | Lawson State Community College',
  description:
    'Free tutoring, academic advising, and student success services at Lawson State. R.A.C.E. Advising Center, Tutor.com, and the S.P.A.C.E. Center — Birmingham & Bessemer.',
}

const SERVICES = [
  {
    title: 'R.A.C.E. Advising Center',
    tag: "Lawson's QEP",
    desc: 'Develop your path to graduation with in-person academic advising. Our advisors help you select courses, plan your degree, and stay on track from enrollment to commencement.',
    link: { label: 'Visit Advising Portal', href: 'https://lawsonstate.edu/advising' },
  },
  {
    title: 'Free Tutoring — Tutor.com',
    tag: '24/7 Online Access',
    desc: 'All enrolled students get free access to Tutor.com for on-demand tutoring in hundreds of subjects. Connect with a live tutor anytime — on campus or from home.',
    link: { label: 'Access Tutor.com', href: 'https://tutor.com' },
  },
  {
    title: 'Testing & Assessment Services',
    tag: 'Placement & Exams',
    desc: 'Take your placement exam (ACCUPLACER), make-up exams, and proctored assessments through our Testing Center on both campuses.',
    link: null,
  },
  {
    title: 'Student Success Workshops',
    tag: 'Skills & Strategies',
    desc: 'Join workshops on study skills, time management, note-taking strategies, and academic goal-setting — designed to help you succeed in the classroom.',
    link: null,
  },
  {
    title: 'S.P.A.C.E. Center',
    tag: 'Academic Success',
    desc: 'The Student Placement and Academic Completion Environment offers a dedicated space for academic support, peer tutoring, and collaborative learning.',
    link: null,
  },
  {
    title: 'ORI 101 — Freshman Academy',
    tag: 'First Semester',
    desc: 'Required for all new students in your first semester, ORI 101 introduces college life, campus resources, academic planning, and sets you up for long-term success.',
    link: null,
  },
]

const LOCATIONS = [
  {
    name: 'Birmingham Campus',
    building: 'Academic Success Center, Suite 220',
    address: '3060 Wilson Road SW, Birmingham, AL 35221',
    phone: '205.929.3419',
    tel: '+12059293419',
  },
  {
    name: 'Bessemer Campus',
    building: 'Building A, Room 183',
    address: '1100 Ninth Avenue SW, Bessemer, AL 35022',
    phone: '205.929.2113',
    tel: '+12059292113',
  },
]

export default function AcademicSupportPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.16 0.04 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 261 / 0.97) 0%, oklch(0.22 0.17 261 / 0.85) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-15%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.13) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Student Support Services</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>ACADEMIC SUPPORT</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Free tutoring, academic advising, and student success resources — available to every enrolled student.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="https://lawsonstate.edu/advising" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Visit Advising Center
              </Link>
              <a href="tel:+12059293419" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Call 205.929.3419
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Available to All Students</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>SUPPORT SERVICES</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>{s.tag}</span>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</h3>
                  <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{s.desc}</p>
                  {s.link && (
                    <Link href={s.link.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{s.link.label} →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Where to Find Us</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>CAMPUS LOCATIONS</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'oklch(0.16 0.04 261)' }}>{loc.name}</h3>
                  <p className="mb-1 font-semibold" style={{ fontSize: '0.95rem', color: 'oklch(0.40 0.04 261)' }}>{loc.building}</p>
                  <address className="not-italic mb-5" style={{ fontSize: '0.93rem', color: 'oklch(0.50 0.03 261)' }}>{loc.address}</address>
                  <a href={`tel:${loc.tel}`} className="font-bold hover:opacity-75 transition-opacity" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.1rem' }}>{loc.phone}</a>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl p-8" style={{ background: 'oklch(0.16 0.04 261)', color: 'white' }}>
              <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1rem', letterSpacing: '0.18em' }}>Hours</p>
              <p style={{ fontSize: '1.05rem', opacity: 0.9 }}>Monday – Friday: 8:00 AM – 5:00 PM &nbsp;·&nbsp; Closed Weekends</p>
              <p className="mt-3" style={{ fontSize: '0.93rem', opacity: 0.7 }}>Online/remote academic support available through Tutor.com 24/7</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>GET SUPPORT. STAY ENGAGED.</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>Email us anytime — help@lawsonstate.edu</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:help@lawsonstate.edu" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                Email Academic Support →
              </a>
              <Link href="/financial-aid" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Financial Aid
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
