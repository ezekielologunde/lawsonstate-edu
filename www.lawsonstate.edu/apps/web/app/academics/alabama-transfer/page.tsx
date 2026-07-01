import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const PARTNER_UNIVERSITIES = [
  { name: 'University of Alabama', abbr: 'UA', location: 'Tuscaloosa', note: 'Guaranteed admission with 60+ credit hours and 2.0 GPA', href: 'https://ua.edu' },
  { name: 'University of Alabama at Birmingham', abbr: 'UAB', location: 'Birmingham', note: 'Close proximity — many students commute', href: 'https://uab.edu' },
  { name: 'University of Alabama in Huntsville', abbr: 'UAH', location: 'Huntsville', note: 'STEM and Engineering focus', href: 'https://uah.edu' },
  { name: 'Auburn University', abbr: 'AU', location: 'Auburn', note: 'Engineering, Agriculture, Business', href: 'https://auburn.edu' },
  { name: 'Auburn University at Montgomery', abbr: 'AUM', location: 'Montgomery', note: 'Liberal arts and business programs', href: 'https://aum.edu' },
  { name: 'Troy University', abbr: 'Troy', location: 'Troy / Online', note: 'Flexible options including online', href: 'https://troy.edu' },
  { name: 'Jacksonville State University', abbr: 'JSU', location: 'Jacksonville', note: 'Education, Criminal Justice, Nursing', href: 'https://jsu.edu' },
  { name: 'Athens State University', abbr: 'Athens', location: 'Athens', note: 'Upper-division only — designed for transfer students', href: 'https://athens.edu' },
  { name: 'University of North Alabama', abbr: 'UNA', location: 'Florence', note: 'Business, Education, Nursing', href: 'https://una.edu' },
  { name: 'University of South Alabama', abbr: 'USA', location: 'Mobile', note: 'Health Sciences, Engineering, Business', href: 'https://southalabama.edu' },
]

const AGSC_COURSES = [
  { code: 'ENG 101 / 102', title: 'English Composition I & II', hours: 6 },
  { code: 'MTH 112 or higher', title: 'Pre-Calculus or higher-level Math', hours: 3 },
  { code: 'HIS 201 / 202', title: 'American History I & II', hours: 6 },
  { code: 'SPH 107', title: 'Fundamentals of Public Speaking', hours: 3 },
  { code: 'Fine Arts', title: 'Art, Music, or Theatre Appreciation', hours: 3 },
  { code: 'Natural Science', title: 'BIO, CHM, PHY with lab', hours: 8 },
  { code: 'Social/Behavioral', title: 'PSY, SOC, ECO, or POL', hours: 6 },
]

const STEPS = [
  { n: '01', title: 'Meet with Your Advisor', body: 'Your Lawson State advisor will map out a transfer plan based on your target school and major. Schedule an appointment early — ideally in your first semester.' },
  { n: '02', title: 'Complete the AGSC Core', body: 'The Alabama General Studies Curriculum (AGSC) is a set of courses that transfer to any public Alabama university. Completing it protects your general education credits.' },
  { n: '03', title: 'Earn Your Associate Degree', body: 'Completing the Associate of Arts or Associate of Science degree strengthens your transfer application and may qualify you for guaranteed admission programs.' },
  { n: '04', title: 'Apply to the Transfer School', body: 'Submit your transfer application directly to your target university, along with your official Lawson State transcript. Most schools prefer applications 6–12 months before enrollment.' },
]

export default function AlabamaTransferPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://www.lawsonstate.edu/_resources/images/.private_ldp/a405271/production/thumb/8e269562-ffa4-4384-9721-bf85bf60cf86.jpg" alt="&quot;Cubs to Cougars&quot; transfer students at Lawson State" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/academics" className="hover:text-white transition-colors">Programs</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Alabama Transfer</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            AGSC · STARS · Transfer Pathways
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ALABAMA TRANSFER
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Start at Lawson State. Transfer to any Alabama public university with your credits fully protected. Save thousands while earning the same bachelor's degree.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Meet Your Transfer Advisor
            </Link>
            <Link href="/admissions/transfer" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Transferring In? →
            </Link>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-x-10 gap-y-2">
          {[
            { value: '$131', label: 'Per Credit Hour (vs $450+ at 4-yr)' },
            { value: '10+', label: 'Transfer Partner Universities' },
            { value: '100%', label: 'AGSC Credits Protected' },
            { value: '60', label: 'Credits = Junior Standing' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-display font-black" style={{ fontSize: '1.4rem', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.03em' }}>{s.value}</span>
              <span className="text-xs font-semibold uppercase" style={{ color: 'oklch(0.28 0.06 261)', letterSpacing: '0.10em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Your Path</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TRANSFER WORKS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGSC core */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Core Curriculum</p>
            <h2 className="font-display font-black mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>AGSC GENERAL STUDIES CORE</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              The Alabama General Studies Curriculum (AGSC) is a standardized set of general education courses recognized by all public Alabama universities. Completing these courses at Lawson State means they transfer directly — no re-taking, no lost credits.
            </p>
            <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
              <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '400px' }}>
                <thead>
                  <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                    <th className="text-left px-4 py-2.5 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Course</th>
                    <th className="text-left px-4 py-2.5 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Subject Area</th>
                    <th className="text-right px-4 py-2.5 text-xs font-bold uppercase" style={{ letterSpacing: '0.1em' }}>Hrs</th>
                  </tr>
                </thead>
                <tbody>
                  {AGSC_COURSES.map((c, i) => (
                    <tr key={c.code} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0 0 0 / 0.04)' }}>
                      <td className="px-4 py-2.5 text-sm font-medium" style={{ color: 'oklch(0.22 0.17 261)' }}>{c.code}</td>
                      <td className="px-4 py-2.5 text-sm" style={{ color: 'oklch(0.42 0.04 261)' }}>{c.title}</td>
                      <td className="px-4 py-2.5 text-sm font-bold text-right" style={{ color: 'oklch(0.42 0.17 261)' }}>{c.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>Requirements vary by major and destination school. Always confirm with your advisor and the receiving university.</p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Use STARS</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}>STATEWIDE TRANSFER & ARTICULATION</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The STARS (Statewide Transfer and Articulation Reporting System) database shows exactly which Lawson State courses transfer to which Alabama universities and how they count toward your degree. Use it early and often.
            </p>
            <a
              href="https://alabamatransfers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              Open STARS Database
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Partner universities */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Where Cougars Go</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TRANSFER PARTNER UNIVERSITIES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PARTNER_UNIVERSITIES.map((u) => (
              <a key={u.name} href={u.href} target="_blank" rel="noopener noreferrer" className="press flex flex-col gap-1 rounded-xl p-4 hover:shadow-md transition-shadow" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span className="font-display font-black" style={{ fontSize: '1.2rem', color: 'oklch(0.22 0.17 261)' }}>{u.abbr}</span>
                <span className="text-xs font-medium" style={{ color: 'oklch(0.42 0.04 261)' }}>{u.name}</span>
                <span className="text-xs" style={{ color: 'oklch(0.60 0.03 261)' }}>{u.location}</span>
                <span className="text-xs mt-1" style={{ color: 'oklch(0.50 0.08 261)' }}>{u.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Plan Your Transfer Today</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>Advising · 205.929.6301 · admissions@lawsonstate.edu</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Meet an Advisor
            </Link>
            <Link href="/academics" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              Browse Programs →
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
