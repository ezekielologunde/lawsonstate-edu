import Link from 'next/link'

type SupportContent = Record<string, string>

const DEFAULTS: SupportContent = {
  headline_line1: "WE'RE WITH YOU",
  headline_line2: 'THE WHOLE WAY',
  step_1_title: 'In the Classroom',
  step_1_body:  'Small classes mean your professors actually know your name. Hands-on labs and real-world projects build the skills employers in Birmingham are actively hiring for.',
  step_1_cta:   'Academics',
  step_1_href:  '/academics',
  step_2_title: 'Beyond Campus',
  step_2_body:  "Free tutoring, mental health counseling, a campus food pantry, and 30+ clubs — because we know your life doesn't stop when classes start.",
  step_2_cta:   'Student Life',
  step_2_href:  '/student-life',
  step_3_title: 'After Graduation',
  step_3_body:  'Transfer seamlessly to UAB, Auburn, or UAH — or step directly into a career through our employer partnerships and on-campus recruiting programs.',
  step_3_cta:   'Career Services',
  step_3_href:  '/career-services',
}

export default function Support({ content = {} }: { content?: SupportContent }) {
  const c = { ...DEFAULTS, ...content }

  const steps = [
    { num: '01', title: c.step_1_title, body: c.step_1_body, cta: c.step_1_cta, href: c.step_1_href },
    { num: '02', title: c.step_2_title, body: c.step_2_body, cta: c.step_2_cta, href: c.step_2_href },
    { num: '03', title: c.step_3_title, body: c.step_3_body, cta: c.step_3_cta, href: c.step_3_href },
  ]

  return (
    <section className="overflow-hidden" style={{ background: 'oklch(0.97 0.008 263)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[5fr_7fr]">

        {/* Left: campus photo */}
        <div className="relative hidden md:block">
          <img
            src="https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg"
            alt="Lawson State students at commencement"
            className="absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, oklch(0.97 0.008 263 / 0.10) 0%, oklch(0.97 0.008 263 / 0.70) 100%)',
            }}
          />
        </div>

        {/* Right: content */}
        <div className="py-12 px-6 md:px-10 lg:px-16">
          <h2
            className="font-display font-black leading-none mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'oklch(0.18 0.12 261)' }}
          >
            {c.headline_line1}
            <br />
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>{c.headline_line2}</span>
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col"
                style={i < steps.length - 1 ? { paddingBottom: '2.5rem', borderBottom: '1px solid oklch(0 0 0 / 0.08)' } : {}}
              >
                <div
                  className="font-display font-black mb-4 leading-none"
                  style={{ fontSize: '2.4rem', color: 'oklch(0.42 0.22 248)' }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-display font-bold mb-2"
                  style={{ fontSize: '1.35rem', letterSpacing: '-0.015em', color: 'oklch(0.18 0.12 261)' }}
                >
                  {step.title}
                </h3>
                <p className="leading-relaxed mb-4" style={{ maxWidth: '44ch', color: 'oklch(0.45 0.08 263)' }}>
                  {step.body}
                </p>
                <Link
                  href={step.href}
                  className="text-sm font-semibold hover:underline transition-colors self-start"
                  style={{ color: 'oklch(0.42 0.22 248)' }}
                >
                  {step.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
