import {
  siDocker,
  siEspressif,
  siExpo,
  siFastapi,
  siGit,
  siGithubactions,
  siHelm,
  siJavascript,
  siKubernetes,
  siLaravel,
  siLinux,
  siMicropython,
  siMysql,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSvelte,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'

export type TechCategory = 'frontend' | 'backend' | 'delivery' | 'embedded'

export type TechItem = {
  id: string
  name: string
  category: TechCategory
  icon?: SimpleIcon
  monogram?: string
}

export const techItems: TechItem[] = [
  { id: 'javascript', name: 'JavaScript', category: 'frontend', icon: siJavascript },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: siTypescript },
  { id: 'react', name: 'React', category: 'frontend', icon: siReact },
  { id: 'react-native', name: 'React Native', category: 'frontend', icon: siReact },
  { id: 'sveltekit', name: 'SvelteKit', category: 'frontend', icon: siSvelte },
  { id: 'expo', name: 'Expo', category: 'frontend', icon: siExpo },
  { id: 'nodejs', name: 'Node.js', category: 'backend', icon: siNodedotjs },
  { id: 'python', name: 'Python', category: 'backend', icon: siPython },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', icon: siFastapi },
  { id: 'laravel', name: 'Laravel', category: 'backend', icon: siLaravel },
  { id: 'php', name: 'PHP', category: 'backend', icon: siPhp },
  { id: 'postgresql', name: 'PostgreSQL', category: 'backend', icon: siPostgresql },
  { id: 'mysql', name: 'MySQL', category: 'backend', icon: siMysql },
  { id: 'git', name: 'Git', category: 'delivery', icon: siGit },
  { id: 'github-actions', name: 'GitHub Actions / CI/CD', category: 'delivery', icon: siGithubactions },
  { id: 'docker', name: 'Docker', category: 'delivery', icon: siDocker },
  { id: 'aws', name: 'AWS', category: 'delivery', monogram: 'AWS' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'delivery', icon: siKubernetes },
  { id: 'helm', name: 'Helm', category: 'delivery', icon: siHelm },
  { id: 'linux', name: 'Linux', category: 'embedded', icon: siLinux },
  { id: 'micropython', name: 'MicroPython', category: 'embedded', icon: siMicropython },
  { id: 'esp32', name: 'ESP32 / ESP-IDF', category: 'embedded', icon: siEspressif },
]
