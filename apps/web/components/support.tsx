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
    <section className="py-24 px-6" style={{ background: 'oklch(0.20 0.10 265)' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display font-black text-white leading-none mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          {c.headline_line1}
          <br />
          <span style={{ color: 'oklch(0.83 0.16 82)' }}>{c.headline_line2}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-0 -right-4 bottom-0 w-px"
                  style={{ background: 'oklch(1 0 0 / 0.08)' }}
                />
              )}
              <div
                className="font-display font-black mb-6 leading-none"
                style={{ fontSize: '3rem', color: 'oklch(0.83 0.16 82)' }}
              >
                {step.num}
              </div>
              <h3
                className="font-display font-bold text-white mb-3"
                style={{ fontSize: '1.5rem', letterSpacing: '-0.015em' }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6" style={{ maxWidth: '38ch' }}>
                {step.body}
              </p>
              <Link
                href={step.href}
                className="text-sm font-semibold hover:underline transition-colors"
                style={{ color: 'oklch(0.83 0.16 82)' }}
              >
                {step.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
