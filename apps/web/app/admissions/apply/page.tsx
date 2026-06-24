import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Apply to Lawson State — Start Your Application',
  description:
    'Apply to Lawson State Community College. No minimum GPA. Rolling admissions. Complete your free application online today.',
}

const CHECKLIST = [
  { step: '1', label: 'Create an account or log in on the application portal' },
  { step: '2', label: 'Complete the short online form — takes about 10 minutes' },
  { step: '3', label: 'Submit your official high school transcript or GED certificate' },
  { step: '4', label: 'If transferring, send transcripts from all prior colleges' },
  { step: '5', label: 'Check your email for your admission decision and next steps' },
]

export default function ApplyPage() {
  return (
    <>
      <Nav />

      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-32" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 20%, oklch(0.79 0.19 78 / 0.09) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-2xl mx-auto w-full text-center">
          <p className="font-display font-semibold uppercase mb-4" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.68rem', letterSpacing: '0.22em' }}>
            Rolling Admissions · No Application Fee
          </p>
          <h1
            className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', letterSpacing: '-0.025em' }}
          >
            START YOUR APPLICATION
          </h1>
          <p className="text-white/55 mb-10 mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '44ch' }}>
            Lawson State's application is free and takes about 10 minutes. No minimum GPA required. You can apply any time — we accept students year-round.
          </p>

          {/* Primary CTA */}
          <a
            href="https://lawsonstate.edu/admissions/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer inline-flex items-center font-bold px-10 py-4 rounded-xl mb-12"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
          >
            Open Application →
          </a>

          {/* Checklist */}
          <div className="text-left rounded-2xl p-8" style={{ background: 'oklch(0.19 0.08 263)', border: '1px solid oklch(1 0 0 / 0.08)' }}>
            <h2 className="font-display font-bold text-white mb-6" style={{ fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              What to prepare
            </h2>
            <ul className="space-y-4">
              {CHECKLIST.map(c => (
                <li key={c.step} className="flex items-start gap-4">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-display font-black"
                    style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.72rem' }}
                  >
                    {c.step}
                  </span>
                  <span className="text-white/65 pt-0.5" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link href="/admissions" className="link-reveal text-white/50 hover:text-white transition-colors font-medium" style={{ fontSize: '0.85rem' }}>
              ← Full admissions info
            </Link>
            <Link href="/financial-aid" className="link-reveal text-white/50 hover:text-white transition-colors font-medium" style={{ fontSize: '0.85rem' }}>
              Financial aid info
            </Link>
            <Link href="/academics" className="link-reveal text-white/50 hover:text-white transition-colors font-medium" style={{ fontSize: '0.85rem' }}>
              Browse programs
            </Link>
          </div>

          {/* Help */}
          <p className="text-white/30 mt-8" style={{ fontSize: '0.8rem' }}>
            Questions? Call admissions at{' '}
            <a href="tel:+12059293416" className="text-white/50 hover:text-white transition-colors">205.929.3416</a>
            {' '}or text{' '}
            <a href="sms:+12057076422" className="text-white/50 hover:text-white transition-colors">205.707.6422</a>
          </p>
        </div>
      </main>

      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
