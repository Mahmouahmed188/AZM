'use client'

import PageRevealTrigger from '@/shared/components/transitions/PageRevealTrigger'

// Wrap your existing page content with PageRevealTrigger
export default function AboutPage() {
  return (
    <PageRevealTrigger>
      {/* Your existing about page content goes here */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
        {/* ... rest of your page content ... */}
      </div>
    </PageRevealTrigger>
  )
}