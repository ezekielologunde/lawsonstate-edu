import Link from 'next/link'

const PHOTOS = [
  {
    src:   'https://live.staticflickr.com/65535/55258970853_28b8ea04e9_z.jpg',
    label: 'Commencement 2026',
    tall:  true,
  },
  {
    src:   'https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg',
    label: 'Preview Day 2026',
    tall:  false,
  },
  {
    src:   'https://live.staticflickr.com/65535/55282695209_241aa02f03_c.jpg',
    label: "Women's Basketball",
    tall:  false,
  },
  {
    src:   'https://live.staticflickr.com/65535/55259062249_bda6f008e2_z.jpg',
    label: 'Commencement 2026',
    tall:  true,
  },
  {
    src:   'https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg',
    label: 'Preview Day 2026',
    tall:  false,
  },
  {
    src:   'https://live.staticflickr.com/65535/55282617308_c78af37ffb.jpg',
    label: "Women's Basketball",
    tall:  false,
  },
  {
    src:   'https://live.staticflickr.com/65535/55259233505_3af8bb2b74_z.jpg',
    label: 'Commencement 2026',
    tall:  false,
  },
  {
    src:   'https://live.staticflickr.com/65535/55212928957_04ab31902e.jpg',
    label: 'Preview Day 2026',
    tall:  false,
  },
]

export default function CampusLifeGallery() {
  return (
    <section className="py-14 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <p
              className="text-xs font-semibold mb-2 tracking-widest uppercase"
              style={{ color: 'oklch(0.60 0.22 78)' }}
            >
              Real moments
            </p>
            <h2
              className="font-display font-black leading-none"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                color: 'oklch(0.18 0.12 261)',
              }}
            >
              CAMPUS LIFE
            </h2>
          </div>
          <Link
            href="https://www.flickr.com/photos/143557980@N07/albums/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold hover:underline"
            style={{ color: 'oklch(0.27 0.13 263)' }}
          >
            See all photos →
          </Link>
        </div>

        {/* Desktop: two-row masonry-style grid */}
        <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto auto' }}>
          {PHOTOS.map((photo, i) => (
            <Link
              key={i}
              href="https://www.flickr.com/photos/143557980@N07/albums/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl block"
              style={{ aspectRatio: photo.tall ? '3/4' : '4/3', gridRow: photo.tall ? 'span 2' : 'span 1' }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, oklch(0.14 0.02 263 / 0.85) 0%, transparent 60%)' }}
              >
                <span className="text-white text-sm font-medium">{photo.label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
          {PHOTOS.map((photo, i) => (
            <Link
              key={i}
              href="https://www.flickr.com/photos/143557980@N07/albums/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 relative overflow-hidden rounded-xl block"
              style={{ width: '72vw', maxWidth: '280px', aspectRatio: '4/3' }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: 'linear-gradient(to top, oklch(0.14 0.02 263 / 0.80) 0%, transparent 100%)' }}
              >
                <span className="text-white text-xs font-medium">{photo.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
