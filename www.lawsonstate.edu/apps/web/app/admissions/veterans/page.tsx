import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Veterans & Military — Admissions | Lawson State',
  description: 'Lawson State Community College is proud to serve veterans, active duty service members, and military families. Learn about GI Bill benefits, VA certifications, and veteran support services.',
}

const SUBNAV = [
  { label: 'First Time Students',               href: '/admissions/apply' },
  { label: 'Non-Degree Seekers',                href: '/admissions/non-degree' },
  { label: 'Transferring from Another College', href: '/admissions/transfer' },
  { label: 'International Students',            href: '/admissions/international' },
  { label: 'Transient Students',                href: '/admissions/transient' },
  { label: 'Admissions Policies & Forms',       href: '/admissions/policies' },
  { label: 'Dual Enrollment',                   href: '/admissions/dual-enrollment' },
  { label: 'Veterans & Military',               href: '/admissions/veterans' },
]
const ACTIVE = '/admissions/veterans'

const BENEFITS = [
  {
    label: 'Post-9/11 GI Bill® (Chapter 33)',
    desc: 'Covers tuition and fees in full for qualifying veterans. Also provides a monthly housing allowance and an annual book stipend. Most commonly used benefit at Lawson State.',
    badge: 'Chapter 33',
  },
  {
    label: 'Montgomery GI Bill® – Active Duty (Chapter 30)',
    desc: 'Monthly education benefit paid directly to the veteran while enrolled at least half-time. Amount varies by length of active duty service.',
    badge: 'Chapter 30',
  },
  {
    label: 'Montgomery GI Bill® – Selected Reserve (Chapter 1606)',
    desc: 'For members of the National Guard and Reserve who have a 6-year obligation. Benefit paid monthly for qualifying enrollment.',
    badge: 'Chapter 1606',
  },
  {
    label: "Survivors' and Dependents' Educational Assistance (Chapter 35)",
    desc: 'For dependents of veterans who are permanently and totally disabled or who died while on active duty. Contact the VA for eligibility details.',
    badge: 'Chapter 35',
  },
  {
    label: 'Vocational Rehabilitation & Employment (Chapter 31)',
    desc: 'For veterans with service-connected disabilities. VR&E can cover education costs and provide additional support services. Must be approved by the VA.',
    badge: 'Chapter 31',
  },
  {
    label: 'Hazlewood Act (State Benefit)',
    desc: 'Alabama does not offer a Hazlewood-equivalent exemption. Contact the Veterans Services Office for information on Alabama state veteran education benefits.',
    badge: 'State',
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Apply to Lawson State',
    body: 'Submit your free admissions application. Under enrollment type, indicate your veteran or active duty status.',
  },
  {
    n: '02',
    title: 'Submit VA Documents',
    body: 'Provide your Certificate of Eligibility (COE) from the VA, DD-214 (if applicable), and any other benefit-specific documents to the Veterans Services Office.',
  },
  {
    n: '03',
    title: 'Meet with a Veterans Advisor',
    body: 'The Veterans Services Office will verify your benefit type, explain your entitlements, and certify your enrollment to the VA each semester.',
  },
  {
    n: '04',
    title: 'Register for Classes',
    body: 'Once admitted and certified, register through MyLawson. Notify Veterans Services of any schedule changes — adding or dropping courses affects your VA payments.',
  },
]

const SUPPORT = [
  {
    label: 'Cougar Professional Wear for Veterans',
    desc: 'Free professional clothing for veterans attending job interviews or career events. Ask at the Veterans Services Office.',
  },
  {
    label: 'Priority Registration',
    desc: 'Qualifying veterans receive priority course registration each semester — register before the general student population.',
  },
  {
    label: 'Veterans Lounge',
    desc: 'Dedicated space on the Birmingham Campus where veterans can study, connect with peers, and access resources.',
  },
  {
    label: 'Academic Advising',
    desc: 'Veterans have access to dedicated advisors who understand military transcripts, credit for service training (AARTS/SMART), and accelerated pathways.',
  },
  {
    label: 'Counseling Services',
    desc: 'Mental health and personal counseling available at no cost to LSCC students. Veterans are encouraged to connect with counselors who understand military service transitions.',
  },
]

export default function VeteransPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="absolute inset-0" aria-hidden
          style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Veterans &amp; Military</span>
          </p>
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Serving Those Who Served
          </p>
          <h1 className="font-display font-black text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.025em' }}>
            VETERANS &amp; MILITARY
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '50ch', lineHeight: 1.7, marginTop: '0.75rem' }}>
            Lawson State honors your service. We make it easy to use your VA benefits and transition to civilian academic life.
          </p>
        </div>
      </section>

      {/* Subnav */}
      <nav aria-label="Admissions navigation" className="border-b overflow-x-auto"
        style={{ background: 'white', borderColor: 'oklch(0.92 0.01 263)' }}>
        <ul className="max-w-7xl mx-auto px-6 flex gap-0 min-w-max">
          {SUBNAV.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}
                className="inline-block py-4 px-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap"
                style={{
                  borderColor: href === ACTIVE ? 'oklch(0.79 0.19 78)' : 'transparent',
                  color: href === ACTIVE ? 'oklch(0.22 0.17 261)' : 'oklch(0.45 0.08 263)',
                }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Steps */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Getting Started</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO ENROLL</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="flex flex-col gap-3">
                <div className="font-display font-black" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VA Benefits */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>GI Bill &amp; VA Benefits</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>EDUCATION BENEFITS</h2>
            <p className="mt-3" style={{ fontSize: '0.95rem', color: 'oklch(0.45 0.04 261)', maxWidth: '60ch', lineHeight: 1.7 }}>
              Lawson State is approved for all VA education benefits. Our Veterans Certifying Official (VCO) processes your VA enrollment each semester.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div
                key={b.label}
                className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="font-bold text-xs uppercase px-3 py-0.5 rounded-full shrink-0"
                    style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.1em', marginTop: '0.15rem' }}
                  >
                    {b.badge}
                  </span>
                  <p className="font-display font-black" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)', lineHeight: 1.3 }}>{b.label}</p>
                </div>
                <p style={{ fontSize: '0.87rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl px-5 py-4" style={{ background: 'oklch(0.22 0.17 261 / 0.06)', border: '1.5px solid oklch(0.22 0.17 261 / 0.12)' }}>
            <p className="text-sm" style={{ color: 'oklch(0.35 0.04 261)', lineHeight: 1.65 }}>
              <strong>GI Bill®</strong> is a registered trademark of the U.S. Department of Veterans Affairs (VA). More information about education benefits offered by VA is available at the official U.S. government website at{' '}
              <a href="https://www.va.gov/education/about-gi-bill-benefits/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                va.gov<span className="sr-only"> (opens in new tab)</span>
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Veteran support services */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Veteran Support</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>BUILT FOR VETERANS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORT.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-5"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</p>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Veterans Services Office</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              205.929.6360 · veterans@lawsonstate.edu · Birmingham &amp; Bessemer Campuses
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://lawsonstate.edu/admissions/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Apply Now — Free<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press shrink-0 font-semibold px-6 py-3.5 rounded-xl text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.92rem' }}
            >
              Contact Veterans Office
            </Link>
          </div>
        </div>
      </div>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
