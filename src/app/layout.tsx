import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | British Educational Network (BEN)',
    default: 'Top O & A Level Coaching in Multan | British Educational Network',
  },
  description: 'Achieve A* results with Multan\'s most trusted O & A Level coaching center. Expert instructors, Cambridge/Edexcel curriculum, online & on-campus classes.',
  keywords: 'O Level, A Level, coaching, Multan, Cambridge, Edexcel, online classes, tutoring, British Educational Network, BEN',
  authors: [{ name: 'British Educational Network' }],
  creator: 'British Educational Network',
  publisher: 'British Educational Network',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'British Educational Network',
    title: 'Top O & A Level Coaching in Multan | British Educational Network',
    description: 'Achieve A* results with Multan\'s most trusted O & A Level coaching center. Expert instructors, Cambridge/Edexcel curriculum, online & on-campus classes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
