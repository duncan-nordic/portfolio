'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import { useEffect } from 'react'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    console.log('=== PAGE COMPONENT DEBUG ===')
    console.log('Current HTML class:', document.documentElement.className)
    console.log('Current language:', language)
    
    // Check if light mode styles are being applied
    const body = document.body
    const bodyStyles = window.getComputedStyle(body)
    const isLightMode = document.documentElement.classList.contains('light')
    
    console.log('Is Light Mode:', isLightMode)
    console.log('Body background:', bodyStyles.backgroundColor)
    console.log('Body color:', bodyStyles.color)
    
    if (isLightMode) {
      console.log('🌞 LIGHT MODE COLORS:')
      console.log('- Background should be: #F3EFE0 (beige-white)')
      console.log('- Text should be: #5A5144 (warm brown, not harsh green)')
      console.log('- Accent should be: #8B5E3C (medium brown)')
    } else {
      console.log('🌙 DARK MODE COLORS:')
      console.log('- Background should be dark forest green')
      console.log('- Text should be white')
    }
    console.log('=== END PAGE DEBUG ===')
  }, [language])

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 relative">
        {/* Subtle elegant side accents */}
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

      {/* About Section */}
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

      {/* Skills Preview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            {t.home.technologies}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Git', 'Docker', 'AWS'].map((skill) => (
              <div
                key={skill}
                className="bg-forest-900 p-4 rounded-lg text-center hover:bg-brown-800 hover:border-brown-600 border border-brown-700 transition-all duration-300"
              >
                <span className="text-brown-300 font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}