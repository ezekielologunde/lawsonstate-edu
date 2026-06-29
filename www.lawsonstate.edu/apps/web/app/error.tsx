'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[LSCC] Page error:', error)
  }, [error])

  return (
    <>
      <Nav />
      <main>
        <section
          className="page-hero relative px-6 overflow-hidden flex items-end"
          style={{ background: 'oklch(0.13 0.12 261)', minHeight: '70vh', paddingTop: '8rem', paddingBottom: '4rem' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 55% 55% at 30% 50%, oklch(0.30 0.15 20 / 0.22) 0%, transparent 65%)' }}
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <p
              className="font-display font-black select-none"
              aria-hidden="true"
              style={{ fontSize: 'clamp(5rem, 16vw, 11rem)', lineHeight: 1, color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.04em', opacity: 0.12, marginBottom: '-1rem' }}
            >
              ERR
            </p>
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
                Something went wrong
              </p>
              <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', letterSpacing: '-0.025em' }}>
                UNEXPECTED ERROR
              </h1>
              <p style={{ fontSize: '1.08rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '48ch', lineHeight: 1.7 }}>
                We hit an unexpected error loading this page. Try refreshing — if it keeps happening, our support team is ready to help.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={reset}
                  className="press btn-shimmer font-bold px-6 py-3 rounded-lg"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem', border: 'none', cursor: 'pointer' }}
                >
                  Try Again
                </button>
                <Link
                  href="/"
                  className="press inline-block font-semibold px-6 py-3 rounded-lg"
                  style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', color: 'white', fontSize: '1rem' }}
                >
                  Go to Homepage
                </Link>
                <Link
                  href="/contact"
                  className="press inline-block font-semibold px-6 py-3 rounded-lg"
                  style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', color: 'white', fontSize: '1rem' }}
                >
                  Contact Support
                </Link>
              </div>
              {error.digest && (
                <p className="mt-6" style={{ fontSize: '0.75rem', color: 'oklch(1 0 0 / 0.28)', fontFamily: 'monospace' }}>
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
