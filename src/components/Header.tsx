'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  language: 'fr' | 'en'
  setLanguage: (lang: 'fr' | 'en') => void
}

const translations = {
  fr: {
    approach: 'Notre Approche',
    useCases: 'Use Cases',
    services: 'Services',
    assessment: 'Assessment DNA'
  },
  en: {
    approach: 'Our Approach',
    useCases: 'Use Cases',
    services: 'Services',
    assessment: 'DNA Assessment'
  }
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Core-Sense"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#notre-approche" className="text-white/80 hover:text-white transition-colors duration-300">
              {t.approach}
            </a>
            <a href="#use-cases" className="text-white/80 hover:text-white transition-colors duration-300">
              {t.useCases}
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors duration-300">
              {t.services}
            </a>
            <a href="#assessment" className="text-white/80 hover:text-white transition-colors duration-300">
              {t.assessment}
            </a>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-sm transition-colors duration-300 ${
                  language === 'fr' ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                FR
              </button>
              <span className="text-white/40">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm transition-colors duration-300 ${
                  language === 'en' ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a
                href="#notre-approche"
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.approach}
              </a>
              <a
                href="#use-cases"
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.useCases}
              </a>
              <a
                href="#services"
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.services}
              </a>
              <a
                href="#assessment"
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.assessment}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}