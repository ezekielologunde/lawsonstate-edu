import Link from 'next/link'

const CHANNEL_URL = 'https://www.youtube.com/@lawsonstatecommunitycolleg273'

const PREVIEW_PHOTOS = [
  {
    src:   'https://live.staticflickr.com/65535/55259062004_8c4065e0ef_z.jpg',
    label: 'Commencement',
  },
  {
    src:   'https://www.lawsonstate.edu/_resources/assets/img/Rich%20Raymond%20Mechatronics.jpg',
    label: 'Mechatronics Lab',
  },
  {
    src:   'https://live.staticflickr.com/65535/55281549902_c1ba0b4a66_h.jpg',
    label: "Cougars Basketball",
  },
]

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'oklch(0.97 0.01 263)' }}>
      {/* Background: campus photo with strong overlay */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="https://www.lawsonstate.edu/_resources/assets/img/couger_strong.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0.97 0.01 263 / 0.92)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: text + YouTube CTA */}
          <div>
            <p
              className="text-xs font-semibold mb-4 tracking-widest uppercase"
              style={{ color: 'oklch(0.55 0.15 68)' }}
            >
              Lawson State on YouTube
            </p>
            <h2
              className="font-display font-black leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
            >
              WATCH OUR<br />STORY
            </h2>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: 'oklch(0.40 0.04 261)', maxWidth: '42ch' }}
            >
              Real students, real results. See graduation ceremonies, program highlights, athletics, and campus life — all on our YouTube channel.
            </p>

            <Link
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-semibold px-7 py-4 rounded-xl transition-all hover:brightness-110"
              style={{ background: '#FF0000', color: 'white', fontSize: '0.9375rem' }}
            >
              {/* YouTube icon */}
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
                <path
                  d="M21.543 2.498A2.762 2.762 0 0 0 19.6.545C17.896 0 11 0 11 0S4.104 0 2.4.545A2.762 2.762 0 0 0 .457 2.498C0 4.217 0 8 0 8s0 3.783.457 5.502A2.762 2.762 0 0 0 2.4 15.455C4.104 16 11 16 11 16s6.896 0 8.6-.545a2.762 2.762 0 0 0 1.943-1.953C22 11.783 22 8 22 8s0-3.783-.457-5.502Z"
                  fill="#FF0000"
                />
                <path
                  d="M21.543 2.498A2.762 2.762 0 0 0 19.6.545C17.896 0 11 0 11 0S4.104 0 2.4.545A2.762 2.762 0 0 0 .457 2.498C0 4.217 0 8 0 8s0 3.783.457 5.502A2.762 2.762 0 0 0 2.4 15.455C4.104 16 11 16 11 16s6.896 0 8.6-.545a2.762 2.762 0 0 0 1.943-1.953C22 11.783 22 8 22 8s0-3.783-.457-5.502Z"
                  fill="white"
                  fillOpacity="0"
                />
                <path d="M8.8 11.429V4.571L14.667 8 8.8 11.429Z" fill="white" />
              </svg>
              Watch on YouTube
            </Link>

            <p className="mt-4 text-xs" style={{ color: 'oklch(0.50 0.03 261)' }}>
              @lawsonstatecommunitycolleg273
            </p>
          </div>

          {/* Right: 3 photo previews */}
          <div className="hidden md:grid grid-cols-3 gap-3">
            {PREVIEW_PHOTOS.map((photo) => (
              <Link
                key={photo.src}
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl block"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'oklch(0.14 0.02 263 / 0.55)' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: '#FF0000' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{ background: 'linear-gradient(to top, oklch(0.14 0.02 263 / 0.85) 0%, transparent 100%)' }}
                >
                  <span className="text-white text-xs font-medium">{photo.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
