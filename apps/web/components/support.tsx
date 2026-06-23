import Link from 'next/link'

const steps = [
  {
    num: '01',
    title: 'In the Classroom',
    body: 'Small class sizes, dedicated faculty, and hands-on learning environments set you up to succeed from day one.',
    cta: { label: 'Academics', href: '/academics' },
  },
  {
    num: '02',
    title: 'Beyond Campus',
    body: 'Tutoring, counseling, financial aid, clubs, athletics — the full support system to keep you on track and thriving.',
    cta: { label: 'Student Life', href: '/student-life' },
  },
  {
    num: '03',
    title: 'After Graduation',
    body: 'Career services, transfer advising, and alumni networks connect you to opportunity long after you leave us.',
    cta: { label: 'Career Services', href: '/career-services' },
  },
]

export default function Support() {
  return (
    <section className="py-24 px-6" style={{ background: 'oklch(0.20 0.10 265)' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-display font-black text-white leading-none mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
        >
          WE'RE WITH YOU
          <br />
          <span style={{ color: 'oklch(0.83 0.16 82)' }}>THE WHOLE WAY</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Divider between steps — desktop only */}
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
              <p
                className="text-white/50 leading-relaxed mb-6"
                style={{ maxWidth: '38ch' }}
              >
                {step.body}
              </p>
              <Link
                href={step.cta.href}
                className="text-sm font-semibold hover:underline transition-colors"
                style={{ color: 'oklch(0.83 0.16 82)' }}
              >
                {step.cta.label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
