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
    <section className="py-24 px-6" style={{ background: 'oklch(0.27 0.13 263)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
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
                className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded transition-all hover:brightness-105"
                style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)', fontSize: '0.9375rem' }}
              >
                {cta.label}
              </Link>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded text-white transition-colors hover:bg-white/10"
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
