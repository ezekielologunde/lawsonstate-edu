import Link from 'next/link'

const ITEMS = [
  {
    label: 'Programs & Divisions', href: '/academics',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Admissions', href: '/admissions',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    label: 'Tuition & Fees', href: '/financial-aid',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    label: 'Financial Aid', href: '/financial-aid',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <path d="M12 8v4M10 10h4"/>
      </svg>
    ),
  },
  {
    label: 'Class Schedule', href: 'https://my.lawsonstate.edu', external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
  {
    label: 'Academic Calendar', href: '/calendar',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="15" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Student Support', href: '/support/academic',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    label: 'Maps & Locations', href: '/contact',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Transcript Requests', href: 'https://my.lawsonstate.edu', external: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
  {
    label: 'More Resources', href: '/support',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="8" r="2" fill="currentColor" stroke="none"/>
        <circle cx="8" cy="16" r="2" fill="currentColor" stroke="none"/>
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
]

const NAVY = 'oklch(0.16 0.04 261)'
const GOLD = 'oklch(0.79 0.19 78)'

export default function QuickLinksGrid() {
  return (
    <section
      aria-label="Quick navigation links"
      style={{ background: 'white', borderBottom: '1px solid oklch(0 0 0 / 0.06)', padding: '0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="qlg-grid">
          {ITEMS.map((item) => {
            const inner = (
              <div className="flex flex-col items-center gap-2 text-center qlg-item" role="none">
                <div className="qlg-icon" style={{ color: NAVY }}>{item.icon}</div>
                <span className="qlg-label font-semibold leading-tight" style={{ color: NAVY }}>{item.label}</span>
              </div>
            )
            const sharedClass = 'group flex items-center justify-center py-4 px-2 rounded-xl transition-all duration-200 qlg-cell'
            return item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={sharedClass}>{inner}</a>
            ) : (
              <Link key={item.label} href={item.href} className={sharedClass}>{inner}</Link>
            )
          })}
        </div>
      </div>

      <style>{`
        .qlg-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px;
        }
        .qlg-cell:hover .qlg-icon { color: ${GOLD}; }
        .qlg-cell:hover { background: oklch(0.95 0.03 255); }
        .qlg-icon { transition: color 0.2s; }
        .qlg-label { font-size: 0.7rem; }
        @media (max-width: 700px) {
          .qlg-grid { grid-template-columns: repeat(5, 1fr); gap: 2px; }
          .qlg-label { font-size: 0.6rem; }
          .qlg-icon svg { width: 22px; height: 22px; }
        }
        @media (max-width: 440px) {
          .qlg-grid { grid-template-columns: repeat(5, 1fr); }
          .qlg-cell { padding: 0.6rem 0.2rem; }
        }
      `}</style>
    </section>
  )
}
