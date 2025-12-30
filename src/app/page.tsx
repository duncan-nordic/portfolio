'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950">
      <section className="container mx-auto px-6 py-20 relative">
        <div className="absolute left-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-brown-600 to-transparent opacity-30"></div>
        <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-brown-600 to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white elegant-spacing">
            {t.home.greeting}{' '}
            <span className="text-brown-400 bg-gradient-to-r from-brown-400 to-brown-600 bg-clip-text text-transparent">
              {t.home.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 elegant-spacing">
            {t.home.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="refined-border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center elegant-spacing"
            >
              {t.home.myWork}
            </Link>
            <Link
              href="/contact"
              className="refined-border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center elegant-spacing"
            >
              {t.home.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white elegant-spacing">
            {t.home.aboutMe}
          </h2>
          <div className="bg-forest-900 p-8 rounded-lg shadow-lg border-l-4 border-brown-600 refined-border relative">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              {t.home.aboutText1}
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              {t.home.aboutText2}
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            {t.home.technologies}
          </h2>
          
          <div className="space-y-6 overflow-hidden mask-gradient">
            <div className="flex overflow-hidden">
              <div className="animate-scroll-left">
                {Array.from({ length: 3 }, (_, setIndex) => (
                  <div key={`top-${setIndex}`} className="flex mr-6" style={{ gap: '32px' }}>
                    {['JavaScript', 'Laravel', 'SvelteKit', 'React Native', 'Node.js', 'PHP', 'SQL', 'Expo', 'AWS'].map((skill, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="tech-badge bg-forest-900 px-8 py-4 rounded-xl text-center border border-brown-700 whitespace-nowrap flex-shrink-0"
                        style={{ minWidth: 'fit-content' }}
                      >
                        <span className="text-brown-300 font-semibold text-lg">{skill}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex overflow-hidden">
              <div className="animate-scroll-right">
                {Array.from({ length: 5 }, (_, setIndex) => (
                  <div key={`bottom-${setIndex}`} className="flex mr-6" style={{ gap: '32px' }}>
                    {['TypeScript', 'Python', 'Git', 'Linux', 'MySQL', 'MongoDB'].map((skill, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="tech-badge bg-forest-900 px-8 py-4 rounded-xl text-center border border-brown-700 whitespace-nowrap flex-shrink-0"
                        style={{ minWidth: 'fit-content' }}
                      >
                        <span className="text-brown-300 font-semibold text-lg">{skill}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}