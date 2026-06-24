import { useState, useEffect } from 'react'
import { ArrowRight, Clock, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect']

export default function Navbar() {
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* NAVBAR */}
      <div className="relative z-20 p-2 sm:p-3 max-w-[1440px] mx-auto w-full">
        <nav className="bg-white rounded-full px-5 py-[5px] flex items-center justify-between">
          {/* LEFT: logo + nav links */}
          <div className="flex items-center gap-6">
            {/* Logo circle */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold" style={{ fontSize: '10px', letterSpacing: '-0.5px' }}>AX</span>
            </div>
            {/* Nav links — desktop only */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: clock + availability + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden lg:block">Taking on projects for Q1 2026</span>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock size={14} />
              <span>{time} in London</span>
            </div>

            {/* CTA with text-roll hover */}
            <button className="group inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 hover:bg-gray-700 transition-colors duration-300">
              <div className="overflow-hidden h-[20px] flex items-center">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
                  <span className="leading-5">Book a strategy call</span>
                  <span className="leading-5">Book a strategy call</span>
                </div>
              </div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                <ArrowRight size={12} className="text-black" />
              </div>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden bg-gray-900 text-white rounded-full p-2"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />

        {/* Bottom sheet */}
        <div
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Time badge */}
          <div className="flex items-center gap-1.5 text-sm text-gray-600 mb-6">
            <Clock size={14} />
            <span>{time} in London</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3 mb-8">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="group w-full inline-flex items-center justify-between bg-gray-900 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-3">
            <span>Start a project</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight size={13} className="text-black" />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
