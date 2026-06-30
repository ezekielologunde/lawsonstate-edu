// Nav data — imported by nav.tsx

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

// ── Desktop nav ─────────────────────────────────────────────────

export const NAV: NavEntry[] = [
  {
    label: 'Programs',
    href: '/academics',
    mega: [
      {
        title: 'Program Areas',
        items: [
          { label: 'Health Sciences',    href: '/academics?tag=health',    note: 'Nursing, Dental, EMS' },
          { label: 'Business & IT',      href: '/academics?tag=business',  note: 'Accounting, CIS, Admin' },
          { label: 'Trades & CTE',       href: '/academics?tag=trades',    note: 'Mechatronics, HVAC, Welding' },
          { label: 'Online Programs',    href: '/academics/online',         note: '40+ degrees online' },
          { label: 'Adult Education',    href: '/academics/adult-education', note: 'GED, ABE, ESL — free' },
          { label: 'Weekend College',    href: '/academics/weekend-college', note: 'Fri & Sat only' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'All 200+ Programs',  href: '/academics',                  highlight: true },
          { label: 'Academic Catalog',   href: '/academics/catalog',           note: '2025–2026 course catalog' },
          { label: 'Alabama Transfer',   href: '/academics/alabama-transfer',  note: 'AGSC / STARS — transfer ready' },
          { label: 'Workforce Training', href: '/workforce',                    note: 'Industry certs in months' },
          { label: 'Academic Calendar',  href: '/calendar',                    note: 'Important dates' },
          { label: 'Registration',       href: '/registration',                note: 'Register for classes' },
        ],
      },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    mega: [
      {
        title: 'First Time Students',
        items: [
          { label: 'Apply Now',             href: '/admissions/apply',           highlight: true },
          { label: 'New Student Orientation', href: '/orientation',              note: 'Before your first semester' },
          { label: 'High School Students',  href: '/admissions/high-school',     note: 'Dual enrollment & more' },
          { label: 'Non-Degree Seekers',    href: '/admissions/non-degree',      note: 'Audit or single courses' },
          { label: 'International Students', href: '/admissions/international',  note: 'Visa & immigration info' },
          { label: 'Transient Students',    href: '/admissions/transient',       note: 'Visit from another college' },
          { label: 'Dual Enrollment',       href: '/admissions/dual-enrollment', note: 'High school + college credits' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Transfer Students',   href: '/admissions/transfer',    note: 'Credits transfer easily' },
          { label: 'Veterans & Military', href: '/admissions/veterans',    note: 'GI Bill & benefits' },
          { label: 'Financial Aid',       href: '/financial-aid',          note: 'Grants, Pell, scholarships' },
          { label: 'FAFSA Guide',         href: '/financial-aid/fafsa',    note: 'School code: 001025' },
          { label: 'Admissions Policies', href: '/admissions/policies',    note: 'Requirements & forms' },
          { label: 'Visit Campus',        href: '/contact',                note: '2 Birmingham locations' },
        ],
      },
    ],
  },
  {
    label: 'Financial Aid',
    href: '/financial-aid',
    mega: [
      {
        title: 'Apply for Aid',
        items: [
          { label: 'FAFSA Guide',   href: '/financial-aid/fafsa',        note: 'Step-by-step walkthrough', highlight: true },
          { label: 'Scholarships',  href: '/financial-aid/scholarships',  note: '$1.5M awarded annually' },
          { label: 'Aid Overview',  href: '/financial-aid',               note: 'Grants, Pell, work-study' },
        ],
      },
      {
        title: 'Costs & Planning',
        items: [
          { label: 'Tuition & Fees',       href: '/financial-aid',  note: '$131 / credit hour in-state' },
          { label: 'Special Circumstances', href: '/contact',         note: 'Income change? Ask us' },
          { label: 'Financial Aid Office',  href: '/contact',         note: '205.929.6346' },
        ],
      },
    ],
  },
  {
    label: 'Current Students',
    href: '/student-resources',
    mega: [
      {
        title: 'Log In',
        items: [
          { label: 'MyLawson',      href: 'https://my.lawsonstate.edu',          note: 'Register, grades, payments',        external: true },
          { label: 'Canvas',        href: 'https://lawsonstate.instructure.com',  note: 'Online courses & assignments',      external: true },
          { label: 'Student Email', href: 'https://webmail.lawsonstate.edu',      note: 'Your LSCC email account',           external: true },
          { label: 'Help Desk',     href: 'mailto:help@lawsonstate.edu',          note: 'IT support · help@lawsonstate.edu', external: true },
        ],
      },
      {
        title: 'Student Services',
        items: [
          { label: 'Student Resources',    href: '/student-resources',              note: 'All tools & services' },
          { label: 'Tutoring & Support',   href: '/student-resources/tutoring',     note: 'Free · 24/7 · R.A.C.E. Center' },
          { label: 'Career Services',      href: '/student-resources/career',       note: 'Jobs, résumé, mock interviews' },
          { label: 'Health & Wellness',    href: '/student-resources/health',       note: 'Counseling, pantry, support' },
          { label: 'Disability Services',  href: '/student-resources/disability',   note: 'ADA accommodations' },
          { label: 'TRiO Programs',        href: '/student-resources/trio',         note: 'First-gen student support' },
          { label: 'Transcript Requests',  href: '/student-resources/transcripts',  note: 'Official & unofficial' },
          { label: 'Graduation Info',      href: '/student-resources/graduation',   note: 'Apply, ceremony, diploma' },
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
          { label: 'Clubs & Activities',     href: '/campus-life/clubs',          note: '30+ student organizations' },
          { label: 'Monarch Athletics',      href: '/campus-life/athletics',      note: 'NJCAA — 14 sports' },
          { label: 'Housing & Residential',  href: '/campus-life/housing',        note: 'Off-campus resources' },
          { label: 'Student Safety',         href: '/campus-life/safety',         note: 'Cougar Alert, security' },
          { label: 'Tutoring & Support',     href: '/student-resources/tutoring', note: 'Free academic help' },
          { label: 'Student Portal Hub',     href: '/portal',                     note: 'New & returning students' },
        ],
      },
      {
        title: 'Campus',
        items: [
          { label: 'Events Calendar', href: '/calendar',  note: 'Events & deadlines' },
          { label: 'News & Stories',  href: '/news',      note: 'Latest from LSCC' },
          { label: 'Contact & Hours', href: '/contact',   note: 'Call, email, or visit' },
          { label: 'About LSCC',      href: '/about',     note: 'Mission & HBCU legacy' },
        ],
      },
    ],
  },
  {
    label: 'Faculty/Staff',
    href: '/about/faculty',
    mega: [
      {
        title: 'Log In',
        items: [
          { label: 'MyLawson (Staff)',   href: 'https://my.lawsonstate.edu',          note: 'Payroll, schedules, HR', external: true },
          { label: 'Canvas',             href: 'https://lawsonstate.instructure.com',  note: 'Course management',     external: true },
          { label: 'Employee Email',     href: 'https://webmail.lawsonstate.edu',      note: 'LSCC email account',    external: true },
          { label: 'Help Desk',          href: 'mailto:help@lawsonstate.edu',          note: 'IT support',            external: true },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Faculty & Staff Directory', href: '/about/faculty',               note: 'Offices, contacts, divisions' },
          { label: 'Concerns & Complaints',     href: '/student-resources/concerns',  note: 'Submit a concern' },
          { label: 'Submit Student Incident',   href: '/student-resources/incident',  note: 'Conduct & safety reports' },
          { label: 'Admissions Policies',       href: '/admissions/policies',         note: 'Requirements & forms' },
        ],
      },
    ],
  },
  { label: 'About', href: '/about' },
]

// ── Mobile nav ───────────────────────────────────────────────────

export const MOBILE_GROUPS: MobileGroup[] = [
  {
    label: 'Programs',
    href: '/academics',
    items: [
      { label: 'All 200+ Programs',    href: '/academics' },
      { label: 'Health Sciences',      href: '/academics?tag=health' },
      { label: 'Business & IT',        href: '/academics?tag=business' },
      { label: 'Trades & CTE',         href: '/academics?tag=trades' },
      { label: 'Online Programs',      href: '/academics/online' },
      { label: 'Adult Education',      href: '/academics/adult-education' },
      { label: 'Weekend College',      href: '/academics/weekend-college' },
      { label: 'Academic Catalog',     href: '/academics/catalog' },
      { label: 'Alabama Transfer',     href: '/academics/alabama-transfer' },
      { label: 'Workforce Training',   href: '/workforce' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    items: [
      { label: 'Apply Now',             href: '/admissions/apply',           gold: true },
      { label: 'New Student Orientation', href: '/orientation' },
      { label: 'High School Students',  href: '/admissions/high-school' },
      { label: 'Non-Degree Seekers',    href: '/admissions/non-degree' },
      { label: 'International Students', href: '/admissions/international' },
      { label: 'Transient Students',    href: '/admissions/transient' },
      { label: 'Dual Enrollment',       href: '/admissions/dual-enrollment' },
      { label: 'Transfer Students',     href: '/admissions/transfer' },
      { label: 'Veterans & Military',   href: '/admissions/veterans' },
      { label: 'Admissions Policies',   href: '/admissions/policies' },
    ],
  },
  {
    label: 'Financial Aid',
    href: '/financial-aid',
    items: [
      { label: 'FAFSA Guide',        href: '/financial-aid/fafsa',        gold: true },
      { label: 'Scholarships',       href: '/financial-aid/scholarships' },
      { label: 'Aid Overview',       href: '/financial-aid' },
      { label: 'Tuition & Fees',     href: '/financial-aid' },
      { label: 'Contact Aid Office', href: '/contact' },
    ],
  },
  {
    label: 'Current Students',
    href: '/student-resources',
    items: [
      { label: 'MyLawson',             href: 'https://my.lawsonstate.edu',          external: true, gold: true },
      { label: 'Canvas',               href: 'https://lawsonstate.instructure.com', external: true },
      { label: 'Student Email',        href: 'https://webmail.lawsonstate.edu',     external: true },
      { label: 'Student Resources',    href: '/student-resources' },
      { label: 'Tutoring & Support',   href: '/student-resources/tutoring' },
      { label: 'Career Services',      href: '/student-resources/career' },
      { label: 'Health & Wellness',    href: '/student-resources/health' },
      { label: 'Disability Services',  href: '/student-resources/disability' },
      { label: 'TRiO Programs',        href: '/student-resources/trio' },
      { label: 'Transcript Requests',  href: '/student-resources/transcripts' },
      { label: 'Graduation Info',      href: '/student-resources/graduation' },
      { label: 'Submit an Incident',   href: '/student-resources/incident' },
    ],
  },
  {
    label: 'Campus Life',
    href: '/campus-life',
    items: [
      { label: 'Clubs & Activities',    href: '/campus-life/clubs' },
      { label: 'Monarch Athletics',     href: '/campus-life/athletics' },
      { label: 'Housing & Residential', href: '/campus-life/housing' },
      { label: 'Student Safety',        href: '/campus-life/safety' },
      { label: 'Tutoring & Support',    href: '/student-resources/tutoring' },
      { label: 'Events Calendar',       href: '/calendar' },
    ],
  },
  {
    label: 'Faculty & Staff',
    href: '/about/faculty',
    items: [
      { label: 'MyLawson (Staff)',         href: 'https://my.lawsonstate.edu',          external: true, gold: true },
      { label: 'Canvas',                   href: 'https://lawsonstate.instructure.com', external: true },
      { label: 'Employee Email',           href: 'https://webmail.lawsonstate.edu',     external: true },
      { label: 'Help Desk',                href: 'mailto:help@lawsonstate.edu',         external: true },
      { label: 'Faculty & Staff Directory', href: '/about/faculty' },
      { label: 'Concerns & Complaints',    href: '/student-resources/concerns' },
      { label: 'Submit Student Incident',  href: '/student-resources/incident' },
      { label: 'Admissions Policies',      href: '/admissions/policies' },
    ],
  },
  {
    label: 'About & Contact',
    href: '/about',
    items: [
      { label: 'About Lawson State',    href: '/about' },
      { label: 'Faculty & Staff',       href: '/about/faculty' },
      { label: 'News & Stories',        href: '/news' },
      { label: 'Contact Us',            href: '/contact' },
      { label: 'Visit Campus',          href: '/contact' },
    ],
  },
]
