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
          ? 'oklch(0.22 0.17 261 / 0.96)'
          : 'oklch(0.22 0.17 261 / 0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Official logo */}
        <Link href="/" className="flex items-center leading-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.lawsonstate.edu/_resources/assets/img/Lawson-logo.png"
            alt="Lawson State Community College"
            className="w-auto object-contain"
            style={{ height: '36px', filter: 'brightness(0) invert(1)' }}
          />
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
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
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
          background: 'oklch(0.16 0.13 263)',
          borderTop: open ? '1px solid oklch(1 0 0 / 0.1)' : 'none',
        }}
      >
        <nav className="px-6 py-4 flex flex-col">
          {/* Apply Now — most important action, top of mobile menu */}
          <Link
            href="/admissions/apply"
            className="text-center font-bold px-5 py-4 rounded-xl mb-4 transition-colors"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium transition-colors"
              style={{ padding: '0.75rem 0', borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="text-white/80 hover:text-white font-medium transition-colors mt-1"
            style={{ padding: '0.75rem 0' }}
            onClick={() => setOpen(false)}
          >
            Student Portal
          </Link>
        </nav>
      </div>
    </header>
  )
}
