import Link from 'next/link'

const ACTIONS = [
  { label: 'Apply Now',     href: '/admissions/apply',  gold: true  },
  { label: 'Register',      href: '/registration',      gold: false },
  { label: 'Financial Aid', href: '/financial-aid',     gold: false },
  { label: 'Class Schedule', href: '/class-schedule',   gold: false },
  { label: 'Pay Online',    href: '/pay-bill',          gold: false },
  { label: 'Student Portal', href: '/student-portal',   gold: false },
  { label: 'Advising',      href: '/advising',          gold: false },
]

export default function QuickLinks() {
  return (
    <div style={{ background: 'white', borderBottom: '1px solid oklch(0.92 0.01 263)' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide items-center">
        <span
          className="shrink-0 text-lscc-muted font-medium hidden sm:block"
          style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', paddingRight: '0.5rem' }}
        >
          Quick access
        </span>
        {ACTIONS.map(({ label, href, gold }) => (
          <Link
            key={label}
            href={href}
            className="press shrink-0 px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-colors"
            style={{
              fontSize:    '0.8rem',
              background:  gold ? 'oklch(0.79 0.19 78)' : 'oklch(0.96 0.012 263)',
              color:       gold ? 'oklch(0.11 0.03 261)' : 'oklch(0.27 0.13 263)',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}
