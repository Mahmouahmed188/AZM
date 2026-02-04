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
    
    if (onClick) {
      onClick()
    }
    
    startTransition(href)
    
    setTimeout(() => {
      if (window.location.pathname !== new URL(href, window.location.origin).pathname) {
        window.location.href = href
      }
    }, 4000)
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