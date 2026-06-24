import { ArrowRight } from 'lucide-react'

const SMALL_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'
const LARGE_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'

function OrangeButton({ label }: { label: string }) {
  return (
    <button className="group inline-flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full pl-5 pr-2 py-2 transition-colors duration-200">
      <div className="overflow-hidden h-[20px] flex items-center">
        <div className="flex flex-col text-[13px] sm:text-[14px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="leading-5 whitespace-nowrap">{label}</span>
          <span className="leading-5 whitespace-nowrap">{label}</span>
        </div>
      </div>
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
        <ArrowRight size={14} className="text-[#F26522]" />
      </div>
    </button>
  )
}

export default function AboutSection() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold"
            style={{ fontSize: '11px' }}
          >
            1
          </div>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Introducing Axion
          </span>
        </div>

        {/* Heading */}
        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.2rem)' }}
        >
          Strategy-led creatives, delivering
          <br className="hidden sm:block" />
          results in digital and beyond.
        </h2>

        {/* MOBILE/TABLET content (lg:hidden) */}
        <div className="lg:hidden px-5 sm:px-8">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
            Through research, creative thinking and iteration we help growing brands realize their
            digital full potential.
          </p>
          <OrangeButton label="About our studio" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
            <div className="sm:w-[45%]">
              <img
                src={SMALL_IMG}
                alt="Axion team"
                className="w-full rounded-xl sm:rounded-2xl object-cover aspect-[438/346]"
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                src={LARGE_IMG}
                alt="Axion studio"
                className="w-full rounded-xl sm:rounded-2xl object-cover aspect-[900/600]"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP 3-col grid (hidden lg:grid) */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
          {/* Left: small image, self-end */}
          <div className="self-end">
            <img
              src={SMALL_IMG}
              alt="Axion team"
              className="w-full rounded-2xl object-cover aspect-[438/346]"
            />
          </div>

          {/* Center: paragraph + button, self-start, flex justify-end */}
          <div className="self-start flex flex-col items-end">
            <p className="text-[16px] sm:text-[18px] leading-[1.65] font-medium text-gray-900 mb-8 whitespace-nowrap">
              Through research, creative thinking
              <br />
              and iteration we help growing brands
              <br />
              realize their digital full potential.
            </p>
            <OrangeButton label="About our studio" />
          </div>

          {/* Right: large image, self-end */}
          <div className="self-end">
            <img
              src={LARGE_IMG}
              alt="Axion studio"
              className="w-full rounded-2xl object-cover aspect-[3/2]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
