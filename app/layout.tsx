import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sksh — skyfallen skylinux terminal',
  description: 'Yigit Kerem Oktay — ECE @ UIUC, Founder of Skyfallen. Type \'help\' to begin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
