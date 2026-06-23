import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Programs from '@/components/programs'
import Support from '@/components/support'
import NewsEvents from '@/components/news-events'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Support />
        <NewsEvents />
        <Prefooter />
      </main>
      <SiteFooter />
    </>
  )
}
