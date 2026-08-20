'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { useState } from 'react'

export default function QRCodeScanner() {
  const { language } = useLanguage()

  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  // Image gallery state
  const images = [
    { src: `${basePath}/images/qr-code-scanner/admin-panel.png`, alt: language === 'en' ? 'Admin overview containing test data' : 'Admin-Übersicht mit Testdaten', title: language === 'en' ? 'Admin Overview (Test Data)' : 'Admin-Übersicht (Testdaten)', isMobile: false },
    { src: `${basePath}/images/qr-code-scanner/qr-code-station.png`, alt: language === 'en' ? 'Station screen with an expired demo QR code' : 'Stationsansicht mit abgelaufenem Demo-QR-Code', title: language === 'en' ? 'Expired Demo QR Code' : 'Abgelaufener Demo-QR-Code', isMobile: true },
    { src: `${basePath}/images/qr-code-scanner/login-screen.png`, alt: language === 'en' ? 'App login screen' : 'Anmeldeansicht der App', title: language === 'en' ? 'Login Screen' : 'Anmeldeansicht', isMobile: true },
    { src: `${basePath}/images/qr-code-scanner/scanner-interface.png`, alt: language === 'en' ? 'QR scanner interface' : 'Oberfläche des QR-Scanners', title: language === 'en' ? 'Scanner Interface' : 'Scanner-Oberfläche', isMobile: true },
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
                ? 'Mobile application for recording working hours through an authenticated QR-code workflow. The public project description focuses on the user experience and technologies without disclosing production credentials, employee records or current endpoints.'
                : 'Mobile Anwendung zur Erfassung von Arbeitszeiten über einen authentifizierten QR-Code-Ablauf. Die öffentliche Projektbeschreibung konzentriert sich auf Nutzerführung und Technologien, ohne Produktivzugänge, Mitarbeiterdaten oder aktuelle Endpunkte offenzulegen.'
              }
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {language === 'en' ? 'Finished' : 'Abgeschlossen'}
              </span>
              {["React Native", "Node.js", "Secure Authentication"].map((tech) => (
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
                    ? 'I developed this mobile application during my internship to make employee check-in and check-out straightforward on registered devices. My work covered the mobile interface, camera-based scanning flow and its connection to the backend.'
                    : 'Ich entwickelte diese mobile Anwendung während meines Praktikums, um das Ein- und Auschecken auf registrierten Geräten einfach umzusetzen. Meine Arbeit umfasste die mobile Oberfläche, den kamerabasierten Scan-Ablauf und dessen Anbindung an das Backend.'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'The screenshots contain test data. The displayed QR challenge expired after ten seconds and does not contain current credentials, employee records or active endpoints.'
                    : 'Die Screenshots enthalten Testdaten. Die dargestellte QR-Challenge lief nach zehn Sekunden ab und enthält keine aktuellen Zugangsdaten, Mitarbeiterdaten oder aktiven Endpunkte.'
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
                  <p className="text-gray-200 text-sm">React Native, Camera Integration, Responsive Mobile UI</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Security & Authentication' : 'Sicherheit & Authentifizierung'}
                  </h3>
                  <p className="text-gray-200 text-sm">Authenticated Sessions, Input Validation, Expiring QR Challenges</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Backend' : 'Backend'}
                  </h3>
                  <p className="text-gray-200 text-sm">Node.js, API Integration, Server-side Validation</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Data Handling' : 'Datenverarbeitung'}
                  </h3>
                  <p className="text-gray-200 text-sm">Structured Persistence, Access-controlled Workflows</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Project Boundary' : 'Projektgrenze'}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {language === 'en' ? 'No production data or internal endpoints published' : 'Keine Produktivdaten oder internen Endpunkte veröffentlicht'}
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
