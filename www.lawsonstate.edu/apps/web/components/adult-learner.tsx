'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const STATS = [
  { value: 12, suffix: ' mo', label: 'avg time to certificate' },
  { value: 94, suffix: '%',   label: 'of grads employed in field' },
  { value: 0,  prefix: '$',  suffix: ' out-of-pocket with FAFSA*', label: '' },
]

const PROGRAMS = [
  { title: 'Healthcare',        items: ['CNA', 'Phlebotomy', 'Medical Coding', 'Surgical Tech'],         icon: '⚕' },
  { title: 'Skilled Trades',    items: ['Welding', 'HVAC', 'Electrical Technology', 'CDL'],               icon: '⚙' },
  { title: 'Business & Tech',   items: ['Medical Office Mgmt', 'Computer Science', 'Accounting Tech', 'Cybersecurity'], icon: '💼' },
  { title: 'Early Education',   items: ['Early Childhood Ed', 'Child Development', 'Pre-K Teaching', 'CDA Credential'], icon: '📚' },
]

const SCHEDULES = [
  { day: 'Mon / Wed', time: '6:00 PM – 9:00 PM', label: 'Evening' },
  { day: 'Tue / Thu', time: '6:00 PM – 9:00 PM', label: 'Evening' },
  { day: 'Saturday',  time: '8:00 AM – 1:00 PM', label: 'Weekend' },
  { day: 'Online',    time: 'Anytime, any device', label: 'Hybrid' },
]

const NAVY = 'oklch(0.13 0.05 261)'
const GOLD = 'oklch(0.79 0.19 78)'
const GT   = 'oklch(0.11 0.03 261)'
const MID  = 'oklch(0.20 0.08 261)'

function useCounter(target: number, prefix = '', suffix = '') {
  const [val, setVal] = useState(0)
  const ref  = useRef<HTMLDivElement>(null)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(target); return }
      const dur = 1400, start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / dur)
        const ease = 1 - Math.pow(1 - t, 3)
        setVal(Math.round(target * ease))
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [target])
  return { ref, display: `${prefix}${val}${suffix}` }
}

function StatCounter({ value, prefix = '', suffix = '', label }: typeof STATS[0]) {
  const { ref, display } = useCounter(value, prefix, suffix)
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.04em', color: GOLD }}>{display}</div>
      {label && <div style={{ fontSize: '0.82rem', color: 'oklch(1 0 0 / 0.60)', marginTop: '0.4rem', lineHeight: 1.4 }}>{label}</div>}
    </div>
  )
}

