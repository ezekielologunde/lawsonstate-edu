import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const STEPS = [
  {
    n: '01',
    title: 'Gather Your Documents',
    items: [
      'Your Social Security Number (or Alien Registration Number)',
      'Your federal income tax returns, W-2s, and other records of money earned (and your parents\' if you\'re a dependent)',
      'Bank statements and records of investments',
      'Records of untaxed income (child support, interest income)',
      'An FSA ID (account username and password) — create yours at studentaid.gov',
    ],
  },
  {
    n: '02',
    title: 'Complete the FAFSA',
    items: [
      'Go to studentaid.gov and click "Start New FAFSA"',
      'Use your FSA ID to sign in (parents also need their own FSA ID)',
      'Use the IRS Data Retrieval Tool to import your tax info automatically',
      'List Lawson State Community College — our School Code is 001025',
      'Submit as early as possible — some funds are awarded on a first-come, first-served basis',
    ],
  },
  {
    n: '03',
    title: 'Review Your SAR',
    items: [
      'Within 3–5 days you\'ll receive a Student Aid Report (SAR) by email',
      'Review the SAR carefully — it shows your Expected Family Contribution (EFC)',
      'If you see errors, correct them on studentaid.gov',
      'Lawson State will also receive your FAFSA data if you listed our school code',
    ],
  },
  {
    n: '04',
    title: 'Accept Your Aid Package',
    items: [
      'Log in to MyLawson to view your official financial aid award letter',
      'Accept, reduce, or decline individual aid items',
      'If you have questions about your package, contact the Financial Aid Office',
      'Complete any required verification documents if requested',
    ],
  },
  {
    n: '05',
    title: 'Stay Enrolled & Maintain Eligibility',
    items: [
      'Maintain satisfactory academic progress (SAP): minimum 2.0 GPA and completion rate',
      'Re-submit the FAFSA every year — it does not automatically renew',
      'Notify Financial Aid of any changes to your income or enrollment status',
      'Report any outside scholarships you receive',
    ],
  },
]

const FAQS = [
  {
    q: "What is Lawson State's FAFSA school code?",
    a: "Our federal school code is 001025. Enter this code on the FAFSA to ensure your application is sent to us.",
  },
  {
    q: 'When should I submit the FAFSA?',
    a: "As early as October 1 for the following academic year. Lawson State awards aid on a first-come, first-served basis for some programs, so submitting early is important.",
  },
  {
    q: 'Do I need to be a full-time student to receive aid?',
    a: 'No. Aid amounts are prorated by enrollment status. Students enrolled at least half-time (6 credit hours) are eligible for the full Pell Grant award.',
  },
  {
    q: 'What if my financial situation has changed since I filed taxes?',
    a: 'Contact the Financial Aid Office. You may be able to submit a Special Circumstances appeal to have your aid recalculated based on current income.',
  },
  {
    q: 'Does Lawson State offer loans?',
    a: 'Lawson State does not participate in the Federal Direct Loan program. We focus on grant aid — money you do not have to repay.',
  },
]

const DEADLINES = [
  { semester: 'Fall 2025', fafsa: 'Submit ASAP', priority: 'April 1, 2025' },
  { semester: 'Spring 2026', fafsa: 'Submit ASAP', priority: 'October 1, 2025' },
  { semester: 'Summer 2026', fafsa: 'Submit ASAP', priority: 'March 1, 2026' },
]

export default function FafsaPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/financial-aid" className="hover:text-white transition-colors">Financial Aid</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>FAFSA Guide</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Free Application for Federal Student Aid
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)', letterSpacing: '-0.025em' }}>
            FAFSA GUIDE
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            The FAFSA is your gateway to federal grants, work-study, and institutional aid. Most Lawson State students qualify — and it&apos;s free to apply.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://studentaid.gov/h/apply-for-aid/fafsa"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Start FAFSA at studentaid.gov<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Talk to Financial Aid
            </Link>
          </div>
        </div>
      </section>

      {/* School code callout */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center gap-3">
          <span className="font-display font-black" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: 'oklch(0.11 0.03 261)' }}>
            Lawson State School Code (FAFSA):
          </span>
          <span
            className="font-display font-black px-6 py-2 rounded-lg"
            style={{ fontSize: '1.5rem', color: 'white', background: 'oklch(0.22 0.17 261)', letterSpacing: '0.1em' }}
          >
            001025
          </span>
          <span className="text-sm font-medium" style={{ color: 'oklch(0.25 0.1 261)' }}>
            Enter this on your FAFSA so your application reaches us
          </span>
        </div>
      </div>

      {/* Steps */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Step by Step</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO APPLY</h2>
          </div>
          <div className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl p-7"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}
              >
                <div className="flex gap-5 items-start">
                  <div
                    className="font-display font-black shrink-0"
                    style={{ fontSize: '2.2rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em', marginTop: '0.1rem' }}
                  >
                    {step.n}
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-black mb-3" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>{step.title}</p>
                    <ul className="flex flex-col gap-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm" style={{ color: 'oklch(0.38 0.04 261)', lineHeight: 1.65 }}>
                          <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines + FAQ */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">

          {/* FAQ */}
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>FAQ</p>
            <h2 className="font-display font-black mb-8" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>COMMON QUESTIONS</h2>
            <div className="flex flex-col gap-5">
              {FAQS.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl p-5"
                  style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
                >
                  <p className="font-bold mb-2" style={{ fontSize: '0.95rem', color: 'oklch(0.18 0.04 261)' }}>{faq.q}</p>
                  <p style={{ fontSize: '0.875rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deadlines */}
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Priority Dates</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>AID DEADLINES</h2>
            <div className="flex flex-col gap-3 mb-8">
              {DEADLINES.map((d) => (
                <div
                  key={d.semester}
                  className="rounded-xl p-5"
                  style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}
                >
                  <p className="font-display font-black mb-1" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{d.semester}</p>
                  <p className="text-xs font-bold uppercase mb-0.5" style={{ color: 'oklch(0.55 0.04 261)', letterSpacing: '0.1em' }}>Priority Deadline</p>
                  <p className="font-bold" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.95rem' }}>{d.priority}</p>
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: 'oklch(0.55 0.04 261)', lineHeight: 1.6 }}>
              Submitting after the priority deadline does not disqualify you from aid, but late applicants may not receive campus-based funds.
            </p>

            {/* Contact card */}
            <div
              className="rounded-2xl p-6 mt-8"
              style={{ background: 'oklch(0.22 0.17 261)' }}
            >
              <p className="font-display font-bold text-white mb-1" style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>Financial Aid Office</p>
              <div className="text-sm mb-4" style={{ color: 'oklch(1 0 0 / 0.65)', lineHeight: 1.7 }}>
                <div>Birmingham: 205.929.6346</div>
                <div>Bessemer: 205.424.5119 ext. 346</div>
                <div>finaid@lawsonstate.edu</div>
                <div className="mt-1">Mon–Thu: 8 AM – 6:30 PM · Fri: 8 AM – 5 PM</div>
              </div>
              <Link
                href="/contact"
                className="press btn-shimmer inline-flex items-center font-bold px-5 py-2.5 rounded-lg"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.88rem' }}
              >
                Contact Financial Aid
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
