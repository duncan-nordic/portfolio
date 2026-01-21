'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import { useState } from 'react'

export default function VotingSystem() {
  const { language } = useLanguage()
  const t = translations[language]

  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  // Image gallery state
  const images = [
    { src: `${basePath}/images/voting-system/Voting1.png`, alt: 'Voting Interface', title: language === 'en' ? 'Voting Interface' : 'Voting Interface' },
    { src: `${basePath}/images/voting-system/AdminView1.png`, alt: 'Admin Panel - Votes', title: language === 'en' ? 'Admin Panel - Votes' : 'Admin Panel - Votes' },
    { src: `${basePath}/images/voting-system/AdminView2.png`, alt: 'Admin Panel - Results', title: language === 'en' ? 'Admin Panel - Results' : 'Admin Panel - Ergebnisse' }
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-forest-800 dark:to-forest-950 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/work"
            className="inline-flex items-center text-brown-400 hover:text-brown-300 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {language === 'en' ? 'Back to Work' : 'Zurück zur Arbeit'}
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' ? 'Internal Voting System' : 'Internes Voting System'}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              {language === 'en' 
                ? 'Ranked-choice voting platform with real-time results and admin management'
                : 'Ranked-Choice Voting-Plattform mit Echtzeit-Ergebnissen und Admin-Verwaltung'
              }
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Finished
              </span>
              {["Node.js", "SQLite", "JavaScript", "Ranked-Choice Voting"].map((tech) => (
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
          <div className="mb-12">
            <div className="text-center">
              <div className="max-w-3xl mx-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={nextImage}>
                <img 
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="w-auto max-h-[600px] mx-auto object-contain rounded-lg border-2 border-brown-500"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {language === 'en' ? 'Internal Voting System' : 'Internes Voting System'}
              </p>
              <p className="text-sm text-brown-600 dark:text-brown-400 mb-2">
                {images[currentImageIndex].title}
              </p>
            </div>
            
            {/* Image navigation */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 mb-3">
                {language === 'en' ? 'Click image to view next screenshot' : 'Klicke auf das Bild für den nächsten Screenshot'}
              </p>
              
              {/* Image indicators */}
              <div className="flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-brown-400' 
                        : 'bg-brown-700 hover:bg-brown-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
            
            {/* Privacy Notice */}
            <div className="mb-12 bg-brown-100 dark:bg-brown-900/30 border border-brown-300 dark:border-brown-700/50 rounded-lg p-4">
              <p className="text-sm text-brown-700 dark:text-brown-300 italic">
                {language === 'en'
                  ? '* User names and dates have been anonymized in the screenshots for security reasons.'
                  : '* Benutzernamen und Daten wurden in den Screenshots aus Sicherheitsgründen unkenntlich gemacht.'
                }
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Overview' : 'Überblick'}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 text-lg">
                <p>
                  {language === 'en'
                    ? 'During my internship, I developed an internal web-based voting system for employees in coordination with the Operations Department supervisor. The goal was to digitally facilitate simple and transparent voting processes within the company and streamline result evaluation.'
                    : 'Während des Praktikums entwickelte ich, nach Absprache mit dem Supervisor vom Operations-Department, ein internes webbasiertes Voting-System für Mitarbeitende. Ziel war es, einfache und transparente Abstimmungen innerhalb des Unternehmens digital abzubilden und die Auswertung der Ergebnisse zu erleichtern.'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'Employees can authenticate via the login area and participate in active voting rounds. The system supports ranked-choice voting where users can submit their first, second, and third choices. Only one vote per voting round is allowed. Admins have access to a dedicated admin panel for managing candidates and voting rounds, as well as evaluating results.'
                    : 'Mitarbeiter können sich via Login-Bereich authentifizieren und an aktiven Abstimmungsrunden teilnehmen. Das System unterstützt ein Verfahren, bei dem Nutzer ihre Erst-, Zweit-, und Drittwahl abgeben können. Pro Abstimmungsrunde ist jeweils nur eine Stimmabgabe möglich. Für Admins steht ein gesondertes Admin-Panel bereit, in dem Kandidaten und Abstimmungsrunden verwaltet sowie Ergebnisse ausgewertet werden können.'
                  }
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Technical Details' : 'Technische Details'}
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-forest-900 p-4 rounded-lg border border-gray-300 dark:border-brown-700">
                  <h3 className="text-brown-600 dark:text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Voting System' : 'Voting-System'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">Ranked-Choice (1st, 2nd, 3rd preference), Real-time Results</p>
                </div>
                <div className="bg-gray-100 dark:bg-forest-900 p-4 rounded-lg border border-gray-300 dark:border-brown-700">
                  <h3 className="text-brown-600 dark:text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Admin Panel' : 'Admin-Panel'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">{language === 'en' ? 'Candidate Management, Vote Tracking, Result Dashboard' : 'Kandidaten-Verwaltung, Vote-Tracking, Ergebnis-Dashboard'}</p>
                </div>
                <div className="bg-gray-100 dark:bg-forest-900 p-4 rounded-lg border border-gray-300 dark:border-brown-700">
                  <h3 className="text-brown-600 dark:text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Technical Stack' : 'Technischer Stack'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">Node.js, Express.js, SQLite</p>
                </div>
                <div className="bg-gray-100 dark:bg-forest-900 p-4 rounded-lg border border-gray-300 dark:border-brown-700">
                  <h3 className="text-brown-600 dark:text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Infrastructure & Security' : 'Infrastruktur & Sicherheit'}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">{language === 'en' ? 'AWS Lightsail, Token-based Authentication' : 'AWS Lightsail, Token-basierte Authentifizierung'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
