'use client'

import { useLanguage } from '@/components/LanguageToggle'
import { translations } from '@/lib/translations'

export default function Work() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      id: "project-1",
      title: t.work.project1.title,
      description: t.work.project1.description,
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      status: "Live"
    },
    {
      id: "project-2", 
      title: t.work.project2.title,
      description: t.work.project2.description,
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
      status: "In Development"
    }
  ]

  const workExperience = [
    {
      title: t.work.work1.title,
      company: t.work.work1.company,
      period: "2023 - Present",
      description: t.work.work1.description
    },
    {
      title: t.work.work2.title, 
      company: t.work.work2.company,
      period: "2022 - 2023",
      description: t.work.work2.description
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
                  word
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-forest-900 rounded-lg p-6 hover:bg-brown-800 transition-colors border border-brown-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-brown-600 text-white' 
                      : 'bg-brown-800 text-brown-200'
                  }`}>
                    {project.status === 'Live' ? t.work.status.live : t.work.status.inDevelopment}
                  </span>
                </div>
                <p className="text-gray-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-brown-900 text-brown-200 px-2 py-1 rounded text-sm border border-brown-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={`/projects/${project.id}`}
                  className="text-brown-400 hover:text-brown-300 font-medium"
                >
                  {t.work.learnMore}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.work.experience}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="bg-forest-900 rounded-lg p-6 border-l-4 border-brown-600"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <p className="text-brown-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-brown-300 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-200">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}