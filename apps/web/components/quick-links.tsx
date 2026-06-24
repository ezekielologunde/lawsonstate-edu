'use client'
import Link from 'next/link'
import SearchBar from './search-bar'

const PRIMARY = [
  {
    label: 'Apply Now',
    desc:  'Start your application',
    href:  '/admissions/apply',
    gold:  true,
    icon:  (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
  },
  {
    label: 'Register',
    desc:  'Enroll in classes',
    href:  '/registration',
    gold:  false,
    icon:  (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </>
    ),
  },
  {
    label: 'Financial Aid',
    desc:  'Grants, loans & scholarships',
    href:  '/financial-aid',
    gold:  false,
    icon:  (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9m0 0h4.5a2.5 2.5 0 0 1 0 5H9" />
      </>
    ),
  },
  {
    label: 'Class Schedule',
    desc:  'Browse courses & times',
    href:  '/class-schedule',
    gold:  false,
    icon:  (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
]

const SECONDARY = [
  { label: 'Pay Online',      href: '/pay-bill' },
  { label: 'Programs',        href: '/academics' },
  { label: 'Advising',        href: '/advising' },
  { label: 'Student Portal',  href: '/student-portal' },
  { label: 'Contact',         href: '/contact' },
]

export default function QuickLinks() {
  return (
    <div className="bg-white" style={{ borderBottom: '1px solid oklch(0.90 0.01 263)' }}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Search */}
        <div className="mb-4">
          <SearchBar />
        </div>

        {/* 4 primary action tiles — staggered scroll reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-3 stagger-grid">
          {PRIMARY.map(({ label, desc, href, gold, icon }) => (
            <Link
              key={label}
              href={href}
              className="card-lift press flex flex-col items-center justify-center gap-1.5 rounded-xl text-center"
              style={{
                background: gold ? 'oklch(0.83 0.16 82)' : 'oklch(0.96 0.012 263)',
                color:      gold ? 'oklch(0.14 0.02 263)' : 'oklch(0.27 0.13 263)',
                padding:    '1rem 0.75rem',
                minHeight:  '80px',
              }}
            >
              <svg
                width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden
              >
                {icon}
              </svg>
              <span className="text-sm font-bold leading-tight">{label}</span>
              <span className="text-xs leading-tight hidden sm:block" style={{ opacity: 0.6 }}>
                {desc}
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary links */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
          {SECONDARY.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="shrink-0 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap quick-pill"
              style={{
                background: 'oklch(0.96 0.012 263)',
                color:      'oklch(0.27 0.13 263)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
