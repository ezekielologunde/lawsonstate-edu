import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const PROGRAMS = [
  {
    label: 'Counseling Services',
    tagline: 'Mental health & personal support',
    desc: 'Licensed counselors provide confidential one-on-one sessions to help students manage stress, anxiety, depression, and life transitions. All sessions are free for enrolled students.',
    how: '205.929.6360 · Both campuses · In person & virtual',
    icon: '💬',
  },
  {
    label: 'Cougar Pantry',
    tagline: 'Free food assistance',
    desc: 'If you or your family are experiencing food insecurity, the Cougar Pantry provides free groceries and non-perishable food items. No questions asked — just show your student ID.',
    how: 'Birmingham Campus · Student Services Building · Mon–Fri',
    icon: '🛒',
  },
  {
    label: 'Cougar Clothing Closet',
    tagline: 'Professional attire, free',
    desc: 'Need an outfit for a job interview or career fair? The Cougar Clothing Closet provides free professional clothing to students. Available for both men and women.',
    how: 'Ask at Student Services · Both campuses',
    icon: '👔',
  },
  {
    label: 'Crisis & Emergency Resources',
    tagline: '24/7 support lines',
    desc: 'In a mental health emergency, call the 988 Suicide & Crisis Lifeline (call or text 988). For campus emergencies, call campus security or 911.',
    how: 'National: 988 · Campus Security: 205.929.6350',
    icon: '🆘',
  },
  {
    label: 'Disability Services',
    tagline: 'Accommodations & accessibility',
    desc: 'Students with documented disabilities may receive academic accommodations including extended test time, note-taking assistance, and accessible course materials. Apply early in the semester.',
    how: 'Student Affairs · 205.929.6437',
    icon: '♿',
  },
  {
    label: 'Physical Wellness',
    tagline: 'Recreation & fitness',
    desc: 'The Birmingham Campus Athletic Complex includes fitness facilities available to students. Athletics staff can advise on wellness programming and fitness resources on campus.',
    how: 'Birmingham Campus · Athletic Complex',
    icon: '🏃',
  },
]

const CARING_CAMPUS = [
  'Dedicated counselors with specialized training in mental health first aid',
  'Faculty and staff trained to recognize and respond to student distress',
  'Anonymous tip line for reporting concerns about fellow students',
  'Warm hand-off referrals to community mental health resources',
  'Peer support programs that connect struggling students with trained peers',
]

const EMERGENCY = [
  { label: 'Campus Security', value: '205.929.6350', href: 'tel:+12059296350' },
  { label: '988 Crisis Line', value: 'Call or text 988', href: 'tel:988' },
  { label: 'National Emergency', value: '911', href: 'tel:911' },
  { label: 'Counseling Services', value: '205.929.6360', href: 'tel:+12059296360' },
]

export default function HealthWellnessPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Health &amp; Wellness</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Caring Campus · Student Wellbeing
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            HEALTH &amp; WELLNESS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Lawson State is a Caring Campus. We support your mental, physical, and basic-needs wellbeing — not just your academics.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Talk to a Counselor
            </Link>
            <a
              href="tel:988"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              988 Crisis Line
            </a>
          </div>
        </div>
      </section>

      {/* Emergency bar */}
      <div style={{ background: 'oklch(0.22 0.17 261 / 0.08)', borderBottom: '1px solid oklch(0.22 0.17 261 / 0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-x-8 gap-y-2 items-center">
          <span className="font-bold text-xs uppercase" style={{ color: 'oklch(0.42 0.17 261)', letterSpacing: '0.15em' }}>Quick Contacts</span>
          {EMERGENCY.map((e) => (
            <a key={e.label} href={e.href} className="flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: 'oklch(0.22 0.17 261)' }}>
              <span style={{ color: 'oklch(0.50 0.04 261)', fontWeight: 400 }}>{e.label}:</span>
              {e.value}
            </a>
          ))}
        </div>
      </div>

      {/* Programs grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>All Free for LSCC Students</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT WE OFFER</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}
              >
                <span style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }} aria-hidden>{p.icon}</span>
                <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.68rem', letterSpacing: '0.18em' }}>{p.tagline}</p>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{p.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{p.desc}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: 'oklch(0.95 0.03 255)' }}>
                  <p className="text-xs" style={{ color: 'oklch(0.50 0.04 261)' }}>{p.how}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caring Campus */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>ACCS Initiative</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CARING CAMPUS</h2>
            <p style={{ fontSize: '0.95rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Lawson State Community College is a designated <strong>Caring Campus</strong> through the Alabama Community College System. This commitment means we proactively support students through mental health, food security, and wellness programs.
            </p>
            <ul className="flex flex-col gap-3">
              {CARING_CAMPUS.map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0, marginTop: '0.15rem' }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Confidential Support</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>COUNSELING IS FREE &amp; CONFIDENTIAL</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Talking to a counselor doesn&apos;t go on your academic record. It&apos;s confidential, free, and available to every enrolled student. You don&apos;t have to be in crisis to reach out — any challenge qualifies.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.929.6360</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Email:</span> counseling@lawsonstate.edu</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Hours:</span> Mon–Fri · 8 AM – 5 PM</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Virtual:</span> Available by request</div>
            </div>
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Schedule a Session
            </Link>
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
