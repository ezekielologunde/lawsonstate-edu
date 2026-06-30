import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const REPORTS = [
  { year: '2023–2024', label: 'Annual Financial Report', type: 'Audited', href: 'https://lawsonstate.edu/about/financials', available: true },
  { year: '2022–2023', label: 'Annual Financial Report', type: 'Audited', href: 'https://lawsonstate.edu/about/financials', available: true },
  { year: '2021–2022', label: 'Annual Financial Report', type: 'Audited', href: 'https://lawsonstate.edu/about/financials', available: true },
  { year: '2023–2024', label: 'Single Audit Report', type: 'Federal', href: 'https://lawsonstate.edu/about/financials', available: true },
  { year: '2023–2024', label: 'Budget Summary', type: 'ACCS', href: 'https://www.accs.edu/public-records/', available: true },
]

const FUNDING = [
  { source: 'State Appropriation', pct: '47%', desc: 'Allocated by the Alabama Legislature through the Alabama Community College System.' },
  { source: 'Tuition & Fees', pct: '24%', desc: 'In-state tuition of $131/credit hour plus mandatory course and technology fees.' },
  { source: 'Federal Grants', pct: '22%', desc: 'Pell Grants, Title III HBCU funds, Workforce Innovation, and TRIO program grants.' },
  { source: 'Auxiliary & Other', pct: '7%', desc: 'Bookstore revenue, facility rentals, and other non-instructional sources.' },
]

export default function FinancialDataPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Financial Data</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Transparency · Audited Reports · Public Records
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            FINANCIAL DATA
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Lawson State is committed to financial transparency. Audited financial reports, budget summaries, and public records are available to students, employees, and the public.
          </p>
        </div>
      </section>

      {/* Funding breakdown */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Revenue Sources</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW WE ARE FUNDED</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FUNDING.map((f) => (
              <div key={f.source} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <div className="font-display font-black mb-2" style={{ fontSize: '2.2rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}>{f.pct}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.9rem', color: 'oklch(0.16 0.04 261)' }}>{f.source}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Percentages are approximate and based on most recently available fiscal year data. See audited reports for precise figures.</p>
        </div>
      </section>

      {/* Reports */}
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
            <a href="https://www.accs.edu/public-records/" target="_blank" rel="noopener noreferrer" className="press inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              ACCS Public Records →<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/contact" className="press inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              Public Records Requests →
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
