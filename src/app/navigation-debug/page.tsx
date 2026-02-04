'use client'

import { useState } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import { usePageTransition } from '@/shared/components/transitions/TransitionLayout'
import { usePathname } from 'next/navigation'

export default function NavigationDebug() {
  const pathname = usePathname()
  const { forceCleanup, isTransitioning, isExiting, isEntering, navigationReady } = usePageTransition()
  const [logs, setLogs] = useState<string[]>([])
  const [testMode, setTestMode] = useState<'animation' | 'direct'>('animation')

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setLogs(prev => [...prev.slice(-10), `[${timestamp}] ${message}`])
  }

  const handleDirectNav = (href: string) => {
    addLog(`🔥 DIRECT NAV to: ${href}`)
    console.log('🔥 DIRECT NAV TEST:', href)
    
    // Test different navigation methods
    try {
      console.log('Testing window.location.href...')
      window.location.href = href
    } catch (error) {
      console.error('Window.location failed:', error)
    }
  }

  const handleTransitionLink = (href: string) => {
    addLog(`🔗 TRANSITION LINK to: ${href}`)
    console.log('🔗 TRANSITION LINK TEST:', href)
  }

  const clearLogs = () => {
    setLogs([])
  }

  const testRouter = () => {
    addLog('🧪 Testing router directly...')
    try {
      const { useRouter } = require('next/navigation')
      const router = useRouter()
      console.log('Router instance:', router)
      console.log('Router.push method:', typeof router.push)
      
      // Test router.push
      router.push('/about')
      addLog('✅ Router.push() called')
    } catch (error) {
      addLog(`❌ Router test failed: ${error}`)
    }
  }

  return (
    <PageRevealTrigger delay={100}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
        {/* Debug Panel */}
        <div className="fixed top-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 z-50 max-w-md">
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Navigation Debug</h2>
          
          {/* Mode Selector */}
          <div className="mb-4">
            <label className="text-sm text-gray-300 mb-2 block">Test Mode:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setTestMode('animation')}
                className={`px-3 py-1 rounded text-sm ${
                  testMode === 'animation' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                Animation
              </button>
              <button
                onClick={() => setTestMode('direct')}
                className={`px-3 py-1 rounded text-sm ${
                  testMode === 'direct' ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              >
                Direct
              </button>
            </div>
          </div>
          
          {/* Status */}
          <div className="space-y-2 text-xs font-mono">
            <div>Path: {pathname}</div>
            <div>Transition: {isTransitioning ? 'ACTIVE' : 'IDLE'}</div>
            <div>Exit: {isExiting ? 'PLAYING' : 'IDLE'}</div>
            <div>Entrance: {isEntering ? 'PLAYING' : 'IDLE'}</div>
            <div>Nav Ready: {navigationReady ? 'YES' : 'NO'}</div>
          </div>
          
          {/* Test Buttons */}
          <div className="space-y-2">
            <button
              onClick={testRouter}
              className="w-full bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-sm"
            >
              Test Router Direct
            </button>
            
            <button
              onClick={clearLogs}
              className="w-full bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded text-sm"
            >
              Clear Logs
            </button>
          </div>
          
          {/* Logs */}
          <div className="mt-3">
            <h3 className="text-sm font-bold mb-2">Console Log:</h3>
            <div className="bg-black/50 rounded p-2 text-xs space-y-1 max-h-40 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-400">No logs yet...</div>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="text-green-400">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Navigation Debug Console
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-8">
            Testing navigation methods and debugging transition system
          </p>
          
          {/* Test Grid */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {testMode === 'animation' ? 'Animation Tests' : 'Direct Navigation Tests'}
            </h2>
            
            {testMode === 'animation' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TransitionLink 
                  href="/" 
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/')}
                >
                  Home (Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/about" 
                  className="block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/about')}
                >
                  About (Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/products" 
                  className="block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/products')}
                >
                  Products (Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/services" 
                  className="block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/services')}
                >
                  Services (Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/contact" 
                  className="block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/contact')}
                >
                  Contact (Animation)
                </TransitionLink>
                
                <TransitionLink 
                  href="/careers" 
                  className="block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                  onClick={() => handleTransitionLink('/careers')}
                >
                  Careers (Animation)
                </TransitionLink>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => handleDirectNav('/')}
                  className="block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Home (Direct)
                </button>
                
                <button
                  onClick={() => handleDirectNav('/about')}
                  className="block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  About (Direct)
                </button>
                
                <button
                  onClick={() => handleDirectNav('/products')}
                  className="block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Products (Direct)
                </button>
                
                <button
                  onClick={() => handleDirectNav('/services')}
                  className="block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Services (Direct)
                </button>
                
                <button
                  onClick={() => handleDirectNav('/contact')}
                  className="block bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact (Direct)
                </button>
                
                <button
                  onClick={() => handleDirectNav('/careers')}
                  className="block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Careers (Direct)
                </button>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🐛 How to Debug</h3>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Open browser developer console (F12)</li>
                <li>Click animation links or direct nav buttons</li>
                <li>Watch console logs for navigation events</li>
                <li>Check if URL actually changes</li>
                <li>Try "Test Router Direct" button</li>
                <li>Switch between Animation/Direct modes</li>
              </ol>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">🔍 What to Look For</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Exit animation plays (screen goes black)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Navigation executes after exit completes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>URL changes to new page</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Entrance animation reveals new content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">❌</span>
                  <span>Stuck on current page (URL doesn't change)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageRevealTrigger>
  )
}