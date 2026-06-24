import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const FIGMA =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/'

const DECORATIONS = [
  {
    src: `${FIGMA}moon_icon.11395d36.png`,
    cls: 'absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none',
    size: 'w-28 sm:w-40 md:w-52',
    x: -80,
    delay: 0.1,
  },
  {
    src: `${FIGMA}lego_icon-1.703bb594.png`,
    cls: 'absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none',
    size: 'w-28 sm:w-40 md:w-52',
    x: 80,
    delay: 0.15,
  },
  {
    src: `${FIGMA}p59_1.4659672e.png`,
    cls: 'absolute bottom-[6%] left-[2%] sm:left-[5%] md:left-[8%] pointer-events-none',
    size: 'w-24 sm:w-36 md:w-44',
    x: -80,
    delay: 0.25,
  },
  {
    src: `${FIGMA}Group_134-1.2e04f3ce.png`,
    cls: 'absolute bottom-[6%] right-[2%] sm:right-[5%] md:right-[8%] pointer-events-none',
    size: 'w-32 sm:w-44 md:w-56',
    x: 80,
    delay: 0.3,
  },
]

const ABOUT_TEXT =
  'With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let’s build something incredible together!'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative px-5 sm:px-8 py-24"
      style={{ background: '#0C0C0C' }}
    >
      {DECORATIONS.map((d, i) => (
        <FadeIn key={i} delay={d.delay} x={d.x} y={0} duration={0.9} className={d.cls}>
          <img src={d.src} alt="" className={d.size} />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-16 md:gap-20 max-w-2xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none text-center"
            style={{ fontSize: 'clamp(3.5rem, 14vw, 12rem)', letterSpacing: '-0.02em' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-center leading-relaxed font-medium"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
          }}
        />

        <ContactButton />
      </div>
    </section>
  )
}
