'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

const PHOTOS = [
  {
    src: 'https://www.lawsonstate.edu/_resources/assets/img/Rich%20Raymond%20Mechatronics.jpg',
    alt: 'Mechatronics student with industrial equipment',
  },
  {
    src: 'https://www.lawsonstate.edu/_resources/assets/img/emergency_medical_service2.jpg',
    alt: 'Emergency Medical Services students in training',
  },
  {
    src: 'https://www.lawsonstate.edu/_resources/assets/img/Computer%20Sci%20Zoom2.jpg',
    alt: 'Computer Science students',
  },
  {
    src: 'https://www.lawsonstate.edu/_resources/assets/img/dental%20main2.jpg',
    alt: 'Dental hygiene students in clinical lab',
  },
]

const CTE_STATS = [
  { n: '30+',  label: 'CTE Certificates' },
  { n: '100%', label: 'Hands-On Training' },
  { n: '92%',  label: 'Job Placement Rate' },
  { n: '1st',  label: 'Class Priority Placement' },
]

export default function MakersFixers() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef    = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.08 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top)  / rect.height) * 100
    glowRef.current.style.background =
      `radial-gradient(ellipse 640px 420px at ${x}% ${y}%, oklch(0.79 0.19 78 / 0.09) 0%, transparent 70%)`
  }

  const fade = (delay: number) =>
    `transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` +
    (delay ? ` delay-[${delay}ms]` : '')

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'oklch(0.99 0.005 263)', paddingBlock: '5rem' }}
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-follow glow — updated via DOM ref, no re-render */}
      <div ref={glowRef} aria-hidden className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className={`mb-8 ${fade(0)}`}>
          <p
            style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              color: 'oklch(0.55 0.15 68)',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
            }}
          >
            Career &amp; Technical Education
          </p>
          <h2
            className="font-display font-black leading-none"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
          >
            WHAT WILL<br />
            <span style={{ color: 'oklch(0.55 0.15 68)' }}>YOU BUILD?</span>
          </h2>
        </div>

        {/* Photo grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 ${fade(100)}`}>
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="relative overflow-hidden"
              style={{
                borderRadius: '12px',
                aspectRatio: i === 0 ? '4/3' : '1/1',
                gridColumn: i === 0 ? 'span 2' : undefined,
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, oklch(0.16 0.06 261 / 0.30) 0%, transparent 55%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Vimeo video — CTE showcase (with controls, featured) */}
        <div
          className={`relative overflow-hidden mb-8 ${fade(200)}`}
          style={{ borderRadius: '16px', aspectRatio: '16 / 9' }}
        >
          <iframe
            src="https://player.vimeo.com/video/1058690019?h=ff50502b3b&color=c9a227&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lawson State Career Technical Education"
          />
        </div>

        {/* Two-col: body copy + partner card */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-10 items-start mb-8 ${fade(300)}`}>
          <div>
            <p
              style={{
                fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
                lineHeight: 1.7,
                color: 'oklch(0.40 0.04 261)',
                maxWidth: '52ch',
                marginBottom: '1rem',
              }}
            >
              At Lawson State, we train the makers and fixers that keep our world running. Whether it&apos;s wiring a building, welding a frame, tuning an engine, or keeping the air on — you&apos;ll learn it here, with real tools, real equipment, and instructors who&apos;ve done the work.
            </p>
            <p
              style={{
                fontSize: 'clamp(0.82rem, 1.2vw, 0.92rem)',
                lineHeight: 1.7,
                color: 'oklch(0.50 0.03 261)',
                maxWidth: '50ch',
                marginBottom: '1.5rem',
              }}
            >
              Our Career Technical Education programs are built around industry partnerships — including Snap-on Tools — so you graduate with the credentials employers are already looking for.
            </p>
            <Link
              href="/academics"
              className="press btn-shimmer inline-flex items-center font-bold gap-2 rounded-xl px-6 py-3"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Explore CTE Programs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          {/* Snap-on partner callout */}
          <div
            style={{
              background: 'white',
              border: '1px solid oklch(0 0 0 / 0.08)',
              boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
              borderRadius: '14px',
              padding: '1.1rem',
            }}
          >
            <p
              className="font-display font-bold mb-3"
              style={{ fontSize: '0.7rem', letterSpacing: '0.14em', color: 'oklch(0.55 0.15 68)', textTransform: 'uppercase' }}
            >
              Industry Partner
            </p>
            <p
              className="font-display font-black mb-2"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'oklch(0.16 0.04 261)' }}
            >
              Snap-on Tools
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'oklch(0.40 0.04 261)' }}>
              Our Automotive Technology students train with professional-grade Snap-on equipment — the same tools used in dealerships across the country. Graduate ready to work on day one.
            </p>
            <div
              className="mt-5 pt-5 flex items-center gap-3"
              style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)' }}
            >
              <div
                className="flex items-center justify-center text-white font-bold"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'oklch(0.44 0.22 24)',
                  fontSize: '0.75rem',
                  flexShrink: 0,
                }}
              >
                S
              </div>
              <div>
                <p className="font-semibold" style={{ fontSize: '0.85rem', color: 'oklch(0.16 0.04 261)' }}>Snap-on Tools</p>
                <p style={{ fontSize: '0.72rem', color: 'oklch(0.50 0.03 261)' }}>Official Equipment Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 ${fade(400)}`}
          style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)' }}
        >
          {CTE_STATS.map((s) => (
            <div key={s.n}>
              <div
                className="font-display font-black"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', letterSpacing: '-0.04em', color: 'oklch(0.55 0.15 68)' }}
              >
                {s.n}
              </div>
              <div
                className="uppercase font-semibold"
                style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'oklch(0.50 0.03 261)', marginTop: '2px' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
