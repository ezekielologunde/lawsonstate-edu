import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const FORMATS = [
  {
    title: 'Friday / Saturday Classes',
    badge: 'Most Popular',
    desc: 'The majority of Weekend College courses meet on Fridays and Saturdays — allowing students to maintain full-time weekday jobs or family commitments while still making steady academic progress.',
    details: ['Friday evening: 5:00 PM – 9:30 PM', 'Saturday morning/afternoon: 8:00 AM – 5:00 PM', '16-week and compressed 8-week sessions available'],
  },
  {
    title: 'Saturday-Only Classes',
    badge: 'Flexible',
    desc: 'Some sections meet Saturdays only. These are ideal for students who cannot commit to both days, or who want to add a single course to complement evening studies.',
    details: ['Saturday: 8:00 AM – 5:30 PM (longer sessions)', 'Lab sciences may require Saturday full-day blocks', 'Check MyLawson for current Saturday-only sections'],
  },
  {
    title: 'Hybrid Weekend Formats',
    badge: 'Blended',
    desc: 'Certain Weekend College sections combine in-person Saturday meetings with online coursework, reducing your campus time while preserving in-person instruction for labs or discussions.',
    details: ['In-person Saturday + online work during the week', 'Canvas used for assignments and quizzes', 'Most hybrid credits transfer like traditional credits'],
  },
]

const POPULAR = [
  { name: 'English Composition I & II (ENG 101/102)', area: 'General Education' },
  { name: 'American History I & II (HIS 201/202)', area: 'General Education' },
  { name: 'Principles of Psychology (PSY 200)', area: 'Social/Behavioral' },
  { name: 'Introduction to Sociology (SOC 200)', area: 'Social/Behavioral' },
  { name: 'Pre-Calculus Algebra (MTH 112)', area: 'Mathematics' },
  { name: 'Business Law (BUS 263)', area: 'Business' },
  { name: 'Medical Terminology (AHS 115)', area: 'Allied Health' },
  { name: 'Principles of Accounting I (ACT 251)', area: 'Business' },
]

const FAQS = [
  { q: 'Are Weekend College credits treated differently from weekday credits?', a: 'No. Weekend College credits are identical to weekday credits in every way — they count toward your degree, transfer to four-year universities, and appear on your transcript the same as any other class.' },
  { q: 'Can I take Weekend College courses while working full-time?', a: 'Yes — that\'s the primary purpose of the program. Students can typically take 6–9 credit hours per semester attending only on weekends.' },
  { q: 'Is financial aid available for Weekend College classes?', a: 'Yes. Financial aid covers Weekend College courses just like any other Lawson State course, as long as you meet enrollment and satisfactory academic progress requirements.' },
  { q: 'How do I find which sections are Weekend College?', a: 'In MyLawson, filter courses by day: select "Friday" or "Saturday" under the meeting days filter when searching the class schedule.' },
]

export default function WeekendCollegePage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Weekend College</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Friday · Saturday · Hybrid Options
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            WEEKEND COLLEGE
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Earn college credits without sacrificing your weekday schedule. Weekend College at Lawson State puts the same accredited courses on Fridays and Saturdays — designed for working adults, parents, and non-traditional students.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://my.lawsonstate.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Find Weekend Sections
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/contact" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Talk to an Advisor →
            </Link>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-x-10 gap-y-2">
          {[
            { value: 'Fri + Sat', label: 'Only Campus Days Required' },
            { value: '6–9', label: 'Credits Per Semester (Typical)' },
            { value: '100%', label: 'Credits Count the Same' },
            { value: '$131', label: 'Per Credit Hour' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-display font-black" style={{ fontSize: '1.4rem', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.03em' }}>{s.value}</span>
              <span className="text-xs font-semibold uppercase" style={{ color: 'oklch(0.28 0.06 261)', letterSpacing: '0.10em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formats */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>How It Works</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CLASS FORMATS</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FORMATS.map((f) => (
              <div key={f.title} className="rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span className="inline-block font-bold uppercase text-xs px-3 py-0.5 rounded-full mb-3" style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.1em' }}>
                  {f.badge}
                </span>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{f.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, marginBottom: '1rem' }}>{f.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {f.details.map((d) => (
                    <li key={d} className="flex gap-2 text-xs" style={{ color: 'oklch(0.50 0.04 261)', lineHeight: 1.5 }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular courses */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What Students Take</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>POPULAR WEEKEND COURSES</h2>
            <div className="flex flex-col gap-2">
              {POPULAR.map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.05)' }}>
                  <span className="text-sm font-medium" style={{ color: 'oklch(0.28 0.05 261)' }}>{c.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full ml-3 shrink-0" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.42 0.15 78)' }}>{c.area}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm" style={{ color: 'oklch(0.55 0.04 261)' }}>Course availability changes each semester. Search MyLawson for current sections.</p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Find Sections</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>SEARCH THE CLASS SCHEDULE</p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(1 0 0 / 0.65)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              In MyLawson, search for classes and filter by meeting day — select Friday or Saturday to see all Weekend College sections. You can also filter by campus (Birmingham or Bessemer) and subject.
            </p>
            <a
              href="https://my.lawsonstate.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              Open MyLawson
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Common Questions</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FAQs</h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{f.q}</p>
                <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Ready to Start on Weekends?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>Registration · 205.929.6301 · registration@lawsonstate.edu</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="https://my.lawsonstate.edu" target="_blank" rel="noopener noreferrer" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Register Now
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link href="/registration" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              Registration Info →
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
