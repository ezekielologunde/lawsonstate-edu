import Link from 'next/link'

const NEW_VISITOR_ACTIONS = [
  { label: 'Apply Now', href: '/admissions/apply', primary: true },
  { label: 'Explore Programs', href: '/academics', primary: false },
  { label: 'Financial Aid Info', href: '/financial-aid', primary: false },
  { label: 'Schedule Campus Tour', href: '/visit', primary: false },
]

const QUICK_ACTIONS = [
  { label: 'Apply Now', href: '/admissions/apply', primary: true },
  { label: 'Student Portal', href: 'https://my.lawsonstate.edu', primary: false },
  { label: 'Register', href: 'https://my.lawsonstate.edu', primary: false },
  { label: 'Pay Bill', href: 'https://my.lawsonstate.edu', primary: false },
]

export default function QuickLinks() {
  return (
    <div style={{ background: 'white', borderBottom: '1px solid oklch(0.92 0.01 263)' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide items-center">
        <span
          className="shrink-0 text-lscc-muted font-medium hidden sm:block whitespace-nowrap"
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            paddingRight: '0.5rem',
          }}
        >
          Quick Links
        </span>
        {QUICK_ACTIONS.map(({ label, href, primary }) => (
          <Link
            key={label}
            href={href}
            className="press shrink-0 px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors text-sm"
            style={{
              background: primary ? 'oklch(0.79 0.19 78)' : 'oklch(0.96 0.012 263)',
              color: primary ? 'oklch(0.11 0.03 261)' : 'oklch(0.27 0.13 263)',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
