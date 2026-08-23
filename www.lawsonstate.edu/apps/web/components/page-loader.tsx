'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false)
      return
    }
    const t = setTimeout(() => setVisible(false), 950)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null
  return <div className="page-loader" aria-hidden role="progressbar" aria-label="Page loading" />
}
