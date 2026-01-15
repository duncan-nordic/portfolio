'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import { useState } from 'react'

export default function QRCodeScanner() {
  const { language } = useLanguage()
  const t = translations[language]

  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  // Image gallery state
  const images = [
    { src: `${basePath}/images/qr-code-scanner/qr-code-station.png`, alt: 'QR-Code Scanner Station', title: 'Scanner Station', isMobile: false },
    { src: `${basePath}/images/qr-code-scanner/login-screen.png`, alt: 'App Login Screen', title: 'Login Screen', isMobile: true },
    { src: `${basePath}/images/qr-code-scanner/scanner-interface.png`, alt: 'QR Scanner Interface', title: 'Scanner Interface', isMobile: true },
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'en' ? 'QR-Code Scanner' : 'QR-Code Scanner'}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brown-400 mb-6">
              {language === 'en' ? 'Working Hours Tracking System' : 'Arbeitszeiterfassungssystem'}
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              {language === 'en' 
                ? 'Enterprise mobile application for tracking employee working hours using JWT authentication, device-bound user IDs, and location-based QR-code scanning. Runs on AWS server infrastructure with SQLite database. Supports up to 400 employees during peak season with secure integration to company database systems.'
                : 'Enterprise Mobile-Anwendung zur Erfassung von Arbeitszeiten mittels JWT-Authentifizierung, gerätegebundenen Benutzer-IDs und standortbasiertem QR-Code-Scanning. Läuft auf AWS Server-Infrastruktur mit SQLite-Datenbank. Unterstützt bis zu 400 Mitarbeiter in der Hochsaison mit sicherer Integration in Unternehmens-Datenbanksysteme.'
              }
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-800 text-brown-200 px-3 py-1 rounded-full text-sm font-medium">
                {language === 'en' ? 'In Development' : 'In Entwicklung'}
              </span>
              {["React Native", "AWS", "Node.js", "SQLite"].map((tech) => (
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
              <p className="text-gray-300 mb-2">
                {language === 'en' ? 'QR-Code Working Hours System' : 'QR-Code Arbeitszeiterfassung'}
              </p>
              <p className="text-sm text-brown-400 mb-2">
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

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {language === 'en' ? 'Overview' : 'Überblick'}
              </h2>
              <div className="space-y-4 text-gray-200 text-lg">
                <p>
                  {language === 'en' 
                    ? 'This enterprise mobile application was developed during my internship to solve the challenge of tracking working hours for up to 400 employees during peak season. The system runs on AWS server infrastructure and uses advanced security measures including JWT authentication and device-bound user identification.'
                    : 'Diese Enterprise-Mobile-Anwendung wurde während meines Praktikums entwickelt, um die Herausforderung der Arbeitszeiterfassung für bis zu 400 Mitarbeiter in der Hochsaison zu lösen. Das System läuft auf AWS Server-Infrastruktur und verwendet fortschrittliche Sicherheitsmaßnahmen einschließlich JWT-Authentifizierung und gerätegebundener Benutzeridentifikation.'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'The location-based QR-code scanning ensures that employees can only clock in/out from designated work areas using their registered mobile devices. The system seamlessly integrates with existing company database infrastructure for real-time synchronization.'
                    : 'Das standortbasierte QR-Code-Scanning stellt sicher, dass Mitarbeiter sich nur von festgelegten Arbeitsbereichen mit ihren registrierten Mobilgeräten ein-/ausloggen können. Das System integriert sich nahtlos in die bestehende Unternehmens-Datenbankinfrastruktur für Echtzeit-Synchronisation.'
                  }
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {language === 'en' ? 'Technical Details' : 'Technische Details'}
              </h2>
              <div className="space-y-4">
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Mobile Development' : 'Mobile-Entwicklung'}
                  </h3>
                  <p className="text-gray-200 text-sm">React Native, Camera Integration, Device ID Binding</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Security & Authentication' : 'Sicherheit & Authentifizierung'}
                  </h3>
                  <p className="text-gray-200 text-sm">JWT Authentication, Location-based Validation, Secure QR-Codes</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Cloud Infrastructure' : 'Cloud-Infrastruktur'}
                  </h3>
                  <p className="text-gray-200 text-sm">AWS Server, SQLite Database, Scalable Architecture</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Backend & Integration' : 'Backend & Integration'}
                  </h3>
                  <p className="text-gray-200 text-sm">Node.js, Company System Integration</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Scale & Performance' : 'Skalierung & Performance'}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {language === 'en' ? 'Supports 400+ employees, Real-time sync' : 'Unterstützt 400+ Mitarbeiter, Echtzeit-Sync'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              disabled
              className="bg-brown-800 text-brown-300 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              {language === 'en' ? 'Coming Soon' : 'Demnächst'}
            </button>
            <button
              disabled
              className="border border-brown-600 text-brown-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
            >
              {language === 'en' ? 'View Progress' : 'Fortschritt ansehen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}