'use client'

import { useState } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import TransitionDebugger from '@/shared/components/transitions/TransitionDebugger'
import { usePageTransition } from '@/shared/components/transitions/TransitionLayout'

export default function DebugTransitionPage() {
  const { forceCleanup } = usePageTransition()
  const [useRevealTrigger, setUseRevealTrigger] = useState(true)

  return (
    <PageRevealTrigger delay={200}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
        {/* Debug controls */}
        <div className="fixed top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 z-50 max-w-md">
          <h2 className="text-lg font-bold mb-3">Transition Debug Panel</h2>
          
          <div className="space-y-3">
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={useRevealTrigger}
                  onChange={(e) => setUseRevealTrigger(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">Use PageRevealTrigger</span>
              </label>
            </div>
            
            <button
              onClick={forceCleanup}
              className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition-colors"
            >
              Force Cleanup (Emergency)
            </button>
            
            <div className="text-xs text-gray-400">
              <p>• Ctrl+Shift+R: Emergency cleanup</p>
              <p>• Check browser console for logs</p>
              <p>• Stuck overlay should auto-clear in 5s</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Debug Transition System</h1>
          
          <div className="grid gap-6">
            {/* Test navigation links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Navigation Tests</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <TransitionLink href="/" className="block bg-blue-600 hover:bg-blue-700 text-center py-3 px-6 rounded-lg transition-colors">
                  Home
                </TransitionLink>
                <TransitionLink href="/about" className="block bg-green-600 hover:bg-green-700 text-center py-3 px-6 rounded-lg transition-colors">
                  About
                </TransitionLink>
                <TransitionLink href="/products" className="block bg-purple-600 hover:bg-purple-700 text-center py-3 px-6 rounded-lg transition-colors">
                  Products
                </TransitionLink>
                <TransitionLink href="/services" className="block bg-orange-600 hover:bg-orange-700 text-center py-3 px-6 rounded-lg transition-colors">
                  Services
                </TransitionLink>
                <TransitionLink href="/contact" className="block bg-pink-600 hover:bg-pink-700 text-center py-3 px-6 rounded-lg transition-colors">
                  Contact
                </TransitionLink>
                <TransitionLink href="/careers" className="block bg-indigo-600 hover:bg-indigo-700 text-center py-3 px-6 rounded-lg transition-colors">
                  Careers
                </TransitionLink>
              </div>
            </div>

            {/* Stress test */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Stress Test</h2>
              <p className="text-gray-300 mb-4">Click rapidly to test multiple transitions:</p>
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 10 }, (_, i) => (
                  <TransitionLink
                    key={i}
                    href={i % 2 === 0 ? '/' : '/about'}
                    className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors text-sm"
                  >
                    Link {i + 1}
                  </TransitionLink>
                ))}
              </div>
            </div>

            {/* Heavy content test */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Heavy Content Test</h2>
              <p className="text-gray-300 mb-4">This section simulates heavy page content:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="bg-gray-700/50 p-4 rounded">
                    <div className="w-full h-20 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded w-3/4 mb-1"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">How to Debug:</h2>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>Open browser developer console</li>
                <li>Navigate between pages using the links above</li>
                <li>Watch for console logs with 🚀, 📍, 🎬, ✅ emojis</li>
                <li>If overlay gets stuck, use Ctrl+Shift+R or the Force Cleanup button</li>
                <li>Try rapid clicking to test edge cases</li>
                <li>Toggle PageRevealTrigger to test different behavior</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Always show debugger in development */}
        <TransitionDebugger />
      </div>
    </PageRevealTrigger>
  )
}