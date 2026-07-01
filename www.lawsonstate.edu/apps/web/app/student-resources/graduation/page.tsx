import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const REQUIREMENTS = [
  { label: 'Complete required coursework', desc: 'Finish all courses in your degree plan with passing grades.' },
  { label: 'Minimum GPA', desc: 'Maintain at least a 2.0 cumulative GPA (some programs require higher).' },
  { label: 'Complete your graduation application', desc: 'Submit the application through MyLawson by the posted deadline.' },
  { label: 'Clear all financial holds', desc: 'Settle any outstanding balances with the Business Office before applying.' },
  { label: 'Meet with your advisor', desc: 'Confirm your degree audit and verify all requirements are met.' },
]

const TIMELINE = [
  { semester: 'Spring graduation', deadline: 'March 1', ceremony: 'May' },
  { semester: 'Summer graduation', deadline: 'June 15', ceremony: 'August (non-ceremonial)' },
  { semester: 'Fall graduation', deadline: 'October 1', ceremony: 'December' },
]

const HONORS = [
  { title: 'Summa Cum Laude', gpa: '3.90 – 4.00' },
  { title: 'Magna Cum Laude',  gpa: '3.70 – 3.89' },
  { title: 'Cum Laude',        gpa: '3.50 – 3.69' },
]

export default function GraduationPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://www.lawsonstate.edu/_resources/images/edited-photo.jpg" alt="Lawson State commencement ceremony" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Graduation</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Records · Registrar
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            GRADUATION INFORMATION
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            You made it. Now let&apos;s get you across the finish line — apply for graduation, order your cap &amp; gown, and celebrate.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://experience.elluciancloud.com/lcc45/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Apply in MyLawson<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Application deadlines */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Deadlines</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>APPLICATION DEADLINES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIMELINE.map((t) => (
              <div
                key={t.semester}
                className="rounded-2xl p-6"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.18em' }}>{t.semester}</p>
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase" style={{ color: 'oklch(0.55 0.04 261)', letterSpacing: '0.1em' }}>Application Deadline</span>
                    <p className="font-display font-black" style={{ fontSize: '1.4rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}>{t.deadline}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase" style={{ color: 'oklch(0.55 0.04 261)', letterSpacing: '0.1em' }}>Ceremony</span>
                    <p className="font-semibold" style={{ fontSize: '0.95rem', color: 'oklch(0.35 0.04 261)' }}>{t.ceremony}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm" style={{ color: 'oklch(0.50 0.04 261)' }}>
            Dates are approximate. Check the <Link href="/calendar" className="underline hover:no-underline" style={{ color: 'oklch(0.42 0.17 261)' }}>Academic Calendar</Link> for exact deadlines each semester.
          </p>
        </div>
      </section>

      {/* Graduation requirements */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Checklist</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>GRADUATION REQUIREMENTS</h2>
          </div>
          <div className="flex flex-col gap-3 max-w-2xl">
            {REQUIREMENTS.map((r, i) => (
              <div
                key={r.label}
                className="flex gap-4 rounded-xl p-5"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
              >
                <div
                  className="font-display font-black shrink-0 flex items-center justify-center rounded-lg"
                  style={{ width: '36px', height: '36px', background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.82rem' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="font-bold mb-0.5" style={{ fontSize: '0.95rem', color: 'oklch(0.18 0.04 261)' }}>{r.label}</p>
                  <p style={{ fontSize: '0.85rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.55 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cap & Gown + Honors side by side */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Cap & Gown */}
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Cap &amp; Gown</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>REGALIA ORDER</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Cap and gown packages are ordered through the campus bookstore. Order early — regalia sells out before each ceremony.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Order at least 6 weeks before your ceremony',
                'Packages include cap, gown, and tassel',
                'Honors cords are distributed by the Registrar at Graduation Practice',
                'Bookstore: Birmingham Campus · 205.929.6010',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm" style={{ color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://lawsonstatebirmingham.bkstr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center font-bold px-6 py-3 rounded-lg mt-6"
              style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.9rem' }}
            >
              Visit Bookstore<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>

          {/* Honors */}
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Academic Honors</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>GRADUATION HONORS</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Honors are based on your cumulative GPA at the time of graduation. They are printed on your diploma and announced at the ceremony.
            </p>
            <div className="flex flex-col gap-3">
              {HONORS.map((h) => (
                <div
                  key={h.title}
                  className="flex items-center justify-between rounded-xl px-5 py-4"
                  style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.06)' }}
                >
                  <span className="font-bold italic" style={{ color: 'oklch(0.22 0.17 261)', fontSize: '0.95rem' }}>{h.title}</span>
                  <span className="font-display font-black" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.05rem' }}>{h.gpa}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Questions about graduation?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Registrar&apos;s Office · 205.929.2113 · registrar@lawsonstate.edu
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Contact Registrar
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
