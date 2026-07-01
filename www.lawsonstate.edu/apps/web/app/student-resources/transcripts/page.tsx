import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const STEPS = [
  {
    num: '01',
    title: 'Log In to MyLawson',
    desc: 'Open the MyLawson (Ellucian) portal and sign in with your student ID and password.',
  },
  {
    num: '02',
    title: 'Go to Student Records',
    desc: 'Navigate to Student Records → Transcripts. Select official or unofficial based on your need.',
  },
  {
    num: '03',
    title: 'Enter Delivery Details',
    desc: 'For official transcripts, enter the recipient institution or address. For unofficial, download instantly.',
  },
  {
    num: '04',
    title: 'Confirm & Submit',
    desc: 'Review your request and confirm. Official transcripts are processed within 3–5 business days.',
  },
]

const TYPES = [
  {
    label: 'Official Transcript',
    tagline: 'Sealed & certified',
    desc: 'Required by transfer institutions, employers, and graduate programs. Sent directly to the recipient with an official seal.',
    fee: '$5 per copy',
    time: '3–5 business days',
    how: 'MyLawson or Registrar Office in person',
  },
  {
    label: 'Unofficial Transcript',
    tagline: 'Instant, no fee',
    desc: 'For personal reference, advising, or preliminary review. Not accepted as official documentation.',
    fee: 'Free',
    time: 'Instant download',
    how: 'MyLawson → Student Records',
  },
]

export default function TranscriptsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg" alt="Lawson State campus" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Transcripts</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Records · Registrar
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            TRANSCRIPT REQUESTS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '50ch', lineHeight: 1.7 }}>
            Order official transcripts for transfer or employment, or download an unofficial copy instantly through MyLawson.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://experience.elluciancloud.com/lcc45/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Log In to MyLawson<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Contact the Registrar
            </Link>
          </div>
        </div>
      </section>

      {/* Transcript types */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Types</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>OFFICIAL vs. UNOFFICIAL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TYPES.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl p-7"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.18em' }}>{t.tagline}</p>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.3rem', color: 'oklch(0.16 0.04 261)' }}>{t.label}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, marginBottom: '1.2rem' }}>{t.desc}</p>
                <div className="flex flex-col gap-2">
                  {[['Fee', t.fee], ['Processing time', t.time], ['How to order', t.how]].map(([k, v]) => (
                    <div key={k} className="flex gap-2 text-sm">
                      <span style={{ color: 'var(--lscc-eyebrow)', fontWeight: 700, minWidth: '8rem' }}>{k}</span>
                      <span style={{ color: 'oklch(0.35 0.04 261)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to order steps */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>How to Order</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>4 EASY STEPS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.num} className="flex flex-col gap-3">
                <div
                  className="font-display font-black"
                  style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </div>
                <p className="font-display font-black" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.87rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Important</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>BEFORE YOU ORDER</h2>
            <ul className="flex flex-col gap-3">
              {[
                'Your account must be in good standing (no financial holds) to request official transcripts.',
                'Transcripts are protected under FERPA. You must authorize each release.',
                'Lawson State transcripts cover only coursework completed at LSCC — not transfer credits from other institutions.',
                'Rush processing is not available. Plan ahead for application deadlines.',
                'For questions, contact the Registrar\'s Office at 205.929.2113 or visit either campus.',
              ].map((note) => (
                <li key={note} className="flex gap-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, fontSize: '1rem', flexShrink: 0, marginTop: '0.05rem' }}>›</span>
                  {note}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://experience.elluciancloud.com/lcc45/"
                target="_blank"
                rel="noopener noreferrer"
                className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
              >
                Order via MyLawson<span className="sr-only"> (opens in new tab)</span>
              </a>
              <Link
                href="/contact"
                className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg"
                style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.92rem' }}
              >
                Contact Registrar
              </Link>
            </div>
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
