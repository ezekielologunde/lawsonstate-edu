import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['next/font'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
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
      { source: '/admissions/visit',        destination: '/admissions',    permanent: false },
      { source: '/admissions/request-info', destination: '/admissions',    permanent: false },
      { source: '/admissions/tuition',      destination: '/financial-aid', permanent: false },

      // Academic sub-division paths → pre-filtered program finder.
      // permanent:false (302) — these route into a facet, not a permanent canonical move.
      { source: '/academics/career-technical',   destination: '/programs?area=career-technical',   permanent: false },
      { source: '/academics/transfer',           destination: '/programs?area=college-transfer',   permanent: false },
      { source: '/academics/health-professions', destination: '/programs?area=health-professions', permanent: false },
      { source: '/academics/health',             destination: '/programs?area=health-professions', permanent: false },
      { source: '/academics/business-it',        destination: '/programs?area=business-it',         permanent: false },
      { source: '/academics/stem',               destination: '/programs?area=stem',                permanent: false },
      { source: '/academics/certificates',       destination: '/programs?type=CER',                 permanent: false },
      { source: '/academics/degrees',            destination: '/programs',                          permanent: false },
      // No finder equivalent → editorial hub / real page
      { source: '/academics/honors',             destination: '/academics',                  permanent: false },
      { source: '/academics/departments',        destination: '/academics',                  permanent: false },
      { source: '/academics/dual-enrollment',    destination: '/admissions/dual-enrollment', permanent: false },

      // Removed orphan page → editorial hub (permanent: equity consolidation)
      { source: '/learn', destination: '/academics', permanent: true },

      // Consolidated: Financial Data merged into Facts & Data (permanent)
      { source: '/about/financial-data', destination: '/about/facts#financial', permanent: true },

      // "Specialized Programs" has no standalone page → the full program finder
      { source: '/academics/specialized-programs', destination: '/programs', permanent: false },
      { source: '/specialized-programs',           destination: '/programs', permanent: false },

      // Short-URL aliases → About sub-pages (menu items / legacy paths)
      { source: '/president',              destination: '/about/president',               permanent: false },
      { source: '/human-resources',        destination: '/about/human-resources',         permanent: false },
      { source: '/hr',                     destination: '/about/human-resources',         permanent: false },
      { source: '/administrative-services', destination: '/about/administrative-services', permanent: false },
      { source: '/public-relations',       destination: '/about/public-relations',        permanent: false },
      { source: '/commencement',           destination: '/student-resources/graduation',  permanent: false },

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
      { source: '/directory',   destination: '/about',        permanent: false },
      { source: '/student-life', destination: '/campus-life', permanent: false },

      // External redirects (student systems)
      { source: '/mylawson',           destination: 'https://my.lawsonstate.edu',                      permanent: false },

      // Shortcut URLs → real internal pages
      { source: '/athletics',          destination: '/campus-life/athletics',      permanent: false },
      { source: '/privacy',            destination: '/about/privacy',              permanent: false },
      { source: '/accessibility',      destination: '/about/accessibility',        permanent: false },
      { source: '/title-ix',           destination: '/about/title-ix',             permanent: false },
      { source: '/non-discrimination', destination: '/about/non-discrimination',   permanent: false },
    ]
  },
};

export default nextConfig;
