export default function LiveProjectButton() {
  return (
    <button
      style={{
        borderRadius: '9999px',
        border: '2px solid #D7E2EA',
        background: 'transparent',
        color: '#D7E2EA',
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        letterSpacing: '0.15em',
        textTransform: 'uppercase' as const,
        cursor: 'pointer',
        padding: 'clamp(0.45rem,0.8vw,0.65rem) clamp(1rem,2vw,1.75rem)',
        fontSize: 'clamp(0.65rem,0.85vw,0.8rem)',
        whiteSpace: 'nowrap' as const,
        transition: 'background 0.2s ease',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(215,226,234,0.1)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
    >
      Live Project
    </button>
  )
}
