'use client'

import { useState } from 'react'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

type Audience = 'new' | 'returning' | 'transfer'

const AUDIENCE_TABS: Record<Audience, { label: string; steps: { step: string; label: string; desc: string }[] }> = {
  new: {
    label: 'New Student',
    steps: [
      { step: '01', label: 'Apply & Get Accepted', desc: 'Submit your free application. Placement testing or prior transcripts are required. Admissions will walk you through next steps.' },
      { step: '02', label: 'File Your FAFSA', desc: 'Most students receive aid. File at studentaid.gov using school code 001033. Aid eligibility must be confirmed before registration.' },
      { step: '03', label: 'Attend Orientation (NSO)', desc: 'Advisors are on-site at every NSO session. You will receive your program plan and complete registration before you leave.' },
      { step: '04', label: 'Register & Stay Connected', desc: 'Complete registration in MyLawson. Your advisor will reach out before each semester — respond promptly to stay on track.' },
    ],
  },
  returning: {
    label: 'Returning Student',
    steps: [
      { step: '01', label: 'Check In Each Semester', desc: 'Meet with your advisor before registration opens. Review your degree audit, remaining requirements, and course sequence.' },
      { step: '02', label: 'Resolve Any Holds', desc: 'Financial, academic, or administrative holds block registration. Your advisor can help you identify and clear holds quickly.' },
      { step: '03', label: 'Update Your Plan', desc: 'Changing your major, adding a certificate, or switching to online? Your advisor will update your degree plan and recalculate your timeline.' },
      { step: '04', label: 'Apply for Graduation', desc: 'Within 30 credit hours of finishing, apply for graduation through MyLawson. Your advisor will audit your degree and confirm eligibility.' },
    ],
  },
  transfer: {
    label: 'Transfer Student',
    steps: [
      { step: '01', label: 'Submit Prior Transcripts', desc: 'Bring or upload transcripts from all prior institutions. A transfer advisor will review your credits and map them to Lawson State equivalencies.' },
      { step: '02', label: 'Review STARS / AGSC', desc: 'If transferring to a 4-year Alabama school, your advisor will walk you through the STARS articulation guide and confirm which credits count.' },
      { step: '03', label: 'Build Your Completion Plan', desc: 'Your advisor creates a semester-by-semester plan that gets you to your degree efficiently, avoiding unnecessary courses.' },
      { step: '04', label: 'Register & Monitor Progress', desc: 'Once registered, stay connected with your advisor each semester. Use the Alabama Transfer Clearinghouse to track credit acceptance.' },
    ],
  },
}

const ADVISOR_TRACKS = [
  { division: 'Health Sciences',        programs: 'Nursing · Dental Hygiene · EMS · Allied Health · Pharmacy Tech',                    campus: 'Birmingham — R.A.C.E. Center' },
  { division: 'Business & IT',          programs: 'Accounting · Business Administration · Computer Information Systems · Office Admin',  campus: 'Birmingham — R.A.C.E. Center' },
  { division: 'Liberal Arts & Transfer',programs: 'English · Psychology · Education · Social Sciences · Pre-Law · General Studies',       campus: 'Both Campuses' },
  { division: 'Trades & CTE',           programs: 'Mechatronics · HVAC · Welding · Automotive · Construction Technology · Electrical',   campus: 'Bessemer — S.P.A.C.E. Center' },
  { division: 'Adult Education',        programs: 'GED · Adult Basic Education (ABE) · ESL · Fast-Track Credentials',                   campus: 'Both Campuses' },
  { division: 'TRiO / First-Generation',programs: 'First-gen students · Low-income students · Students with disabilities',               campus: 'Birmingham — TRiO Office' },
]

