import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const FAST_FACTS = [
  { value: '1949', label: 'Year Founded', note: 'One of Alabama\'s oldest HBCUs' },
  { value: '4,500+', label: 'Students Enrolled', note: 'Credit and non-credit students' },
  { value: '200+', label: 'Programs Offered', note: 'Degrees, diplomas, certificates' },
  { value: '$131', label: 'Per Credit Hour', note: 'In-state tuition — among Alabama\'s lowest' },
  { value: '2', label: 'Campuses', note: 'Birmingham and Bessemer' },
  { value: '75+', label: 'Years of History', note: 'Serving Birmingham since 1949' },
  { value: '14', label: 'Varsity Sports', note: 'NJCAA — Cougar Athletics' },
  { value: '75%', label: 'Pell-Eligible', note: 'Students qualifying for Pell Grants' },
]

const ENROLLMENT = [
  { label: 'Full-Time Students', value: '~52%' },
  { label: 'Part-Time Students', value: '~48%' },
  { label: 'First-Generation College Students', value: '~60%' },
  { label: 'African American/Black Students', value: '~88%' },
  { label: 'Female Students', value: '~58%' },
  { label: 'Average Student Age', value: '24' },
  { label: 'In-State Students', value: '~97%' },
  { label: 'Students Receiving Financial Aid', value: '~85%' },
]

const OUTCOMES = [
  { label: 'Transfer Success', desc: 'Graduates transfer to UAB, UA, Auburn, and colleges across Alabama with full credit recognition.' },
  { label: 'Workforce Placement', desc: 'Allied Health and technical graduates report high job placement rates in the Greater Birmingham region.' },
  { label: 'Graduation Rate (IPEDS)', desc: 'On-time completion rates are tracked and reported annually to IPEDS. See College Navigator for current data.' },
  { label: 'Tutor.com Access', desc: '100% of enrolled students have 24/7 access to Tutor.com for online tutoring and academic support.' },
]

export default function FactsDataPage() {
  return (
    <>
      <Nav />

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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Facts & Data</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Institutional Research · Enrollment · Outcomes
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            FACTS & DATA
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Institutional data about Lawson State Community College — enrollment, demographics, student outcomes, and quick facts. Data reported to federal and state agencies is available through the links below.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://collegenavigator.ed.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              College Navigator (IPEDS)
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/about/financial-data" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Financial Data →
            </Link>
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>At a Glance</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FAST FACTS</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {FAST_FACTS.map((f) => (
              <div key={f.label} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <div className="font-display font-black mb-1" style={{ fontSize: '2rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em', lineHeight: 1 }}>{f.value}</div>
                <p className="font-display font-bold mb-1" style={{ fontSize: '0.85rem', color: 'oklch(0.16 0.04 261)' }}>{f.label}</p>
                <p style={{ fontSize: '0.75rem', color: 'oklch(0.55 0.04 261)', lineHeight: 1.4 }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment profile */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Student Profile</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ENROLLMENT SNAPSHOT</h2>
            <div className="flex flex-col gap-2">
              {ENROLLMENT.map((e) => (
                <div key={e.label} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.05)' }}>
                  <span className="text-sm" style={{ color: 'oklch(0.38 0.04 261)' }}>{e.label}</span>
                  <span className="font-display font-black text-sm ml-4 shrink-0" style={{ color: 'oklch(0.22 0.17 261)' }}>{e.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Data reflects most recently available academic year. Figures are approximate. See IPEDS for official figures.</p>
          </div>
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Student Success</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>OUTCOMES & PERFORMANCE</h2>
            <div className="flex flex-col gap-4">
              {OUTCOMES.map((o) => (
                <div key={o.label} className="rounded-2xl p-5" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}>
                  <p className="font-display font-black mb-1.5" style={{ fontSize: '0.92rem', color: 'oklch(0.22 0.17 261)' }}>{o.label}</p>
                  <p style={{ fontSize: '0.84rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* External data sources */}
      <section className="py-12 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-4" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Official Data Sources</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'IPEDS Data (College Navigator)', href: 'https://collegenavigator.ed.gov', desc: 'Official federal enrollment, completion, and cost data' },
              { label: 'ACCS Institutional Research', href: 'https://www.accs.edu/research', desc: 'Alabama Community College System data reports' },
              { label: 'College Scorecard', href: 'https://collegescorecard.ed.gov', desc: 'Federal student outcomes and earnings data' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="press flex flex-col gap-1 rounded-2xl p-5 hover:shadow-md transition-shadow" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{s.label}</p>
                <p className="text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>{s.desc}</p>
                <span className="text-xs font-bold mt-1" style={{ color: 'oklch(0.42 0.17 261)' }}>Visit →<span className="sr-only"> (opens in new tab)</span></span>
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
