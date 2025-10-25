/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f4f0',
          100: '#e5e9e1',
          200: '#cbd3c3',
          300: '#b1bda5',
          400: '#97a787',
          500: '#7d9169',
          600: '#637b4b',
          700: '#4f623c',
          800: '#3b492d',
          900: '#27301e',
          950: '#13180f',
        },
        forest: {
          50: '#e8f0e8',
          100: '#d1e1d1',
          200: '#a3c3a3',
          300: '#75a575',
          400: '#478747',
          500: '#1f4f1f',
          600: '#1a421a',
          700: '#153515',
          800: '#102810',
          900: '#0b1b0b',
          950: '#050e05',
        },
        brown: {
          50: '#f5f1ed',
          100: '#ebe3db',
          200: '#d7c7b7',
          300: '#c3ab93',
          400: '#af8f6f',
          500: '#9b734b',
          600: '#7c5c3c',
          700: '#5d452d',
          800: '#3e2e1e',
          900: '#1f170f',
          950: '#0f0b07',
        },
        accent: {
          50: '#f5f1ed',
          100: '#ebe3db',
          200: '#d7c7b7',
          300: '#c3ab93',
          400: '#af8f6f',
          500: '#9b734b',
          600: '#8b5a35',
          700: '#6d4629',
          800: '#4f321d',
          900: '#311e11',
          950: '#190f08',
        },
        // Light mode colors - Softer warm theme
        light: {
          bg: '#F3EFE0',        // Beige-weiß, warm
          surface: '#FDFCF8',   // Noch heller für Karten/Container
          primary: '#6B5B3A',   // Warmes Olivenbraun (statt hartes Waldgrün)
          secondary: '#8B5E3C', // Mittleres Braun für Akzente
          accent: '#C6A77B',    // Helleres Sandbraun für Hover
          text: '#5A5144',      // Warmer dunkelbrauner Text
          textSecondary: '#8B7966', // Heller warmer Graubraun
          border: '#D9D5C6',    // Subtiles Grau-Beige für Rahmen
        }
      },
    },
  },
  plugins: [],
}