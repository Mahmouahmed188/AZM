'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function SimpleNavTest() {
  const pathname = usePathname()
  const router = useRouter()
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    console.log(`[Nav Test] ${timestamp}: ${message}`)
    setLogs(prev => [...prev.slice(-5), `[${timestamp}] ${message}`])
  }

  const testDirectRouter = () => {
    addLog(`Testing router.push()...`)
    addLog(`Current path: ${pathname}`)
    
    try {
      const target = pathname === '/' ? '/about' : '/'
      addLog(`Attempting to navigate to: ${target}`)
      
      // Direct router.push test
      router.push(target)
      addLog(`✅ router.push() called`)
    } catch (error) {
      addLog(`❌ Router push failed: ${error}`)
    }
  }

  const testWindowLocation = () => {
    addLog(`Testing window.location.href...`)
    
    try {
      const target = pathname === '/' ? '/about' : '/'
      addLog(`Attempting to navigate to: ${target}`)
      
      window.location.href = target
      addLog(`✅ window.location.href set`)
    } catch (error) {
      addLog(`❌ Window location failed: ${error}`)
    }
  }

  const checkRouter = () => {
    try {
      addLog(`Router instance exists: ${!!router}`)
      addLog(`Router.push type: ${typeof router.push}`)
      addLog(`Available methods: ${Object.getOwnPropertyNames(router)}`)
      
      if (typeof router.push === 'function') {
        addLog(`✅ Router.push is callable`)
      } else {
        addLog(`❌ Router.push is not a function`)
      }
    } catch (error) {
      addLog(`❌ Router check failed: ${error}`)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Simple Navigation Test</h1>
        
        {/* Info Panel */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="text-sm space-y-2 font-mono">
            <div>Current Path: {pathname}</div>
            <div>Router Available: {router ? 'YES' : 'NO'}</div>
            <div>Push Method: {typeof router.push}</div>
          </div>
        </div>

        {/* Test Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Router Tests</h3>
            
            <button
              onClick={checkRouter}
              className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Check Router Instance
            </button>
            
            <button
              onClick={testDirectRouter}
              className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Test router.push()
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Window Location Tests</h3>
            
            <button
              onClick={testWindowLocation}
              className="w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Test window.location.href
            </button>
          </div>
        </div>

        {/* Logs */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Console Logs</h3>
            <button
              onClick={() => setLogs([])}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
            >
              Clear
            </button>
          </div>
          
          <div className="bg-black/50 rounded p-4 text-xs space-y-2 font-mono max-h-64 overflow-y-auto">
            {logs.length === 0 ? (
              <div className="text-gray-400">Click test buttons to see logs...</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="text-green-400">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">🔍 Debug Steps</h3>
          <ol className="space-y-2 text-gray-300 list-decimal list-inside">
            <li>Check if router instance exists</li>
            <li>Test router.push() directly</li>
            <li>Test window.location.href directly</li>
            <li>Check browser console for errors</li>
            <li>Verify if URL actually changes</li>
            <li>Test on different pages (home vs other)</li>
          </ol>
        </div>
      </div>
    </div>
  )
}