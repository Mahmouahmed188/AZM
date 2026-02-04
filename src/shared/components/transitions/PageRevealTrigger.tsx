'use client'

import { useEffect } from 'react'
import { usePageTransition } from './TransitionLayout'

interface PageRevealTriggerProps {
  children: React.ReactNode
  delay?: number
  forceReveal?: boolean // Emergency override
}

/**
 * Component that ensures entrance animation triggers properly after page load.
 * With two-phase system, entrance is usually automatic when pathname changes.
 * This component now serves as a safety net for edge cases.
 */
export default function PageRevealTrigger({ 
  children, 
  delay = 100, // Reduced delay since entrance is now automatic
  forceReveal = false 
}: PageRevealTriggerProps) {
  const { endTransition, isTransitioning, isExiting } = usePageTransition()

  useEffect(() => {
    // Only trigger entrance if we're transitioning but not in exit phase
    // Or if force reveal is enabled (for testing/special cases)
    if ((isTransitioning && !isExiting) || forceReveal) {
      const timer = setTimeout(() => {
        console.log('🎯 PageRevealTrigger: Safety net triggered')
        endTransition()
      }, delay)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isTransitioning, isExiting, endTransition, delay, forceReveal])

  return <>{children}</>
}