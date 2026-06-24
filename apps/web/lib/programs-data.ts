export type DegreeType = 'AA' | 'AS' | 'AAS' | 'AOT' | 'CER' | 'STC'
export type DeliveryMode = 'ground' | 'hybrid' | 'online' | 'virtual'
export type ProgramCategory = 'career-technical' | 'college-transfer' | 'health-professions' | 'business-it' | 'stem' | 'other'

export interface Program {
  id: string
  name: string
  category: ProgramCategory
  degreeType: DegreeType
  deliveryModes: DeliveryMode[]
  duration: string
  durationMonths: number
  description: string
  href: string
  tags?: string[]
  transferable: boolean
  jobPlacementRate?: number
}

export const DEGREE_TYPES: Record<DegreeType, { label: string; description: string }> = {
  AA:  { label: 'Associate in Arts',              description: '60 credits for 4-year transfer' },
  AS:  { label: 'Associate in Science',           description: '60 credits for 4-year transfer' },
  AAS: { label: 'Associate in Applied Science',   description: '60-76 credits, job-ready' },
  AOT: { label: 'Associate in Occupational Tech', description: '70-76 credits, specialized' },
  CER: { label: 'Certificate',                    description: '42-59 credits, industry-recognized' },
  STC: { label: 'Short Certificate',              description: '24-29 credits, quick credential' },
}

export const DELIVERY_MODES: Record<DeliveryMode, { label: string; icon: string }> = {
  ground:  { label: 'On Campus',     icon: '🏫' },
  hybrid:  { label: 'Hybrid',        icon: '🔀' },
  online:  { label: 'Online',        icon: '💻' },
  virtual: { label: 'Virtual (Live)',icon: '🎥' },
}

export const CATEGORIES: Record<ProgramCategory, { label: string; color: string }> = {
  'career-technical':  { label: 'Career Technical',  color: 'oklch(0.79 0.19 78)' },
  'college-transfer':  { label: 'College Transfer',   color: 'oklch(0.22 0.17 261)' },
  'health-professions':{ label: 'Health Professions', color: 'oklch(0.55 0.16 160)' },
  'business-it':       { label: 'Business & IT',      color: 'oklch(0.22 0.17 261)' },
  stem:                { label: 'STEM & Honors',      color: 'oklch(0.35 0.18 230)' },
  other:               { label: 'Other',              color: 'oklch(0.45 0.08 263)' },
}

