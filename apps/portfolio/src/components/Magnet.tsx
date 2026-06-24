import { useRef, useEffect } from 'react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const inArea =
        e.clientX >= rect.left - padding &&
        e.clientX <= rect.right + padding &&
        e.clientY >= rect.top - padding &&
        e.clientY <= rect.bottom + padding

      if (inArea) {
        if (!active.current) {
          active.current = true
          el.style.transition = activeTransition
        }
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        el.style.transform = `translate3d(${(e.clientX - cx) / strength}px,${(e.clientY - cy) / strength}px,0)`
      } else if (active.current) {
        active.current = false
        el.style.transition = inactiveTransition
        el.style.transform = 'translate3d(0,0,0)'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [padding, strength, activeTransition, inactiveTransition])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
