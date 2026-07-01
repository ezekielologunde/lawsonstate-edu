import Link from 'next/link'

const ACTIONS = [
  {
    label: 'Apply Now',
    href: '/admissions/apply',
    sublabel: 'Start your application',
  },
  {
    label: 'Schedule a Visit',
    href: '/visit',
    sublabel: 'See campus in person',
  },
  {
    label: 'Request Information',
    href: '/contact',
    sublabel: 'Get answers to your questions',
  },
  {
    label: 'Browse Programs',
    href: '/academics',
    sublabel: '200+ certificates & degrees',
  },
]

export default function ActionStrip() {
  return (
    <section
      aria-label="Next Steps"
      style={{ background: 'oklch(0.95 0.03 255)', paddingBlock: '0' }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', borderBottom: '1px solid oklch(0 0 0 / 0.10)' }}
      >
        {ACTIONS.map((action, i) => (
          <Link
            key={action.href}
            href={action.href}
            className="action-item group flex items-center justify-between gap-4 press"
            style={{
              padding: '1.35rem 1.5rem',
              borderRight: i < ACTIONS.length - 1 ? '1px solid oklch(0 0 0 / 0.10)' : 'none',
              textDecoration: 'none',
            }}
          >
            <div>
              <p
                className="font-display font-bold"
                style={{ fontSize: '0.92rem', letterSpacing: '-0.01em', lineHeight: 1.2, color: 'oklch(0.16 0.04 261)' }}
              >
                {action.label}
              </p>
              <p
                style={{
                  fontSize: '0.72rem',
                  color: 'oklch(0.50 0.03 261)',
                  letterSpacing: '0.02em',
                  marginTop: '0.2rem',
                }}
              >
                {action.sublabel}
              </p>
            </div>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden
              className="shrink-0 transition-transform group-hover:translate-x-1"
              style={{ color: 'var(--lscc-eyebrow)' }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  )
}
