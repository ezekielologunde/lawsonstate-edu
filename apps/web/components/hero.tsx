import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'oklch(0.27 0.13 263)' }}
    >
      {/* Background depth — subtle tonal shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-40 -right-40 rounded-full"
          style={{
            width: '640px',
            height: '640px',
            background: 'oklch(0.33 0.12 263)',
            opacity: 0.25,
          }}
        />
        <div
          className="absolute bottom-0 -left-60 rounded-full"
          style={{
            width: '560px',
            height: '560px',
            background: 'oklch(0.32 0.12 263)',
            opacity: 0.15,
          }}
        />
        {/* Gold accent line */}
        <div
          className="absolute hidden lg:block"
          style={{
            top: '20%',
            right: '28%',
            width: '2px',
            height: '220px',
            background: 'oklch(0.83 0.16 82)',
            opacity: 0.35,
            transform: 'rotate(-10deg)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
        <h1
          className="font-display font-black leading-none mb-7"
          style={{ letterSpacing: '-0.02em' }}
        >
          <span
            className="block text-white"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }}
          >
            DISCOVER YOUR
          </span>
          <span
            className="block"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              color: 'oklch(0.83 0.16 82)',
            }}
          >
            FUTURE
          </span>
        </h1>

        <p
          className="text-white/70 mb-11"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.65,
            maxWidth: '46ch',
          }}
        >
          at Lawson State Community College — quality education, career
          training, and community leadership for Birmingham and beyond.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/admissions/apply"
            className="inline-flex items-center font-semibold px-8 py-4 rounded transition-all hover:brightness-105"
            style={{
              background: 'oklch(0.83 0.16 82)',
              color: 'oklch(0.14 0.02 263)',
              fontSize: '0.9375rem',
            }}
          >
            Apply Now
          </Link>
          <Link
            href="/academics"
            className="inline-flex items-center font-semibold px-8 py-4 rounded text-white transition-colors hover:bg-white/10"
            style={{
              border: '2px solid oklch(1 0 0 / 0.3)',
              fontSize: '0.9375rem',
            }}
          >
            Explore Programs
          </Link>
        </div>

        {/* Fact strip */}
        <div
          className="mt-20 pt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm text-white/45"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.12)' }}
        >
          <span>
            <strong className="text-white font-semibold">200+</strong> programs offered
          </span>
          <span>
            <strong className="text-white font-semibold">2</strong> campuses across Alabama
          </span>
          <span>
            <strong className="text-white font-semibold">60+</strong> years of excellence
          </span>
          <span>
            Accredited by <strong className="text-white font-semibold">SACSCOC</strong>
          </span>
        </div>
      </div>
    </section>
  )
}
