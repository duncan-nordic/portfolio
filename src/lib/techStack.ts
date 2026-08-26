import {
  siDocker,
  siEspressif,
  siExpo,
  siFastapi,
  siGit,
  siGithubactions,
  siHelm,
  siJavascript,
  siJupyter,
  siKubernetes,
  siLaravel,
  siLinux,
  siMicropython,
  siMysql,
  siNumpy,
  siNodedotjs,
  siOpenjdk,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siSpringboot,
  siSvelte,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'

export type TechCategory = 'frontend' | 'backend' | 'machine-learning' | 'delivery' | 'embedded'

export type TechItem = {
  id: string
  name: string
  category: TechCategory
  useCase: {
    en: string
    de: string
  }
  icon?: SimpleIcon
  monogram?: string
}

export const techItems: TechItem[] = [
  { id: 'javascript', name: 'JavaScript', category: 'frontend', useCase: { en: 'Web applications', de: 'Webanwendungen' }, icon: siJavascript },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', useCase: { en: 'Portfolio & forms', de: 'Portfolio & Formulare' }, icon: siTypescript },
  { id: 'react', name: 'React', category: 'frontend', useCase: { en: 'Form platform', de: 'Formularplattform' }, icon: siReact },
  { id: 'react-native', name: 'React Native', category: 'frontend', useCase: { en: 'GPS testing', de: 'GPS-Testsystem' }, icon: siReact },
  { id: 'sveltekit', name: 'SvelteKit', category: 'frontend', useCase: { en: 'Time tracking', de: 'Zeiterfassung' }, icon: siSvelte },
  { id: 'expo', name: 'Expo', category: 'frontend', useCase: { en: 'Mobile testing', de: 'Mobile Tests' }, icon: siExpo },
  { id: 'nodejs', name: 'Node.js', category: 'backend', useCase: { en: 'Web backends', de: 'Web-Backends' }, icon: siNodedotjs },
  { id: 'java', name: 'Java', category: 'backend', useCase: { en: 'Distributed systems', de: 'Verteilte Systeme' }, icon: siOpenjdk },
  { id: 'spring-boot', name: 'Spring Boot', category: 'backend', useCase: { en: 'FoodNutri microservices', de: 'FoodNutri-Microservices' }, icon: siSpringboot },
  { id: 'python', name: 'Python', category: 'backend', useCase: { en: 'APIs & embedded', de: 'APIs & Embedded' }, icon: siPython },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', useCase: { en: 'Form platform', de: 'Formularplattform' }, icon: siFastapi },
  { id: 'laravel', name: 'Laravel', category: 'backend', useCase: { en: 'CoderDojo platform', de: 'CoderDojo-Plattform' }, icon: siLaravel },
  { id: 'php', name: 'PHP', category: 'backend', useCase: { en: 'CoderDojo platform', de: 'CoderDojo-Plattform' }, icon: siPhp },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', useCase: { en: 'Application data', de: 'Anwendungsdaten' }, icon: siPostgresql },
  { id: 'mysql', name: 'MySQL', category: 'backend', useCase: { en: 'CoderDojo data', de: 'CoderDojo-Daten' }, icon: siMysql },
  { id: 'numpy', name: 'NumPy', category: 'machine-learning', useCase: { en: 'Numerical computing', de: 'Numerische Berechnungen' }, icon: siNumpy },
  { id: 'pandas', name: 'pandas', category: 'machine-learning', useCase: { en: 'Data preparation', de: 'Datenaufbereitung' }, icon: siPandas },
  { id: 'scikit-learn', name: 'scikit-learn', category: 'machine-learning', useCase: { en: 'Machine learning coursework', de: 'Machine-Learning-Kurs' }, icon: siScikitlearn },
  { id: 'jupyter', name: 'Jupyter', category: 'machine-learning', useCase: { en: 'Experiments & notebooks', de: 'Experimente & Notebooks' }, icon: siJupyter },
  { id: 'git', name: 'Git', category: 'delivery', useCase: { en: 'Version control', de: 'Versionsverwaltung' }, icon: siGit },
  { id: 'github-actions', name: 'GitHub Actions / CI/CD', category: 'delivery', useCase: { en: 'Automated delivery', de: 'Automatisierte Bereitstellung' }, icon: siGithubactions },
  { id: 'docker', name: 'Docker', category: 'delivery', useCase: { en: 'Containerization', de: 'Containerisierung' }, icon: siDocker },
  { id: 'aws', name: 'AWS', category: 'delivery', useCase: { en: 'Production hosting', de: 'Produktivbetrieb' }, monogram: 'AWS' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'delivery', useCase: { en: 'App deployment', de: 'App-Bereitstellung' }, icon: siKubernetes },
  { id: 'helm', name: 'Helm', category: 'delivery', useCase: { en: 'Deployment charts', de: 'Deployment-Charts' }, icon: siHelm },
  { id: 'linux', name: 'Linux', category: 'embedded', useCase: { en: 'Development environment', de: 'Entwicklungsumgebung' }, icon: siLinux },
  { id: 'micropython', name: 'MicroPython', category: 'embedded', useCase: { en: 'Bachelor thesis', de: 'Bachelorarbeit' }, icon: siMicropython },
  { id: 'esp32', name: 'ESP32 / ESP-IDF', category: 'embedded', useCase: { en: 'Bachelor thesis', de: 'Bachelorarbeit' }, icon: siEspressif },
]
