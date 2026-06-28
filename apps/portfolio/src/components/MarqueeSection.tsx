import { useEffect, useState } from 'react'

const CF =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F'

const IMAGES = [
  `${CF}hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`,
  `${CF}hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85`,
  `${CF}hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85`,
  `${CF}hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`,
  `${CF}hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85`,
  `${CF}hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85`,
  `${CF}hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85`,
  `${CF}hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85`,
  `${CF}hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85`,
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  `${CF}hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`,
  `${CF}hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85`,
  `${CF}hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`,
  `${CF}hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85`,
  `${CF}hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85`,
  `${CF}hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85`,
  `${CF}hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85`,
  `${CF}hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85`,
  `${CF}hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85`,
  `${CF}hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`,
  `${CF}hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`,
]

const ROW1 = IMAGES.slice(0, 11)
const ROW2 = IMAGES.slice(11)

const IMG_STYLE = {
  width: 'clamp(260px, 28vw, 400px)',
  height: 'clamp(165px, 18vw, 255px)',
  flexShrink: 0,
  borderRadius: '16px',
  objectFit: 'cover' as const,
}

export default function MarqueeSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const shift = scrollY * 0.18

  return (
    <section className="py-20 sm:py-28 md:py-36 overflow-hidden" style={{ background: '#0C0C0C' }}>
      {/* Row 1 — drifts left */}
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(-${shift}px)`, willChange: 'transform' }}
      >
        {[...ROW1, ...ROW1, ...ROW1].map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" style={IMG_STYLE} />
        ))}
      </div>
      {/* Row 2 — drifts right */}
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${shift - 480}px)`, willChange: 'transform' }}
      >
        {[...ROW2, ...ROW2, ...ROW2].map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" style={IMG_STYLE} />
        ))}
      </div>
    </section>
  )
}
