import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Consumer Information | Lawson State',
  description:
    'Student right-to-know and federally required consumer information for Lawson State Community College — disclosures, accreditation, financial data, and civil-rights policies in one place.',
}

type HubItem = { title: string; desc: string; href: string; tag: string }

// Every federally required disclosure / civil-rights page, indexed in one hub.
const SECTIONS: { group: string; items: HubItem[] }[] = [
  {
    group: 'Disclosures & Institutional Data',
    items: [
      { title: 'Federal Disclosures', tag: 'Consumer Info', href: '/about/disclosures', desc: 'Net price calculator, Student Right-to-Know, Clery campus security, gainful employment, and other federally required notices.' },
      { title: 'Facts & Data', tag: 'Institutional Research', href: '/about/facts', desc: 'Enrollment, demographics, graduation and job-placement outcomes — plus financial transparency, funding sources, and audited reports.' },
      { title: 'Accreditation', tag: 'SACSCOC', href: '/about/accreditation', desc: 'Lawson State’s institutional accreditation by SACSCOC and program-level accrediting bodies.' },
    ],
  },
  {
    group: 'Civil Rights & Compliance',
    items: [
      { title: 'Non-Discrimination Policy', tag: 'Equal Opportunity', href: '/about/non-discrimination', desc: 'Lawson State’s equal-opportunity commitment and non-discrimination statement, with the responsible compliance officers.' },
      { title: 'Title IX', tag: '20 U.S.C. § 1681', href: '/about/title-ix', desc: 'Sex-based discrimination and harassment policy, reporting options, and the Title IX Coordinator’s contact information.' },
      { title: 'Title III', tag: 'Strengthening Institutions', href: '/about/title-iii', desc: 'How Lawson State uses Title III federal funding to strengthen academic programs and institutional capacity.' },
    ],
  },
  {
    group: 'Privacy & Access',
    items: [
      { title: 'Privacy Policy', tag: 'FERPA', href: '/about/privacy', desc: 'How Lawson State collects, uses, and protects student and visitor information, including FERPA education-record rights.' },
      { title: 'Accessibility Statement', tag: 'ADA · Section 508', href: '/about/accessibility', desc: 'Our commitment to an accessible website and campus, plus how to request accommodations or report a barrier.' },
    ],
  },
]

export default function ConsumerInformationPage() {
  return (
    <>
      <Nav />

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
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Consumer Information</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Right-to-Know · Federal Requirements
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            CONSUMER INFORMATION
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            Federal law requires colleges to make certain information readily available to students, prospective students, and the public. Everything you have a right to know about Lawson State — disclosures, outcomes, accreditation, and civil-rights policies — is gathered here.
          </p>
        </div>
      </section>

      {SECTIONS.map((section, si) => (
        <section
          key={section.group}
          className="py-14 px-6"
          style={{ background: si % 2 === 0 ? 'oklch(0.95 0.03 255)' : 'white' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>
                {`0${si + 1}`} · Section
              </p>
              <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
                {section.group}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="press group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-md"
                  style={{ background: si % 2 === 0 ? 'white' : 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
                >
                  <span className="inline-block self-start text-xs font-semibold mb-3 px-2.5 py-0.5 rounded-full" style={{ background: 'oklch(0.22 0.17 261 / 0.07)', color: 'oklch(0.38 0.08 261)', letterSpacing: '0.05em' }}>
                    {item.tag}
                  </span>
                  <p className="font-display font-black mb-2" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{item.title}</p>
                  <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6, marginBottom: '1rem' }}>{item.desc}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Request info */}
      <section className="py-12 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="font-display font-black text-white mb-1" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', letterSpacing: '-0.02em' }}>
              Need a paper copy or have a question?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '54ch', lineHeight: 1.6 }}>
              Any consumer information disclosure is available in printed form on request. Contact the appropriate office and we will provide it promptly.
            </p>
          </div>
          <Link href="/contact" className="press btn-shimmer shrink-0 inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
            Contact Us →
          </Link>
        </div>
      </section>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
