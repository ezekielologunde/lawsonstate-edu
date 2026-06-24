import FadeIn from './FadeIn'

const SERVICES = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[48px] sm:rounded-t-[60px] md:rounded-t-[72px]"
      style={{ background: '#FFFFFF' }}
    >
      <div className="px-5 sm:px-10 md:px-16 py-20 sm:py-28 md:py-36">
        <FadeIn>
          <h2
            className="font-black uppercase leading-none text-center mb-16 sm:mb-20 md:mb-28"
            style={{
              color: '#0C0C0C',
              fontSize: 'clamp(3.5rem, 14vw, 12rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Services
          </h2>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.07}>
              <div
                className="flex items-start gap-5 sm:gap-10 md:gap-14 py-8 sm:py-10"
                style={{
                  borderTop: '1px solid rgba(12,12,12,0.12)',
                  ...(i === SERVICES.length - 1
                    ? { borderBottom: '1px solid rgba(12,12,12,0.12)' }
                    : {}),
                }}
              >
                <span
                  className="font-black leading-none shrink-0"
                  style={{ fontSize: 'clamp(2.8rem, 9vw, 10rem)', color: '#0C0C0C', letterSpacing: '-0.02em' }}
                >
                  {s.number}
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <span
                    className="font-medium uppercase tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2vw, 2rem)', color: '#0C0C0C' }}
                  >
                    {s.name}
                  </span>
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)', color: 'rgba(12,12,12,0.55)' }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
