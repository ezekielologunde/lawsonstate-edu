import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const EMERGENCY_CONTACTS = [
  { label: '911 — Police, Fire, Medical', value: '911', href: 'tel:911', urgent: true },
  { label: 'Campus Security (Birmingham)', value: '205.929.6350', href: 'tel:+12059296350', urgent: true },
  { label: 'Campus Security (Bessemer)', value: '205.424.5119', href: 'tel:+12054245119', urgent: true },
  { label: '988 — Crisis Lifeline', value: 'Call or text 988', href: 'tel:988', urgent: false },
  { label: 'Counseling Services', value: '205.929.6360', href: 'tel:+12059296360', urgent: false },
  { label: 'Campus Police After Hours', value: '205.929.6350', href: 'tel:+12059296350', urgent: false },
]

const PROGRAMS = [
  { title: 'Cougar Alert', desc: 'Lawson State\'s emergency mass-notification system sends text, email, and voice alerts for campus closures, weather emergencies, and security incidents. All enrolled students are automatically enrolled; verify your contact info in MyLawson.' },
  { title: 'Campus Security Officers', desc: 'Uniformed security personnel patrol both campuses during all operational hours. Officers can assist with vehicle jump-starts, safety escorts to parking, and immediate emergency response.' },
  { title: 'Safety Escort Service', desc: 'Request a safety escort to your vehicle or between buildings — especially useful during evening classes or after dark. Contact Campus Security at 205.929.6350.' },
  { title: 'LSCC Police & Security Report', desc: 'Lawson State publishes an annual campus security report (Clery Act) covering statistics, policies, and safety procedures. Copies are available from the Office of Student Affairs.' },
]

const TIPS = [
  'Save Campus Security in your phone before you need it: 205.929.6350',
  'Walk with others to parking areas after dark — use the safety escort if you are alone',
  'Report suspicious persons or activities immediately; don\'t wait',
  'Keep your vehicle locked and never leave valuables visible',
  'Be aware of your surroundings — limit phone use while walking',
  'Verify your contact info in MyLawson so Cougar Alert can reach you',
  'Know the nearest emergency blue-light phone locations on campus',
  'Share your location with a trusted contact when attending evening classes',
]

const RESOURCES = [
  { label: 'Clery Act Report', desc: 'Annual campus security statistics and policies', href: '/about' },
  { label: 'Title IX Reporting', desc: 'Sexual misconduct, harassment, and assault', href: '/about/title-ix' },
  { label: 'Student Concerns', desc: 'Non-emergency complaints and reports', href: '/student-resources/concerns' },
  { label: 'Counseling Services', desc: 'Free, confidential mental health support', href: '/student-resources/health' },
]

export default function StudentSafetyPage() {
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
            <Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Student Safety</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Cougar Alert · Campus Security · Clery Act
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            STUDENT SAFETY
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Your safety is our priority. Lawson State maintains a secure campus environment through trained security personnel, emergency notifications, and community partnerships.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="tel:+12059296350" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Campus Security: 205.929.6350
            </a>
            <a href="tel:911" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Emergency: 911
            </a>
          </div>
        </div>
      </section>

      {/* Emergency contacts */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Save These Numbers</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>EMERGENCY CONTACTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EMERGENCY_CONTACTS.map((e) => (
              <a
                key={e.label}
                href={e.href}
                className="press flex items-center justify-between rounded-2xl px-5 py-4 transition-opacity hover:opacity-80"
                style={{
                  background: e.urgent ? 'oklch(0.22 0.17 261)' : 'white',
                  border: e.urgent ? 'none' : '1.5px solid oklch(0 0 0 / 0.07)',
                  boxShadow: e.urgent ? '0 4px 16px oklch(0.22 0.17 261 / 0.20)' : '0 2px 8px oklch(0 0 0 / 0.04)',
                }}
              >
                <div>
                  <p className="text-sm font-semibold" style={{ color: e.urgent ? 'oklch(1 0 0 / 0.80)' : 'oklch(0.42 0.04 261)' }}>{e.label}</p>
                  <p className="font-display font-black" style={{ fontSize: '1.1rem', color: e.urgent ? 'oklch(0.79 0.19 78)' : 'oklch(0.22 0.17 261)', letterSpacing: '-0.01em' }}>{e.value}</p>
                </div>
                <span style={{ color: e.urgent ? 'oklch(0.79 0.19 78)' : 'oklch(0.42 0.17 261)', fontWeight: 700 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Safety programs */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Campus Programs</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>SAFETY PROGRAMS & SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{p.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety tips */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Be Prepared</p>
            <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>PERSONAL SAFETY TIPS</h2>
            <ul className="flex flex-col gap-3">
              {TIPS.map((t) => (
                <li key={t} className="flex gap-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0, marginTop: '0.15rem' }}>›</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {RESOURCES.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="press flex items-center justify-between rounded-2xl px-5 py-4 hover:shadow-md transition-shadow"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <div>
                  <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{r.label}</p>
                  <p className="text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>{r.desc}</p>
                </div>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>→</span>
              </Link>
            ))}
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
