'use client'

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

interface TransitionContextType {
  isTransitioning: boolean
  startTransition: () => void
  endTransition: () => void
  forceCleanup: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('usePageTransition must be used within TransitionLayout')
  }
  return context
}

interface TransitionLayoutProps {
  children: React.ReactNode
}

export default function TransitionLayout({ children }: TransitionLayoutProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLDivElement[]>([])
  const animationTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const cleanupTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const previousPathnameRef = useRef<string>('')
  
  // GSAP context for proper cleanup
  const gsapContextRef = useRef<gsap.Context | null>(null)

  // Force cleanup function - emergency fallback
  const forceCleanup = useCallback(() => {
    console.log('🔧 FORCED CLEANUP TRIGGERED')
    
    // Kill any running animations
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill()
      animationTimelineRef.current = null
    }
    
    // Clear timeout
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current)
      cleanupTimeoutRef.current = null
    }
    
    // Force remove overlay
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: 'none', opacity: 0 })
      overlayRef.current.innerHTML = ''
    }
    
    // Reset state
    setIsTransitioning(false)
    columnsRef.current = []
  }, [])

  // Cleanup function
  const cleanup = useCallback(() => {
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill()
      animationTimelineRef.current = null
    }
    
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current)
      cleanupTimeoutRef.current = null
    }
    
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: 'none' })
      overlayRef.current.innerHTML = ''
    }
    
    columnsRef.current = []
    setIsTransitioning(false)
  }, [])

  // Start transition - cover the screen immediately
  const startTransition = useCallback(() => {
    console.log('🚀 Starting horizontal shutter transition')
    
    if (!overlayRef.current) return
    
    // Cleanup any existing state first
    cleanup()
    
    setIsTransitioning(true)
    
    const numColumns = 20 // Increased columns for smoother effect
    const columns: HTMLDivElement[] = []
    
    // Clear and recreate columns
    overlayRef.current.innerHTML = ''
    
    // Create vertical blind columns
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div')
      column.className = 'horizontal-shutter-column'
      overlayRef.current.appendChild(column)
      columns.push(column)
    }
    
    columnsRef.current = columns
    
    // Create GSAP context for proper cleanup
    gsapContextRef.current = gsap.context(() => {
      // Position and style columns - fully extended horizontal state
      gsap.set(columns, {
        height: '100vh',
        width: `${100 / numColumns}%`,
        backgroundColor: '#000000',
        position: 'absolute',
        top: 0,
        left: 0, // Position from left edge
        scaleX: 1, // Full width (fully extended)
        opacity: 1,
        transformOrigin: 'right center', // CRITICAL: Shrink towards right edge
        zIndex: 9999
      })
      
      // Position columns side by side from left
      columns.forEach((column, index) => {
        gsap.set(column, {
          left: `${(index * 100) / numColumns}%`
        })
      })
      
      // Show overlay immediately
      gsap.set(overlayRef.current, {
        display: 'block',
        opacity: 1,
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      })
    }, overlayRef.current)
    
    // Emergency cleanup timeout - prevents stuck overlay
    cleanupTimeoutRef.current = setTimeout(() => {
      console.warn('⚠️ Emergency cleanup triggered - animation might be stuck')
      forceCleanup()
    }, 5000) // 5 second timeout
  }, [cleanup, forceCleanup])

  // End transition - start the horizontal shrink reveal animation
  const endTransition = useCallback(() => {
    console.log('🎬 Ending transition - starting horizontal shutter reveal')
    
    if (!overlayRef.current || columnsRef.current.length === 0) {
      console.warn('No overlay or columns found for reveal')
      return
    }
    
    // Clear emergency timeout
    if (cleanupTimeoutRef.current) {
      clearTimeout(cleanupTimeoutRef.current)
      cleanupTimeoutRef.current = null
    }
    
    // Kill any existing animation
    if (animationTimelineRef.current) {
      animationTimelineRef.current.kill()
    }
    
    // Create new timeline for horizontal shutter reveal
    animationTimelineRef.current = gsap.timeline({
      onComplete: () => {
        console.log('✅ Horizontal shutter animation completed')
        cleanup()
      }
    })
    
    const numColumns = columnsRef.current.length
    
    // Animate columns shrinking horizontally towards right edge with stagger
    // Using stagger to create wave-like opening effect
    animationTimelineRef.current.to(columnsRef.current, {
      scaleX: 0.03, // Shrink to very thin lines (not zero)
      duration: 0.8,
      ease: 'power2.inOut',
      opacity: 1, // Keep visible as thin lines
      stagger: 0.05, // Stagger each column for wave effect
      // transformOrigin is already set to 'right center' in initial setup
    })
  }, [cleanup])

  // Watch for pathname changes to trigger reveal
  useEffect(() => {
    // Skip on initial mount
    if (previousPathnameRef.current === '') {
      previousPathnameRef.current = pathname
      return
    }
    
    // Only trigger if pathname has changed and we're transitioning
    if (previousPathnameRef.current !== pathname && isTransitioning) {
      console.log(`📍 Route changed from ${previousPathnameRef.current} to ${pathname}`)
      
      // Small delay to ensure content is rendered
      const timer = setTimeout(() => {
        endTransition()
      }, 150)
      
      return () => clearTimeout(timer)
    }
    
    previousPathnameRef.current = pathname
  }, [pathname, isTransitioning, endTransition])

  // Initialize and cleanup GSAP context
  useEffect(() => {
    return () => {
      // Cleanup GSAP context on unmount
      if (gsapContextRef.current) {
        gsapContextRef.current.revert()
      }
      cleanup()
    }
  }, [cleanup])

  // Development debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🔄 Transition state:', { isTransitioning, pathname })
    }
  }, [isTransitioning, pathname])

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition, endTransition, forceCleanup }}>
      <div className="relative">
        {children}
        
        {/* Horizontal Shutter Overlay */}
        <div
          ref={overlayRef}
          className="shutter-overlay"
          style={{
            display: 'none',
            pointerEvents: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999
          }}
        />
        
        {/* Development debug info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 left-4 bg-black/50 text-white p-2 text-xs rounded z-50">
            Horizontal Shutter: {isTransitioning ? 'Active' : 'Inactive'} | {pathname}
          </div>
        )}
      </div>
    </TransitionContext.Provider>
  )
}