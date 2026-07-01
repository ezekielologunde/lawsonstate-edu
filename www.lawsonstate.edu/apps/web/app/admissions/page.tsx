import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Admissions — Apply to Lawson State Community College',
  description:
    'Apply to Lawson State in 4 simple steps. Free to apply. No minimum GPA. Rolling admissions for new, transfer, dual enrollment, and veteran students in Birmingham & Bessemer, AL.',
}

const BROWSE = [
  {
    num: '01',
    label: 'New Students',
    tagline: 'First-time college',
    desc: 'No minimum GPA. Rolling admissions. Start any semester — no deadline to miss.',
    href: '/admissions/apply',
  },
  {
    num: '02',
    label: 'Transfer Students',
    tagline: 'Credits transfer easily',
    desc: "Alabama STARS protects your community college credits statewide. Bring what you've earned.",
    href: '/admissions/transfer',
  },
  {
    num: '03',
    label: 'Dual Enrollment',
    tagline: 'High school + college',
    desc: 'Earn real college credit while still in high school. Tuition may be fully waived.',
    href: '/admissions/dual-enrollment',
  },
  {
    num: '04',
    label: 'Veterans & Military',
    tagline: 'GI Bill & benefits',
    desc: 'VA-approved institution. GI Bill, MyCAA, and Voc Rehab accepted. Priority registration.',
    href: '/admissions/veterans',
  },
]

const QUICK = [
  { label: 'Financial Aid',   sub: 'Grants, loans, scholarships',  href: '/financial-aid' },
  { label: 'Tuition & Fees', sub: '$131 / credit hour',            href: '/admissions/apply' },
  { label: 'Visit Campus',   sub: '2 Birmingham locations',         href: '/visit' },
  { label: 'Advising',       sub: 'Talk to an advisor',            href: '/contact' },
]

const STEPS = [
  {
    step: '01',
    title: 'Apply Online — Free',
    desc: 'Complete the application online. No fee, no deadline — applications are open year-round.',
    href: '/admissions/apply',
    linkLabel: 'Start Your Application',
    external: false,
  },
  {
    step: '02',
    title: 'Submit Transcripts',
    desc: 'Send your official high school transcript or GED. Transfer students must send transcripts from every college attended.',
    href: null,
    linkLabel: null,
    external: false,
  },
  {
    step: '03',
    title: 'Complete Placement',
    desc: 'Most students complete a placement assessment before registering for 5+ credit hours. ACT scores of 17+ are also accepted.',
    href: null,
    linkLabel: null,
    external: false,
  },
  {
    step: '04',
    title: 'Register & You\'re In',
    desc: 'Once admitted, log in to MyLawson to register for classes and confirm your financial aid. Your advisor is ready to help.',
    href: 'https://experience.elluciancloud.com/lcc45/',
    linkLabel: 'Log In to MyLawson',
    external: true,
  },
]

const TYPES = [
  {
    id: 'new',
    label: 'New Students',
    items: [
      'No minimum GPA for general admission',
      'Rolling admissions — no application deadline',
      'High school transcript or GED required',
      'Placement assessment before registering for 5+ credit hours',
      'Complete ORI 101 (Freshman Academy) your first semester',
      'Register through MyLawson once admitted',
    ],
    cta: 'Apply as a New Student',
    ctaHref: '/admissions/apply',
    external: false,
  },
  {
    id: 'transfer',
    label: 'Transfer Students',
    items: [
      'Official transcripts from every college attended',
      'D grades from other institutions are not accepted for transfer credit',
      'Transfer GPA below 2.0 → Academic Probation at enrollment',
      'At least 25% of credit hours must be completed at Lawson State',
      'AP, CLEP, DANTES, and military credit accepted (up to 25%)',
      'Alabama STARS protects your credits across all ACCS colleges',
    ],
    cta: 'Apply as a Transfer Student',
    ctaHref: '/admissions/apply',
    external: false,
  },
  {
    id: 'dual',
    label: 'Dual Enrollment',
    items: [
      'Open to 10th–12th grade students',
      'Minimum 2.5 GPA required',
      'ACCS grant funding — tuition may be fully waived',
      '51 courses across 8+ career pathways',
      'Online, virtual, or in-person options',
      'Accelerated High School track for 11th–12th graders (3.0+ GPA)',
    ],
    cta: 'Dual Enrollment Info',
    ctaHref: '/admissions/dual-enrollment',
    external: false,
  },
  {
    id: 'veterans',
    label: 'Veterans & Military',
    items: [
      'VA-approved — GI Bill® Chapters 33, 30, 31, 35 accepted',
      'MyCAA scholarships for eligible military spouses',
      'VA Vocational Rehabilitation (Chapter 31) available',
      'Military transcript evaluation — ACE/JST credits applied',
      'Priority registration for active-duty and veterans',
      'School Certifying Official (SCO) on campus',
    ],
    cta: 'Contact Admissions',
    ctaHref: '/contact',
    external: false,
  },
]

