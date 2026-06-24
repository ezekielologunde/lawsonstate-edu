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
  headline:    'BUILD YOUR PATH',
  subheadline: 'From healthcare to technology to the trades — over 200 programs designed to get you where you want to go.',
  cta_label:   'View all 200+ programs',
  cta_href:    '/academics',
}

/* Design per grid slot — admin controls placement, design controls appearance */
const SLOT_BG: Record<string, string> = {
  health:   'oklch(0.24 0.17 261)',    // richer navy blue (more vivid)
  career:   'oklch(0.94 0.025 263)',   // light stays
  transfer: 'oklch(0.28 0.16 26)',     // warm coral-red (vivid contrast)
  business: 'oklch(0.97 0.015 263)',   // near-white stays
}

const SLOT_TAG: Record<string, { bg: string; text: string }> = {
  health:   { bg: 'oklch(0.83 0.16 82)',   text: 'oklch(0.14 0.02 263)' },
  career:   { bg: 'oklch(0.24 0.17 261)',  text: 'white' },
  transfer: { bg: 'oklch(0.72 0.20 28)',   text: 'oklch(0.14 0.02 263)' },
  business: { bg: 'oklch(0.24 0.17 261)',  text: 'white' },
}

/* Tailwind class sets per slot — kept as full strings for scanner */
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
    <section className="py-10 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl scroll-reveal">
          <h2
            className="font-display font-black text-lscc-ink leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            {c.headline}
          </h2>
          <p className="text-lscc-muted text-lg leading-relaxed" style={{ maxWidth: '60ch' }}>
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
                  className={`${slotClasses} group card-lift press flex flex-col rounded-xl relative overflow-hidden ${
                    isHero ? 'justify-between' : ''
                  }`}
                  style={{ background: SLOT_BG[slot] ?? SLOT_BG.business }}
                >
                  {/* Photo background — scales on hover via CSS group */}
                  {program.image_url && (
                    <div
                      className="absolute inset-0 program-img"
                      style={{
                        backgroundImage: `url('${program.image_url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: isDark ? 0.22 : 0.12,
                      }}
                    />
                  )}

                  {/* Content above image */}
                  <div className="relative z-10 flex flex-col h-full">
                    {program.tag && (
                      <span
                        className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${isHero ? '' : 'mb-3'}`}
                        style={{ background: tagDesign.bg, color: tagDesign.text }}
                      >
                        {program.tag}
                      </span>
                    )}
                    <div className={isHero ? 'mt-auto' : 'mt-3'}>
                      <h3
                        className={`font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-lscc-ink'}`}
                        style={{
                          fontSize: isHero ? 'clamp(1.75rem, 3vw, 2.5rem)' : '1.5rem',
                          letterSpacing: isHero ? '-0.02em' : '-0.015em',
                        }}
                      >
                        {program.name}
                      </h3>
                      {program.description && (
                        <p
                          className={`leading-relaxed mb-5 ${isHero ? 'text-base' : 'text-sm'} ${isDark ? 'text-white/60' : 'text-lscc-muted'}`}
                          style={{ maxWidth: isHero ? '36ch' : undefined }}
                        >
                          {program.description}
                        </p>
                      )}
                      <span
                        className={`text-sm font-semibold mt-auto group-hover:underline ${isDark ? 'text-white' : 'text-lscc-blue'}`}
                      >
                        {isHero ? 'Explore programs' : 'View programs'} →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        <div className="mt-8">
          <Link href={c.cta_href} className="text-lscc-blue font-semibold text-sm hover:underline">
            {c.cta_label} →
          </Link>
        </div>
      </div>
    </section>
  )
}
