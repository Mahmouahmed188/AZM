'use client'

import Link from 'next/link'
import { usePageTransition } from './TransitionLayout'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
  onClick?: () => void
}

export default function TransitionLink({
  href,
  children,
  className,
  prefetch = true,
  replace = false,
  scroll = true,
  onClick
}: TransitionLinkProps) {
  const { startTransition } = usePageTransition()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    console.log('🔗 [TransitionLink] Click detected:', {
      href,
      currentPath: window.location.pathname,
      timestamp: new Date().toISOString()
    })
    
    // Execute any custom onClick logic first
    if (onClick) {
      onClick()
    }
    
    // CRITICAL: Force-start the transition and navigation
    startTransition(href)
    
    // IMMEDIATE BACKUP: Force navigation if transition doesn't work
    setTimeout(() => {
      console.log('🚨 [BACKUP] Forcing navigation after 4s')
      if (window.location.pathname !== new URL(href, window.location.origin).pathname) {
        console.log('📍 [BACKUP] Executing window.location.href')
        window.location.href = href
      }
    }, 4000) // 4 second backup
  }

  return (
    <Link
      href={href}
      className={className}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}