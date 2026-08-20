'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useReducedMotion } from 'motion/react'
import TechLogo from './TechLogo'
import { techItems } from '@/lib/techStack'

type SpherePoint = {
  x: number
  y: number
  z: number
}

const createSpherePoints = (count: number): SpherePoint[] => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  return Array.from({ length: count }, (_, index) => {
    const y = 1 - (index / Math.max(1, count - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const angle = goldenAngle * index

    return {
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
    }
  })
}

export default function TechIconCloud({ language }: { language: 'en' | 'de' }) {
  const shouldReduceMotion = useReducedMotion()
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const pointer = useRef({ x: 0, y: 0 })
  const rotation = useRef({ x: -0.12, y: 0.35 })
  const points = useMemo(() => createSpherePoints(techItems.length), [])

  useEffect(() => {
    let animationFrame = 0
    let previousTime = performance.now()

    const renderSphere = (time: number) => {
      const elapsed = Math.min(32, time - previousTime)
      previousTime = time

      if (!shouldReduceMotion) {
        rotation.current.y += (0.00012 + pointer.current.x * 0.00008) * elapsed
        rotation.current.x += (pointer.current.y * 0.0012 - rotation.current.x) * 0.012
      }

      const cosY = Math.cos(rotation.current.y)
      const sinY = Math.sin(rotation.current.y)
      const cosX = Math.cos(rotation.current.x)
      const sinX = Math.sin(rotation.current.x)

      points.forEach((point, index) => {
        const rotatedX = point.x * cosY - point.z * sinY
        const rotatedZ = point.x * sinY + point.z * cosY
        const rotatedY = point.y * cosX - rotatedZ * sinX
        const depth = point.y * sinX + rotatedZ * cosX
        const element = itemRefs.current[index]
        if (!element) return

        const scale = 0.68 + ((depth + 1) / 2) * 0.52
        const opacity = 0.48 + ((depth + 1) / 2) * 0.52
        element.style.left = `${50 + rotatedX * 37}%`
        element.style.top = `${50 + rotatedY * 37}%`
        element.style.opacity = opacity.toFixed(3)
        element.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`
        element.style.zIndex = String(Math.round((depth + 1) * 50))
      })

      if (!shouldReduceMotion) animationFrame = requestAnimationFrame(renderSphere)
    }

    renderSphere(previousTime)
    return () => cancelAnimationFrame(animationFrame)
  }, [points, shouldReduceMotion])

  const updatePointer = (clientX: number, clientY: number, element: HTMLDivElement) => {
    const bounds = element.getBoundingClientRect()
    pointer.current = {
      x: ((clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((clientY - bounds.top) / bounds.height - 0.5) * 2,
    }
  }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[620px] touch-none select-none"
      role="img"
      aria-label={language === 'en' ? 'Interactive technology sphere' : 'Interaktive Technologie-Kugel'}
      onPointerMove={(event) => updatePointer(event.clientX, event.clientY, event.currentTarget)}
      onPointerLeave={() => { pointer.current = { x: 0, y: 0 } }}
    >
      <span className="sr-only">
        {techItems.map((tech) => tech.name).join(', ')}
      </span>
      {techItems.map((tech, index) => (
        <div
          key={tech.id}
          ref={(element) => { itemRefs.current[index] = element }}
          className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-brown-700 bg-forest-900 text-brown-400 shadow-lg will-change-transform sm:h-14 sm:w-14"
          title={tech.name}
          aria-hidden="true"
        >
          <TechLogo tech={tech} className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
      ))}
    </div>
  )
}

