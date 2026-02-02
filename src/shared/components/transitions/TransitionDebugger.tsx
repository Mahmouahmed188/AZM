'use client'

import { useEffect } from 'react'
import { usePageTransition } from './TransitionLayout'

/**
 * Development helper to debug transition issues
 * Add this component to any page during development
 */
export default function TransitionDebugger() {
  const { isTransitioning, forceCleanup } = usePageTransition()

  useEffect(() => {
    // Add keyboard shortcut for emergency cleanup
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+Shift+R for emergency cleanup
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault()
        forceCleanup()
        console.log('🚨 Emergency cleanup triggered via keyboard')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [forceCleanup])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-xs font-mono space-y-2 max-w-xs">
      <div className="flex items-center justify-between">
        <span>Transition Status:</span>
        <span className={`px-2 py-1 rounded ${isTransitioning ? 'bg-red-500' : 'bg-green-500'}`}>
          {isTransitioning ? 'ACTIVE' : 'INACTIVE'}
        </span>
      </div>
      
      <div className="text-gray-400 text-xs">
        <p>Ctrl+Shift+R: Emergency cleanup</p>
        <p>Check console for logs</p>
      </div>
    </div>
  )
}