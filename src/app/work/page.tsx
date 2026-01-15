'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import Image from 'next/image'
import { useState } from 'react'

export default function Work() {
  const { language } = useLanguage()
  const t = translations[language]
  const router = useRouter()
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  const projects = [
    {
      id: "coderdojo-webapp", 
      title: t.work.project2.title,
      description: t.work.project2.description,
      technologies: ["SvelteKit", "JavaScript", "Node.js", "AI Integration"],
      status: "Finished",
      image: `${basePath}/images/coderdojo-webapp/logo.png`,
      category: "education"
    },
    {
      id: "qr-code-scanner",
      title: t.work.project3.title,
      description: t.work.project3.description,
      technologies: ["React Native", "AWS", "Node.js", "SQLite"],
      status: "Finished",
      image: `${basePath}/images/qr-code-scanner/qr-code-station.png`,
      category: "mobile"
    },
    {
      id: "gps-spoofing-tool",
      title: t.work.project1.title,
      description: t.work.project1.description,
      technologies: ["JavaFX", "LimeSDR", "Java"],
      status: "Finished",
      image: "",
      category: "security"
    },
    {
      id: "project4",
      title: t.work.project4.title,
      description: t.work.project4.description,
      technologies: ["Tectetsts", "Tech2", "Tech3"],
      status: "Finished",
      image: `${basePath}/images/projects/placeholder.jpg`,
      category: "web"
    },
    {
      id: "project5",
      title: t.work.project5.title,
      description: t.work.project5.description,
      technologies: ["Tech1", "Tech2", "Tech3"],
      status: "Finished",
      image: `${basePath}/images/projects/placeholder.jpg`,
      category: "app"
    }
  ]

  const experienceAndEducation = [
    {
      title: t.work.education1.title,
      company: t.work.education1.company,
      period: t.work.education1.period,
      description: t.work.education1.description,
      detailSections: null
    },
    {
      title: t.work.work1.title,
      company: t.work.work1.company,
      period: t.work.work1.period,
      description: t.work.work1.description,
      detailSections: language === 'en' 
        ? [
            {
              heading: 'Main Responsibilities',
              content: 'IT support and user assistance for all departments. Setup, maintenance, and documentation of work devices (laptops, desktops, monitors). Inventory management using an internal hardware management system. Development and deployment of company-wide software solutions.'
            },
            {
              heading: 'Major Project: QR-Code Time Tracking System',
              content: 'Developed a comprehensive time tracking system for 400+ employees during peak season. Built as Progressive Web App (PWA) with React, TypeScript, and Vite. Backend with Node.js, Express.js, and SQLite. Features include JWT authentication, real-time check-in/check-out via QR scanning, location-based validation, device binding, and 24/7 operation on AWS infrastructure. Successfully deployed in December 2025 during high season.'
            },
            {
              heading: 'Technologies & Tools',
              content: 'Frontend: React, TypeScript, Vite, Tailwind CSS, PWA | Backend: Node.js, Express.js, PHP, Laravel | Database: SQLite, MySQL | Infrastructure: AWS Lightsail, GitHub, Cloudflare | CMS: WordPress | Authentication: JWT | Additional: Rate limiting, session management, API integration'
            },
            {
              heading: 'Additional Projects',
              content: 'Voting System: Web-based internal voting platform with ranked-choice voting, admin panel, and real-time results. Hardware Management System: Maintenance and development of device tracking system using Laravel/PHP. Apartment Management System: Bug fixes and improvements for employee housing administration.'
            },
            {
              heading: 'Skills & Experience Gained',
              content: 'Full-stack development in production environment. System architecture and database design. Working with 6+ departments (HR, Operations, Sales, Marketing, Booking, Guides). Project management under tight deadlines. User experience design and stakeholder communication. 24/7 system reliability and maintenance. Problem-solving in high-pressure situations with 400+ active users.'
            }
          ]
        : [
            {
              heading: 'Hauptaufgaben',
              content: 'IT-Support und Anwenderbetreuung für alle Abteilungen. Einrichtung, Wartung und Dokumentation von Arbeitsgeräten (Laptops, Desktops, Monitore). Inventarverwaltung über internes Hardware-Verwaltungssystem. Entwicklung und Bereitstellung unternehmensweiter Softwarelösungen.'
            },
            {
              heading: 'Großprojekt: QR-Code Zeiterfassungssystem',
              content: 'Entwicklung eines umfassenden Zeiterfassungssystems für 400+ Mitarbeiter während der Hochsaison. Realisiert als Progressive Web App (PWA) mit React, TypeScript und Vite. Backend mit Node.js, Express.js und SQLite. Features: JWT-Authentifizierung, Echtzeit Check-in/Check-out via QR-Scan, standortbasierte Validierung, Gerätebindung und 24/7-Betrieb auf AWS-Infrastruktur. Erfolgreich im Dezember 2025 während der Hochsaison in Betrieb genommen.'
            },
            {
              heading: 'Technologien & Tools',
              content: 'Frontend: React, TypeScript, Vite, Tailwind CSS, PWA | Backend: Node.js, Express.js, PHP, Laravel | Datenbank: SQLite, MySQL | Infrastruktur: AWS Lightsail, GitHub, Cloudflare | CMS: WordPress | Authentifizierung: JWT | Zusätzlich: Rate Limiting, Session Management, API-Integration'
            },
            {
              heading: 'Weitere Projekte',
              content: 'Voting-System: Webbasierte interne Abstimmungsplattform mit Erst-/Zweit-/Drittwahl, Admin-Panel und Echtzeit-Ergebnissen. Hardware-Verwaltungssystem: Wartung und Weiterentwicklung des Geräte-Tracking-Systems mit Laravel/PHP. Apartment-Verwaltungssystem: Fehlerbehebung und Verbesserungen für Mitarbeiter-Wohnungsverwaltung.'
            },
            {
              heading: 'Erworbene Fähigkeiten & Erfahrungen',
              content: 'Full-Stack-Entwicklung in Produktivumgebung. Systemarchitektur und Datenbank-Design. Zusammenarbeit mit 6+ Departments (HR, Operations, Sales, Marketing, Booking, Guides). Projektmanagement unter engen Deadlines. User Experience Design und Stakeholder-Kommunikation. 24/7-Systemzuverlässigkeit und Wartung. Problemlösung in Hochdrucksituationen mit 400+ aktiven Nutzern.'
            }
          ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.work.title.split(' ').map((word, index) => (
              <span key={index}>
                {index === 1 ? (
                  <span className="text-brown-400">{word}</span>
                ) : (
                  <span>{word}</span>
                )}
                {index < t.work.title.split(' ').length - 1 && ' '}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t.work.subtitle}
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.work.projects}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-forest-900 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-brown-800 transition-all duration-500 border border-gray-200 dark:border-brown-700 hover:shadow-2xl hover:shadow-gray-300/30 dark:hover:shadow-brown-900/30 cursor-pointer transform hover:-translate-y-2"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10"></div>
                  
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md shadow-lg ${
                      project.status === 'Live' 
                        ? 'bg-green-600 text-white' 
                        : project.status === 'Finished'
                        ? 'bg-brown-600 text-white'
                        : 'bg-orange-600 text-white'
                    }`}>
                      {project.status === 'Live' 
                        ? t.work.status.live 
                        : project.status === 'Finished'
                        ? t.work.status.finished
                        : t.work.status.inDevelopment}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-brown-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-brown-100 dark:bg-brown-900/70 text-brown-800 dark:text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-300 dark:border-brown-600 hover:bg-brown-200 dark:hover:bg-brown-800 transition-colors font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-brown-400 group-hover:text-gray-700 dark:group-hover:text-brown-300 transition-colors">
                    <span className="text-sm font-medium">{t.work.learnMore}</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.work.experience}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experienceAndEducation.map((item, index) => (
              <div
                key={index}
                className={`bg-forest-900 rounded-lg p-6 hover:bg-brown-800 transition-all duration-300 border border-brown-700 ${item.detailSections ? 'cursor-pointer' : ''}`}
                onClick={() => item.detailSections && setExpandedItem(expandedItem === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      {item.detailSections && (
                        <svg 
                          className={`w-5 h-5 text-brown-400 transition-transform duration-300 ${expandedItem === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    <p className="text-brown-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-brown-300 mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-200 mb-4">
                  {item.description}
                </p>
                
                {/* Expandable Details */}
                {item.detailSections && (
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedItem === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-6 border-t border-brown-600 mt-4">
                      <h4 className="text-xl font-bold text-brown-300 mb-6">
                        {language === 'en' ? 'Detailed Information' : 'Detaillierte Informationen'}
                      </h4>
                      <div className="space-y-6">
                        {item.detailSections.map((section, idx) => (
                          <div key={idx} className="bg-forest-950/50 rounded-lg p-5 border border-brown-700/50">
                            <h5 className="text-lg font-semibold text-brown-400 mb-3">
                              {section.heading}
                            </h5>
                            <p className="text-gray-300 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}