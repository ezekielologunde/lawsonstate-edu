import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import type { CSSProperties } from 'react'

function CharSpan({
  char,
  progress,
  index,
  total,
}: {
  char: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const opacity = useTransform(
    progress,
    [index / total, Math.min((index + 1) / total, 1)],
    [0.2, 1],
  )
  const display = char === ' ' ? ' ' : char
  return (
    <span className="relative inline-block">
      <span className="invisible select-none">{display}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {display}
      </motion.span>
    </span>
  )
}

interface Props {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">
        {chars.map((char, i) => (
          <CharSpan
            key={i}
            char={char}
            progress={scrollYProgress}
            index={i}
            total={chars.length}
          />
        ))}
      </span>
    </p>
  )
}
