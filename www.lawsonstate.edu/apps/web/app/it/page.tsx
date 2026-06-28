import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'IT Help Desk | Lawson State Community College',
  description:
    'Lawson State IT Help Desk — technical support for Canvas, MyLawson, email, password resets, computers, printers, and telephone issues. Submit a ticket or email help@lawsonstate.edu.',
}

const ISSUES = [
  { title: 'Canvas LMS', desc: 'Login issues, course access, assignment submission, and grade visibility — our team supports all Canvas-related problems for students and faculty.', icon: '📚' },
  { title: 'MyLawson Student Portal', desc: 'Trouble logging in, registration errors, financial aid display, or schedule issues within the MyLawson portal (Ellucian Banner system).', icon: '🎓' },
  { title: 'Email (Microsoft 365)', desc: 'Account setup, login failures, password reset, and Outlook configuration for your @lawsonstate.edu email address.', icon: '📧' },
  { title: 'Password Reset', desc: 'Reset your Microsoft 365 / network password. Use the self-service portal online or contact the Help Desk for assisted resets.', icon: '🔑' },
  { title: 'Computers & Laptops', desc: 'Hardware malfunctions, software installation, campus lab computer issues, and laptop repair referrals handled by the MIS Department.', icon: '💻' },
  { title: 'Printers & Peripherals', desc: 'Printer setup, connectivity problems, and peripheral device issues on campus. Student printing available in labs and the library.', icon: '🖨️' },
  { title: 'Campus Wi-Fi', desc: 'Connectivity issues, network registration for personal devices, and eduroam Wi-Fi configuration on both campuses.', icon: '📡' },
  { title: 'Telephone', desc: 'Office phone issues, voicemail setup, and telephone extension problems reported through the MIS Department.', icon: '📞' },
]

const CONTACT_OPTIONS = [
  {
    method: 'Submit a Ticket',
    detail: 'The fastest way to get help. Submit a ticket online and our MIS team will respond in priority order.',
    cta: { label: 'Submit Ticket', href: 'https://lawsonstate.edu/helpdesk' },
  },
  {
    method: 'Email Us',
    detail: 'Send your issue to help@lawsonstate.edu and include a description of the problem and your student/employee ID.',
    cta: { label: 'Email Help Desk', href: 'mailto:help@lawsonstate.edu' },
  },
  {
    method: 'Visit in Person',
    detail: 'Stop by the MIS Department on either campus. Hours: Monday – Friday, 8:00 AM – 5:00 PM.',
    cta: { label: 'Find Our Location', href: '/contact' },
  },
]

export default function ITHelpDeskPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.04 261 / 0.85) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>MIS Department</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>IT HELP DESK</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Technical support for Canvas, MyLawson, email, computers, Wi-Fi, and more. Submit a ticket and our team will resolve your issue.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://lawsonstate.edu/helpdesk" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Submit a Ticket
              </a>
              <a href="mailto:help@lawsonstate.edu" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                help@lawsonstate.edu
              </a>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTACT_OPTIONS.map((c) => (
                <div key={c.method} className="rounded-2xl p-7 flex flex-col" style={{ background: 'oklch(1 0 0 / 0.08)', border: '1px solid oklch(1 0 0 / 0.15)' }}>
                  <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.1rem', color: 'white' }}>{c.method}</h3>
                  <p className="flex-1 mb-5" style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.78)', lineHeight: 1.65 }}>{c.detail}</p>
                  <a href={c.cta.href} className="press inline-block text-center font-bold px-5 py-2.5 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.93rem' }}>
                    {c.cta.label} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>We Can Help With</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>COMMON ISSUES</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ISSUES.map((issue) => (
                <div key={issue.title} className="card-lift rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <div className="text-2xl mb-3" aria-hidden>{issue.icon}</div>
                  <h3 className="font-display font-bold mb-2 leading-snug" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{issue.title}</h3>
                  <p style={{ fontSize: '0.87rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{issue.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Password Reset Banner */}
        <section className="py-14 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto scroll-reveal">
            <div className="rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: 'oklch(0.16 0.04 261)' }}>
              <div>
                <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>RESET YOUR PASSWORD</h2>
                <p style={{ color: 'oklch(1 0 0 / 0.78)', fontSize: '1rem' }}>
                  Locked out of your Microsoft 365 account? Reset your password online — no need to wait for IT.
                </p>
              </div>
              <a
                href="https://account.activedirectory.windowsazure.com/PasswordReset"
                target="_blank"
                rel="noreferrer"
                className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
              >
                Reset Password →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
