import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CaseStudiesSection from './components/CaseStudiesSection'

export default function App() {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen bg-[#EFEFEF] flex flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
      </section>
      <AboutSection />
      <CaseStudiesSection />
    </div>
  )
}
