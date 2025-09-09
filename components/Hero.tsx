'use client';

import { useEffect, useRef } from 'react';

interface HeroProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Révéler et Activer l\'ADN<br>de votre entreprise',
    subtitle: 'Notre méthodologie révèle, modélise et active l\'ADN unique pour faire croître la valeur patrimoniale, économique et humaine de votre entreprise.'
  },
  en: {
    title: 'Reveal and Activate the DNA<br>of your company',
    subtitle: 'Our methodology reveals, models and activates the unique DNA to grow the patrimonial, economic and human value of your company.'
  }
};

export default function Hero({ language }: HeroProps) {
  const t = translations[language];
  const dnaHelixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initDNAHelix = () => {
      const helixContainer = document.getElementById('dna-double-helix');
      if (!helixContainer) return;

      // Clear existing content
      helixContainer.innerHTML = '';

      // Create two helix strands
      const strand1 = document.createElement('div');
      const strand2 = document.createElement('div');
      strand1.className = 'helix-strand';
      strand2.className = 'helix-strand';

      // Generate helix points and bases
      const numPoints = 20;
      const radius = 80;
      const height = 280;

      for (let i = 0; i < numPoints; i++) {
        const angle1 = (i / numPoints) * Math.PI * 4; // 2 full rotations
        const angle2 = angle1 + Math.PI; // Opposite strand
        const y = (i / numPoints) * height;

        // Strand 1 point
        const point1 = document.createElement('div');
        point1.className = 'helix-point';
        const x1 = Math.cos(angle1) * radius + 150;
        const z1 = Math.sin(angle1) * radius;
        point1.style.left = x1 + 'px';
        point1.style.top = y + 'px';
        point1.style.transform = `translateZ(${z1}px)`;
        strand1.appendChild(point1);

        // Strand 2 point
        const point2 = document.createElement('div');
        point2.className = 'helix-point';
        const x2 = Math.cos(angle2) * radius + 150;
        const z2 = Math.sin(angle2) * radius;
        point2.style.left = x2 + 'px';
        point2.style.top = y + 'px';
        point2.style.transform = `translateZ(${z2}px)`;
        strand2.appendChild(point2);

        // Create base connections every 3rd point
        if (i % 3 === 0 && i < numPoints - 3) {
          const base = document.createElement('div');
          base.className = 'helix-base';
          const baseWidth = Math.abs(x2 - x1);
          const baseLeft = Math.min(x1, x2);
          base.style.width = baseWidth + 'px';
          base.style.left = baseLeft + 'px';
          base.style.top = y + 'px';
          base.style.transform = `translateZ(${(z1 + z2) / 2}px)`;
          helixContainer.appendChild(base);
        }
      }

      helixContainer.appendChild(strand1);
      helixContainer.appendChild(strand2);
    };

    // Initialize DNA helix
    initDNAHelix();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content ">
            <div className="hero-text">
              <h1 dangerouslySetInnerHTML={{ __html: t.title }} />
              <p>{t.subtitle}</p>
            </div>
            <div className="hero-visual">
              <div className="dna-container">
                <div className="dna-helix" id="dna-helix">
                  <div className="dna-double-helix" id="dna-double-helix">
                    {/* La double hélice sera générée par JavaScript */}
                  </div>
                </div>
                <div className="keywords-cloud" id="keywords-cloud">
                  <div className="keyword">Croissance</div>
                  <div className="keyword">Profitabilité</div>
                  <div className="keyword">Performance Opérationnelle</div>
                  <div className="keyword">Leadership Authentique</div>
                  <div className="keyword">Transmission d'Entreprise</div>
                  <div className="keyword">Adhésion & Engagement</div>
                  <div className="keyword">Brand Equity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}