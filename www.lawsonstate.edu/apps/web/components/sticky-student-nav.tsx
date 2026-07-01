'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

type StudentAction = { label: string; href: string; primary: boolean; external?: boolean }

const STUDENT_ACTIONS: StudentAction[] = [
  { label: 'Student Portal', href: '/portal', primary: true },
  { label: 'Register', href: 'https://reg-prod.ec.accs.edu/StudentRegistrationSsb/ssb/term/termSelection?mode=search&mepCode=LAWSON', external: true, primary: false },
  { label: 'Pay Bill', href: 'https://experience.elluciancloud.com/lcc45/', external: true, primary: false },
  { label: 'Financial Aid', href: '/financial-aid', primary: false },
  { label: 'Student Resources', href: '/student-resources', primary: false },
  { label: 'Tutoring', href: '/student-resources/tutoring', primary: false },
  { label: 'Advising', href: '/advising', primary: false },
]

export default function StickyStudentNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Returning students get their re-entry bar on page load — no scroll gate.
      // It only steps aside once the footer is in view so it never covers the
      // footer's compliance links (Title IX, Non-Discrimination, etc.).
      const footer = document.querySelector('footer')
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false
      setIsVisible(!footerInView)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <nav
      className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 shadow-lg"
      style={{
        background: 'white',
        borderTop: '1px solid oklch(0.92 0.01 263)',
      }}
      aria-label="Quick student actions"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
        <span className="shrink-0 text-lscc-muted font-medium hidden sm:flex items-center text-xs uppercase tracking-wide pr-2">
          I'm a Student
        </span>

        {STUDENT_ACTIONS.map(({ label, href, primary, external }) => {
          const className =
            'press shrink-0 px-4 py-2.5 rounded-full font-semibold whitespace-nowrap transition-colors text-sm'
          const style = {
            background: primary ? 'oklch(0.79 0.19 78)' : 'oklch(0.96 0.012 263)',
            color: primary ? 'oklch(0.11 0.03 261)' : 'oklch(0.27 0.13 263)',
          }
          return external ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
              {label}
            </a>
          ) : (
            <Link key={label} href={href} className={className} style={style}>
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
