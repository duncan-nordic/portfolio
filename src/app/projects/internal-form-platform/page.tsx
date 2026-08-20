'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'

const TECH_STACK = ['React', 'Python', 'FastAPI', 'GitHub Actions', 'Kubernetes', 'Helm'] as const

const CONTENT = {
  en: {
    back: 'Back to Work',
    title: 'Internal Form Platform',
    subtitle: 'Modernizing internal forms as a full-stack application within an enterprise development and governance environment at Mercedes-Benz.',
    status: 'In Development',
    overview: 'Overview',
    overviewText1: 'As part of my working student position, I work with other working students and employees on the modernization of internal forms. I currently take technical responsibility for the form application development and coordinate implementation topics within the team.',
    overviewText2: 'The public description is intentionally limited to the development approach and standard technologies. Internal project names, form contents, business processes and technical identifiers are not disclosed.',
    details: 'Technical Details',
    detailItems: [
      ['Responsibility', 'Technical lead for the form-related frontend and backend implementation, not for the underlying platform infrastructure.'],
      ['Frontend', 'Implementation of form interfaces and application flows with React.'],
      ['Backend', 'Python and FastAPI services for form processing and application logic.'],
      ['Data persistence', 'PostgreSQL is currently planned; the final database decision is still part of the ongoing project.'],
      ['Delivery', 'Automated delivery through GitHub Actions, with Helm-based deployment to Kubernetes.'],
    ],
    approach: 'Development Approach',
    approachIntro: 'The work combines application development with the delivery and quality requirements of a large organization.',
    approachItems: [
      ['Application development', 'Forms are rebuilt as maintainable full-stack components instead of isolated legacy solutions. The development workflow includes AI-assisted implementation followed by review, testing and production hardening.'],
      ['CI/CD integration', 'I contribute to GitHub Actions workflows and deploy application changes through the existing Helm and Kubernetes delivery process. The platform team remains responsible for the broader infrastructure.'],
      ['Production readiness', 'Documentation, security, maintainability, testing, reviews, approvals and operational requirements are considered before a release can move toward production.'],
    ],
    collaboration: 'Collaboration and Communication',
    collaborationText1: 'The project is developed collaboratively with working students and employees. My role includes coordinating technical decisions for the form application and communicating implementation progress across the team.',
    collaborationText2: 'I also prepare and deliver presentations on the project status and technical approach for management representatives, employees and colleagues, adapting technical topics to audiences with different backgrounds.',
    currentStatus: 'Current Status',
    currentStatusText: 'The application is under active development. The architecture, persistence layer and production processes continue to evolve as the project moves toward an operational release.',
    noticeTitle: 'Public portfolio notice',
    noticeText: 'This is a personal description of my work and not an official Mercedes-Benz publication. No confidential project data is shown. Mercedes-Benz and the three-pointed star are protected trademarks of their respective owner.',
    logoAlt: 'Mercedes-Benz star identifying the employer context',
    logoCaption: 'The logo is used only to identify the stated employment context.',
  },
  de: {
    back: 'Zurück zur Arbeit',
    title: 'Interne Formularplattform',
    subtitle: 'Modernisierung interner Formulare als Full-Stack-Anwendung im Entwicklungs- und Governance-Umfeld von Mercedes-Benz.',
    status: 'In Entwicklung',
    overview: 'Überblick',
    overviewText1: 'Im Rahmen meiner Werkstudententätigkeit arbeite ich gemeinsam mit anderen Werkstudierenden und Mitarbeitenden an der Modernisierung interner Formulare. Aktuell trage ich die technische Verantwortung für die Formularentwicklung und koordiniere Umsetzungsthemen innerhalb des Teams.',
    overviewText2: 'Die öffentliche Beschreibung beschränkt sich bewusst auf den Entwicklungsansatz und allgemein verwendete Technologien. Interne Projektnamen, Formularinhalte, Geschäftsprozesse und technische Kennungen werden nicht veröffentlicht.',
    details: 'Technische Details',
    detailItems: [
      ['Verantwortung', 'Technische Leitung der formularbezogenen Frontend- und Backend-Implementierung, nicht der zugrunde liegenden Plattforminfrastruktur.'],
      ['Frontend', 'Umsetzung von Formularoberflächen und Anwendungsabläufen mit React.'],
      ['Backend', 'Services mit Python und FastAPI für Formularverarbeitung und Anwendungslogik.'],
      ['Datenpersistenz', 'PostgreSQL ist derzeit vorgesehen; die endgültige Datenbankentscheidung ist noch Teil des laufenden Projekts.'],
      ['Bereitstellung', 'Automatisierte Bereitstellung über GitHub Actions und Helm-basiertes Deployment auf Kubernetes.'],
    ],
    approach: 'Entwicklungsansatz',
    approachIntro: 'Die Arbeit verbindet Anwendungsentwicklung mit den Bereitstellungs- und Qualitätsanforderungen eines großen Unternehmens.',
    approachItems: [
      ['Anwendungsentwicklung', 'Formulare werden als wartbare Full-Stack-Komponenten statt als isolierte Altlösungen neu umgesetzt. Der Entwicklungsprozess umfasst KI-gestützte Implementierung sowie anschließende Reviews, Tests und Maßnahmen zur Produktionsreife.'],
      ['CI/CD-Integration', 'Ich arbeite an GitHub-Actions-Workflows mit und deploye Anwendungsänderungen über den bestehenden Helm- und Kubernetes-Prozess. Die übergreifende Infrastruktur bleibt im Verantwortungsbereich des Plattformteams.'],
      ['Produktionsreife', 'Dokumentation, Sicherheit, Wartbarkeit, Tests, Reviews, Freigaben und betriebliche Anforderungen werden berücksichtigt, bevor ein Release in Richtung Produktion gehen kann.'],
    ],
    collaboration: 'Zusammenarbeit und Kommunikation',
    collaborationText1: 'Das Projekt wird gemeinsam mit Werkstudierenden und Mitarbeitenden entwickelt. Zu meiner Rolle gehören die Koordination technischer Entscheidungen für die Formularanwendung und die Kommunikation des Umsetzungsstands im Team.',
    collaborationText2: 'Außerdem bereite ich Präsentationen zum Projektstand und zur technischen Umsetzung für Vertreterinnen und Vertreter des Managements, Mitarbeitende sowie Kolleginnen und Kollegen vor und vermittle technische Themen für unterschiedliche Zielgruppen verständlich.',
    currentStatus: 'Aktueller Stand',
    currentStatusText: 'Die Anwendung befindet sich in aktiver Entwicklung. Architektur, Persistenzschicht und Produktionsprozesse werden auf dem Weg zu einem betrieblich einsetzbaren Release weiterentwickelt.',
    noticeTitle: 'Hinweis zum Portfolioeintrag',
    noticeText: 'Dies ist eine persönliche Beschreibung meiner Tätigkeit und keine offizielle Veröffentlichung von Mercedes-Benz. Es werden keine vertraulichen Projektdaten gezeigt. Mercedes-Benz und der dreizackige Stern sind geschützte Marken des jeweiligen Rechteinhabers.',
    logoAlt: 'Mercedes-Benz-Stern zur Kennzeichnung des Arbeitgeberkontexts',
    logoCaption: 'Das Logo dient ausschließlich der Kennzeichnung des genannten Beschäftigungskontexts.',
  },
} as const

