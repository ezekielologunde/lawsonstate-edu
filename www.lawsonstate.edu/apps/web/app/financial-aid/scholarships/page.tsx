import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const LSCC_SCHOLARSHIPS = [
  {
    name: 'Lawson State Foundation Scholarship',
    amount: 'Varies',
    basis: 'Need & Merit',
    desc: 'The Foundation awards scholarships to currently enrolled and incoming students based on academic performance and financial need. Apply through the Financial Aid Office.',
    deadline: 'April 1 for fall · October 1 for spring',
  },
  {
    name: 'Presidential Scholarship',
    amount: 'Up to full tuition',
    basis: 'Merit',
    desc: 'Awarded to exceptional incoming students with a strong GPA and community involvement. Contact Admissions for eligibility requirements.',
    deadline: 'Rolling · limited seats',
  },
  {
    name: 'Athletics Scholarship',
    amount: 'Varies',
    basis: 'Athletic performance',
    desc: 'Available to student-athletes competing in NJCAA-sanctioned sports. Contact the Athletics Department for tryout and eligibility information.',
    deadline: 'Contact athletics',
  },
  {
    name: 'Phi Theta Kappa Scholarship',
    amount: 'Varies',
    basis: 'Academic honor society',
    desc: 'PTK members in good standing may qualify for PTK scholarships for transfer to four-year institutions. Membership requires a 3.5 GPA.',
    deadline: 'Varies by institution',
  },
  {
    name: 'Workforce Development Scholarship',
    amount: 'Varies',
    basis: 'Career program enrollment',
    desc: 'Available to students enrolled in career and technical education programs. Tied to workforce development funding from the state.',
    deadline: 'Contact Workforce Development',
  },
]

const TRANSFER_SCHOLARSHIPS = [
  {
    institution: 'Athens State University',
    name: 'Transfer Scholarship',
    note: 'Partnered transfer pathway — guaranteed scholarship for qualifying LSCC transfers',
  },
  {
    institution: 'Jacksonville State University',
    name: 'Transfer Scholarship',
    note: 'Transfer pathway for 2+2 students',
  },
  {
    institution: 'Troy University',
    name: 'Transfer Scholarship',
    note: 'Academic scholarship for transfer students',
  },
  {
    institution: 'UAB',
    name: 'UAB Transfer Scholarship',
    note: 'Birmingham-local pathway for LSCC graduates',
  },
  {
    institution: 'The University of Alabama',
    name: 'Transfer Scholarship',
    note: 'Articulation agreement with LSCC',
  },
]

const EXTERNAL_SOURCES = [
  { label: 'Alabama Department of Education', note: 'State grants and workforce scholarships', href: 'https://www.alsde.edu' },
  { label: 'Alabama Student Assistance Program (ASAP)', note: 'Need-based state grant — awarded via FAFSA', href: 'https://ache.edu' },
  { label: 'TEACH Grant', note: 'Federal grant for future teachers in high-need fields', href: 'https://studentaid.gov' },
  { label: 'Fastweb', note: 'Free scholarship search database — millions of awards', href: 'https://www.fastweb.com' },
  { label: 'Scholarships.com', note: 'Match engine for external scholarships', href: 'https://www.scholarships.com' },
]

export default function ScholarshipsPage() {
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
            <Link href="/financial-aid" className="hover:text-white transition-colors">Financial Aid</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Scholarships</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Merit & Need · $1.5M Awarded Annually
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            SCHOLARSHIPS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Lawson State awards approximately $1.5 million in scholarships and grant funds annually. Start with the FAFSA, then apply directly.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/financial-aid/fafsa"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Complete FAFSA First →
            </Link>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Contact Financial Aid
            </Link>
          </div>
        </div>
      </section>

      {/* LSCC scholarships */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Lawson State Awards</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>LSCC SCHOLARSHIPS</h2>
          </div>
          <div className="flex flex-col gap-5">
            {LSCC_SCHOLARSHIPS.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl p-6"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-2 items-start mb-3">
                  <p className="font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{s.name}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="inline-flex items-center font-bold text-xs uppercase px-3 py-0.5 rounded-full"
                      style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.42 0.15 78)', letterSpacing: '0.1em' }}
                    >
                      {s.basis}
                    </span>
                    <span
                      className="inline-flex items-center font-bold text-xs uppercase px-3 py-0.5 rounded-full"
                      style={{ background: 'oklch(0.22 0.17 261 / 0.08)', color: 'oklch(0.42 0.17 261)', letterSpacing: '0.1em' }}
                    >
                      {s.amount}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{s.desc}</p>
                <div className="rounded-lg px-3 py-1.5" style={{ background: 'oklch(0.95 0.03 255)', display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span className="text-xs font-bold uppercase" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.1em' }}>Deadline:</span>
                  <span className="text-xs font-semibold" style={{ color: 'oklch(0.35 0.04 261)' }}>{s.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer scholarships */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Transfer Pathways</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TRANSFER SCHOLARSHIPS</h2>
            <p className="mt-3" style={{ fontSize: '0.95rem', color: 'oklch(0.45 0.04 261)', maxWidth: '60ch', lineHeight: 1.7 }}>
              Lawson State has partnerships with several four-year universities that include scholarship opportunities for LSCC graduates. Speak with your advisor for details.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TRANSFER_SCHOLARSHIPS.map((s) => (
              <div
                key={s.institution}
                className="rounded-xl p-5"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}
              >
                <p className="font-display font-black mb-1" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{s.institution}</p>
                <p className="font-semibold text-xs mb-2" style={{ color: 'oklch(0.79 0.19 78)' }}>{s.name}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.55 }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External sources */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>More Funding</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ADDITIONAL RESOURCES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXTERNAL_SOURCES.map((src) => (
              <a
                key={src.label}
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group press rounded-xl p-5 flex flex-col gap-2"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <p className="font-bold" style={{ fontSize: '0.92rem', color: 'oklch(0.16 0.04 261)' }}>{src.label}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.50 0.04 261)', lineHeight: 1.55 }}>{src.note}</p>
                <span className="font-bold text-xs mt-auto" style={{ color: 'oklch(0.42 0.17 261)' }}>
                  Visit →<span className="sr-only"> {src.label} (opens in new tab)</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Not sure which scholarship to apply for?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Financial Aid Office · 205.929.6346 · finaid@lawsonstate.edu
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Talk to Financial Aid
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
