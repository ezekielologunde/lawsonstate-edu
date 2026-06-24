import Link from 'next/link'

type SupportContent = Record<string, string>

const DEFAULTS: SupportContent = {
  headline_line1: "WE'RE WITH YOU",
  headline_line2: 'THE WHOLE WAY',
  step_1_title: 'In the Classroom',
  step_1_body:  'Small class sizes, dedicated faculty, and hands-on learning environments set you up to succeed from day one.',
  step_1_cta:   'Academics',
  step_1_href:  '/academics',
  step_2_title: 'Beyond Campus',
  step_2_body:  'Tutoring, counseling, financial aid, clubs, athletics — the full support system to keep you on track and thriving.',
  step_2_cta:   'Student Life',
  step_2_href:  '/student-life',
  step_3_title: 'After Graduation',
  step_3_body:  'Career services, transfer advising, and alumni networks connect you to opportunity long after you leave us.',
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
    <section className="overflow-hidden" style={{ background: 'oklch(0.20 0.10 265)' }}>
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
                'linear-gradient(to right, oklch(0.20 0.10 265 / 0.15) 0%, oklch(0.20 0.10 265 / 0.85) 100%)',
            }}
          />
        </div>

        {/* Right: content */}
        <div className="py-24 px-6 md:px-10 lg:px-16">
          <h2
            className="font-display font-black text-white leading-none mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            {c.headline_line1}
            <br />
            <span style={{ color: 'oklch(0.83 0.16 82)' }}>{c.headline_line2}</span>
          </h2>

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex flex-col"
                style={i < steps.length - 1 ? { paddingBottom: '2.5rem', borderBottom: '1px solid oklch(1 0 0 / 0.08)' } : {}}
              >
                <div
                  className="font-display font-black mb-4 leading-none"
                  style={{ fontSize: '2.4rem', color: 'oklch(0.83 0.16 82)' }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-display font-bold text-white mb-2"
                  style={{ fontSize: '1.35rem', letterSpacing: '-0.015em' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-4" style={{ maxWidth: '44ch' }}>
                  {step.body}
                </p>
                <Link
                  href={step.href}
                  className="text-sm font-semibold hover:underline transition-colors self-start"
                  style={{ color: 'oklch(0.83 0.16 82)' }}
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
