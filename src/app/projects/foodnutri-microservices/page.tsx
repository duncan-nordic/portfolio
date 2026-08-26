'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageToggle'
import { useState } from 'react'

const services = [
  { name: 'Profile Service', detailEn: 'User profiles', detailDe: 'Nutzerprofile', port: '8082' },
  { name: 'Food Service', detailEn: 'Food log & nutrition API', detailDe: 'Food-Log & Nährwert-API', port: '8080' },
  { name: 'Challenge Service', detailEn: 'Personal goals', detailDe: 'Persönliche Ziele', port: '8081' },
] as const

const stack = ['Java 26', 'Spring Boot', 'Spring Cloud', 'Docker Compose', 'Keycloak', 'OpenID Connect', 'H2', 'Gradle']

export default function FoodNutriMicroservices() {
  const { language } = useLanguage()
  const isEnglish = language === 'en'
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  const text = isEnglish
    ? {
        back: 'Back to Work',
        title: 'FoodNutri Microservices',
        subtitle: 'A secured food-tracking platform built as a distributed Spring Boot system',
        status: 'Finished',
        architecture: 'System Architecture',
        gallery: 'Application Screens',
        technicalDetails: 'Technical Details',
        browser: 'Browser Client',
        gateway: 'Spring Cloud API Gateway',
        discovery: 'Eureka Service Discovery',
        identity: 'Keycloak Identity Provider',
        overview: 'Overview',
        overviewText: 'FoodNutri combines food logging, nutrition lookup, user profiles and personal challenges in one application. Instead of a monolithic backend, the domain is split into independently running Spring Boot services behind a central gateway.',
        engineering: 'Engineering Focus',
        engineeringText: 'The project explores service discovery, gateway routing, service-to-service communication and container orchestration. Each protected service validates signed JWTs independently, while the Challenge Service forwards the user token when requesting food data.',
        features: 'Core Features',
        featureItems: [
          'Search products through the Open Food Facts API',
          'Maintain a personal food and nutrition log',
          'Create profiles linked to a stable identity',
          'Track food-based challenges and progress',
        ],
        security: 'Security & Authentication',
        securityText: 'Keycloak handles registration and login through the OpenID Connect Authorization Code flow with PKCE. The API Gateway provides one public entry point, while Spring Security protects the profile, food and challenge APIs as OAuth 2.0 resource servers.',
        data: 'Data & Delivery',
        dataText: 'Spring Data JPA and separate in-memory H2 databases keep service data isolated. Every component has its own Gradle build and Dockerfile, while Docker Compose starts the complete local environment including Keycloak and Eureka.',
        screenshots: [
          { src: `${basePath}/images/foodnutri/food-log-dashboard.png`, title: 'Food log and nutrition overview', alt: 'FoodNutri dashboard with food search and a nutrition table' },
          { src: `${basePath}/images/foodnutri/personalized-challenges.png`, title: 'Personalized daily challenges', alt: 'FoodNutri challenge page with five nutrition goals' },
          { src: `${basePath}/images/foodnutri/keycloak-registration.png`, title: 'Secure account registration', alt: 'FoodNutri registration form provided by Keycloak' },
        ],
      }
    : {
        back: 'Zurück zur Arbeit',
        title: 'FoodNutri Microservices',
        subtitle: 'Eine geschützte Food-Tracking-Plattform als verteiltes Spring-Boot-System',
        status: 'Abgeschlossen',
        architecture: 'Systemarchitektur',
        gallery: 'Anwendungsansichten',
        technicalDetails: 'Technische Details',
        browser: 'Browser-Client',
        gateway: 'Spring Cloud API Gateway',
        discovery: 'Eureka Service Discovery',
        identity: 'Keycloak Identity Provider',
        overview: 'Überblick',
        overviewText: 'FoodNutri verbindet Ernährungsprotokoll, Nährwertsuche, Nutzerprofile und persönliche Challenges in einer Anwendung. Anstelle eines monolithischen Backends ist die Fachlogik auf unabhängig laufende Spring-Boot-Services hinter einem zentralen Gateway verteilt.',
        engineering: 'Engineering-Schwerpunkt',
        engineeringText: 'Das Projekt behandelt Service Discovery, Gateway-Routing, Kommunikation zwischen Services und Container-Orchestrierung. Jeder geschützte Service validiert signierte JWTs selbstständig; der Challenge Service leitet den Token bei Anfragen an den Food Service weiter.',
        features: 'Kernfunktionen',
        featureItems: [
          'Produktsuche über die Open Food Facts API',
          'Persönliches Food- und Nährwertprotokoll',
          'Profile mit stabil verknüpfter Identität',
          'Food-basierte Challenges und Fortschrittstracking',
        ],
        security: 'Sicherheit & Authentifizierung',
        securityText: 'Keycloak übernimmt Registrierung und Login über den OpenID-Connect-Authorization-Code-Flow mit PKCE. Das API Gateway bildet einen zentralen Einstiegspunkt, während Spring Security die Profil-, Food- und Challenge-APIs als OAuth-2.0-Resource-Server absichert.',
        data: 'Daten & Bereitstellung',
        dataText: 'Spring Data JPA und getrennte In-Memory-H2-Datenbanken isolieren die Servicedaten. Jede Komponente besitzt einen eigenen Gradle-Build und ein Dockerfile; Docker Compose startet die gesamte lokale Umgebung inklusive Keycloak und Eureka.',
        screenshots: [
          { src: `${basePath}/images/foodnutri/food-log-dashboard.png`, title: 'Food-Log und Nährwertübersicht', alt: 'FoodNutri-Dashboard mit Lebensmittelsuche und Nährwerttabelle' },
          { src: `${basePath}/images/foodnutri/personalized-challenges.png`, title: 'Personalisierte tägliche Challenges', alt: 'FoodNutri-Challenge-Seite mit fünf Ernährungszielen' },
          { src: `${basePath}/images/foodnutri/keycloak-registration.png`, title: 'Sichere Account-Registrierung', alt: 'Von Keycloak bereitgestelltes FoodNutri-Registrierungsformular' },
        ],
      }

  const nextImage = () => {
    setCurrentImageIndex((current) => (current + 1) % text.screenshots.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-brown-400 transition-colors hover:text-brown-300">
            <span aria-hidden="true" className="mr-2 text-xl">&larr;</span>
            {text.back}
          </Link>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{text.title}</h1>
            <h2 className="mb-6 text-2xl font-semibold text-brown-400 md:text-3xl">
              {isEnglish ? 'Distributed Food Tracking System' : 'Verteiltes Food-Tracking-System'}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">{text.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <span className="rounded-full bg-brown-600 px-3 py-1 text-sm font-medium text-white">{text.status}</span>
              {stack.map((technology) => (
                <span key={technology} className="rounded-full border border-brown-600 bg-brown-900 px-3 py-1 text-sm font-medium text-brown-200">
                  {technology}
                </span>
              ))}
            </div>
          </header>

          <section className="mb-12" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="sr-only">{text.gallery}</h2>
            <button
              type="button"
              onClick={nextImage}
              aria-label={isEnglish ? 'Show next application screen' : 'Nächste Anwendungsansicht anzeigen'}
              className="relative mx-auto block h-[300px] w-full max-w-3xl overflow-hidden rounded-lg border-2 border-brown-500 bg-[#0d172b] transition-opacity hover:opacity-90 sm:h-[520px]"
            >
              <Image src={text.screenshots[currentImageIndex].src} alt={text.screenshots[currentImageIndex].alt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-contain p-2" />
            </button>
            <div className="mt-4 text-center">
              <p className="text-gray-300">{text.gallery}</p>
              <p className="mt-1 text-sm text-brown-400">{text.screenshots[currentImageIndex].title}</p>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              {text.screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={screenshot.title}
                  aria-pressed={currentImageIndex === index}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    currentImageIndex === index
                      ? 'bg-brown-400'
                      : 'bg-brown-700 hover:bg-brown-600'
                  }`}
                />
              ))}
            </div>
          </section>

          <section className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">{text.overview}</h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-200">
                <p>{text.overviewText}</p>
                <p>{text.engineeringText}</p>
              </div>
              <h3 className="mb-4 mt-8 text-xl font-semibold text-brown-400">{text.features}</h3>
              <ul className="space-y-3 text-gray-200">
                {text.featureItems.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brown-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">{text.technicalDetails}</h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-brown-700 bg-forest-900 p-4">
                  <h3 className="mb-2 font-semibold text-brown-400">Spring Backend</h3>
                  <p className="text-sm text-gray-200">Java 26, Spring Boot, Spring Data JPA, REST APIs</p>
                </div>
                <div className="rounded-lg border border-brown-700 bg-forest-900 p-4">
                  <h3 className="mb-2 font-semibold text-brown-400">{text.security}</h3>
                  <p className="text-sm text-gray-200">{text.securityText}</p>
                </div>
                <div className="rounded-lg border border-brown-700 bg-forest-900 p-4">
                  <h3 className="mb-2 font-semibold text-brown-400">{text.data}</h3>
                  <p className="text-sm text-gray-200">{text.dataText}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-3xl" aria-labelledby="architecture-title">
            <h2 id="architecture-title" className="mb-6 text-3xl font-bold text-white">{text.architecture}</h2>
            <div className="rounded-lg border border-brown-700 bg-forest-900 p-4 sm:p-5">
              <div className="mx-auto max-w-xl text-center text-sm text-gray-200">
                <div className="rounded border border-brown-700 bg-forest-800 px-3 py-2 font-medium">{text.browser}</div>
                <div className="py-1 text-brown-500" aria-hidden="true">&#8595;</div>
                <div className="rounded border border-brown-600 bg-brown-900/40 px-3 py-2 font-semibold text-brown-200">{text.gateway} <span className="font-normal text-gray-400">:8085</span></div>
                <div className="py-1 text-brown-500" aria-hidden="true">&#8595;</div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {services.map((service) => (
                    <div key={service.name} className="rounded border border-brown-700 bg-forest-800 px-3 py-3">
                      <h3 className="font-semibold text-white">{service.name}</h3>
                      <p className="mt-1 text-xs text-gray-400">{isEnglish ? service.detailEn : service.detailDe} · :{service.port}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
                  <div className="rounded border border-brown-700 px-3 py-2">{text.discovery} · :8761</div>
                  <div className="rounded border border-brown-700 px-3 py-2">{text.identity} · :8090</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
