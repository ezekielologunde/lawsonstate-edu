import Link from 'next/link'

type PrefooterContent = Record<string, string>

const DEFAULTS: PrefooterContent = {
  headline:    'READY TO BEGIN?',
  subheadline: 'Your first step toward a new career, a degree, or a better future starts here.',
  cta_1_label: 'Apply Now',
  cta_1_href:  '/admissions/apply',
  cta_2_label: 'Request Info',
  cta_2_href:  '/admissions',
  cta_3_label: 'Visit Campus',
  cta_3_href:  '/visit',
}

export default function Prefooter({ content = {} }: { content?: PrefooterContent }) {
  const c = { ...DEFAULTS, ...content }

  const ctas = [
    { label: c.cta_1_label, href: c.cta_1_href, primary: true },
    { label: c.cta_2_label, href: c.cta_2_href, primary: false },
    { label: c.cta_3_label, href: c.cta_3_href, primary: false },
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: 'oklch(0.27 0.13 263)' }}>
      {/* Animated background orb */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: '-20%', right: '-5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.12) 0%, transparent 65%)',
          filter: 'blur(50px)',
          animation: 'glow-pulse 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: '-10%', left: '-8%',
          width: '380px', height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, oklch(0.35 0.18 261 / 0.2) 0%, transparent 65%)',
          filter: 'blur(50px)',
          animation: 'glow-pulse 8s ease-in-out infinite 1.5s',
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 scroll-reveal">
        <div>
          <h2
            className="font-display font-black text-white leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            {c.headline}
          </h2>
          <p className="text-white/60 text-lg" style={{ maxWidth: '50ch' }}>
            {c.subheadline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          {ctas.map((cta) =>
            cta.primary ? (
              <Link
                key={cta.label}
                href={cta.href}
                className="press btn-shimmer hero-cta-gold inline-flex items-center justify-center font-semibold px-8 py-4 rounded"
                style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)', fontSize: '0.9375rem' }}
              >
                {cta.label}
              </Link>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className="press hero-cta-ghost inline-flex items-center justify-center font-semibold px-8 py-4 rounded text-white"
                style={{ border: '2px solid oklch(1 0 0 / 0.25)', fontSize: '0.9375rem' }}
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
