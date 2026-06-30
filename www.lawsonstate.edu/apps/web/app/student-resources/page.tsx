import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const TOOLS = [
  {
    label: 'MyLawson',
    desc: 'Register for classes, view grades, pay your bill, and manage your account.',
    href: 'https://my.lawsonstate.edu',
    icon: '🎓',
  },
  {
    label: 'Canvas LMS',
    desc: 'Access all your online and hybrid courses, assignments, and instructor feedback.',
    href: 'https://lawsonstate.instructure.com',
    icon: '📚',
  },
  {
    label: 'Student Email',
    desc: 'Check your official LSCC email — all important notices are sent here.',
    href: 'https://webmail.lawsonstate.edu',
    icon: '✉️',
  },
  {
    label: 'Help Desk',
    desc: 'IT support for login issues, network access, software, and campus devices.',
    href: 'mailto:help@lawsonstate.edu',
    icon: '🛠️',
  },
]

const SERVICES = [
  {
    label: 'Transcript Requests',
    desc: 'Order official transcripts for transfer, employment, or your own records. Unofficial transcripts are available instantly through MyLawson.',
    href: '/student-resources/transcripts',
    cta: 'Request Transcripts',
  },
  {
    label: 'Graduation Information',
    desc: 'Learn how to apply for graduation, find ceremony dates, order your cap & gown, and understand degree requirements.',
    href: '/student-resources/graduation',
    cta: 'Graduation Details',
  },
  {
    label: 'Concerns & Complaints',
    desc: "Have a concern about grades, financial aid, or campus life? We'll walk you through the right process to get it resolved.",
    href: '/student-resources/concerns',
    cta: 'File a Concern',
  },
  {
    label: 'Tutoring & Academic Support',
    desc: 'Free Tutor.com access 24/7, R.A.C.E. advising, the S.P.A.C.E. Center, Writing & Math Lab, and Disability Services accommodations.',
    href: '/student-resources/tutoring',
    cta: 'Get Tutoring',
  },
  {
    label: 'Career Services',
    desc: 'Résumé coaching, mock interviews, the College Central job board, Career Coach assessments, and connections to local employers.',
    href: '/student-resources/career',
    cta: 'Explore Careers',
  },
  {
    label: 'Health & Wellness',
    desc: 'Counseling Services, Cougar Pantry, Cougar Clothing Closet, and Crisis Resources — free for all enrolled students. Lawson State is a Caring Campus.',
    href: '/student-resources/health',
    cta: 'Wellness Support',
  },
  {
    label: 'Disability Services',
    desc: 'Academic accommodations under the ADA and Section 504 — extended test time, note-taking assistance, accessible materials, and more.',
    href: '/student-resources/disability',
    cta: 'Request Accommodations',
  },
  {
    label: 'TRiO Programs',
    desc: 'Federally funded support for first-generation, low-income, and disabled students — advising, workshops, cultural enrichment, and transfer planning.',
    href: '/student-resources/trio',
    cta: 'Learn About TRiO',
  },
  {
    label: 'Academic Advising',
    desc: 'Your advisor helps you plan courses, stay on track for graduation, and connect with support on both campuses.',
    href: '/contact',
    cta: 'Find Your Advisor',
  },
]

export default function StudentResourcesPage() {
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
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Current Students · Lawson State CC
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', letterSpacing: '-0.025em' }}>
            STUDENT RESOURCES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Everything you need to log in, stay on track, and get support — all in one place.
          </p>
        </div>
      </section>

      {/* Quick-access tools */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Log In</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>YOUR DIGITAL TOOLS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLS.map((t) => (
              <a
                key={t.label}
                href={t.href}
                target={t.href.startsWith('http') ? '_blank' : undefined}
                rel={t.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group press flex flex-col gap-3 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.06)' }}
              >
                <span style={{ fontSize: '2rem' }} aria-hidden>{t.icon}</span>
                <div>
                  <p className="font-display font-black mb-1" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{t.label}</p>
                  <p style={{ fontSize: '0.85rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.55 }}>{t.desc}</p>
                </div>
                <span className="font-bold mt-auto" style={{ fontSize: '0.82rem', color: 'var(--lscc-eyebrow)' }}>
                  {t.href.startsWith('mailto') ? 'Send email →' : 'Open →'}
                  {t.href.startsWith('http') && <span className="sr-only"> (opens in new tab)</span>}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Student services */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Student Services</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT DO YOU NEED?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group press flex flex-col gap-3 rounded-2xl p-7 transition-all hover:-translate-y-0.5"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}
              >
                <p className="font-display font-black" style={{ fontSize: '1.12rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{s.desc}</p>
                <span className="font-bold mt-auto flex items-center gap-1" style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.17 261)' }}>
                  {s.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>Need Help?</p>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em' }}>We&apos;re here for you.</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.4rem' }}>
              Call 205.925.2515 · Visit either Birmingham campus · Email counseling@lawsonstate.edu
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Contact Student Services
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
