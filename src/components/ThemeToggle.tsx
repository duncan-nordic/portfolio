'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    // Default to dark mode if no saved preference
    const isDarkMode = savedTheme ? savedTheme === 'dark' : true
    
    console.log('=== THEME INITIALIZATION ===')
    console.log('Saved theme:', savedTheme)
    console.log('Initial isDarkMode:', isDarkMode)
    
    setIsDark(isDarkMode)
    
    if (isDarkMode) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      if (!savedTheme) localStorage.setItem('theme', 'dark')
      console.log('Applied DARK mode classes')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      console.log('Applied LIGHT mode classes')
    }
    
    console.log('Current HTML classes:', document.documentElement.className)
    console.log('=== END THEME INIT ===')
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    console.log('=== THEME TOGGLE ===')
    console.log('Switching from:', isDark ? 'dark' : 'light')
    console.log('Switching to:', newIsDark ? 'dark' : 'light')
    
    if (newIsDark) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      console.log('✅ Switched to Dark Mode')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      console.log('☀️ Switched to Light Mode')
    }
    
    console.log('New HTML classes:', document.documentElement.className)
    console.log('=== END TOGGLE ===')
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-forest-800 border border-brown-600 w-10 h-10"></div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-forest-800 hover:bg-forest-700 light:bg-light-surface light:hover:bg-gray-50 border border-brown-600 light:border-light-border transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5 text-brown-400 light:text-light-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}