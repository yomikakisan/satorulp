import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://yomikakisan.github.io'),
  title: 'Satoru Project - 学校になじめなくても、いいじゃん',
  description: 'サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。Web3の世界で新しい価値観と仲間に出会える場所を作ります。',
  keywords: ['不登校', '学校', '支援', 'Web3', 'コミュニティ', 'サトル', 'Discord'],
  authors: [{ name: 'Satoru Project' }],
  openGraph: {
    title: 'Satoru Project - 学校になじめなくても、いいじゃん',
    description: 'サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。Web3の世界で新しい価値観と仲間に出会える場所を作ります。',
    url: 'https://yomikakisan.github.io/satorulp',
    siteName: 'Satoru Project',
    images: [
      {
        url: '/satorulp/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Satoru Project - 学校になじめなくても、いいじゃん',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Satoru Project - 学校になじめなくても、いいじゃん',
    description: 'サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。',
    images: ['/satorulp/images/hero.jpg'],
    creator: '@ninjachildren',
  },
  robots: {
    index: true,
    follow: true,
  },
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