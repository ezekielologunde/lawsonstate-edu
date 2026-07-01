import type { Metadata } from 'next'
import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import AnnouncementBanner from '@/components/announcement-banner'
import ClickRipple from '@/components/click-ripple'
import NavigationProgress from '@/components/navigation-progress'
import AdvisingBot from '@/components/advising-bot'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lawsonstate.edu'
const OG_IMAGE  = 'https://www.lawsonstate.edu/_resources/assets/img/Bessemer%20Campus%20Aerial%20View.jpg'
const DESC      = 'Lawson State Community College — empowering students through quality education, career training, and community leadership in Birmingham, Alabama.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lawson State Community College',
    template: '%s | Lawson State',
  },
  description: DESC,
  keywords: ['Lawson State', 'LSCC', 'community college', 'HBCU', 'higher education', 'Birmingham', 'Alabama', 'career training', 'transfer', 'nursing', 'CTE'],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    siteName:    'Lawson State Community College',
    title:       'Lawson State Community College — Birmingham, AL',
    description: DESC,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Lawson State Community College campus aerial view' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Lawson State Community College',
    description: DESC,
    images:      [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sets --lscc-banner-h synchronously before first paint so nav never jumps */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{if(!sessionStorage.getItem('lscc-banner-dismissed-summer2026'))document.documentElement.style.setProperty('--lscc-banner-h','44px')}catch(e){}})()` }} />
        <NavigationProgress />
        <AnnouncementBanner />
        {children}
        <ClickRipple />
        {/* Cora — advising + site-search assistant, available site-wide */}
        <AdvisingBot />
      </body>
    </html>
  )
}
