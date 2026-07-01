'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import Overlay from '@/components/overlay'

// ── Static data ────────────────────────────────────────────────────

const DIVISIONS = [
  {
    key: 'general',
    label: 'General Advising',
    desc: 'Not sure where to start? Start here.',
    icon: '🎓',
    advisor: { name: 'Tamika Reynolds', initials: 'TR', title: 'General Academic Advisor', campus: 'Birmingham — R.A.C.E. Center', bio: 'Tamika has helped students at Lawson State navigate program selection, registration holds, and academic planning since 2018. She specializes in first-generation students and students returning after a gap.', specialties: ['First-gen students', 'Degree planning', 'Probation recovery', 'Adult learners'] },
  },
  {
    key: 'health',
    label: 'Health Sciences',
    desc: 'Nursing, Dental Hygiene, EMS, Allied Health',
    icon: '⚕️',
    advisor: { name: 'Marcus Webb', initials: 'MW', title: 'Health Sciences Advisor', campus: 'Birmingham — R.A.C.E. Center', bio: 'Marcus advises students across all Health Sciences programs. He can speak to NCLEX preparation, clinical hour requirements, waitlist navigation for competitive programs like Nursing, and bridge pathways to 4-year health programs.', specialties: ['Nursing pathway', 'Clinical hours', 'Allied Health certs', 'Transfer articulation'] },
  },
  {
    key: 'trades',
    label: 'Trades & CTE',
    desc: 'Mechatronics, HVAC, Welding, Automotive, Electrical',
    icon: '🔧',
    advisor: { name: 'Damon Okafor', initials: 'DO', title: 'CTE Academic Advisor', campus: 'Bessemer — S.P.A.C.E. Center', bio: 'Damon connects students to apprenticeships, employer partners, and industry certifications alongside their AAS degree. He works closely with the seven employer partners in the registered apprenticeship program.', specialties: ['Apprenticeships', 'Industry certs', 'AAS programs', 'Employer connections'] },
  },
  {
    key: 'transfer',
    label: 'Transfer Planning',
    desc: 'UAB, Alabama, Auburn — plan your move to a 4-year',
    icon: '🏛️',
    advisor: { name: 'Jasmine Carter', initials: 'JC', title: 'Transfer Planning Advisor', campus: 'Both Campuses', bio: "Jasmine specializes in STARS articulation, AGSC alignment, and building semester-by-semester plans that make transfer to any Alabama 4-year school seamless. She's available at both campuses.", specialties: ['STARS / AGSC', 'UAB / UA / Auburn', 'Credit evaluation', 'Semester planning'] },
  },
]

const MORNING  = ['8:00 AM','8:30 AM','9:00 AM','9:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM']
const AFTERNOON = ['1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM']
const DAY_SHORT  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

function workingDays(count: number): Date[] {
  const out: Date[] = []
  const d = new Date()
  d.setHours(0,0,0,0)
  while (out.length < count) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0 && d.getDay() !== 6) out.push(new Date(d))
  }
  return out
}

function isBooked(dateIdx: number, slotIdx: number) {
  return (dateIdx * 13 + slotIdx * 7) % 5 === 0
}

// ── Component ──────────────────────────────────────────────────────

type Div = typeof DIVISIONS[0]

