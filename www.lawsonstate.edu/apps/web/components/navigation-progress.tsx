'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function NavigationProgress() {
  const pathname   = usePathname()
  const prevPath   = useRef(pathname)
  const running    = useRef(false)
  const pctRef     = useRef(0)
  const tickRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const hideRef    = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [pct,    setPct]    = useState(0)
  const [active, setActive] = useState(false)

  const clear = () => {
    if (tickRef.current) clearInterval(tickRef.current)
    if (hideRef.current) clearTimeout(hideRef.current)
  }

  // Start indeterminate crawl: 8 → asymptotes toward 90
  const start = useCallback(() => {
    if (running.current) return
    running.current = true
    clear()
    pctRef.current = 8
    setPct(8)
    setActive(true)
    tickRef.current = setInterval(() => {
      pctRef.current = pctRef.current + (90 - pctRef.current) * 0.07
      setPct(pctRef.current)
    }, 140)
  }, [])

  // Jump to 100 % then fade out
  const finish = useCallback(() => {
    if (!running.current) return
    running.current = false
    clear()
    pctRef.current = 100
    setPct(100)
    hideRef.current = setTimeout(() => {
      setActive(false)
      setTimeout(() => { pctRef.current = 0; setPct(0) }, 50)
    }, 280)
  }, [])

  // Intercept <a> clicks to start the bar before the route renders
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]')
      if (!a) return
      const href = a.getAttribute('href') ?? ''
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        a.target === '_blank'
      ) return
      try {
        const url = new URL(href, location.href)
        if (url.origin !== location.origin) return
        if (url.pathname === pathname) return   // same route
      } catch { /* relative href — treat as internal */ }
      start()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [pathname, start])

  // Complete when the route actually changes
  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname
      finish()
    }
  }, [pathname, finish])

  if (!active && pct === 0) return null

  return (
    <div
      aria-hidden
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        right:         0,
        height:        '3px',
        zIndex:        100000,
        pointerEvents: 'none',
        opacity:       active ? 1 : 0,
        transition:    active ? 'none' : 'opacity 0.28s ease',
      }}
    >
      <div
        style={{
          height:       '100%',
          width:        `${pct}%`,
          background:   'linear-gradient(90deg, oklch(0.68 0.21 72), oklch(0.82 0.17 82), oklch(0.79 0.19 78))',
          boxShadow:    '0 0 12px oklch(0.79 0.19 78 / 0.80), 0 0 4px oklch(0.79 0.19 78 / 0.50)',
          borderRadius: '0 3px 3px 0',
          transition:   pct >= 100
            ? 'width 0.14s ease-in'
            : 'width 0.14s linear',
          willChange: 'width',
        }}
      />
    </div>
  )
}
