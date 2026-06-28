'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import SearchModal from './search-modal'

/* ── Icon primitives ── */
function NavIcon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />{d2 && <path d={d2} />}
    </svg>
  )
}
function ChevRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/* ── Data ── */
const UTILITY = [
  { label: 'MyLawson',      href: 'https://my.lawsonstate.edu' },
  { label: 'Canvas',        href: 'https://lawsonstate.instructure.com' },
  { label: 'Student Email', href: 'https://outlook.office.com' },
  { label: 'Help Desk',     href: '/it', internal: true },
  { label: 'Class Schedule',href: 'https://my.lawsonstate.edu' },
]

const NAV_LINKS = [
  { label: 'Programs',         href: '/academics',                         icon: { d: 'M22 10v6M2 10l10-5 10 5-10 5z', d2: 'M6 12v5c3 3 9 3 12 0v-5' } },
  { label: 'Apply',            href: '/admissions',                        icon: { d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' } },
  { label: 'Tuition & Aid',    href: '/financial-aid',                     icon: { d: 'M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6' } },
  { label: 'Student Life',     href: '/campus-life',                       icon: { d: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', d2: 'M9 7a4 4 0 100 0M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75' } },
  { label: 'About',            href: '/about',                             icon: { d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8h.01M11 12h1v4h1' } },
  { label: 'Current Students', href: 'https://my.lawsonstate.edu',         icon: { d: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8', d2: 'M16 11l2 2 4-4' } },
  { label: 'Faculty / Staff',  href: '/faculty',                           icon: { d: 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z', d2: 'M12 17a2 2 0 100-4 2 2 0 000 4z' } },
  { label: 'News',             href: '/news',                              icon: { d: 'M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2' } },
  { label: 'Library',          href: '/library',                           icon: { d: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z' } },
  { label: 'Contact',          href: '/contact',                           icon: { d: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' } },
]

const RESOURCES = [
  { label: 'MyLawson Portal', href: 'https://my.lawsonstate.edu' },
  { label: 'Canvas LMS',      href: 'https://lawsonstate.instructure.com' },
  { label: 'Student Email',   href: 'https://outlook.office.com' },
  { label: 'Class Schedule',  href: 'https://my.lawsonstate.edu' },
  { label: 'Academic Calendar', href: '/calendar' },
  { label: 'Advising Center', href: '/support/academic' },
  { label: 'Library Resources', href: '/library' },
  { label: 'Tutoring Services', href: '/support/academic' },
  { label: 'Help Desk',       href: '/it' },
]

const NAVY      = 'oklch(0.16 0.04 261)'
const DARK_NAVY = 'oklch(0.12 0.04 261)'
const GOLD      = 'oklch(0.79 0.19 78)'
const GOLD_TEXT = 'oklch(0.11 0.03 261)'

/* ── Toggle switch ── */
function Toggle({ on, onToggle, id }: { on: boolean; onToggle: () => void; id: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      id={id}
      onClick={onToggle}
      className="relative flex-shrink-0 transition-colors duration-200"
      style={{
        width: '36px', height: '20px', borderRadius: '999px',
        background: on ? GOLD : 'oklch(1 0 0 / 0.15)',
        border: 'none', cursor: 'pointer',
      }}
    >
      <span
        className="absolute top-[3px] transition-transform duration-200"
        style={{
          width: '14px', height: '14px', borderRadius: '50%',
          background: 'white', left: '3px',
          transform: on ? 'translateX(16px)' : 'translateX(0)',
        }}
      />
    </button>
  )
}

export default function Nav() {
  const [scrolled, setScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [fontSize, setFontSize]     = useState(0) // 0=normal 1=large 2=larger
  const [contrast, setContrast]     = useState(false)
  const [dyslexia, setDyslexia]     = useState(false)
  const [highlight, setHighlight]   = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  /* Load a11y prefs */
  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem('lscc-a11y') || 'null')
      if (s) { setFontSize(s.fs ?? 0); setContrast(!!s.ct); setDyslexia(!!s.dy); setHighlight(!!s.hl) }
    } catch {}
  }, [])

  /* Apply a11y prefs */
  useEffect(() => {
    const html = document.documentElement
    html.style.fontSize = ['', '112%', '126%'][fontSize]
    html.classList.toggle('lscc-high-contrast', contrast)
    html.classList.toggle('lscc-dyslexia', dyslexia)
    html.classList.toggle('lscc-highlight-links', highlight)
    try { localStorage.setItem('lscc-a11y', JSON.stringify({ fs: fontSize, ct: contrast, dy: dyslexia, hl: highlight })) } catch {}
  }, [fontSize, contrast, dyslexia, highlight])

  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDrawer() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [drawerOpen, closeDrawer])

  const linkColor = scrolled ? 'oklch(0.30 0.05 261)' : 'oklch(1 0 0 / 0.88)'
  const wordColor = scrolled ? NAVY : 'white'
  const subColor  = scrolled ? 'oklch(0.50 0.03 261)' : 'oklch(1 0 0 / 0.45)'
  const barColor  = scrolled ? NAVY : 'white'

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[60] transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{
          top: 'var(--lscc-banner-h, 0px)',
          background: scrolled ? 'oklch(0.99 0.005 263 / 0.96)' : 'oklch(0.99 0.005 263 / 0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(0 0 0 / 0.08)' : '1px solid transparent',
        }}
      >
        {/* Utility bar */}
        <div className="hidden lg:block" style={{ background: DARK_NAVY, borderBottom: '1px solid oklch(1 0 0 / 0.07)' }}>
          <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
            <div className="flex items-center gap-6">
              {UTILITY.map((u) =>
                u.internal ? (
                  <Link key={u.label} href={u.href} className="text-[0.7rem] font-medium transition-opacity hover:opacity-70" style={{ color: 'oklch(1 0 0 / 0.68)' }}>{u.label}</Link>
                ) : (
                  <a key={u.label} href={u.href} target="_blank" rel="noreferrer" className="text-[0.7rem] font-medium transition-opacity hover:opacity-70" style={{ color: 'oklch(1 0 0 / 0.68)' }}>{u.label}</a>
                )
              )}
            </div>
            <SearchModal dark />
          </div>
        </div>

        {/* Main nav bar */}
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-[58px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 leading-none shrink-0">
            <div className="font-display font-black flex-shrink-0 flex items-center justify-center" style={{ width: '32px', height: '32px', background: GOLD, color: GOLD_TEXT, borderRadius: '6px', fontSize: '0.75rem', letterSpacing: '-0.02em' }}>LS</div>
            <div className="flex flex-col leading-none" style={{ gap: '2px' }}>
              <span className="font-display font-extrabold hidden lg:block transition-colors" style={{ fontSize: '0.85rem', letterSpacing: '0.06em', color: wordColor }}>LAWSON STATE</span>
              <span className="hidden lg:block transition-colors" style={{ fontSize: '0.41rem', letterSpacing: '0.22em', color: subColor }}>COMMUNITY COLLEGE</span>
              <span className="font-display font-extrabold lg:hidden transition-colors" style={{ fontSize: '0.8rem', letterSpacing: '0.04em', color: wordColor }}>LAWSON STATE</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[0.75rem] font-medium whitespace-nowrap transition-opacity hover:opacity-70" style={{ color: linkColor }}>{link.label}</Link>
            ))}
          </nav>

          <div className="hidden lg:flex shrink-0">
            <Link href="/admissions/apply" className="text-[0.8rem] font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-90" style={{ background: GOLD, color: GOLD_TEXT }}>Apply Now</Link>
          </div>

          <button className="lg:hidden flex flex-col gap-[5px] p-2" onClick={() => setDrawerOpen(true)} aria-label="Open menu" aria-expanded={drawerOpen}>
            <span className="block w-6 h-[2px] rounded-full" style={{ background: barColor }} />
            <span className="block w-6 h-[2px] rounded-full" style={{ background: barColor }} />
            <span className="block w-4 h-[2px] rounded-full" style={{ background: barColor }} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div aria-hidden onClick={closeDrawer} className="fixed inset-0 z-[69] transition-opacity duration-300"
        style={{ background: 'oklch(0 0 0 / 0.60)', opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? 'auto' : 'none' }} />

      {/* Drawer */}
      <aside role="dialog" aria-modal="true" aria-label="Site navigation"
        className="fixed top-0 right-0 h-full z-[70] flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out"
        style={{ width: 'min(360px, 94vw)', background: NAVY, transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 shrink-0" style={{ background: DARK_NAVY, borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}>
          <Link href="/" onClick={closeDrawer} className="flex items-center gap-2">
            <div className="font-display font-black flex items-center justify-center" style={{ width: '28px', height: '28px', background: GOLD, color: GOLD_TEXT, borderRadius: '5px', fontSize: '0.68rem' }}>LS</div>
            <div>
              <div className="font-display font-bold text-white text-sm" style={{ letterSpacing: '0.06em' }}>Lawson State</div>
              <div className="text-white/40" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Community College</div>
            </div>
          </Link>
          <button onClick={closeDrawer} aria-label="Close menu" className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ color: 'oklch(1 0 0 / 0.65)', background: 'oklch(1 0 0 / 0.06)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links with icons */}
        <nav className="flex flex-col px-3 pt-3 pb-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeDrawer}
              className="flex items-center gap-3 px-3 py-[0.8rem] rounded-lg text-sm font-semibold transition-colors"
              style={{ color: 'oklch(1 0 0 / 0.88)', borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}
            >
              <span style={{ color: 'oklch(1 0 0 / 0.45)', flexShrink: 0 }}><NavIcon d={link.icon.d} d2={link.icon.d2} /></span>
              <span className="flex-1">{link.label}</span>
              <ChevRight />
            </Link>
          ))}
        </nav>

        {/* Apply CTA */}
        <div className="px-4 py-4">
          <Link href="/admissions/apply" onClick={closeDrawer}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: GOLD, color: GOLD_TEXT }}
          >
            Apply Now — Fall 2026 <ChevRight />
          </Link>
        </div>

        <div className="mx-4 shrink-0" style={{ height: '1px', background: 'oklch(1 0 0 / 0.08)' }} />

        {/* Student Resources */}
        <div className="px-4 py-4">
          <p className="text-[0.67rem] font-bold uppercase mb-3" style={{ color: 'oklch(1 0 0 / 0.40)', letterSpacing: '0.18em' }}>Student Resources</p>
          <div className="grid grid-cols-3 gap-2">
            {RESOURCES.map((r) => (
              <a key={r.label} href={r.href} onClick={closeDrawer}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel={r.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex items-center justify-center py-3 rounded-xl text-[0.7rem] font-semibold text-center transition-colors"
                style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.78)', lineHeight: 1.3 }}
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>

        {/* Need Help */}
        <div className="mx-4 mb-4 rounded-xl p-4" style={{ background: 'oklch(0.22 0.07 261)' }}>
          <p className="text-sm font-bold text-white mb-1">Need Help?</p>
          <p className="text-xs mb-3" style={{ color: 'oklch(1 0 0 / 0.60)', lineHeight: 1.55 }}>Classes, finances, tech support, or just someone to talk to — we&apos;re here.</p>
          <a href="mailto:help@lawsonstate.edu" className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg" style={{ background: GOLD, color: GOLD_TEXT }}>Get Support Now</a>
        </div>

        <div className="mx-4 shrink-0" style={{ height: '1px', background: 'oklch(1 0 0 / 0.08)' }} />

        {/* Accessibility Tools */}
        <div className="px-4 py-4">
          <p className="text-[0.67rem] font-bold uppercase mb-3" style={{ color: 'oklch(1 0 0 / 0.40)', letterSpacing: '0.18em' }}>Accessibility Tools</p>
          <div className="rounded-xl overflow-hidden" style={{ background: 'oklch(1 0 0 / 0.05)' }}>
            {/* Text size */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}>
              <label className="text-xs font-semibold" style={{ color: 'oklch(1 0 0 / 0.75)' }}>Text Size</label>
              <div className="flex items-center gap-1">
                {(['A', 'A', 'A'] as const).map((_, i) => (
                  <button key={i} onClick={() => setFontSize(i)}
                    className="font-bold rounded transition-colors"
                    style={{
                      width: '28px', height: '24px',
                      fontSize: `${0.65 + i * 0.1}rem`,
                      background: fontSize === i ? GOLD : 'oklch(1 0 0 / 0.08)',
                      color: fontSize === i ? GOLD_TEXT : 'oklch(1 0 0 / 0.70)',
                    }}
                  >A</button>
                ))}
              </div>
            </div>
            {/* Contrast */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}>
              <label htmlFor="a11y-contrast" className="text-xs font-semibold" style={{ color: 'oklch(1 0 0 / 0.75)' }}>High Contrast</label>
              <Toggle on={contrast} onToggle={() => setContrast(v => !v)} id="a11y-contrast" />
            </div>
            {/* Dyslexia font */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}>
              <label htmlFor="a11y-dyslexia" className="text-xs font-semibold" style={{ color: 'oklch(1 0 0 / 0.75)' }}>Dyslexia Friendly Font</label>
              <Toggle on={dyslexia} onToggle={() => setDyslexia(v => !v)} id="a11y-dyslexia" />
            </div>
            {/* Highlight links */}
            <div className="flex items-center justify-between px-4 py-3">
              <label htmlFor="a11y-highlight" className="text-xs font-semibold" style={{ color: 'oklch(1 0 0 / 0.75)' }}>Highlight Links</label>
              <Toggle on={highlight} onToggle={() => setHighlight(v => !v)} id="a11y-highlight" />
            </div>
          </div>
          <button
            onClick={() => { setFontSize(0); setContrast(false); setDyslexia(false); setHighlight(false) }}
            className="mt-2 w-full py-2 rounded-lg text-xs font-semibold transition-colors"
            style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.55)' }}
          >
            Reset All
          </button>
        </div>

        {/* Secondary links */}
        <div className="flex items-center gap-2 px-4 pb-8 mt-auto">
          <Link href="/faculty" onClick={closeDrawer} className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold" style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.65)' }}>Faculty / Staff</Link>
          <Link href="/contact" onClick={closeDrawer} className="flex-1 text-center py-2.5 rounded-lg text-xs font-semibold" style={{ background: 'oklch(1 0 0 / 0.06)', color: 'oklch(1 0 0 / 0.65)' }}>Contact Us</Link>
        </div>
      </aside>
    </>
  )
}
