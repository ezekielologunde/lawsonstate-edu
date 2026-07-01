'use client'

import { useState, useMemo } from 'react'

type Building = { letter: string; name: string }

type Campus = {
  id: string
  name: string
  address: string
  city: string
  mapUrl: string
  mapImage: string
  mapAlt: string
  directionsHref: string
  buildings: Building[]
}

// Building directories transcribed verbatim from the official campus map legends
// (_resources/assets/img/about_us/*.{jpg,png}) — not invented placeholder data.
const CAMPUSES: Campus[] = [
  {
    id: 'birmingham',
    name: 'Birmingham Campus',
    address: '3060 Wilson Road SW',
    city: 'Birmingham, AL 35221',
    mapUrl: 'https://www.lawsonstate.edu/_resources/assets/img/about_us/Birmingham%20Campus%20Map.jpg',
    mapImage: 'https://www.lawsonstate.edu/_resources/assets/img/about_us/Birmingham%20Campus%20Map.jpg',
    mapAlt: 'Official Lawson State Birmingham Campus map showing West Campus and East Campus buildings',
    directionsHref: 'https://maps.google.com/?q=3060+Wilson+Road+SW,+Birmingham,+Alabama+35221',
    buildings: [
      { letter: 'A', name: 'Administration' },
      { letter: 'B', name: 'Academic' },
      { letter: 'C', name: 'Science' },
      { letter: 'D', name: 'Library' },
      { letter: 'E', name: 'Arthur Shores Fine Arts' },
      { letter: 'F', name: 'Leon Kennedy Student Center' },
      { letter: 'G', name: 'W. Fred Horn High Tech' },
      { letter: 'H', name: 'Shipping & Receiving / Grounds' },
      { letter: 'I', name: 'Facility Operations / G.E.D. Program' },
      { letter: 'J', name: 'Howard' },
      { letter: 'K', name: 'A. G. Gaston' },
      { letter: 'L', name: 'Ethel H. Hall Health Professions' },
      { letter: 'M', name: 'Public Relations / Community Affairs' },
      { letter: 'N', name: 'Student Residence Hall' },
      { letter: 'O', name: 'Information / Campus Security' },
      { letter: 'P', name: 'Student Residence Hall' },
      { letter: 'Q', name: 'Baseball Field & Press Box' },
      { letter: 'R', name: 'Dr. Perry W. Ward Alabama Center for Advanced Technology & Training' },
      { letter: 'S', name: 'Storm Shelter' },
      { letter: 'T', name: 'Student Residence Hall' },
      { letter: 'U', name: 'Boiler' },
      { letter: 'V', name: 'Information / Campus Security' },
      { letter: 'W', name: 'Academic Success Center' },
      { letter: 'X', name: 'Birmingham Fire Station No. 25' },
    ],
  },
  {
    id: 'bessemer',
    name: 'Bessemer Campus',
    address: '1100 9th Avenue SW',
    city: 'Bessemer, AL 35022',
    mapUrl: 'https://www.lawsonstate.edu/_resources/assets/img/about_us/Bessemer%20Campus%20Map.png',
    mapImage: 'https://www.lawsonstate.edu/_resources/assets/img/about_us/Bessemer%20Campus%20Map.png',
    mapAlt: 'Official Lawson State Bessemer Campus map showing buildings A through J',
    directionsHref: 'https://maps.google.com/?q=1100+Ninth+Avenue+SW,+Bessemer,+Alabama+35022',
    buildings: [
      { letter: 'A', name: 'Building A' },
      { letter: 'B', name: 'Building B' },
      { letter: 'C', name: 'Automotive' },
      { letter: 'D', name: 'Diesel Mechanics' },
      { letter: 'E', name: 'The Jess Lanier Building' },
      { letter: 'F', name: 'The Millsap Industrial Training Center' },
      { letter: 'G', name: 'North Campus' },
      { letter: 'H', name: 'Ethel H. Hall Alabama Center for Automotive Excellence' },
      { letter: 'I', name: 'Center for Community Development' },
      { letter: 'J', name: 'General Automotive' },
    ],
  },
]

function CampusMapCard({ campus }: { campus: Campus }) {
  const [query, setQuery] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const filtered = useMemo(() => {
    if (!query.trim()) return campus.buildings
    const q = query.toLowerCase()
    return campus.buildings.filter(b => b.name.toLowerCase().includes(q) || b.letter.toLowerCase() === q)
  }, [query, campus.buildings])

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        {/* Map thumbnail — click to open full-screen lightbox */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative block w-full text-left press"
          style={{ minHeight: '280px', background: 'oklch(0.95 0.03 255)' }}
          aria-label={`Open full-size map of ${campus.name}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={campus.mapImage}
            alt={campus.mapAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 font-bold rounded-full px-3 py-1.5 text-xs"
            style={{ background: 'oklch(0.22 0.17 261 / 0.90)', color: 'white' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Tap to zoom
          </div>
        </button>

        {/* Building directory */}
        <div className="p-6 flex flex-col">
          <h3 className="font-display font-black mb-1" style={{ fontSize: '1.3rem', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>{campus.name}</h3>
          <p className="text-sm mb-4" style={{ color: 'oklch(0.50 0.03 261)' }}>{campus.address} · {campus.city}</p>

          <label htmlFor={`search-${campus.id}`} className="sr-only">Search buildings on {campus.name}</label>
          <input
            id={`search-${campus.id}`}
            type="search"
            placeholder="Search buildings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-sm mb-3"
            style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.10)', color: 'oklch(0.16 0.04 261)' }}
          />

          <ul className="flex flex-col gap-1 overflow-y-auto pr-1" style={{ maxHeight: '220px' }}>
            {filtered.map((b) => (
              <li key={b.letter} className="flex items-start gap-3 py-1.5 text-sm" style={{ borderBottom: '1px solid oklch(0 0 0 / 0.05)' }}>
                <span
                  className="shrink-0 flex items-center justify-center rounded-full font-bold"
                  style={{ width: '22px', height: '22px', fontSize: '0.68rem', background: 'oklch(0.22 0.17 261)', color: 'white' }}
                  aria-hidden
                >
                  {b.letter}
                </span>
                <span style={{ color: 'oklch(0.35 0.05 261)' }}>{b.name}</span>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="text-sm py-2" style={{ color: 'oklch(0.55 0.04 261)' }}>No buildings match &ldquo;{query}&rdquo;.</li>
            )}
          </ul>

          <a
            href={campus.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="press btn-shimmer mt-4 inline-flex items-center justify-center gap-2 font-bold px-5 py-2.5 rounded-lg text-sm"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
          >
            Get Directions →<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${campus.name} map, enlarged`}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'oklch(0.05 0 0 / 0.85)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 press flex items-center justify-center rounded-full"
            style={{ width: '40px', height: '40px', background: 'oklch(1 0 0 / 0.12)', color: 'white' }}
            aria-label="Close map"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={campus.mapImage}
            alt={campus.mapAlt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default function CampusMaps() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {CAMPUSES.map((c) => (
        <CampusMapCard key={c.id} campus={c} />
      ))}
    </div>
  )
}
