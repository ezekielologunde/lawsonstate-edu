import Link from 'next/link'

export default function Prefooter() {
  return (
    <section className="py-24 px-6" style={{ background: 'oklch(0.27 0.13 263)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <h2
            className="font-display font-black text-white leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            READY TO BEGIN?
          </h2>
          <p className="text-white/60 text-lg" style={{ maxWidth: '50ch' }}>
            Your first step toward a new career, a degree, or a better future starts here.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            href="/admissions/apply"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded transition-all hover:brightness-105"
            style={{
              background: 'oklch(0.83 0.16 82)',
              color: 'oklch(0.14 0.02 263)',
              fontSize: '0.9375rem',
            }}
          >
            Apply Now
          </Link>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded text-white transition-colors hover:bg-white/10"
            style={{
              border: '2px solid oklch(1 0 0 / 0.25)',
              fontSize: '0.9375rem',
            }}
          >
            Request Info
          </Link>
          <Link
            href="/visit"
            className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded text-white transition-colors hover:bg-white/10"
            style={{
              border: '2px solid oklch(1 0 0 / 0.25)',
              fontSize: '0.9375rem',
            }}
          >
            Visit Campus
          </Link>
        </div>
      </div>
    </section>
  )
}
