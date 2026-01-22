'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'

export default function GPSSpoofingTool() {
  const { language } = useLanguage()
  const t = translations[language]

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
              GPS Spoofing Tool
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {language === 'en' 
                ? 'Scientific JavaFX GUI application for GPS spoofing simulation via LimeSDR for research purposes. Built upon collaborative research work, I was responsible for system maintenance and optimization.'
                : 'Wissenschaftliche JavaFX GUI-Anwendung zur GPS Spoofing Simulation über LimeSDR für Forschungszwecke. Aufbauend auf kollaborativer Forschungsarbeit war ich für System-Wartung und Optimierung zuständig.'
              }
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {language === 'en' ? 'Finished' : 'Abgeschlossen'}
              </span>
              {["JavaFX", "LimeSDR", "Java"].map((tech) => (
                <span
                  key={tech}
                  className="bg-brown-900 text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image Placeholder */}
          <div className="bg-forest-900 rounded-lg p-12 mb-12 border border-brown-700">
            <div className="text-center">
              <div className="w-24 h-24 bg-brown-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📡</span>
              </div>
              <p className="text-gray-300">
                {language === 'en' ? 'GPS Spoofing Interface' : 'GPS Spoofing Interface'}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {language === 'en' ? 'JavaFX GUI for LimeSDR control' : 'JavaFX GUI für LimeSDR Steuerung'}
              </p>
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
                    ? 'This scientific tool for GPS spoofing research was developed as part of a collaborative research project using LimeSDR hardware. Building upon the foundational work of multiple team members, I took responsibility for the ongoing maintenance, system optimization, and JavaFX-based GUI improvements.'
                    : 'Dieses wissenschaftliche Tool für GPS Spoofing Forschung wurde als Teil eines kollaborativen Forschungsprojekts mit LimeSDR Hardware entwickelt. Aufbauend auf der Grundlagenarbeit mehrerer Teammitglieder übernahm ich die Verantwortung für die laufende Wartung, System-Optimierung und JavaFX-basierte GUI-Verbesserungen.'
                  }
                </p>
                <p>
                  {language === 'en'
                    ? 'My role focused on maintaining code quality, implementing performance optimizations, and ensuring the reliability of the signal generation and parameter adjustment systems for academic and security research applications.'
                    : 'Meine Rolle konzentrierte sich auf die Aufrechterhaltung der Code-Qualität, Implementierung von Performance-Optimierungen und die Gewährleistung der Zuverlässigkeit der Signalerzeugung und Parameteranpassungssysteme für akademische und Sicherheitsforschungsanwendungen.'
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
                    {language === 'en' ? 'GUI Framework' : 'GUI Framework'}
                  </h3>
                  <p className="text-gray-200 text-sm">JavaFX, FXML, CSS Styling</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Hardware Interface' : 'Hardware Interface'}
                  </h3>
                  <p className="text-gray-200 text-sm">LimeSDR, GNU Radio, Signal Processing</p>
                </div>
                <div className="bg-forest-900 p-4 rounded-lg border border-brown-700">
                  <h3 className="text-brown-400 font-semibold mb-2">
                    {language === 'en' ? 'Research Focus' : 'Forschungsfokus'}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {language === 'en' ? 'GPS Security, Signal Analysis' : 'GPS Sicherheit, Signalanalyse'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/docs/gps-spoofing-tool/documentation.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-600 hover:bg-brown-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {language === 'en' ? 'Project Documentation (DE)' : 'Projektdokumentation'}
            </a>
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