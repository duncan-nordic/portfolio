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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 dark:from-forest-800 dark:to-forest-950">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-brown-600 transition-colors hover:text-brown-500 dark:text-brown-400 dark:hover:text-brown-300">
            <span aria-hidden="true" className="mr-2 text-xl">&larr;</span>
            {text.back}
          </Link>

          <header className="mb-12 max-w-4xl">
            <div className="mb-5 flex items-center gap-4">
              <span className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-[#6db33f] text-2xl font-black text-white">F</span>
              <span className="rounded-full bg-brown-600 px-3 py-1 text-sm font-medium text-white">{text.status}</span>
            </div>
            <h1 className="mb-5 text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">{text.title}</h1>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">{text.subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((technology) => (
                <span key={technology} className="rounded-full border border-brown-300 bg-brown-100 px-3 py-1 text-sm font-medium text-brown-800 dark:border-brown-600 dark:bg-brown-900 dark:text-brown-200">
                  {technology}
                </span>
              ))}
            </div>
          </header>

          <section className="mb-16" aria-labelledby="gallery-title">
            <h2 id="gallery-title" className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">{text.gallery}</h2>
            <div className="relative h-[300px] overflow-hidden rounded-lg border border-gray-300 bg-[#0d172b] shadow-xl dark:border-brown-700 sm:h-[620px]">
              <Image
                src={text.screenshots[currentImageIndex].src}
                alt={text.screenshots[currentImageIndex].alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-contain p-2 sm:p-4"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">
              {text.screenshots[currentImageIndex].title}
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {text.screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={screenshot.title}
                  aria-pressed={currentImageIndex === index}
                  className={`relative aspect-[16/9] overflow-hidden rounded-lg border-2 bg-[#0d172b] transition-colors ${
                    currentImageIndex === index
                      ? 'border-[#6db33f]'
                      : 'border-gray-300 hover:border-brown-500 dark:border-brown-700'
                  }`}
                >
                  <Image src={screenshot.src} alt="" fill sizes="(max-width: 768px) 33vw, 360px" className="object-contain" />
                </button>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="architecture-title">
            <h2 id="architecture-title" className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">{text.architecture}</h2>
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-[#10251c] p-5 shadow-xl dark:border-brown-700 sm:p-8">
              <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
                <div className="w-full max-w-sm rounded border border-white/30 bg-white/10 px-4 py-3 font-semibold">{text.browser}</div>
                <div className="h-7 w-px bg-[#6db33f]" />
                <div className="w-full max-w-lg rounded border-2 border-[#6db33f] bg-[#173426] px-4 py-4 font-bold">{text.gateway}<span className="ml-2 text-sm font-normal text-gray-300">:8085</span></div>
                <div className="h-7 w-px bg-[#6db33f]" />
                <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
                  {services.map((service) => (
                    <div key={service.name} className="rounded border border-[#6db33f]/70 bg-black/20 px-4 py-4">
                      <h3 className="font-bold">{service.name}</h3>
                      <p className="mt-1 text-sm text-gray-300">{isEnglish ? service.detailEn : service.detailDe}</p>
                      <p className="mt-2 text-xs font-medium text-[#9bd477]">:{service.port}</p>
                    </div>
                  ))}
                </div>
                <div className="my-7 h-px w-full max-w-3xl bg-[#6db33f]/60" />
                <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded border border-white/25 bg-white/10 px-4 py-3 font-semibold">{text.discovery}<span className="ml-2 text-sm font-normal text-gray-300">:8761</span></div>
                  <div className="rounded border border-white/25 bg-white/10 px-4 py-3 font-semibold">{text.identity}<span className="ml-2 text-sm font-normal text-gray-300">:8090</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-x-16 gap-y-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{text.overview}</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{text.overviewText}</p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{text.engineering}</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{text.engineeringText}</p>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{text.features}</h2>
              <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-200">
                {text.featureItems.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#6db33f]" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{text.security}</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{text.securityText}</p>
            </div>
            <div className="md:col-span-2 md:max-w-3xl">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{text.data}</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">{text.dataText}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
