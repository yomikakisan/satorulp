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
        url: 'https://yomikakisan.github.io/satorulp/images/ogp-card.jpg?v=1750650479',
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
    description: 'サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。Web3の世界で新しい価値観と仲間に出会える場所を作ります。',
    images: ['https://yomikakisan.github.io/satorulp/images/ogp-card.jpg?v=1750650479'],
    creator: '@yomikakisan',
    site: '@yomikakisan',
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
      <head>
        {/* Twitter Card 追加設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yomikakisan" />
        <meta name="twitter:creator" content="@yomikakisan" />
        <meta name="twitter:title" content="Satoru Project - 学校になじめなくても、いいじゃん" />
        <meta name="twitter:description" content="サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。Web3の世界で新しい価値観と仲間に出会える場所を作ります。" />
        <meta name="twitter:image" content="https://yomikakisan.github.io/satorulp/images/ogp-card.jpg?v=1750650479" />
        <meta name="twitter:image:alt" content="Satoru Project - 学校になじめなくても、いいじゃん" />
        
        {/* Facebook OG 追加設定 */}
        <meta property="og:url" content="https://yomikakisan.github.io/satorulp/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Satoru Project - 学校になじめなくても、いいじゃん" />
        <meta property="og:description" content="サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。Web3の世界で新しい価値観と仲間に出会える場所を作ります。" />
        <meta property="og:image" content="https://yomikakisan.github.io/satorulp/images/ogp-card.jpg?v=1750650479" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Satoru Project" />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}