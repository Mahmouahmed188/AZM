'use client'

import { useEffect } from 'react'
import { usePageTransition } from './TransitionLayout'

interface PageRevealTriggerProps {
  children: React.ReactNode
  delay?: number
  forceReveal?: boolean // Emergency override
}

/**
 * Component that ensures the page reveal animation triggers properly.
 * Use this as a fallback or for pages that don't auto-reveal.
 */
export default function PageRevealTrigger({ 
  children, 
  delay = 200,
  forceReveal = false 
}: PageRevealTriggerProps) {
  const { endTransition, isTransitioning } = usePageTransition()

  useEffect(() => {
    // Only trigger if we're transitioning or force is enabled
    if ((isTransitioning || forceReveal)) {
      const timer = setTimeout(() => {
        console.log('🎯 PageRevealTrigger: Attempting to end transition')
        endTransition()
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isTransitioning, endTransition, delay, forceReveal])

  return <>{children}</>
}