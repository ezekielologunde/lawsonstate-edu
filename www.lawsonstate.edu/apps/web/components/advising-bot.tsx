'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'

// ── Booking data (booking is ONE feature of the router) ───────────
const DIVS = [
  { key: 'general',  label: 'General Advising',  icon: '🎓', advisor: 'Tamika Reynolds' },
  { key: 'health',   label: 'Health Sciences',   icon: '⚕️', advisor: 'Marcus Webb' },
  { key: 'trades',   label: 'Trades & CTE',      icon: '🔧', advisor: 'Damon Okafor' },
  { key: 'transfer', label: 'Transfer Planning', icon: '🏛️', advisor: 'Jasmine Carter' },
]
const DAYS  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const MONS  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const TIMES = ['8:00 AM','9:00 AM','10:00 AM','10:30 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM']
const BOOKED_IDX = new Set([1, 4, 7])

const MYLAWSON = 'https://experience.elluciancloud.com/lcc45/'
const REGISTER = 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON'

// Quick-start chips (feed straight back into the router as text)
const STARTERS = ['Apply', 'Pay bill', 'Financial aid', 'Book advising', 'Find a program', 'Tutoring']

let _uid = 0
const uid = () => ++_uid

function workDays(n: number): Date[] {
  const out: Date[] = []
  const d = new Date(); d.setHours(0, 0, 0, 0)
  while (out.length < n) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() > 0 && d.getDay() < 6) out.push(new Date(d))
  }
  return out
}

type Step = 'router' | 'division' | 'date' | 'slot' | 'form' | 'done'
type Action = { label: string; href: string; external?: boolean }
interface Msg {
  id: number
  from: 'bot' | 'user'
  text: string
  action?: Action
  links?: { label: string; href: string }[]
}