export default function InternalFormPlatform() {
  const { language } = useLanguage()
  const text = CONTENT[language]
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 dark:from-forest-800 dark:to-forest-950">
      <div className="container mx-auto px-6">
        <main className="mx-auto max-w-4xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-brown-600 transition-colors hover:text-brown-500 dark:text-brown-400 dark:hover:text-brown-300">
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {text.back}
          </Link>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">{text.title}</h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">{text.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-700 px-3 py-1 text-sm font-medium text-orange-100">{text.status}</span>
              {TECH_STACK.map((tech) => (
                <span key={tech} className="rounded-full border border-brown-400 bg-brown-100 px-3 py-1 text-sm text-brown-800 dark:border-brown-600 dark:bg-brown-900 dark:text-brown-200">{tech}</span>
              ))}
            </div>
          </header>

          <figure className="mb-14 rounded-lg border-2 border-brown-500 bg-white px-12 py-14 md:px-20">
            <Image src={`${basePath}/images/mercedes-benz/star.svg`} alt={text.logoAlt} width={1000} height={1000} priority className="mx-auto h-auto w-full max-w-[260px] object-contain" />
            <figcaption className="mt-6 text-center text-sm text-gray-600">{text.logoCaption}</figcaption>
          </figure>

          <section className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.overview}</h2>
              <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-200">
                <p>{text.overviewText1}</p>
                <p>{text.overviewText2}</p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.details}</h2>
              <div className="space-y-4">
                {text.detailItems.map(([title, description]) => (
                  <article key={title} className="rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-brown-700 dark:bg-forest-900">
                    <h3 className="mb-2 font-semibold text-brown-700 dark:text-brown-400">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 border-y border-gray-300 py-12 dark:border-brown-800">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{text.approach}</h2>
            <p className="mb-5 text-gray-700 dark:text-gray-200">{text.approachIntro}</p>
            <dl className="divide-y divide-gray-300 border-y border-gray-300 dark:divide-brown-800 dark:border-brown-800">
              {text.approachItems.map(([title, description]) => (
                <div key={title} className="grid gap-2 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
                  <dt className="font-semibold text-brown-700 dark:text-brown-400">{title}</dt>
                  <dd className="leading-relaxed text-gray-700 dark:text-gray-300">{description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.collaboration}</h2>
            <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-200">
              <p>{text.collaborationText1}</p>
              <p>{text.collaborationText2}</p>
            </div>
          </section>

          <section className="mt-14 rounded-lg border border-gray-300 bg-gray-100 p-6 dark:border-brown-700 dark:bg-forest-900">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{text.currentStatus}</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-200">{text.currentStatusText}</p>
          </section>

          <aside className="mt-8 rounded-lg border border-gray-300 p-6 dark:border-brown-800">
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{text.noticeTitle}</h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{text.noticeText}</p>
          </aside>
        </main>
      </div>
    </div>
  )
}
