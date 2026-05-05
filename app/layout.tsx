import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Typing Practice Book Generator',
  description: 'Generate custom typing practice from any text content. Turn PDFs, articles, and code into structured typing lessons with real-time WPM tracking.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61ce6048-f9c7-49a2-840e-97faa4a1b717"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
