import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const CATALOG_SECTIONS = [
  { title: 'Degree Programs', desc: 'Associate of Arts, Associate of Science, Associate of Applied Science degrees — full program requirements listed by division.', icon: '🎓' },
  { title: 'Certificate Programs', desc: 'Short-term and technical certificates across workforce, health, business, and trades — from 12 to 60 credit hours.', icon: '📋' },
  { title: 'Course Descriptions', desc: 'Detailed descriptions, credit hours, prerequisites, and co-requisites for every course offered at Lawson State.', icon: '📖' },
  { title: 'Academic Policies', desc: 'Grading scale, academic standing, satisfactory progress, withdrawal policies, grade appeals, and attendance requirements.', icon: '📐' },
  { title: 'General Studies (AGSC)', desc: 'The Alabama General Studies Curriculum — core requirements that transfer to any Alabama public university.', icon: '🔄' },
  { title: 'Tuition & Fees', desc: 'Current tuition rates, mandatory fees, technology fees, lab fees, and payment due dates by semester.', icon: '💳' },
]

const QUICK_LINKS = [
  { label: 'Browse the Program Catalog', desc: 'Full 2026–2027 program and degree listings', href: '/programs', external: false },
  { label: 'Alabama Transfer (AGSC)', desc: 'AGSC core and transfer planning', href: '/academics/alabama-transfer', external: false },
  { label: 'Class Schedule', desc: 'Search current course sections', href: 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON', external: true },
  { label: 'Transcript Requests', desc: 'Order official or unofficial transcripts', href: '/student-resources/transcripts', external: false },
  { label: 'Degree Audit', desc: 'Check your progress via MyLawson', href: 'https://experience.elluciancloud.com/lcc45/', external: true },
]

const DIVISIONS = [
  { name: 'Allied Health & Nursing', programs: ['Nursing (A.D.N.)', 'Dental Assisting', 'Emergency Medical Services', 'Medical Office Administration', 'Health Information Technology', 'Phlebotomy'] },
  { name: 'Business & IT', programs: ['Business Administration (A.S.)', 'Accounting (A.A.S.)', 'Computer Information Systems', 'Office Management', 'Marketing', 'Cybersecurity (Certificate)'] },
  { name: 'English & Humanities', programs: ['Liberal Arts (A.A.)', 'English (transfer)', 'Communication Arts', 'Developmental English (ENG 093/098)'] },
  { name: 'Mathematics & Sciences', programs: ['General Science (A.S.)', 'Pre-Engineering (transfer)', 'Mathematics (transfer)', 'Biology, Chemistry, Physics'] },
  { name: 'Social & Behavioral Sciences', programs: ['Early Childhood Education (A.A.S.)', 'Psychology (transfer)', 'Sociology (transfer)', 'Criminal Justice (A.A.S.)'] },
  { name: 'Technical & Industrial Education', programs: ['Cosmetology', 'HVAC', 'Welding Technology', 'Electrical Technology', 'Mechatronics', 'Drafting & Design Technology'] },
  { name: 'Workforce & Continuing Education', programs: ['Industry Certifications', 'CDL Training', 'Adult Education (GED)', 'Professional Development', 'Corporate Training'] },
]

export default function CatalogPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg" alt="Lawson State campus" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/academics" className="hover:text-white transition-colors">Programs</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Academic Catalog</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            2026–2027 Academic Year
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ACADEMIC CATALOG
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            The official guide to all programs, courses, policies, and requirements at Lawson State Community College.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/programs"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Browse the Program Catalog
            </Link>
            <Link href="/academics" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Browse Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* What's in the catalog */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What You'll Find</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CATALOG CONTENTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATALOG_SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span style={{ fontSize: '1.8rem', marginBottom: '0.75rem', display: 'block' }} aria-hidden>{s.icon}</span>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Jump To</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>QUICK LINKS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {QUICK_LINKS.map((l) => {
              const Tag = l.external ? 'a' : Link
              const props = l.external ? { href: l.href, target: '_blank' as const, rel: 'noopener noreferrer' } : { href: l.href }
              return (
                <Tag key={l.label} {...(props as any)} className="press flex items-center justify-between rounded-xl px-5 py-4 hover:shadow-md transition-shadow" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                  <div>
                    <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{l.label}</p>
                    <p className="text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>{l.desc}</p>
                  </div>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>→</span>
                </Tag>
              )
            })}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>By Division</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PROGRAMS BY DIVISION</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((d) => (
              <div key={d.name} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-3" style={{ fontSize: '0.97rem', color: 'oklch(0.22 0.17 261)' }}>{d.name}</p>
                <ul className="flex flex-col gap-1.5">
                  {d.programs.map((p) => (
                    <li key={p} className="flex gap-2 text-xs" style={{ color: 'oklch(0.42 0.04 261)', lineHeight: 1.5 }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/academics" className="press btn-shimmer inline-flex items-center font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
              Explore All 200+ Programs →
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
