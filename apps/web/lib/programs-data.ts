export type DegreeType = 'AA' | 'AS' | 'AAS' | 'AOT' | 'CER' | 'STC'
export type DeliveryMode = 'ground' | 'hybrid' | 'online' | 'virtual'
export type ProgramCategory = 'career-technical' | 'college-transfer' | 'health-professions' | 'business-it' | 'stem' | 'other'

export interface Program {
  id: string
  name: string
  category: ProgramCategory
  degreeType: DegreeType
  deliveryModes: DeliveryMode[]
  duration: string // e.g. "2 years", "4 semesters", "8 weeks"
  durationMonths: number
  description: string
  href: string
  tags?: string[]
  transferable: boolean
  jobPlacementRate?: number
}

export const DEGREE_TYPES: Record<DegreeType, { label: string; description: string }> = {
  AA: { label: 'Associate in Arts', description: '60 credits for 4-year transfer' },
  AS: { label: 'Associate in Science', description: '60 credits for 4-year transfer' },
  AAS: { label: 'Associate in Applied Science', description: '60-76 credits, job-ready' },
  AOT: { label: 'Associate in Occupational Technology', description: '70-76 credits, specialized' },
  CER: { label: 'Certificate', description: '42-59 credits, industry-recognized' },
  STC: { label: 'Short Certificate', description: '24-29 credits, quick credential' },
}

export const DELIVERY_MODES: Record<DeliveryMode, { label: string; icon: string }> = {
  ground: { label: 'On Campus', icon: '🏫' },
  hybrid: { label: 'Hybrid', icon: '🔀' },
  online: { label: 'Online', icon: '💻' },
  virtual: { label: 'Virtual (Live)', icon: '🎥' },
}

export const CATEGORIES: Record<ProgramCategory, { label: string; color: string }> = {
  'career-technical': { label: 'Career Technical', color: 'oklch(0.48 0.22 27)' },
  'college-transfer': { label: 'College Transfer', color: 'oklch(0.50 0.22 248)' },
  'health-professions': { label: 'Health Professions', color: 'oklch(0.68 0.20 76)' },
  'business-it': { label: 'Business & IT', color: 'oklch(0.55 0.22 28)' },
  stem: { label: 'STEM & Honors', color: 'oklch(0.62 0.22 248)' },
  other: { label: 'Other', color: 'oklch(0.22 0.17 261)' },
}

// Sample programs dataset — extend with full catalog
export const SAMPLE_PROGRAMS: Program[] = [
  {
    id: 'nursing-rn',
    name: 'Nursing (RN)',
    category: 'health-professions',
    degreeType: 'AAS',
    deliveryModes: ['ground', 'hybrid'],
    duration: '2 years',
    durationMonths: 24,
    description: 'Top 10 RN Program in Alabama. NCLEX-RN preparation with clinical rotations at partner hospitals.',
    href: '/programs/nursing-rn',
    tags: ['high-demand', 'healthcare', 'licensed-profession'],
    transferable: true,
    jobPlacementRate: 96,
  },
  {
    id: 'welding',
    name: 'Welding Technology',
    category: 'career-technical',
    degreeType: 'AOT',
    deliveryModes: ['ground'],
    duration: '2 years',
    durationMonths: 24,
    description: 'American Welding Society certification-ready program with hands-on lab instruction.',
    href: '/programs/welding',
    tags: ['manufacturing', 'skilled-trade', 'certification'],
    transferable: false,
    jobPlacementRate: 94,
  },
  {
    id: 'business-admin',
    name: 'Business Administration',
    category: 'business-it',
    degreeType: 'AAS',
    deliveryModes: ['ground', 'online', 'hybrid'],
    duration: '2 years',
    durationMonths: 24,
    description: 'ACBSP-accredited program preparing for management and entrepreneurship roles.',
    href: '/programs/business-admin',
    tags: ['business', 'transferable', 'online-available'],
    transferable: true,
    jobPlacementRate: 89,
  },
  {
    id: 'general-studies-aa',
    name: 'General Studies (AA)',
    category: 'college-transfer',
    degreeType: 'AA',
    deliveryModes: ['ground', 'hybrid', 'online'],
    duration: '2 years',
    durationMonths: 24,
    description: 'Transfer to 4-year university. Partner agreements with 20+ schools including Auburn, Alabama, UAB.',
    href: '/programs/general-studies-aa',
    tags: ['transfer', 'liberal-arts', 'online-available'],
    transferable: true,
  },
  {
    id: 'cybersecurity-stc',
    name: 'Cybersecurity (Short Certificate)',
    category: 'business-it',
    degreeType: 'STC',
    deliveryModes: ['ground', 'online'],
    duration: '8 months',
    durationMonths: 8,
    description: 'Fast-track industry certification in cybersecurity with CompTIA Security+ prep.',
    href: '/programs/cybersecurity-stc',
    tags: ['it', 'security', 'high-demand'],
    transferable: false,
    jobPlacementRate: 92,
  },
]
