import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const PROGRAM_ACCREDITATIONS = [
  { program: 'Nursing (A.D.N.)', body: 'Accreditation Commission for Education in Nursing (ACEN)', href: 'https://acenursing.org' },
  { program: 'Dental Assisting', body: 'Commission on Dental Accreditation (CODA), American Dental Association', href: 'https://ada.org' },
  { program: 'Emergency Medical Services', body: 'Committee on Accreditation of Educational Programs for the EMS Professions (CoAEMSP)', href: 'https://coaemsp.org' },
  { program: 'Cosmetology', body: 'National Accrediting Commission of Career Arts and Sciences (NACCAS)', href: 'https://naccas.org' },
  { program: 'Medical Office Administration', body: 'American Association of Medical Assistants (AAMA) — Curriculum approved', href: 'https://aama-ntl.org' },
]

const MEMBERSHIPS = [
  'Alabama Community College System (ACCS)',
  'American Association of Community Colleges (AACC)',
  'Association of Community College Trustees (ACCT)',
  'Thurgood Marshall College Fund (TMCF)',
  'United Negro College Fund (UNCF)',
  'National Council on Black American Affairs (NCBAA)',
  'Alabama Association of College Registrars and Admissions Officers (AACRAO-AL)',
]

export default function AccreditationPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Accreditation</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            SACSCOC · Program Accreditation · Memberships
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ACCREDITATION
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Lawson State Community College is fully accredited by the Southern Association of Colleges and Schools Commission on Colleges (SACSCOC) — the regional accrediting body for degree-granting institutions in the southeastern United States.
          </p>
        </div>
      </section>

      {/* Regional accreditation */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Regional Accreditor</p>
            <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>SACSCOC ACCREDITATION</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Lawson State Community College is accredited by the Southern Association of Colleges and Schools Commission on Colleges to award associate degrees and certificates. SACSCOC regional accreditation means that Lawson State credits are widely accepted for transfer to four-year universities and that our degrees are recognized by employers and federal aid programs.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Contact SACSCOC at: 1866 Southern Lane, Decatur, Georgia 30033-4097. Telephone: 404.679.4500. For questions about Lawson State&apos;s accreditation status, contact our Office of Institutional Research.
            </p>
            <a
              href="https://sacscoc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-xl text-sm"
              style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
            >
              Visit SACSCOC Website →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>HBCU Status</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>HISTORICALLY BLACK COMMUNITY COLLEGE</p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(1 0 0 / 0.68)', lineHeight: 1.7 }}>
              Lawson State Community College was founded in 1949 and is designated a Historically Black College or University (HBCU) under Title III of the Higher Education Act. This designation reflects our founding mission and ongoing commitment to access, equity, and educational opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Program accreditations */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>By Program</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PROGRAM-SPECIFIC ACCREDITATIONS</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '520px' }}>
              <thead>
                <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Program</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Accrediting Body</th>
                </tr>
              </thead>
              <tbody>
                {PROGRAM_ACCREDITATIONS.map((p, i) => (
                  <tr key={p.program} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0 0 0 / 0.04)' }}>
                    <td className="px-5 py-3 text-sm font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>{p.program}</td>
                    <td className="px-5 py-3 text-sm">
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                        {p.body}
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Accreditation status is subject to periodic review. Contact the Office of Academic Affairs for the most current information.</p>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Affiliations</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>MEMBERSHIPS & AFFILIATIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MEMBERSHIPS.map((m) => (
              <div key={m} className="flex gap-3 items-center rounded-xl px-5 py-3" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                <span className="text-sm" style={{ color: 'oklch(0.35 0.04 261)' }}>{m}</span>
              </div>
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
