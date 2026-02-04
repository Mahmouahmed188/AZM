'use client'

import { useState } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import { usePageTransition } from '@/shared/components/transitions/TransitionLayout'

export default function NavigationFixDemo() {
  const { forceCleanup, isTransitioning, isExiting, isEntering, navigationReady } = usePageTransition()
  const [testResults, setTestResults] = useState<string[]>([])

  const addTestResult = (result: string) => {
    setTestResults(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${result}`])
  }

  const handleManualNavigation = (href: string) => {
    addTestResult(`Manual navigation test to ${href}`)
    // Test direct navigation without animation
    window.location.href = href
  }

  const handleTransitionLink = (href: string) => {
    addTestResult(`TransitionLink clicked for ${href}`)
  }

  return (
    <PageRevealTrigger delay={100}>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white p-8">
        {/* Navigation Test Controls */}
        <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 z-50 max-w-md">
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Navigation Fix Test</h2>
          
          <div className="space-y-3">
            {/* Status Indicators */}
            <div className="text-xs space-y-1 font-mono">
              <div className="flex justify-between">
                <span>Transition:</span>
                <span className={isTransitioning ? 'text-green-400' : 'text-gray-400'}>
                  {isTransitioning ? 'ACTIVE' : 'IDLE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Exit Phase:</span>
                <span className={isExiting ? 'text-red-400' : 'text-gray-400'}>
                  {isExiting ? 'PLAYING' : 'IDLE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Entrance Phase:</span>
                <span className={isEntering ? 'text-blue-400' : 'text-gray-400'}>
                  {isEntering ? 'PLAYING' : 'IDLE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Navigation Ready:</span>
                <span className={navigationReady ? 'text-green-400' : 'text-gray-400'}>
                  {navigationReady ? 'YES' : 'NO'}
                </span>
              </div>
            </div>
            
            <button
              onClick={forceCleanup}
              className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition-colors"
            >
              Emergency Cleanup
            </button>
            
            {/* Test Results Log */}
            <div className="mt-3">
              <h3 className="text-sm font-bold mb-2">Test Log:</h3>
              <div className="bg-black/50 rounded p-2 text-xs space-y-1 max-h-32 overflow-y-auto">
                {testResults.length === 0 ? (
                  <div className="text-gray-400">No tests yet...</div>
                ) : (
                  testResults.map((result, index) => (
                    <div key={index} className="text-green-400">
                      {result}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Navigation Execution Fix Demo
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-8">
            Testing robust navigation with exit animation + route change
          </p>
          
          {/* Navigation Test Grid */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Navigation Test Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* TransitionLink Tests */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-400">TransitionLink Tests</h3>
                <TransitionLink 
                  href="/" 
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/')}
                >
                  Home (With Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/about" 
                  className="block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/about')}
                >
                  About (With Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/products" 
                  className="block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/products')}
                >
                  Products (With Animation)
                </TransitionLink>
              </div>
              
              {/* Direct Navigation Tests */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-orange-400">Direct Navigation Tests</h3>
                <button
                  onClick={() => handleManualNavigation('/')}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Home (Direct Nav)
                </button>
                
                <button
                  onClick={() => handleManualNavigation('/about')}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  About (Direct Nav)
                </button>
                
                <button
                  onClick={() => handleManualNavigation('/products')}
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Products (Direct Nav)
                </button>
              </div>
              
              {/* Edge Case Tests */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-yellow-400">Edge Case Tests</h3>
                <TransitionLink 
                  href="/nonexistent-page" 
                  className="block bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/nonexistent-page')}
                >
                  404 Page Test
                </TransitionLink>
                
                <TransitionLink 
                  href="/" 
                  className="block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/')}
                >
                  Same Page Test
                </TransitionLink>
                
                <button
                  onClick={() => {
                    addTestResult('Rapid click test started')
                    // Simulate rapid clicking
                    setTimeout(() => {
                      const link = document.querySelector('[href="/about"]') as HTMLAnchorElement
                      if (link) link.click()
                    }, 100)
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-center py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Rapid Click Test
                </button>
              </div>
            </div>
          </div>

          {/* Debug Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🔧 Navigation Fix Applied</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Robust executeNavigation function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Multiple fallback mechanisms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Navigation ready state tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Timeout protection (1s fallback)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Same page detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🧪 How to Test</h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Click TransitionLink buttons</li>
                <li>Watch exit animation play</li>
                <li>Verify navigation executes after exit</li>
                <li>Check entrance animation on new page</li>
                <li>Try edge cases (404, same page, rapid clicks)</li>
                <li>Compare with direct navigation buttons</li>
              </ol>
            </div>
          </div>

          {/* Stress Test */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">⚡ Stress Test</h3>
            <p className="text-gray-300 mb-4">Click rapidly to test navigation reliability:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({ length: 8 }, (_, i) => (
                <TransitionLink
                  key={i}
                  href={i % 2 === 0 ? '/' : '/about'}
                  className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 py-3 rounded-lg transition-all transform hover:scale-105 text-sm font-medium text-center shadow-md"
                >
                  Link {i + 1}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageRevealTrigger>
  )
}