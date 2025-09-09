'use client';

interface UseCasesProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Use Cases',
    cases: [
      {
        icon: '🌍',
        title: 'Expansion Internationale',
        subtitle: 'Marque en forte croissance qui s\'internationalise',
        description: 'Comment préserver son authenticité en accélérant le déploiement tout en s\'adaptant aux cultures locales ? Clarification du framework ADN du cadre d\'autonomie des équipes, et des outils de pilotage du déploiement pour adapter sans diluer, formation de l\'ensemble des équipes internationales.',
        result: 'Efficacité opérationnelle des équipes renforcée, cohérence ADN renforcée sur tous les points de contact, framework de pilotage multilingue pour les outils d\'IA.'
      },
      {
        icon: '🏛',
        title: 'Transmission d\'Entreprise Familiale',
        subtitle: 'Passage de relais intergénérationnel',
        description: 'Comment transmettre l\'ADN aux nouvelles générations et leur donner toute la latitude dont ils ont besoin pour moderniser sans perdre l\'âme de la maison ? Formalisation de l\'ADN et des fondamentaux + clarification du framework ADN et formalisation des outils de transmission et d\'innovation alignée.',
        result: 'Sérénité dans la transmission, lâcher prise des générations de fondateurs, confiance et latitude pour les nouvelles générations.'
      },
      {
        icon: '💎',
        title: 'Intégration M&A',
        subtitle: 'Entreprise récemment acquise ou en phase d\'acquisition',
        description: 'Comment évaluer la compatibilité culturelle de la nouvelle entité et sa capacité à intégrer le nouvel ensemble sans se renier ? Comment préserver/fusionner les cultures et maintenir la différenciation dans le respect des apports de valeurs complémentaires ? Diagnostic de compatibilité + plan d\'intégration culturelle + Clarification du framework ADN commun et des territoires de valeur complémentaires.',
        result: 'Intégration réussie.'
      },
      {
        icon: '⚡',
        title: 'Repositionnement / Rebranding',
        subtitle: 'Gestion de crise pour dérive ADN',
        description: 'Comment se renouveler fortement tout en restant authentique sans perdre ses équipes et ses clients ? Comment réengager ses collaborateurs tout en évitant la dilution de marque ? Clarification du framework ADN + formation de l\'ensemble des collaborateurs, Clarification du territoire de légitimité et d\'innovation, nouveau plan stratégique aligné, plan d\'activation rapide sur tous les touchpoints.',
        result: 'Reprise de confiance du marché, Réengagement des équipes, Plan d\'innovation réaligné, Repositionnement campagne de communication.'
      },
      {
        icon: '🚀',
        title: 'Scale-up et Changement de Management',
        subtitle: 'Start-up/PME en forte croissance',
        description: 'Comment maintenir la culture et l\'ADN malgré la croissance rapide ? Comment onboarder rapidement les nouvelles équipes et les former à l\'appropriation des fondamentaux ? Structuration de l\'identité + outils d\'onboarding + autonomisation équipes + structuration du purpose, mission et vision pour la direction générale, territoire de légitimité pour le renouvellement de l\'offre + accompagnement du positionnement entreprise à mission pour engager les équipes.',
        result: '100% des équipes formées en 1 an, équipes réengagées, vision managériale partagée déployée.'
      },
      {
        icon: '📱',
        title: 'Passage à l\'Échelle Creator Economy',
        subtitle: 'Marque de luxe dans la cosmétique',
        description: 'Comment sélectionner, former et contrôler des centaines de micro-influenceurs sans diluer l\'ADN de marque ? Comment limiter le risque de dilution massive avec la multiplication des créateurs de contenu et maintenir la cohérence sur des milliers de posts/vidéos ? Critères de sélection des influenceurs "DNA-fit", Framework de formation accélérée à l\'ADN, Guidelines créatives automatisées, contrôle qualité des contenus, dashboard de suivi de la congruence par créateur.',
        result: 'Des influenceurs rapidement opérationnels et dans l\'axe de l\'ADN de la marque, un suivi et un pilotage consolidé pour les micro-influenceurs.'
      }
    ]
  },
  en: {
    title: 'Use Cases',
    cases: [
      {
        icon: '🌍',
        title: 'International Expansion',
        subtitle: 'Fast-growing brand going international',
        description: 'How to preserve authenticity while accelerating deployment and adapting to local cultures? Clarification of the DNA framework for team autonomy and deployment management tools to adapt without diluting, training of all international teams.',
        result: 'Enhanced operational efficiency of teams, strengthened DNA consistency across all touchpoints, multilingual management framework for AI tools.'
      },
      {
        icon: '🏛',
        title: 'Family Business Succession',
        subtitle: 'Intergenerational handover',
        description: 'How to pass on the DNA to new generations and give them the latitude they need to modernize without losing the soul of the house? Formalization of DNA and fundamentals + clarification of DNA framework and formalization of transmission and aligned innovation tools.',
        result: 'Serenity in transmission, letting go of founder generations, trust and latitude for new generations.'
      },
      {
        icon: '💎',
        title: 'M&A Integration',
        subtitle: 'Recently acquired company or in acquisition phase',
        description: 'How to assess the cultural compatibility of the new entity and its ability to integrate the new whole without denying itself? How to preserve/merge cultures and maintain differentiation while respecting complementary value contributions? Compatibility diagnosis + cultural integration plan + Clarification of common DNA framework and complementary value territories.',
        result: 'Successful integration.'
      },
      {
        icon: '⚡',
        title: 'Repositioning / Rebranding',
        subtitle: 'Crisis management for DNA drift',
        description: 'How to renew strongly while remaining authentic without losing teams and customers? How to re-engage employees while avoiding brand dilution? DNA framework clarification + training of all employees, Clarification of legitimacy and innovation territory, new aligned strategic plan, rapid activation plan on all touchpoints.',
        result: 'Market confidence recovery, Team re-engagement, Realigned innovation plan, Communication campaign repositioning.'
      },
      {
        icon: '🚀',
        title: 'Scale-up and Management Change',
        subtitle: 'Fast-growing start-up/SME',
        description: 'How to maintain culture and DNA despite rapid growth? How to quickly onboard new teams and train them in the appropriation of fundamentals? Identity structuring + onboarding tools + team empowerment + structuring of purpose, mission and vision for general management, legitimacy territory for offer renewal + support for mission-driven company positioning to engage teams.',
        result: '100% of teams trained in 1 year, re-engaged teams, shared management vision deployed.'
      },
      {
        icon: '📱',
        title: 'Creator Economy Scaling',
        subtitle: 'Luxury brand in cosmetics',
        description: 'How to select, train and control hundreds of micro-influencers without diluting brand DNA? How to limit the risk of massive dilution with the multiplication of content creators and maintain consistency across thousands of posts/videos? "DNA-fit" influencer selection criteria, Accelerated DNA training framework, Automated creative guidelines, content quality control, creator congruence tracking dashboard.',
        result: 'Influencers quickly operational and aligned with brand DNA, consolidated tracking and management for micro-influencers.'
      }
    ]
  }
};

export default function UseCases({ language }: UseCasesProps) {
  const t = translations[language];

  return (
    <>
      <section id="usecases" className="section">
        <div className="container">
          <h2 className="section-title" id="usecases-title">{t.title}</h2>
          <div className="usecases-grid">
          {t.cases.map((useCase, index) => (
              <div key={index} className="usecase-card">
                <span className="usecase-icon">{useCase.icon}</span>
                <h3 id={`case${index + 1}-title`}>{useCase.title}</h3>
                <p className="usecase-subtitle" id={`case${index + 1}-subtitle`}>{useCase.subtitle}</p>
                <p id={`case${index + 1}-desc`}>{useCase.description}</p>
                <div className="usecase-result">
                  <strong>Résultat :</strong> <span id={`case${index + 1}-result`}>{useCase.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}