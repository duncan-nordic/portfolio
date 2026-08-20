import type { TechItem } from '@/lib/techStack'

export default function TechLogo({ tech, className = 'h-7 w-7' }: { tech: TechItem; className?: string }) {
  if (!tech.icon) {
    return (
      <span className={`flex items-center justify-center text-[10px] font-bold ${className}`} aria-hidden="true">
        {tech.monogram}
      </span>
    )
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={tech.icon.path} />
    </svg>
  )
}

