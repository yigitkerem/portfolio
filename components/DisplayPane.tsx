'use client'

import { ReactNode } from 'react'

interface DisplayPaneProps {
  activePanel: string
  children: ReactNode
}

export default function DisplayPane({ activePanel, children }: DisplayPaneProps) {
  const isOrigin = activePanel === 'origin'
  
  return (
    <div className={`${isOrigin ? 'bg-white' : 'bg-panel-bg'} overflow-y-auto py-8 px-6 md:px-9 lg:px-12 ${isOrigin ? 'scrollbar-light' : 'scrollbar-thin'} w-full min-w-0`} style={{ height: '100%', maxHeight: '100%' }}>
      {children}
    </div>
  )
}