export default function AdvisingBookPage() {
  const days = useMemo(() => workingDays(7), [])

  const [division, setDivision]     = useState<string | null>(null)
  const [dateIdx,  setDateIdx]      = useState<number | null>(null)
  const [slot,     setSlot]         = useState<string | null>(null)

  // Profile overlay
  const [profileOpen, setProfileOpen] = useState(false)
  const [profileDiv,  setProfileDiv]  = useState<Div | null>(null)

  // Booking overlay
  const [bookOpen, setBookOpen] = useState(false)
  const [bookStep, setBookStep] = useState<1 | 2>(1)
  const [form, setForm] = useState({ name: '', email: '', phone: '', studentId: '', note: '' })

  const selDiv = DIVISIONS.find(d => d.key === division) ?? null
  const selDay = dateIdx !== null ? days[dateIdx] : null

  function openProfile(div: Div) { setProfileDiv(div); setProfileOpen(true) }

  function pickSlot(time: string) {
    setSlot(time); setBookStep(1); setBookOpen(true)
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault(); setBookStep(2)
  }

  function resetBooking() {
    setBookOpen(false); setSlot(null); setBookStep(1)
    setForm({ name: '', email: '', phone: '', studentId: '', note: '' })
  }

  function pickDivision(key: string) {
    setDivision(key); setDateIdx(null); setSlot(null)
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative px-6 overflow-hidden" style={{ background: 'oklch(0.22 0.17 261)', minHeight: '28vh', display: 'flex', alignItems: 'flex-end', paddingTop: '7rem', paddingBottom: '3rem' }}>
        <HeroPhoto src="https://www.lawsonstate.edu/_resources/assets/img/commencement/Ashley_Lowe.webp" alt="A Lawson State student who found their path through advising" position="center 25%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/advising" className="hover:text-white transition-colors">Advising</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Book Appointment</span>
          </p>
          <h1 className="font-display font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}>
            BOOK AN APPOINTMENT
          </h1>
          <p className="mt-2" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.58)', maxWidth: '46ch' }}>
            Free advising — no wait list. Choose your advisor type, pick a time, you're confirmed.
          </p>
        </div>
      </section>

      <main className="py-12 px-6" style={{ background: 'oklch(0.95 0.03 255)', minHeight: '64vh' }}>
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Step 1: Division */}
          <div>
            <StepLabel n={1} done={!!division} label="Choose your advisor type" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
              {DIVISIONS.map(d => (
                <div key={d.key} className="relative">
                  <button
                    onClick={() => pickDivision(d.key)}
                    className="press w-full text-left rounded-2xl p-5 transition-all"
                    style={{
                      background: division === d.key ? 'oklch(0.22 0.17 261)' : 'white',
                      border: `2px solid ${division === d.key ? 'oklch(0.22 0.17 261)' : 'oklch(0 0 0 / 0.07)'}`,
                      boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)',
                    }}
                  >
                    <span className="text-2xl mb-3 block" aria-hidden>{d.icon}</span>
                    <p className="font-display font-black mb-1" style={{ fontSize: '0.95rem', color: division === d.key ? 'oklch(0.79 0.19 78)' : 'oklch(0.16 0.04 261)' }}>{d.label}</p>
                    <p style={{ fontSize: '0.78rem', color: division === d.key ? 'oklch(1 0 0 / 0.58)' : 'oklch(0.50 0.03 261)', lineHeight: 1.5 }}>{d.desc}</p>
                  </button>
                  <button
                    onClick={() => openProfile(d)}
                    className="absolute top-3 right-3 rounded-lg px-2 py-0.5 text-xs font-semibold transition-opacity hover:opacity-70"
                    style={{ background: division === d.key ? 'oklch(1 0 0 / 0.12)' : 'oklch(0.93 0.03 261)', color: division === d.key ? 'white' : 'oklch(0.40 0.04 261)' }}
                    aria-label={`View ${d.advisor.name}'s profile`}
                  >
                    Profile
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Advisor card */}
          {selDiv && (
            <div className="rounded-2xl p-5 flex items-center gap-5" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-black" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.9rem' }}>
                {selDiv.advisor.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-black truncate" style={{ fontSize: '0.96rem', color: 'oklch(0.16 0.04 261)' }}>{selDiv.advisor.name}</p>
                <p className="truncate" style={{ fontSize: '0.82rem', color: 'oklch(0.48 0.04 261)' }}>{selDiv.advisor.title} · {selDiv.advisor.campus}</p>
              </div>
              <button onClick={() => openProfile(selDiv)} className="shrink-0 font-semibold text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--lscc-eyebrow)' }}>
                View profile →
              </button>
            </div>
          )}

          {/* Step 2: Date */}
          {division && (
            <div>
              <StepLabel n={2} done={dateIdx !== null} label="Pick a date" />
              <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
                {days.map((day, i) => (
                  <button
                    key={i}
                    onClick={() => setDateIdx(i)}
                    className="press shrink-0 flex flex-col items-center rounded-2xl px-4 py-3 gap-0.5 transition-all"
                    style={{
                      background: dateIdx === i ? 'oklch(0.22 0.17 261)' : 'white',
                      border: `2px solid ${dateIdx === i ? 'oklch(0.22 0.17 261)' : 'oklch(0 0 0 / 0.07)'}`,
                      minWidth: '68px',
                    }}
                  >
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: dateIdx === i ? 'oklch(0.79 0.19 78)' : 'oklch(0.55 0.03 261)' }}>
                      {DAY_SHORT[day.getDay()]}
                    </span>
                    <span className="font-display font-black" style={{ fontSize: '1.5rem', color: dateIdx === i ? 'white' : 'oklch(0.16 0.04 261)', lineHeight: 1.1 }}>
                      {day.getDate()}
                    </span>
                    <span style={{ fontSize: '0.65rem', color: dateIdx === i ? 'oklch(1 0 0 / 0.50)' : 'oklch(0.55 0.03 261)' }}>
                      {MONTH_SHORT[day.getMonth()]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Time slots */}
          {division && dateIdx !== null && selDay && (
            <div>
              <StepLabel n={3} done={false} label={`Available times — ${DAY_SHORT[selDay.getDay()]}, ${MONTH_SHORT[selDay.getMonth()]} ${selDay.getDate()}`} />
              <div className="mt-5 rounded-2xl overflow-hidden" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <SlotGroup label="Morning" slots={MORNING} dateIdx={dateIdx} offset={0} onPick={pickSlot} />
                <SlotGroup label="Afternoon" slots={AFTERNOON} dateIdx={dateIdx} offset={8} onPick={pickSlot} />
              </div>
              <p className="mt-3 flex items-center gap-2" style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.03 261)' }}>
                <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>9:30 AM</span> = unavailable · Click any open slot to book
              </p>
            </div>
          )}

          {/* Walk-in nudge */}
          {!division && (
            <div className="rounded-2xl p-7 text-center" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
              <p className="font-display font-black mb-2" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>Prefer to walk in?</p>
              <p style={{ fontSize: '0.9rem', color: 'oklch(0.45 0.04 261)', maxWidth: '42ch', margin: '0 auto', lineHeight: 1.65 }}>
                Walk-ins are welcome Monday–Friday, 8 AM–5 PM at both campuses. No appointment needed.
              </p>
              <a href="mailto:advising@lawsonstate.edu" className="press inline-block mt-5 font-bold px-6 py-3 rounded-xl" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.9rem' }}>
                Email Advising →
              </a>
            </div>
          )}
        </div>
      </main>

      {/* ── Advisor profile overlay ───────────────────────────────── */}
      <Overlay open={profileOpen} onClose={() => setProfileOpen(false)} title={profileDiv?.advisor.name} size="sm">
        {profileDiv && (
          <div className="p-6 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl shrink-0" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)' }}>
                {profileDiv.advisor.initials}
              </div>
              <div>
                <p className="font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{profileDiv.advisor.name}</p>
                <p style={{ fontSize: '0.83rem', color: 'oklch(0.48 0.04 261)' }}>{profileDiv.advisor.title}</p>
                <p style={{ fontSize: '0.80rem', color: 'oklch(0.55 0.03 261)' }}>{profileDiv.advisor.campus}</p>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.7 }}>{profileDiv.advisor.bio}</p>
            <div>
              <p className="font-semibold mb-2" style={{ fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.03 261)' }}>Specialties</p>
              <div className="flex flex-wrap gap-2">
                {profileDiv.advisor.specialties.map(s => (
                  <span key={s} className="font-medium px-3 py-1 rounded-full" style={{ background: 'oklch(0.93 0.03 261)', color: 'oklch(0.30 0.06 261)', fontSize: '0.80rem' }}>{s}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-1">
              <button
                onClick={() => { setProfileOpen(false); pickDivision(profileDiv.key) }}
                className="press btn-shimmer flex-1 font-bold py-3 rounded-xl text-sm"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
              >
                Book with {profileDiv.advisor.name.split(' ')[0]} →
              </button>
            </div>
          </div>
        )}
      </Overlay>

      {/* ── Booking form overlay ──────────────────────────────────── */}
      <Overlay
        open={bookOpen}
        onClose={resetBooking}
        title={bookStep === 2 ? undefined : 'Confirm Your Appointment'}
        size="md"
      >
        {bookStep === 1 ? (
          <form onSubmit={submitForm} className="p-6 space-y-5">
            {/* Summary card */}
            <div className="rounded-xl p-4" style={{ background: 'oklch(0.95 0.03 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
              <p className="font-display font-black" style={{ fontSize: '0.92rem', color: 'oklch(0.16 0.04 261)' }}>
                {selDiv?.advisor.name} · {selDiv?.label}
              </p>
              <p style={{ fontSize: '0.84rem', color: 'oklch(0.45 0.04 261)', marginTop: '0.2rem' }}>
                {selDay ? `${DAY_SHORT[selDay.getDay()]}, ${MONTH_SHORT[selDay.getMonth()]} ${selDay.getDate()}` : ''} at {slot}
              </p>
              <p style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.03 261)', marginTop: '0.15rem' }}>{selDiv?.advisor.campus}</p>
            </div>

            {/* Fields */}
            {([
              { id: 'name',      label: 'Full Name',                   type: 'text',  req: true },
              { id: 'email',     label: 'Email Address',                type: 'email', req: true },
              { id: 'phone',     label: 'Phone (optional)',              type: 'tel',   req: false },
              { id: 'studentId', label: 'Student ID (if enrolled)',     type: 'text',  req: false },
            ] as const).map(f => (
              <div key={f.id}>
                <label className="block font-semibold mb-1.5" style={{ fontSize: '0.80rem', color: 'oklch(0.30 0.04 261)' }} htmlFor={`book-${f.id}`}>
                  {f.label}{f.req && <span aria-hidden style={{ color: 'oklch(0.55 0.22 29)', marginLeft: '3px' }}>*</span>}
                </label>
                <input
                  id={`book-${f.id}`}
                  type={f.type}
                  required={f.req}
                  value={form[f.id]}
                  onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                  className="w-full rounded-xl px-4 py-3 outline-none"
                  style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', fontSize: '0.92rem', background: 'oklch(0.98 0.01 255)' }}
                />
              </div>
            ))}
            <div>
              <label className="block font-semibold mb-1.5" style={{ fontSize: '0.80rem', color: 'oklch(0.30 0.04 261)' }} htmlFor="book-note">
                What would you like to discuss? (optional)
              </label>
              <textarea
                id="book-note"
                rows={3}
                value={form.note}
                onChange={e => setForm(p => ({ ...p, note: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 outline-none resize-none"
                style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', fontSize: '0.92rem', background: 'oklch(0.98 0.01 255)' }}
                placeholder="Degree plan, transfer credits, course holds..."
              />
            </div>
            <button type="submit" className="press btn-shimmer w-full font-bold py-4 rounded-xl" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}>
              Confirm Appointment →
            </button>
            <p className="text-center" style={{ fontSize: '0.78rem', color: 'oklch(0.55 0.03 261)' }}>
              Confirmation sent to your email · Cancel up to 2 hours before via <a href="mailto:advising@lawsonstate.edu" className="underline">advising@lawsonstate.edu</a>
            </p>
          </form>
        ) : (
          /* Success */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center" style={{ background: 'oklch(0.22 0.17 261)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="oklch(0.79 0.19 78)" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-black" style={{ fontSize: '1.5rem', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}>You're confirmed!</h2>
              <p style={{ fontSize: '0.88rem', color: 'oklch(0.45 0.04 261)', marginTop: '0.3rem' }}>Appointment with {selDiv?.advisor.name}</p>
            </div>
            <div className="rounded-xl p-5 text-left space-y-2" style={{ background: 'oklch(0.95 0.03 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
              {[
                ['Date & time', `${selDay ? `${DAY_SHORT[selDay.getDay()]}, ${MONTH_SHORT[selDay.getMonth()]} ${selDay.getDate()}` : ''} at ${slot}`],
                ['Location', selDiv?.advisor.campus ?? ''],
                ['Confirmation to', form.email],
              ].map(([k, v]) => (
                <p key={k} style={{ fontSize: '0.86rem', color: 'oklch(0.40 0.04 261)' }}>
                  <span className="font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>{k}:</span> {v}
                </p>
              ))}
            </div>
            <p style={{ fontSize: '0.83rem', color: 'oklch(0.50 0.03 261)', lineHeight: 1.65 }}>
              Need to cancel? Email <a href="mailto:advising@lawsonstate.edu" className="underline" style={{ color: 'var(--lscc-eyebrow)' }}>advising@lawsonstate.edu</a> at least 2 hours before.
            </p>
            <div className="flex gap-3">
              <button onClick={resetBooking} className="press flex-1 font-bold py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)' }}>
                Book Another
              </button>
              <Link href="/advising" onClick={resetBooking} className="press flex-1 font-semibold py-3.5 rounded-xl text-sm text-center" style={{ border: '2px solid oklch(0 0 0 / 0.12)', color: 'oklch(0.35 0.04 261)' }}>
                Back to Advising
              </Link>
            </div>
          </div>
        )}
      </Overlay>

      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}

// ── Sub-components ─────────────────────────────────────────────────

function StepLabel({ n, done, label }: { n: number; done: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-7 h-7 rounded-full font-black text-sm flex items-center justify-center shrink-0" style={{ background: done ? 'oklch(0.22 0.17 261)' : 'oklch(0.79 0.19 78)', color: done ? 'oklch(0.79 0.19 78)' : 'oklch(0.11 0.03 261)' }}>
        {done ? '✓' : n}
      </span>
      <h2 className="font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{label}</h2>
    </div>
  )
}

function SlotGroup({ label, slots, dateIdx, offset, onPick }: { label: string; slots: string[]; dateIdx: number; offset: number; onPick: (t: string) => void }) {
  return (
    <>
      <div className="px-5 py-3" style={{ borderBottom: '1px solid oklch(0 0 0 / 0.06)' }}>
        <p className="font-semibold" style={{ fontSize: '0.80rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(0.45 0.03 261)' }}>{label}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4">
        {slots.map((time, i) => {
          const booked = isBooked(dateIdx, i + offset)
          return (
            <button
              key={time}
              disabled={booked}
              onClick={() => !booked && onPick(time)}
              className="press rounded-xl py-2.5 font-semibold text-sm transition-all"
              style={{
                background:      booked ? 'oklch(0.93 0.01 261)' : 'oklch(0.96 0.03 255)',
                color:           booked ? 'oklch(0.68 0.02 261)' : 'oklch(0.20 0.12 261)',
                border:         `1.5px solid ${booked ? 'transparent' : 'oklch(0.22 0.17 261 / 0.22)'}`,
                cursor:          booked ? 'not-allowed' : 'pointer',
                textDecoration:  booked ? 'line-through' : 'none',
                opacity:         booked ? 0.45 : 1,
              }}
            >
              {time}
            </button>
          )
        })}
      </div>
    </>
  )
}
