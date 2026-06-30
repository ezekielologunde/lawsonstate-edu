import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const PROTECTED_CLASSES = [
  { basis: 'Race, Color, or National Origin', law: 'Title VI · Civil Rights Act of 1964' },
  { basis: 'Sex or Gender', law: 'Title IX · Education Amendments of 1972' },
  { basis: 'Disability', law: 'Section 504 · ADA Amendments Act of 2008' },
  { basis: 'Age', law: 'Age Discrimination Act of 1975' },
  { basis: 'Religion', law: 'Title VII · Civil Rights Act of 1964' },
  { basis: 'Genetic Information', law: 'Genetic Information Nondiscrimination Act (GINA)' },
  { basis: 'Pregnancy, Childbirth, or Related Conditions', law: 'Pregnant Workers Fairness Act · Title IX' },
  { basis: 'Veteran Status', law: 'Vietnam Era Veterans Readjustment Assistance Act' },
]

const PROGRAMS_COVERED = [
  'Admissions and enrollment',
  'Financial aid and scholarships',
  'Academic programs and instruction',
  'Student services and advising',
  'Employment and hiring',
  'Athletic programs',
  'Housing (if applicable)',
  'Campus events and activities',
]

export default function NonDiscriminationPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '32vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Non-Discrimination</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Equal Opportunity · Civil Rights Compliance
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            NON-DISCRIMINATION NOTICE
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '60ch', lineHeight: 1.7 }}>
            Lawson State Community College does not discriminate on the basis of race, color, national origin, sex, disability, age, or any other protected characteristic in its programs, activities, or employment.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Official Notice</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STATEMENT OF NON-DISCRIMINATION</h2>
            <div className="flex flex-col gap-4" style={{ fontSize: '0.92rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75 }}>
              <p>
                Lawson State Community College is an equal opportunity institution and does not discriminate on the basis of race, color, religion, national origin, sex (including pregnancy, gender identity, and sexual orientation), disability, age, genetic information, or veteran status in its programs, services, activities, or employment practices.
              </p>
              <p>
                This policy applies to all aspects of the College&apos;s operations, including but not limited to: admissions, enrollment, financial aid, academic programs, student services, counseling, physical education, athletics, housing, employment, and all other programs and activities operated by the College.
              </p>
              <p>
                Lawson State Community College is committed to compliance with all applicable state and federal laws and regulations regarding non-discrimination and equal opportunity, including those administered by the U.S. Department of Education Office for Civil Rights.
              </p>
              <p>
                Inquiries regarding the non-discrimination policies of Lawson State Community College may be directed to the appropriate compliance coordinator listed on this page.
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Compliance Contacts</p>
            <p className="font-display font-black text-white mb-5" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>WHO TO CONTACT</p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs uppercase font-bold mb-1" style={{ color: 'oklch(0.79 0.19 78)', letterSpacing: '0.12em' }}>Title IX / Sex Discrimination</p>
                <p className="text-sm" style={{ color: 'oklch(1 0 0 / 0.75)', lineHeight: 1.6 }}>
                  Title IX Coordinator · Office of Student Affairs<br />
                  205.929.6437 · titleix@lawsonstate.edu
                </p>
                <Link href="/about/title-ix" className="text-xs underline mt-1 inline-block" style={{ color: 'oklch(0.79 0.19 78)' }}>
                  Title IX information →
                </Link>
              </div>
              <div style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)', paddingTop: '1.2rem' }}>
                <p className="text-xs uppercase font-bold mb-1" style={{ color: 'oklch(0.79 0.19 78)', letterSpacing: '0.12em' }}>Disability / Section 504 / ADA</p>
                <p className="text-sm" style={{ color: 'oklch(1 0 0 / 0.75)', lineHeight: 1.6 }}>
                  Section 504 / ADA Coordinator · Student Affairs<br />
                  205.929.6437 · ada@lawsonstate.edu
                </p>
                <Link href="/student-resources/disability" className="text-xs underline mt-1 inline-block" style={{ color: 'oklch(0.79 0.19 78)' }}>
                  Disability Services →
                </Link>
              </div>
              <div style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)', paddingTop: '1.2rem' }}>
                <p className="text-xs uppercase font-bold mb-1" style={{ color: 'oklch(0.79 0.19 78)', letterSpacing: '0.12em' }}>All Other Discrimination</p>
                <p className="text-sm" style={{ color: 'oklch(1 0 0 / 0.75)', lineHeight: 1.6 }}>
                  Office of the President / Human Resources<br />
                  205.925.2515 · hr@lawsonstate.edu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected classes */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Federal & State Law</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PROTECTED CHARACTERISTICS</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '480px' }}>
              <thead>
                <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.12em' }}>Protected Basis</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.12em' }}>Governing Law</th>
                </tr>
              </thead>
              <tbody>
                {PROTECTED_CLASSES.map((row, i) => (
                  <tr key={row.basis} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0 0 0 / 0.05)' }}>
                    <td className="px-5 py-3 text-sm font-medium" style={{ color: 'oklch(0.22 0.17 261)' }}>{row.basis}</td>
                    <td className="px-5 py-3 text-sm" style={{ color: 'oklch(0.50 0.04 261)' }}>{row.law}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Programs covered */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Scope</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PROGRAMS & ACTIVITIES COVERED</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROGRAMS_COVERED.map((p) => (
              <div
                key={p}
                className="rounded-xl px-4 py-3 text-sm"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.38 0.04 261)', lineHeight: 1.5 }}
              >
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, marginRight: '0.5rem' }}>›</span>
                {p}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-5" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7 }}>
              <strong style={{ color: 'oklch(0.22 0.17 261)' }}>External Complaints:</strong>{' '}
              Students and employees who believe they have been discriminated against may also file a complaint with the U.S. Department of Education, Office for Civil Rights (OCR), 400 Maryland Avenue SW, Washington, DC 20202, telephone (800) 421-3481.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
