import type { Program } from '@/components/programs'

// Mirrors the `departments` table rows where is_featured_home = true.
// Used when Supabase returns empty (e.g. misconfigured Production env vars)
// so the homepage still shows the real four featured program cards instead
// of the generic "200+ programs" teaser.
export const FEATURED_PROGRAMS_FALLBACK: Program[] = [
  {
    id: 'd1b990e5-4ef6-4eee-aa70-24d4b1349666',
    name: 'Health Professions',
    description: 'Nursing, Dental Hygiene, Radiologic Technology, EMS, Pharmacy Technology — launch a career that makes a real difference.',
    tag: 'High demand',
    href: '/academics/health-professions',
    grid_slot: 'health',
    image_url: 'https://www.lawsonstate.edu/_resources/assets/img/nursing.jpg',
  },
  {
    id: '32507aa3-7ae7-4519-8a5e-37fe08d75ba9',
    name: 'Career Technical Education',
    description: 'Automotive Technology, Welding, HVAC, Cosmetology, Construction Management — hands-on training for the modern workforce.',
    tag: null,
    href: '/academics/career-technical',
    grid_slot: 'career',
    image_url: 'https://www.lawsonstate.edu/_resources/assets/img/automotive_pictures/Lawson%20State%20ACAE%202.JPG',
  },
  {
    id: '8d7942e8-41e7-4e36-bd62-ef43127ed694',
    name: 'College Transfer',
    description: 'Complete your first two years at Lawson State, then transfer to a four-year university with your general education credits intact.',
    tag: 'Save on tuition',
    href: '/academics/transfer',
    grid_slot: 'transfer',
    image_url: 'https://www.lawsonstate.edu/_resources/assets/img/grads.jpg',
  },
  {
    id: 'e066851b-7ecd-4cd6-ac99-f9c76aa08716',
    name: 'Business & Information Technologies',
    description: 'Accounting, Business Management, Computer Science, Networking, Cybersecurity — skills built for the digital economy.',
    tag: null,
    href: '/academics/business-it',
    grid_slot: 'business',
    image_url: 'https://www.lawsonstate.edu/_resources/assets/img/business%20bldg.jpg',
  },
]
