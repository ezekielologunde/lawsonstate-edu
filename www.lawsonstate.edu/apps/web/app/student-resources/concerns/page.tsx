import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const PROCESS = [
  {
    num: '01',
    title: 'Talk to the Person Involved',
    desc: 'For most concerns, the fastest resolution is a direct conversation with your instructor, advisor, or the relevant department.',
  },
  {
    num: '02',
    title: 'Contact the Department or Division',
    desc: 'If direct conversation does not resolve the issue, contact the department head or division director in writing.',
  },
  {
    num: '03',
    title: 'Submit a Formal Grievance',
    desc: "If the matter is still unresolved, submit a formal written grievance to the Dean of Students' Office. Include all relevant documentation.",
  },
  {
    num: '04',
    title: 'Dean of Students Review',
    desc: 'The Dean reviews your case, gathers information from all parties, and issues a decision typically within 10 business days.',
  },
]

const TYPES = [
  {
    label: 'Academic Concerns',
    items: ['Grade disputes or appeals', 'Faculty conduct in the classroom', 'Academic dishonesty accusations', 'Accessibility or accommodation issues'],
    contact: 'Academic Affairs · 205.929.6360',
  },
  {
    label: 'Financial Concerns',
    items: ['Financial aid award disputes', 'Billing errors or unexpected charges', 'Refund delays', 'Scholarship or waiver issues'],
    contact: 'Financial Aid Office · 205.929.6346',
  },
  {
    label: 'Student Conduct',
    items: ['Behavior policy violations', 'Harassment or bullying', 'Campus safety incidents', 'Peer conflicts requiring mediation'],
    contact: "Dean of Students' Office · 205.929.6437",
  },
  {
    label: 'Discrimination & Title IX',
    items: ['Race, gender, or disability discrimination', 'Sexual misconduct or harassment', 'Retaliation for reporting', 'Hostile environment concerns'],
    contact: 'Title IX Coordinator · 205.929.2113',
  },
]

export default function ConcernsPage() {
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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Concerns &amp; Complaints</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Affairs · Dean of Students
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', letterSpacing: '-0.025em' }}>
            CONCERNS &amp; COMPLAINTS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            You have the right to a fair resolution. We take every concern seriously and will guide you through the right process.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Contact Dean of Students
            </Link>
            <a
              href="mailto:deanofstudents@lawsonstate.edu"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>The Process</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW IT WORKS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((s) => (
              <div key={s.num} className="flex flex-col gap-3">
                <div
                  className="font-display font-black"
                  style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {s.num}
                </div>
                <p className="font-display font-black" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.87rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concern types */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Types of Concerns</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FIND THE RIGHT CHANNEL</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TYPES.map((t) => (
              <div
                key={t.label}
                className="rounded-2xl p-6"
                style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}
              >
                <p className="font-display font-black mb-4" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{t.label}</p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {t.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm" style={{ color: 'oklch(0.40 0.04 261)', lineHeight: 1.55 }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg px-3 py-2" style={{ background: 'oklch(0.22 0.17 261 / 0.06)' }}>
                  <span className="text-xs font-bold uppercase" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.1em' }}>Contact</span>
                  <p className="text-sm font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>{t.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Your Rights</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>IMPORTANT TO KNOW</h2>
            <ul className="flex flex-col gap-3">
              {[
                'All grievances are confidential to the extent permitted by law and FERPA regulations.',
                'Retaliation against any student for filing a complaint in good faith is strictly prohibited.',
                'You may bring a support person (not an attorney) to any formal grievance meeting.',
                "If your concern is not resolved at the college level, you may appeal to the Alabama Community College System's Student Affairs office.",
                'For emergencies or immediate safety concerns, call campus security or 911.',
              ].map((note) => (
                <li key={note} className="flex gap-3 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, fontSize: '1rem', flexShrink: 0, marginTop: '0.05rem' }}>›</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Need to talk to someone?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Dean of Students · 205.929.6437 · deanofstudents@lawsonstate.edu
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Contact Student Affairs
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
