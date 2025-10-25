'use client'

import { useState, useEffect, createContext, useContext } from 'react'

export type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

// Create a global context for language
const LanguageContext = createContext<LanguageContextType | null>(null)

// Global state for language
let globalLanguage: Language = 'en'
let globalSetLanguage: ((lang: Language) => void) | null = null
const languageListeners: Set<(lang: Language) => void> = new Set()

export const useLanguage = (): LanguageContextType => {
  const [language, setLanguageState] = useState<Language>(globalLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
      globalLanguage = savedLang
      setLanguageState(savedLang)
    }
    
    // Subscribe to language changes
    const updateLanguage = (newLang: Language) => {
      setLanguageState(newLang)
    }
    languageListeners.add(updateLanguage)
    
    return () => {
      languageListeners.delete(updateLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    globalLanguage = lang
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    
    // Notify all listeners
    languageListeners.forEach(listener => listener(lang))
    console.log(`Language changed to: ${lang}`)
  }

  // Set global setter on first mount
  if (!globalSetLanguage) {
    globalSetLanguage = setLanguage
  }

  return { language: mounted ? language : 'en', setLanguage }
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'de' : 'en'
    setLanguage(newLang)
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-forest-800 border border-brown-600 w-16 h-10"></div>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-forest-800 hover:bg-forest-700 light:bg-light-surface light:hover:bg-gray-50 border border-brown-600 light:border-light-border transition-colors flex items-center gap-2"
      aria-label="Toggle language"
    >
      <svg className="w-5 h-5 text-brown-400 light:text-light-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span className="text-brown-400 light:text-light-secondary text-sm font-medium">
        {language.toUpperCase()}
      </span>
    </button>
  )
}