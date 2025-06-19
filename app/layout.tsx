import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satoru Project - 学校になじめなくても、いいじゃん',
  description: 'It\'s okay not to fit in at school.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}