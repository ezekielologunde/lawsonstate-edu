'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'lscc-banner-dismissed-summer2026'
const BANNER_H    = '68px'
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
      className="fixed inset-x-0 z-[65] flex items-center"
      style={{ top: 0, height: BANNER_H, background: 'oklch(0.79 0.19 78)' }}
      role="region"
      aria-label="Registration announcement"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between gap-4">
        {/* Left: indicator + label + message */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Pulsing dot */}
          <span className="relative shrink-0 flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{
                background: 'oklch(0.11 0.03 261)',
                opacity: 0.5,
                animation: 'ping 1.6s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ background: 'oklch(0.11 0.03 261)' }}
            />
          </span>

          {/* Badge */}
          <span
            className="shrink-0 font-display font-black px-2.5 py-0.5 rounded"
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              background: 'oklch(0.11 0.03 261)',
              color: 'oklch(0.79 0.19 78)',
            }}
          >
            Now Open
          </span>

          {/* Message */}
          <span
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
            style={{ fontSize: '0.92rem', color: 'oklch(0.11 0.03 261)' }}
          >
            Registration is OPEN — lock in your classes &amp; complete your orientation before spots fill
          </span>
        </div>

        {/* Right: CTA + dismiss */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="https://my.lawsonstate.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer font-bold whitespace-nowrap rounded-lg px-5 py-2"
            style={{
              background: 'oklch(0.22 0.17 261)',
              color: 'white',
              fontSize: '0.85rem',
            }}
          >
            Register Now →
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="press rounded-md p-1.5 transition-opacity hover:opacity-50"
            style={{ color: 'oklch(0.11 0.03 261)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
