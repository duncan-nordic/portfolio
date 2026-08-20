'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'
import TechStackShowcase from '@/components/TechStackShowcase'
import { useState } from 'react'
import { AnimatePresence, LazyMotion, m, useReducedMotion } from 'motion/react'

const loadMotionFeatures = () => import('@/lib/motionFeatures').then((module) => module.default)

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  const personalImages = [
    {
      src: `${basePath}/images/personal-builds/custom-keyboard.webp`,
      alt: t.home.keyboardImage,
      title: t.home.keyboardImage,
    },
    {
      src: `${basePath}/images/personal-builds/keyboard-pcb.webp`,
      alt: t.home.pcbImage,
      title: t.home.pcbImage,
    },
    {
      src: `${basePath}/images/personal-builds/mechanical-switches.webp`,
      alt: t.home.switchesImage,
      title: t.home.switchesImage,
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((previous) => (previous + 1) % personalImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950">
      <section className="container mx-auto px-6 py-20 relative">
        <div className="absolute left-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-brown-600 to-transparent opacity-30"></div>
        <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-brown-600 to-transparent opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white elegant-spacing">
            {t.home.greeting}{' '}
            <span className="text-brown-400 bg-gradient-to-r from-brown-400 to-brown-600 bg-clip-text text-transparent">
              {t.home.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 elegant-spacing">
            {t.home.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="refined-border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center elegant-spacing"
            >
              {t.home.myWork}
            </Link>
            <Link
              href="/contact"
              className="refined-border border-brown-600 hover:bg-brown-600 text-brown-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center elegant-spacing"
            >
              {t.home.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white elegant-spacing">
            {t.home.aboutMe}
          </h2>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(280px,2fr)]">
            <div className="bg-forest-900 p-8 rounded-lg shadow-lg border-l-4 border-brown-600 refined-border relative">
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                {t.home.aboutText1}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {t.home.aboutText2}
              </p>
            </div>

            <LazyMotion features={loadMotionFeatures} strict>
              <div className="overflow-hidden rounded-lg bg-forest-900 refined-border">
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen((isOpen) => !isOpen)}
                  aria-expanded={isGalleryOpen}
                  aria-controls="personal-build-gallery"
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <span className="relative h-16 w-24 flex-none overflow-hidden rounded-lg border border-brown-700">
                    <AnimatePresence initial={false} mode="wait">
                      <m.span
                        key={personalImages[currentImageIndex].src}
                        className="absolute inset-0 block"
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: shouldReduceMotion ? 0.01 : 0.18, ease: 'easeOut' }}
                      >
                        <Image
                          src={personalImages[currentImageIndex].src}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </m.span>
                    </AnimatePresence>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-white">{t.home.customBuilds}</span>
                    <span className="mt-1 block truncate text-sm text-gray-300">
                      {personalImages[currentImageIndex].title}
                    </span>
                  </span>
                  <m.svg
                    className="h-5 w-5 flex-none text-brown-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    animate={{ rotate: isGalleryOpen ? 180 : 0 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </m.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isGalleryOpen && (
                    <m.div
                      id="personal-build-gallery"
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: 'easeOut' }}
                    >
                      <div className="border-t border-brown-700 p-4">
                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label={language === 'en' ? 'Show next photo' : 'Nächstes Foto anzeigen'}
                          className="relative block w-full aspect-[3/2] overflow-hidden rounded-lg bg-forest-950"
                        >
                          <AnimatePresence initial={false} mode="wait">
                            <m.span
                              key={personalImages[currentImageIndex].src}
                              className="absolute inset-0 block"
                              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeOut' }}
                            >
                              <Image
                                src={personalImages[currentImageIndex].src}
                                alt={personalImages[currentImageIndex].alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 420px"
                                className="object-cover"
                              />
                            </m.span>
                          </AnimatePresence>
                        </button>
                        <div className="mt-3 flex justify-center space-x-2">
                          {personalImages.map((image, index) => (
                            <button
                              key={image.src}
                              type="button"
                              onClick={() => setCurrentImageIndex(index)}
                              aria-label={language === 'en' ? `View photo ${index + 1}` : `Foto ${index + 1} anzeigen`}
                              className={`h-3 w-3 rounded-full transition-colors ${
                                index === currentImageIndex
                                  ? 'bg-brown-400'
                                  : 'bg-brown-700 hover:bg-brown-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </LazyMotion>
          </div>
        </div>
      </section>

      <TechStackShowcase />
    </div>
  )
}
