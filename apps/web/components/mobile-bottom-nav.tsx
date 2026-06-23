'use client'
import Link from 'next/link'

const ACTIONS = [
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
    href:  '/registration',
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
    label: 'Schedule',
    href:  '/class-schedule',
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
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{
        background:       'oklch(0.27 0.13 263)',
        borderTop:        '1px solid oklch(0.33 0.12 263)',
        paddingBottom:    'env(safe-area-inset-bottom)',
      }}
      aria-label="Quick actions"
    >
      {ACTIONS.map(({ label, href, primary, icon }) => (
        <Link
          key={label}
          href={href}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-opacity active:opacity-70"
          style={{
            background: primary ? 'oklch(0.83 0.16 82)' : 'transparent',
            color:      primary ? 'oklch(0.14 0.02 263)' : 'oklch(1 0 0 / 0.70)',
          }}
        >
          {icon}
          <span className="text-xs font-semibold" style={{ fontSize: '0.65rem', letterSpacing: '0.04em' }}>
            {label.toUpperCase()}
          </span>
        </Link>
      ))}
    </nav>
  )
}