export default function AdvisingBot() {
  const [open,    setOpen]    = useState(false)
  const [msgs,    setMsgs]    = useState<Msg[]>([])
  const [step,    setStep]    = useState<Step>('router')
  const [div,     setDiv]     = useState<string | null>(null)
  const [days]                = useState(() => workDays(5))
  const [dateIdx, setDateIdx] = useState<number | null>(null)
  const [slot,    setSlot]    = useState<string | null>(null)
  const [form,    setForm]    = useState({ name: '', email: '' })
  const [inited,  setInited]  = useState(false)
  const [input,   setInput]   = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [msgs, step])

  const bot  = (text: string) => setMsgs(p => [...p, { id: uid(), from: 'bot',  text }])
  const user = (text: string) => setMsgs(p => [...p, { id: uid(), from: 'user', text }])
  const botAction = (text: string, action: Action) => setMsgs(p => [...p, { id: uid(), from: 'bot', text, action }])
  const after = (fn: () => void, ms = 340) => setTimeout(fn, ms)

  function launch() {
    setOpen(true)
    if (!inited) {
      setInited(true)
      after(() => bot("I'm Cora, your Lawson State Cougar guide — strong, fast, here to help. Tell me what you need: find a page, get a quick answer, or book you an advisor."), 160)
    }
    setTimeout(() => inputRef.current?.focus(), 250)
  }

  // ── Router: match free text to an intent, else search the site ──
  async function route(raw: string) {
    const text = raw.trim()
    if (!text) return
    user(text)
    setInput('')
    const q = ` ${text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ')} `
    const has = (...ws: string[]) => ws.some(w => q.includes(` ${w} `) || q.includes(w))

    // Ordered — most specific first.
    if (has('pay', 'bill', 'tuition', 'balance', 'mylawson', 'statement'))
      return after(() => botAction('Log in to MyLawson to view and pay your balance.', { label: 'Open MyLawson', href: MYLAWSON, external: true }))
    if (has('register', 'registration', 'add a class', 'add class', 'enroll in', 'sign up for'))
      return after(() => botAction('Registration (and add/drop) happens in the ACCS system.', { label: 'Register for Classes', href: REGISTER, external: true }))
    if (has('apply', 'application', 'admission', 'admissions', 'become a student', 'new student', 'get in'))
      return after(() => botAction("Here's how to apply — it's free and takes about 15 minutes.", { label: 'Apply Now', href: '/admissions/apply' }))
    if (has('fafsa'))
      return after(() => botAction('File your FAFSA with school code 001033. Here’s the step-by-step guide.', { label: 'FAFSA Guide', href: '/financial-aid/fafsa' }))
    if (has('scholarship', 'scholarships'))
      return after(() => botAction('Lawson State awards $1.5M in scholarships each year.', { label: 'Scholarships', href: '/financial-aid/scholarships' }))
    if (has('financial aid', 'aid', 'grant', 'grants', 'pell', 'afford', 'cost', 'help paying'))
      return after(() => botAction('Most students receive aid. Here’s grants, Pell, and work-study.', { label: 'Financial Aid', href: '/financial-aid' }))
    if (has('tutor', 'tutoring', 'study help', 'writing center', 'math help', 'behind in class', 'struggling'))
      return after(() => botAction('Free tutoring is available 24/7 through the R.A.C.E. Center and Tutor.com.', { label: 'Tutoring & Support', href: '/student-resources/tutoring' }))
    if (has('book', 'appointment', 'schedule', 'meet with', 'make an appointment', 'set up a time'))
      return startBooking()
    if (has('transfer', 'articulation', 'four year', 'university'))
      return after(() => botAction('Most credits transfer. Here’s how it works with AGSC / STARS.', { label: 'Transfer Students', href: '/admissions/transfer' }))
    if (has('transcript', 'transcripts', 'records', 'my grades', 'official copy'))
      return after(() => botAction('Request official or unofficial transcripts here.', { label: 'Transcript Requests', href: '/student-resources/transcripts' }))
    if (has('advisor', 'advising', 'degree plan', 'which major', 'what classes', 'what should i take'))
      return after(() => botAction('Advising is free — no wait list. Learn more, or say “book advising” and I’ll set it up.', { label: 'Academic Advising', href: '/advising' }))
    if (has('veteran', 'veterans', 'gi bill', 'military', 'va'))
      return after(() => botAction('We accept the GI Bill and military benefits. Here’s Veterans Services.', { label: 'Veterans & Military', href: '/admissions/veterans' }))
    if (has('workforce', 'job training', 'certification', 'continuing ed', 'career', 'fast cert'))
      return after(() => botAction('Earn an industry credential in weeks, not years.', { label: 'Workforce Training', href: '/workforce' }))
    if (has('calendar', 'event', 'events', 'deadline', 'important dates'))
      return after(() => botAction('Here’s the events & academic calendar.', { label: 'View Calendar', href: '/calendar' }))
    if (has('club', 'clubs', 'housing', 'athletic', 'athletics', 'sport', 'sports', 'cougars', 'campus life'))
      return after(() => botAction('Clubs, athletics, housing, and safety — all here.', { label: 'Campus Life', href: '/campus-life' }))
    if (has('contact', 'phone', 'hours', 'address', 'email', 'location', 'directions', 'visit'))
      return after(() => botAction('Reach us by phone or email, or visit either campus.', { label: 'Contact & Hours', href: '/contact' }))
    if (has('program', 'programs', 'major', 'majors', 'degree', 'certificate', 'nursing', 'welding', 'business', 'cyber', 'dental'))
      return after(() => botAction('Browse 200+ programs — filter by area, credential, and format.', { label: 'Find a Program', href: '/programs' }))

    // Tier 2 — fall back to the on-site search index.
    try {
      const res  = await fetch(`/api/search?q=${encodeURIComponent(text)}`)
      const json = await res.json()
      const results: { url: string; page_title: string }[] = (json.results ?? []).slice(0, 3)
      if (results.length) {
        setMsgs(p => [...p, { id: uid(), from: 'bot', text: `Here’s what I found for “${text}”:`, links: results.map(r => ({ label: r.page_title, href: r.url })) }])
      } else {
        setMsgs(p => [...p, { id: uid(), from: 'bot', text: `I’m not sure I have that one. Try a quick option below, or reach a person.`, action: { label: 'Contact Us', href: '/contact' } }])
      }
    } catch {
      botAction('Search is unavailable right now — you can still reach us directly.', { label: 'Contact Us', href: '/contact' })
    }
  }

  // ── Booking sub-flow (unchanged machinery) ──
  function startBooking() { after(() => { bot('Sure — what type of advising do you need?'); setStep('division') }) }
  function onDiv(key: string) {
    const d = DIVS.find(x => x.key === key)!
    user(d.label); setDiv(key)
    after(() => { bot(`${d.icon} I'll set you up with ${d.advisor}. Which day this week works?`); setStep('date') })
  }
  function onDate(i: number) {
    const d = days[i]
    user(`${DAYS[d.getDay()]}, ${MONS[d.getMonth()]} ${d.getDate()}`); setDateIdx(i)
    after(() => { bot('Here are the available times — pick one:'); setStep('slot') })
  }
  function onSlot(t: string) {
    user(t); setSlot(t)
    after(() => { bot('Almost done! Your name and email to lock in the spot.'); setStep('form') })
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const d = DIVS.find(x => x.key === div)!
    const day = days[dateIdx!]
    user(`${form.name} · ${form.email}`)
    after(() => {
      bot(`You're confirmed, ${form.name.split(' ')[0]}! See you ${DAYS[day.getDay()]}, ${MONS[day.getMonth()]} ${day.getDate()} at ${slot} with ${d.advisor.split(' ')[0]}.`)
      setStep('done')
      after(() => bot('Anything else? Just tell me what you need.'), 700)
    })
  }

  const selDiv = DIVS.find(x => x.key === div)
  const selDay = dateIdx !== null ? days[dateIdx] : null
  const routing = step === 'router' || step === 'done'

  return (
    <>
      <style>{`
        @keyframes lscc-bot-rise { from { opacity:0; transform:translateY(10px) scale(0.97) } to { opacity:1; transform:none } }
        @media (prefers-reduced-motion: reduce) { .lscc-bot-anim { animation: none !important } }
      `}</style>

      {/* Floating launcher — single FAB (raised on desktop to clear the sticky bar). */}
      <div className="fixed bottom-20 right-4 lg:bottom-24 lg:right-6 z-[65] flex flex-col items-end gap-2.5">
        {!open && !inited && (
          <div
            className="lscc-bot-anim rounded-2xl px-4 py-2 shadow-lg font-semibold text-sm whitespace-nowrap"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', animation: 'lscc-bot-rise 0.4s 0.8s both' }}
          >
            Ask Cora
          </div>
        )}
        <button
          onClick={() => open ? setOpen(false) : launch()}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform active:scale-95 hover:scale-105"
          style={{ background: 'oklch(0.22 0.17 261)', border: '2.5px solid oklch(0.79 0.19 78 / 0.35)' }}
          aria-label={open ? 'Close Cora assistant' : 'Open Cora — Lawson State assistant'}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.79 0.19 78)" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="oklch(0.79 0.19 78)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          className="lscc-bot-anim fixed z-[64] flex flex-col overflow-hidden rounded-2xl"
          style={{
            bottom: 'calc(5rem + 3.5rem + 0.75rem)', right: '1rem',
            width: 'min(370px, calc(100vw - 2rem))', height: 'min(560px, 80dvh)',
            background: 'white', boxShadow: '0 24px 72px oklch(0.10 0.12 261 / 0.32)',
            border: '1px solid oklch(0 0 0 / 0.09)', animation: 'lscc-bot-rise 0.22s cubic-bezier(0.32,0,0.17,1) both',
          }}
          role="dialog"
          aria-label="Cora — Lawson State assistant"
          aria-modal="false"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 shrink-0" style={{ background: 'oklch(0.22 0.17 261)', borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black shrink-0" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}>C</div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-white leading-none" style={{ fontSize: '0.88rem' }}>Cora</p>
              <p style={{ fontSize: '0.68rem', color: 'oklch(1 0 0 / 0.48)', marginTop: '2px' }}>Your Lawson State Cougar guide</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'oklch(0.72 0.18 155)' }} aria-hidden />
              <span style={{ fontSize: '0.66rem', color: 'oklch(1 0 0 / 0.38)' }}>Online</span>
            </div>
          </div>

          {/* Message list */}
          <div ref={scrollRef} role="log" aria-live="polite" className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: 'oklch(0.974 0.008 263)' }}>
            {msgs.map(m => (
              <div key={m.id}>
                <div className={`flex ${m.from === 'user' ? 'justify-end' : 'items-end gap-2'}`}>
                  {m.from === 'bot' && (
                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 font-black leading-none" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.65rem' }}>C</div>
                  )}
                  <div className="px-3.5 py-2.5 max-w-[82%]" style={{
                    background: m.from === 'bot' ? 'white' : 'oklch(0.22 0.17 261)',
                    color: m.from === 'bot' ? 'oklch(0.16 0.04 261)' : 'white',
                    fontSize: '0.85rem', lineHeight: 1.55,
                    borderRadius: m.from === 'bot' ? '4px 14px 14px 14px' : '14px 14px 4px 14px',
                    boxShadow: m.from === 'bot' ? '0 1px 4px oklch(0 0 0 / 0.07)' : 'none',
                  }}>
                    {m.text}
                  </div>
                </div>
                {/* Primary action button */}
                {m.action && (
                  <div className="mt-1.5 ml-7">
                    {m.action.external ? (
                      <a href={m.action.href} target="_blank" rel="noopener noreferrer" className="press inline-flex items-center gap-1.5 font-bold px-3.5 py-2 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                        {m.action.label} ↗<span className="sr-only"> (opens in new tab)</span>
                      </a>
                    ) : (
                      <a href={m.action.href} className="press inline-flex items-center gap-1.5 font-bold px-3.5 py-2 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                        {m.action.label} →
                      </a>
                    )}
                  </div>
                )}
                {/* Search-result links */}
                {m.links && (
                  <div className="mt-1.5 ml-7 flex flex-col gap-1">
                    {m.links.map(l => (
                      <a key={l.href} href={l.href} className="press inline-flex items-center gap-1.5 font-semibold px-3 py-1.5 rounded-lg text-sm" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.08)', color: 'oklch(0.30 0.12 263)' }}>
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Confirmation card */}
            {step === 'done' && selDay && selDiv && (
              <div className="rounded-2xl p-4" style={{ background: 'white', border: '1.5px solid oklch(0.79 0.19 78 / 0.28)', boxShadow: '0 2px 10px oklch(0 0 0 / 0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span aria-hidden>✅</span>
                  <p className="font-display font-black" style={{ fontSize: '0.88rem', color: 'oklch(0.16 0.04 261)' }}>Appointment Confirmed</p>
                </div>
                <div className="space-y-1" style={{ fontSize: '0.78rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>
                  <p><span className="font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>With:</span> {selDiv.advisor}</p>
                  <p><span className="font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>When:</span> {DAYS[selDay.getDay()]}, {MONS[selDay.getMonth()]} {selDay.getDate()} at {slot}</p>
                  <p><span className="font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>Sent to:</span> {form.email}</p>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="px-4 py-3 shrink-0" style={{ background: 'white', borderTop: '1px solid oklch(0 0 0 / 0.07)' }}>
            {routing && (
              <>
                {msgs.length <= 1 && (
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {STARTERS.map(s => (
                      <button key={s} onClick={() => route(s)} className="press rounded-full px-3 py-1 font-semibold" style={{ fontSize: '0.72rem', background: 'oklch(0.95 0.03 255)', color: 'oklch(0.22 0.12 261)', border: '1.5px solid oklch(0.22 0.17 261 / 0.14)' }}>
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                <form onSubmit={e => { e.preventDefault(); route(input) }} className="flex gap-2">
                  <label htmlFor="cora-input" className="sr-only">Ask Cora</label>
                  <input
                    id="cora-input" ref={inputRef} type="text" value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type what you need… e.g. “pay my bill”"
                    className="flex-1 rounded-xl px-3 py-2.5 outline-none text-sm"
                    style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', background: 'oklch(0.98 0.01 255)' }}
                  />
                  <button type="submit" aria-label="Send" className="press shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'oklch(0.22 0.17 261)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="oklch(0.79 0.19 78)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              </>
            )}

            {step === 'division' && (
              <div className="grid grid-cols-2 gap-1.5">
                {DIVS.map(d => (
                  <button key={d.key} onClick={() => onDiv(d.key)} className="press rounded-xl py-2 px-3 text-left font-semibold" style={{ fontSize: '0.78rem', background: 'oklch(0.95 0.03 255)', color: 'oklch(0.20 0.12 261)', border: '1.5px solid oklch(0.22 0.17 261 / 0.14)' }}>
                    {d.icon} {d.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'date' && (
              <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                {days.map((d, i) => (
                  <button key={i} onClick={() => onDate(i)} className="press shrink-0 flex flex-col items-center rounded-xl px-3 py-2 gap-0.5" style={{ background: 'oklch(0.95 0.03 255)', border: '1.5px solid oklch(0.22 0.17 261 / 0.14)', minWidth: '52px' }}>
                    <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(0.55 0.03 261)' }}>{DAYS[d.getDay()]}</span>
                    <span className="font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)', lineHeight: 1.1 }}>{d.getDate()}</span>
                    <span style={{ fontSize: '0.56rem', color: 'oklch(0.55 0.03 261)' }}>{MONS[d.getMonth()]}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 'slot' && (
              <div className="grid grid-cols-3 gap-1.5">
                {TIMES.map((t, i) => {
                  const booked = BOOKED_IDX.has(i)
                  return (
                    <button key={t} disabled={booked} onClick={() => !booked && onSlot(t)} className="press rounded-lg py-1.5 font-semibold" style={{
                      fontSize: '0.72rem',
                      background: booked ? 'oklch(0.93 0.01 261)' : 'oklch(0.95 0.03 255)',
                      color: booked ? 'oklch(0.65 0.02 261)' : 'oklch(0.20 0.12 261)',
                      border: `1px solid ${booked ? 'transparent' : 'oklch(0.22 0.17 261 / 0.16)'}`,
                      opacity: booked ? 0.45 : 1, cursor: booked ? 'not-allowed' : 'pointer', textDecoration: booked ? 'line-through' : 'none',
                    }}>{t}</button>
                  )
                })}
              </div>
            )}

            {step === 'form' && (
              <form onSubmit={onSubmit} className="space-y-2">
                <input required type="text" placeholder="Full name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full rounded-xl px-3 py-2.5 outline-none text-sm" style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', background: 'oklch(0.98 0.01 255)' }} />
                <input required type="email" placeholder="Email address" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full rounded-xl px-3 py-2.5 outline-none text-sm" style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', background: 'oklch(0.98 0.01 255)' }} />
                <button type="submit" className="press w-full font-bold py-2.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>Confirm Appointment →</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
