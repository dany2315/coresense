'use client';

interface ApproachProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Notre Approche',
    emotional: {
      title: 'Levier Émotionnel',
      description: 'Nous révélons le levier émotionnel de votre ADN, celui qui crée l\'attachement et la fidélité de vos clients. C\'est le cœur battant de votre marque, sa singularité profonde.'
    },
    rational: {
      title: 'Levier Rationnel',
      description: 'Nous activons le levier rationnel de votre ADN, pour bâtir la crédibilité, la performance et la croissance durable de votre entreprise.'
    },
    holistic: {
      title: 'Approche Holistique',
      description: 'Nous orchestrons l\'ensemble pour créer une expérience cohérente et distinctive à chaque point de contact. C\'est l\'équilibre parfait entre émotion et raison, entre authenticité et performance.'
    },
    guidance: {
      title: 'Guidance Stratégique et Opérationnelle',
      description: 'Nous transformons votre ADN en boussole stratégique et opérationnelle, pour orienter vos décisions et piloter vos actions. C\'est votre guide dans la complexité du marché, votre ancrage dans la tempête des tendances.'
    }
  },
  en: {
    title: 'Our Approach',
    emotional: {
      title: 'Emotional Lever',
      description: 'We reveal the emotional lever of your DNA, the one that creates attachment and loyalty from your customers. It\'s the beating heart of your brand, its profound uniqueness.'
    },
    rational: {
      title: 'Rational Lever',
      description: 'We activate the rational lever of your DNA, to build credibility, performance and sustainable growth of your company.'
    },
    holistic: {
      title: 'Holistic Approach',
      description: 'We orchestrate everything to create a coherent and distinctive experience at every touchpoint. It\'s the perfect balance between emotion and reason, between authenticity and performance.'
    },
    guidance: {
      title: 'Strategic and Operational Guidance',
      description: 'We transform your DNA into a strategic and operational compass, to guide your decisions and steer your actions. It\'s your guide in market complexity, your anchor in the storm of trends.'
    }
  }
};

export default function Approach({ language }: ApproachProps) {
  const t = translations[language];

  return (
    <>
      <section id="approach" className="section approach">
        <div className="container">
          <h2 className="section-title" id="approach-title">{t.title}</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <span className="approach-icon">♥</span>
              <h3 id="emotional-title">{t.emotional.title}</h3>
              <p id="emotional-desc">{t.emotional.description}</p>
            </div>
            <div className="approach-card">
              <span className="approach-icon">⚖</span>
              <h3 id="rational-title">{t.rational.title}</h3>
              <p id="rational-desc">{t.rational.description}</p>
            </div>
            <div className="approach-card">
              <span className="approach-icon">↻</span>
              <h3 id="holistic-title">{t.holistic.title}</h3>
              <p id="holistic-desc">{t.holistic.description}</p>
            </div>
            <div className="approach-card">
              <span className="approach-icon">⊕</span>
              <h3 id="guidance-title">{t.guidance.title}</h3>
              <p id="guidance-desc">{t.guidance.description}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}