import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const FAST_FACTS = [
  { value: '1949', label: 'Year Founded', note: 'One of Alabama\'s oldest HBCUs' },
  { value: '3,453', label: 'Students Enrolled', note: 'Total enrollment, Fall 2024' },
  { value: '200+', label: 'Programs Offered', note: 'Degrees, diplomas, certificates' },
  { value: '$131', label: 'Per Credit Hour', note: 'In-state tuition — among Alabama\'s lowest' },
  { value: '2', label: 'Campuses', note: 'Birmingham and Bessemer' },
  { value: '75+', label: 'Years of History', note: 'Serving Birmingham since 1949' },
  { value: '14', label: 'Varsity Sports', note: 'NJCAA — Cougar Athletics' },
  { value: '72.12%', label: 'Job Placement Rate', note: '2024 Annual Report' },
]

const ENROLLMENT = [
  { label: 'Female Students', value: '65.2%' },
  { label: 'Male Students', value: '34.8%' },
  { label: 'Students Age 20+', value: '60.2%' },
  { label: 'Part-Time Students', value: '64.8%' },
  { label: 'Student-to-Faculty Ratio', value: '17 to 1' },
  { label: 'Dual Enrollment Students (Fall 2024)', value: '512' },
]

// Verified against the source institutional page directly (about_us/facts_and_data/
// student_achievement_facts.aspx.html) — not paraphrased from a secondary summary.
const ACHIEVEMENT_GOALS = [
  { metric: 'Course Completion', target: '70%', actual: '73.2%', met: true, note: '6-year average, including COVID years' },
  { metric: 'Fall-to-Fall Retention', target: '42%', actual: '51.4%', met: true, note: 'Full- and part-time combined' },
  { metric: 'Graduation Rate', target: '25%', actual: '26%', met: true, note: '2024, 150% IPEDS time-to-completion' },
  { metric: 'Transfer-Ready Rate', target: '25%', actual: '32.4–34.7%', met: true, note: 'A.A./A.S. share of annual awards, 2022–2024' },
  { metric: 'NCLEX Licensure Pass Rate', target: '80%', actual: '97.2%', met: true, note: 'ADN, 2024 — exceeded 3 straight testing cycles' },
  { metric: 'Job Placement Rate', target: 'State target ±10%', actual: '94.1%', met: true, note: '2023–24, vs. 75.2% state target' },
]

const GRADUATION_COMPARISON = [
  { school: 'Lawson State', rate: 26, highlight: true },
  { school: 'Gadsden State', rate: 32 },
  { school: 'Calhoun', rate: 41 },
  { school: 'Jefferson State', rate: 23 },
  { school: 'Shelton State', rate: 21 },
]

const NCLEX_ADN = [
  { year: '2020', tested: 47, passed: 45, rate: '95.7%' },
  { year: '2021', tested: 39, passed: 35, rate: '89.7%' },
  { year: '2022', tested: 30, passed: 25, rate: '83.3%' },
  { year: '2023', tested: 42, passed: 40, rate: '95.24%' },
  { year: '2024', tested: 36, passed: 35, rate: '97.22%' },
]

const NCLEX_PN = [
  { year: '2020', tested: 21, passed: 21, rate: '100%' },
  { year: '2021', tested: 18, passed: 17, rate: '94.4%' },
  { year: '2022', tested: 23, passed: 22, rate: '95.7%' },
  { year: '2023', tested: 17, passed: 17, rate: '100%' },
  { year: '2024', tested: 14, passed: 12, rate: '85.7%' },
]

const OUTCOMES = [
  { label: 'Job Placement Rate', desc: '72.12% of graduates are placed in their field of study or continue their education, per the 2024 Annual Report.' },
  { label: 'Economic Impact', desc: 'Lawson State added $368.1 million in income to the local economy in FY 2023-24, supporting 4,765 jobs. Source: Lightcast Economic Impact Report, 2025.' },
  { label: 'Lifetime Earnings Premium', desc: 'The average Lawson State associate degree graduate earns $10,100 more annually than a high school diploma holder — $404,000 over a working lifetime.' },
  { label: 'Return on Investment', desc: 'Students earn $7.90 in lifetime earnings for every $1 invested in their education — a 26.4% average annual rate of return. Source: Lightcast Economic Impact Report, 2025.' },
  { label: 'Graduation Rate (IPEDS)', desc: 'On-time completion rates are tracked and reported annually to IPEDS. See College Navigator for current data.' },
]

