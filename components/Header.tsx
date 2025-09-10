'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/useIsMobile';

interface HeaderProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

const translations = {
  fr: {
    approach: 'Notre Approche',
    vision: 'Vision',
    useCases: 'Use Cases',
    assessment: 'Assessment',
    contact: 'Contact'
  },
  en: {
    approach: 'Our Approach',
    vision: 'Vision',
    useCases: 'Use Cases',
    assessment: 'Assessment',
    contact: 'Contact'
  }
};

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isMobile = useIsMobile();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <Image src="/logo.png" alt="Core-Sense" width={isMobile ? 140 : 280} height={isMobile ? 100 : 140} />
              <span className="tagline">Turn DNA into Strategic Asset</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="nav desktop-nav">
              <a href="#approach" className="nav-link">{translations[language].approach}</a>
              <a href="#vision" className="nav-link">{translations[language].vision}</a>
              <a href="#usecases" className="nav-link">{translations[language].useCases}</a>
              <a href="#assessment" className="nav-link">{translations[language].assessment}</a>
              <a href="#contact" className="nav-link">{translations[language].contact}</a>
              <button className="language-toggle" onClick={toggleLanguage}>
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              <a href="#approach" className="mobile-nav-link" onClick={closeMobileMenu}>
                {translations[language].approach}
              </a>
              <a href="#vision" className="mobile-nav-link" onClick={closeMobileMenu}>
                {translations[language].vision}
              </a>
              <a href="#usecases" className="mobile-nav-link" onClick={closeMobileMenu}>
                {translations[language].useCases}
              </a>
              <a href="#assessment" className="mobile-nav-link" onClick={closeMobileMenu}>
                {translations[language].assessment}
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                {translations[language].contact}
              </a>
              <button className="mobile-language-toggle" onClick={toggleLanguage}>
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
          </nav>
        </div>
      </header>

    </>
  );
}