'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

/**
 * Standalone Horizontal Shutter Animation Demo
 * Use this component to test the animation without navigation
 */
export default function HorizontalShutterAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLDivElement[]>([])
  const animationTimelineRef = useRef<gsap.core.Timeline | null>(null)

  const startAnimation = () => {
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
      // Initial setup - full width columns
      gsap.set(columns, {
        height: '100vh',
        width: `${100 / numColumns}%`,
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0,
        scaleX: 1, // Full width
        opacity: 1,
        transformOrigin: 'right center', // CRITICAL: Shrink towards right
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
      
      // Start the animation after a short delay
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset after animation
          setTimeout(() => {
            ctx.revert()
          }, 1000)
        }
      })
      
      // Horizontal shrink animation with stagger
      tl.to(columns, {
        scaleX: 0.03, // Shrink to very thin lines (not zero)
        duration: 0.8,
        ease: 'power2.inOut',
        opacity: 1, // Keep visible as thin lines
        stagger: 0.05, // Wave-like stagger
        delay: 0.5 // Wait before starting
      })
      
    }, containerRef.current)
  }

  useEffect(() => {
    // Start animation on mount
    const timer = setTimeout(startAnimation, 1000)
    
    return () => {
      clearTimeout(timer)
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill()
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Content behind the shutter */}
      <div className="relative z-0 min-h-screen flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Horizontal Shutter Animation
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This content is revealed when the horizontal blinds shrink to the right
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">→</div>
              <h3 className="font-bold mb-2">Right-Side Shrink</h3>
              <p className="text-sm text-gray-300">Columns shrink towards their right edge</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">│</div>
              <h3 className="font-bold mb-2">Thin Lines Remain</h3>
              <p className="text-sm text-gray-300">scaleX: 0.03 leaves thin vertical lines</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-2">〜</div>
              <h3 className="font-bold mb-2">Wave Effect</h3>
              <p className="text-sm text-gray-300">0.05s stagger creates beautiful wave</p>
            </div>
          </div>
          
          <button 
            onClick={startAnimation}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Replay Animation
          </button>
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