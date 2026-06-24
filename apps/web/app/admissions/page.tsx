import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Admissions — Apply to Lawson State Community College',
  description:
    'Apply to Lawson State in 4 simple steps. No minimum GPA required. Rolling admissions for new, transfer, and dual enrollment students. Birmingham & Bessemer, AL.',
}

const STEPS = [
  {
    step: '01',
    title: 'Submit Your Application',
    desc: 'Complete the online application at apply.lawsonstate.edu. Applications are accepted year-round — no deadline to worry about. No application fee.',
    link: { label: 'Start your application →', href: 'https://lawsonstate.edu/admissions/apply' },
  },
  {
    step: '02',
    title: 'Send Required Documents',
    desc: 'Submit your official high school transcript or GED certificate. First-time college students need a high school transcript with graduation date; GED recipients submit their GED score results.',
    link: null,
  },
  {
    step: '03',
    title: 'Send Official Transcripts',
    desc: 'If you have attended any other college or university, request official transcripts be sent directly to Lawson State. Transfer students with a GPA below 2.0 are placed on Academic Probation.',
    link: null,
  },
  {
    step: '04',
    title: 'Confirm Your Status',
    desc: 'After your file is complete, you will receive a decision notice. Log in to MyLawson to confirm enrollment, register for classes, and set up your student email and financial aid.',
    link: { label: 'Go to MyLawson →', href: 'https://my.lawsonstate.edu' },
  },
]

const TYPES = [
  {
    id: 'new',
    label: 'New Students',
    items: [
      'No minimum GPA required for general admission',
      'Rolling admissions — no deadline',
      'High school transcript or GED required',
      'Placement assessment required before registering for more than 4 credit hours (ACT, HS GPA, or ACCUPLACER)',
      'Complete ORI 101 (Freshman Academy) in your first semester',
      'Register for classes through MyLawson after admission is confirmed',
    ],
    cta: 'Apply as a New Student',
    ctaHref: 'https://lawsonstate.edu/admissions/apply',
  },
  {
    id: 'transfer',
    label: 'Transfer Students',
    items: [
      'Official transcripts required from ALL previously attended colleges',
      'D grades from other institutions are not accepted for transfer credit',
      'Transfer GPA below 2.0 results in Academic Probation status at enrollment',
      'At least 25% of total credit hours must be completed at Lawson State',
      'Credit for AP, CLEP, DANTES, or military coursework accepted (up to 25% of program hours)',
      'Alabama Transfers / STARS system protects community college credits statewide',
    ],
    cta: 'Apply as a Transfer Student',
    ctaHref: 'https://lawsonstate.edu/admissions/apply',
  },
  {
    id: 'dual',
    label: 'Dual Enrollment',
    items: [
      'Available to 10th–12th grade students',
      'Minimum 2.5 GPA required',
      'ACCS grant funding available — tuition may be waived',
      '51 classes available across 8+ pathways',
      'Courses available online, virtually, or in-person',
      'Accelerated High School option for 11th–12th graders with 3.0+ GPA',
    ],
    cta: 'Dual Enrollment Info',
    ctaHref: '/admissions/dual-enrollment',
  },
]

const CONTACT = [
  { label: 'Main Phone', value: '205.925.2515' },
  { label: 'Admissions Direct', value: '205.929.3416' },
  { label: 'Text Admissions', value: '205.707.6422' },
  { label: 'Email', value: 'admissions@lawsonstate.edu' },
  { label: 'Birmingham', value: '205.929.6309' },
  { label: 'Bessemer', value: '205.929.3418' },
]

export default function AdmissionsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.13 263 / 0.82) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Rolling Admissions · No GPA Minimum</p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}>APPLY TO LAWSON STATE</h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
            Getting started is simple. Follow four steps, and our admissions team is here to help at every point.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="https://lawsonstate.edu/admissions/apply" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
              Start My Application
            </Link>
            <Link href="/financial-aid" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
              Financial Aid Info
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.10 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>How to Apply</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>4 STEPS TO ENROLLMENT</h2>
          </div>
          <div className="relative">
            {/* connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[calc(12.5%)] right-[calc(12.5%)] h-px" style={{ background: 'oklch(0.79 0.19 78 / 0.25)' }} />
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s) => (
                <div key={s.step} className="card-lift rounded-2xl p-6 shadow-card" style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-black" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1.08rem' }}>
                    {s.step}
                  </div>
                  <h3 className="font-display font-bold mb-2 text-white leading-snug" style={{ fontSize: '1.08rem' }}>{s.title}</h3>
                  <p className="leading-relaxed mb-4" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.70)' }}>{s.desc}</p>
                  {s.link && (
                    <Link href={s.link.href} className="link-reveal font-semibold" style={{ fontSize: '1.08rem', color: 'oklch(0.79 0.19 78)' }}>
                      {s.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Type Details */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.06 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Admissions Requirements</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>FIND YOUR PATH</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TYPES.map(t => (
              <div key={t.id} className="rounded-2xl p-7" style={{ background: 'oklch(0.19 0.08 263)', border: '1px solid oklch(1 0 0 / 0.07)' }}>
                <h3 className="font-display font-black text-white mb-5" style={{ fontSize: '1.1rem', letterSpacing: '-0.01em' }}>{t.label}</h3>
                <ul className="space-y-3 mb-6">
                  {t.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5" style={{ fontSize: '0.85rem', color: 'oklch(1 0 0 / 0.55)' }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', marginTop: '0.2rem', flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.ctaHref}
                  className="press font-bold px-5 py-2.5 rounded-lg block text-center"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}
                >
                  {t.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.10 261)' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Need Help?</p>
              <h2 className="font-display font-black leading-none mb-6 text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>CONTACT ADMISSIONS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CONTACT.map(c => (
                  <div key={c.label} className="rounded-xl p-4" style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                    <div className="font-semibold uppercase mb-0.5" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.79 0.19 78)' }}>{c.label}</div>
                    <div className="font-medium text-white" style={{ fontSize: '1.05rem' }}>{c.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Office Hours</p>
              <h2 className="font-display font-black leading-none mb-6 text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>WHEN WE'RE OPEN</h2>
              <div className="space-y-3">
                {[
                  ['General Office Hours', 'Monday–Friday: 8:00 AM – 5:00 PM'],
                  ['Admissions (Extended)', 'Monday–Thursday: 8:00 AM – 6:30 PM\nFriday: 8:00 AM – 5:00 PM'],
                ].map(([label, hours]) => (
                  <div key={label} className="rounded-xl p-5" style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                    <div className="font-semibold mb-1 text-white" style={{ fontSize: '1rem' }}>{label}</div>
                    <div className="whitespace-pre-line" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.70)' }}>{hours}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/visit"
                  className="press font-semibold px-6 py-3 rounded-lg inline-block"
                  style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.15)', color: 'white', fontSize: '1rem' }}
                >
                  Schedule a Campus Visit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
