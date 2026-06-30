import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const DIVISIONS = [
  {
    name: 'Academic Affairs',
    role: 'Vice President',
    contact: '205.929.6301',
    desc: 'Oversees all instructional programs, curriculum development, and academic quality.',
  },
  {
    name: 'Allied Health & Nursing',
    role: 'Division Chair',
    contact: '205.929.6324',
    desc: 'Nursing, Dental Assisting, Emergency Medical Services, Medical Office Administration.',
  },
  {
    name: 'Business & Information Technology',
    role: 'Division Chair',
    contact: '205.929.6340',
    desc: 'Accounting, Business Administration, Computer Information Systems, Office Management.',
  },
  {
    name: 'English & Humanities',
    role: 'Division Chair',
    contact: '205.929.6308',
    desc: 'English composition, literature, humanities, speech, and developmental English.',
  },
  {
    name: 'Mathematics & Sciences',
    role: 'Division Chair',
    contact: '205.929.6310',
    desc: 'Mathematics, biology, chemistry, physics, and developmental mathematics courses.',
  },
  {
    name: 'Social & Behavioral Sciences',
    role: 'Division Chair',
    contact: '205.929.6312',
    desc: 'History, psychology, sociology, political science, and early childhood education.',
  },
  {
    name: 'Technical & Industrial Education',
    role: 'Division Chair',
    contact: '205.929.6380',
    desc: 'HVAC, Welding, Cosmetology, Electrical Technology, Mechatronics, and drafting.',
  },
  {
    name: 'Physical Education & Athletics',
    role: 'Director',
    contact: '205.925.2525',
    desc: 'Health and physical education instruction; NJCAA Division I Athletics.',
  },
]

const OFFICES = [
  { name: 'President\'s Office',            contact: '205.925.2515', email: 'president@lawsonstate.edu' },
  { name: 'Dean of Students',               contact: '205.929.6437', email: 'studentaffairs@lawsonstate.edu' },
  { name: 'Registrar',                      contact: '205.929.6310', email: 'registrar@lawsonstate.edu' },
  { name: 'Financial Aid Office',           contact: '205.929.6346', email: 'finaid@lawsonstate.edu' },
  { name: 'Admissions & Recruitment',       contact: '205.929.6301', email: 'admissions@lawsonstate.edu' },
  { name: 'Human Resources',               contact: '205.925.2515', email: 'hr@lawsonstate.edu' },
  { name: 'IT Help Desk',                   contact: '205.929.6329', email: 'help@lawsonstate.edu' },
  { name: 'Workforce Development',         contact: '205.929.6380', email: 'workforce@lawsonstate.edu' },
]

export default function FacultyStaffPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Faculty & Staff</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Directory · Departments · Offices
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            FACULTY & STAFF
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Meet the people behind Lawson State Community College — faculty, staff, and administrators dedicated to your success.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="mailto:hr@lawsonstate.edu"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Employment Opportunities
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Contact Directory ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Academic divisions */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Instruction</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ACADEMIC DIVISIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIVISIONS.map((d) => (
              <div
                key={d.name}
                className="rounded-2xl p-5 flex flex-col"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}
              >
                <p className="font-display font-black mb-1" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)', lineHeight: 1.3 }}>{d.name}</p>
                <p className="font-semibold mb-2" style={{ fontSize: '0.72rem', color: 'var(--lscc-eyebrow)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{d.role}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{d.desc}</p>
                <a href={`tel:+1${d.contact.replace(/\./g, '')}`} className="text-sm font-semibold hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                  {d.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative offices */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Contacts</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ADMINISTRATIVE OFFICES</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '520px' }}>
              <thead>
                <tr style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.12em' }}>Office</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.12em' }}>Phone</th>
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase" style={{ letterSpacing: '0.12em' }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {OFFICES.map((o, i) => (
                  <tr key={o.name} style={{ background: i % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0 0 0 / 0.05)' }}>
                    <td className="px-5 py-3 text-sm font-medium" style={{ color: 'oklch(0.22 0.17 261)' }}>{o.name}</td>
                    <td className="px-5 py-3 text-sm">
                      <a href={`tel:+1${o.contact.replace(/\./g, '')}`} className="hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>{o.contact}</a>
                    </td>
                    <td className="px-5 py-3 text-sm">
                      <a href={`mailto:${o.email}`} className="hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>{o.email}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Employment + Campuses */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Join Our Team</p>
            <h3 className="font-display font-black text-white mb-4" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>EMPLOYMENT OPPORTUNITIES</h3>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Lawson State Community College is an equal opportunity employer. Faculty, staff, and administrative positions are posted through the Alabama Community College System.
            </p>
            <a
              href="https://www.accs.edu/employees/hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              View ACCS Job Postings
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Where to Find Us</p>
            <h3 className="font-display font-black mb-4" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TWO CAMPUSES</h3>
            <div className="flex flex-col gap-4 text-sm" style={{ color: 'oklch(0.42 0.04 261)' }}>
              <div>
                <p className="font-bold mb-0.5" style={{ color: 'oklch(0.22 0.17 261)' }}>Birmingham Campus</p>
                <p>3060 Wilson Road SW · Birmingham, AL 35221</p>
                <p>Main: 205.925.2515</p>
              </div>
              <div>
                <p className="font-bold mb-0.5" style={{ color: 'oklch(0.22 0.17 261)' }}>Bessemer Campus</p>
                <p>1100 Ninth Avenue SW · Bessemer, AL 35022</p>
                <p>Main: 205.424.5119</p>
              </div>
            </div>
            <Link href="/contact" className="mt-4 inline-block font-semibold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
              Full contact information →
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
