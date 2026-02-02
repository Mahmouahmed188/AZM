'use client'

import { useEffect, useRef } from 'react'
import { usePageTransition } from './TransitionLayout'

/**
 * Higher-Order Component with enhanced error handling and auto-reveal
 */
export default function withPageReveal<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: {
    revealDelay?: number
    autoRetry?: boolean
    maxRetries?: number
  } = {}
) {
  const { 
    revealDelay = 300, 
    autoRetry = true, 
    maxRetries = 3 
  } = options

  return function PageRevealWrapper(props: P) {
    const { endTransition, isTransitioning, forceCleanup } = usePageTransition()
    const retryCountRef = useRef(0)

    useEffect(() => {
      if (isTransitioning) {
        const timer = setTimeout(() => {
          try {
            endTransition()
            retryCountRef.current = 0 // Reset on success
          } catch (error) {
            console.error('Page reveal failed:', error)
            
            if (autoRetry && retryCountRef.current < maxRetries) {
              retryCountRef.current++
              console.log(`Retrying reveal (${retryCountRef.current}/${maxRetries})`)
              
              // Retry with exponential backoff
              const retryDelay = revealDelay * Math.pow(2, retryCountRef.current)
              setTimeout(() => endTransition(), retryDelay)
            } else {
              console.error('Max retries reached, forcing cleanup')
              forceCleanup()
            }
          }
        }, revealDelay)

        return () => clearTimeout(timer)
      }
    }, [isTransitioning, endTransition, forceCleanup, revealDelay, autoRetry, maxRetries])

    return <WrappedComponent {...props} />
  }
}