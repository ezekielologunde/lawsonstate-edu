import Link from 'next/link'

type Pathway = {
  slot:        string
  audience:    string
  headline:    string
  description: string
  links:       { label: string; href: string }[]
  cta:         string
  ctaHref:     string
  bg:          string
  isDark:      boolean
  tagBg:       string
  tagText:     string
}

const PATHWAYS: Pathway[] = [
  {
    slot:        'new',
    audience:    'New Student',
    headline:    'START YOUR JOURNEY HERE',
    description: 'Ready to begin at Lawson State? Here\'s everything you need — from applying to showing up on day one.',
    links: [
      { label: 'Apply for admission',     href: '/admissions/apply' },
      { label: 'Explore financial aid',   href: '/financial-aid' },
      { label: 'See all programs',        href: '/academics' },
      { label: 'Schedule a campus visit', href: '/visit' },
      { label: 'Attend orientation',      href: '/orientation' },
    ],
    cta:     'Begin your application →',
    ctaHref: '/admissions/apply',
    bg:      'oklch(0.83 0.16 82)',
    isDark:  false,
    tagBg:   'oklch(0.27 0.13 263)',
    tagText: 'white',
  },
  {
    slot:        'transfer',
    audience:    'Transfer Student',
    headline:    'TRANSFER WITH CONFIDENCE',
    description: 'Coming from another school? We make the credit transfer process clear and straightforward.',
    links: [
      { label: 'Transfer admissions',   href: '/admissions/transfer' },
      { label: 'Credit transfer guide', href: '/transfer/credits' },
      { label: 'Transfer programs',     href: '/academics/transfer' },
    ],
    cta:     'Transfer info →',
    ctaHref: '/admissions/transfer',
    bg:      'oklch(0.27 0.13 263)',
    isDark:  true,
    tagBg:   'oklch(0.83 0.16 82)',
    tagText: 'oklch(0.14 0.02 263)',
  },
  {
    slot:        'current',
    audience:    'Current Student',
    headline:    'EVERYTHING YOU NEED',
    description: 'Register for classes, check your aid, pay your bill, and get support — all in one place.',
    links: [
      { label: 'Register for classes',  href: '/registration' },
      { label: 'Student portal login',  href: '/student-portal' },
      { label: 'Financial aid status',  href: '/financial-aid' },
      { label: 'Pay your bill',         href: '/pay-bill' },
    ],
    cta:     'Student portal →',
    ctaHref: '/student-portal',
    bg:      'oklch(0.20 0.10 265)',
    isDark:  true,
    tagBg:   'oklch(0.83 0.16 82)',
    tagText: 'oklch(0.14 0.02 263)',
  },
  {
    slot:        'workforce',
    audience:    'Adult & Workforce',
    headline:    'ADVANCE YOUR CAREER',
    description: 'Certificates, workforce training, and continuing ed programs built around your life and schedule.',
    links: [
      { label: 'Workforce programs',   href: '/workforce' },
      { label: 'Certificate courses',  href: '/academics/certificates' },
      { label: 'Continuing education', href: '/continuing-ed' },
    ],
    cta:     'Explore workforce programs →',
    ctaHref: '/workforce',
    bg:      'oklch(0.96 0.012 263)',
    isDark:  false,
    tagBg:   'oklch(0.27 0.13 263)',
    tagText: 'white',
  },
]

export default function PathwayCards() {
  return (
    <section className="py-20 px-6" style={{ background: 'oklch(0.98 0.008 263)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 scroll-reveal">
          <h2
            className="font-display font-black text-lscc-ink leading-none mb-3"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            FIND YOUR PATH
          </h2>
          <p className="text-lscc-muted text-lg" style={{ maxWidth: '50ch' }}>
            Wherever you're starting from, we have a clear route for you.
          </p>
        </div>

        <div className="pathways-grid stagger-grid">
          {PATHWAYS.map((p) => (
            // Card is a div so inner links are valid HTML
            <div
              key={p.slot}
              className={`path-${p.slot} card-lift flex flex-col rounded-xl p-7`}
              style={{ background: p.bg }}
            >
              {/* Audience tag */}
              <span
                className="self-start text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: p.tagBg, color: p.tagText }}
              >
                {p.audience}
              </span>

              {/* Body */}
              <div className="mt-8 flex flex-col flex-1">
                <h3
                  className="font-display font-black leading-none mb-3"
                  style={{
                    fontSize:      p.slot === 'new' ? 'clamp(1.75rem, 3vw, 2.4rem)' : '1.4rem',
                    letterSpacing: '-0.02em',
                    color:         p.isDark ? 'white' : 'oklch(0.14 0.02 263)',
                  }}
                >
                  {p.headline}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{
                    color:    p.isDark ? 'oklch(1 0 0 / 0.60)' : 'oklch(0.38 0.05 263)',
                    maxWidth: '38ch',
                  }}
                >
                  {p.description}
                </p>

                {/* Quick links — real navigable links with proper tap targets */}
                <ul className="flex flex-col mb-6">
                  {p.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="link-reveal flex items-center gap-2 py-2.5 text-sm font-medium"
                        style={{ color: p.isDark ? 'oklch(1 0 0 / 0.85)' : 'oklch(0.27 0.13 263)' }}
                      >
                        <span aria-hidden="true">→</span>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA */}
                <Link
                  href={p.ctaHref}
                  className="press mt-auto inline-flex items-center text-sm font-bold px-5 py-3 rounded-lg pathway-cta"
                  style={{
                    background: p.isDark ? 'oklch(0.83 0.16 82)' : 'oklch(0.27 0.13 263)',
                    color:      p.isDark ? 'oklch(0.14 0.02 263)' : 'white',
                    transition: 'filter 0.2s ease',
                  }}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
