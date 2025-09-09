'use client';

import DNAAnimation from './DNAAnimation';

interface HeroProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Révélez le potentiel de votre organisation',
    subtitle: 'Core-Sense analyse la congruence entre vos valeurs, votre culture et vos pratiques pour optimiser votre performance organisationnelle.',
    cta: 'Découvrir notre approche'
  },
  en: {
    title: 'Reveal your organization\'s potential',
    subtitle: 'Core-Sense analyzes the congruence between your values, culture and practices to optimize your organizational performance.',
    cta: 'Discover our approach'
  }
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8">
              <span className="gradient-text">{t.title}</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            <a
              href="#notre-approche"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              {t.cta}
            </a>
          </div>

          {/* DNA Animation */}
          <div className="flex justify-center lg:justify-end">
            <DNAAnimation />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}