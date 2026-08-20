'use client'

import { useRouter } from 'next/navigation'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, LazyMotion, m, useReducedMotion } from 'motion/react'

const loadMotionFeatures = () => import('@/lib/motionFeatures').then((module) => module.default)

export default function Work() {
  const { language } = useLanguage()
  const t = translations[language]
  const router = useRouter()
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

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
      id: "internal-form-platform",
      title: t.work.project6.title,
      description: t.work.project6.description,
      technologies: ["React", "FastAPI", "Python", "Kubernetes", "Helm"],
      status: "In Progress",
      image: `${basePath}/images/mercedes-benz/star.svg`,
      category: "web"
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
      image: `${basePath}/images/gps-spoofing-tool/gps-spoof1.png`,
      category: "security"
    },
    {
      id: "voting-system",
      title: t.work.project4.title,
      description: t.work.project4.description,
      technologies: ["Node.js", "SQLite", "JavaScript", "Ranked-Choice Voting"],
      status: "Finished",
      image: `${basePath}/images/voting-system/Voting1.png`,
      category: "web"
    },
    {
      id: "bachelor-thesis",
      title: t.work.project5.title,
      description: t.work.project5.description,
      technologies: ["MicroPython", "ESP32", "EAP-TLS", "ESP-IDF"],
      status: "In Progress",
      image: `${basePath}/images/bachelor-thesis/esp32-hardware.jpg`,
      category: "security"
    }
  ]

  const experienceAndEducation = [
    {
      title: t.work.work2.title,
      company: t.work.work2.company,
      period: t.work.work2.period,
      description: t.work.work2.description,
      logo: `${basePath}/images/mercedes-benz/star.svg`,
      detailSections: language === 'en'
        ? [
            {
              heading: 'Role and Scope',
              content: 'Working in a mixed team of working students and employees, with technical responsibility for the form application development. My focus is the form-related frontend and backend implementation rather than ownership of the underlying platform infrastructure.'
            },
            {
              heading: 'Internal Full-Stack Application',
              content: 'Modernizing internal forms through an AI-assisted development workflow. The user interfaces are built with React and the backend with Python and FastAPI. PostgreSQL is currently planned for data persistence.'
            },
            {
              heading: 'CI/CD and Deployment',
              content: 'Contributing to automated delivery through GitHub Actions workflows. The application is prepared for deployment to Kubernetes using Helm, while the broader infrastructure is maintained by the responsible platform team.'
            },
            {
              heading: 'Enterprise Governance',
              content: 'Gaining practical experience with the requirements for taking internal software toward production in a large organization, including documentation, review and approval processes, security, maintainability, testing and operational readiness.'
            },
            {
              heading: 'Communication and Presentations',
              content: 'Preparing and delivering presentations on the project status and technical implementation for management representatives, employees and colleagues. This includes translating development topics into clear information for audiences with different technical backgrounds.'
            },
            {
              heading: 'Tech Stack',
              content: 'React • Python • FastAPI • PostgreSQL (planned) • GitHub Actions • CI/CD • Kubernetes • Helm'
            },
            {
              heading: 'Project Status',
              content: 'The application is currently under active development. Internal project names, business processes and technical identifiers are intentionally not disclosed.'
            }
          ]
        : [
            {
              heading: 'Rolle und Verantwortungsbereich',
              content: 'Arbeit in einem gemischten Team aus Werkstudierenden und Mitarbeitenden mit technischer Verantwortung für die Formularentwicklung. Mein Schwerpunkt liegt auf der formularbezogenen Frontend- und Backend-Implementierung, nicht auf der Verantwortung für die zugrunde liegende Plattforminfrastruktur.'
            },
            {
              heading: 'Interne Full-Stack-Anwendung',
              content: 'Modernisierung interner Formulare mit einem KI-gestützten Entwicklungsprozess. Die Benutzeroberflächen werden mit React und das Backend mit Python und FastAPI umgesetzt. PostgreSQL ist derzeit für die Datenpersistenz vorgesehen.'
            },
            {
              heading: 'CI/CD und Deployment',
              content: 'Mitarbeit an der automatisierten Bereitstellung über GitHub-Actions-Workflows. Die Anwendung wird mit Helm für das Deployment auf Kubernetes vorbereitet, während die übergreifende Infrastruktur vom zuständigen Plattformteam betreut wird.'
            },
            {
              heading: 'Enterprise Governance',
              content: 'Praktische Erfahrung mit den Anforderungen, die interne Software in einem großen Unternehmen auf dem Weg zur Produktionsreife erfüllen muss. Dazu gehören Dokumentation, Review- und Freigabeprozesse, Sicherheit, Wartbarkeit, Tests und betriebliche Einsatzbereitschaft.'
            },
            {
              heading: 'Kommunikation und Präsentationen',
              content: 'Vorbereitung und Durchführung von Präsentationen zum Projektstand und zur technischen Umsetzung für Vertreterinnen und Vertreter des Managements, Mitarbeitende sowie Kolleginnen und Kollegen. Dabei werden Entwicklungsthemen für Zielgruppen mit unterschiedlichem technischem Hintergrund verständlich aufbereitet.'
            },
            {
              heading: 'Tech Stack',
              content: 'React • Python • FastAPI • PostgreSQL (geplant) • GitHub Actions • CI/CD • Kubernetes • Helm'
            },
            {
              heading: 'Projektstatus',
              content: 'Die Anwendung befindet sich derzeit in aktiver Entwicklung. Interne Projektnamen, Geschäftsprozesse und technische Kennungen werden bewusst nicht veröffentlicht.'
            }
          ]
    },
    {
      title: t.work.education2.title,
      company: t.work.education2.company,
      period: t.work.education2.period,
      description: t.work.education2.description,
      logo: null,
      detailSections: null
    },
    {
      title: t.work.education1.title,
      company: t.work.education1.company,
      period: t.work.education1.period,
      description: t.work.education1.description,
      logo: null,
      detailSections: null
    },
    {
      title: t.work.work1.title,
      company: t.work.work1.company,
      period: t.work.work1.period,
      description: t.work.work1.description,
      logo: `${basePath}/images/nordic-unique-travels/logo-mark.png`,
      detailSections: language === 'en' 
        ? [
            {
              heading: 'Responsibilities',
              content: 'Provided IT support and troubleshooting across all company departments. Set up, configured, and maintained work devices including laptops, desktops, and monitors. Managed hardware inventory through internal tracking system. Developed and deployed internal software solutions for various operational needs.'
            },
            {
              heading: 'QR-Code Time Tracking System',
              content: 'Designed and built a full-stack time tracking system handling 400+ employees during peak season. Progressive Web App using React, TypeScript, and Vite for the frontend. Backend built with Node.js, Express.js, and SQLite for data persistence. Implemented JWT authentication, real-time QR code scanning with location-based validation, and device binding for security. Deployed on AWS Lightsail and operational 24/7 since December 2025.'
            },
            {
              heading: 'Tech Stack',
              content: 'React • TypeScript • Vite • Tailwind CSS • Node.js • Express.js • SQLite • PHP • Laravel • AWS Lightsail • GitHub • Cloudflare'
            },
            {
              heading: 'Other Projects',
              content: 'Voting System: Developed an internal voting platform supporting ranked-choice voting (first, second, third choices) with a dedicated admin panel for managing candidates and viewing real-time results. Built with Node.js and SQLite. Hardware Management System: Maintained and enhanced the device tracking system built with Laravel/PHP, handling inventory for hundreds of devices. Apartment Management System: Took over and debugged an existing employee housing administration system, fixing critical issues after the previous developer left.'
            },
            {
              heading: 'Key Experience',
              content: 'Full-stack development in production environment for a company with 400 employees. Designed system architecture and database schemas from scratch. Collaborated with 6+ departments including HR, Operations, Sales, Marketing, Booking, and Guides. Managed projects under tight deadlines with iterative development based on user feedback. Deployed company-wide applications ensuring 24/7 system reliability.'
            }
          ]
        : [
            {
              heading: 'Aufgaben',
              content: 'IT-Support und Fehlerbehebung für alle Abteilungen des Unternehmens. Einrichtung, Konfiguration und Wartung von Arbeitsgeräten wie Laptops, Desktops und Monitoren. Hardware-Inventarverwaltung über internes Tracking-System. Entwicklung und Bereitstellung interner Softwarelösungen für verschiedene betriebliche Anforderungen.'
            },
            {
              heading: 'QR-Code Zeiterfassungssystem',
              content: 'Full-Stack Zeiterfassungssystem für 400+ Mitarbeiter während der Hochsaison entwickelt. Progressive Web App mit React, TypeScript und Vite im Frontend. Backend mit Node.js, Express.js und SQLite für Datenpersistenz. JWT-Authentifizierung, Echtzeit QR-Code-Scan mit standortbasierter Validierung und Gerätebindung implementiert. Auf AWS Lightsail deployed und seit Dezember 2025 rund um die Uhr im Einsatz.'
            },
            {
              heading: 'Tech Stack',
              content: 'React • TypeScript • Vite • Tailwind CSS • Node.js • Express.js • SQLite • PHP • Laravel • AWS Lightsail • GitHub • Cloudflare'
            },
            {
              heading: 'Weitere Projekte',
              content: 'Voting-System: Interne Abstimmungsplattform mit Erst-/Zweit-/Drittwahl-Unterstützung entwickelt, inklusive Admin-Panel zur Verwaltung von Kandidaten und Echtzeit-Ergebnisanzeige. Mit Node.js und SQLite gebaut. Hardware-Verwaltungssystem: Wartung und Erweiterung des Geräte-Tracking-Systems mit Laravel/PHP für hunderte Geräte. Apartment-Verwaltungssystem: Übernahme und Fehlerbehebung eines bestehenden Wohnungsverwaltungssystems für Mitarbeiter nach Ausscheiden des vorherigen Entwicklers.'
            },
            {
              heading: 'Kernerfahrung',
              content: 'Full-Stack-Entwicklung in Produktivumgebung für ein Unternehmen mit 400 Mitarbeitern. Systemarchitektur und Datenbank-Schemas von Grund auf konzipiert. Zusammenarbeit mit 6+ Abteilungen: HR, Operations, Sales, Marketing, Booking und Guides. Projektmanagement unter engen Deadlines mit iterativer Entwicklung basierend auf User-Feedback. Firmenweit bereitgestellte Anwendungen mit 24/7-Systemzuverlässigkeit.'
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
                <div className={`relative h-64 overflow-hidden ${project.id === 'internal-form-platform' ? 'bg-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={project.id === 'internal-form-platform'
                        ? 'object-contain p-12 transition-transform duration-500 group-hover:scale-105'
                        : 'object-cover transition-transform duration-500 group-hover:scale-110'}
                    />
                  )}
                  {project.id !== 'internal-form-platform' && (
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10"></div>
                  )}
                  
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
                        : t.work.status.inProgress}
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
          <LazyMotion features={loadMotionFeatures} strict>
            <div className="max-w-4xl mx-auto space-y-6">
              {experienceAndEducation.map((item, index) => (
              <div
                key={index}
                className={`bg-forest-900 rounded-lg p-6 hover:bg-brown-800 transition-all duration-300 border border-brown-700 ${item.detailSections ? 'cursor-pointer' : ''}`}
                onClick={() => item.detailSections && setExpandedItem(expandedItem === index ? null : index)}
                onKeyDown={(event) => {
                  if (item.detailSections && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault()
                    setExpandedItem(expandedItem === index ? null : index)
                  }
                }}
                role={item.detailSections ? 'button' : undefined}
                tabIndex={item.detailSections ? 0 : undefined}
                aria-expanded={item.detailSections ? expandedItem === index : undefined}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {item.logo && (
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white p-2">
                          <Image src={item.logo} alt={`${item.company} logo`} width={34} height={34} className="h-full w-full object-contain" />
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      {item.detailSections && (
                        <m.svg
                          className="h-5 w-5 text-brown-400"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: expandedItem === index ? 180 : 0 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: 'easeOut' }}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </m.svg>
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
                
                <AnimatePresence initial={false}>
                  {item.detailSections && expandedItem === index && (
                    <m.div
                      key={`${item.title}-details`}
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                      onClick={(event) => event.stopPropagation()}
                    >
                    <div className="pt-6 border-t border-gray-300 dark:border-brown-600 mt-4">
                      <h4 className="text-xl font-bold text-brown-600 dark:text-brown-300 mb-6">
                        {language === 'en' ? 'Detailed Information' : 'Detaillierte Informationen'}
                      </h4>
                      <div className="space-y-6">
                        {item.detailSections.map((section, idx) => (
                          <div key={idx} className="bg-gray-100 dark:bg-forest-950/50 rounded-lg p-5 border border-gray-300 dark:border-brown-700/50">
                            <h5 className="text-lg font-semibold text-brown-600 dark:text-brown-400 mb-3">
                              {section.heading}
                            </h5>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
              ))}
            </div>
          </LazyMotion>
        </section>
      </div>
    </div>
  )
}