export const SAMPLE_PROGRAMS: Program[] = [

  // ── BUSINESS & INFORMATION TECHNOLOGIES ──────────────────────────────────────

  { id: 'business-admin-aa', name: 'Business Administration (AA)',
    category: 'business-it', degreeType: 'AA', deliveryModes: ['ground','hybrid','online'],
    duration: '2 years', durationMonths: 24, transferable: true,
    description: 'ACBSP-accredited transfer program. Prepare for 4-year business, management, accounting, or finance degrees.',
    href: '/programs/business-administration-aa', tags: ['business','transfer','acbsp','online-available'] },

  { id: 'business-education-aa', name: 'Business Education (AA)',
    category: 'business-it', degreeType: 'AA', deliveryModes: ['ground','hybrid','online'],
    duration: '2 years', durationMonths: 24, transferable: true,
    description: 'Transfer to entrepreneurship, real estate, e-commerce, or other business-related 4-year programs.',
    href: '/programs/business-education-aa', tags: ['business','transfer','acbsp','online-available'] },

  { id: 'accounting-tech-aas', name: 'Accounting Technology (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 91,
    description: 'Financial document preparation, account analysis, and verification. QuickBooks and computerized accounting.',
    href: '/programs/accounting-technology-aas', tags: ['accounting','job-ready','quickbooks'] },

  { id: 'business-management-aas', name: 'Business Administration & Management (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 88,
    description: 'Management skills across business fields. E-commerce focus. Internship required.',
    href: '/programs/business-management-aas', tags: ['business','management','job-ready'] },

  { id: 'computer-science-business-aas', name: 'Computer Science – Business (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 90,
    description: 'Programming and computer applications for business. Python, Swift, and web development.',
    href: '/programs/computer-science-business-aas', tags: ['it','programming','business'] },

  { id: 'computer-science-general-aas', name: 'Computer Science – General (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 93,
    description: 'Networking, security, system administration, and programming. CCNA and CompTIA certification paths.',
    href: '/programs/computer-science-general-aas', tags: ['it','networking','security','high-demand'] },

  { id: 'office-admin-general-aas', name: 'Office Administration – General (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 85,
    description: 'Administrative, computer, and interpersonal skills. Office automation and efficiency focus.',
    href: '/programs/office-admin-general-aas', tags: ['office','administration','job-ready'] },

  { id: 'office-admin-legal-aas', name: 'Office Administration – Legal (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 87,
    description: 'Paralegal-focused program. Legal concepts, business law, transcription, and office procedures.',
    href: '/programs/office-admin-legal-aas', tags: ['legal','paralegal','office'] },

  { id: 'medical-office-admin-aas', name: 'Medical Office Administration (AAS)',
    category: 'business-it', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 92,
    description: 'Medical coding, billing, terminology, and office procedures. Multiple industry certifications available.',
    href: '/programs/medical-office-admin-aas', tags: ['healthcare','medical-coding','office','certifications'] },

  { id: 'accounting-tech-cer', name: 'Accounting Technology (Certificate)',
    category: 'business-it', degreeType: 'CER', deliveryModes: ['ground','hybrid'],
    duration: '1 year', durationMonths: 12, transferable: false,
    description: 'Accounting skills and QuickBooks proficiency for career changers and entry-level positions.',
    href: '/programs/accounting-tech-certificate', tags: ['accounting','certificate'] },

  { id: 'computer-science-cer', name: 'Computer Science (Certificate)',
    category: 'business-it', degreeType: 'CER', deliveryModes: ['ground','hybrid'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 91,
    description: 'Networking, security, and infrastructure fundamentals. CompTIA A+ and Network+ paths available.',
    href: '/programs/computer-science-certificate', tags: ['it','networking','security'] },

  { id: 'cybersecurity-cer', name: 'Computer Science – Cybersecurity (Certificate)',
    category: 'business-it', degreeType: 'CER', deliveryModes: ['ground','online'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 94,
    description: 'Protect critical systems and data. CompTIA Security+, CySA+, and ethical hacking certifications.',
    href: '/programs/cybersecurity-certificate', tags: ['it','security','cybersecurity','high-demand'] },

  { id: 'cybersecurity-stc', name: 'Cybersecurity (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','online'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 93,
    description: 'Fast-track cybersecurity credential. CompTIA Security+ and ethical hacking fundamentals.',
    href: '/programs/cybersecurity-short-certificate', tags: ['it','security','high-demand'] },

  { id: 'cloud-computing-stc', name: 'Cloud Computing (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','online'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 92,
    description: 'AWS Cloud Practitioner certification. Infrastructure, services, and cloud migration fundamentals.',
    href: '/programs/cloud-computing-short-certificate', tags: ['it','cloud','aws','high-demand'] },

  { id: 'web-development-stc', name: 'Web Technologies (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','online'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 89,
    description: 'Front-end and back-end web development. HTML, CSS, JavaScript, and PHP fundamentals.',
    href: '/programs/web-technologies-short-certificate', tags: ['it','web-development'] },

  { id: 'app-dev-swift-stc', name: 'App Development – Swift (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','online'],
    duration: '5 months', durationMonths: 5, transferable: false, jobPlacementRate: 88,
    description: 'iOS app development with Swift and Xcode. CertiPort certification included.',
    href: '/programs/app-dev-swift-short-certificate', tags: ['it','app-development','ios'] },

  { id: 'networking-stc', name: 'Networking (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 91,
    description: 'CCNA and CompTIA Network+ preparation. LAN, WAN, and network administration.',
    href: '/programs/networking-short-certificate', tags: ['it','networking','ccna','high-demand'] },

  { id: 'desktop-support-stc', name: 'Desktop Support Technician (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 87,
    description: 'CompTIA A+ certification path. Hardware, software support, and troubleshooting.',
    href: '/programs/desktop-support-technician-short-certificate', tags: ['it','support','a-plus'] },

  { id: 'management-supervision-stc', name: 'Management and Supervision (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false, jobPlacementRate: 86,
    description: 'Leadership skills for supervisors and managers. Goal setting, team building, communication.',
    href: '/programs/management-supervision-short-certificate', tags: ['management','leadership'] },

  { id: 'real-estate-stc', name: 'Real Estate (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '4 months', durationMonths: 4, transferable: false, jobPlacementRate: 88,
    description: 'Pre-licensure program. 60 hours meeting Alabama Real Estate Commission standards.',
    href: '/programs/real-estate-short-certificate', tags: ['real-estate','pre-license'] },

  { id: 'accounting-stc', name: 'Accounting (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '4 months', durationMonths: 4, transferable: false,
    description: 'Basic accounting principles, computerized bookkeeping, and financial record keeping.',
    href: '/programs/accounting-short-certificate', tags: ['accounting','bookkeeping'] },

  { id: 'programming-stc', name: 'Programming (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','online'],
    duration: '5 months', durationMonths: 5, transferable: false, jobPlacementRate: 87,
    description: 'Python and object-oriented programming fundamentals. Entry-level software development credential.',
    href: '/programs/programming-short-certificate', tags: ['it','programming','python'] },

  { id: 'computer-applications-stc', name: 'Computer Applications (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '4 months', durationMonths: 4, transferable: false,
    description: 'Microsoft Office suite proficiency. Word, Excel, PowerPoint, and Access for office productivity.',
    href: '/programs/computer-applications-short-certificate', tags: ['it','microsoft-office','productivity'] },

  { id: 'office-admin-general-stc', name: 'Office Administration – General (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Office procedures, keyboarding, and business communications for administrative roles.',
    href: '/programs/office-admin-general-short-certificate', tags: ['office','administration'] },

  { id: 'office-admin-legal-stc', name: 'Office Administration – Legal (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Legal office procedures and terminology for entry-level paralegal and legal assistant roles.',
    href: '/programs/office-admin-legal-short-certificate', tags: ['legal','paralegal','office'] },

  { id: 'office-admin-medical-stc', name: 'Office Administration – Medical (Short Certificate)',
    category: 'business-it', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Medical office procedures, terminology, and billing basics for healthcare administrative roles.',
    href: '/programs/office-admin-medical-short-certificate', tags: ['healthcare','office','medical-billing'] },

  // ── COLLEGE TRANSFER ─────────────────────────────────────────────────────────

  { id: 'general-studies-aa', name: 'General Studies (AA)',
    category: 'college-transfer', degreeType: 'AA', deliveryModes: ['ground','hybrid','online'],
    duration: '2 years', durationMonths: 24, transferable: true,
    description: 'Transfer to 4-year university. Partner agreements with 20+ schools including Auburn, Alabama, and UAB.',
    href: '/programs/general-studies-aa', tags: ['transfer','liberal-arts','online-available'] },

  { id: 'general-studies-as', name: 'General Studies (AS)',
    category: 'college-transfer', degreeType: 'AS', deliveryModes: ['ground','hybrid','online'],
    duration: '2 years', durationMonths: 24, transferable: true,
    description: 'Science-focused transfer degree. Pre-med, pre-engineering, and STEM transfer pathways to 4-year schools.',
    href: '/programs/general-studies-as', tags: ['transfer','science','stem','online-available'] },

  // ── HEALTH PROFESSIONS ────────────────────────────────────────────────────────

  { id: 'nursing-rn', name: 'Nursing – RN (AAS)',
    category: 'health-professions', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: true, jobPlacementRate: 96,
    description: 'Top 10 RN Program in Alabama. NCLEX-RN preparation with clinical rotations at partner hospitals.',
    href: '/programs/nursing-rn', tags: ['healthcare','licensed-profession','high-demand'] },

  { id: 'dental-assistant-aas', name: 'Dental Assisting (AAS)',
    category: 'health-professions', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 90,
    description: 'Chair-side dental procedures, patient care, radiography, and dental office management.',
    href: '/programs/dental-assisting-aas', tags: ['dental','healthcare','licensed-profession'] },

  { id: 'diagnostic-medical-sonography-aas', name: 'Diagnostic Medical Sonography (AAS)',
    category: 'health-professions', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 92,
    description: 'Ultrasound imaging for abdominal, OB/GYN, and vascular applications. ARDMS registry prep.',
    href: '/programs/diagnostic-medical-sonography-aas', tags: ['sonography','imaging','healthcare','high-demand'] },

  { id: 'radiologic-technology-aas', name: 'Radiologic Technology (AAS)',
    category: 'health-professions', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 91,
    description: 'X-ray, fluoroscopy, and medical imaging. ARRT board exam preparation.',
    href: '/programs/radiologic-technology-aas', tags: ['radiology','imaging','healthcare','licensed-profession'] },

  { id: 'social-work-technology-aas', name: 'Social Work Technology (AAS)',
    category: 'health-professions', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: true, jobPlacementRate: 88,
    description: 'Case management, social services, and human services delivery. Community internship included.',
    href: '/programs/social-work-technology-aas', tags: ['social-work','human-services','community'] },

  { id: 'dental-assistant-cer', name: 'Dental Assisting (Certificate)',
    category: 'health-professions', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 89,
    description: 'Chair-side assisting, patient care, and dental radiography for entry-level dental practice.',
    href: '/programs/dental-assisting-certificate', tags: ['dental','healthcare'] },

  { id: 'practical-nursing-cer', name: 'Practical Nursing – LPN (Certificate)',
    category: 'health-professions', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 93,
    description: 'NCLEX-PN preparation. Licensed practical nursing credential for hospitals, clinics, and care facilities.',
    href: '/programs/practical-nursing-certificate', tags: ['nursing','lpn','healthcare','high-demand'] },

  { id: 'pharmacy-tech-cer', name: 'Pharmacy Technology (Certificate)',
    category: 'health-professions', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 88,
    description: 'Medication dispensing, compounding, and pharmacy law. PTCE board exam preparation.',
    href: '/programs/pharmacy-technology-certificate', tags: ['pharmacy','healthcare','certifications'] },

  { id: 'nursing-assistant-stc', name: 'Nursing Assistant (Short Certificate)',
    category: 'health-professions', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '3 months', durationMonths: 3, transferable: false, jobPlacementRate: 91,
    description: 'State Nurse Aide Registry credential. Bedside care, vital signs, and patient safety.',
    href: '/programs/nursing-assistant-short-certificate', tags: ['nursing','cna','healthcare','high-demand'] },

  { id: 'ems-basic-stc', name: 'Emergency Medical Services – Basic (Short Certificate)',
    category: 'health-professions', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '3 months', durationMonths: 3, transferable: false, jobPlacementRate: 89,
    description: 'EMT Basic certification. Emergency assessment, airway management, and trauma care.',
    href: '/programs/ems-basic-short-certificate', tags: ['ems','emt','emergency','healthcare'] },

  { id: 'ems-advanced-stc', name: 'Emergency Medical Services – Advanced (Short Certificate)',
    category: 'health-professions', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 90,
    description: 'Advanced EMT or Paramedic pathway. IV therapy, advanced airway, and cardiac monitoring.',
    href: '/programs/ems-advanced-short-certificate', tags: ['ems','paramedic','emergency','healthcare'] },

  // ── CAREER TECHNICAL — AUTOMOTIVE ────────────────────────────────────────────

  { id: 'ford-asset-aas', name: 'Automotive Service Technology – Ford ASSET (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 94,
    description: 'Ford-sponsored dealership program. Factory training, Ford certification, and guaranteed job placement.',
    href: '/programs/ford-asset-aas', tags: ['automotive','ford','dealership','high-demand','sponsored'] },

  { id: 'gm-asep-aas', name: 'Automotive Service Technology – GM ASEP (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 93,
    description: 'GM-sponsored dealership program. Factory certification and guaranteed dealership placement.',
    href: '/programs/gm-asep-aas', tags: ['automotive','gm','dealership','high-demand','sponsored'] },

  { id: 'toyota-tten-aas', name: 'Automotive Service Technology – Toyota T-TEN (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 95,
    description: 'Toyota-sponsored technician program. Factory certification, paid internships, and dealership placement.',
    href: '/programs/toyota-tten-aas', tags: ['automotive','toyota','dealership','high-demand','sponsored'] },

  { id: 'mercedes-aas', name: 'Automotive Service Technology – MercedesTech Program (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 95,
    description: 'Mercedes-Benz factory-sponsored program. European luxury vehicle diagnostics and certification.',
    href: '/programs/mercedes-aas', tags: ['automotive','mercedes','luxury','high-demand','sponsored'] },

  { id: 'auto-mechanic-aot', name: 'Automotive Mechanics (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 91,
    description: 'ASE certification paths. Engine, drivetrain, brakes, electrical, and HVAC diagnostics.',
    href: '/programs/automotive-mechanics-aot', tags: ['automotive','ase','mechanics','high-demand'] },

  { id: 'auto-body-repair-aot', name: 'Auto Body/Collision Repair (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 89,
    description: 'Collision repair, paint, refinishing, and structural repair. I-CAR and ASE certification preparation.',
    href: '/programs/auto-body-repair-aot', tags: ['automotive','collision','paint','i-car'] },

  { id: 'auto-mechanics-cer', name: 'Automotive Mechanics (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 88,
    description: 'Core automotive repair skills. Engine diagnostics, brakes, and drivetrain fundamentals.',
    href: '/programs/automotive-mechanics-certificate', tags: ['automotive','ase','mechanics'] },

  { id: 'auto-body-repair-cer', name: 'Auto Body/Collision Repair (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 86,
    description: 'Collision repair and refinishing fundamentals. Entry-level body shop credential.',
    href: '/programs/auto-body-repair-certificate', tags: ['automotive','collision','paint'] },

  { id: 'auto-body-repair-stc', name: 'Auto Body/Collision Repair (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 85,
    description: 'Dent removal, panel replacement, and basic paint and refinishing techniques.',
    href: '/programs/auto-body-repair-short-certificate', tags: ['automotive','collision'] },

  { id: 'auto-mechanics-stc', name: 'Automotive Mechanics (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 86,
    description: 'Oil service, brakes, tires, and basic engine maintenance. Entry-level shop credential.',
    href: '/programs/automotive-mechanics-short-certificate', tags: ['automotive','mechanics'] },

  // ── CAREER TECHNICAL — CONSTRUCTION & TRADES ─────────────────────────────────

  { id: 'building-construction-aas', name: 'Building Construction Technology (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 90,
    description: 'Commercial and residential construction. Blueprints, estimating, project management, and site supervision.',
    href: '/programs/building-construction-aas', tags: ['construction','trades','project-management'] },

  { id: 'building-construction-stc', name: 'Building Construction (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 87,
    description: 'Construction fundamentals, safety, and basic building trades skills.',
    href: '/programs/building-construction-short-certificate', tags: ['construction','trades'] },

  { id: 'carpentry-stc', name: 'Carpentry (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 88,
    description: 'Rough and finish carpentry, framing, and trim work. NCCER credentials available.',
    href: '/programs/carpentry-short-certificate', tags: ['carpentry','construction','nccer'] },

  { id: 'electrical-stc', name: 'Electrical Technology (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 91,
    description: 'Residential and commercial wiring, NEC code, and electrical safety. NCCER certification prep.',
    href: '/programs/electrical-short-certificate', tags: ['electrical','construction','nccer','high-demand'] },

  { id: 'plumbing-stc', name: 'Plumbing (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 90,
    description: 'Pipe fitting, fixture installation, and plumbing code. NCCER certification preparation.',
    href: '/programs/plumbing-short-certificate', tags: ['plumbing','construction','nccer','high-demand'] },

  // ── CAREER TECHNICAL — HVAC ──────────────────────────────────────────────────

  { id: 'air-conditioning-aot', name: 'Air Conditioning & Refrigeration (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 92,
    description: 'Residential and commercial HVAC. System installation, refrigerant handling, and EPA 608 certification.',
    href: '/programs/air-conditioning-refrigeration-aot', tags: ['hvac','refrigeration','epa-608','high-demand'] },

  { id: 'air-conditioning-cer', name: 'Air Conditioning & Refrigeration (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 90,
    description: 'HVAC fundamentals, refrigeration systems, and EPA 608 certification.',
    href: '/programs/air-conditioning-refrigeration-certificate', tags: ['hvac','refrigeration','epa-608'] },

  { id: 'air-conditioning-stc', name: 'Air Conditioning & Refrigeration (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 88,
    description: 'HVAC basics and EPA 608 certification. Entry-level HVAC technician credential.',
    href: '/programs/air-conditioning-refrigeration-short-certificate', tags: ['hvac','refrigeration'] },

  // ── CAREER TECHNICAL — BARBERING & COSMETOLOGY ───────────────────────────────

  { id: 'barbering-aot', name: 'Barbering (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 87,
    description: 'Alabama State Board of Cosmetology approved. Cutting, shaving, coloring, and salon business management.',
    href: '/programs/barbering-aot', tags: ['barbering','cosmetology','licensed-profession'] },

  { id: 'cosmetology-aot', name: 'Cosmetology – Salon Management (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 85,
    description: 'Alabama State Board approved. Hair, skin, nails, and salon business management.',
    href: '/programs/cosmetology-aot', tags: ['cosmetology','beauty','licensed-profession'] },

  { id: 'barbering-cer', name: 'Barbering (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 86,
    description: 'Barbering fundamentals and Alabama State Board licensure preparation.',
    href: '/programs/barbering-certificate', tags: ['barbering','licensed-profession'] },

  { id: 'cosmetology-cer', name: 'Cosmetology – Salon Management (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 84,
    description: 'Cosmetology fundamentals and Alabama State Board licensure preparation.',
    href: '/programs/cosmetology-certificate', tags: ['cosmetology','beauty','licensed-profession'] },

  { id: 'barbering-stc', name: 'Barbering (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false,
    description: 'Introduction to barbering theory and basic cutting techniques.',
    href: '/programs/barbering-short-certificate', tags: ['barbering'] },

  // ── CAREER TECHNICAL — CULINARY & HOSPITALITY ────────────────────────────────

  { id: 'culinary-arts-aas', name: 'Culinary Arts (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 87,
    description: 'Professional cooking, baking, nutrition, and food service management. Industry externship included.',
    href: '/programs/culinary-arts-aas', tags: ['culinary','food-service','hospitality'] },

  { id: 'hospitality-management-aas', name: 'Hospitality Services Management (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 85,
    description: 'Hotel, restaurant, and event management. Front desk operations, reservations, and guest services.',
    href: '/programs/hospitality-management-aas', tags: ['hospitality','hotel','restaurant','management'] },

  { id: 'culinary-arts-cer', name: 'Culinary Arts (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 85,
    description: 'Kitchen fundamentals, sanitation, knife skills, and classical cooking techniques.',
    href: '/programs/culinary-arts-certificate', tags: ['culinary','food-service'] },

  { id: 'hospitality-management-stc', name: 'Hospitality Services Management (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Guest services, front desk operations, and hospitality industry fundamentals.',
    href: '/programs/hospitality-management-short-certificate', tags: ['hospitality','hotel'] },

  { id: 'culinary-arts-stc', name: 'Culinary Arts (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Basic cooking techniques, food safety, and kitchen operations.',
    href: '/programs/culinary-arts-short-certificate', tags: ['culinary','food-service'] },

  // ── CAREER TECHNICAL — ELECTRONICS & MANUFACTURING ───────────────────────────

  { id: 'electronics-industrial-aas', name: 'Electronics – Industrial Technology (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 90,
    description: 'Industrial electronics, PLCs, motor controls, and troubleshooting for manufacturing environments.',
    href: '/programs/electronics-industrial-aas', tags: ['electronics','manufacturing','plc','high-demand'] },

  { id: 'design-engineering-tech-aas', name: 'Design Engineering Technology (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 88,
    description: 'CAD/CAM design, drafting, and engineering documentation. AutoCAD and SolidWorks certification.',
    href: '/programs/design-engineering-technology-aas', tags: ['engineering','cad','drafting','manufacturing'] },

  { id: 'manufacturing-tech-aas', name: 'Manufacturing Technology (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 89,
    description: 'Production processes, quality control, CNC machining, and lean manufacturing principles.',
    href: '/programs/manufacturing-technology-aas', tags: ['manufacturing','cnc','quality-control','high-demand'] },

  { id: 'electronics-industrial-cer', name: 'Electronics – Industrial Technology (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 88,
    description: 'Electronic circuits, motor controls, and industrial troubleshooting for entry-level technician roles.',
    href: '/programs/electronics-industrial-certificate', tags: ['electronics','manufacturing','plc'] },

  { id: 'design-engineering-tech-cer', name: 'Design Engineering Technology (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 86,
    description: 'CAD fundamentals and engineering drawing for entry-level drafting and design positions.',
    href: '/programs/design-engineering-technology-certificate', tags: ['engineering','cad','drafting'] },

  { id: 'electronics-ee-stc', name: 'Electronics EE (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 85,
    description: 'Basic electrical and electronics theory, circuit analysis, and test equipment.',
    href: '/programs/electronics-ee-short-certificate', tags: ['electronics','electrical'] },

  { id: 'electronics-industrial-stc', name: 'Electronics – Industrial (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 86,
    description: 'PLC programming, motor controls, and industrial wiring fundamentals.',
    href: '/programs/electronics-industrial-short-certificate', tags: ['electronics','plc','manufacturing'] },

  { id: 'industrial-maintenance-stc', name: 'Industrial Maintenance (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 90,
    description: 'Preventive maintenance, hydraulics, pneumatics, and equipment troubleshooting.',
    href: '/programs/industrial-maintenance-short-certificate', tags: ['maintenance','manufacturing','high-demand'] },

  { id: 'machine-tool-stc', name: 'Machine Tool (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 89,
    description: 'Manual machining operations including lathe, mill, and grinder. Blueprint reading.',
    href: '/programs/machine-tool-short-certificate', tags: ['machining','manufacturing'] },

  { id: 'machine-tool-cnc-stc', name: 'Machine Tool – CNC (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 91,
    description: 'CNC programming, setup, and operation. G-code, toolpath programming, and quality inspection.',
    href: '/programs/machine-tool-cnc-short-certificate', tags: ['cnc','machining','manufacturing','high-demand'] },

  { id: 'manufacturing-robotics-stc', name: 'Manufacturing Robotics (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 92,
    description: 'Robot programming, integration, and maintenance for automated manufacturing systems.',
    href: '/programs/manufacturing-robotics-short-certificate', tags: ['robotics','manufacturing','automation','high-demand'] },

  { id: 'manufacturing-mechatronics-stc', name: 'Manufacturing Mechatronics (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 91,
    description: 'Integration of mechanical, electrical, and computer systems in automated manufacturing.',
    href: '/programs/manufacturing-mechatronics-short-certificate', tags: ['mechatronics','manufacturing','automation'] },

  { id: 'logistics-supply-chain-stc', name: 'Logistics & Supply Chain (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false, jobPlacementRate: 88,
    description: 'Supply chain management, inventory control, warehouse operations, and distribution logistics.',
    href: '/programs/logistics-supply-chain-short-certificate', tags: ['logistics','supply-chain','warehouse'] },

  { id: 'design-engineering-tech-stc', name: 'Design Engineering Technology (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'CAD basics and engineering drawing fundamentals for entry-level drafting roles.',
    href: '/programs/design-engineering-technology-short-certificate', tags: ['cad','drafting','engineering'] },

  // ── CAREER TECHNICAL — DIESEL & HEAVY TRUCK ──────────────────────────────────

  { id: 'heavy-truck-aot', name: 'Diesel – Medium/Heavy Truck Technician (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 92,
    description: 'Diesel engine repair, drivetrain, electrical systems, and HVAC for medium and heavy-duty trucks.',
    href: '/programs/heavy-truck-mechanics-aot', tags: ['diesel','truck','ase','high-demand'] },

  { id: 'heavy-truck-cer', name: 'Diesel – Medium/Heavy Truck Technician (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 90,
    description: 'Diesel engine, brakes, and electrical system repair for commercial vehicles.',
    href: '/programs/heavy-truck-mechanics-certificate', tags: ['diesel','truck','mechanics'] },

  { id: 'heavy-truck-stc', name: 'Diesel – Medium/Heavy Truck Technician (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 89,
    description: 'Diesel engine fundamentals and preventive maintenance for commercial trucks.',
    href: '/programs/heavy-truck-mechanics-short-certificate', tags: ['diesel','truck'] },

  // ── CAREER TECHNICAL — WELDING ────────────────────────────────────────────────

  { id: 'welding-aot', name: 'Welding Technology (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 91,
    description: 'MIG, TIG, and stick welding. Structural and fabrication welding, pipe fitting, and blueprint reading.',
    href: '/programs/welding-technology-aot', tags: ['welding','fabrication','trades','high-demand'] },

  { id: 'welding-cer', name: 'Welding Technology (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 89,
    description: 'MIG, TIG, and stick welding fundamentals with AWS D1.1 qualification preparation.',
    href: '/programs/welding-technology-certificate', tags: ['welding','fabrication','aws'] },

  { id: 'welding-stc', name: 'Welding Technology (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '6 months', durationMonths: 6, transferable: false, jobPlacementRate: 87,
    description: 'Basic MIG and stick welding for entry-level fabrication and manufacturing positions.',
    href: '/programs/welding-technology-short-certificate', tags: ['welding','fabrication'] },

  // ── CAREER TECHNICAL — MEDIA & GRAPHIC ARTS ──────────────────────────────────

  { id: 'media-production-aas', name: 'Media Production (AAS)',
    category: 'career-technical', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 84,
    description: 'Video production, audio editing, broadcast media, and digital content creation.',
    href: '/programs/media-production-aas', tags: ['media','video','broadcast','digital-media'] },

  { id: 'graphic-art-communications-aot', name: 'Graphic Art Communications (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 83,
    description: 'Print and digital design, typography, layout, and visual communications. Adobe Creative Suite.',
    href: '/programs/graphic-art-communications-aot', tags: ['graphic-design','adobe','print','digital-media'] },

  { id: 'graphics-prepress-aot', name: 'Graphics and Prepress Technology (AOT)',
    category: 'career-technical', degreeType: 'AOT', deliveryModes: ['ground'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 82,
    description: 'Prepress production, color management, file preparation, and digital printing workflows.',
    href: '/programs/graphics-prepress-aot', tags: ['prepress','printing','graphic-design'] },

  { id: 'commercial-art-cer', name: 'Commercial Art (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 81,
    description: 'Adobe Illustrator and Photoshop for commercial art and graphic design production.',
    href: '/programs/commercial-art-certificate', tags: ['graphic-design','adobe','commercial-art'] },

  { id: 'graphics-prepress-cer', name: 'Graphics and Prepress Technology (Certificate)',
    category: 'career-technical', degreeType: 'CER', deliveryModes: ['ground'],
    duration: '1 year', durationMonths: 12, transferable: false, jobPlacementRate: 80,
    description: 'Print production, digital file preparation, and color management fundamentals.',
    href: '/programs/graphics-prepress-certificate', tags: ['prepress','printing'] },

  { id: 'commercial-art-stc', name: 'Commercial Art (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Digital art foundations, Adobe tools, and basic visual communications.',
    href: '/programs/commercial-art-short-certificate', tags: ['graphic-design','adobe'] },

  { id: 'graphics-prepress-stc', name: 'Graphics and Prepress Technology (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Print-ready file preparation and basic digital design production.',
    href: '/programs/graphics-prepress-short-certificate', tags: ['prepress','printing'] },

  { id: 'media-production-stc', name: 'Media Production (Short Certificate)',
    category: 'career-technical', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Video, audio, and digital content production basics for entry-level media roles.',
    href: '/programs/media-production-short-certificate', tags: ['media','video','digital-media'] },

  // ── OTHER ─────────────────────────────────────────────────────────────────────

  { id: 'criminal-justice-aas', name: 'Criminal Justice (AAS)',
    category: 'other', degreeType: 'AAS', deliveryModes: ['ground','hybrid','online'],
    duration: '2 years', durationMonths: 24, transferable: false, jobPlacementRate: 87,
    description: 'Law enforcement, corrections, and legal systems. Preparation for careers in public safety.',
    href: '/programs/criminal-justice-aas', tags: ['criminal-justice','law-enforcement','public-safety'] },

  { id: 'child-development-aas', name: 'Child Development (AAS)',
    category: 'other', degreeType: 'AAS', deliveryModes: ['ground','hybrid'],
    duration: '2 years', durationMonths: 24, transferable: true, jobPlacementRate: 86,
    description: 'Early childhood education, curriculum planning, and child care center management.',
    href: '/programs/child-development-aas', tags: ['education','early-childhood','childcare'] },

  { id: 'child-development-stc', name: 'Child Development (Short Certificate)',
    category: 'other', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '5 months', durationMonths: 5, transferable: false,
    description: 'Child care fundamentals, child safety, and early childhood learning environments.',
    href: '/programs/child-development-short-certificate', tags: ['education','early-childhood','childcare'] },

  { id: 'banking-finance-stc', name: 'Banking & Finance (Short Certificate)',
    category: 'other', degreeType: 'STC', deliveryModes: ['ground','hybrid'],
    duration: '4 months', durationMonths: 4, transferable: false,
    description: 'Banking operations, financial services, and personal finance fundamentals.',
    href: '/programs/banking-finance-short-certificate', tags: ['banking','finance'] },
]
