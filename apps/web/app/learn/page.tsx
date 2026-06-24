import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Learn at Lawson',
  description:
    'Discover career technical programs, college transfer pathways, health professions, and workforce training at Lawson State Community College.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

const STATS = [
  { value: '200+', label: 'Programs & Degrees', href: '/academics' },
  { value: '51',   label: 'Dual Enrollment Courses', href: '/academics/dual-enrollment' },
  { value: '25',   label: 'Workforce Training Programs', href: '/workforce' },
]

const PROGRAMS = [
  {
    number: '01',
    name:   'Career Technical Programs',
    desc:   'Specialized workforce credentials that lead to high income and in-demand skills — from welding and HVAC to culinary arts and cosmetology.',
    href:   '/academics/career-technical',
    bg:     'oklch(0.22 0.17 261)',
    dark:   true,
  },
  {
    number: '02',
    name:   'College Transfer Programs',
    desc:   'Earn up to 64 transferable credits with us, then move seamlessly to the 4-year college of your choice with junior standing.',
    href:   '/academics/transfer',
    bg:     'oklch(0.79 0.19 78)',
    dark:   false,
  },
  {
    number: '03',
    name:   'Business & Information Technologies',
    desc:   'From Cybersecurity and Computer Hardware to Accounting and Economics — the skills the modern economy demands.',
    href:   '/academics/business-it',
    bg:     'oklch(0.27 0.13 263)',
    dark:   true,
  },
  {
    number: '04',
    name:   'Health Professions',
    desc:   'One of the strongest Health Professions programs in Alabama — Nursing, Radiology, EMS, Dental Hygiene, and Sonography.',
    href:   '/academics/health',
    bg:     'oklch(0.96 0.012 263)',
    dark:   false,
  },
]

const ADDITIONAL = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 1.5 9 1.5 12 0v-5"/>
      </svg>
    ),
    label: 'High School Programs',
    stat:  '51 dual enrollment courses',
    desc:  'Get a head start on college credits while still in high school — at no cost to you.',
    href:  '/academics/dual-enrollment',
    accent: 'oklch(0.79 0.19 78)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: 'Online Programs',
    stat:  '9 certificates — 100% job placement',
    desc:  'Complete fully online certificates on your schedule, with documented 100% job placement rates.',
    href:  '/academics/online',
    accent: 'oklch(0.22 0.17 261)',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>
      </svg>
    ),
    label: 'Workforce Development',
    stat:  '25 fast-track training programs',
    desc:  'Short-term, industry-aligned training to upgrade your skills or pivot to a new career — fast.',
    href:  '/workforce',
    accent: 'oklch(0.35 0.15 261)',
  },
]

