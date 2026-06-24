import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      style={{ background: '#0C0C0C', position: 'relative', overflowX: 'clip' }}
      className="h-screen flex flex-col"
    >
      {/* Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{ color: '#D7E2EA' }}
            className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider hover:opacity-60 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Heading */}
      <div className="overflow-hidden relative z-20">
        <FadeIn delay={0.15} y={50}>
          <h1
            className="hero-heading font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 16.5vw, 17rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Hi, i&apos;m jack
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — centered on mobile, bottom-aligned on sm+ */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px] xl:w-[560px]
        "
      >
        <FadeIn delay={0.55} y={30}>
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack — 3D Creator"
              className="w-full object-contain select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end pb-7 sm:pb-9 md:pb-11 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.65rem, 1.1vw, 1rem)',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              lineHeight: 1.5,
              maxWidth: '200px',
            }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
