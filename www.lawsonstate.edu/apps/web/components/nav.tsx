'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SearchModal from './search-modal'

const UTILITY = [
  { label: 'MyLawson',      href: 'https://my.lawsonstate.edu' },
  { label: 'Canvas',        href: 'https://lawsonstate.instructure.com' },
  { label: 'Student Email', href: 'https://outlook.office.com' },
  { label: 'Help Desk',     href: '/it', internal: true },
  { label: 'Class Schedule',href: 'https://my.lawsonstate.edu' },
]

const NAV_LINKS = [
  { label: 'Programs',      href: '/academics' },
  { label: 'Apply',         href: '/admissions' },
  { label: 'Tuition & Aid', href: '/financial-aid' },
  { label: 'Campus Life',   href: '/campus-life' },
  { label: 'About',         href: '/about' },
  { label: 'News',          href: '/news' },
  { label: 'Library',       href: '/library' },
  { label: 'Contact',       href: '/contact' },
]

const RESOURCES = [
  { label: 'MyLawson',  href: 'https://my.lawsonstate.edu' },
  { label: 'Canvas',    href: 'https://lawsonstate.instructure.com' },
  { label: 'Email',     href: 'https://outlook.office.com' },
  { label: 'Schedule',  href: 'https://my.lawsonstate.edu' },
  { label: 'Calendar',  href: '/calendar' },
  { label: 'Advising',  href: '/support/academic' },
  { label: 'Library',   href: '/library' },
  { label: 'Tutoring',  href: '/support/academic' },
  { label: 'Help Desk', href: '/it' },
]

