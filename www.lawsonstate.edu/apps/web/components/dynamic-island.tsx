'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const QUICK = [
  { label: 'Apply', href: '/admissions/apply' },
  { label: 'Programs', href: '/academics' },
  { label: 'Aid', href: '/financial-aid' },
  { label: 'Contact', href: '/contact' },
]

export default function DynamicIsland() {
  const [expanded, setExpanded] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      aria-label="Quick access"
      className="dynamic-island-pill fixed z-40 flex items-center overflow-hidden"
      style={{
        top: '76px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'oklch(0.10 0.04 261 / 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid oklch(1 0 0 / 0.12)',
        boxShadow: expanded
          ? '0 24px 60px oklch(0.08 0.04 261 / 0.55), 0 0 0 1px oklch(0.79 0.19 78 / 0.20)'
          : '0 8px 32px oklch(0.08 0.04 261 / 0.45)',
        width: expanded ? '400px' : '210px',
        borderRadius: expanded ? '20px' : '999px',
        height: expanded ? 'auto' : '36px',
        transition: reduceMotion ? 'none' : 'width 0.38s cubic-bezier(0.23,1,0.32,1), border-radius 0.38s cubic-bezier(0.23,1,0.32,1), box-shadow 0.28s ease',
        padding: expanded ? '1rem' : '0 1rem',
      }}
    >
      {!expanded ? (
        /* Collapsed pill */
        <button
          onClick={() => setExpanded(true)}
          className="w-full flex items-center justify-between gap-3"
          aria-expanded={false}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block rounded-full"
              style={{ width: '6px', height: '6px', background: 'oklch(0.79 0.19 78)', boxShadow: '0 0 8px oklch(0.79 0.19 78 / 0.8)', animation: 'glow-pulse 2s ease-in-out infinite' }}
            />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', color: 'oklch(1 0 0 / 0.85)' }}>
              LAWSON STATE
            </span>
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--lscc-eyebrow-on-dark)', fontWeight: 700, letterSpacing: '0.08em' }}>
            APPLY NOW →
          </span>
        </button>
      ) : (
        /* Expanded panel */
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--lscc-eyebrow-on-dark)', textTransform: 'uppercase' }}>
              Quick Links
            </span>
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close"
              style={{ background: 'oklch(1 0 0 / 0.10)', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', color: 'oklch(1 0 0 / 0.60)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {QUICK.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                onClick={() => setExpanded(false)}
                className="press"
                style={{
                  display: 'block',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '10px',
                  background: 'oklch(1 0 0 / 0.07)',
                  color: 'oklch(1 0 0 / 0.85)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.79 0.19 78 / 0.20)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(1 0 0 / 0.07)' }}
              >
                {q.label}
              </Link>
            ))}
          </div>
          <Link
            href="/admissions/apply"
            onClick={() => setExpanded(false)}
            className="press btn-shimmer cta-urgent"
            style={{
              display: 'block',
              marginTop: '0.75rem',
              padding: '0.6rem 1rem',
              borderRadius: '12px',
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
              fontSize: '0.82rem',
              fontWeight: 800,
              textDecoration: 'none',
              textAlign: 'center',
              letterSpacing: '0.04em',
            }}
          >
            Apply Now — Applications Open
          </Link>
        </div>
      )}
    </div>
  )
}
