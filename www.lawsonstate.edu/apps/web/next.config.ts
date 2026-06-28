import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'www.lawsonstate.edu' },
      { hostname: 'live.staticflickr.com' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Admissions sub-routes → admissions hub or nearest page
      { source: '/admissions/apply',        destination: '/admissions',    permanent: false },
      { source: '/admissions/visit',        destination: '/admissions',    permanent: false },
      { source: '/admissions/request-info', destination: '/admissions',    permanent: false },
      { source: '/admissions/tuition',      destination: '/financial-aid', permanent: false },
      { source: '/visit',                   destination: '/admissions',    permanent: false },

      // Academic sub-division paths → pre-filtered program finder.
      // permanent:false (302) — these route into a facet, not a permanent canonical move.
      { source: '/academics/career-technical',   destination: '/programs?area=career-technical',   permanent: false },
      { source: '/academics/transfer',           destination: '/programs?area=college-transfer',   permanent: false },
      { source: '/academics/health-professions', destination: '/programs?area=health-professions', permanent: false },
      { source: '/academics/health',             destination: '/programs?area=health-professions', permanent: false },
      { source: '/academics/business-it',        destination: '/programs?area=business-it',         permanent: false },
      { source: '/academics/stem',               destination: '/programs?area=stem',                permanent: false },
      { source: '/academics/online',             destination: '/programs?delivery=online',          permanent: false },
      { source: '/academics/certificates',       destination: '/programs?type=CER',                 permanent: false },
      { source: '/academics/degrees',            destination: '/programs',                          permanent: false },
      // No finder equivalent → editorial hub / real page
      { source: '/academics/honors',             destination: '/academics',                  permanent: false },
      { source: '/academics/weekend-college',    destination: '/academics',                  permanent: false },
      { source: '/academics/departments',        destination: '/academics',                  permanent: false },
      { source: '/academics/dual-enrollment',    destination: '/admissions/dual-enrollment', permanent: false },

      // Removed orphan page → editorial hub (permanent: equity consolidation)
      { source: '/learn', destination: '/academics', permanent: true },

      // Campus life subpages → campus life hub
      { source: '/campus-life/honor-societies',   destination: '/campus-life', permanent: false },
      { source: '/campus-life/miss-lawson-state', destination: '/campus-life', permanent: false },
      { source: '/campus-life/cougar-alert',      destination: '/campus-life', permanent: false },

      // Support service pages → campus life (has support section)
      { source: '/support/academic', destination: '/campus-life', permanent: false },
      { source: '/support/career',   destination: '/campus-life', permanent: false },
      { source: '/support/health',   destination: '/campus-life', permanent: false },
      { source: '/support/ada',      destination: '/campus-life', permanent: false },
      { source: '/support/trio',     destination: '/campus-life', permanent: false },
      { source: '/support/veterans', destination: '/campus-life', permanent: false },

      // Utility pages → nearest equivalent
      { source: '/news',      destination: '/calendar', permanent: false },
      { source: '/directory', destination: '/about',    permanent: false },

      // External redirects (student systems + official Lawson State pages)
      { source: '/portal',             destination: 'https://my.lawsonstate.edu',                      permanent: false },
      { source: '/library',            destination: 'https://www.lawsonstate.edu/library',             permanent: false },
      { source: '/athletics',          destination: 'https://www.lawsonstate.edu/athletics',           permanent: false },
      { source: '/privacy',            destination: 'https://www.lawsonstate.edu/privacy-policy',      permanent: false },
      { source: '/accessibility',      destination: 'https://www.lawsonstate.edu/accessibility',       permanent: false },
      { source: '/title-ix',           destination: 'https://www.lawsonstate.edu/title-ix',            permanent: false },
      { source: '/non-discrimination', destination: 'https://www.lawsonstate.edu/non-discrimination',  permanent: false },
    ]
  },
};

export default nextConfig;
