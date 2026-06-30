'use client'

import { useState, useEffect } from 'react'

const STORE_KEY = 'lscc-banner-dismissed-summer2026'
const BANNER_H  = '44px'   // must match layout.tsx inline script
const CSS_VAR   = '--lscc-banner-h'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)   // true on SSR — avoids layout flash
  const [hiding,  setHiding]  = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORE_KEY)) {
      setVisible(false)
      document.documentElement.style.removeProperty(CSS_VAR)
    }
  }, [])

  function dismiss() {
    setHiding(true)
    sessionStorage.setItem(STORE_KEY, '1')
    document.documentElement.style.removeProperty(CSS_VAR)
    setTimeout(() => setVisible(false), 280)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 z-[65] flex items-center"
      role="banner"
      aria-label="Registration announcement"
      style={{
        top: 0,
        height: BANNER_H,
        background: 'oklch(0.79 0.19 78)',
        opacity: hiding ? 0 : 1,
        transform: hiding ? 'translateY(-44px)' : 'none',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between gap-3">

        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative shrink-0 flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{ background: 'oklch(0.11 0.03 261)', opacity: 0.45, animation: 'ping 1.6s cubic-bezier(0,0,0.2,1) infinite' }}
            />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'oklch(0.11 0.03 261)' }} />
          </span>

          <span
            className="shrink-0 font-display font-black px-2 py-0.5 rounded"
            style={{ fontSize: '0.65rem', letterSpacing: '0.10em', textTransform: 'uppercase', background: 'oklch(0.11 0.03 261)', color: 'var(--lscc-eyebrow-on-dark)' }}
          >
            Now Open
          </span>

          <span
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap hidden sm:inline"
            style={{ fontSize: '0.85rem', color: 'oklch(0.11 0.03 261)' }}
          >
            Registration is OPEN — lock in your classes before spots fill
          </span>
          <span
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap sm:hidden"
            style={{ fontSize: '0.82rem', color: 'oklch(0.11 0.03 261)' }}
          >
            Registration Open — Fall 2026
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://my.lawsonstate.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer font-bold whitespace-nowrap rounded-lg px-4 py-1.5"
            style={{ background: 'oklch(0.22 0.17 261)', color: 'white', fontSize: '0.80rem' }}
          >
            Register Now →<span className="sr-only"> (opens in new tab)</span>
          </a>
          <button
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="press rounded p-1 transition-opacity hover:opacity-50"
            style={{ color: 'oklch(0.11 0.03 261)' }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
