'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function NavigationDebugPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [logs, setLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString()
    const fullMessage = `[${timestamp}] ${message}`
    console.log(`[NAV DEBUG] ${fullMessage}`)
    setLogs(prev => [...prev.slice(-15), fullMessage])
  }

  const testRouter = () => {
    addLog('=== TESTING ROUTER INSTANCE ===')
    addLog(`Router exists: ${!!router}`)
    addLog(`Router type: ${typeof router}`)
    
    if (typeof router === 'object' && router !== null) {
      const methods = Object.getOwnPropertyNames(router)
      addLog(`Router methods: ${methods.join(', ')}`)
      addLog(`Has push: ${methods.includes('push')}`)
      addLog(`Has replace: ${methods.includes('replace')}`)
      addLog(`Has back: ${methods.includes('back')}`)
      
      if (typeof router.push === 'function') {
        addLog('✅ router.push is callable')
        
        // Test actual navigation
        const testPath = pathname === '/' ? '/about' : '/'
        addLog(`Attempting to navigate to: ${testPath}`)
        
        try {
          router.push(testPath)
          addLog('✅ router.push() called successfully')
          
          // Check if it worked after a delay
          setTimeout(() => {
            const currentPath = window.location.pathname
            const targetPath = new URL(testPath, window.location.origin).pathname
            addLog(`Current path after push: ${currentPath}`)
            addLog(`Target path: ${targetPath}`)
            addLog(`Navigation ${currentPath === targetPath ? 'SUCCESS' : 'FAILED'}`)
          }, 500)
          
        } catch (error) {
          addLog(`❌ router.push() failed: ${error}`)
        }
      } else {
        addLog('❌ router.push is NOT a function')
      }
    } else {
      addLog('❌ Router is null or not an object')
    }
  }

  const testWindowLocation = () => {
    addLog('=== TESTING WINDOW LOCATION ===')
    addLog(`window.location exists: ${!!window.location}`)
    addLog(`window.location.href: ${window.location.href}`)
    addLog(`window.location.pathname: ${window.location.pathname}`)
    
    try {
      const testPath = pathname === '/' ? '/about' : '/'
      addLog(`Setting window.location.href to: ${testPath}`)
      window.location.href = testPath
      addLog('✅ window.location.href set successfully')
    } catch (error) {
      addLog(`❌ window.location.href failed: ${error}`)
    }
  }

  const checkImports = () => {
    addLog('=== CHECKING IMPORTS ===')
    
    // Check Next.js version
    const nextVersion = typeof window !== 'undefined' && window.next ? window.next.version : 'Unknown'
    addLog(`Next.js version: ${nextVersion}`)
    
    // Check if we're in client
    addLog(`Client side: ${typeof window !== 'undefined'}`)
    addLog(`Document ready: ${document.readyState}`)
  }

  const testDirectCall = () => {
    addLog('=== TESTING DIRECT CALL ===')
    
    try {
      // Dynamic import to test if modules load
      import('next/navigation').then((nav) => {
        addLog('✅ next/navigation imported successfully')
        addLog(`Available exports: ${Object.keys(nav)}`)
        
        if (nav.useRouter) {
          const directRouter = nav.useRouter()
          addLog('✅ Direct useRouter() works')
          addLog(`Direct router type: ${typeof directRouter}`)
          
          if (typeof directRouter.push === 'function') {
            const testPath = pathname === '/' ? '/about' : '/'
            addLog(`Testing direct router.push to: ${testPath}`)
            directRouter.push(testPath)
            addLog('✅ Direct router.push() called')
          } else {
            addLog('❌ Direct router.push is not a function')
          }
        } else {
          addLog('❌ Direct useRouter() not available')
        }
      }).catch((error) => {
        addLog(`❌ Failed to import next/navigation: ${error}`)
      })
    } catch (error) {
      addLog(`❌ Import test failed: ${error}`)
    }
  }

  useEffect(() => {
    addLog('=== PAGE LOADED ===')
    checkImports()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
          Forced Navigation Debug
        </h1>
        
        <p className="text-xl text-center text-gray-200 mb-8">
          Comprehensive debugging of Next.js router and navigation execution
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Debug Actions */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">🔍 Debug Actions</h2>
            
            <div className="space-y-4">
              <button
                onClick={testRouter}
                className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Test Router Instance
              </button>
              
              <button
                onClick={testWindowLocation}
                className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Test Window Location
              </button>
              
              <button
                onClick={testDirectCall}
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Test Direct Import
              </button>
            </div>
          </div>

          {/* Debug Info */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">📊 Current State</h2>
            
            <div className="space-y-2 text-sm font-mono">
              <div>Current Path: {pathname}</div>
              <div>Router Exists: {router ? 'YES' : 'NO'}</div>
              <div>Window Location: {window.location.href}</div>
              <div>Window Pathname: {window.location.pathname}</div>
            </div>
          </div>
        </div>

        {/* Console Logs */}
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-yellow-400">📝 Console Logs</h2>
            <button
              onClick={() => setLogs([])}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm"
            >
              Clear
            </button>
          </div>
          
          <div className="bg-black/50 rounded p-4 text-xs font-mono max-h-96 overflow-y-auto space-y-1">
            {logs.length === 0 ? (
              <div className="text-yellow-400">Click debug actions to see logs...</div>
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
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">🎯 Debugging Steps</h2>
          
          <ol className="space-y-3 text-gray-200 list-decimal list-inside">
            <li>
              <strong className="text-green-400">Step 1:</strong> Test Router Instance - Check if useRouter works
            </li>
            <li>
              <strong className="text-green-400">Step 2:</strong> Test Direct Navigation - Try window.location.href
            </li>
            <li>
              <strong className="text-green-400">Step 3:</strong> Test Dynamic Import - Check next/navigation loading
            </li>
            <li>
              <strong className="text-green-400">Step 4:</strong> Check Console Logs - Look for navigation errors
            </li>
            <li>
              <strong className="text-green-400">Step 5:</strong> Verify URL Changes - Check address bar updates
            </li>
          </ol>
          
          <div className="mt-6 p-4 bg-yellow-400/10 rounded border border-yellow-400/30">
            <p className="text-sm font-semibold text-yellow-300">
              <strong>Expected Results:</strong><br/>
              • Router.push() should work and change URL<br/>
              • Window.location.href should work as fallback<br/>
              • Console should show "Navigation SUCCESS" messages<br/>
              • Address bar should update to new page
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}