'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import SearchModal from './search-modal'
import { NAV, MOBILE_GROUPS } from './nav-data'
import type { NavEntry } from './nav-data'

// ── Icons ────────────────────────────────────────────────────────

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)
const ArrowRight = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const ExternalIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

// ── Component ────────────────────────────────────────────────────

export default function Nav() {
  const [scrolled,      setScrolled]      = useState(false)
  const [open,          setOpen]          = useState(false)
  const [openMenu,      setOpenMenu]      = useState<string | null>(null)
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpenMenu(null); setOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 130)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const lc = 'oklch(1 0 0 / 0.88)'
  const wc = 'white'
  const sc = 'oklch(1 0 0 / 0.42)'
  const bc = 'white'

  return (
    <header
      className="fixed inset-x-0 z-50"
      style={{
        top: 'var(--lscc-banner-h, 0px)',
        background: 'oklch(0.13 0.12 261 / 0.95)',
        backdropFilter: 'blur(20px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
        borderBottom: '1px solid oklch(1 0 0 / 0.10)',
        boxShadow: scrolled ? '0 4px 32px oklch(0 0 0 / 0.32)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 md:h-[70px] flex items-center justify-between gap-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 leading-none" onClick={() => setOpen(false)}>
          <div
            className="font-display font-black shrink-0 flex items-center justify-center"
            style={{ width: '36px', height: '36px', background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', borderRadius: '8px', fontSize: '0.78rem', letterSpacing: '-0.02em', boxShadow: '0 2px 10px oklch(0.79 0.19 78 / 0.45)' }}
          >
            LS
          </div>
          <div className="hidden md:flex flex-col leading-none gap-[3px]">
            <span className="font-display font-extrabold transition-colors duration-200" style={{ fontSize: '0.88rem', letterSpacing: '0.07em', color: wc }}>LAWSON STATE</span>
            <span className="transition-colors duration-200" style={{ fontSize: '0.43rem', letterSpacing: '0.22em', color: sc }}>COMMUNITY COLLEGE</span>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav
          className="hidden lg:flex items-center gap-0 flex-1 justify-center"
          onMouseLeave={scheduleClose}
          onMouseEnter={cancelClose}
          aria-label="Main navigation"
        >
          {NAV.map((item: NavEntry) => (
            <div key={item.label} className="relative">

              {/* Trigger */}
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-[0.80rem] font-semibold rounded-lg transition-colors duration-150 hover:bg-white/8"
                style={{ color: lc }}
                onMouseEnter={() => { cancelClose(); setOpenMenu(item.mega ? item.label : null) }}
                aria-haspopup={item.mega ? 'true' : undefined}
                aria-expanded={item.mega ? openMenu === item.label : undefined}
              >
                {item.label}
                {item.mega && (
                  <span style={{ display: 'inline-flex', transition: 'transform 0.22s ease', transform: openMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown />
                  </span>
                )}
              </Link>

              {/* Mega-menu panel */}
              {item.mega && openMenu === item.label && (
                <div
                  style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', zIndex: 60 }}
                  onMouseEnter={() => { cancelClose(); setOpenMenu(item.label) }}
                >
                  <div
                    className="nav-dropdown mt-2"
                    style={{
                      minWidth: '520px',
                      background: 'white',
                      borderRadius: '18px',
                      border: '1px solid oklch(0 0 0 / 0.08)',
                      boxShadow: '0 20px 80px oklch(0.11 0.03 261 / 0.20), 0 0 0 1px oklch(0 0 0 / 0.04)',
                      padding: '1.4rem',
                    }}
                  >
                    <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${item.mega.length}, 1fr)` }}>
                      {item.mega.map((group) => (
                        <div key={group.title}>
                          <p style={{ fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lscc-eyebrow)', fontWeight: 700, marginBottom: '0.55rem' }}>
                            {group.title}
                          </p>
                          <div className="flex flex-col gap-0.5">
                            {group.items.map((sub) => {
                              const inner = (
                                <div className="flex flex-col gap-0.5 px-2.5 py-2 rounded-xl transition-colors hover:bg-black/[0.04]">
                                  <span className="text-[0.84rem] font-semibold flex items-center gap-1.5" style={{ color: sub.highlight ? 'var(--lscc-eyebrow)' : 'oklch(0.16 0.04 261)' }}>
                                    {sub.label}
                                    {sub.highlight && <span style={{ fontSize: '0.60rem', background: 'oklch(0.96 0.05 82)', color: 'var(--lscc-eyebrow)', padding: '0.12rem 0.45rem', borderRadius: '999px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Browse</span>}
                                    {sub.external && <ExternalIcon />}
                                  </span>
                                  {sub.note && <span style={{ fontSize: '0.70rem', color: 'oklch(0.55 0.05 261)', lineHeight: 1.3 }}>{sub.note}</span>}
                                </div>
                              )
                              return sub.external ? (
                                <a key={sub.label} href={sub.href} target="_blank" rel="noreferrer" onClick={() => setOpenMenu(null)}>{inner}</a>
                              ) : (
                                <Link key={sub.label} href={sub.href} onClick={() => setOpenMenu(null)}>{inner}</Link>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <SearchModal dark={!scrolled} />
          <a href="https://my.lawsonstate.edu" target="_blank" rel="noreferrer" className="text-[0.82rem] font-semibold transition-opacity hover:opacity-60 whitespace-nowrap" style={{ color: lc }}>
            My Portal<span className="sr-only"> (opens in new tab)</span>
          </a>
          <Link href="/admissions/apply" className="press btn-shimmer text-[0.82rem] font-bold px-5 py-2 rounded-lg whitespace-nowrap" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', boxShadow: '0 2px 12px oklch(0.79 0.19 78 / 0.35)' }}>
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 ml-auto shrink-0"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="w-5 h-[1.5px] block transition-all duration-200 origin-center mx-auto" style={{ background: bc, transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
          <span className="w-5 h-[1.5px] block transition-all duration-200 mx-auto" style={{ background: bc, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }} />
          <span className="w-5 h-[1.5px] block transition-all duration-200 origin-center mx-auto" style={{ background: bc, transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        className="lg:hidden fixed inset-0 z-40 pointer-events-none"
        style={{ top: 'calc(var(--lscc-banner-h, 0px) + 64px)' }}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ background: 'oklch(0 0 0 / 0.50)', opacity: open ? 1 : 0, backdropFilter: open ? 'blur(4px)' : 'none', pointerEvents: open ? 'auto' : 'none' }}
          onClick={() => setOpen(false)}
          aria-hidden
        />

        {/* Slide-down panel */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-auto transition-all duration-300"
          style={{
            background: 'white',
            maxHeight: open ? 'calc(100dvh - 64px)' : '0',
            opacity: open ? 1 : 0,
            overflow: open ? 'auto' : 'hidden',
            boxShadow: '0 24px 80px oklch(0 0 0 / 0.22)',
          }}
        >
          {/* Pinned CTA */}
          <div className="px-4 pt-4 pb-2">
            <Link
              href="/admissions/apply"
              onClick={() => setOpen(false)}
              className="btn-shimmer flex items-center justify-between font-bold text-sm px-4 py-3.5 rounded-2xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              Apply Now — Fall 2026
              <ArrowRight />
            </Link>
          </div>

          {/* Accordion groups */}
          <nav className="px-4 py-2 flex flex-col gap-0.5" aria-label="Mobile navigation">
            {MOBILE_GROUPS.map((group) => {
              const isExp = expandedGroup === group.label
              return (
                <div key={group.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl font-bold text-sm transition-colors hover:bg-black/[0.04] text-left"
                    style={{ color: 'oklch(0.16 0.04 261)' }}
                    onClick={() => setExpandedGroup(isExp ? null : group.label)}
                    aria-expanded={isExp}
                  >
                    {group.label}
                    <span style={{ display: 'inline-flex', transition: 'transform 0.22s ease', transform: isExp ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <ChevronDown />
                    </span>
                  </button>

                  {isExp && (
                    <div className="flex flex-col gap-0.5 pl-2.5 pb-2" style={{ animation: 'acc-open 0.20s cubic-bezier(0.23,1,0.32,1) forwards' }}>
                      {group.items.map((item) => {
                        const sty = item.gold
                          ? { background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontWeight: 700 }
                          : { color: 'oklch(0.35 0.04 261)' }
                        const cls = `flex items-center justify-between text-sm px-3 py-2.5 rounded-xl transition-colors ${item.gold ? '' : 'hover:bg-black/[0.04]'}`
                        const tail = !item.gold ? (item.external ? <ExternalIcon /> : <ArrowRight />) : null
                        const content = <>{item.label}{tail && <span style={{ opacity: 0.35 }}>{tail}</span>}</>
                        return item.external ? (
                          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className={cls} style={sty}>{content}</a>
                        ) : (
                          <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className={cls} style={sty}>{content}</Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Footer row */}
          <div className="px-4 pb-6 pt-3 flex flex-col gap-1" style={{ borderTop: '1px solid oklch(0 0 0 / 0.07)', marginTop: '0.5rem' }}>
            <Link
              href="/portal"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-sm font-semibold px-3 py-3 rounded-xl hover:bg-black/[0.04] transition-colors"
              style={{ color: 'oklch(0.22 0.05 261)' }}
            >
              Student Portal Hub
              <ArrowRight />
            </Link>
            <a
              href="https://my.lawsonstate.edu"
              target="_blank" rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-sm font-semibold px-3 py-3 rounded-xl hover:bg-black/[0.04] transition-colors"
              style={{ color: 'oklch(0.22 0.05 261)' }}
            >
              MyLawson (Login)
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hover\\:bg-white\\/8:hover { background: oklch(1 0 0 / 0.08); }
        @keyframes nav-drop {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-dropdown { animation: nav-drop 0.20s cubic-bezier(0.23,1,0.32,1) forwards; }
        @keyframes acc-open {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .nav-dropdown, [style*="acc-open"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </header>
  )
}
