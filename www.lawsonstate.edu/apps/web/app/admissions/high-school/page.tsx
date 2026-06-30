import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const OPTIONS = [
  {
    title: 'Dual Enrollment',
    badge: 'Most Common',
    desc: 'High school juniors and seniors can take Lawson State college courses that count toward both your high school diploma AND your college degree simultaneously. Tuition is typically covered by the state or school district.',
    benefits: ['Earn real college credits while still in high school', 'Free or low-cost for qualifying students', 'Reduces time and cost of a future college degree', 'Takes place on your high school campus or at Lawson State'],
    cta: '/admissions/dual-enrollment',
    ctaLabel: 'Apply for Dual Enrollment',
  },
  {
    title: 'Early Admission (Full-Time College)',
    badge: 'Advanced Option',
    desc: 'Academically advanced high school students who have already completed their required coursework may enroll as full-time Lawson State students while earning their GED or high school equivalency alongside college credits.',
    benefits: ['Full-time college student status while still a minor', 'Access to all Lawson State programs and resources', 'Requires GED or high school completion plan', 'Parental consent and principal recommendation required'],
    cta: '/admissions/apply',
    ctaLabel: 'Apply to Lawson State',
  },
  {
    title: 'Summer Bridge Programs',
    badge: 'Preparation',
    desc: 'Rising seniors and recent graduates can take summer courses to prepare for college-level work, explore possible majors, or simply get ahead before their first semester.',
    benefits: ['Summer courses available for high school students', 'College orientation and academic skill workshops', 'Great for students who plan to attend Lawson State after graduation', 'Financial aid may be available for recent graduates'],
    cta: '/contact',
    ctaLabel: 'Ask About Summer Programs',
  },
]

const STEPS = [
  { n: '01', title: 'Check Eligibility', body: 'Dual enrollment requires high school junior or senior status and a minimum GPA (typically 2.5+). Your school counselor or the Admissions Office can confirm your eligibility.' },
  { n: '02', title: 'Get Counselor Approval', body: 'Your high school counselor must sign off on your course selection. They will verify your credits and confirm that courses align with your graduation plan.' },
  { n: '03', title: 'Submit Your Application', body: 'Complete the Lawson State admissions application. Dual enrollment students have a simplified process — no placement testing required for most courses.' },
  { n: '04', title: 'Register for Classes', body: 'Once admitted, you and your counselor select courses. Dual enrollment sections are often held on your high school campus or at Lawson State.' },
]

const FAQS = [
  { q: 'Can a high school student take any Lawson State course?', a: 'Most college-level courses are open to dual enrollment students. Some exceptions apply to certain technical programs or courses with prerequisite requirements. Your advisor will help you select appropriate courses.' },
  { q: 'Who pays for dual enrollment courses?', a: 'In most cases, tuition for dual enrollment is funded through the Alabama Dual Enrollment program. Check with your school district — students may be responsible for books and fees.' },
  { q: 'Do dual enrollment credits transfer to other universities?', a: 'Yes. Credits earned at Lawson State are real college credits and transfer to other Alabama public universities and many private or out-of-state schools. Some restrictions may apply based on the receiving school.' },
  { q: 'My child is in 9th or 10th grade — are there options?', a: 'The formal Dual Enrollment program typically begins in 11th grade. Students in earlier grades should stay focused on building a strong GPA and taking advanced coursework to prepare.' },
]

export default function HighSchoolStudentsPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>High School Students</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Dual Enrollment · Early Admission · Summer Programs
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            HIGH SCHOOL STUDENTS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Start your college journey before you graduate. Lawson State offers high school students multiple pathways to earn real college credits — often at no cost.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/admissions/dual-enrollment" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Dual Enrollment →
            </Link>
            <Link href="/admissions/apply" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Your Pathways</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>OPTIONS FOR HIGH SCHOOL STUDENTS</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OPTIONS.map((o) => (
              <div key={o.title} className="flex flex-col rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span className="inline-block font-bold uppercase text-xs px-3 py-0.5 rounded-full mb-3 self-start" style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.1em' }}>
                  {o.badge}
                </span>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{o.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, marginBottom: '1rem' }}>{o.desc}</p>
                <ul className="flex flex-col gap-1.5 mb-5 flex-1">
                  {o.benefits.map((b) => (
                    <li key={b} className="flex gap-2 text-xs" style={{ color: 'oklch(0.42 0.04 261)', lineHeight: 1.5 }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={o.cta} className="press btn-shimmer inline-flex items-center font-bold px-5 py-2.5 rounded-lg text-sm self-start" style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                  {o.ctaLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Getting Started</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO ENROLL (DUAL ENROLLMENT)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Common Questions</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FAQs</h2>
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{f.q}</p>
                <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Questions? We&apos;re Here to Help.</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>Admissions · 205.929.6105 · admissions@lawsonstate.edu</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/admissions/dual-enrollment" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Dual Enrollment Info
            </Link>
            <Link href="/contact" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              Contact Admissions →
            </Link>
          </div>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