const PATHWAYS = [
  { label: 'Academic Catalog',      desc: '2026–2027 requirements, degree maps, course descriptions', href: '/academics/catalog' },
  { label: 'Alabama Transfer (STARS)', desc: 'AGSC articulation — verify credits before you transfer',  href: '/academics/alabama-transfer' },
  { label: 'All 200+ Programs',     desc: 'Health, Business, Trades, Transfer, Online, and more',       href: '/academics' },
  { label: 'Registration Dates',    desc: 'Opens, deadlines, and how to register in MyLawson',          href: '/registration' },
  { label: 'Financial Aid Guide',   desc: 'FAFSA walkthrough, Pell, and scholarships',                  href: '/financial-aid/fafsa' },
  { label: 'Academic Calendar',     desc: 'Key dates: registration, finals, breaks, graduation',        href: '/calendar' },
]

const EVENTS = [
  { name: 'New Student Orientation (NSO)', desc: 'Advisors on-site every session. New students leave with a program plan and completed registration.', action: 'Orientation Info', href: '/orientation' },
  { name: 'L-Day',                         desc: 'Campus resource fair each semester. Advising tables in the Student Center — drop in, no appointment.', action: 'Events Calendar', href: '/calendar' },
  { name: 'Preview Days',                  desc: 'Prospective student campus visits with Admissions advisors available for program questions.', action: 'Admissions Info', href: '/admissions' },
  { name: 'Advising Week',                 desc: 'Annual event with extended walk-in hours, transfer planning workshops, and graduation audits.', action: 'Email Advising', href: 'mailto:advising@lawsonstate.edu' },
]

