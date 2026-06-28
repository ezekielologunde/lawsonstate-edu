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
  cta_3_href:  '/contact',
}

export default function Prefooter({ content = {} }: { content?: PrefooterContent }) {
  const c = { ...DEFAULTS, ...content }

  const ctas = [
    { label: c.cta_1_label, href: c.cta_1_href, primary: true },
    { label: c.cta_2_label, href: c.cta_2_href, primary: false },
    { label: c.cta_3_label, href: c.cta_3_href, primary: false },
  ]

  return (
    <section className="py-12 px-6 relative overflow-hidden" style={{ background: 'oklch(0.42 0.17 261)' }}>
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

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-12 scroll-reveal">
        <div>
          <h2
            className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
          >
            {c.headline}
          </h2>
          <p style={{ color: 'oklch(1 0 0 / 0.72)', fontSize: '1.15rem', lineHeight: 1.65, maxWidth: '48ch' }}>
            {c.subheadline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          {ctas.map((cta) =>
            cta.primary ? (
              <Link
                key={cta.label}
                href={cta.href}
                className="press btn-shimmer hero-cta-gold cta-urgent inline-flex items-center justify-center font-bold px-9 py-4.5 rounded-xl"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
              >
                {cta.label}
              </Link>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className="press hero-cta-ghost inline-flex items-center justify-center font-semibold px-9 py-4.5 rounded-xl text-white"
                style={{ border: '2px solid oklch(1 0 0 / 0.30)', fontSize: '1rem' }}
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
