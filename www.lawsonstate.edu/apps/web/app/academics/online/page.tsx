import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const ONLINE_PROGRAMS = [
  { area: 'Business & IT', programs: ['Business Administration (A.S.)', 'Accounting (A.A.S.)', 'Computer Information Systems (A.A.S.)', 'Office Management (A.A.S.)'] },
  { area: 'Health Sciences', programs: ['Medical Office Administration (A.A.S.)', 'Health Information Technology (A.A.S.)'] },
  { area: 'General Education', programs: ['Liberal Arts (A.A.) — Transfer', 'General Studies (A.A.S.)'] },
  { area: 'Social & Behavioral Sciences', programs: ['Psychology (transfer-track)', 'Early Childhood Education (A.A.S.)'] },
]

const TECH_TOOLS = [
  { label: 'Canvas LMS', desc: 'Your course hub — assignments, grades, discussions, announcements, video lectures.', href: 'https://lawsonstate.instructure.com', external: true },
  { label: 'Tutor.com', desc: '24/7 online tutoring in 500+ subjects. Free with your student ID.', href: 'https://tutor.com', external: true },
  { label: 'MyLawson', desc: 'Register for classes, pay bills, view your schedule and financial aid status.', href: 'https://my.lawsonstate.edu', external: true },
  { label: 'Microsoft 365', desc: 'Free Word, Excel, PowerPoint, Teams, and 1TB OneDrive for all students.', href: 'https://my.lawsonstate.edu', external: true },
  { label: 'Library Databases', desc: 'Remote access to EBSCO, ProQuest, and 20+ research databases.', href: 'https://lawsonstate.edu/Library', external: true },
  { label: 'IT Help Desk', desc: 'Tech support for login issues, network access, and Canvas problems.', href: 'mailto:help@lawsonstate.edu', external: false },
]

const FAQS = [
  { q: 'Are online courses the same quality as in-person?', a: 'Yes. Online courses at Lawson State meet the same academic standards, use the same curriculum, and are taught by the same credentialed faculty as on-campus sections. Credits are identical and transfer the same way.' },
  { q: 'How much time should I expect to spend each week?', a: 'Plan for 9–12 hours per course per week — roughly the same as in-person, but on your schedule. Courses are asynchronous unless the instructor specifies otherwise.' },
  { q: 'Do I ever need to come to campus?', a: 'Some courses have proctored exams that may require an on-campus visit or a remote proctoring service. Check the course syllabus before enrolling. Lab-intensive programs (Nursing, Dental, HVAC) require in-person components.' },
  { q: 'What if I don\'t have reliable internet?', a: 'Contact the IT Help Desk at help@lawsonstate.edu. Lawson State provides computer lab access on both campuses, and financial aid may cover technology expenses including internet service in qualifying cases.' },
  { q: 'Can I take a mix of online and in-person classes?', a: 'Absolutely. Most students blend both formats. Hybrid courses meet once a week on campus and complete the remaining work online.' },
]

export default function OnlineProgramsPage() {
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
            <Link href="/academics" className="hover:text-white transition-colors">Programs</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Online Programs</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Canvas LMS · Flexible · Accredited
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ONLINE PROGRAMS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Earn a degree or certificate on your schedule. Lawson State online courses offer the same accredited education as our in-person programs — no commute required.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/admissions/apply" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Apply Now
            </Link>
            <Link href="/academics" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Browse All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-x-10 gap-y-2">
          {[
            { value: '40+', label: 'Online-Friendly Programs' },
            { value: '100%', label: 'Accredited Credits' },
            { value: '24/7', label: 'Tutor.com Access' },
            { value: '$131', label: 'Per Credit Hour (in-state)' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-display font-black" style={{ fontSize: '1.4rem', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.03em' }}>{s.value}</span>
              <span className="text-xs font-semibold uppercase" style={{ color: 'oklch(0.28 0.06 261)', letterSpacing: '0.12em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programs by area */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Fully & Partially Online</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PROGRAMS AVAILABLE ONLINE</h2>
            <p className="mt-2" style={{ fontSize: '0.92rem', color: 'oklch(0.45 0.04 261)', maxWidth: '60ch' }}>
              Many programs are fully deliverable online. Others are hybrid (some campus visits required). Always confirm the format with an advisor before enrolling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ONLINE_PROGRAMS.map((area) => (
              <div key={area.area} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-4" style={{ fontSize: '1rem', color: 'oklch(0.22 0.17 261)' }}>{area.area}</p>
                <ul className="flex flex-col gap-2">
                  {area.programs.map((p) => (
                    <li key={p} className="flex gap-2 text-sm" style={{ color: 'oklch(0.38 0.04 261)' }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl p-5" style={{ background: 'oklch(0.22 0.17 261 / 0.06)', border: '1px solid oklch(0.22 0.17 261 / 0.12)' }}>
            <p style={{ fontSize: '0.875rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
              This list is representative. For a complete, current list of online course sections, search the{' '}
              <a href="https://my.lawsonstate.edu" target="_blank" rel="noopener noreferrer" className="underline font-medium" style={{ color: 'oklch(0.42 0.17 261)' }}>
                MyLawson class schedule
                <span className="sr-only"> (opens in new tab)</span>
              </a>{' '}
              and filter by "Online" delivery method.
            </p>
          </div>
        </div>
      </section>

      {/* Tech tools */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What You Get</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TECHNOLOGY & TOOLS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_TOOLS.map((t) => {
              const Tag = t.external ? 'a' : Link
              const props = t.external ? { href: t.href, target: '_blank' as const, rel: 'noopener noreferrer' } : { href: t.href }
              return (
                <Tag key={t.label} {...(props as any)} className="press flex flex-col gap-2 rounded-2xl p-5 hover:shadow-md transition-shadow" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                  <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{t.label}</p>
                  <p style={{ fontSize: '0.84rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{t.desc}</p>
                  <span className="text-xs font-bold mt-auto" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    {t.label === 'IT Help Desk' ? 'Email support →' : 'Open →'}
                    {t.external && <span className="sr-only"> (opens in new tab)</span>}
                  </span>
                </Tag>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Common Questions</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FAQs</h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.05)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{f.q}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Ready to Start Online?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>Admissions · 205.929.6301 · admissions@lawsonstate.edu</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/admissions/apply" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Apply Now
            </Link>
            <Link href="/contact" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              Talk to an Advisor →
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
