'use client'
import Link from 'next/link'
import SearchBar from './search-bar'

const LINKS = [
  {
    label: 'Apply Now', href: '/admissions/apply',
    icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />,
    circle: <circle cx="9" cy="7" r="4" />,
  },
  {
    label: 'Register', href: '/registration',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" /></>,
  },
  {
    label: 'Financial Aid', href: '/financial-aid',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9m0 0h4.5a2.5 2.5 0 0 1 0 5H9" /></>,
  },
  {
    label: 'Class Schedule', href: '/class-schedule',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  },
  {
    label: 'Pay Online', href: '/pay-bill',
    icon: <><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></>,
  },
  {
    label: 'Programs', href: '/academics',
    icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  },
  {
    label: 'Advising', href: '/advising',
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>,
  },
  {
    label: 'Contact', href: '/contact',
    icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.1 2.18H6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" /></>,
  },
]

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  )
}

export default function QuickLinks() {
  return (
    <div className="bg-white" style={{ borderBottom: '1px solid oklch(0.90 0.01 263)' }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Search */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* Quick action pills — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
          {LINKS.map(({ label, href, icon, circle }) => (
            <Link
              key={label}
              href={href}
              className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap hover:text-white group"
              style={{
                background: 'oklch(0.96 0.012 263)',
                color: 'oklch(0.27 0.13 263)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'oklch(0.27 0.13 263)'
                el.style.color = 'white'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'oklch(0.96 0.012 263)'
                el.style.color = 'oklch(0.27 0.13 263)'
              }}
            >
              <Icon>{icon}{circle}</Icon>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
