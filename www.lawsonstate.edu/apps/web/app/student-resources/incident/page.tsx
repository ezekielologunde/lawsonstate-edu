import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const INCIDENT_TYPES = [
  { title: 'Academic Misconduct', desc: 'Plagiarism, cheating, fabrication of data, academic dishonesty by another student.', severity: 'standard' },
  { title: 'Behavioral / Conduct Violation', desc: 'Disruptive, threatening, or inappropriate behavior by a student in a classroom, on campus, or in college-related activities.', severity: 'standard' },
  { title: 'Distressing / At-Risk Behavior', desc: 'A student who appears to be in crisis, exhibiting signs of mental health distress, or at risk of harming themselves or others.', severity: 'elevated' },
  { title: 'Harassment or Discrimination', desc: 'Harassment based on race, gender, religion, national origin, disability, or other protected characteristics.', severity: 'standard' },
  { title: 'Title IX / Sexual Misconduct', desc: 'Sexual harassment, assault, dating violence, stalking, or other behaviors covered under Title IX.', severity: 'elevated' },
  { title: 'Property Damage or Theft', desc: 'Damage to college property or theft of equipment, personal property, or college materials.', severity: 'standard' },
]

const STEPS = [
  { n: '01', title: 'Ensure Immediate Safety', body: 'If anyone is in immediate danger, call 911 first. For campus emergencies, call Campus Security at 205.929.6350. Do not submit this form as a substitute for emergency help.' },
  { n: '02', title: 'Gather What You Know', body: 'Note the date, time, location, and persons involved. If there are witnesses, note their names. You don\'t need to have every detail — submit what you have.' },
  { n: '03', title: 'Complete the Report', body: 'Fill out the Student Incident Report form with as much detail as possible. Reports can be submitted anonymously, but providing your contact information allows staff to follow up with you.' },
  { n: '04', title: 'A Staff Member Follows Up', body: 'The Office of Student Affairs reviews all submissions and will follow up with the reporting party if contact information was provided. Response time is typically 1–3 business days.' },
]

const CONTACTS = [
  { role: 'Office of Student Affairs', desc: 'Oversees all student conduct and incident reports', phone: '205.929.6310', email: 'studentaffairs@lawsonstate.edu' },
  { role: 'Title IX Coordinator', desc: 'Sexual misconduct, gender-based harassment, assault', phone: '205.929.6301', email: 'titleix@lawsonstate.edu' },
  { role: 'Campus Security', desc: 'Immediate safety concerns and on-campus threats', phone: '205.929.6350', email: null },
  { role: 'Counseling Services', desc: 'Support for students in crisis or distress', phone: '205.929.6360', email: null },
]

export default function StudentIncidentPage() {
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
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Submit an Incident</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Conduct · Academic Misconduct · Safety Concerns
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            SUBMIT A STUDENT INCIDENT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Report concerns about student conduct, safety, academic misconduct, or other incidents that require staff attention. All reports are reviewed by the Office of Student Affairs.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://lawsonstate.edu/studentaffairs/incident"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Submit an Incident Report
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href="tel:911" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Emergency: Call 911
            </a>
          </div>
        </div>
      </section>

      {/* Emergency notice */}
      <div style={{ background: 'oklch(0.22 0.17 261 / 0.06)', borderBottom: '1px solid oklch(0.22 0.17 261 / 0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p style={{ fontSize: '0.9rem', color: 'oklch(0.25 0.08 261)', lineHeight: 1.65 }}>
            <strong>In an immediate emergency, call 911.</strong> This form is not monitored 24/7 and is not a substitute for emergency services. For campus security, call 205.929.6350.
          </p>
        </div>
      </div>

      {/* What to report */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What to Report</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TYPES OF INCIDENTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INCIDENT_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl p-6" style={{
                background: 'white',
                border: t.severity === 'elevated' ? '1.5px solid oklch(0.22 0.17 261 / 0.30)' : '1.5px solid oklch(0 0 0 / 0.07)',
              }}>
                {t.severity === 'elevated' && (
                  <span className="inline-block font-bold uppercase text-xs px-2.5 py-0.5 rounded-full mb-3" style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.08em' }}>
                    Requires Prompt Attention
                  </span>
                )}
                <p className="font-display font-black mb-2" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{t.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>How It Works</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>THE REPORTING PROCESS</h2>
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

      {/* Contacts */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Who to Contact</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>KEY OFFICES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACTS.map((c) => (
              <div key={c.role} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{c.role}</p>
                <p className="text-sm mb-3" style={{ color: 'oklch(0.50 0.04 261)' }}>{c.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={`tel:${c.phone.replace(/\./g, '')}`} className="press inline-flex items-center gap-1.5 text-sm font-semibold rounded-lg px-4 py-1.5" style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}>
                    {c.phone}
                  </a>
                  {c.email && (
                    <a href={`mailto:${c.email}`} className="press inline-flex items-center gap-1.5 text-sm font-semibold rounded-lg px-4 py-1.5" style={{ background: 'oklch(0.97 0.015 255)', color: 'oklch(0.28 0.05 261)', border: '1px solid oklch(0 0 0 / 0.06)' }}>
                      {c.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/student-resources/concerns" className="press inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.08)', color: 'oklch(0.28 0.05 261)' }}>
              Student Concerns / Complaints →
            </Link>
            <Link href="/about/title-ix" className="press inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-xl" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.08)', color: 'oklch(0.28 0.05 261)' }}>
              Title IX Information →
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
