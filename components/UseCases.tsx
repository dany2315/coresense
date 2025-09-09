'use client';

interface UseCasesProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Use Cases',
    subtitle: 'Découvrez comment Core-Sense transforme les organisations',
    cases: [
      {
        title: 'Transformation Culturelle',
        description: 'Accompagnement d\'une entreprise tech dans sa transformation culturelle post-fusion',
        result: '+40% engagement collaborateurs'
      },
      {
        title: 'Alignement Stratégique',
        description: 'Réalignement des valeurs et pratiques d\'une scale-up en hypercroissance',
        result: '+60% rétention talents'
      },
      {
        title: 'Performance Équipe',
        description: 'Optimisation de la cohésion et performance d\'équipes dirigeantes',
        result: '+35% efficacité décisionnelle'
      },
      {
        title: 'Innovation Culture',
        description: 'Développement d\'une culture d\'innovation dans un groupe industriel',
        result: '+50% projets innovants'
      },
      {
        title: 'Change Management',
        description: 'Accompagnement du changement lors d\'une restructuration majeure',
        result: '+70% adhésion au changement'
      },
      {
        title: 'Leadership Development',
        description: 'Développement du leadership authentique des managers',
        result: '+45% satisfaction équipes'
      }
    ]
  },
  en: {
    title: 'Use Cases',
    subtitle: 'Discover how Core-Sense transforms organizations',
    cases: [
      {
        title: 'Cultural Transformation',
        description: 'Supporting a tech company in its post-merger cultural transformation',
        result: '+40% employee engagement'
      },
      {
        title: 'Strategic Alignment',
        description: 'Realigning values and practices of a hypergrowth scale-up',
        result: '+60% talent retention'
      },
      {
        title: 'Team Performance',
        description: 'Optimizing cohesion and performance of leadership teams',
        result: '+35% decision-making efficiency'
      },
      {
        title: 'Innovation Culture',
        description: 'Developing an innovation culture in an industrial group',
        result: '+50% innovative projects'
      },
      {
        title: 'Change Management',
        description: 'Supporting change during a major restructuring',
        result: '+70% change adoption'
      },
      {
        title: 'Leadership Development',
        description: 'Developing authentic leadership in managers',
        result: '+45% team satisfaction'
      }
    ]
  }
};

export default function UseCases({ language }: UseCasesProps) {
  const t = translations[language];

  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-black">
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

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {t.cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                {useCase.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm inline-block">
                {useCase.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}