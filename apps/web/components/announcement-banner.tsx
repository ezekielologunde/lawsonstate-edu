'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'lscc-banner-dismissed-summer2026'
const BANNER_H    = '44px'
const CSS_VAR     = '--lscc-banner-h'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      setVisible(true)
      document.documentElement.style.setProperty(CSS_VAR, BANNER_H)
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
    document.documentElement.style.removeProperty(CSS_VAR)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 z-[65]"
      style={{ top: 0, background: 'oklch(0.79 0.19 78)' }}
      role="banner"
      aria-label="Registration announcement"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="shrink-0 font-display font-black hidden sm:block"
            style={{ fontSize: '0.72rem', letterSpacing: '0.14em', color: 'oklch(0.11 0.03 261)', textTransform: 'uppercase' }}
          >
            Registration Open
          </span>
          <span
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
            style={{ fontSize: '0.82rem', color: 'oklch(0.11 0.03 261)' }}
          >
            The best time to register is NOW — lock in your classes &amp; complete orientation
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="https://my.lawsonstate.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="press font-bold whitespace-nowrap rounded-lg px-4 py-1.5"
            style={{ background: 'oklch(0.11 0.03 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.78rem' }}
          >
            Sign Up Now →
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="press rounded-md p-1 transition-opacity hover:opacity-60"
            style={{ color: 'oklch(0.11 0.03 261)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
