import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import LiveProjectButton from './LiveProjectButton'

const CF =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F'

const PROJECTS = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: {
      col1: [
        `${CF}hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`,
        `${CF}hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85`,
      ],
      col2: `${CF}hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85`,
    },
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: {
      col1: [
        `${CF}hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`,
        `${CF}hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85`,
      ],
      col2: `${CF}hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85`,
    },
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: {
      col1: [
        `${CF}hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85`,
        `${CF}hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85`,
      ],
      col2: `${CF}hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85`,
    },
  },
]

const TOTAL = PROJECTS.length
type Project = (typeof PROJECTS)[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={containerRef} style={{ height: '85vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: `${96 + index * 28}px` }}>
        <motion.div
          style={{
            scale,
            background: '#0C0C0C',
            border: '2px solid rgba(215,226,234,0.6)',
            borderRadius: 'clamp(28px, 4.5vw, 52px)',
          }}
          className="p-4 sm:p-6 md:p-8"
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3">
            <span
              className="font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)', color: '#D7E2EA', letterSpacing: '-0.02em' }}
            >
              {project.number}
            </span>
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="flex flex-col gap-0.5 text-right">
                <span
                  className="uppercase tracking-widest font-medium"
                  style={{ fontSize: 'clamp(0.55rem, 0.8vw, 0.75rem)', color: 'rgba(215,226,234,0.45)' }}
                >
                  {project.category}
                </span>
                <span
                  className="font-medium uppercase tracking-wide"
                  style={{ fontSize: 'clamp(0.85rem, 1.8vw, 2rem)', color: '#D7E2EA', whiteSpace: 'nowrap' }}
                >
                  {project.name}
                </span>
              </div>
              <div className="shrink-0">
                <LiveProjectButton />
              </div>
            </div>
          </div>

          {/* Image grid */}
          <div
            className="flex gap-3 sm:gap-4"
            style={{ height: 'clamp(200px, 38vh, 480px)' }}
          >
            {/* Left column — 40% */}
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <img
                src={project.images.col1[0]}
                alt=""
                loading="lazy"
                className="w-full object-cover"
                style={{ flex: '0 0 38%', borderRadius: 'clamp(14px, 2.5vw, 28px)' }}
              />
              <img
                src={project.images.col1[1]}
                alt=""
                loading="lazy"
                className="w-full object-cover"
                style={{ flex: '1 1 0', borderRadius: 'clamp(14px, 2.5vw, 28px)' }}
              />
            </div>
            {/* Right column — 60% */}
            <div style={{ width: '60%' }}>
              <img
                src={project.images.col2}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ borderRadius: 'clamp(14px, 2.5vw, 28px)' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[48px] sm:rounded-t-[60px] md:rounded-t-[72px] relative z-10"
      style={{ background: '#0C0C0C', marginTop: '-3rem' }}
    >
      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-24">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none text-center mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3.5rem, 14vw, 12rem)', letterSpacing: '-0.02em' }}
          >
            Project
          </h2>
        </FadeIn>

        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
