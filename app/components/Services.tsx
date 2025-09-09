'use client';

interface ServicesProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Services',
    subtitle: 'Une gamme complète de services pour optimiser votre congruence organisationnelle',
    services: [
      {
        title: 'Assessment DNA',
        description: 'Évaluation complète de votre ADN organisationnel',
        features: ['25 questions ciblées', 'Analyse 5 dimensions', 'Rapport détaillé', 'Recommandations']
      },
      {
        title: 'Diagnostic Approfondi',
        description: 'Analyse détaillée des écarts de congruence',
        features: ['Entretiens individuels', 'Observations terrain', 'Analyse documentaire', 'Cartographie des écarts']
      },
      {
        title: 'Plan d\'Action',
        description: 'Stratégie personnalisée de transformation',
        features: ['Roadmap détaillée', 'Priorités définies', 'KPIs mesurables', 'Timeline réaliste']
      },
      {
        title: 'Accompagnement',
        description: 'Coaching et suivi de la transformation',
        features: ['Coaching dirigeants', 'Formation équipes', 'Suivi régulier', 'Ajustements continus']
      }
    ],
    process: {
      title: 'Notre Processus',
      steps: [
        { title: 'Découverte', description: 'Analyse initiale et définition des objectifs' },
        { title: 'Assessment', description: 'Évaluation complète de l\'ADN organisationnel' },
        { title: 'Diagnostic', description: 'Identification des écarts et opportunités' },
        { title: 'Stratégie', description: 'Élaboration du plan de transformation' },
        { title: 'Mise en œuvre', description: 'Accompagnement de la transformation' },
        { title: 'Suivi', description: 'Mesure des résultats et ajustements' }
      ]
    }
  },
  en: {
    title: 'Services',
    subtitle: 'A complete range of services to optimize your organizational congruence',
    services: [
      {
        title: 'DNA Assessment',
        description: 'Complete evaluation of your organizational DNA',
        features: ['25 targeted questions', '5 dimensions analysis', 'Detailed report', 'Recommendations']
      },
      {
        title: 'In-depth Diagnosis',
        description: 'Detailed analysis of congruence gaps',
        features: ['Individual interviews', 'Field observations', 'Document analysis', 'Gap mapping']
      },
      {
        title: 'Action Plan',
        description: 'Personalized transformation strategy',
        features: ['Detailed roadmap', 'Defined priorities', 'Measurable KPIs', 'Realistic timeline']
      },
      {
        title: 'Support',
        description: 'Coaching and transformation follow-up',
        features: ['Executive coaching', 'Team training', 'Regular follow-up', 'Continuous adjustments']
      }
    ],
    process: {
      title: 'Our Process',
      steps: [
        { title: 'Discovery', description: 'Initial analysis and objective definition' },
        { title: 'Assessment', description: 'Complete organizational DNA evaluation' },
        { title: 'Diagnosis', description: 'Gap and opportunity identification' },
        { title: 'Strategy', description: 'Transformation plan development' },
        { title: 'Implementation', description: 'Transformation support' },
        { title: 'Follow-up', description: 'Results measurement and adjustments' }
      ]
    }
  }
};

export default function Services({ language }: ServicesProps) {
  const t = translations[language];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-900">
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

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 lg:mb-32">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-all duration-300"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-white">
            {t.process.title}
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg lg:text-xl">{index + 1}</span>
              </div>
              <h4 className="text-lg lg:text-xl font-bold mb-2 text-white">
                {step.title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}