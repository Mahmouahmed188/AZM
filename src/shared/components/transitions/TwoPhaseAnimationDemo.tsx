'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

/**
 * Standalone Two-Phase Animation Demo
 * Demonstrates both exit and entrance phases without navigation
 */
export default function TwoPhaseAnimationDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLDivElement[]>([])
  const exitTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const entranceTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const [currentPhase, setCurrentPhase] = useState<'idle' | 'exit' | 'entrance'>('idle')

  const createColumns = () => {
    if (!containerRef.current) return

    const numColumns = 20
    const columns: HTMLDivElement[] = []

    // Clear and recreate columns
    containerRef.current.innerHTML = ''

    // Create vertical blind columns
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div')
      column.className = 'shutter-column'
      containerRef.current.appendChild(column)
      columns.push(column)
    }

    columnsRef.current = columns

    // GSAP context
    const ctx = gsap.context(() => {
      // Setup columns
      gsap.set(columns, {
        height: '100vh',
        width: `${100 / numColumns}%`,
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 1,
        transformOrigin: 'right center',
        zIndex: 10
      })

      // Position columns side by side
      columns.forEach((column, index) => {
        gsap.set(column, {
          left: `${(index * 100) / numColumns}%`
        })
      })

      // Show container
      gsap.set(containerRef.current, {
        display: 'block',
        opacity: 1
      })

      // Start with thin lines (entrance end state)
      gsap.set(columns, {
        scaleX: 0.03
      })

    }, containerRef.current)
  }

  const playExitAnimation = () => {
    if (columnsRef.current.length === 0) {
      createColumns()
      setTimeout(playExitAnimation, 100)
      return
    }

    console.log('🚪 Playing Exit Animation')
    setCurrentPhase('exit')

    // Kill any existing entrance animation
    if (entranceTimelineRef.current) {
      entranceTimelineRef.current.kill()
      entranceTimelineRef.current = null
    }

    exitTimelineRef.current = gsap.timeline({
      onComplete: () => {
        console.log('✅ Exit completed')
        setTimeout(() => {
          playEntranceAnimation()
        }, 1000) // Pause before entrance
      }
    })

    // Exit: Thin lines expand to full coverage
    exitTimelineRef.current.to(columnsRef.current, {
      scaleX: 1, // Expand to full coverage
      duration: 0.8,
      ease: 'power2.inOut',
      opacity: 1,
      stagger: 0.03, // Wave effect
      delay: 0.2 // Small delay
    })
  }

  const playEntranceAnimation = () => {
    if (columnsRef.current.length === 0) return

    console.log('🎬 Playing Entrance Animation')
    setCurrentPhase('entrance')

    // Kill any existing exit animation
    if (exitTimelineRef.current) {
      exitTimelineRef.current.kill()
      exitTimelineRef.current = null
    }

    entranceTimelineRef.current = gsap.timeline({
      onComplete: () => {
        console.log('✅ Entrance completed')
        setTimeout(() => {
          setCurrentPhase('idle')
        }, 500)
      }
    })

    // Entrance: Full coverage shrinks to thin lines
    entranceTimelineRef.current.to(columnsRef.current, {
      scaleX: 0.03, // Shrink to thin lines
      duration: 0.8,
      ease: 'power2.inOut',
      opacity: 1, // Keep visible
      stagger: 0.05, // Wave effect
      delay: 0.2
    })
  }

  const startFullDemo = () => {
    // Reset state
    if (exitTimelineRef.current) exitTimelineRef.current.kill()
    if (entranceTimelineRef.current) entranceTimelineRef.current.kill()

    // Create fresh columns
    createColumns()

    // Start exit animation after short delay
    setTimeout(playExitAnimation, 500)
  }

  useEffect(() => {
    // Start demo on mount
    startFullDemo()

    return () => {
      if (exitTimelineRef.current) exitTimelineRef.current.kill()
      if (entranceTimelineRef.current) entranceTimelineRef.current.kill()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Content behind the shutters */}
      <div className="relative z-0 min-h-screen flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Two-Phase Animation Demo
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Watch the exit and entrance animations in action
          </p>

          {/* Phase Indicator */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 bg-black/30 rounded-lg px-6 py-3">
              <div className={`w-4 h-4 rounded-full ${currentPhase === 'exit' ? 'bg-red-500' :
                  currentPhase === 'entrance' ? 'bg-blue-500' :
                    'bg-gray-500'
                }`} />
              <span className="font-mono text-lg">
                {currentPhase === 'exit' ? '🚪 EXIT PHASE' :
                  currentPhase === 'entrance' ? '🎬 ENTRANCE PHASE' :
                    '⏸️ IDLE'}
              </span>
            </div>
          </div>

          {/* Animation Controls */}
          <button
            onClick={startFullDemo}
            className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            🔄 Replay Full Demo
          </button>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">🚪</div>
              <h3 className="font-bold mb-2 text-red-400">Exit Phase</h3>
              <p className="text-sm text-gray-300">Thin lines expand to full black coverage</p>
              <div className="mt-4 font-mono text-xs bg-black/30 rounded p-2">
                scaleX: 0.03 → 1
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">🎬</div>
              <h3 className="font-bold mb-2 text-blue-400">Entrance Phase</h3>
              <p className="text-sm text-gray-300">Full coverage shrinks back to thin lines</p>
              <div className="mt-4 font-mono text-xs bg-black/30 rounded p-2">
                scaleX: 1 → 0.03
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shutter Overlay Container */}
      <div
        ref={containerRef}
        className="shutter-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 20,
          display: 'none',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}