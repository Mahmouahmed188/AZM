'use client'

import { useState, useEffect } from 'react'
import TransitionLink from '@/shared/components/transitions/TransitionLink'
import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'
import withPageReveal from '@/shared/components/transitions/withPageReveal'

// Simulate slow-loading content
function SlowLoadingContent() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    // Simulate content loading delay
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-white">Loading content...</div>
      </div>
    )
  }
  
  return (
    <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Content Loaded!</h3>
      <p>This content took 1 second to "load" and the shutter only opened after it was ready.</p>
    </div>
  )
}

// Page component using PageRevealTrigger wrapper
function PageWithRevealTrigger() {
  return (
    <PageRevealTrigger delay={200}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Delayed Entry Transition Demo</h1>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Entry Transition Behavior</h2>
              <p className="text-gray-300 mb-4">
                The shutter closes immediately on click and stays closed until the page content is fully loaded.
              </p>
              
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
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Simulated Slow Loading Content</h2>
              <SlowLoadingContent />
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">How It Works:</h2>
              <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                <li>User clicks link</li>
                <li>Shutter immediately covers screen (12 black columns)</li>
                <li>Navigation happens in background</li>
                <li>New page loads and renders</li>
                <li>PageRevealTrigger detects page mount</li>
                <li>Shutter opens to reveal loaded content</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </PageRevealTrigger>
  )
}

// Alternative: Using HOC pattern
function HOCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">HOC Pattern Example</h1>
        <p className="text-gray-300 text-center">This page uses the withPageReveal HOC pattern.</p>
        
        <div className="mt-8 text-center">
          <TransitionLink href="/transition-demo" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition-colors">
            Back to Demo
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}

// Export the HOC-wrapped page
const HOCPageWithReveal = withPageReveal(HOCPage, { revealDelay: 300 })

// Main component that switches between patterns
export default function TransitionDemoEntry() {
  const [useHOC, setUseHOC] = useState(false)
  
  if (useHOC) {
    return <HOCPageWithReveal />
  }
  
  return (
    <div>
      <PageWithRevealTrigger />
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={() => setUseHOC(!useHOC)}
          className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
        >
          Switch to {useHOC ? 'PageRevealTrigger' : 'HOC'} Pattern
        </button>
      </div>
    </div>
  )
}