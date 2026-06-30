import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const STANDARDS = [
  { label: 'WCAG 2.1 Level AA', desc: 'Web Content Accessibility Guidelines — our target conformance level for all digital content.' },
  { label: 'Section 508', desc: 'Federal rehabilitation act requirements for electronic and information technology accessibility.' },
  { label: 'ADA Title II', desc: 'Americans with Disabilities Act requirements for public entities, including community colleges.' },
  { label: 'ACCS Standards', desc: 'Alabama Community College System digital accessibility policies and compliance requirements.' },
]

const FEATURES = [
  { label: 'Keyboard Navigation', desc: 'All interactive elements are operable via keyboard without requiring a mouse.' },
  { label: 'Screen Reader Support', desc: 'Semantic HTML, ARIA labels, and proper heading structure for assistive technology users.' },
  { label: 'Color Contrast', desc: 'Text and interactive elements meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text).' },
  { label: 'Scalable Text', desc: 'All text remains readable and functional when zoomed to 200% without horizontal scrolling.' },
  { label: 'Alt Text', desc: 'Meaningful images include descriptive alternative text; decorative images are hidden from screen readers.' },
  { label: 'Focus Indicators', desc: 'Visible focus rings appear on all interactive elements during keyboard navigation.' },
]

export default function AccessibilityPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Accessibility</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            WCAG 2.1 AA · ADA · Section 508
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ACCESSIBILITY STATEMENT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            Lawson State Community College is committed to ensuring equal access to digital content and web-based services for all users, including people with disabilities.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Our Commitment</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>DIGITAL ACCESSIBILITY</h2>
            <div className="flex flex-col gap-4" style={{ fontSize: '0.92rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.75 }}>
              <p>
                Lawson State Community College is committed to providing a website and digital services that are accessible to the widest possible audience, including individuals with visual, auditory, cognitive, and motor impairments.
              </p>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities. Conformance with these guidelines also makes web content more usable for all users.
              </p>
              <p>
                We are actively working to increase the accessibility and usability of our website. If you find a page or feature that does not meet our accessibility standard, please contact us using the information below.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {STANDARDS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <p className="font-display font-black text-sm mb-1" style={{ color: 'oklch(0.22 0.17 261)' }}>{s.label}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.50 0.04 261)', lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What We&apos;ve Built</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ACCESSIBILITY FEATURES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl p-5"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{f.label}</p>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report & alternatives */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Found a Problem?</p>
            <h3 className="font-display font-black mb-4" style={{ fontSize: '1.3rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.01em' }}>REPORT AN ISSUE</h3>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              If you encounter an accessibility barrier on our website, please contact us. We will respond within two business days and work to resolve the issue as quickly as possible.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: 'oklch(0.42 0.04 261)' }}>
              <div>
                <span style={{ fontWeight: 700, color: 'oklch(0.22 0.17 261)' }}>Email:</span>{' '}
                <a href="mailto:accessibility@lawsonstate.edu" className="underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                  accessibility@lawsonstate.edu
                </a>
              </div>
              <div><span style={{ fontWeight: 700, color: 'oklch(0.22 0.17 261)' }}>Phone:</span> 205.925.2515</div>
              <div><span style={{ fontWeight: 700, color: 'oklch(0.22 0.17 261)' }}>Response time:</span> Within 2 business days</div>
            </div>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Alternative Access</p>
            <h3 className="font-display font-black text-white mb-4" style={{ fontSize: '1.3rem', letterSpacing: '-0.01em' }}>NEED ANOTHER FORMAT?</h3>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              If digital content is inaccessible to you due to a disability, we will provide an accessible alternative format upon request — large print, audio recording, or an in-person alternative.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/student-resources/disability"
                className="press btn-shimmer inline-flex items-center font-bold px-5 py-2.5 rounded-lg text-sm"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
              >
                Disability Services →
              </Link>
              <Link
                href="/contact"
                className="press inline-flex items-center font-semibold px-5 py-2.5 rounded-lg text-sm text-white"
                style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Third-party note */}
      <section className="py-10 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto max-w-3xl">
          <p className="font-bold text-xs uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Third-Party Content</p>
          <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7 }}>
            Our website may link to third-party websites and platforms (Canvas LMS, MyLawson portal, Tutor.com, etc.) which have their own accessibility policies. We encourage you to review those policies, and we work with vendors to advocate for accessible design in the tools we choose. If you encounter an accessibility issue on a third-party platform used by the College, please notify us so we can follow up with the provider.
          </p>
          <p className="mt-4" style={{ fontSize: '0.82rem', color: 'oklch(0.55 0.04 261)' }}>
            Statement last reviewed: June 2026.{' '}
            <Link href="/about/non-discrimination" className="underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
              Non-Discrimination Notice →
            </Link>
          </p>
        </div>
      </section>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
