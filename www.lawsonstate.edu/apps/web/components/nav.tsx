'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import SearchModal from './search-modal'

const NAV_LINKS = [
  { label: 'How to Apply', href: '/admissions' },
  { label: 'Programs',     href: '/academics' },
  { label: 'Campus Life',  href: '/campus-life' },
  { label: 'About',        href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Transparent over the dark hero (white text); light bar with dark text once scrolled
  const linkColor = scrolled ? 'oklch(0.32 0.05 261)' : 'oklch(1 0 0 / 0.82)'
  const wordColor = scrolled ? 'oklch(0.16 0.04 261)' : 'white'
  const subColor  = scrolled ? 'oklch(0.48 0.03 261)' : 'oklch(1 0 0 / 0.40)'
  const barColor  = scrolled ? 'oklch(0.20 0.04 261)' : 'white'

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      style={{
        top: 'var(--lscc-banner-h, 0px)',
        background: scrolled ? 'oklch(0.99 0.005 263 / 0.92)' : 'oklch(0.99 0.005 263 / 0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(0 0 0 / 0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo — Gen Z collegiate lockup */}
        <Link href="/" className="flex items-center gap-2 lg:gap-2.5 leading-none">
          {/* LS badge mark */}
          <div
            className="font-display font-black flex-shrink-0 flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            LS
          </div>
          {/* Wordmark */}
          <div className="flex flex-col leading-none" style={{ gap: '2px' }}>
            <span
              className="font-display font-extrabold block hidden lg:block transition-colors"
              style={{ fontSize: '0.9rem', letterSpacing: '0.06em', color: wordColor }}
            >
              LAWSON STATE
            </span>
            <span
              className="block hidden lg:block transition-colors"
              style={{ fontSize: '0.43rem', letterSpacing: '0.2em', color: subColor }}
            >
              COMMUNITY COLLEGE
            </span>
            <span
              className="font-display font-extrabold block lg:hidden transition-colors"
              style={{ fontSize: '0.75rem', letterSpacing: '0.04em', color: wordColor }}
            >
              LS
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: linkColor }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <SearchModal dark={!scrolled} />
          <a
            href="https://my.lawsonstate.edu"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: linkColor }}
          >
            Portal Login
          </a>
          <Link
            href="/admissions/apply"
            className="text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            style={{
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
            }}
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1 p-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className="w-6 h-0.5 block transition-all duration-200 origin-center"
            style={{ background: barColor, transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="w-6 h-0.5 block transition-all duration-200"
            style={{ background: barColor, opacity: open ? 0 : 1 }}
          />
          <span
            className="w-6 h-0.5 block transition-all duration-200 origin-center"
            style={{ background: barColor, transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu — light panel */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '20rem' : '0',
          opacity: open ? 1 : 0,
          background: 'oklch(0.99 0.005 263)',
          borderTop: open ? '1px solid oklch(0 0 0 / 0.08)' : 'none',
        }}
      >
        <nav className="px-6 py-3 flex flex-col gap-1">
          {/* Apply Now — most important action, top of mobile menu */}
          <Link
            href="/admissions/apply"
            className="text-center font-bold px-4 py-2.5 rounded-lg transition-colors text-sm"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium transition-colors text-sm hover:opacity-70"
              style={{ padding: '0.5rem 0.5rem', borderBottom: '1px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.30 0.05 261)' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://my.lawsonstate.edu"
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-colors text-sm hover:opacity-70"
            style={{ padding: '0.5rem 0.5rem', color: 'oklch(0.30 0.05 261)' }}
            onClick={() => setOpen(false)}
          >
            Student Portal
          </a>
        </nav>
      </div>
    </header>
  )
}
