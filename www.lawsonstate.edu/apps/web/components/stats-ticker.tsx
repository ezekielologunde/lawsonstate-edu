const ITEMS = [
  'Proud HBCU',
  'Est. 1949',
  '200+ Programs',
  '2 Campuses',
  'Birmingham, AL',
  'Apply Now — Fall 2026',
  'Financial Aid Available',
  'Transfer Credits Accepted',
  'Health Sciences',
  'Business Administration',
  'Trades & CTE',
  'Nursing Programs',
  'Online Learning',
  'Dual Enrollment Partner',
]

export default function StatsTicker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div
      className="marquee-strip"
      style={{
        background: 'oklch(0.79 0.19 78)',
        paddingBlock: '0.65rem',
        overflow: 'hidden',
      }}
      aria-hidden
    >
      <div
        className="marquee-track"
        style={{ gap: 0, animationDuration: '18s' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'oklch(0.11 0.03 261)',
              whiteSpace: 'nowrap',
              paddingInline: '1.4rem',
            }}
          >
            {item}
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'oklch(0.30 0.15 261)',
                marginLeft: '1.4rem',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
