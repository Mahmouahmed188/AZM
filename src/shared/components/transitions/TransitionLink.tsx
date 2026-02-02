'use client'

import Link from 'next/link'
import { usePageTransition } from './TransitionLayout'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    console.log(`🔗 Navigation clicked: ${href}`)
    
    // Execute any custom onClick logic
    if (onClick) {
      onClick()
    }
    
    // Start the transition (close the shutters)
    startTransition()
    
    // Navigate after shutter is covering
    setTimeout(() => {
      try {
        if (replace) {
          router.replace(href)
        } else {
          router.push(href)
        }
      } catch (error) {
        console.error('Navigation failed:', error)
        // Fallback to direct navigation
        window.location.href = href
      }
    }, 100) // Increased delay to ensure shutters are in place
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