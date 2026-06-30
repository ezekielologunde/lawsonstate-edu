import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const ACCOMMODATIONS = [
  {
    title: 'Extended Test Time',
    desc: 'Qualified students receive 1.5× or 2× standard test time for in-class exams and finals.',
  },
  {
    title: 'Reduced-Distraction Testing',
    desc: 'Testing in a quiet room away from the general student population to minimize distractions.',
  },
  {
    title: 'Note-Taking Assistance',
    desc: 'Peer note-takers or instructor-provided notes for students who cannot take adequate notes due to their disability.',
  },
  {
    title: 'Accessible Course Materials',
    desc: 'Conversion of textbooks, handouts, and course content to accessible formats (electronic text, large print, audio).',
  },
  {
    title: 'Captioning & Interpreting',
    desc: 'Sign language interpreters and real-time captioning (CART) for deaf and hard-of-hearing students in classes and campus events.',
  },
  {
    title: 'Priority Registration',
    desc: 'Early registration access to ensure students can select class schedules that accommodate their needs.',
  },
  {
    title: 'Assistive Technology',
    desc: 'Screen readers, magnification software, speech-to-text tools, and other AT available in campus computer labs.',
  },
  {
    title: 'Accessible Parking & Facilities',
    desc: 'Accessible parking permits, building access coordination, and facility accommodation requests.',
  },
]

const QUALIFYING_CONDITIONS = [
  'Learning disabilities (dyslexia, dyscalculia, processing disorders)',
  'Attention-deficit disorders (ADHD/ADD)',
  'Physical disabilities (mobility, chronic conditions, pain)',
  'Visual impairments and blindness',
  'Hearing impairments and deafness',
  'Mental health conditions (anxiety, depression, PTSD)',
  'Autism spectrum disorder',
  'Traumatic brain injury',
  'Temporary disabilities (injury, surgery, recovery)',
]

const APPLY_STEPS = [
  {
    n: '01',
    title: 'Submit an Application',
    body: 'Contact Student Affairs or the Disability Services office to request an accommodation application form. Applications are accepted any time, but early submission is encouraged before the semester begins.',
  },
  {
    n: '02',
    title: 'Provide Documentation',
    body: 'Submit documentation from a licensed professional (physician, psychologist, audiologist, etc.) that diagnoses the disability and recommends accommodations. Documentation must be current (typically within 3–5 years).',
  },
  {
    n: '03',
    title: 'Meet with a Counselor',
    body: 'A Disability Services counselor reviews your documentation and meets with you to determine which accommodations are appropriate for your situation. Your input matters — tell us what works for you.',
  },
  {
    n: '04',
    title: 'Receive Your Accommodation Letter',
    body: 'Once approved, you receive a formal accommodation letter each semester to share with your instructors. Accommodations do not appear on transcripts or other academic records.',
  },
]

const FAQS = [
  {
    q: 'Do accommodations appear on my transcript?',
    a: 'No. Disability accommodations are kept confidential and do not appear on transcripts, diplomas, or any academic records shared with employers or other institutions.',
  },
  {
    q: 'What if my instructor refuses to honor my accommodations?',
    a: 'Contact the Disability Services office immediately. Your accommodation letter is a formal notice of your legal rights under the ADA. Instructors are required to honor approved accommodations.',
  },
  {
    q: 'Do I have to re-apply every semester?',
    a: 'You renew your accommodation letter each semester, but full re-documentation is not required unless your condition or needs change significantly.',
  },
  {
    q: 'I have a temporary injury — can I still get accommodations?',
    a: 'Yes. Temporary conditions such as broken limbs, post-surgery recovery, and acute illness can qualify for short-term accommodations. Contact us as soon as possible.',
  },
  {
    q: 'Are accommodations the same as "extra help" or tutoring?',
    a: 'No. Accommodations level the playing field — they do not lower academic standards or give you unfair advantages. Tutoring and academic support are separate services available at the R.A.C.E. Center.',
  },
]

export default function DisabilityServicesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Disability Services</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            ADA · Section 504 · Academic Accommodations
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            DISABILITY SERVICES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Lawson State is committed to providing equal access to all programs and activities. Students with documented disabilities are entitled to reasonable accommodations under the ADA and Section 504.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Request Accommodations
            </Link>
            <Link
              href="#how-to-apply"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              How to Apply ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Legal note bar */}
      <div style={{ background: 'oklch(0.97 0.015 255)', borderBottom: '1px solid oklch(0.22 0.17 261 / 0.10)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs" style={{ color: 'oklch(0.45 0.05 261)', lineHeight: 1.7 }}>
            <strong style={{ color: 'oklch(0.30 0.08 261)' }}>Your Rights:</strong>{' '}
            Under the Americans with Disabilities Act (ADA) and Section 504 of the Rehabilitation Act, students with qualifying disabilities are entitled to equal access and reasonable academic accommodations. Lawson State Community College does not discriminate on the basis of disability.
          </p>
        </div>
      </div>

      {/* Accommodations grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Available Support</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ACCOMMODATIONS WE OFFER</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCOMMODATIONS.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl p-5"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>{a.title}</p>
                <p style={{ fontSize: '0.84rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifying conditions + CTA */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Who Qualifies</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>QUALIFYING CONDITIONS</h2>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Many conditions and disabilities qualify for academic accommodations. The list below is representative, not exhaustive — if you have a diagnosis or condition that affects your ability to participate fully in your education, contact us to discuss eligibility.
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {QUALIFYING_CONDITIONS.map((c) => (
                <li key={c} className="flex gap-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.6 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0, marginTop: '0.15rem' }}>›</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Confidential · Free · Required by Law</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>ACCOMMODATIONS DO NOT LOWER STANDARDS</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Accommodations give you equal access — not an advantage. They ensure that your disability doesn't prevent you from demonstrating what you actually know. Academic expectations remain the same for all students.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.929.6437</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Office:</span> Student Affairs · Both campuses</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Hours:</span> Mon–Fri · 8 AM – 5 PM</div>
            </div>
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Contact Disability Services
            </Link>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section id="how-to-apply" className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Step by Step</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO REQUEST ACCOMMODATIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPLY_STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0.79 0.19 78 / 0.25)' }}>
            <p className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>Apply Early</p>
            <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>
              The accommodation review process takes time. Apply before the semester starts so accommodations are in place for your first exam. Late requests are still processed, but may delay when you can use your accommodations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Common Questions</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FREQUENTLY ASKED</h2>
          </div>
          <div className="flex flex-col gap-4 max-w-3xl">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{f.q}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Disability Services Office</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              205.929.6437 · Student Affairs · Both campuses
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Request Accommodations
            </Link>
            <Link
              href="/student-resources/tutoring"
              className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.92rem' }}
            >
              Tutoring & Support →
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
