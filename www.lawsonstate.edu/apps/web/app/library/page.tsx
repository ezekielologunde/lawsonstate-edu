import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Library Services | Lawson State',
  description: 'Research databases, e-books, study spaces, and research help from the Lawson State Community College Library.',
}

const QUICK_LINKS = [
  {
    label: 'Library Catalog & Info',
    tagline: 'Start here',
    desc: 'Search the collection, view library news, and get an overview of everything the library offers.',
    cta: 'Open Library Site',
    href: 'https://www.library.lawsonstate.edu/',
  },
  {
    label: 'Student Resources',
    tagline: 'Research guides',
    desc: 'Subject-specific research guides, citation help, and tips for getting started on papers and projects.',
    cta: 'View Resources',
    href: 'https://www.library.lawsonstate.edu/students',
  },
  {
    label: 'Research Databases',
    tagline: 'Academic journals & articles',
    desc: 'Access EBSCO, ProQuest, and other subscription databases for scholarly articles and reference material.',
    cta: 'Browse Databases',
    href: 'https://www.library.lawsonstate.edu/databases',
  },
  {
    label: 'Forms & Services',
    tagline: 'Interlibrary loan, requests',
    desc: 'Request materials, submit interlibrary loan requests, and find other library service forms.',
    cta: 'View Forms',
    href: 'https://www.library.lawsonstate.edu/forms',
  },
  {
    label: 'Digital Reading App',
    tagline: 'OverDrive e-books & audiobooks',
    desc: 'Borrow e-books and audiobooks free with your Lawson State login, right from your phone or tablet.',
    cta: 'Open OverDrive',
    href: 'https://lawsonstate.overdrive.com/',
  },
]

export default function LibraryPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg" alt="Lawson State library and learning resources" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/academics" className="hover:text-white transition-colors">Academics</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Library</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Academics · Research Support
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            LIBRARY SERVICES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            The Lawson State Library supports the academic, career, and lifelong learning needs of students, faculty, staff, and the community.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.library.lawsonstate.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Open Library Site<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Contact the Library
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ fontSize: '1.05rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The Lawson State Library supports the academic, career and technical education, and lifelong learning needs of students, faculty, staff, and the community by providing access to diverse and comprehensive information resources in an environment that fosters intellectual inquiry, personal development, and cultural enrichment.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.8 }}>
            The Library is committed to delivering high-quality resources, technology, services, and programs that promote information literacy, academic success, workforce readiness, and community engagement.
          </p>
        </div>
      </section>

      {/* Quick links grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Quick Links</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FIND WHAT YOU NEED</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {QUICK_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group press flex flex-col h-full rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.05)' }}
              >
                <p className="font-display font-semibold uppercase mb-1" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.68rem', letterSpacing: '0.18em' }}>{s.tagline}</p>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, flex: 1, marginBottom: '1rem' }}>{s.desc}</p>
                <span className="font-bold flex items-center gap-1" style={{ fontSize: '0.82rem', color: 'oklch(0.42 0.17 261)' }}>
                  {s.cta} →
                  <span className="sr-only"> (opens in new tab)</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Study spaces & technology — real, standard library services beyond the external link grid */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>On Campus</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STUDY SPACES &amp; TECHNOLOGY</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Quiet Study Rooms', desc: 'Individual and small-group rooms for focused study or project work — available on a first-come basis.' },
              { name: 'Computer Lab', desc: 'Desktop computers with Microsoft Office, printing, and internet access for coursework and research.' },
              { name: 'Free Printing & Copying', desc: 'Print, copy, and scan course materials on site — ask library staff about current allowances.' },
              { name: 'Campus Wi-Fi', desc: 'Connect your own laptop or device to the campus network throughout the library.' },
            ].map((s) => (
              <div key={s.name} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-bold mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/student-resources/tutoring" className="press inline-flex items-center gap-2 font-bold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
              Need writing or citation help? Visit Tutoring Services →
            </Link>
          </div>
        </div>
      </section>

      {/* HBCU Digital Library Trust */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>New Partnership</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
              HBCU DIGITAL LIBRARY TRUST
            </h2>
            <p style={{ fontSize: '1rem', color: 'oklch(0.35 0.04 261)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Lawson State has joined the HBCU Digital Library Trust, a collaborative effort to preserve and share the rich cultural heritage, scholarship, and history of Historically Black Colleges and Universities. The college&apos;s collection is set to be available in Spring 2026.
            </p>
            <blockquote
              className="pl-5 mb-6"
              style={{ borderLeft: '3px solid oklch(0.79 0.19 78)', fontSize: '1rem', fontStyle: 'italic', color: 'oklch(0.30 0.04 261)', lineHeight: 1.7 }}
            >
              &ldquo;We encourage students, faculty, and staff to explore the HBCU Digital Library and consider how these valuable resources can support coursework, research, and personal exploration.&rdquo;
              <footer className="not-italic font-semibold mt-2" style={{ fontSize: '0.85rem', color: 'oklch(0.50 0.04 261)' }}>
                — Dr. Nacola Adams, Director of Library Services
              </footer>
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/news/new-hbcu-digital-library"
                className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
                style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.9rem' }}
              >
                Read the Full Story →
              </Link>
              <a
                href="https://thehbcutrust.org"
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg"
                style={{ border: '1.5px solid oklch(0 0 0 / 0.12)', color: 'oklch(0.30 0.04 261)', fontSize: '0.9rem' }}
              >
                TheHBCUTrust.org<span className="sr-only"> (opens in new tab)</span>
              </a>
            </div>
          </div>

          {/* Contact card */}
          <div
            className="rounded-2xl p-8"
            style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
          >
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Ask a Librarian</p>
            <p className="font-display font-black mb-4" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>NEED RESEARCH HELP?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Reach out to the library directly for help finding sources, requesting materials, or navigating the databases.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> <a href="tel:12059292068" className="hover:underline">205.929.2068</a></div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Birmingham Campus:</span> 3060 Wilson Road SW</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Office Hours:</span> M–F, 8:00 AM–5:00 PM</div>
            </div>
            <a
              href="https://www.library.lawsonstate.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Open Library Site<span className="sr-only"> (opens in new tab)</span>
            </a>
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
