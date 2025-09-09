'use client';

interface ApproachProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Notre Approche',
    subtitle: 'Une méthodologie éprouvée pour révéler et optimiser la congruence organisationnelle',
    blocks: [
      {
        title: 'Analyse DNA',
        description: 'Évaluation complète de votre ADN organisationnel à travers 5 dimensions clés'
      },
      {
        title: 'Diagnostic',
        description: 'Identification des écarts entre valeurs déclarées et pratiques réelles'
      },
      {
        title: 'Stratégie',
        description: 'Plan d\'action personnalisé pour améliorer la congruence organisationnelle'
      },
      {
        title: 'Accompagnement',
        description: 'Suivi et coaching pour assurer la transformation durable'
      }
    ]
  },
  en: {
    title: 'Our Approach',
    subtitle: 'A proven methodology to reveal and optimize organizational congruence',
    blocks: [
      {
        title: 'DNA Analysis',
        description: 'Complete assessment of your organizational DNA through 5 key dimensions'
      },
      {
        title: 'Diagnosis',
        description: 'Identification of gaps between declared values and actual practices'
      },
      {
        title: 'Strategy',
        description: 'Personalized action plan to improve organizational congruence'
      },
      {
        title: 'Support',
        description: 'Follow-up and coaching to ensure sustainable transformation'
      }
    ]
  }
};

export default function Approach({ language }: ApproachProps) {
  const t = translations[language];

  return (
    <section id="notre-approche" className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Approach Blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.blocks.map((block, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-lg flex items-center justify-center mb-6">
                <span className="text-black font-bold text-xl lg:text-2xl">{index + 1}</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                {block.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}