import Link from 'next/link'

export type Program = {
  id: string
  name: string
  description: string | null
  tag: string | null
  href: string | null
  grid_slot: string | null
  image_url: string | null
}

type ProgramsContent = Record<string, string>

const CONTENT_DEFAULTS: ProgramsContent = {
  headline:    'FIND YOUR PROGRAM',
  subheadline: 'Over 200 career-ready programs across health sciences, business, technology, trades, and the arts — built for where Birmingham is headed.',
  cta_label:   'Browse all 200+ programs',
  cta_href:    '/academics',
}

const SLOT_BG: Record<string, string> = {
  health:   'oklch(0.26 0.20 261)',
  career:   'oklch(0.92 0.04 261)',
  transfer: 'oklch(0.85 0.22 78)',
  business: 'oklch(0.96 0.025 263)',
}

const SLOT_TAG: Record<string, { bg: string; text: string }> = {
  health:   { bg: 'oklch(0.79 0.19 78)',   text: 'oklch(0.11 0.03 261)' },
  career:   { bg: 'oklch(0.26 0.20 261)',  text: 'white' },
  transfer: { bg: 'oklch(0.22 0.16 261)',  text: 'white' },
  business: { bg: 'oklch(0.26 0.20 261)',  text: 'white' },
}

const SLOT_CLASSES: Record<string, string> = {
  health:   'card-health p-8',
  career:   'card-career p-6',
  transfer: 'card-transfer p-6',
  business: 'card-business p-6',
}

const SLOT_IS_DARK: Record<string, boolean> = {
  health: true, career: false, transfer: true, business: false,
}

export default function Programs({
  programs,
  content = {},
}: {
  programs: Program[]
  content?: ProgramsContent
}) {
  const c = { ...CONTENT_DEFAULTS, ...content }

  return (
    <section
      style={{ background: 'oklch(0.14 0.10 261)', paddingBlock: '5rem' }}
      aria-label="Academic Programs"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 scroll-reveal">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-4">
            <div>
              <p style={{
                fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'oklch(0.79 0.19 78)', marginBottom: '0.5rem', fontWeight: 700,
              }}>
                01 — Explore Academics
              </p>
              <h2
                className="font-display font-black text-white leading-none"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', letterSpacing: '-0.04em' }}
              >
                {c.headline}
              </h2>
            </div>
            <Link
              href={c.cta_href}
              className="press inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl whitespace-nowrap"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9rem' }}
            >
              {c.cta_label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.75, color: 'oklch(1 0 0 / 0.72)', maxWidth: '62ch' }}>
            {c.subheadline}
          </p>
        </div>

        {programs.length > 0 && (
          <div className="programs-grid">
            {programs.map((program) => {
              const slot = program.grid_slot ?? 'business'
              const isDark = SLOT_IS_DARK[slot] ?? false
              const tagDesign = SLOT_TAG[slot] ?? SLOT_TAG.business
              const slotClasses = SLOT_CLASSES[slot] ?? SLOT_CLASSES.business
              const isHero = slot === 'health'

              return (
                <Link
                  key={program.id}
                  href={program.href ?? '/academics'}
                  className={`${slotClasses} group card-lift press flex flex-col rounded-2xl relative overflow-hidden ${isHero ? 'justify-between' : ''}`}
                  style={{ background: SLOT_BG[slot] ?? SLOT_BG.business }}
                >
                  {program.image_url && (
                    <div
                      className="absolute inset-0 program-img"
                      style={{
                        backgroundImage: `url('${program.image_url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: isDark ? 0.28 : 0.14,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    {program.tag && (
                      <span
                        className={`self-start font-bold px-3 py-1 rounded-full ${isHero ? '' : 'mb-3'}`}
                        style={{ fontSize: '0.70rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: tagDesign.bg, color: tagDesign.text }}
                      >
                        {program.tag}
                      </span>
                    )}
                    <div className={isHero ? 'mt-auto' : 'mt-3'}>
                      <h3
                        className="font-display font-black mb-2 leading-tight"
                        style={{
                          color: isDark ? 'white' : 'oklch(0.14 0.10 261)',
                          fontSize: isHero ? 'clamp(1.9rem, 3vw, 2.8rem)' : 'clamp(1.4rem, 2vw, 1.75rem)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {program.name}
                      </h3>
                      {program.description && (
                        <p
                          className={`leading-relaxed mb-5 ${isHero ? 'text-base' : 'text-sm'}`}
                          style={{
                            color: isDark ? 'oklch(1 0 0 / 0.72)' : 'oklch(0.25 0.12 261 / 0.70)',
                            maxWidth: isHero ? '36ch' : undefined,
                          }}
                        >
                          {program.description}
                        </p>
                      )}
                      <span
                        className="inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all"
                        style={{ color: isDark ? 'oklch(0.79 0.19 78)' : 'oklch(0.30 0.20 261)' }}
                      >
                        {isHero ? 'Explore programs' : 'View programs'}
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {programs.length === 0 && (
          <div className="text-center py-20">
            <p style={{ color: 'oklch(1 0 0 / 0.40)', fontSize: '0.95rem' }}>Programs loading…</p>
          </div>
        )}

      </div>
    </section>
  )
}
