'use client'

import { useState } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import { usePageTransition } from '@/shared/components/transitions/TransitionLayout'

export default function HorizontalShutterDemo() {
  const { forceCleanup } = usePageTransition()

  return (
    <PageRevealTrigger delay={200}>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8">
        {/* Demo Controls */}
        <div className="fixed top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 z-50 max-w-sm">
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Horizontal Shutter Demo</h2>
          
          <div className="space-y-3">
            <button
              onClick={forceCleanup}
              className="w-full bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition-colors"
            >
              Emergency Cleanup
            </button>
            
            <div className="text-xs text-gray-300">
              <p>• 20 vertical black columns</p>
              <p>• Shrinks horizontally → right</p>
              <p>• Leaves thin lines behind</p>
              <p>• Wave-like stagger effect</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
            Horizontal Shutter Reveal
          </h1>
          
          <p className="text-xl text-center text-gray-300 mb-12">
            Vertical blinds that shrink horizontally towards the right edge
          </p>
          
          {/* Navigation Test Grid */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Test the Horizontal Shutter Effect</h2>
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
              
              <TransitionLink href="/debug-transition" className="block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-center py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Debug</span>
              </TransitionLink>
            </div>
          </div>

          {/* Animation Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Technical Details</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>20 vertical black columns (increased from 12)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>CSS transform-origin: right center</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>GSAP scaleX: 1 → 0.03 (thin lines remain)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Stagger: 0.05s (wave effect)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Duration: 0.8s with power2.inOut</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Animation Behavior</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <span className="text-gray-300">Click link → Instant black cover</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">2</span>
                  </div>
                  <span className="text-gray-300">Page loads in background</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">3</span>
                  </div>
                  <span className="text-gray-300">Columns shrink horizontally →</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">4</span>
                  </div>
                  <span className="text-gray-300">Thin lines remain on right edge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stress Test */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Stress Test - Rapid Navigation</h3>
            <p className="text-gray-300 mb-4">Click rapidly to test multiple horizontal transitions:</p>
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