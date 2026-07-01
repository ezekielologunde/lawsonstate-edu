// Nav data — imported by nav.tsx
// Single source of truth: the desktop NAV tree below drives BOTH the desktop
// mega-menus and the mobile accordion (MOBILE_GROUPS is derived from NAV, so
// the two surfaces can never drift out of sync).

export type NavChild = {
  label: string
  href: string
  note?: string
  highlight?: boolean
  external?: boolean
}

export type NavGroup = { title: string; items: NavChild[] }

export type NavEntry = { label: string; href: string; mega?: NavGroup[] }

export type MobileItem = NavChild & { gold?: boolean }

export type MobileGroup = { label: string; href: string; items: MobileItem[] }

// ── Primary navigation — five core destinations ──────────────────
// Quick logins + Faculty/Staff live in the utility strip (see nav.tsx);
// Financial Aid is folded into "Admissions & Aid" as a Cost & Aid column.

export const NAV: NavEntry[] = [
  {
    label: 'Programs',
    href: '/programs',
    mega: [
      {
        title: 'Program Areas',
        items: [
          { label: 'All 200+ Programs',  href: '/programs',                          highlight: true },
          { label: 'Health Sciences',    href: '/programs?area=health-professions', note: 'Nursing, Dental, EMS' },
          { label: 'Business & IT',      href: '/programs?area=business-it',         note: 'Accounting, CIS, Admin' },
          { label: 'Trades & CTE',       href: '/programs?area=career-technical',    note: 'Mechatronics, HVAC, Welding' },
          { label: 'Online Programs',    href: '/academics/online',         note: '40+ degrees online' },
          { label: 'Adult Education',    href: '/academics/adult-education', note: 'GED, ABE, ESL — free' },
          { label: 'Weekend College',    href: '/academics/weekend-college', note: 'Fri & Sat only' },
          { label: 'Explore Academics',  href: '/academics',                note: 'Divisions, workforce & specialty' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Alabama Transfer',   href: '/academics/alabama-transfer',  note: 'AGSC / STARS — transfer ready' },
          { label: 'Academic Catalog',   href: '/academics/catalog',           note: '2026–2027 course catalog' },
          { label: 'Workforce Training', href: '/workforce',                    note: 'Industry certs in months' },
          { label: 'Academic Calendar',  href: '/calendar',                    note: 'Important dates' },
          { label: 'Library Services',   href: '/library',                     note: 'Research, databases, study space' },
        ],
      },
    ],
  },
  {
    label: 'Admissions & Aid',
    href: '/admissions',
    mega: [
      {
        title: 'Ways to Enroll',
        items: [
          { label: 'Apply Now',             href: '/admissions/apply' },
          { label: 'Transfer Students',     href: '/admissions/transfer' },
          { label: 'Dual Enrollment',       href: '/admissions/dual-enrollment' },
          { label: 'High School Students',  href: '/admissions/high-school' },
          { label: 'Non-Degree Seekers',    href: '/admissions/non-degree' },
          { label: 'International Students', href: '/admissions/international' },
          { label: 'Transient Students',    href: '/admissions/transient' },
          { label: 'Veterans & Military',   href: '/admissions/veterans' },
        ],
      },
      {
        title: 'Next Steps',
        items: [
          { label: 'New Student Orientation', href: '/orientation',        note: 'Before your first semester' },
          { label: 'Register for Classes',    href: '/registration',        note: '7-step guide' },
          { label: 'Set Up MyLawson',         href: '/portal',              note: 'Your student gateway' },
          { label: 'Admissions Policies',     href: '/admissions/policies', note: 'Requirements & forms' },
        ],
      },
      {
        title: 'Cost & Aid',
        items: [
          { label: 'Financial Aid',        href: '/financial-aid',              note: 'Grants, Pell, work-study' },
          { label: 'FAFSA Guide',          href: '/financial-aid/fafsa',        note: 'School code: 001033' },
          { label: 'Scholarships',         href: '/financial-aid/scholarships', note: '$1.5M awarded annually' },
          { label: 'Tuition & Fees',       href: '/financial-aid',              note: '$131 / credit hour in-state' },
          { label: 'Consumer Information', href: '/about/consumer-information', note: 'Disclosures & right-to-know' },
        ],
      },
    ],
  },
  {
    label: 'Students',
    href: '/student-resources',
    mega: [
      {
        title: 'Get Help',
        items: [
          { label: 'Tutoring & Support',  href: '/student-resources/tutoring',   note: 'Free · 24/7 · R.A.C.E. Center' },
          { label: 'Career Services',     href: '/student-resources/career',     note: 'Jobs, résumé, interviews' },
          { label: 'Health & Wellness',   href: '/student-resources/health',     note: 'Counseling, pantry, support' },
          { label: 'Disability Services', href: '/student-resources/disability', note: 'ADA accommodations' },
          { label: 'TRiO Programs',       href: '/student-resources/trio',       note: 'First-gen student support' },
          { label: 'Concerns & Complaints', href: '/student-resources/concerns', note: 'Submit a formal concern' },
          { label: 'Report a Student Incident', href: '/student-resources/incident', note: 'Conduct & safety reports' },
        ],
      },
      {
        title: 'Records & Milestones',
        items: [
          { label: 'Registration',          href: '/registration',                  note: 'Register & add/drop' },
          { label: 'Transcript Requests',   href: '/student-resources/transcripts', note: 'Official & unofficial' },
          { label: 'Graduation Info',       href: '/student-resources/graduation',  note: 'Apply, ceremony, diploma' },
          { label: 'All Student Resources', href: '/student-resources',             note: 'Every tool & service' },
        ],
      },
      {
        title: 'Advising',
        items: [
          { label: 'Academic Advising',     href: '/advising',           highlight: true },
          { label: 'Book Appointment',      href: '/advising/book',      note: 'Free & instant' },
          { label: 'Our Advising Approach', href: '/advising/approach',  note: 'ASN model · personas' },
          { label: 'Returning Students',    href: '/advising/returning', note: '6-phase journey map' },
        ],
      },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    mega: [
      {
        title: 'Student Life',
        items: [
          { label: 'Clubs & Activities',    href: '/campus-life/clubs',     note: '30+ student organizations' },
          { label: 'Cougar Athletics',      href: '/campus-life/athletics', note: 'NJCAA — 14 sports' },
          { label: 'Housing & Residential', href: '/campus-life/housing',   note: 'Off-campus resources' },
          { label: 'Student Safety',        href: '/campus-life/safety',    note: 'Cougar Alert, security' },
        ],
      },
      {
        title: 'Campus',
        items: [
          { label: 'Visit Us',        href: '/visit',    note: 'Plan your campus visit' },
          { label: 'Events Calendar', href: '/calendar', note: 'Events & deadlines' },
          { label: 'News & Stories',  href: '/news',     note: 'Latest from LSCC' },
          { label: 'Contact & Hours', href: '/contact',  note: 'Call, email, or visit' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
    mega: [
      {
        title: 'Institution',
        items: [
          { label: 'About Lawson State',        href: '/about',                         note: 'Mission & HBCU legacy' },
          { label: 'Meet the President',        href: '/about/president',               note: 'Dr. Cynthia T. Anthony' },
          { label: 'Facts & Data',              href: '/about/facts',                   note: 'Enrollment & outcomes' },
          { label: 'Faculty & Staff Directory', href: '/about/faculty',                 note: 'Offices & divisions' },
          { label: 'Administrative Services',   href: '/about/administrative-services', note: 'Offices & departments' },
          { label: 'Human Resources',           href: '/about/human-resources',         note: 'Employment & benefits' },
          { label: 'Public Relations',          href: '/about/public-relations',        note: 'Media & community affairs' },
          { label: 'Career Opportunities',      href: '/careers',                       note: 'Work at Lawson State' },
          { label: 'AI Usage Guidelines',       href: '/about/ai-usage',                note: 'Draft — under review' },
        ],
      },
      {
        title: 'Compliance',
        items: [
          { label: 'Accreditation',        href: '/about/accreditation',        note: 'SACSCOC' },
          { label: 'Consumer Information', href: '/about/consumer-information', note: 'Right-to-know' },
          { label: 'Title IX',             href: '/about/title-ix',             note: 'Report & policy' },
          { label: 'Non-Discrimination',   href: '/about/non-discrimination',   note: 'Equal opportunity' },
        ],
      },
    ],
  },
]

// ── Mobile nav — derived from NAV so the two surfaces stay in lockstep ──
// Each top-level item becomes an accordion group; its mega columns are
// flattened into one list. `highlight` items render gold on mobile.

export const MOBILE_GROUPS: MobileGroup[] = NAV.map((entry) => ({
  label: entry.label,
  href: entry.href,
  items: (entry.mega ?? []).flatMap((group) =>
    group.items.map((item) => ({
      label: item.label,
      href: item.href,
      note: item.note,
      external: item.external,
      gold: item.highlight,
    })),
  ),
}))
