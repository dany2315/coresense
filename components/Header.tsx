'use client';

import { useState } from 'react';

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

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <svg className="logo" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#000000', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#1a1a1a', stopOpacity:1}} />
                  </linearGradient>

                </defs>
                <text x="20" y="80" fontFamily="Inter, sans-serif" fontSize="52" fontWeight="700" fill="url(#logoGradient)" filter="url(#logoShadow)" stroke="#000" strokeWidth="1" style={{ filter: "drop-shadow(2px 4px 3px rgba(0,0,0,0.3))" }}>Core-</text>
                <text x="20" y="140" fontFamily="Inter, sans-serif" fontSize="40" fontWeight="300" fontStyle="italic" fill="url(#logoGradient)" filter="url(#logoShadow)" stroke="#000" strokeWidth="1" style={{ filter: "drop-shadow(2px 4px 3px rgba(0,0,0,0.3))" }}>Sense</text>
                <path d="M10 160 L60 120" stroke="#000" strokeWidth="4" strokeLinecap="round" filter="url(#logoShadow)" style={{ filter: "drop-shadow(2px 4px 3px rgba(0,0,0,0.3))" }}/>
              </svg>
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