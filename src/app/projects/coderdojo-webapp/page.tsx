'use client'

import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import { useState } from 'react'

export default function CoderDojoWebapp() {
  const { language } = useLanguage()
  const t = translations[language]

  // Image gallery state
  const images = [
    { src: '/docs/gps-spoofing-tool/logoDKWDP.png', alt: 'DKWDP Logo', title: 'Logo', size: 'w-80 h-80' },
    { src: '/docs/gps-spoofing-tool/homescreen.png', alt: 'Homepage Screenshot', title: 'Homepage', size: 'w-80 h-60' },
    { src: '/docs/gps-spoofing-tool/Map.png', alt: 'Level Map Screenshot', title: 'Level Map', size: 'w-80 h-60' }
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <a
            href="/work"
            className="inline-flex items-center text-brown-400 hover:text-brown-300 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'en' ? 'Back to Work' : 'Zurück zur Arbeit'}
          </a>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'en' ? 'CoderDojo Webapp' : 'CoderDojo Webapp'}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brown-400 mb-6">
              "Der kleine Weg des Programmierens"
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {language === 'en' 
                ? 'Interactive web platform teaching JavaScript to children in cooperation with CoderDojo Schöneweide. Level-based learning with AI assistant and kid-friendly interface.'
                : 'Interaktive Webplattform zum Erlernen von JavaScript für Kinder in Kooperation mit CoderDojo Schöneweide. Level-basiertes Lernen mit KI-Assistent und kinderfreundlicher Oberfläche.'
              }
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {language === 'en' ? 'Finished' : 'Abgeschlossen'}
              </span>
              {["SvelteKit", "JavaScript", "Node.js", "AI Integration"].map((tech) => (
                <span
                  key={tech}
                  className="bg-brown-900 text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Image Gallery */}
          <div className="bg-forest-900 rounded-lg p-6 mb-12 border border-brown-700">
            <div className="text-center">
              <div className="w-96 h-96 mx-auto mb-4 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <div 
                  className={`${images[currentImageIndex].size} flex items-center justify-center`}
                  onClick={nextImage}
                >
                  <img 
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-2">
                Der kleine Weg des Programmierens
              </p>
              <p className="text-sm text-brown-400 mb-2">
                {images[currentImageIndex].title}
              </p>
              <p className="text-xs text-gray-500">
                {language === 'en' ? 'Click image to view next screenshot' : 'Klicke auf das Bild für den nächsten Screenshot'}
              </p>
              
              {/* Image indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-brown-400' 
                        : 'bg-brown-700 hover:bg-brown-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? 'Overview' : 'Überblick'}
              </h2>
              <div className="space-y-4 text-gray-200">
                <p>
                  {language === 'en' 
                    ? 'This educational web platform was developed as a team project in cooperation with CoderDojo Schöneweide as part of a Bachelor project at HTW Berlin. I worked on the frontend development together with another team member, while the full team consisted of 7 developers.'
                    : 'Diese Bildungs-Webplattform wurde als Teamprojekt in Kooperation mit CoderDojo Schöneweide als Teil eines Bachelor-Projekts an der HTW Berlin entwickelt. Ich arbeitete an der Frontend-Entwicklung zusammen mit einem anderen Teammitglied, während das gesamte Team aus 7 Entwicklern bestand.'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'The application teaches children JavaScript programming through an interactive, level-based learning system with 10 levels and multiple sub-levels. It features two learning modes (sequential and free choice), an integrated AI assistant as mascot, and comprehensive progress tracking.'
                    : 'Die Anwendung bringt Kindern JavaScript-Programmierung durch ein interaktives, level-basiertes Lernsystem mit 10 Leveln und mehreren Unterlevels bei. Sie bietet zwei Lernmodi (sequenziell und freie Wahl), einen integrierten KI-Assistenten als Maskottchen und umfassende Fortschrittsverfolgung.'
                  }
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === 'en' ? 'Technical Details' : 'Technische Details'}
              </h2>
              <div className="space-y-4">
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Frontend Development' : 'Frontend-Entwicklung'}
                  </h3>
                  <p className="text-gray-200 text-sm">SvelteKit, JavaScript, Interactive UI</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Backend & AI' : 'Backend & KI'}
                  </h3>
                  <p className="text-gray-200 text-sm">Node.js, AI Integration, Online Server Deployment</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Team Collaboration' : 'Team-Zusammenarbeit'}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {language === 'en' ? '7-person team, Frontend development partnership' : '7-köpfiges Team, Frontend-Entwicklungspartnerschaft'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://showtime.f4.htw-berlin.de/ss25/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-600 hover:bg-brown-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {language === 'en' ? 'IMI Showtime 2025' : 'IMI Showtime 2025'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}