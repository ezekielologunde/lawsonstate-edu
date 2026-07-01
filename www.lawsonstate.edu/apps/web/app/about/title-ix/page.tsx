import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const BEHAVIORS = [
  'Sexual harassment (unwelcome sexual conduct)',
  'Sexual assault, rape, or sexual battery',
  'Dating violence or domestic violence',
  'Stalking (in-person or electronic)',
  'Retaliation against a complainant or witness',
  'Quid pro quo (benefits conditioned on sexual favors)',
]

const RESOURCES = [
  { label: 'Campus Security',        value: '205.929.6350',           href: 'tel:+12059296350' },
  { label: 'Counseling Services',    value: '205.929.6360',           href: 'tel:+12059296360' },
  { label: '988 Crisis Line',        value: 'Call or text 988',       href: 'tel:988' },
  { label: 'National SA Hotline',    value: '1-800-656-HOPE',         href: 'tel:18006564673' },
  { label: 'National DV Hotline',    value: '1-800-799-SAFE',         href: 'tel:18007997233' },
  { label: '911 Emergency',          value: '911',                    href: 'tel:911' },
]

const STEPS = [
  { n: '01', title: 'Report', body: 'Contact the Title IX Coordinator directly, file a report online, or report to any campus employee (faculty and staff are mandatory reporters). Anonymous reports are accepted.' },
  { n: '02', title: 'Initial Review', body: 'The Title IX Coordinator reviews the report to determine whether the conduct falls within the Title IX policy. You will be notified of the outcome and offered supportive measures.' },
  { n: '03', title: 'Supportive Measures', body: 'The College offers interim measures regardless of whether a formal complaint is filed — no-contact orders, class reassignments, academic accommodations, counseling referrals.' },
  { n: '04', title: 'Formal Complaint & Investigation', body: 'If a formal complaint is filed, both parties are entitled to advisors, access to evidence, written notice of allegations, and a live hearing with cross-examination rights.' },
  { n: '05', title: 'Determination & Appeal', body: 'A decision-maker issues a written determination of responsibility. Both parties may appeal on limited grounds. Final decisions are issued in writing.' },
]

export default function TitleIXPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Title IX</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Federal Law · Sexual Misconduct Policy
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            TITLE IX
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            Lawson State Community College is committed to maintaining an educational environment free from sex discrimination, sexual harassment, and sexual misconduct.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <div style={{ background: 'oklch(0.55 0.18 27)', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-x-8 gap-y-1 items-center">
          <span className="font-bold text-xs uppercase" style={{ letterSpacing: '0.15em' }}>If you are in immediate danger</span>
          <a href="tel:911" className="text-sm font-bold underline">Call 911</a>
          <a href="tel:+12059296350" className="text-sm font-semibold">Campus Security · 205.929.6350</a>
        </div>
      </div>

      {/* Coordinator card */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8"
            style={{ background: 'oklch(0.22 0.17 261)', boxShadow: '0 4px 24px oklch(0.22 0.17 261 / 0.25)' }}
          >
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Report a Concern</p>
            <p className="font-display font-black text-white mb-5" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>TITLE IX / SECTION 504 COORDINATOR</p>
            <div className="flex flex-col gap-3 text-sm" style={{ color: 'oklch(1 0 0 / 0.80)' }}>
              <div>
                <span style={{ color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Office</span>
                Dean of Students, Lawson State Community College
              </div>
              <div>
                <span style={{ color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Phone</span>
                205.929.6361
              </div>
              <div>
                <span style={{ color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Email</span>
                cvance@lawsonstate.edu
              </div>
              <div>
                <span style={{ color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Location</span>
                3060 Wilson Road SW, Birmingham, AL 35221 · Academic Success Building, 2nd Floor
              </div>
              <div>
                <span style={{ color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>Hours</span>
                Monday – Friday · 8 AM – 5 PM
              </div>
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}>
              <p className="text-xs font-bold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow-on-dark)', letterSpacing: '0.1em' }}>Deputy Title IX Coordinator</p>
              <p className="text-xs" style={{ color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.6 }}>
                Director of Human Resources · 205.929.6313 · ebell@lawsonstate.edu<br />
                Dr. Perry W. Ward Alabama Center for Advanced Technology &amp; Training Building, 3rd Floor
              </p>
            </div>
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}>
              <p className="text-xs" style={{ color: 'oklch(1 0 0 / 0.55)' }}>
                Reports may also be submitted to the U.S. Department of Education, Office for Civil Rights: <span style={{ color: 'oklch(0.79 0.19 78)' }}>ed.gov/ocr</span>
              </p>
            </div>
          </div>
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What Is Title IX</p>
            <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>YOUR RIGHTS</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Title IX of the Education Amendments of 1972 prohibits sex discrimination in any education program or activity receiving federal financial assistance. Lawson State Community College does not discriminate on the basis of sex.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              This prohibition covers all students, faculty, staff, and visitors — in classrooms, residence halls, online environments, and College-sponsored activities.
            </p>
            <div className="rounded-xl p-5" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
              <p className="font-bold text-xs uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Covered Behaviors</p>
              <ul className="flex flex-col gap-2">
                {BEHAVIORS.map((b) => (
                  <li key={b} className="flex gap-2 text-sm" style={{ color: 'oklch(0.38 0.04 261)' }}>
                    <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grievance process */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Grievance Procedure</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW THE PROCESS WORKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-2" style={{ fontSize: '2.2rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-5" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}>
            <p className="font-bold text-xs uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Anti-Retaliation</p>
            <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>
              Lawson State strictly prohibits retaliation against any person who files a complaint, participates in an investigation, or opposes a discriminatory practice. Retaliation is itself a violation of Title IX and College policy and will be addressed with appropriate disciplinary action.
            </p>
          </div>
        </div>
      </section>

      {/* Support resources */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Help Is Available</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>SUPPORT RESOURCES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                className="press flex items-center justify-between rounded-xl px-5 py-4 hover:opacity-80 transition-opacity"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <div>
                  <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{r.label}</p>
                  <p className="text-sm" style={{ color: 'oklch(0.50 0.04 261)' }}>{r.value}</p>
                </div>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>→</span>
              </a>
            ))}
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
