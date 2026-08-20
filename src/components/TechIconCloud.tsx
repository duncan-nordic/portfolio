'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import TechLogo from './TechLogo'
import { techItems, type TechItem } from '@/lib/techStack'

type SpherePoint = {
  x: number
  y: number
  z: number
}

type PopoverAnchor = {
  left: number
  top: number
  horizontal: 'left' | 'right'
  vertical: 'above' | 'below'
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
  const sphereRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const selectedIndexRef = useRef<number | null>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const rotation = useRef({ x: -0.12, y: 0.35 })
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)
  const [popoverAnchor, setPopoverAnchor] = useState<PopoverAnchor | null>(null)
  const points = useMemo(() => createSpherePoints(techItems.length), [])

  useEffect(() => {
    let animationFrame = 0
    let previousTime = performance.now()

    const renderSphere = (time: number) => {
      const elapsed = Math.min(32, time - previousTime)
      previousTime = time

      if (!shouldReduceMotion && selectedIndexRef.current === null) {
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

  useEffect(() => {
    if (!selectedTech) return

    const closePopover = () => {
      selectedIndexRef.current = null
      setSelectedTech(null)
      setPopoverAnchor(null)
      requestAnimationFrame(() => triggerRef.current?.focus())
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopover()
      }
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node
      if (triggerRef.current?.contains(target)) return
      if ((target as Element).closest?.('[data-tech-popover]')) return
      closePopover()
    }

    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [selectedTech])

  const updatePointer = (clientX: number, clientY: number, element: HTMLDivElement) => {
    const bounds = element.getBoundingClientRect()
    pointer.current = {
      x: ((clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((clientY - bounds.top) / bounds.height - 0.5) * 2,
    }
  }

  const openTech = (tech: TechItem, index: number, trigger: HTMLButtonElement) => {
    const sphereBounds = sphereRef.current?.getBoundingClientRect()
    const triggerBounds = trigger.getBoundingClientRect()
    if (!sphereBounds) return

    const centerX = triggerBounds.left - sphereBounds.left + triggerBounds.width / 2
    const centerY = triggerBounds.top - sphereBounds.top + triggerBounds.height / 2

    triggerRef.current = trigger
    selectedIndexRef.current = index
    setPopoverAnchor({
      left: centerX,
      top: centerY,
      horizontal: centerX > sphereBounds.width * 0.65 ? 'left' : 'right',
      vertical: centerY < sphereBounds.height * 0.3 ? 'below' : 'above',
    })
    setSelectedTech(tech)
  }

  const closeTech = () => {
    selectedIndexRef.current = null
    setSelectedTech(null)
    setPopoverAnchor(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  const getPopoverTransform = (anchor: PopoverAnchor) => {
    const x = anchor.horizontal === 'right' ? '16px' : 'calc(-100% - 16px)'
    const y = anchor.vertical === 'above' ? 'calc(-100% - 16px)' : '16px'
    return `translate(${x}, ${y})`
  }

  return (
    <div
      ref={sphereRef}
      className="relative mx-auto aspect-square w-full max-w-[620px] touch-none select-none"
      role="group"
      aria-label={language === 'en' ? 'Interactive technology sphere' : 'Interaktive Technologie-Kugel'}
      onPointerMove={(event) => updatePointer(event.clientX, event.clientY, event.currentTarget)}
      onPointerLeave={() => { pointer.current = { x: 0, y: 0 } }}
    >
      {techItems.map((tech, index) => (
        <div
          key={tech.id}
          ref={(element) => { itemRefs.current[index] = element }}
          className="absolute h-12 w-12 will-change-transform sm:h-14 sm:w-14"
        >
          <button
            type="button"
            title={tech.name}
            aria-label={`${tech.name}: ${tech.useCase[language]}`}
            onClick={(event) => openTech(tech, index, event.currentTarget)}
            className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-brown-700 bg-forest-900 text-brown-400 shadow-lg transition-colors hover:border-brown-600 hover:bg-forest-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
          >
            <TechLogo tech={tech} className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      ))}

      <AnimatePresence>
        {selectedTech && popoverAnchor && (
          <m.div
            key={selectedTech.id}
            className="pointer-events-none absolute z-[200]"
            style={{
              left: popoverAnchor.left,
              top: popoverAnchor.top,
              transform: getPopoverTransform(popoverAnchor),
            }}
          >
            <m.div
              role="dialog"
              aria-labelledby="tech-dialog-title"
              data-tech-popover
              className="pointer-events-auto relative flex w-64 max-w-[calc(100vw-3rem)] items-center gap-4 rounded-lg border border-brown-600 bg-forest-900 px-5 py-4 shadow-2xl"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 4 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: 'easeOut' }}
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-brown-700 bg-forest-800 text-brown-400">
                <TechLogo tech={selectedTech} className="h-7 w-7" />
              </span>
              <div className="min-w-0 pr-7">
                <h3 id="tech-dialog-title" className="text-base font-bold text-white">
                  {selectedTech.name}
                </h3>
                <p className="mt-1 text-sm text-gray-300">
                  {selectedTech.useCase[language]}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={closeTech}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-gray-300 transition-colors hover:bg-forest-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brown-400"
                aria-label={language === 'en' ? 'Close details' : 'Details schließen'}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
