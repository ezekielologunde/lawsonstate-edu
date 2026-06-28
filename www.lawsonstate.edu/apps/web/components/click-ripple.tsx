'use client'

import { useEffect } from 'react'

export default function ClickRipple() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const btn = target.closest('a, button') as HTMLElement | null
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const wave = document.createElement('span')
      wave.className = 'ripple-wave' + (btn.dataset.rippleDark ? ' ripple-wave-dark' : '')
      wave.style.top  = `${e.clientY - rect.top}px`
      wave.style.left = `${e.clientX - rect.left}px`
      btn.classList.add('ripple')
      btn.appendChild(wave)
      wave.addEventListener('animationend', () => wave.remove(), { once: true })
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
