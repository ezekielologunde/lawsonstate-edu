import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const SECTIONS = [
  {
    id: 'what-we-collect',
    title: 'Information We Collect',
    body: [
      'When you interact with this website, we may collect non-personally identifiable technical data such as browser type, operating system, referring URL, and pages visited. This data is collected automatically by our web server and analytics tools to help us improve site performance.',
      'If you voluntarily submit information — through an inquiry form, newsletter signup, application, or contact request — we collect the information you provide, which may include your name, email address, phone number, and the content of your message.',
      'Students enrolled at Lawson State Community College maintain education records governed by the Family Educational Rights and Privacy Act (FERPA). Those records are managed separately through the College\'s Student Information System (SIS) and are not described in this website privacy policy.',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Information',
    body: [
      'We use information collected from this website to respond to your inquiries, process applications, send the newsletter if you have signed up, and improve the performance and usability of our website.',
      'We do not sell, rent, or trade your personal information to third parties for commercial marketing purposes. We do not use your information for purposes other than those described in this policy without your consent.',
      'Aggregate, non-personally identifiable information may be shared with partners for analytical or reporting purposes (e.g., enrollment trend analysis with ACCS).',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking',
    body: [
      'This website uses cookies — small text files stored on your device — to maintain session state, remember preferences, and gather analytics data. Cookies from third-party analytics services (such as Google Analytics) may also be set when you visit.',
      'You may configure your browser to refuse cookies or alert you when cookies are being set. If you disable cookies, some features of this website may not function correctly.',
      'This website does not use cookies to track your activity across other websites or to serve targeted advertising.',
    ],
  },
  {
    id: 'ferpa',
    title: 'Student Records (FERPA)',
    body: [
      'Student education records at Lawson State Community College are protected by the Family Educational Rights and Privacy Act of 1974 (FERPA). FERPA gives students the right to inspect and review their education records, request corrections to records they believe are inaccurate, and limit disclosure of personally identifiable information from those records.',
      'Lawson State does not disclose personally identifiable information from student education records without written consent, except as authorized by FERPA (e.g., to school officials with legitimate educational interest, or in compliance with a judicial order).',
      'For questions about your student records, contact the Registrar\'s Office at 205.929.6310.',
    ],
  },
  {
    id: 'security',
    title: 'Data Security',
    body: [
      'We implement reasonable technical, administrative, and physical safeguards to protect information collected through this website. However, no method of internet transmission is completely secure, and we cannot guarantee the absolute security of data transmitted to or from our website.',
      'You should use caution when submitting sensitive personal information online and contact us by phone if you need to share highly sensitive data.',
    ],
  },
  {
    id: 'links',
    title: 'External Links',
    body: [
      'This website links to third-party websites including Canvas LMS, MyLawson student portal, Tutor.com, and other services. This Privacy Policy does not apply to those websites. We encourage you to review the privacy policies of any third-party site before submitting personal information.',
    ],
  },
  {
    id: 'minors',
    title: 'Minors',
    body: [
      'This website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 through this public website. Dual-enrollment students under 18 interact with the College through separate, FERPA-protected systems.',
    ],
  },
  {
    id: 'changes',
    title: 'Policy Updates',
    body: [
      'We may update this Privacy Policy periodically. When we make significant changes, we will update the effective date at the top of this page. Continued use of this website following a policy update constitutes acceptance of the revised policy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '32vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Privacy Policy</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Website Privacy · FERPA · Data
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            PRIVACY POLICY
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            This policy describes how Lawson State Community College collects, uses, and protects information gathered through this website.
          </p>
          <p className="mt-3 text-xs" style={{ color: 'oklch(1 0 0 / 0.45)' }}>Effective date: June 2026</p>
        </div>
      </section>

      {/* Quick nav */}
      <nav aria-label="Privacy policy sections" style={{ background: 'white', borderBottom: '1px solid oklch(0.92 0.01 263)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
          <ul className="flex gap-1 min-w-max text-xs font-medium">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-block px-3 py-1.5 rounded-lg transition-colors hover:opacity-70 whitespace-nowrap"
                  style={{ color: 'oklch(0.42 0.08 263)', background: 'oklch(0.95 0.03 255)' }}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.97 0.015 255)' }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id}>
              <h2 className="font-display font-black mb-5" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
                {s.title}
              </h2>
              {s.body.map((para, i) => (
                <p key={i} style={{ fontSize: '0.92rem', color: 'oklch(0.38 0.04 261)', lineHeight: 1.8, marginBottom: i < s.body.length - 1 ? '1rem' : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}>Privacy Questions?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Email privacy@lawsonstate.edu or call 205.925.2515
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="press btn-shimmer shrink-0 font-bold px-6 py-3 rounded-xl text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              Contact Us
            </Link>
            <Link
              href="/about/non-discrimination"
              className="press shrink-0 font-semibold px-6 py-3 rounded-xl text-sm text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}
            >
              Non-Discrimination Notice →
            </Link>
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
