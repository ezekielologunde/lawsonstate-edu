'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Admissions', href: '/admissions' },
  { label: 'Academics', href: '/academics' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{
        background: scrolled
          ? 'oklch(0.27 0.13 263 / 0.96)'
          : 'oklch(0.27 0.13 263 / 0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display font-bold text-white tracking-wide"
            style={{ fontSize: '1.25rem' }}
          >
            LAWSON STATE
          </span>
          <span className="text-white/50 uppercase" style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}>
            Community College
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/portal"
            className="text-sm font-medium text-white/75 hover:text-white transition-colors"
          >
            Portal Login
          </Link>
          <Link
            href="/admissions/apply"
            className="text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            style={{
              background: 'oklch(0.83 0.16 82)',
              color: 'oklch(0.14 0.02 263)',
            }}
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className="w-6 h-0.5 bg-white block transition-transform duration-200 origin-center"
            style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="w-6 h-0.5 bg-white block transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="w-6 h-0.5 bg-white block transition-transform duration-200 origin-center"
            style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '24rem' : '0',
          opacity: open ? 1 : 0,
          background: 'oklch(0.20 0.10 265)',
          borderTop: open ? '1px solid oklch(1 0 0 / 0.1)' : 'none',
        }}
      >
        <nav className="px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-white font-medium py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-white/10" />
          <Link
            href="/portal"
            className="text-white/75 hover:text-white font-medium py-1 transition-colors"
            onClick={() => setOpen(false)}
          >
            Portal Login
          </Link>
          <Link
            href="/admissions/apply"
            className="text-center font-semibold px-5 py-3 rounded transition-colors"
            style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)' }}
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
