'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BasicNavTest() {
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    console.log(`[Basic Nav] ${timestamp}: ${message}`)
    setLogs(prev => [...prev.slice(-5), `[${timestamp}] ${message}`])
  }

  const testBasicLink = (href: string, method: string) => {
    addLog(`${method}: Testing ${href}`)
    addLog(`Setting window.location.href...`)
    
    try {
      window.location.href = href
      addLog(`✅ Navigation executed`)
    } catch (error) {
      addLog(`❌ Navigation failed: ${error}`)
    }
  }

  const testNextLink = (href: string) => {
    addLog(`Next.js Link: Testing ${href}`)
    addLog(`This should use Next.js router...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Basic Navigation Test</h1>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8">
          <p className="text-lg mb-6 text-center">
            This test bypasses the transition system to verify basic navigation works.
          </p>
          
          {/* Basic Navigation Tests */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Direct Window Tests</h3>
              
              <button
                onClick={() => testBasicLink('/', 'Window Location')}
                className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
              >
                Navigate to Home
              </button>
              
              <button
                onClick={() => testBasicLink('/about', 'Window Location')}
                className="w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
              >
                Navigate to About
              </button>
              
              <button
                onClick={() => testBasicLink('/products', 'Window Location')}
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Navigate to Products
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Next.js Link Tests</h3>
              
              <Link
                href="/"
                className="block bg-blue-600 hover:bg-blue-700 text-center px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
                onClick={() => testNextLink('/')}
              >
                Navigate to Home
              </Link>
              
              <Link
                href="/about"
                className="block bg-green-600 hover:bg-green-700 text-center px-6 py-3 rounded-lg font-semibold transition-colors mb-4"
                onClick={() => testNextLink('/about')}
              >
                Navigate to About
              </Link>
              
              <Link
                href="/products"
                className="block bg-teal-600 hover:bg-teal-700 text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => testNextLink('/products')}
              >
                Navigate to Products
              </Link>
            </div>
          </div>

          {/* Console Logs */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Navigation Logs</h3>
              <button
                onClick={() => setLogs([])}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
              >
                Clear Logs
              </button>
            </div>
            
            <div className="bg-black/50 rounded p-4 text-xs space-y-2 font-mono max-h-48 overflow-y-auto">
              {logs.length === 0 ? (
                <div className="text-gray-400">No navigation attempts yet...</div>
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

        {/* Instructions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">🧪 Test Instructions</h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-bold text-green-400 mb-2">If this works:</h4>
              <p>Basic navigation is functional → Issue is in transition system</p>
            </div>
            
            <div>
              <h4 className="font-bold text-red-400 mb-2">If this fails:</h4>
              <p>Basic navigation is broken → Issue is deeper in app structure</p>
            </div>
            
            <div>
              <h4 className="font-bold text-yellow-400 mb-2">Next Steps:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Check browser console for errors</li>
                <li>Verify URLs exist and are accessible</li>
                <li>Test on different browsers</li>
                <li>Check Next.js configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}