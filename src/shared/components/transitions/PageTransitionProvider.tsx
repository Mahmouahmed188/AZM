'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import PageTransition from './PageTransition'

interface TransitionContextType {
  triggerTransition: (callback?: () => void) => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function usePageTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider')
  }
  return context
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [pendingCallback, setPendingCallback] = useState<(() => void) | undefined>()

  const triggerTransition = useCallback((callback?: () => void) => {
    setPendingCallback(() => callback)
    setIsTransitioning(true)
  }, [])

  const handleTransitionComplete = useCallback(() => {
    if (pendingCallback) {
      pendingCallback()
    }
    setIsTransitioning(false)
    setPendingCallback(undefined)
  }, [pendingCallback])

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {children}
      <PageTransition
        isTriggered={isTransitioning}
        onComplete={handleTransitionComplete}
      />
    </TransitionContext.Provider>
  )
}