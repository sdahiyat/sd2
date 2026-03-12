import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Sheets - AI-Powered Financial Advisory',
  description: 'Financial advisors and clients connected through AI-powered document insights and personalized guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
