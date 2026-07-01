import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'AI Usage Guidelines | Lawson State',
  description: 'Guidance on the use of generative AI tools in coursework and campus operations at Lawson State Community College.',
}

const STUDENT_GUIDANCE = [
  {
    title: 'Your instructor sets the rules for their course',
    desc: 'Generative AI tools are permitted, restricted, or prohibited at the discretion of each instructor for their own assignments and exams. Always check your syllabus or ask before using AI on a specific assignment.',
  },
  {
    title: 'Academic integrity policy still applies',
    desc: 'Submitting AI-generated work as entirely your own, without permission or required disclosure, is treated the same as any other academic integrity violation under the College Student Handbook.',
  },
  {
    title: 'Disclose AI assistance when asked to',
    desc: 'If an assignment requires you to note AI use, briefly describe what tool you used and how (e.g., brainstorming, grammar check, outline) alongside your submission.',
  },
  {
    title: 'AI is a study aid, not a source',
    desc: 'Treat AI output the way you would an unverified source — useful for explaining a concept or checking your own reasoning, but not a substitute for your textbook, your instructor, or peer-reviewed research.',
  },
]

const STAFF_GUIDANCE = [
  {
    title: 'Never enter confidential or FERPA-protected data into public AI tools',
    desc: 'Student records, grades, health information, and other confidential data should never be pasted into ChatGPT, Copilot, or similar public tools unless the tool is specifically approved and contracted by the College for that purpose.',
  },
  {
    title: 'Verify before you rely',
    desc: 'AI tools can produce confident-sounding but incorrect information. Fact-check anything AI-generated before using it in official communications, policy documents, or student-facing material.',
  },
  {
    title: 'Disclose significant AI use in official content',
    desc: 'If AI substantially drafted a public-facing document, email, or decision, note that internally so it can be reviewed like any other draft before it goes out under the College\'s name.',
  },
]

export default function AIUsagePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '32vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>AI Usage Guidelines</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Academic Integrity · Responsible Use
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            AI USAGE GUIDELINES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '60ch', lineHeight: 1.7 }}>
            How generative AI tools fit into coursework, research, and campus operations at Lawson State Community College.
          </p>
        </div>
      </section>

      {/* Draft/review banner — this content was drafted as general campus guidance and
          has not been through the College's official policy approval process. It should
          not be presented as adopted institutional policy until Academic Affairs / the
          Board reviews and approves it. */}
      <div style={{ background: 'oklch(0.93 0.10 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-sm font-semibold" style={{ color: 'oklch(0.25 0.08 60)' }}>
            Draft guidance — pending official review. This page reflects general best-practice guidance and has not yet been adopted as formal College policy. Contact Academic Affairs for the current, official position on AI use in coursework.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: '1.05rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.8 }}>
            Generative AI tools — like ChatGPT, Copilot, and similar assistants — are increasingly part of how students learn and how colleges operate. Lawson State does not have a single, one-size-fits-all rule for every classroom; instead, individual instructors set expectations for their own courses, within the College&apos;s existing academic integrity policy. This page collects general guidance for students, faculty, and staff while that policy continues to develop.
          </p>
        </div>
      </section>

      {/* Student guidance */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>For Students</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>USING AI IN YOUR COURSEWORK</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {STUDENT_GUIDANCE.map((g) => (
              <div key={g.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <p className="font-display font-bold mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{g.title}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff/faculty guidance */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>For Faculty &amp; Staff</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>RESPONSIBLE USE ON THE JOB</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {STAFF_GUIDANCE.map((g) => (
              <div key={g.title} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-bold mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{g.title}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          <Link href="/about/faculty" className="press inline-flex items-center gap-2 font-bold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
            Faculty &amp; Staff Resources →
          </Link>
          <Link href="/student-resources/tutoring" className="press inline-flex items-center gap-2 font-bold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
            Writing &amp; Tutoring Support →
          </Link>
          <Link href="/about/human-resources" className="press inline-flex items-center gap-2 font-bold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
            Human Resources →
          </Link>
        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
