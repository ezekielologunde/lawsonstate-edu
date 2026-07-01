'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import type { ReactNode } from 'react'

type Action = { label: string; href: string; primary: boolean; external?: boolean; icon: ReactNode }

const ACTIONS: Action[] = [
  {
    label: 'Apply',
    href:  '/admissions/apply',
    primary: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    label: 'Register',
    href:  'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON',
    external: true,
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    label: 'Aid',
    href:  '/financial-aid',
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9m0 0h4.5a2.5 2.5 0 0 1 0 5H9" />
      </svg>
    ),
  },
  {
    label: 'Events',
    href:  '/calendar',
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
]

export default function MobileBottomNav() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Hide when scrolling down past 80px; show when scrolling up
      if (y > lastY.current + 6 && y > 80) {
        setHidden(true)
      } else if (y < lastY.current - 6) {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{
        background:    'oklch(0.22 0.17 261)',
        borderTop:     '1px solid oklch(0.28 0.15 261)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        transform:     hidden ? 'translateY(100%)' : 'translateY(0)',
        transition:    'transform 0.28s cubic-bezier(0.4,0,0.2,1)',
        willChange:    'transform',
      }}
      aria-label="Quick actions"
    >
      {ACTIONS.map(({ label, href, primary, icon, external }) => {
        const className =
          'flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-opacity active:opacity-70'
        const style = {
          background: primary ? 'oklch(0.79 0.19 78)' : 'transparent',
          color:      primary ? 'oklch(0.11 0.03 261)' : 'oklch(1 0 0 / 0.78)',
        }
        const inner = (
          <>
            {icon}
            <span className="text-xs font-semibold" style={{ fontSize: '0.65rem', letterSpacing: '0.04em' }}>
              {label.toUpperCase()}
            </span>
          </>
        )
        return external ? (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
            {inner}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ) : (
          <Link key={label} href={href} className={className} style={style}>
            {inner}
          </Link>
        )
      })}
    </nav>
  )
}
