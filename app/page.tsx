'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
}

// Hero Section Component
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <video 
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/images/hero.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/40" />
    
    {/* Logo */}
    <div className="absolute top-8 left-8 z-20">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <h1 className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: 'serif' }}>
          サトルプロジェクト
        </h1>
      </div>
    </div>
    
    <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="space-y-12"
      >
        <motion.h1 
          variants={textReveal}
          className="text-hero font-black text-white leading-none tracking-tight"
        >
          学校になじめなくても、
          <br />
          <span className="block mt-4">いいじゃん</span>
        </motion.h1>
        
        <motion.div variants={textReveal} className="pt-8">
          <a
            href="https://discord.com/channels/1000922162741379086/1086515947885580359"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-white/90 text-black text-xl font-bold px-12 py-6 transition-all duration-300 hover:scale-105 border-2 border-white"
          >
            Discordに参加する
          </a>
        </motion.div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70">
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-center"
      >
        <div className="w-px h-12 bg-white/50 mx-auto mb-4"></div>
        <p className="text-sm tracking-widest">SCROLL</p>
      </motion.div>
    </div>
  </section>
)

// About Section Component
const AboutSection = () => (
  <section className="py-32 px-8 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="grid lg:grid-cols-2 gap-20 items-center"
      >
        <motion.div variants={fadeInUp} className="space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-px bg-accent"></div>
            <h2 className="text-display font-black text-foreground">
              私たちのミッション
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted leading-relaxed font-light">
            <p>
              サトルプロジェクトは、学校や社会になじめない子どもたちを支援するプロジェクトです。
            </p>
            <p>
              さとりの妖怪のサトルは、学校に馴染めず不登校を経験。社会に出てからも馴染めない日々を過ごしました。
              しかし、Web3の世界で多くの仲間と出会い、個性を活かせる場所を見つけることができました。
            </p>
            <p>
              そんな体験から生まれたのがこのプロジェクト。学校に馴染めない子どもたちが、
              新しい価値観と仲間に出会える場所を作りたいと願っています。
            </p>
            <p className="text-accent font-medium">
              "子どものような優しさ" を大切に、共感と理解の輪を広げていきます。
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="relative">
          <div className="aspect-[4/3] overflow-hidden border border-muted/20">
            <Image
              src="/images/about.jpg"
              alt="サトル & 仲間たち"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Steps Section Component
const StepsSection = () => (
  <section className="py-32 px-8 bg-foreground">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="space-y-20"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="w-16 h-px bg-background mx-auto"></div>
          <h2 className="text-display font-black text-background">
            3つのステップ
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { 
              number: "01", 
              title: "気づく", 
              description: "マイノリティの理解 社会に馴染めないからこその個性がある",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )
            },
            { 
              number: "02", 
              title: "つながる", 
              description: "社会不適合は部分不適合 新しい仲間と新天地へ",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            { 
              number: "03", 
              title: "広げる", 
              description: "アップデートした価値観をSNSで発信してあなたもクリエイター",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center space-y-6"
            >
              <div className="space-y-4">
                <div className="w-24 h-24 border border-background/20 mx-auto flex items-center justify-center bg-background/5 hover:bg-background/10 transition-all duration-300">
                  <div className="text-background">{item.icon}</div>
                </div>
                <div className="text-background/60 text-sm tracking-widest font-light">
                  STEP {item.number}
                </div>
              </div>
              
              <h3 className="text-title font-bold text-background">
                {item.title}
              </h3>
              
              <p className="text-background/70 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Benefits Section Component
const BenefitsSection = () => (
  <section className="py-32 px-8 bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="space-y-20"
      >
        <motion.div variants={fadeInUp} className="text-center space-y-4">
          <div className="w-16 h-px bg-accent mx-auto"></div>
          <h2 className="text-display font-black text-foreground">
            参加する理由
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { 
              title: "自分らしさ", 
              description: "ありのままの自分を受け入れる環境 #馴染めないエピソードをSNSに投稿",
              symbol: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )
            },
            { 
              title: "仲間との絆", 
              description: "理解し合える仲間との出会い #Discordで同じ悩みを持つ人と連絡",
              symbol: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              )
            },
            { 
              title: "成長機会", 
              description: "新しい可能性を見つける場 #Web3・クリエイターエコノミーで新しい働き方",
              symbol: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 1.193M21.75 18l-2.558-2.558a9.93 9.93 0 00-.953-10.535l-1.62-1.62C15.204 1.874 13.632 1.5 12 1.5s-3.204.374-4.62 1.787L5.76 4.907a9.93 9.93 0 00-.953 10.535L2.25 18z" />
                </svg>
              )
            },
            { 
              title: "創造性", 
              description: "独自のアイデアを形にする力 #NFTアートや動画で自分らしさを表現",
              symbol: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center space-y-6 p-8 border border-muted/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 border border-muted/20 mx-auto flex items-center justify-center bg-background hover:border-accent/50 transition-all duration-300 group">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">{benefit.symbol}</div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

// Join Section Component
const JoinSection = () => (
  <section className="py-32 px-8 bg-foreground">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="space-y-12"
      >
        <motion.div variants={textReveal} className="space-y-6">
          <div className="w-16 h-px bg-background mx-auto"></div>
          <h2 className="text-display font-black text-background leading-tight">
            学校へ行かないを認め合う
            <br />
            未来へ
          </h2>
        </motion.div>
        
        
        <motion.div 
          variants={textReveal}
          className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
        >
          <a
            href="https://discord.com/channels/1000922162741379086/1086515947885580359"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background hover:bg-transparent text-foreground hover:text-background border-2 border-background font-bold px-8 py-4 transition-all duration-300"
          >
            Discord で参加
          </a>
          <a
            href="https://x.com/ninjachildren"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-background text-background hover:text-foreground border-2 border-background font-bold px-8 py-4 transition-all duration-300"
          >
            X で フォロー
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

// Footer Component
const Footer = () => (
  <footer className="bg-background py-20 px-8 border-t border-muted/10">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="text-center space-y-12"
      >
        <motion.div variants={fadeInUp} className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground tracking-wide">サトルプロジェクト</h3>
          <p className="text-muted font-light">学校になじめなくても、いいじゃん</p>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-12 text-muted"
        >
          <a 
            href="https://cryptoninja-children.studio.site/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-light tracking-wide"
          >
            CNC
          </a>
          <a 
            href="https://www.ninja-dao.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-light tracking-wide"
          >
            NINJA DAO
          </a>
          <a 
            href="https://ninjaterakoya.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors font-light tracking-wide"
          >
            ニンジャ寺子屋
          </a>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="pt-12 border-t border-muted/10">
          <p className="text-muted/60 text-sm font-light tracking-wide">
            © 2024 SATORU PROJECT. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </footer>
)

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <StepsSection />
      <BenefitsSection />
      <JoinSection />
      <Footer />
    </main>
  )
}