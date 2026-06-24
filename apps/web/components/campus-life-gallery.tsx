import Link from 'next/link'

const ROW1 = [
  { src: 'https://live.staticflickr.com/65535/55258970853_28b8ea04e9_z.jpg',  label: 'Commencement 2026' },
  { src: 'https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg',    label: 'Preview Day 2026' },
  { src: 'https://live.staticflickr.com/65535/55282695209_241aa02f03_c.jpg',  label: "Women's Basketball" },
  { src: 'https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg',  label: 'Commencement 2026' },
  { src: 'https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg',  label: 'Preview Day 2026' },
]

const ROW2 = [
  { src: 'https://live.staticflickr.com/65535/55282617308_c78af37ffb.jpg',   label: "Women's Basketball" },
  { src: 'https://live.staticflickr.com/65535/55259233505_3af8bb2b74_z.jpg', label: 'Commencement 2026' },
  { src: 'https://live.staticflickr.com/65535/55212928957_04ab31902e.jpg',   label: 'Preview Day 2026' },
  { src: 'https://live.staticflickr.com/65535/55258970853_28b8ea04e9_z.jpg', label: 'Commencement 2026' },
  { src: 'https://live.staticflickr.com/65535/55282695209_241aa02f03_c.jpg', label: "Women's Basketball" },
]

const ALBUM = 'https://www.flickr.com/photos/143557980@N07/albums/'
const W = 300
const GAP = 12

function MarqueeRow({
  photos,
  direction,
  speed,
}: {
  photos: typeof ROW1
  direction: 'left' | 'right'
  speed: number
}) {
  const doubled = [...photos, ...photos]
  const anim = direction === 'left' ? 'marquee-left' : 'marquee-right'
  return (
    <div style={{ overflow: 'hidden', width: '100%' }} className="marquee-pause">
      <div
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          width: 'max-content',
          animation: `${anim} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((photo, i) => (
          <Link
            key={i}
            href={ALBUM}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 relative overflow-hidden"
            style={{ width: `${W}px`, aspectRatio: '4/3', borderRadius: '14px', display: 'block' }}
            tabIndex={i >= photos.length ? -1 : 0}
            aria-hidden={i >= photos.length}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, oklch(0.09 0.04 261 / 0.88) 0%, transparent 55%)' }}
            >
              <span className="text-white font-semibold" style={{ fontSize: '0.78rem', letterSpacing: '0.03em' }}>
                {photo.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function CampusLifeGallery() {
  return (
    <section
      style={{ background: 'oklch(0.97 0.01 263)', paddingBlock: '5rem', overflow: 'hidden' }}
      aria-label="Campus Life Gallery"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', color: 'oklch(0.55 0.15 68)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Real moments
            </p>
            <h2
              className="font-display font-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.04em', color: 'oklch(0.16 0.04 261)' }}
            >
              CAMPUS LIFE
            </h2>
          </div>
          <Link
            href={ALBUM}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold hover:underline press"
            style={{ fontSize: '0.85rem', color: 'oklch(0.55 0.15 68)' }}
          >
            See all photos →
          </Link>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3">
        <MarqueeRow photos={ROW1} direction="left"  speed={38} />
        <MarqueeRow photos={ROW2} direction="right" speed={44} />
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee-left"],
          [style*="marquee-right"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
