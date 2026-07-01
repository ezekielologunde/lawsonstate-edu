import Link from 'next/link'

interface Program {
  id: string
  name: string
  description: string
  tag?: string
  href: string
}

interface FeaturedProgramsProps {
  programs: Program[]
}

const FEATURED_PROGRAMS = [
  {
    id: '1',
    name: 'Nursing & Health Professions',
    description: 'RN, BSN, LPN, CNA, EMT, Medical Assistant',
    tag: '2-4 year programs',
    href: '/programs?area=health-professions',
  },
  {
    id: '2',
    name: 'Business & Information Technology',
    description: 'Accounting, IT, Business Management, Cybersecurity',
    tag: 'Transfer or Career Ready',
    href: '/programs?area=business-it',
  },
  {
    id: '3',
    name: 'Engineering & STEM',
    description: 'Engineering Transfer, Computer Science, Manufacturing',
    tag: 'STEM-focused',
    href: '/programs?area=stem',
  },
  {
    id: '4',
    name: 'Career & Workforce Training',
    description: '6-12 month certificates in high-demand fields',
    tag: 'Job-Ready Credentials',
    href: '/workforce',
  },
]

export default function FeaturedPrograms({ programs = [] }: FeaturedProgramsProps) {
  const displayPrograms = programs.length > 0 ? programs.slice(0, 4) : FEATURED_PROGRAMS

  return (
    <section className="py-12 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 scroll-reveal">
          <h2
            className="font-display font-black leading-none mb-2"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.8rem)',
              letterSpacing: '-0.02em',
              color: 'oklch(0.18 0.12 261)',
            }}
          >
            EXPLORE OUR PROGRAMS
          </h2>
          <p className="text-lscc-muted text-sm max-w-2xl">
            Choose from 200+ career-ready programs in healthcare, business, technology,
            trades, and more. Whether you're transferring to a university or launching
            your career, we have a path for you.
          </p>
        </div>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {displayPrograms.map((program) => (
            <Link
              key={program.id}
              href={program.href}
              className="group p-6 rounded-lg transition-all duration-200 hover:shadow-md hover:translate-y-[-2px]"
              style={{
                background: 'oklch(0.96 0.010 263)',
                border: '1px solid oklch(0 0 0 / 0.07)',
              }}
            >
              <div className="mb-3">
                {program.tag && (
                  <span
                    className="inline-block text-xs font-semibold uppercase px-2.5 py-1 rounded-full mb-2"
                    style={{
                      background: 'oklch(0.79 0.19 78)',
                      color: 'oklch(0.11 0.03 261)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {program.tag}
                  </span>
                )}
              </div>

              <h3
                className="font-display font-bold mb-2 group-hover:text-lscc-gold transition-colors"
                style={{
                  fontSize: '1.05rem',
                  color: 'oklch(0.18 0.12 261)',
                  letterSpacing: '-0.01em',
                }}
              >
                {program.name}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'oklch(0.45 0.08 263)' }}
              >
                {program.description}
              </p>

              <div
                className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ color: 'oklch(0.79 0.19 78)' }}
              >
                Learn more
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Browse all link */}
        <div className="text-center">
          <Link
            href="/academics"
            className="press inline-flex items-center font-bold px-8 py-3 rounded-lg transition-colors"
            style={{
              background: 'oklch(0.22 0.17 261)',
              color: 'white',
              fontSize: '0.875rem',
            }}
          >
            Browse All 200+ Programs
          </Link>
        </div>
      </div>
    </section>
  )
}