const RESOURCES = [
  { label: 'Non-Degree / Audit',    desc: 'Take a course without pursuing a degree',      href: '/admissions/non-degree' },
  { label: 'Transient Students',    desc: 'One semester here, returning to your home school', href: '/admissions/transient' },
  { label: 'International Students', desc: 'F-1 visa process and requirements',             href: '/admissions/international' },
  { label: 'Policies & Appeals',    desc: 'Academic standing, readmission, and appeals',   href: '/admissions/policies' },
  { label: 'Placement Testing',     desc: 'What to expect on the ACCUPLACER',              href: '/admissions/apply' },
  { label: 'Scholarship Search',    desc: 'Grants, waivers, and outside scholarships',     href: '/financial-aid' },
]

export default function AdmissionsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '42vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg" alt="Students on the Lawson State campus" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="page-fade-1 font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Rolling Admissions · Free to Apply · No GPA Minimum
          </p>
          <h1 className="page-fade-2 font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}>
            APPLY TO<br className="hidden md:block" /> LAWSON STATE
          </h1>
          <p className="page-fade-3 max-w-xl mb-8" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, color: 'oklch(1 0 0 / 0.75)' }}>
            Four steps. No fee. No minimum GPA. Our admissions team is here for you every step of the way.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/admissions/apply"
              className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
            >
              Start My Application
            </Link>
            <Link
              href="/financial-aid"
              className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}
            >
              Explore Financial Aid
            </Link>
          </div>
        </div>
      </section>

      {/* Quick-access strip */}
      <nav aria-label="Admissions quick links" style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '3px solid oklch(0.65 0.17 72)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {QUICK.map((q, i) => (
              <Link
                key={q.label}
                href={q.href}
                className="press group flex flex-col py-4 px-3 transition-colors hover:bg-black/5"
                style={{
                  borderRight: i < 3 ? '1px solid oklch(0.60 0.16 70 / 0.4)' : undefined,
                  borderBottom: i < 2 ? '1px solid oklch(0.60 0.16 70 / 0.4)' : undefined,
                }}
              >
                <span className="font-display font-black leading-none" style={{ fontSize: '0.97rem', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.01em' }}>{q.label}</span>
                <span className="mt-0.5" style={{ fontSize: '0.75rem', color: 'oklch(0.20 0.08 261)', lineHeight: 1.35 }}>{q.sub}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Browse by student type */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>Browse</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>FIND YOUR PATH</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {BROWSE.map(b => (
              <Link
                key={b.label}
                href={b.href}
                className="group card-lift rounded-2xl p-6 flex flex-col"
                style={{ background: 'oklch(0.97 0.02 255)', border: '1px solid oklch(0 0 0 / 0.07)', minHeight: '210px' }}
              >
                <span
                  className="font-display font-black mb-3"
                  style={{ fontSize: '2.6rem', lineHeight: 1, color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}
                  aria-hidden
                >
                  {b.num}
                </span>
                <span className="font-display font-black leading-tight mb-1" style={{ fontSize: '1.15rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.01em' }}>{b.label}</span>
                <span className="font-semibold mb-3" style={{ fontSize: '0.78rem', color: 'var(--lscc-eyebrow)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{b.tagline}</span>
                <span style={{ fontSize: '0.875rem', color: 'oklch(0.48 0.04 261)', lineHeight: 1.6, flex: 1 }}>{b.desc}</span>
                <span className="mt-4 font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontSize: '0.82rem', color: 'oklch(0.42 0.17 261)' }} aria-hidden>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>How to Apply</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>4 STEPS TO ENROLLMENT</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="card-lift rounded-2xl p-6 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-black flex-shrink-0"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.97rem' }}
                  aria-hidden
                >
                  {s.step}
                </div>
                <h3 className="font-display font-bold mb-2 leading-snug" style={{ fontSize: '1.02rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</h3>
                <p className="leading-relaxed mb-4 flex-1" style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)' }}>{s.desc}</p>
                {s.href && s.linkLabel && (
                  <a
                    href={s.href}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="link-reveal font-semibold"
                    style={{ fontSize: '0.875rem', color: 'var(--lscc-eyebrow)' }}
                  >
                    {s.linkLabel} →
                    {s.external && <span className="sr-only"> (opens in new tab)</span>}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Requirements by Type */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>Admissions Requirements</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>WHAT YOU NEED</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {TYPES.map(t => (
              <div key={t.id} className="rounded-2xl p-6 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.07)' }}>
                <h3
                  className="font-display font-black mb-4"
                  style={{ fontSize: '1.02rem', color: 'oklch(0.16 0.04 261)', borderBottom: '2px solid oklch(0.79 0.19 78)', paddingBottom: '0.65rem', marginBottom: '1rem' }}
                >
                  {t.label}
                </h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.items.map(item => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: '0.82rem', color: 'oklch(0.48 0.03 261)', lineHeight: 1.55 }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', flexShrink: 0, marginTop: '0.15rem' }} aria-hidden>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {t.external ? (
                  <a
                    href={t.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press font-bold px-5 py-2.5 rounded-lg block text-center"
                    style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.875rem' }}
                  >
                    {t.cta} →
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={t.ctaHref}
                    className="press font-bold px-5 py-2.5 rounded-lg block text-center"
                    style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.875rem' }}
                  >
                    {t.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>Resources</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>MORE WAYS WE CAN HELP</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map(r => (
              <Link
                key={r.label}
                href={r.href}
                className="group press flex items-center gap-4 rounded-xl p-5 transition-colors hover:bg-[oklch(0.95_0.03_255)]"
                style={{ background: 'oklch(0.97 0.02 255)', border: '1px solid oklch(0 0 0 / 0.07)' }}
              >
                <div className="flex-1">
                  <div className="font-display font-bold mb-0.5 group-hover:text-lscc-gold transition-colors" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{r.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'oklch(0.50 0.03 261)', lineHeight: 1.5 }}>{r.desc}</div>
                </div>
                <span className="font-bold group-hover:translate-x-1 transition-transform flex-shrink-0" style={{ color: 'oklch(0.42 0.17 261)' }} aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advising CTA */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>Free · Walk-In or By Phone</p>
              <h2 className="font-display font-black leading-none mb-4 text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>TALK TO AN ADVISOR</h2>
              <p className="leading-relaxed mb-8" style={{ fontSize: '1.05rem', color: 'oklch(1 0 0 / 0.72)', maxWidth: '48ch' }}>
                Not sure where to start? Our advisors will walk you through program selection, placement testing, financial aid, and every document you need — at no cost.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="press btn-shimmer inline-block font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}>
                  Contact Admissions
                </Link>
                <Link href="/portal" className="press inline-block font-semibold px-6 py-3 rounded-lg" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', color: 'white', fontSize: '0.96rem' }}>
                  Student Portal
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 scroll-reveal">
              {[
                { label: 'Main',     value: '205.925.2515' },
                { label: 'Direct',   value: '205.929.3416' },
                { label: 'Text Us',  value: '205.707.6422' },
                { label: 'Email',    value: 'admissions@lawsonstate.edu' },
                { label: 'Hours',    value: 'Mon–Fri 8 AM – 5 PM\nExt. Mon–Thu to 6:30 PM' },
                { label: 'Walk-Ins', value: 'Birmingham & Bessemer' },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-4" style={{ background: 'oklch(1 0 0 / 0.07)', border: '1px solid oklch(1 0 0 / 0.12)' }}>
                  <div className="font-semibold uppercase mb-0.5" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'var(--lscc-eyebrow-on-dark)' }}>{item.label}</div>
                  <div className="font-medium whitespace-pre-line" style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.85)' }}>{item.value}</div>
                </div>
              ))}
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
