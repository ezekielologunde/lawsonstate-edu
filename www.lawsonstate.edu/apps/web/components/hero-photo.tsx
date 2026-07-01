import Image from 'next/image'

/**
 * Full-bleed hero photograph with a navy gradient overlay for text legibility.
 * Drop in as the first child of a `page-hero` section (which is `relative`),
 * replacing the standalone gradient <div>. Keeps headings readable while
 * surfacing real Lawson State imagery behind the hero.
 */
export default function HeroPhoto({
  src,
  alt,
  position = 'center 30%',
}: {
  src: string
  alt: string
  position?: string
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(to right, oklch(0.20 0.16 262 / 0.93) 0%, oklch(0.18 0.15 262 / 0.72) 58%, oklch(0.18 0.15 262 / 0.52) 100%)',
        }}
      />
    </>
  )
}
