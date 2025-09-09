'use client';

interface ServicesProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Services',
    services: [
      {
        icon: '⊕',
        title: 'DNA Compass',
        description: 'Notre méthodologie pour révéler, modéliser et activer l\'ADN unique de votre entreprise.'
      },
      {
        icon: '↻',
        title: 'Transformation Marketing',
        description: 'Alignement de votre stratégie marketing avec votre ADN pour une croissance authentique et durable.'
      },
      {
        icon: '👥',
        title: 'Leadership & Engagement',
        description: 'Mobilisation de vos équipes autour de votre ADN pour une culture d\'entreprise forte et cohérente.'
      },
      {
        icon: '📊',
        title: 'Mesure & Analytics',
        description: 'Préserver et amplifier votre capital marque avec des indicateurs précis et actionnables.'
      }
    ],
    process: {
      title: 'Processus',
      steps: [
        {
          number: '1',
          title: 'Caractériser',
          description: 'Nous explorons votre histoire, vos valeurs et vos singularités pour révéler votre ADN authentique.'
        },
        {
          number: '2',
          title: 'Engager',
          description: 'Nous impliquons vos équipes dans la définition et l\'appropriation de votre ADN.'
        },
        {
          number: '3',
          title: 'Guider',
          description: 'Nous transformons votre ADN en boussole stratégique pour orienter vos décisions.'
        },
        {
          number: '4',
          title: 'Mesurer',
          description: 'Nous évaluons l\'impact de votre ADN sur votre performance business et votre Brand Equity.'
        }
      ]
    }
  },
  en: {
    title: 'Services',
    services: [
      {
        icon: '⊕',
        title: 'DNA Compass',
        description: 'Our methodology to reveal, model and activate the unique DNA of your company.'
      },
      {
        icon: '↻',
        title: 'Marketing Transformation',
        description: 'Alignment of your marketing strategy with your DNA for authentic and sustainable growth.'
      },
      {
        icon: '👥',
        title: 'Leadership & Engagement',
        description: 'Mobilizing your teams around your DNA for a strong and coherent corporate culture.'
      },
      {
        icon: '📊',
        title: 'Measurement & Analytics',
        description: 'Preserve and amplify your brand equity with precise and actionable indicators.'
      }
    ],
    process: {
      title: 'Process',
      steps: [
        {
          number: '1',
          title: 'Characterize',
          description: 'We explore your history, values and singularities to reveal your authentic DNA.'
        },
        {
          number: '2',
          title: 'Engage',
          description: 'We involve your teams in defining and appropriating your DNA.'
        },
        {
          number: '3',
          title: 'Guide',
          description: 'We transform your DNA into a strategic compass to guide your decisions.'
        },
        {
          number: '4',
          title: 'Measure',
          description: 'We evaluate the impact of your DNA on your business performance and Brand Equity.'
        }
      ]
    }
  }
};

export default function Services({ language }: ServicesProps) {
  const t = translations[language];

  return (
    <>
      <section id="services" className="section services">
        <div className="container">
          <h2 className="section-title" id="services-title">{t.title}</h2>
          <div className="services-grid">
            {t.services.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h3 id={`service${index + 1}-title`}>{service.title}</h3>
                <p id={`service${index + 1}-desc`}>{service.description}</p>
              </div>
            ))}
          </div>

          <h3 className="section-title" id="process-title" style={{fontSize: '2rem', marginTop: '60px', marginBottom: '40px'}}>{t.process.title}</h3>
          <div className="process-grid">
            {t.process.steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h4 id={`step${index + 1}-title`}>{step.title}</h4>
                  <p id={`step${index + 1}-desc`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}