const NAVY      = 'oklch(0.16 0.04 261)'
const DARK_NAVY = 'oklch(0.12 0.04 261)'
const GOLD      = 'oklch(0.79 0.19 78)'
const GOLD_TEXT = 'oklch(0.11 0.03 261)'

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDrawer() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen, closeDrawer])

  const linkColor = scrolled ? 'oklch(0.30 0.05 261)' : 'oklch(1 0 0 / 0.88)'
  const wordColor = scrolled ? NAVY : 'white'
  const subColor  = scrolled ? 'oklch(0.50 0.03 261)' : 'oklch(1 0 0 / 0.45)'
  const barColor  = scrolled ? NAVY : 'white'

  return (
    <>
      {/* ─── Fixed header ─── */}
      <header
        className={`fixed inset-x-0 z-[60] transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{
          top: 'var(--lscc-banner-h, 0px)',
          background: scrolled ? 'oklch(0.99 0.005 263 / 0.96)' : 'oklch(0.99 0.005 263 / 0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0 0 0 / 0.08)' : '1px solid transparent',
        }}
      >
        {/* ── Utility bar (desktop only) ── */}
        <div className="hidden lg:block" style={{ background: DARK_NAVY, borderBottom: '1px solid oklch(1 0 0 / 0.07)' }}>
          <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {UTILITY.map((u) =>
                u.internal ? (
                  <Link
                    key={u.label}
                    href={u.href}
                    className="text-[0.72rem] font-medium transition-opacity hover:opacity-70"
                    style={{ color: 'oklch(1 0 0 / 0.68)', letterSpacing: '0.01em' }}
                  >
                    {u.label}
                  </Link>
                ) : (
                  <a
                    key={u.label}
                    href={u.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.72rem] font-medium transition-opacity hover:opacity-70"
                    style={{ color: 'oklch(1 0 0 / 0.68)', letterSpacing: '0.01em' }}
                  >
                    {u.label}
                  </a>
                )
              )}
            </div>
            <SearchModal dark />
          </div>
        </div>

        {/* ── Main nav bar ── */}
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-[60px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 leading-none shrink-0">
            <div
              className="font-display font-black flex-shrink-0 flex items-center justify-center"
              style={{ width: '32px', height: '32px', background: GOLD, color: GOLD_TEXT, borderRadius: '6px', fontSize: '0.75rem', letterSpacing: '-0.02em' }}
            >
              LS
            </div>
            <div className="flex flex-col leading-none" style={{ gap: '2px' }}>
              <span className="font-display font-extrabold hidden lg:block transition-colors" style={{ fontSize: '0.88rem', letterSpacing: '0.06em', color: wordColor }}>
                LAWSON STATE
              </span>
              <span className="hidden lg:block transition-colors" style={{ fontSize: '0.42rem', letterSpacing: '0.22em', color: subColor }}>
                COMMUNITY COLLEGE
              </span>
              <span className="font-display font-extrabold lg:hidden transition-colors" style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: wordColor }}>
                LAWSON STATE
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8rem] font-medium whitespace-nowrap transition-opacity hover:opacity-70"
                style={{ color: linkColor }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Apply CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/admissions/apply"
              className="text-[0.82rem] font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: GOLD_TEXT }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <span className="block w-6 h-[2px] rounded-full" style={{ background: barColor }} />
            <span className="block w-6 h-[2px] rounded-full" style={{ background: barColor }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: barColor }} />
          </button>
        </div>
      </header>

      {/* ─── Backdrop ─── */}
      <div
        aria-hidden
        onClick={closeDrawer}
        className="fixed inset-0 z-[69] transition-opacity duration-300"
        style={{
          background: 'oklch(0 0 0 / 0.60)',
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'auto' : 'none',
        }}
      />

      {/* ─── Side Drawer ─── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed top-0 right-0 h-full z-[70] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out"
        style={{
          width: 'min(360px, 94vw)',
          background: NAVY,
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 shrink-0"
          style={{ background: DARK_NAVY, borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}
        >
          <Link href="/" onClick={closeDrawer} className="flex items-center gap-2">
            <div
              className="font-display font-black flex items-center justify-center"
              style={{ width: '28px', height: '28px', background: GOLD, color: GOLD_TEXT, borderRadius: '5px', fontSize: '0.68rem' }}
            >
              LS
            </div>
            <span className="font-display font-bold text-white text-sm" style={{ letterSpacing: '0.06em' }}>LAWSON STATE</span>
          </Link>
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: 'oklch(1 0 0 / 0.65)', background: 'oklch(1 0 0 / 0.06)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-3 pt-3 pb-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className="flex items-center justify-between px-3 py-[0.85rem] rounded-lg text-sm font-semibold transition-colors"
              style={{
                color: 'oklch(1 0 0 / 0.88)',
                borderBottom: '1px solid oklch(1 0 0 / 0.06)',
              }}
            >
              {link.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Apply CTA */}
        <div className="px-4 py-4">
          <Link
            href="/admissions/apply"
            onClick={closeDrawer}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            Apply Now — Fall 2026
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-4 shrink-0" style={{ height: '1px', background: 'oklch(1 0 0 / 0.08)' }} />

        {/* Student Resources grid */}
        <div className="px-4 py-4">
          <p className="text-[0.67rem] font-bold uppercase mb-3" style={{ color: 'oklch(1 0 0 / 0.40)', letterSpacing: '0.18em' }}>
            Student Resources
          </p>
          <div className="grid grid-cols-3 gap-2">
            {RESOURCES.map((r) => (
              <a
                key={r.label}
                href={r.href}
                onClick={closeDrawer}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-center py-3 rounded-xl text-xs font-semibold text-center transition-colors"
                style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.78)' }}
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>

        {/* Need Help card */}
        <div className="mx-4 mb-4 rounded-xl p-4" style={{ background: 'oklch(0.22 0.07 261)' }}>
          <p className="text-sm font-bold text-white mb-1">Need Help?</p>
          <p className="text-xs mb-3" style={{ color: 'oklch(1 0 0 / 0.60)', lineHeight: 1.55 }}>
            Classes, finances, tech support, or just someone to talk to — we&apos;re here.
          </p>
          <a
            href="mailto:help@lawsonstate.edu"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            Email Us
          </a>
        </div>

        {/* Secondary links — Faculty & Contact */}
        <div className="flex items-center gap-2 px-4 pb-8 mt-auto">
          <Link
            href="/faculty"
            onClick={closeDrawer}
            className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold transition-colors"
            style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.65)' }}
          >
            Faculty / Staff
          </Link>
          <Link
            href="/contact"
            onClick={closeDrawer}
            className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold transition-colors"
            style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.65)' }}
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  )
}
