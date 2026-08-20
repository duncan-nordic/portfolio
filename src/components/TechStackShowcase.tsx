'use client'

import { useState } from 'react'
import { AnimatePresence, LazyMotion, m, useReducedMotion } from 'motion/react'
import { useLanguage } from './LanguageToggle'
import TechIconCloud from './TechIconCloud'
import TechLogo from './TechLogo'
import { translations } from '@/lib/translations'
import { techItems, type TechCategory } from '@/lib/techStack'

const loadMotionFeatures = () => import('@/lib/motionFeatures').then((module) => module.default)

type TechMode = 'structured' | 'playful'
type CategoryFilter = 'all' | TechCategory

const getCategoryLabels = (language: 'en' | 'de') => ({
  all: language === 'en' ? 'All' : 'Alle',
  frontend: 'Frontend',
  backend: language === 'en' ? 'Backend & Data' : 'Backend & Daten',
  delivery: language === 'en' ? 'Cloud & Delivery' : 'Cloud & Bereitstellung',
  embedded: language === 'en' ? 'Embedded & Systems' : 'Embedded & Systeme',
})

export default function TechStackShowcase() {
  const { language } = useLanguage()
  const t = translations[language]
  const shouldReduceMotion = useReducedMotion()
  const [mode, setMode] = useState<TechMode>('structured')
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const categoryLabels = getCategoryLabels(language)
  const categories = Object.keys(categoryLabels) as CategoryFilter[]
  const visibleTech = activeCategory === 'all'
    ? techItems
    : techItems.filter((tech) => tech.category === activeCategory)

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="text-center text-3xl font-bold text-white sm:text-left md:text-4xl">
            {t.home.technologies}
          </h2>

          <div
            className="grid w-full max-w-xs grid-cols-2 rounded-lg border border-brown-700 bg-forest-900 p-1 sm:w-auto sm:min-w-64"
            role="group"
            aria-label={language === 'en' ? 'Technology display' : 'Technologie-Darstellung'}
          >
            {(['structured', 'playful'] as TechMode[]).map((nextMode) => (
              <button
                key={nextMode}
                type="button"
                aria-pressed={mode === nextMode}
                onClick={() => setMode(nextMode)}
                className={`min-h-10 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  mode === nextMode
                    ? 'bg-brown-600 text-white'
                    : 'text-gray-300 hover:bg-forest-800 hover:text-white'
                }`}
              >
                {nextMode === 'structured'
                  ? language === 'en' ? 'Structured' : 'Strukturiert'
                  : language === 'en' ? 'Playful' : 'Verspielt'}
              </button>
            ))}
          </div>
        </div>

        <LazyMotion features={loadMotionFeatures} strict>
          <AnimatePresence initial={false} mode="wait">
            {mode === 'structured' ? (
              <m.div
                key="structured"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.22, ease: 'easeOut' }}
              >
                <div
                  className="mb-8 flex flex-wrap justify-center gap-x-5 gap-y-2 border-b border-brown-700"
                  role="group"
                  aria-label={language === 'en' ? 'Technology categories' : 'Technologie-Kategorien'}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={activeCategory === category}
                      onClick={() => setActiveCategory(category)}
                      className={`relative min-h-11 px-1 py-3 text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? 'text-brown-300'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {categoryLabels[category]}
                      {activeCategory === category && (
                        <m.span
                          layoutId="tech-category-indicator"
                          className="absolute inset-x-0 bottom-0 h-0.5 bg-brown-600"
                          transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeOut' }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <m.div layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  <AnimatePresence initial={false} mode="popLayout">
                    {visibleTech.map((tech, index) => (
                      <m.div
                        layout
                        key={tech.id}
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                        transition={{
                          duration: shouldReduceMotion ? 0.01 : 0.2,
                          delay: shouldReduceMotion ? 0 : Math.min(index * 0.018, 0.16),
                          ease: 'easeOut',
                        }}
                        className="flex min-h-16 items-center gap-3 rounded-lg border border-brown-700 bg-forest-900 px-4 py-3"
                      >
                        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brown-900/70">
                          <TechLogo tech={tech} className="h-7 w-7 text-brown-400" />
                        </span>
                        <span className="min-w-0 text-sm font-semibold leading-tight text-gray-200">
                          {tech.name}
                        </span>
                      </m.div>
                    ))}
                  </AnimatePresence>
                </m.div>
              </m.div>
            ) : (
              <m.div
                key="playful"
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: 'easeOut' }}
                className="mx-auto max-w-3xl"
              >
                <TechIconCloud language={language} />
              </m.div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </section>
  )
}
