'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HBCUPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('lscc_hbcu_seen')) return
    const t = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    localStorage.setItem('lscc_hbcu_seen', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center px-4"
      style={{
        background: 'oklch(0 0 0 / 0.60)',
        backdropFilter: 'blur(6px)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hbcu-heading"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-card-hover"
        style={{
          background: 'white',
          border: '1px solid oklch(0 0 0 / 0.08)',
          boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top band */}
        <div
          className="h-1.5"
          style={{ background: 'linear-gradient(90deg, oklch(0.79 0.19 78), oklch(0.68 0.20 76))' }}
        />

        <div className="p-7 pt-6">
          {/* HBCU badge + year */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full"
              style={{
                background: 'oklch(0.79 0.19 78)',
                color: 'oklch(0.11 0.03 261)',
                fontSize: '0.65rem',
                letterSpacing: '0.07em',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              HBCU PROUD
            </span>
            <span style={{ fontSize: '0.75rem', color: 'oklch(0.50 0.03 261)' }}>est. 1949</span>
          </div>

          <h2
            id="hbcu-heading"
            className="font-display font-black mb-2"
            style={{ fontSize: 'clamp(1.4rem, 5vw, 1.85rem)', letterSpacing: '-0.02em', lineHeight: 1.15, color: 'oklch(0.16 0.04 261)' }}
          >
            Welcome to<br />
            <span style={{ color: 'var(--lscc-eyebrow)' }}>Lawson State</span>
          </h2>

          <p
            className="leading-relaxed mb-6"
            style={{ fontSize: '0.875rem', maxWidth: '34ch', color: 'oklch(0.40 0.04 261)' }}
          >
            A Historically Black College & University serving Birmingham and Alabama since 1949 — excellence, legacy, and community for generations.
          </p>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {['Excellence', 'Legacy', 'Community'].map((word) => (
              <div
                key={word}
                className="rounded-xl py-3 text-center"
                style={{ background: 'oklch(0.97 0.01 263)', border: '1px solid oklch(0 0 0 / 0.08)' }}
              >
                <span
                  className="font-semibold uppercase block"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.06em', color: 'oklch(0.16 0.04 261)' }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <Link
              href="/admissions/apply"
              className="flex-1 text-center font-bold py-3.5 rounded-xl text-sm transition-opacity hover:opacity-90"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
              onClick={dismiss}
            >
              Apply Now
            </Link>
            <button
              className="flex-1 font-semibold py-3.5 rounded-xl text-sm transition-colors hover:bg-black/5"
              style={{ border: '1px solid oklch(0.16 0.04 261 / 0.25)', color: 'oklch(0.16 0.04 261)' }}
              onClick={dismiss}
            >
              Explore
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 transition-colors hover:opacity-70"
          style={{ color: 'oklch(0.50 0.03 261)' }}
          onClick={dismiss}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