const FUNDING = [
  { source: 'Federal Grants & Aid', pct: '61%', desc: 'Pell Grants, federal grants and contracts — the largest revenue source for a high-Pell-eligibility institution.' },
  { source: 'State Appropriations', pct: '24%', desc: 'Operating and state/local grant funding allocated through the Alabama Community College System.' },
  { source: 'Capital Appropriations', pct: '10%', desc: 'State funding for facilities, equipment, and capital projects.' },
  { source: 'Tuition & Fees', pct: '3%', desc: 'In-state tuition of $131/credit hour, net of scholarships — kept deliberately low.' },
]

const REPORTS = [
  { year: 'FY 2023', label: 'Financial Statements (Audited)', type: 'Audited', href: 'https://www.accs.edu/about-accs/financial-disclosure/', available: true },
  { year: 'FY 2023', label: 'Single Audit Report', type: 'Federal', href: 'https://www.accs.edu/about-accs/financial-disclosure/', available: true },
  { year: 'Current', label: 'ACCS Financial Disclosures', type: 'ACCS', href: 'https://www.accs.edu/about-accs/financial-disclosure/', available: true },
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
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
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
              href="https://nces.ed.gov/collegenavigator/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              College Navigator (IPEDS)
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href="#financial" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Financial Transparency ↓
            </a>
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
            <p className="mt-3 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Source: Lawson State 2024 Annual Report, Institutional Research (9/17/24). See IPEDS for official federal figures.</p>
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

      {/* Student Achievement — real 2019-2025 completion/retention/NCLEX data,
          reported to SACSCOC per the College's institutional mission. */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.97 0.015 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>SACSCOC-Reported · Institutional Goals</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STUDENT ACHIEVEMENT</h2>
            <p className="mt-3 max-w-[68ch]" style={{ fontSize: '0.95rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.7 }}>
              Lawson State sets internal threshold targets for student success and measures itself against them annually, per SACSCOC requirements. The College has met every benchmark below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {ACHIEVEMENT_GOALS.map((g) => (
              <div key={g.metric} className="rounded-2xl p-5" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-display font-bold" style={{ fontSize: '0.85rem', color: 'oklch(0.16 0.04 261)' }}>{g.metric}</p>
                  {g.met && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'oklch(0.55 0.16 160 / 0.12)', color: 'oklch(0.40 0.16 160)' }}>Met</span>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-black" style={{ fontSize: '1.6rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}>{g.actual}</span>
                  <span style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.04 261)' }}>vs. {g.target} target</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.04 261)', lineHeight: 1.5 }}>{g.note}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Graduation rate comparison */}
            <div>
              <p className="font-display font-bold mb-4" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>2024 Graduation Rate vs. Alabama Two-Year Peers</p>
              <div className="flex flex-col gap-2.5">
                {GRADUATION_COMPARISON.map((s) => (
                  <div key={s.school} className="flex items-center gap-3">
                    <span className="shrink-0" style={{ width: '8.5rem', fontSize: '0.82rem', fontWeight: s.highlight ? 700 : 500, color: s.highlight ? 'oklch(0.16 0.04 261)' : 'oklch(0.45 0.04 261)' }}>{s.school}</span>
                    <div className="flex-1 rounded-full overflow-hidden" style={{ background: 'oklch(0 0 0 / 0.06)', height: '10px' }}>
                      <div style={{ width: `${(s.rate / 41) * 100}%`, height: '100%', background: s.highlight ? 'oklch(0.79 0.19 78)' : 'oklch(0.22 0.17 261 / 0.35)', borderRadius: '999px' }} />
                    </div>
                    <span className="shrink-0 font-bold" style={{ width: '2.5rem', fontSize: '0.82rem', textAlign: 'right', color: 'oklch(0.16 0.04 261)' }}>{s.rate}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Source: Alabama Commission of Higher Education, 2024 comparison data.</p>
            </div>

            {/* NCLEX pass rates */}
            <div>
              <p className="font-display font-bold mb-4" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>NCLEX Licensure Pass Rates — Nursing Programs</p>
              <div className="overflow-x-auto rounded-xl mb-3" style={{ border: '1px solid oklch(0 0 0 / 0.07)' }}>
                <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                      <th className="text-left px-3 py-2 text-xs font-bold uppercase">Year</th>
                      <th className="text-right px-3 py-2 text-xs font-bold uppercase">Tested</th>
                      <th className="text-right px-3 py-2 text-xs font-bold uppercase">Passed</th>
                      <th className="text-right px-3 py-2 text-xs font-bold uppercase">ADN Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {NCLEX_ADN.map((r, i) => (
                      <tr key={r.year} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)' }}>
                        <td className="px-3 py-2" style={{ color: 'oklch(0.28 0.05 261)' }}>{r.year}</td>
                        <td className="px-3 py-2 text-right" style={{ color: 'oklch(0.45 0.04 261)' }}>{r.tested}</td>
                        <td className="px-3 py-2 text-right" style={{ color: 'oklch(0.45 0.04 261)' }}>{r.passed}</td>
                        <td className="px-3 py-2 text-right font-bold" style={{ color: 'var(--lscc-eyebrow)' }}>{r.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <details>
                <summary className="text-xs font-semibold cursor-pointer" style={{ color: 'oklch(0.42 0.17 261)' }}>Show Practical Nursing (PN) pass rates</summary>
                <div className="overflow-x-auto rounded-xl mt-2" style={{ border: '1px solid oklch(0 0 0 / 0.07)' }}>
                  <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'oklch(0.95 0.03 255)' }}>
                        <th className="text-left px-3 py-2 text-xs font-bold uppercase" style={{ color: 'oklch(0.45 0.04 261)' }}>Year</th>
                        <th className="text-right px-3 py-2 text-xs font-bold uppercase" style={{ color: 'oklch(0.45 0.04 261)' }}>Tested</th>
                        <th className="text-right px-3 py-2 text-xs font-bold uppercase" style={{ color: 'oklch(0.45 0.04 261)' }}>Passed</th>
                        <th className="text-right px-3 py-2 text-xs font-bold uppercase" style={{ color: 'oklch(0.45 0.04 261)' }}>PN Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {NCLEX_PN.map((r, i) => (
                        <tr key={r.year} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)' }}>
                          <td className="px-3 py-2" style={{ color: 'oklch(0.28 0.05 261)' }}>{r.year}</td>
                          <td className="px-3 py-2 text-right" style={{ color: 'oklch(0.45 0.04 261)' }}>{r.tested}</td>
                          <td className="px-3 py-2 text-right" style={{ color: 'oklch(0.45 0.04 261)' }}>{r.passed}</td>
                          <td className="px-3 py-2 text-right font-bold" style={{ color: 'var(--lscc-eyebrow)' }}>{r.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>
              <p className="mt-3 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>State benchmark: 80% for both programs. Source: Alabama Board of Nursing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial transparency (merged from former /about/financial-data) */}
      <section id="financial" className="py-16 px-6 scroll-mt-24" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Financial Transparency · Revenue Sources</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}>HOW WE ARE FUNDED</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FUNDING.map((f) => (
              <div key={f.source} className="rounded-2xl p-6" style={{ background: 'oklch(1 0 0 / 0.06)', border: '1.5px solid oklch(1 0 0 / 0.12)' }}>
                <div className="font-display font-black mb-2" style={{ fontSize: '2.2rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}>{f.pct}</div>
                <p className="font-display font-black mb-2 text-white" style={{ fontSize: '0.9rem' }}>{f.source}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(1 0 0 / 0.65)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs" style={{ color: 'oklch(1 0 0 / 0.45)' }}>Source: Lawson State Community College Financial Statements, FY ended September 30, 2023 (Warren Averett, LLC, independent auditors). Percentages rounded.</p>
        </div>
      </section>

      {/* Financial reports */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Published Documents</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FINANCIAL REPORTS</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '480px' }}>
              <thead>
                <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Period</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Report</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Type</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em', textAlign: 'right' }}>Access</th>
                </tr>
              </thead>
              <tbody>
                {REPORTS.map((r, i) => (
                  <tr key={`${r.year}-${r.label}`} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0 0 0 / 0.04)' }}>
                    <td className="px-5 py-3 text-sm font-medium" style={{ color: 'oklch(0.28 0.05 261)' }}>{r.year}</td>
                    <td className="px-5 py-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)' }}>{r.label}</td>
                    <td className="px-5 py-3 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full font-semibold" style={{ background: 'oklch(0.79 0.19 78 / 0.10)', color: 'oklch(0.42 0.15 78)' }}>{r.type}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                        View PDF →<span className="sr-only"> {r.year} {r.label} (opens in new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="https://www.accs.edu/open-records-request-form/" target="_blank" rel="noopener noreferrer" className="press inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              ACCS Open Records Request →<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/contact" className="press inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              Public Records Requests →
            </Link>
          </div>
        </div>
      </section>

      {/* External data sources */}
      <section className="py-12 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-4" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Official Data Sources</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'IPEDS Data (College Navigator)', href: 'https://nces.ed.gov/collegenavigator/', desc: 'Official federal enrollment, completion, and cost data' },
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
