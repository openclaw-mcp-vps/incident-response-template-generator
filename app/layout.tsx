import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Template Generator',
  description: 'Generate incident response playbooks from past incidents. AI-powered runbooks for SREs and DevOps teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="479c5296-4bf0-4685-a046-c69687cad42f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
