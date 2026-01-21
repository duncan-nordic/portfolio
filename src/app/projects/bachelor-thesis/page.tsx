'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import { useMemo } from 'react'

const TECH_STACK = ["ESP32", "WPA Enterprise", "Network Security", "eduroam", "Python"] as const

const TECHNICAL_DETAILS = [
  {
    titleEn: 'Research Focus',
    titleDe: 'Forschungsschwerpunkt',
    descriptionEn: 'ESP32 Security Vulnerabilities in WPA Enterprise Networks',
    descriptionDe: 'ESP32-Sicherheitslücken in WPA-Enterprise-Netzwerken'
  },
  {
    titleEn: 'Test Environment',
    titleDe: 'Testumgebung',
    descriptionEn: 'Simulated HTW eduroam Infrastructure',
    descriptionDe: 'Simulierte HTW-eduroam-Infrastruktur'
  },
  {
    titleEn: 'Technical Stack',
    titleDe: 'Technischer Stack',
    descriptionEn: 'ESP32 Microcontroller, RADIUS Server, Network Analysis Tools',
    descriptionDe: 'ESP32-Mikrocontroller, RADIUS-Server, Netzwerkanalyse-Tools'
  },
  {
    titleEn: 'Research Methodology',
    titleDe: 'Forschungsmethodik',
    descriptionEn: 'Penetration Testing, Vulnerability Assessment, Network Monitoring',
    descriptionDe: 'Penetration Testing, Schwachstellenanalyse, Netzwerküberwachung'
  }
] as const

export default function BachelorThesis() {
  const { language } = useLanguage()

  // Memoize all translations
  const texts = useMemo(() => ({
    backToWork: language === 'en' ? 'Back to Work' : 'Zurück zur Arbeit',
    title: language === 'en' ? 'Bachelor Thesis' : 'Bachelorarbeit',
    subtitle: language === 'en' 
      ? 'Security analysis of ESP32 devices in WPA enterprise networks'
      : 'Sicherheitsanalyse von ESP32-Geräten in WPA-Enterprise-Netzwerken',
    overview: language === 'en' ? 'Overview' : 'Überblick',
    technicalDetails: language === 'en' ? 'Technical Details' : 'Technische Details',
    overviewText1: language === 'en'
      ? 'This bachelor thesis investigates security vulnerabilities of ESP32 microcontrollers when integrated into WPA enterprise networks, specifically focusing on eduroam infrastructure. The research involves building a comprehensive test environment that replicates the HTW Berlin eduroam network architecture.'
      : 'Diese Bachelorarbeit untersucht Sicherheitslücken von ESP32-Mikrocontrollern bei der Integration in WPA-Enterprise-Netzwerke, mit besonderem Fokus auf die eduroam-Infrastruktur. Die Forschung umfasst den Aufbau einer umfassenden Testumgebung, die die HTW Berlin eduroam-Netzwerkarchitektur nachbildet.',
    overviewText2: language === 'en'
      ? 'The study examines authentication mechanisms, encryption protocols, and potential attack vectors that could compromise ESP32 devices in enterprise wireless networks. Through systematic penetration testing and vulnerability assessment, the research aims to identify security weaknesses and propose mitigation strategies.'
      : 'Die Studie untersucht Authentifizierungsmechanismen, Verschlüsselungsprotokolle und potenzielle Angriffsvektoren, die ESP32-Geräte in Enterprise-WLAN-Netzwerken kompromittieren könnten. Durch systematisches Penetration Testing und Schwachstellenanalyse zielt die Forschung darauf ab, Sicherheitslücken zu identifizieren und Gegenmaßnahmen vorzuschlagen.'
  }), [language])

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
            {texts.backToWork}
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {texts.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              {texts.subtitle}
            </p>
            
            {/* Status and Technologies */}
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-orange-700 text-orange-100 px-3 py-1 rounded-full text-sm font-medium">
                In Progress
              </span>
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="bg-brown-900 text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Research Image Placeholder */}
          <div className="mb-12">
            <div className="bg-gray-200 dark:bg-forest-900 rounded-lg p-12 border-2 border-gray-300 dark:border-brown-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-brown-600 dark:bg-brown-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brown-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
                  {language === 'en' ? 'Security Research' : 'Sicherheitsforschung'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'en' ? 'Research diagrams and results coming soon' : 'Forschungsdiagramme und Ergebnisse folgen'}
                </p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {texts.overview}
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 text-lg">
                <p>{texts.overviewText1}</p>
                <p>{texts.overviewText2}</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {texts.technicalDetails}
              </h2>
              <div className="space-y-4">
                {TECHNICAL_DETAILS.map((detail, idx) => (
                  <div key={idx} className="bg-gray-100 dark:bg-forest-900 p-4 rounded-lg border border-gray-300 dark:border-brown-700">
                    <h3 className="text-brown-600 dark:text-brown-400 font-semibold mb-2">
                      {language === 'en' ? detail.titleEn : detail.titleDe}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      {language === 'en' ? detail.descriptionEn : detail.descriptionDe}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Research Status Note */}
          <div className="mt-12 max-w-7xl mx-auto">
            <div className="bg-blue-100 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700/50 rounded-lg p-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                    {language === 'en' ? 'Research in Progress' : 'Forschung läuft'}
                  </h3>
                  <p className="text-blue-800 dark:text-blue-300">
                    {language === 'en'
                      ? 'This bachelor thesis is currently in the research and development phase. The test environment is being set up to simulate the HTW eduroam network infrastructure. Results and findings will be published upon completion of the research.'
                      : 'Diese Bachelorarbeit befindet sich derzeit in der Forschungs- und Entwicklungsphase. Die Testumgebung wird aufgebaut, um die HTW-eduroam-Netzwerkinfrastruktur zu simulieren. Ergebnisse und Erkenntnisse werden nach Abschluss der Forschung veröffentlicht.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
