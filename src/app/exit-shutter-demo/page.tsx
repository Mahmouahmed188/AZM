'use client'

import { useState } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import { usePageTransition } from '@/shared/components/transitions/TransitionLayout'

export default function ExitShutterDemo() {
  const { forceCleanup, isTransitioning, isExiting, isEntering } = usePageTransition()

  return (
    <PageRevealTrigger delay={100}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-8">
        {/* Demo Controls */}
        <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 z-50 max-w-sm">
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Exit + Entrance Demo</h2>
          
          <div className="space-y-3">
            {/* Status Indicators */}
            <div className="text-xs space-y-1">
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
            </div>
            
            <button
              onClick={forceCleanup}
              className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition-colors"
            >
              Emergency Cleanup
            </button>
            
            <div className="text-xs text-gray-300">
              <p>🚪 Exit: Thin lines → Full cover</p>
              <p>🎬 Entrance: Full cover → Thin lines</p>
              <p>🧭 Navigation happens AFTER exit</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Two-Phase Transition System
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-8">
            Exit animation → Navigation → Entrance animation (no more hard cuts!)
          </p>
          
          {/* Navigation Test Grid */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Test Exit + Entrance Flow</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <TransitionLink href="/" className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Home</span>
              </TransitionLink>
              
              <TransitionLink href="/about" className="block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">About</span>
              </TransitionLink>
              
              <TransitionLink href="/products" className="block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Products</span>
              </TransitionLink>
              
              <TransitionLink href="/services" className="block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Services</span>
              </TransitionLink>
              
              <TransitionLink href="/investors" className="block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Investors</span>
              </TransitionLink>
              
              <TransitionLink href="/careers" className="block bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Careers</span>
              </TransitionLink>
              
              <TransitionLink href="/contact" className="block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Contact</span>
              </TransitionLink>
              
              <TransitionLink href="/horizontal-shutter-demo" className="block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Shutter Demo</span>
              </TransitionLink>
            </div>
          </div>

          {/* Animation Flow Visualization */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-red-400">🚪 Exit Phase</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">1.</span>
                  <span>Click link → Immediate exit animation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">2.</span>
                  <span>Thin lines expand to full coverage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">3.</span>
                  <span>scaleX: 0.03 → 1 (860ms duration)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">4.</span>
                  <span>Staggered wave effect (0.03s delay)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">5.</span>
                  <span>Screen fully covered in black</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🎬 Entrance Phase</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">1.</span>
                  <span>Navigation completes in background</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">2.</span>
                  <span>New page content ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">3.</span>
                  <span>Full coverage shrinks to thin lines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">4.</span>
                  <span>scaleX: 1 → 0.03 (860ms duration)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">5.</span>
                  <span>Content revealed behind thin lines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">✨ Key Improvements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🚫</div>
                <h4 className="font-bold mb-1">No Hard Cuts</h4>
                <p className="text-sm text-gray-300">Smooth exit animation prevents jarring transitions</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">⏸️</div>
                <h4 className="font-bold mb-1">Navigation Pause</h4>
                <p className="text-sm text-gray-300">Route change waits for exit animation to complete</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-bold mb-1">Consistent Visual</h4>
                <p className="text-sm text-gray-300">Both phases use same shutter visual style</p>
              </div>
            </div>
          </div>

          {/* Stress Test */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">⚡ Stress Test - Rapid Navigation</h3>
            <p className="text-gray-300 mb-4">Click rapidly to test two-phase transition system:</p>
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