export default function AdultLearner() {
  const sectionRef = useRef<HTMLElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect() } }, { threshold: 0.06 })
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} aria-label="Adult Learner Programs" style={{ background: NAVY, paddingBlock: '5.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orbs */}
      <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-5%', width: 'min(600px, 50vw)', height: 'min(600px, 50vw)', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '0%', left: '-8%', width: 'min(400px, 38vw)', height: 'min(400px, 38vw)', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.08) 0%, transparent 70%)', filter: 'blur(48px)', pointerEvents: 'none' }} />

      <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative' }}>

        {/* Header */}
        <div className="mb-14 scroll-reveal">
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: GOLD, textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.6rem' }}>
            For Working Adults
          </p>
          <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', letterSpacing: '-0.04em', color: 'white', marginBottom: '1rem' }}>
            WORK. LEARN.<br />
            <span style={{ color: GOLD }}>ADVANCE.</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.72, color: 'oklch(1 0 0 / 0.65)', maxWidth: '52ch' }}>
            You have a job. Maybe a family. You can&apos;t stop your life to go back to school. Lawson State built programs that fit around you — not the other way around.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-14 pb-14" style={{ borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}>
          {STATS.map(s => <StatCounter key={s.label || s.suffix} {...s} />)}
        </div>

        {/* Two-column: programs + schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 mb-14">

          {/* Programs grid */}
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.38)', fontWeight: 700, marginBottom: '1rem' }}>
              In-Demand Programs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-grid">
              {PROGRAMS.map((prog, i) => (
                <div
                  key={prog.title}
                  className="card-lift rounded-2xl p-5"
                  style={{
                    background: MID,
                    border: '1px solid oklch(1 0 0 / 0.08)',
                    opacity: vis ? 1 : 0,
                    transform: vis ? 'none' : 'translateY(20px)',
                    transition: `opacity .6s ease ${i * 0.08}s, transform .6s ease ${i * 0.08}s`,
                  }}
                >
                  <div className="mb-3 text-2xl" aria-hidden>{prog.icon}</div>
                  <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: '0.95rem', letterSpacing: '-0.01em' }}>{prog.title}</h3>
                  <ul className="flex flex-col gap-1.5">
                    {prog.items.map(item => (
                      <li key={item} style={{ fontSize: '0.82rem', color: 'oklch(1 0 0 / 0.60)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span aria-hidden style={{ width: '4px', height: '4px', borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule card */}
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.38)', fontWeight: 700, marginBottom: '1rem' }}>
              When You Can Actually Come
            </p>
            <div className="rounded-2xl overflow-hidden" style={{ background: MID, border: '1px solid oklch(1 0 0 / 0.08)' }}>
              {SCHEDULES.map((s, i) => (
                <div
                  key={s.day}
                  style={{
                    padding: '1rem 1.25rem',
                    borderBottom: i < SCHEDULES.length - 1 ? '1px solid oklch(1 0 0 / 0.07)' : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
                  }}
                >
                  <div>
                    <div className="font-semibold text-white" style={{ fontSize: '0.88rem' }}>{s.day}</div>
                    <div style={{ fontSize: '0.75rem', color: 'oklch(1 0 0 / 0.50)', marginTop: '1px' }}>{s.time}</div>
                  </div>
                  <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '999px', background: 'oklch(0.79 0.19 78 / 0.15)', color: GOLD }}>
                    {s.label}
                  </span>
                </div>
              ))}
              {/* Credit for prior learning callout */}
              <div style={{ padding: '1rem 1.25rem', background: 'oklch(0.79 0.19 78 / 0.08)', borderTop: `2px solid ${GOLD}` }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, color: GOLD, marginBottom: '2px' }}>Credit for Prior Learning</p>
                <p style={{ fontSize: '0.72rem', color: 'oklch(1 0 0 / 0.55)', lineHeight: 1.5 }}>Work experience, military service, or professional certs may count as college credit.</p>
              </div>
            </div>

            {/* Accessibility note */}
            <div className="rounded-xl mt-4 p-4" style={{ background: 'oklch(1 0 0 / 0.04)', border: '1px solid oklch(1 0 0 / 0.06)' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'oklch(1 0 0 / 0.70)', marginBottom: '4px' }}>
                Accessibility &amp; Accommodations
              </p>
              <p style={{ fontSize: '0.7rem', color: 'oklch(1 0 0 / 0.45)', lineHeight: 1.55 }}>
                ADA services, assistive technology, and flexible test arrangements available at both campuses.
              </p>
              <Link href="/support/ada" style={{ display: 'inline-block', marginTop: '8px', fontSize: '0.7rem', fontWeight: 700, color: GOLD }}>
                Request Accommodations →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10" style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}>
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '-0.03em', marginBottom: '0.3rem' }}>
              Ready to take the next step?
            </p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(1 0 0 / 0.55)' }}>
              Applications are free. Advisors are standing by.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/workforce" className="press btn-shimmer inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-xl" style={{ background: GOLD, color: GT }}>
              Workforce Programs →
            </Link>
            <Link href="/admissions/apply" className="press inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl" style={{ border: '1.5px solid oklch(1 0 0 / 0.22)', color: 'oklch(1 0 0 / 0.85)' }}>
              Apply Now — Free
            </Link>
          </div>
        </div>
        <p style={{ fontSize: '0.65rem', color: 'oklch(1 0 0 / 0.30)', marginTop: '1rem' }}>
          *Based on Pell Grant eligibility. Individual aid amounts vary. Contact Financial Aid for your estimate.
        </p>
      </div>
    </section>
  )
}
