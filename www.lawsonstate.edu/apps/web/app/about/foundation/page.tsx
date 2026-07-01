import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Foundation Board | Lawson State',
  description: 'The Lawson State Community College Foundation — a separate non-profit corporation supporting academic excellence, scholarships, and student success since 1995.',
}

// Transcribed verbatim from about_us/public_relations/foundation_board.aspx.html —
// the College's own real, current board listing.
const OFFICERS = [
  { name: 'Mr. Robert Holmes', title: 'President' },
  { name: 'Mrs. Julie Bell', title: 'Vice President' },
  { name: 'Mr. Walter Turner', title: 'Secretary' },
  { name: 'Mr. Lawrence Cooper', title: 'Treasurer' },
]

const DIRECTORS = [
  'Mr. Hycall Brooks',
  'Ms. Staci Brown Brooks',
  'Mrs. Charlsie D. Cook',
  'Dr. Lamanda Thomas Dansby',
  'Dr. Tom Ellison',
  'Ms. Connie Fuell',
  'Mr. Joe Hampton',
  'Mr. Robert Joiner',
  'Mr. Tim A. Lewis',
  'Ms. Belinda Lyons',
  'Mr. Josh Petty',
  'Ms. Cynthia Parris Smith',
  'Mrs. Kerri Pruitt',
  'Mr. Gordon Stewart',
  'Mr. Lovell Vickers',
  'Rev. Charles Winston',
]

export default function FoundationBoardPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Foundation Board</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Established 1995 · A Separate Non-Profit Corporation
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            FOUNDATION BOARD
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '60ch', lineHeight: 1.7 }}>
            The Lawson State Community College Foundation exists to inspire philanthropic support for academic excellence — governed by a board of Birmingham-area business and civic leaders.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: '1.05rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.8 }}>
            The Foundation operates as a separate entity from Lawson State Community College, but in the College&apos;s interest — officially incorporated on February 9, 1995, and chartered under the laws of the State of Alabama as a non-profit, educational corporation. Its purpose is to empower, encourage, receive, and administer gifts for the exclusive benefit of the College, its students, and its staff, primarily by raising a permanent endowment for the College.
          </p>
        </div>
      </section>

      {/* Officers */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Leadership</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>OFFICERS</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICERS.map((o) => (
              <div key={o.name} className="rounded-2xl p-5" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>{o.name}</p>
                <p className="font-semibold uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--lscc-eyebrow)' }}>{o.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Board</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>DIRECTORS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {DIRECTORS.map((name) => (
              <div key={name} className="flex items-center gap-3 rounded-xl px-5 py-3.5" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.06)' }}>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>›</span>
                <span className="text-sm font-medium" style={{ color: 'oklch(0.28 0.05 261)' }}>{name}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl px-5 py-3.5" style={{ background: 'oklch(0.22 0.17 261)' }}>
              <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>›</span>
              <div>
                <span className="text-sm font-medium text-white">Dr. Cynthia T. Anthony</span>
                <span className="block text-xs" style={{ color: 'oklch(1 0 0 / 0.60)' }}>Ex-Officio · College President</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Make a donation */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Support Students</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em' }}>MAKE A DONATION</h2>
            <p style={{ fontSize: '0.95rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Donations of any amount may be contributed to existing scholarship funds, including memorial funds, alumni scholarship funds, or departmental scholarship funds on campus.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://lawsonstatefoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
              >
                Give to the Foundation
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <a
                href="mailto:galbright@lawsonstatefoundation.org"
                className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
                style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
              >
                Contact the Foundation Office
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-7" style={{ background: 'oklch(1 0 0 / 0.06)', border: '1.5px solid oklch(1 0 0 / 0.12)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Establishing a Named Scholarship</p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1rem' }}>
              When proposing a new scholarship or award, please be prepared to share:
            </p>
            <ul className="flex flex-col gap-2">
              {['Name of proposed scholarship/award', 'Purpose of scholarship/award', 'Eligibility criteria', 'Amount of award', 'Duration', 'Selection procedure'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(1 0 0 / 0.75)' }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
              Dr. Geri Albright, Director of the Foundation Office, reviews proposals with the donor and the College&apos;s Business Affairs and Student Financial Services offices.
            </p>
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
