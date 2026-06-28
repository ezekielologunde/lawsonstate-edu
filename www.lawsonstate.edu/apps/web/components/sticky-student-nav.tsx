'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

type StudentAction = { label: string; href: string; primary: boolean; external?: boolean }

const STUDENT_ACTIONS: StudentAction[] = [
  { label: 'Student Portal', href: 'https://my.lawsonstate.edu', external: true, primary: true },
  { label: 'Register', href: 'https://my.lawsonstate.edu', external: true, primary: false },
  { label: 'Pay Bill', href: 'https://my.lawsonstate.edu', external: true, primary: false },
  { label: 'Financial Aid', href: '/financial-aid', primary: false },
  { label: 'Advising', href: '/contact', primary: false },
]

export default function StickyStudentNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (80vh ≈ ~1500px on desktop)
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
