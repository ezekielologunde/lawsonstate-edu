import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Veterans Services | Lawson State Community College',
  description:
    'Lawson State is approved by the Alabama State Approving Agency to offer VA Educational Benefits (GI Bill) to eligible veterans. Learn how to enroll, certify benefits, and access veteran-specific resources.',
}

const STEPS = [
  { n: '01', title: 'Apply for Admission', detail: 'Complete the application for regular student status and submit to the Admissions Office.' },
  { n: '02', title: 'Select Your Program', detail: 'Choose an approved program of study — a requirement for VA educational benefits. Speak with an advisor if you need help selecting.' },
  { n: '03', title: 'Submit Transcripts', detail: 'Provide your high school transcript, any official college transcripts, and military transcripts (AARTS, SMART, or JST).' },
  { n: '04', title: 'Take Placement Exam', detail: 'Complete the ACCUPLACER placement assessment to determine appropriate course placement.' },
  { n: '05', title: 'Apply for VA Benefits', detail: 'Apply for VA educational benefits through VA.gov (VONAPP). Bring your Certificate of Eligibility (COE) to the Veterans Affairs office on campus.' },
  { n: '06', title: 'Get Certified', detail: 'Once enrolled, our VA School Certifying Official will certify your enrollment to the VA so your benefits are processed and disbursed.' },
]

const RESOURCES = [
  {
    title: 'GI Bill® Benefits',
    desc: 'Lawson State is approved by the Alabama State Approving Agency (SAA) to offer VA Educational Benefits under various GI Bill chapters including Post-9/11 (Ch. 33), Montgomery (Ch. 30), and Vocational Rehabilitation (Ch. 31).',
    link: { label: 'Learn more at VA.gov', href: 'https://www.va.gov/education' },
  },
  {
    title: 'Military Transcript Credit',
    desc: 'Lawson State accepts credit from military training and experience. Submit your AARTS (Army), SMART (Navy/Marines), or JST (Joint Services) transcripts to the Registrar for evaluation.',
    link: null,
  },
  {
    title: 'Cougar Professional Wear',
    desc: 'Veterans and all students can access the Cougar Clothing Closet for professional attire needed for job interviews, career fairs, and networking events — at no cost.',
    link: { label: 'Request clothing', href: '/support/health' },
  },
  {
    title: 'Priority Registration',
    desc: 'Eligible veterans and active military students may be entitled to priority enrollment registration. Contact the Veterans Services office for details.',
    link: null,
  },
]

export default function VeteransPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.16 0.04 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 261 / 0.97) 0%, oklch(0.22 0.17 261 / 0.82) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-15%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.48 0.22 27 / 0.08) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>VA Approved Institution</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>VETERANS SERVICES</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Lawson State is approved by the Alabama State Approving Agency (SAA) to offer VA Educational Benefits including the GI Bill® to eligible veterans and dependents.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/admissions" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Apply Now
              </Link>
              <Link href="/contact" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Contact Admissions
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Enrollment Process</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>HOW TO ENROLL</h2>
              <p className="mt-4 max-w-2xl" style={{ fontSize: '1rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7 }}>
                These are general guidelines. Check with your specific campus location for details. Contact information is at the end of this page.
              </p>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STEPS.map((s) => (
                <div key={s.n} className="card-lift rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-black" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>{s.n}</div>
                  <h3 className="font-display font-bold mb-2 leading-snug" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Benefits & Resources</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>VETERAN RESOURCES</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESOURCES.map((r) => (
                <div key={r.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>{r.title}</h3>
                  <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{r.desc}</p>
                  {r.link && (
                    <Link href={r.link.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{r.link.label} →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>QUESTIONS ABOUT VA BENEFITS?</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>Our School Certifying Official is here to help. Reach us at the Admissions Office.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                Contact Admissions →
              </Link>
              <a href="https://www.va.gov/education" target="_blank" rel="noreferrer" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Visit VA.gov
              </a>
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