const CAMPUSES = [
  {
    name:    'Birmingham Campus',
    address: '3060 Wilson Road, SW',
    city:    'Birmingham, AL 35221',
    phone:   '205-929-3416',
    hours:   'Mon – Fri · 8:00 AM – 5:00 PM',
    href:    'https://maps.google.com/?q=3060+Wilson+Road+SW+Birmingham+AL',
    primary: true,
  },
  {
    name:    'Bessemer Campus',
    address: '1100 Ninth Avenue, SW',
    city:    'Bessemer, AL 35022',
    phone:   '205-929-6309',
    hours:   'Mon – Fri · 8:00 AM – 5:00 PM',
    href:    'https://maps.google.com/?q=1100+Ninth+Avenue+SW+Bessemer+AL',
    primary: false,
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LearnAtLawsonPage() {
  return (
    <>
      <Nav />
      <main className="mobile-nav-spacer">

        {/* ── Hero ── */}
        <section
          className="py-28 sm:py-36 px-6"
          style={{ background: 'oklch(0.22 0.17 261)' }}
        >
          <div className="max-w-7xl mx-auto">
            <p
              className="font-display font-semibold uppercase tracking-widest mb-4 scroll-reveal"
              style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.75rem', letterSpacing: '0.18em' }}
            >
              Lawson State Community College
            </p>
            <h1
              className="font-display font-black text-white leading-none mb-8 scroll-reveal"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.025em', maxWidth: '14ch' }}
            >
              Learn at<br />
              <span style={{ color: 'oklch(0.79 0.19 78)' }}>Lawson.</span>
            </h1>
            <p
              className="text-white/70 leading-relaxed scroll-reveal"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', maxWidth: '56ch' }}
            >
              When you learn at Lawson, you join a tight-knit community that extends beyond
              the classroom and values innovation and experimentation. You leave well-rounded,
              supported, and prepared for the workforce and the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 scroll-reveal">
              <Link
                href="/admissions/apply"
                className="press btn-shimmer hero-cta-gold inline-flex items-center font-semibold px-8 py-4 rounded"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.14 0.02 263)', fontSize: '0.9375rem' }}
              >
                Apply Now
              </Link>
              <Link
                href="/academics"
                className="press hero-cta-ghost inline-flex items-center font-semibold px-8 py-4 rounded text-white"
                style={{ border: '2px solid oklch(1 0 0 / 0.25)', fontSize: '0.9375rem' }}
              >
                Browse All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 px-6" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ background: 'oklch(0.92 0.01 263)' }}>
            {STATS.map((s) => (
              <Link
                key={s.value}
                href={s.href}
                className="group flex flex-col gap-1 p-10 card-lift"
                style={{ background: 'white' }}
              >
                <span
                  className="font-display font-black leading-none group-hover:text-lscc-blue transition-colors"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'oklch(0.22 0.17 261)', letterSpacing: '-0.03em' }}
                >
                  {s.value}
                </span>
                <span className="text-lscc-muted font-medium text-base">{s.label}</span>
                <span className="text-lscc-blue text-sm font-semibold group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Program Categories ── */}
        <section className="py-20 sm:py-28 px-6" style={{ background: 'oklch(0.98 0.008 263)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 scroll-reveal">
              <h2
                className="font-display font-black text-lscc-ink leading-none mb-3"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
              >
                CHOOSE YOUR PATH
              </h2>
              <p className="text-lscc-muted text-lg" style={{ maxWidth: '52ch' }}>
                Four distinct academic tracks — each designed to take you exactly where you want to go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-grid">
              {PROGRAMS.map((p) => (
                <Link
                  key={p.number}
                  href={p.href}
                  className="group card-lift press flex flex-col justify-between rounded-xl p-8 min-h-[280px]"
                  style={{ background: p.bg }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <span
                      className="font-display font-black leading-none"
                      style={{
                        fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                        color: p.dark ? 'oklch(1 0 0 / 0.12)' : 'oklch(0 0 0 / 0.08)',
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                      }}
                    >
                      {p.number}
                    </span>
                    <span
                      className="text-2xl font-light opacity-60 group-hover:translate-x-1 transition-transform"
                      style={{ color: p.dark ? 'white' : 'oklch(0.14 0.02 263)' }}
                    >
                      →
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold mb-3 leading-tight"
                      style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                        color: p.dark ? 'white' : 'oklch(0.14 0.02 263)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="leading-relaxed text-sm"
                      style={{ color: p.dark ? 'oklch(1 0 0 / 0.65)' : 'oklch(0.38 0.05 263)' }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-24 px-6" style={{ background: 'oklch(0.79 0.19 78)' }}>
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <p
              className="font-display font-black leading-tight mb-6"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
                color: 'oklch(0.14 0.02 263)',
                letterSpacing: '-0.02em',
              }}
            >
              &ldquo;Know who you are, know what you want, and use the resources
              around you. It&rsquo;s true that everything you need is here at Lawson State.&rdquo;
            </p>
            <p
              className="font-semibold uppercase tracking-widest"
              style={{ color: 'oklch(0.27 0.13 263)', fontSize: '0.8rem' }}
            >
              Current Lawson State Student
            </p>
          </div>
        </section>

        {/* ── Additional Learning Options ── */}
        <section className="py-20 sm:py-28 px-6" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 scroll-reveal">
              <h2
                className="font-display font-black text-lscc-ink leading-none mb-3"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
              >
                MORE WAYS TO LEARN
              </h2>
              <p className="text-lscc-muted text-lg" style={{ maxWidth: '52ch' }}>
                High school students, online learners, and career changers all have a place here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-grid">
              {ADDITIONAL.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className="group card-lift press flex flex-col gap-5 rounded-xl p-7"
                  style={{ background: 'oklch(0.97 0.008 263)' }}
                >
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-xl shrink-0"
                    style={{ background: a.accent, color: 'white' }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <p
                      className="font-display font-bold mb-1"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: a.accent, textTransform: 'uppercase' }}
                    >
                      {a.stat}
                    </p>
                    <h3 className="font-display font-bold text-lscc-ink text-xl mb-2 leading-tight">
                      {a.label}
                    </h3>
                    <p className="text-lscc-muted text-sm leading-relaxed">{a.desc}</p>
                  </div>
                  <span className="mt-auto text-sm font-semibold group-hover:underline" style={{ color: a.accent }}>
                    Explore {a.label} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Campus Locations ── */}
        <section className="py-20 sm:py-28 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 scroll-reveal">
              <h2
                className="font-display font-black text-white leading-none mb-3"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
              >
                TWO CAMPUSES, ONE COMMUNITY
              </h2>
              <p className="text-white/60 text-lg" style={{ maxWidth: '50ch' }}>
                Learn close to home — Birmingham and Bessemer campuses both offer the full
                Lawson State experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-grid">
              {CAMPUSES.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl p-8 flex flex-col gap-5"
                  style={{ background: c.primary ? 'oklch(0.79 0.19 78)' : 'oklch(0.30 0.14 263)' }}
                >
                  <h3
                    className="font-display font-bold leading-tight"
                    style={{
                      fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
                      color: c.primary ? 'oklch(0.14 0.02 263)' : 'white',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {c.name}
                  </h3>
                  <div
                    className="flex flex-col gap-1.5 text-sm font-medium"
                    style={{ color: c.primary ? 'oklch(0.27 0.13 263)' : 'oklch(1 0 0 / 0.75)' }}
                  >
                    <p>{c.address}</p>
                    <p>{c.city}</p>
                    <p>{c.phone}</p>
                    <p>{c.hours}</p>
                  </div>
                  <div className="flex gap-3 mt-auto flex-wrap">
                    <Link
                      href="/admissions/apply"
                      className="press inline-flex items-center text-sm font-bold px-5 py-2.5 rounded"
                      style={{
                        background: c.primary ? 'oklch(0.22 0.17 261)' : 'oklch(0.79 0.19 78)',
                        color: c.primary ? 'white' : 'oklch(0.14 0.02 263)',
                      }}
                    >
                      Apply Here
                    </Link>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded"
                      style={{
                        border: `2px solid ${c.primary ? 'oklch(0.22 0.17 261 / 0.25)' : 'oklch(1 0 0 / 0.25)'}`,
                        color: c.primary ? 'oklch(0.22 0.17 261)' : 'white',
                      }}
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Prefooter />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </>
  )
}
