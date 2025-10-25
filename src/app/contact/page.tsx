'use client'

import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const contactInfo = [
    {
      label: t.contact.email,
      value: "duncantomke@gmail.com",
      link: "mailto:duncantomke@gmail.com",
      icon: "📧"
    },
    {
      label: t.contact.linkedin,
      value: "linkedin.com/in/duncanwittner",
      link: "https://linkedin.com/in/duncanwittner",
      icon: "💼"
    },
    {
      label: t.contact.github,
      value: "github.com/duncan-nordic",
      link: "https://github.com/duncan-nordic",
      icon: "🐙"
    },
    {
      label: t.contact.phone,
      value: "+358 40 248 2972",
      link: "tel:+358402482972",
      icon: "📱"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.contact.title.split(' ').map((word, index) => (
              <span key={index}>
                {word === 'touch' || word === 'Kontakt' ? (
                  <span className="text-brown-400">{word}</span>
                ) : (
                  word
                )}
                {index < t.contact.title.split(' ').length - 1 && ' '}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {t.contact.contactInfo}
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-6 bg-forest-900 rounded-lg hover:bg-forest-800 transition-colors group border border-brown-700"
                >
                  <span className="text-3xl mr-6">{info.icon}</span>
                  <div>
                    <p className="text-brown-400 font-medium text-lg">{info.label}</p>
                    <p className="text-gray-200 group-hover:text-white transition-colors text-lg">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}