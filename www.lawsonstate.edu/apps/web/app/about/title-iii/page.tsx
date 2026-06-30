import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const PROGRAMS_FUNDED = [
  { title: 'Student Support Services Enhancement', desc: 'Expanding tutoring centers, academic coaching, and early-alert systems to improve retention among first-generation and low-income students.' },
  { title: 'Faculty Development', desc: 'Professional development opportunities for full-time and adjunct faculty — instructional technology, culturally responsive pedagogy, and discipline-specific training.' },
  { title: 'Technology Infrastructure', desc: 'Campus-wide upgrades to computing labs, Wi-Fi access, learning management systems, and student-facing digital tools.' },
  { title: 'Academic Program Strengthening', desc: 'Curriculum development, library resources, and course redesign across Allied Health, STEM, and Business divisions.' },
  { title: 'Institutional Management Capacity', desc: 'Administrative systems improvements including data analytics, institutional research, financial management, and strategic planning tools.' },
]

const ELIGIBILITY = [
  'Serves a high percentage of low-income students',
  'Has a low educational and general expenditure per full-time equivalent student compared to comparable institutions',
  'Is accredited by a recognized accrediting agency',
  'Is legally authorized to provide educational programs beyond secondary education',
]

export default function TitleIIIPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Title III</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Higher Education Act · HBCU Strengthening
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            TITLE III PROGRAM
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Lawson State receives federal Title III funding under the Strengthening Historically Black Colleges and Universities program — federal support that helps us invest in our students, faculty, and campus infrastructure.
          </p>
        </div>
      </section>

      {/* About Title III */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What is Title III?</p>
            <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STRENGTHENING HBCUs</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Title III, Part B of the Higher Education Act of 1965 (HEA) provides federal grants to Historically Black Colleges and Universities (HBCUs) to help them strengthen their academic quality, institutional management, and fiscal stability — and to increase their capacity to serve low-income and first-generation college students.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              As a designated HBCU founded in 1949, Lawson State has qualified for Title III funding continuously. This federal investment allows us to expand services and improve outcomes for students who might otherwise lack access to higher education.
            </p>
            <a
              href="https://www2.ed.gov/programs/iduestitle3b/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-xl text-sm"
              style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
            >
              U.S. Dept of Education — Title III Info →
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>HBCU Eligibility</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}>WHO QUALIFIES FOR TITLE III</p>
            <ul className="flex flex-col gap-3">
              {ELIGIBILITY.map((e) => (
                <li key={e} className="flex gap-3 text-sm" style={{ color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.6 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Funded programs */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>How It's Used</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TITLE III-FUNDED ACTIVITIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROGRAMS_FUNDED.map((p) => (
              <div key={p.title} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{p.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Questions About Title III?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>Office of Institutional Research · 205.929.6301</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Contact Us
            </Link>
            <Link href="/about" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              About Lawson State →
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