export default function AdvisingPage() {
  const [audience, setAudience] = useState<Audience>('new')
  const steps = AUDIENCE_TABS[audience].steps

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55259233505_3af8bb2b74_z.jpg" alt="A Lawson State advisor with a student" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/student-resources" className="hover:text-white transition-colors">Student Resources</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Advising</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Academic Advising · Lawson State CC
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', letterSpacing: '-0.025em' }}>
            ADVISING &<br />SUPPORT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Your advisor helps you plan courses, stay on track for graduation or transfer, and connect with the right support — at no cost to you.
          </p>
        </div>
      </section>

      {/* Action band */}
      <div style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '1px solid oklch(0.68 0.20 76)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <p className="font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.11 0.03 261)' }}>Ready to meet with an advisor?</p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(0.11 0.03 261 / 0.65)', marginTop: '0.15rem' }}>Walk in or email — no cost, no wait list.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/advising/book" className="press btn-shimmer font-bold px-6 py-2.5 rounded-lg whitespace-nowrap" style={{ background: 'oklch(0.13 0.12 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.92rem' }}>
              Schedule an Appointment →
            </Link>
            <a href="mailto:advising@lawsonstate.edu" className="font-semibold whitespace-nowrap transition-opacity hover:opacity-70" style={{ fontSize: '0.92rem', color: 'oklch(0.11 0.03 261)' }}>
              advising@lawsonstate.edu
            </a>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div style={{ background: 'oklch(0.13 0.12 261)', borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {([
              { label: 'Book Appointment',    href: '/advising/book',                      note: 'Free · instant' },
              { label: 'My Lawson Portal',    href: 'https://experience.elluciancloud.com/lcc45/',          note: 'Register & grades', ext: true },
              { label: 'Canvas',              href: 'https://alabama.instructure.com', note: 'Courses & assignments', ext: true },
              { label: 'Registration',        href: '/registration',                       note: '7-step process' },
              { label: 'Academic Calendar',   href: '/calendar',                           note: 'Key dates & deadlines' },
              { label: 'Financial Aid',       href: '/financial-aid',                      note: 'FAFSA · grants · Pell' },
            ] as { label: string; href: string; note: string; ext?: boolean }[]).map(item => (
              item.ext
                ? <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="press flex items-center gap-2 px-3.5 py-2 rounded-xl" style={{ background: 'oklch(1 0 0 / 0.07)', color: 'white', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                    <span className="font-bold" style={{ fontSize: '0.80rem' }}>{item.label}</span>
                    <span className="hidden sm:inline" style={{ fontSize: '0.70rem', color: 'oklch(1 0 0 / 0.40)' }}>{item.note}</span>
                  </a>
                : <Link key={item.label} href={item.href} className="press flex items-center gap-2 px-3.5 py-2 rounded-xl" style={{ background: 'oklch(1 0 0 / 0.07)', color: 'white', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                    <span className="font-bold" style={{ fontSize: '0.80rem' }}>{item.label}</span>
                    <span className="hidden sm:inline" style={{ fontSize: '0.70rem', color: 'oklch(1 0 0 / 0.40)' }}>{item.note}</span>
                  </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Audience-tabbed journey */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>The Ideal Student Journey</p>
            <h2 className="font-display font-black leading-none mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>YOUR PATH FORWARD</h2>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Student type">
              {(Object.entries(AUDIENCE_TABS) as [Audience, { label: string }][]).map(([key, { label }]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={audience === key}
                  onClick={() => setAudience(key)}
                  className="press font-bold rounded-lg px-5 py-2 transition-all"
                  style={{
                    fontSize: '0.88rem',
                    background: audience === key ? 'oklch(0.22 0.17 261)' : 'white',
                    color: audience === key ? 'oklch(0.79 0.19 78)' : 'oklch(0.40 0.04 261)',
                    border: audience === key ? '2px solid oklch(0.22 0.17 261)' : '2px solid oklch(0 0 0 / 0.10)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((j) => (
              <div key={j.step} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.05)' }}>
                <div className="font-display font-black mb-3" style={{ fontSize: '0.72rem', letterSpacing: '0.20em', color: 'var(--lscc-eyebrow)' }}>STEP {j.step}</div>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>{j.label}</h3>
                <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{j.desc}</p>
              </div>
            ))}
          </div>
          {audience === 'returning' && (
            <div className="mt-7 flex justify-end">
              <Link href="/advising/returning" className="font-bold transition-opacity hover:opacity-70" style={{ fontSize: '0.90rem', color: 'var(--lscc-eyebrow)' }}>
                View Full Journey Map →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Two campuses */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Two Advising Centers</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FIND YOUR CAMPUS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
              <div className="font-display font-black mb-1" style={{ fontSize: '0.72rem', letterSpacing: '0.20em', color: 'var(--lscc-eyebrow-on-dark)' }}>BIRMINGHAM CAMPUS</div>
              <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: '1.3rem' }}>R.A.C.E. Advising Center</h3>
              <p className="leading-relaxed mb-5" style={{ fontSize: '0.94rem', color: 'oklch(1 0 0 / 0.72)' }}>Reach, Achieve, Connect, Excel. Full academic advising, program planning, transfer support, and referrals to student services.</p>
              <table className="w-full mb-5" style={{ fontSize: '0.85rem' }}>
                <tbody>
                  {[
                    ['Walk-in Hours', 'Mon – Fri, 8 AM – 5 PM'],
                    ['Phone', '205.929.2113'],
                    ['Email', 'advising@lawsonstate.edu'],
                    ['Walk-ins', 'Welcome — no appointment needed'],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid oklch(1 0 0 / 0.10)' }}>
                      <td className="py-1.5 font-semibold" style={{ color: 'oklch(0.79 0.19 78)', width: '38%' }}>{k}</td>
                      <td className="py-1.5" style={{ color: 'oklch(1 0 0 / 0.75)' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link href="/contact" className="press btn-shimmer inline-block font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>Get Directions →</Link>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
              <div className="font-display font-black mb-1" style={{ fontSize: '0.72rem', letterSpacing: '0.20em', color: 'var(--lscc-eyebrow)' }}>BESSEMER CAMPUS</div>
              <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.3rem', color: 'oklch(0.16 0.04 261)' }}>S.P.A.C.E. Center</h3>
              <p className="leading-relaxed mb-5" style={{ fontSize: '0.94rem', color: 'oklch(0.42 0.04 261)' }}>Student Personal Advocacy, Counseling, and Education. Academic advising, personal counseling, disability services, and TRiO program support.</p>
              <table className="w-full mb-5" style={{ fontSize: '0.85rem' }}>
                <tbody>
                  {[
                    ['Walk-in Hours', 'Mon – Fri, 8 AM – 5 PM'],
                    ['Phone', '205.925.2515'],
                    ['Email', 'advising@lawsonstate.edu'],
                    ['Walk-ins', 'Welcome — no appointment needed'],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px solid oklch(0 0 0 / 0.06)' }}>
                      <td className="py-1.5 font-semibold" style={{ color: 'var(--lscc-eyebrow)', width: '38%' }}>{k}</td>
                      <td className="py-1.5" style={{ color: 'oklch(0.42 0.04 261)' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link href="/contact" className="press inline-block font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>Get Directions →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Find advisor by program */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Match by Program Area</p>
            <h2 className="font-display font-black leading-none mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FIND YOUR ADVISOR</h2>
            <p style={{ fontSize: '1rem', color: 'oklch(0.45 0.04 261)', maxWidth: '58ch' }}>
              Advisors are assigned by division. Email <a href="mailto:advising@lawsonstate.edu" className="font-semibold hover:underline" style={{ color: 'var(--lscc-eyebrow)' }}>advising@lawsonstate.edu</a> with your program and student ID to be connected to the right advisor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADVISOR_TRACKS.map((t) => (
              <div key={t.division} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{t.division}</h3>
                <p style={{ fontSize: '0.82rem', color: 'oklch(0.50 0.03 261)', lineHeight: 1.6, marginBottom: '0.75rem' }}>{t.programs}</p>
                <div style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.05 261)' }}><span style={{ color: 'var(--lscc-eyebrow)', fontWeight: 700 }}>Location:</span> {t.campus}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.80)' }}>Not sure which division you belong to?</p>
            <a href="mailto:advising@lawsonstate.edu" className="press btn-shimmer font-bold px-6 py-2.5 rounded-lg whitespace-nowrap shrink-0" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.88rem' }}>
              Email Us — We Will Connect You
            </a>
          </div>
        </div>
      </section>

      {/* Degree pathway resources */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Program Guidance</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>DEGREE PATHWAYS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PATHWAYS.map((p) => (
              <Link key={p.label} href={p.href} className="group press flex flex-col gap-2 rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{p.label}</p>
                <p style={{ fontSize: '0.84rem', color: 'oklch(0.50 0.03 261)', lineHeight: 1.55 }}>{p.desc}</p>
                <span className="font-bold mt-auto" style={{ fontSize: '0.82rem', color: 'var(--lscc-eyebrow)' }}>View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advising events */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Where We Show Up</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>ADVISING EVENTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EVENTS.map((e) => (
              <div key={e.name} className="rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>{e.name}</h3>
                <p className="mb-5" style={{ fontSize: '0.90rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65 }}>{e.desc}</p>
                <a href={e.href} className="font-bold transition-opacity hover:opacity-70" style={{ fontSize: '0.85rem', color: 'var(--lscc-eyebrow)' }}>{e.action} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach teaser */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-9" style={{ background: 'oklch(0.22 0.17 261)' }}>
                <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Advising Success Network</p>
                <h2 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>THE IDEAL ADVISING EXPERIENCE</h2>
                <p style={{ fontSize: '0.93rem', color: 'oklch(1 0 0 / 0.68)', lineHeight: 1.75, maxWidth: '44ch' }}>
                  Lawson State advising is built on four pillars: knowing students deeply, mapping their ideal journey, identifying barriers before they derail progress, and delivering support as a coordinated team — not a single department.
                </p>
                <Link href="/advising/approach" className="press btn-shimmer inline-block mt-6 font-bold px-7 py-3 rounded-xl" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>
                  Explore Our Approach →
                </Link>
              </div>
              <div className="p-9 grid grid-cols-2 gap-4 content-start" style={{ background: 'oklch(0.97 0.015 263)' }}>
                {[
                  { n: '01', label: 'Know Your Students', short: 'Extended data + student voice' },
                  { n: '02', label: 'Map the Ideal Journey', short: 'Define success at every touchpoint' },
                  { n: '03', label: 'Identify Barriers', short: 'Surface friction before it escalates' },
                  { n: '04', label: 'Team Approach', short: 'Coordinated cross-department support' },
                ].map(item => (
                  <div key={item.n} className="rounded-xl p-4" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.06)' }}>
                    <div className="font-display font-black mb-1" style={{ fontSize: '1.5rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1 }}>{item.n}</div>
                    <p className="font-display font-black" style={{ fontSize: '0.85rem', color: 'oklch(0.22 0.17 261)' }}>{item.label}</p>
                    <p style={{ fontSize: '0.77rem', color: 'oklch(0.50 0.03 261)', marginTop: '0.2rem' }}>{item.short}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Advisors */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Master Advising Team</p>
              <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}>FOR ADVISORS</h2>
            </div>
            <Link href="/advising/approach" className="shrink-0 font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: 'oklch(0.79 0.19 78)' }}>
              Full ASN Framework →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Academic Catalog',         desc: 'Program requirements and degree maps',                     href: '/academics/catalog' },
              { label: 'Alabama Transfer (STARS)',  desc: 'AGSC articulation guide for 4-year schools',              href: '/academics/alabama-transfer' },
              { label: 'Student Personas',          desc: 'Six student types — needs, barriers, and ideal pathways', href: '/advising/approach' },
              { label: 'Barrier Identification',    desc: 'Financial, administrative, academic, tech, and life',     href: '/advising/approach#barriers' },
              { label: 'Advising Policies',         desc: 'Admissions requirements and forms',                       href: '/admissions/policies' },
              { label: 'Student Needs Assessment',  desc: 'Using data and student voice to guide outreach',          href: '/advising/approach' },
              { label: 'Tools & Resources',         desc: 'Degree Works · Banner · Mongoose · Teams · Canvas',       href: '/advising/approach' },
              { label: 'Submit Feedback',           desc: 'Report page errors or missing information',               href: 'mailto:advising@lawsonstate.edu?subject=Advising Page Feedback' },
            ].map((r) => (
              <a key={r.label} href={r.href} className="press rounded-2xl p-5 block transition-opacity hover:opacity-80" style={{ background: 'oklch(1 0 0 / 0.07)', border: '1px solid oklch(1 0 0 / 0.12)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '0.96rem', color: 'white' }}>{r.label}</p>
                <p style={{ fontSize: '0.82rem', color: 'oklch(1 0 0 / 0.55)' }}>{r.desc}</p>
              </a>
            ))}
          </div>
          <p style={{ fontSize: '0.85rem', color: 'oklch(1 0 0 / 0.45)' }}>
            Master Advising Group collaboration happens in Microsoft Teams. Contact <a href="mailto:advising@lawsonstate.edu" className="underline hover:opacity-70" style={{ color: 'oklch(0.79 0.19 78)' }}>advising@lawsonstate.edu</a> for a Teams invite.
          </p>
        </div>
      </section>

      {/* Contact strip + feedback */}
      <div style={{ background: 'oklch(0.16 0.10 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>General Advising</p>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em' }}>Questions? We respond within one business day.</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.55)', marginTop: '0.4rem' }}>
              advising@lawsonstate.edu · 205.929.2113 · Walk in Mon–Fri 8 AM – 5 PM
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href="mailto:advising@lawsonstate.edu" className="press btn-shimmer font-bold px-7 py-3.5 rounded-xl text-sm whitespace-nowrap" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Email Advising →
            </a>
            <a href="mailto:advising@lawsonstate.edu?subject=Advising Page Feedback" className="press font-semibold px-7 py-3.5 rounded-xl text-sm text-white whitespace-nowrap" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)' }}>
              Submit Page Feedback
            </a>
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
