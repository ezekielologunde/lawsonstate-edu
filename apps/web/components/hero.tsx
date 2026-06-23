import Link from 'next/link'

type HeroContent = Record<string, string>

const DEFAULTS: HeroContent = {
  headline_line1:      'DISCOVER YOUR',
  headline_line2:      'FUTURE',
  subheadline:         'at Lawson State Community College — quality education, career training, and community leadership for Birmingham and beyond.',
  cta_primary_label:   'Apply Now',
  cta_primary_href:    '/admissions/apply',
  cta_secondary_label: 'Explore Programs',
  cta_secondary_href:  '/academics',
  stat_1: '200+ programs offered',
  stat_2: '2 campuses across Alabama',
  stat_3: '60+ years of excellence',
  stat_4: 'Accredited by SACSCOC',
}

export default function Hero({ content = {} }: { content?: HeroContent }) {
  const c = { ...DEFAULTS, ...content }

  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'oklch(0.27 0.13 263)' }}
    >
      {/* Real campus photo */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Blue brand overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.27 0.13 263 / 0.86)' }}
        />
      </div>

      {/* Depth shapes on top of photo */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-40 rounded-full"
          style={{ width: '640px', height: '640px', background: 'oklch(0.33 0.12 263)', opacity: 0.18 }}
        />
        <div
          className="absolute bottom-0 -left-60 rounded-full"
          style={{ width: '560px', height: '560px', background: 'oklch(0.32 0.12 263)', opacity: 0.12 }}
        />
        <div
          className="absolute hidden lg:block"
          style={{
            top: '20%', right: '28%',
            width: '2px', height: '220px',
            background: 'oklch(0.83 0.16 82)',
            opacity: 0.35,
            transform: 'rotate(-10deg)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
        <h1 className="font-display font-black leading-none mb-7" style={{ letterSpacing: '-0.02em' }}>
          <span className="block text-white" style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }}>
            {c.headline_line1}
          </span>
          <span className="block" style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: 'oklch(0.83 0.16 82)' }}>
            {c.headline_line2}
          </span>
        </h1>

        <p
          className="text-white/70 mb-11"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.65, maxWidth: '46ch' }}
        >
          {c.subheadline}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={c.cta_primary_href}
            className="inline-flex items-center font-semibold px-8 py-4 rounded transition-all hover:brightness-105"
            style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)', fontSize: '0.9375rem' }}
          >
            {c.cta_primary_label}
          </Link>
          <Link
            href={c.cta_secondary_href}
            className="inline-flex items-center font-semibold px-8 py-4 rounded text-white transition-colors hover:bg-white/10"
            style={{ border: '2px solid oklch(1 0 0 / 0.3)', fontSize: '0.9375rem' }}
          >
            {c.cta_secondary_label}
          </Link>
        </div>

        {/* Fact strip */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-white/45"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}
        >
          {[c.stat_1, c.stat_2, c.stat_3, c.stat_4].filter(Boolean).map((stat) => {
            const [bold, ...rest] = stat.split(' ')
            return (
              <span key={stat}>
                <strong className="text-white font-semibold">{bold}</strong>
                {rest.length ? ' ' + rest.join(' ') : ''}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
