import Link from 'next/link'

export default function Programs() {
  return (
    <section className="py-24 px-6" style={{ background: 'oklch(0.98 0.008 263)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <h2
            className="font-display font-black text-lscc-ink leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            BUILD YOUR PATH
          </h2>
          <p className="text-lscc-muted text-lg leading-relaxed" style={{ maxWidth: '60ch' }}>
            From healthcare to technology to the trades — over 200 programs
            designed to get you where you want to go.
          </p>
        </div>

        {/* Asymmetric grid — see .programs-grid in globals.css */}
        <div className="programs-grid">
          {/* Health Sciences — tall left card */}
          <Link
            href="/academics/health-sciences"
            className="card-health group flex flex-col justify-between rounded-xl p-8 transition-transform duration-300 hover:-translate-y-1"
            style={{ background: 'oklch(0.27 0.13 263)' }}
          >
            <span
              className="self-start text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)' }}
            >
              High demand
            </span>
            <div className="mt-auto">
              <h3
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
              >
                Health Sciences
              </h3>
              <p className="text-white/60 leading-relaxed mb-6" style={{ maxWidth: '36ch' }}>
                Nursing, Dental Hygiene, Radiologic Technology, EMS, and
                more — careers that make a real difference.
              </p>
              <span className="text-white text-sm font-semibold group-hover:underline">
                Explore programs →
              </span>
            </div>
          </Link>

          {/* Career & Technical */}
          <Link
            href="/academics/career-technical"
            className="card-career group flex flex-col justify-between rounded-xl p-6 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: 'oklch(0.94 0.025 263)' }}
          >
            <h3
              className="font-display font-bold text-lscc-ink mb-2"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.015em' }}
            >
              Career & Technical
            </h3>
            <p className="text-lscc-muted text-sm leading-relaxed mb-5">
              Automotive, Welding, HVAC, Cosmetology — hands-on training
              for the modern workforce.
            </p>
            <span className="text-lscc-blue text-sm font-semibold mt-auto group-hover:underline">
              View programs →
            </span>
          </Link>

          {/* College Transfer */}
          <Link
            href="/academics/transfer"
            className="card-transfer group flex flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: 'oklch(0.22 0.11 265)' }}
          >
            <span
              className="self-start text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)' }}
            >
              Save on tuition
            </span>
            <h3
              className="font-display font-bold text-white mb-2"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.015em' }}
            >
              College Transfer
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Complete your first two years here, then transfer to a
              4-year university — the smart path to a degree.
            </p>
            <span className="text-white text-sm font-semibold mt-auto group-hover:underline">
              Learn more →
            </span>
          </Link>

          {/* Business & IT */}
          <Link
            href="/academics/business-it"
            className="card-business group flex flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-0.5"
            style={{ background: 'oklch(0.97 0.015 263)' }}
          >
            <h3
              className="font-display font-bold text-lscc-ink mb-2"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.015em' }}
            >
              Business & IT
            </h3>
            <p className="text-lscc-muted text-sm leading-relaxed mb-4">
              Accounting, Management, Computer Science, Cybersecurity —
              skills for the digital economy.
            </p>
            <span className="text-lscc-blue text-sm font-semibold mt-auto group-hover:underline">
              View programs →
            </span>
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/academics" className="text-lscc-blue font-semibold text-sm hover:underline">
            View all 200+ programs →
          </Link>
        </div>
      </div>
    </section>
  )
}
