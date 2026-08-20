import { clampChroma, converter, formatHex, wcagContrast, type Oklch } from 'culori'

export type ThemeMode = 'dark' | 'light'

export const ACCENT_COLOR_STORAGE_KEY = 'portfolio-accent-color'
export const DEFAULT_ACCENT_COLOR = '#8b5e3c'

const toOklch = converter('oklch')
const toRgb = converter('rgb')

const THEME_VARIABLES = [
  '--theme-page-start',
  '--theme-page-end',
  '--theme-surface',
  '--theme-surface-strong',
  '--theme-surface-hover',
  '--theme-accent',
  '--theme-accent-hover',
  '--theme-accent-soft',
  '--theme-accent-softer',
  '--theme-accent-text',
  '--theme-accent-muted',
  '--theme-on-accent',
  '--theme-border',
  '--theme-border-strong',
  '--theme-text',
  '--theme-text-muted',
  '--theme-nav',
  '--theme-complementary',
] as const

const normalizeHue = (hue: number) => ((hue % 360) + 360) % 360

const toDisplayHex = (color: Oklch) => {
  const displayable = clampChroma(color, 'oklch')
  return formatHex(toRgb(displayable))
}

const colorAt = (lightness: number, chroma: number, hue: number) => (
  toDisplayHex({
    mode: 'oklch',
    l: Math.min(1, Math.max(0, lightness)),
    c: Math.max(0, chroma),
    h: normalizeHue(hue),
  })
)

const contrastingColor = (
  background: string,
  hue: number,
  chroma: number,
  initialLightness: number,
  direction: 1 | -1,
  minimumContrast = 4.5,
) => {
  let lightness = initialLightness
  let candidate = colorAt(lightness, chroma, hue)

  while (wcagContrast(candidate, background) < minimumContrast) {
    lightness += direction * 0.015
    if (lightness <= 0.08 || lightness >= 0.95) break
    candidate = colorAt(lightness, chroma, hue)
  }

  return candidate
}

const readableOnAccent = (background: string) => (
  wcagContrast('#18181b', background) >= wcagContrast('#ffffff', background) ? '#18181b' : '#ffffff'
)

export const normalizeHexColor = (color: string) => {
  const parsed = toRgb(color)
  return parsed ? formatHex(parsed) : null
}

export const getComplementaryColor = (color: string) => {
  const parsed = toOklch(color)
  if (!parsed) return '#39748c'

  const hue = parsed.h ?? 45
  const chroma = Math.min(0.15, Math.max(0.08, parsed.c ?? 0.1))
  return colorAt(0.62, chroma, hue + 180)
}

export const createThemePalette = (color: string, mode: ThemeMode) => {
  const parsed = toOklch(color) ?? toOklch(DEFAULT_ACCENT_COLOR)
  if (!parsed) throw new Error('Unable to create color palette')

  const accentHue = parsed.h ?? 45
  const complementaryHue = accentHue + 180
  const accentChroma = Math.min(0.16, Math.max(0.08, parsed.c ?? 0.1))

  if (mode === 'dark') {
    const pageEnd = colorAt(0.1, 0.018, complementaryHue)
    const surface = colorAt(0.16, 0.025, complementaryHue)

    const accent = colorAt(0.52, accentChroma, accentHue)

    return {
      '--theme-page-start': colorAt(0.22, 0.035, complementaryHue),
      '--theme-page-end': pageEnd,
      '--theme-surface': surface,
      '--theme-surface-strong': colorAt(0.12, 0.02, complementaryHue),
      '--theme-surface-hover': colorAt(0.25, 0.04, complementaryHue),
      '--theme-accent': accent,
      '--theme-accent-hover': colorAt(0.48, accentChroma, accentHue),
      '--theme-accent-soft': colorAt(0.28, accentChroma * 0.55, accentHue),
      '--theme-accent-softer': colorAt(0.21, accentChroma * 0.35, accentHue),
      '--theme-accent-text': contrastingColor(surface, accentHue, accentChroma * 0.8, 0.72, 1),
      '--theme-accent-muted': colorAt(0.82, accentChroma * 0.45, accentHue),
      '--theme-on-accent': readableOnAccent(accent),
      '--theme-border': colorAt(0.38, accentChroma * 0.48, accentHue),
      '--theme-border-strong': colorAt(0.5, accentChroma * 0.62, accentHue),
      '--theme-text': '#f4f4f5',
      '--theme-text-muted': '#d4d4d8',
      '--theme-nav': `${surface}f0`,
      '--theme-complementary': colorAt(0.62, accentChroma, complementaryHue),
    }
  }

  const pageEnd = colorAt(0.99, 0.006, complementaryHue)
  const surface = colorAt(0.975, 0.008, complementaryHue)

  const accent = colorAt(0.68, accentChroma, accentHue)

  return {
    '--theme-page-start': colorAt(0.94, 0.018, complementaryHue),
    '--theme-page-end': pageEnd,
    '--theme-surface': surface,
    '--theme-surface-strong': colorAt(0.955, 0.012, complementaryHue),
    '--theme-surface-hover': colorAt(0.91, 0.025, complementaryHue),
    '--theme-accent': accent,
    '--theme-accent-hover': colorAt(0.62, accentChroma, accentHue),
    '--theme-accent-soft': colorAt(0.88, accentChroma * 0.42, accentHue),
    '--theme-accent-softer': colorAt(0.94, accentChroma * 0.24, accentHue),
    '--theme-accent-text': contrastingColor(surface, accentHue, accentChroma * 0.85, 0.45, -1),
    '--theme-accent-muted': colorAt(0.38, accentChroma * 0.68, accentHue),
    '--theme-on-accent': readableOnAccent(accent),
    '--theme-border': colorAt(0.78, accentChroma * 0.35, accentHue),
    '--theme-border-strong': colorAt(0.62, accentChroma * 0.58, accentHue),
    '--theme-text': '#3f3f46',
    '--theme-text-muted': '#65656d',
    '--theme-nav': `${surface}f2`,
    '--theme-complementary': colorAt(0.58, accentChroma, complementaryHue),
  }
}

export const clearCustomTheme = () => {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  THEME_VARIABLES.forEach((variable) => root.style.removeProperty(variable))
  delete root.dataset.customPalette
}

export const applyCustomTheme = (color: string, mode: ThemeMode) => {
  if (typeof document === 'undefined') return

  const normalized = normalizeHexColor(color)
  if (!normalized) return

  const root = document.documentElement
  const palette = createThemePalette(normalized, mode)
  Object.entries(palette).forEach(([property, value]) => root.style.setProperty(property, value))
  root.dataset.customPalette = 'true'
}

export const getSavedAccentColor = () => {
  if (typeof window === 'undefined') return null
  return normalizeHexColor(localStorage.getItem(ACCENT_COLOR_STORAGE_KEY) ?? '')
}
