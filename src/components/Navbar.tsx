'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle, { useLanguage } from './LanguageToggle'
import { translations } from '@/lib/translations'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  // Debug pathname
  useEffect(() => {
    console.log('Current pathname:', pathname)
  }, [pathname])

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.work, href: '/work' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-forest-900/90 backdrop-blur-sm border-b border-brown-700 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-brown-400">
            Duncan
          </Link>

          {/* Desktop Navigation and Controls */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href === '/work' && pathname.startsWith('/work'))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brown-400 bg-brown-900/20'
                        : 'text-gray-200 hover:text-brown-400 hover:bg-brown-900/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and controls */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-brown-400 focus:outline-none focus:text-brown-400 ml-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-forest-950 rounded-lg mt-2 border border-brown-800">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href === '/work' && pathname.startsWith('/work'))
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-brown-400 bg-brown-900/20'
                        : 'text-gray-200 hover:text-brown-400 hover:bg-brown-900/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}