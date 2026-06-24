'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow({ size = 700, opacity = 0.10, lag = 0.07 }: {
  size?: number
  opacity?: number
  lag?: number
}) {
  const glowRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | undefined>(undefined)
  const visibleRef = useRef(false)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (!visibleRef.current) {
        visibleRef.current = true
        el.style.opacity = '1'
        pos.current = { ...target.current }
      }
    }

    const onLeave = () => {
      visibleRef.current = false
      el.style.opacity = '0'
    }

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * lag
      pos.current.y += (target.current.y - pos.current.y) * lag
      el.style.transform = `translate(${pos.current.x - size / 2}px, ${pos.current.y - size / 2}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [lag, size])

  return (
    <div
      ref={glowRef}
      aria-hidden
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, oklch(0.79 0.19 78 / ${opacity}) 0%, transparent 65%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.4s ease',
        willChange: 'transform',
        zIndex: 1,
      }}
    />
  )
}
