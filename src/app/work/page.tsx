'use client'

import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'

export default function Work() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      id: "coderdojo-webapp", 
      title: t.work.project2.title,
      description: t.work.project2.description,
      technologies: ["SvelteKit", "JavaScript", "Node.js", "AI Integration"],
      status: "Finished"
    },
    {
      id: "qr-code-scanner",
      title: t.work.project3.title,
      description: t.work.project3.description,
      technologies: ["React Native", "AWS", "Node.js", "MySQL"],
      status: "In Development"
    },
    {
      id: "gps-spoofing-tool",
      title: t.work.project1.title,
      description: t.work.project1.description,
      technologies: ["JavaFX", "LimeSDR", "Java"],
      status: "Finished"
    },
    {
      id: "project4",
      title: t.work.project4.title,
      description: t.work.project4.description,
      technologies: ["Tech1", "Tech2", "Tech3"],
      status: "Finished"
    },
    {
      id: "project5",
      title: t.work.project5.title,
      description: t.work.project5.description,
      technologies: ["Tech1", "Tech2", "Tech3"],
      status: "In Development"
    }
  ]

  const experienceAndEducation = [
    {
      title: t.work.work1.title,
      company: t.work.work1.company,
      period: t.work.work1.period,
      description: t.work.work1.description
    },
    {
      title: t.work.education1.title,
      company: t.work.education1.company,
      period: t.work.education1.period,
      description: t.work.education1.description
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-800 to-forest-950 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.work.title.split(' ').map((word, index) => (
              <span key={index}>
                {index === 1 ? (
                  <span className="text-brown-400">{word}</span>
                ) : (
                  <span>{word}</span>
                )}
                {index < t.work.title.split(' ').length - 1 && ' '}
              </span>
            ))}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {t.work.subtitle}
          </p>
        </div>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.work.projects}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-forest-900 rounded-lg p-6 hover:bg-brown-800 transition-all duration-300 border border-brown-700 hover:shadow-lg cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.id}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-brown-600 text-white' 
                      : 'bg-brown-800 text-brown-200'
                  }`}>
                    {project.status === 'Live' 
                      ? t.work.status.live 
                      : project.status === 'Finished'
                      ? t.work.status.finished
                      : t.work.status.inDevelopment}
                  </span>
                </div>
                <p className="text-gray-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-brown-900 text-brown-200 px-3 py-1 rounded-full text-sm border border-brown-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-brown-400 hover:text-brown-300 font-medium transition-colors flex items-center">
                    {t.work.learnMore}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.work.experience}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experienceAndEducation.map((item, index) => (
              <div
                key={index}
                className="bg-forest-900 rounded-lg p-6 hover:bg-brown-800 transition-all duration-300 border border-brown-700"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-brown-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-brown-300 mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}