'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import { useLanguage } from './LanguageToggle'
import {
  ACCENT_COLOR_STORAGE_KEY,
  DEFAULT_ACCENT_COLOR,
  applyCustomTheme,
  clearCustomTheme,
  getComplementaryColor,
  getSavedAccentColor,
  normalizeHexColor,
  type ThemeMode,
} from '@/lib/themeColors'

export default function ColorThemePicker() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isCustom, setIsCustom] = useState(false)
  const [color, setColor] = useState(DEFAULT_ACCENT_COLOR)
  const complementaryColor = useMemo(() => getComplementaryColor(color), [color])

  useEffect(() => {
    const savedColor = getSavedAccentColor()
    if (!savedColor) return

    setColor(savedColor)
    setIsCustom(true)
    const mode: ThemeMode = document.documentElement.classList.contains('light') ? 'light' : 'dark'
    applyCustomTheme(savedColor, mode)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const resetColor = () => {
    localStorage.removeItem(ACCENT_COLOR_STORAGE_KEY)
    setColor(DEFAULT_ACCENT_COLOR)
    setIsCustom(false)
    clearCustomTheme()
  }

  const applyColor = (nextColor: string) => {
    const normalized = normalizeHexColor(nextColor)
    if (!normalized) return

    if (normalized === DEFAULT_ACCENT_COLOR) {
      resetColor()
      return
    }

    setColor(normalized)
    setIsCustom(true)
    localStorage.setItem(ACCENT_COLOR_STORAGE_KEY, normalized)
    const mode: ThemeMode = document.documentElement.classList.contains('light') ? 'light' : 'dark'
    applyCustomTheme(normalized, mode)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={language === 'en' ? 'Choose website colors' : 'Website-Farben auswählen'}
        aria-expanded={isOpen}
        aria-controls="color-theme-panel"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-brown-600 bg-forest-800"
      >
        <span
          className="h-5 w-5 rounded-full border border-white/40"
          style={{
            background: isCustom
              ? `linear-gradient(135deg, ${color} 0 50%, ${complementaryColor} 50% 100%)`
              : 'linear-gradient(135deg, #8b5e3c 0 50%, #1f4f1f 50% 100%)',
          }}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          id="color-theme-panel"
          className="absolute right-0 top-full z-[70] mt-3 w-64 rounded-lg border border-brown-700 bg-forest-950 p-4 shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-white">
              {language === 'en' ? 'Color theme' : 'Farbschema'}
            </h2>
            <button
              type="button"
              onClick={resetColor}
              className="text-xs font-medium text-brown-400"
            >
              {language === 'en' ? 'Reset' : 'Zurücksetzen'}
            </button>
          </div>

          <HexColorPicker
            color={color}
            onChange={applyColor}
            className="portfolio-color-picker"
            aria-label={language === 'en' ? 'Base color' : 'Basisfarbe'}
          />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <span className="mb-1 block text-xs text-gray-300">
                {language === 'en' ? 'Base' : 'Basis'}
              </span>
              <span className="block h-9 rounded-lg border border-brown-700" style={{ backgroundColor: color }} />
            </div>
            <div>
              <span className="mb-1 block text-xs text-gray-300">
                {language === 'en' ? 'Automatic' : 'Automatisch'}
              </span>
              <span
                className="block h-9 rounded-lg border border-brown-700"
                style={{ backgroundColor: complementaryColor }}
              />
            </div>
          </div>

          <label className="mt-4 block">
            <span className="sr-only">{language === 'en' ? 'Hex color' : 'Hex-Farbe'}</span>
            <HexColorInput
              color={color}
              onChange={applyColor}
              prefixed
              className="h-10 w-full rounded-lg border border-brown-700 bg-forest-900 px-3 font-mono text-sm text-white outline-none focus:border-brown-400"
              aria-label={language === 'en' ? 'Hex color' : 'Hex-Farbe'}
            />
          </label>
        </div>
      )}
    </div>
  )
}
