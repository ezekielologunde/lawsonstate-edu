import Link from 'next/link'

type SupportContent = Record<string, string>

const DEFAULTS: SupportContent = {
  headline_line1: "WE'RE WITH YOU",
  headline_line2: 'THE WHOLE WAY',
  step_1_title:  'Professors Who Know Your Name',
  step_1_pull:   '"My professor stayed after class every Tuesday until I got it. That\'s just Lawson State."',
  step_1_attr:   '— Nursing Student, Class of 2024',
  step_1_body:   'Small classes. Real mentorship. Hands-on labs and real-world projects that build the skills Birmingham employers are actively hiring for right now.',
  step_1_cta:    'Explore Academics',
  step_1_href:   '/academics',
  step_2_title:  'Resources for Your Whole Life',
  step_2_pull:   '"The campus food pantry was there when I needed it most. I didn\'t have to choose between eating and studying."',
  step_2_attr:   '— Business Student, Class of 2025',
  step_2_body:   'Free tutoring, mental health counseling, a campus food pantry, and 30+ clubs — because your life doesn\'t stop when classes start.',
  step_2_cta:    'Student Services',
  step_2_href:   '/campus-life',
  step_3_title:  'A Launchpad, Not a Destination',
  step_3_pull:   '"I transferred to UAB with a 3.8 GPA. Lawson State prepared me better than I ever expected."',
  step_3_attr:   '— Transfer Student, Class of 2023',
  step_3_body:   'Transfer seamlessly to UAB, Auburn, or UAH — or step directly into a career through our employer partnerships and on-campus recruiting.',
  step_3_cta:    'Career Services',
  step_3_href:   '/support/career',
}

const STORY_PHOTOS = [
  'https://www.lawsonstate.edu/_resources/assets/img/dental%20main2.jpg',
  'https://www.lawsonstate.edu/_resources/assets/img/LSCC%20Students%20Serv.jpg',
  'https://www.lawsonstate.edu/_resources/assets/img/alabama%20transfers.jpg',
]

export default function Support({ content = {} }: { content?: SupportContent }) {
  const c = { ...DEFAULTS, ...content }

  const stories = [
    {
      num: '01', eyebrow: 'In the Classroom',
      title: c.step_1_title, pull: c.step_1_pull, attr: c.step_1_attr,
      body: c.step_1_body, cta: c.step_1_cta, href: c.step_1_href,
      photo: STORY_PHOTOS[0],
    },
    {
      num: '02', eyebrow: 'Beyond Campus',
      title: c.step_2_title, pull: c.step_2_pull, attr: c.step_2_attr,
      body: c.step_2_body, cta: c.step_2_cta, href: c.step_2_href,
      photo: STORY_PHOTOS[1],
    },
    {
      num: '03', eyebrow: 'After Graduation',
      title: c.step_3_title, pull: c.step_3_pull, attr: c.step_3_attr,
      body: c.step_3_body, cta: c.step_3_cta, href: c.step_3_href,
      photo: STORY_PHOTOS[2],
    },
  ]

  return (
    <section
      style={{ background: 'oklch(0.95 0.03 255)', paddingBlock: '5rem' }}
      aria-label="Student Support"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section headline */}
        <div className="mb-12 scroll-reveal">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', color: 'var(--lscc-eyebrow)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
            05 — Support that never stops
          </p>
          <h2
            className="font-display font-black leading-none wipe-reveal"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
          >
            {c.headline_line1}
            <br />
            <span style={{ color: 'var(--lscc-eyebrow)' }}>{c.headline_line2}</span>
          </h2>
        </div>

        {/* Three story cards — white & cream mix on the blue section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-grid">
          {stories.map((story, i) => {
            const cardBg = i === 1 ? 'oklch(0.96 0.05 88)' : 'white'
            return (
            <article
              key={story.num}
              className="group flex flex-col rounded-2xl overflow-hidden"
              style={{ background: cardBg, border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 12px 40px oklch(0.16 0.06 261 / 0.10)' }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img
                  src={story.photo}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient scrim — fades into the card color */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 55%, ${cardBg} 100%)` }}
                />
                {/* Step number badge */}
                <div
                  className="absolute top-4 left-4 font-display font-black"
                  style={{
                    fontSize: '0.72rem', letterSpacing: '0.18em',
                    padding: '0.28rem 0.72rem', borderRadius: '999px',
                    background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)',
                  }}
                >
                  {story.num}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <p style={{ fontSize: '0.70rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lscc-eyebrow)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {story.eyebrow}
                </p>

                <h3
                  className="font-display font-black leading-tight mb-4"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
                >
                  {story.title}
                </h3>

                {/* Gold separator */}
                <div style={{ width: '32px', height: '2px', background: 'var(--lscc-eyebrow)', borderRadius: '2px', marginBottom: '1rem' }} />

                {/* Pull quote */}
                <blockquote
                  className="font-display font-semibold mb-1"
                  style={{
                    fontSize: '0.88rem', lineHeight: 1.55,
                    color: 'oklch(0.28 0.04 261)',
                    fontStyle: 'italic',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {story.pull}
                </blockquote>
                <p style={{ fontSize: '0.72rem', color: 'oklch(0.50 0.03 261)', marginBottom: '1rem', letterSpacing: '0.02em' }}>
                  {story.attr}
                </p>

                {/* Body */}
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'oklch(0.40 0.04 261)', marginBottom: '1.5rem', flex: 1 }}>
                  {story.body}
                </p>

                {/* CTA */}
                <Link
                  href={story.href}
                  className="group/link inline-flex items-center gap-2 font-bold self-start press"
                  style={{ fontSize: '0.82rem', color: 'var(--lscc-eyebrow)', letterSpacing: '0.03em' }}
                >
                  {story.cta}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden
                    className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
