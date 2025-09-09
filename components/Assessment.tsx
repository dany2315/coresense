'use client';

import { useState, useEffect } from 'react';

interface AssessmentProps {
  language: 'fr' | 'en';
}

const assessmentData = {
  fr: {
    categories: [
      {
        name: "DNA AWARENESS",
        questions: [
          "Nos dirigeants formulent clairement notre ADN en moins de 30 secondes",
          "Nous disposons d'un référentiel ADN documenté et partagé",
          "Tous nos collaborateurs sont formés à la maîtrise de l'ADN de la maison",
          "La question \"est-ce cohérent avec notre ADN ?\" est posée naturellement",
          "L'intégration inclut une formation approfondie à notre ADN"
        ]
      },
      {
        name: "DNA ACTIVATION",
        questions: [
          "Notre direction pilote la cohérence ADN dans toutes nos décisions de la stratégie aux opérations",
          "Notre ADN est un élément décisif dans le recrutement et la formation de nos collaborateurs",
          "Notre promesse client, nos offres et nos programmes de relation client sont cohérents avec notre ADN",
          "L'ADN est un input clé dans chacune de nos innovations produits ou services",
          "Toute notre production de contenu (communication, digital, social) est guidée par des critères ADN précis"
        ]
      },
      {
        name: "DNA INCARNATION",
        questions: [
          "Nos dirigeants incarnent visiblement l'ADN dans leurs comportements",
          "Il y a parfaite cohérence entre nos discours et nos actes",
          "Nos collaborateurs prennent des initiatives alignées sur l'ADN",
          "Les équipes osent dire \"non\" à ce qui ne correspond pas à notre identité",
          "Notre leadership inspire la confiance par son authenticité"
        ]
      },
      {
        name: "DNA CONGRUENCE",
        questions: [
          "L'expérience vécue correspond exactement à notre promesse",
          "Tous nos touchpoints délivrent une expérience conforme à notre personnalité",
          "Nos clients nous reconnaissent immédiatement",
          "Notre singularité est préservée sans dérive dans tous nos marchés internationaux et domaines d'activité",
          "Nous avons une parfaite cohérence de ton sur tous supports"
        ]
      },
      {
        name: "DNA CONTROL",
        questions: [
          "Nous évaluons systématiquement la cohérence ADN de nos initiatives",
          "Toutes nos décisions stratégiques sont évaluées au regard de notre identité",
          "La fidélité à l'ADN est un critère d'évaluation formalisé pour nos équipes",
          "Nous suivons des indicateurs précis qui nous alertent sur les risques de dilution de notre ADN",
          "Nous corrigeons rapidement les écarts de congruence"
        ]
      }
    ],
    ratingLabels: ["Pas du tout d'accord", "Plutôt pas d'accord", "Moyennement d'accord", "Plutôt d'accord", "Tout à fait d'accord"],
    ratingScale: ["Jamais", "", "", "", "Toujours"],
    scoringLevels: [
      { range: "100-125", level: "ADN MAÎTRISÉ", percentage: "80-100%", description: "Votre ADN est un véritable levier de croissance, profitabilité et performance opérationnelle. Votre leadership authentique génère adhésion & engagement collaborateurs et optimise votre Brand Equity.", question: "Comment pouvez-vous devenir un modèle de référence pour d'autres entreprises dans votre secteur ?" },
      { range: "75-99", level: "ADN STRUCTURÉ", percentage: "60-79%", description: "Votre ADN est bien défini et commence à générer de la valeur économique et humaine. Des axes d'amélioration existent pour maximiser votre performance opérationnelle.", question: "Ne devez-vous pas rechercher des leviers pour maximiser encore votre performance opérationnelle ?" },
      { range: "50-74", level: "ADN FRAGILE", percentage: "40-59%", description: "Votre ADN existe mais manque de cohérence pour être un véritable outil de croissance et de profitabilité. Un renforcement s'impose.", question: "Quels sont les points de rupture qui empêchent votre ADN de devenir un véritable moteur de croissance ?" },
      { range: "25-49", level: "ADN FLOU", percentage: "20-39%", description: "Votre ADN n'est pas suffisamment défini pour soutenir votre leadership authentique et votre performance économique. Une refondation est nécessaire.", question: "Comment clarifier et structurer votre ADN pour qu'il devienne un véritable atout stratégique ?" },
      { range: "0-24", level: "ADN INEXISTANT", percentage: "0-19%", description: "L'absence d'ADN structuré limite votre potentiel de croissance, profitabilité et transmission d'entreprise. Une construction complète s'impose.", question: "Par où commencer pour révéler et construire l'ADN authentique de votre entreprise ?" }
    ]
  },
  en: {
    categories: [
      {
        name: "DNA AWARENESS",
        questions: [
          "Our leaders clearly formulate our DNA in less than 30 seconds",
          "We have a documented and shared DNA framework",
          "All our employees are trained in mastering our company's DNA",
          "The question \"is this consistent with our DNA?\" is asked naturally",
          "Integration includes thorough training in our DNA"
        ]
      },
      {
        name: "DNA ACTIVATION",
        questions: [
          "Our management drives DNA consistency in all our decisions from strategy to operations",
          "Our DNA is a decisive element in recruiting and training our employees",
          "Our customer promise, offers and customer relationship programs are consistent with our DNA",
          "DNA is a key input in each of our product or service innovations",
          "All our content production (communication, digital, social) is guided by precise DNA criteria"
        ]
      },
      {
        name: "DNA INCARNATION",
        questions: [
          "Our leaders visibly embody DNA in their behaviors",
          "There is perfect consistency between our words and our actions",
          "Our employees take initiatives aligned with DNA",
          "Teams dare to say \"no\" to what doesn't match our identity",
          "Our leadership inspires confidence through its authenticity"
        ]
      },
      {
        name: "DNA CONGRUENCE",
        questions: [
          "The lived experience corresponds exactly to our promise",
          "All our touchpoints deliver an experience consistent with our personality",
          "Our customers recognize us immediately",
          "Our uniqueness is preserved without drift in all our international markets and business areas",
          "We have perfect tone consistency across all media"
        ]
      },
      {
        name: "DNA CONTROL",
        questions: [
          "We systematically evaluate the DNA consistency of our initiatives",
          "All our strategic decisions are evaluated against our identity",
          "Fidelity to DNA is a formalized evaluation criterion for our teams",
          "We track precise indicators that alert us to risks of DNA dilution",
          "We quickly correct congruence gaps"
        ]
      }
    ],
    ratingLabels: ["Strongly disagree", "Somewhat disagree", "Moderately agree", "Somewhat agree", "Strongly agree"],
    ratingScale: ["Never", "", "", "", "Always"],
    scoringLevels: [
      { range: "100-125", level: "DNA MASTERED", percentage: "80-100%", description: "Your DNA is a true lever for growth, profitability and operational performance. Your authentic leadership generates employee adhesion & engagement and optimizes your Brand Equity.", question: "How can you become a reference model for other companies in your sector?" },
      { range: "75-99", level: "DNA STRUCTURED", percentage: "60-79%", description: "Your DNA is well defined and begins to generate economic and human value. Improvement areas exist to maximize your operational performance.", question: "Shouldn't you be looking for levers to further maximize your operational performance?" },
      { range: "50-74", level: "DNA FRAGILE", percentage: "40-59%", description: "Your DNA exists but lacks consistency to be a true tool for growth and profitability. Reinforcement is needed.", question: "What are the breaking points that prevent your DNA from becoming a true growth engine?" },
      { range: "25-49", level: "DNA UNCLEAR", percentage: "20-39%", description: "Your DNA is not sufficiently defined to support your authentic leadership and economic performance. Refoundation is necessary.", question: "How to clarify and structure your DNA so that it becomes a true strategic asset?" },
      { range: "0-24", level: "DNA NON-EXISTENT", percentage: "0-19%", description: "The absence of structured DNA limits your potential for growth, profitability and business transmission. Complete construction is required.", question: "Where to start to reveal and build the authentic DNA of your company?" }
    ]
  }
};

export default function Assessment({ language }: AssessmentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const data = assessmentData[language];
  const totalQuestions = data.categories.length * 5;

  const updateQuestion = () => {
    const categoryIndex = Math.floor(currentQuestionIndex / 5);
    const questionInCategory = currentQuestionIndex % 5;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
      progressFill.style.width = progress + '%';
    }
    if (progressText) {
      progressText.textContent = `Question ${currentQuestionIndex + 1} sur ${totalQuestions}`;
    }
    
    // Update question content
    const questionCategory = document.getElementById('question-category');
    const questionMeta = document.getElementById('question-meta');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    
    if (questionCategory) {
      questionCategory.textContent = data.categories[categoryIndex].name;
    }
    if (questionMeta) {
      questionMeta.textContent = `Question ${questionInCategory + 1}/5`;
    }
    if (questionNumber) {
      questionNumber.textContent = (questionInCategory + 1).toString();
    }
    if (questionText) {
      questionText.textContent = data.categories[categoryIndex].questions[questionInCategory];
    }
    
    // Update rating descriptions
    const ratingLabels = data.ratingLabels;
    for (let i = 0; i < 5; i++) {
      const ratingDesc = document.getElementById(`rating-desc-${i + 1}`);
      if (ratingDesc) {
        ratingDesc.textContent = ratingLabels[i];
      }
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
      if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
      } else {
        prevBtn.classList.remove('hidden');
      }
    }
    
    // Clear previous selection
    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    
    // Show previous answer if exists
    if (answers[currentQuestionIndex]) {
      const selectedBtn = document.querySelector(`.rating-btn:nth-child(${answers[currentQuestionIndex]})`);
      if (selectedBtn) {
        selectedBtn.classList.add('selected');
      }
      if (nextBtn) {
        (nextBtn as HTMLButtonElement).disabled = false;
      }
    } else {
      if (nextBtn) {
        (nextBtn as HTMLButtonElement).disabled = true;
      }
    }
    
    // Update button text for last question
    if (nextBtn) {
      if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = language === 'fr' ? 'Terminer' : 'Finish';
      } else {
        nextBtn.textContent = language === 'fr' ? 'Suivant' : 'Next';
      }
    }
  };

  const selectRating = (rating: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestionIndex]: rating }));
    
    // Update visual selection
    document.querySelectorAll('.rating-btn').forEach(btn => {
      btn.classList.remove('selected');
    });
    const selectedBtn = document.querySelector(`.rating-btn:nth-child(${rating})`);
    if (selectedBtn) {
      selectedBtn.classList.add('selected');
    }
    
    // Enable next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      (nextBtn as HTMLButtonElement).disabled = false;
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      displayResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const displayResults = () => {
    // Calculate total score
    let totalScore = 0;
    for (let i = 0; i < 25; i++) {
      totalScore += answers[i] || 0;
    }
    
    // Determine level
    let level = data.scoringLevels[4]; // Default to lowest
    
    for (let i = 0; i < data.scoringLevels.length; i++) {
      const range = data.scoringLevels[i].range.split('-');
      const min = parseInt(range[0]);
      const max = parseInt(range[1]);
      
      if (totalScore >= min && totalScore <= max) {
        level = data.scoringLevels[i];
        break;
      }
    }
    
    // Update results display
    const scoreDisplay = document.getElementById('score-display');
    const scoreLevel = document.getElementById('score-level');
    const scorePercentage = document.getElementById('score-percentage');
    const scoreDescription = document.getElementById('score-description');
    const scoreQuestion = document.getElementById('score-question');
    
    if (scoreDisplay) scoreDisplay.textContent = totalScore.toString();
    if (scoreLevel) scoreLevel.textContent = level.level;
    if (scorePercentage) scorePercentage.textContent = level.percentage;
    if (scoreDescription) scoreDescription.textContent = level.description;
    if (scoreQuestion) scoreQuestion.textContent = level.question;
    
    // Hide question container and show results
    const questionContainer = document.getElementById('question-container');
    const results = document.getElementById('results');
    
    if (questionContainer) {
      questionContainer.style.display = 'none';
    }
    if (results) {
      results.classList.add('show');
    }
  };

  const restartAssessment = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    
    const questionContainer = document.getElementById('question-container');
    const results = document.getElementById('results');
    
    if (questionContainer) {
      questionContainer.style.display = 'block';
    }
    if (results) {
      results.classList.remove('show');
    }
  };

  useEffect(() => {
    updateQuestion();
  }, [currentQuestionIndex, language]);

  return (
    <>
      <section id="assessment" className="section assessment">
        <div className="container">
          <div className="assessment-container">
            <div className="assessment-header">
              <h2 className="assessment-title" id="assessment-title">DNA Congruence Assessment</h2>
              <p className="assessment-subtitle" id="assessment-subtitle">Évaluez la congruence de votre ADN de marque</p>
              <div className="progress-bar">
                <div className="progress-fill" id="progress-fill"></div>
              </div>
              <div className="progress-text" id="progress-text">Question 1 sur 25</div>
            </div>

            <div className="question-container" id="question-container">
              <div className="question-category" id="question-category">DNA AWARENESS</div>
              <div className="question-meta" id="question-meta">Question 1/5</div>
              <div className="question-content">
                <div className="question-number" id="question-number">1</div>
                <div className="question-text" id="question-text">Nos dirigeants formulent clairement notre ADN en moins de 30 secondes</div>
              </div>

              <div className="rating-scale">
                <span id="scale-never">Jamais</span>
                <span id="scale-always">Toujours</span>
              </div>

              <div className="rating-buttons" id="rating-buttons">
                <button className="rating-btn" onClick={() => selectRating(1)}>1</button>
                <button className="rating-btn" onClick={() => selectRating(2)}>2</button>
                <button className="rating-btn" onClick={() => selectRating(3)}>3</button>
                <button className="rating-btn" onClick={() => selectRating(4)}>4</button>
                <button className="rating-btn" onClick={() => selectRating(5)}>5</button>
              </div>

              <div className="rating-descriptions">
                <div className="rating-desc" id="rating-desc-1">Pas du tout d'accord</div>
                <div className="rating-desc" id="rating-desc-2">Plutôt pas d'accord</div>
                <div className="rating-desc" id="rating-desc-3">Moyennement d'accord</div>
                <div className="rating-desc" id="rating-desc-4">Plutôt d'accord</div>
                <div className="rating-desc" id="rating-desc-5">Tout à fait d'accord</div>
              </div>

              <div className="navigation-buttons">
                <button className="nav-btn hidden" id="prev-btn" onClick={previousQuestion}>Précédent</button>
                <button className="nav-btn" id="next-btn" onClick={nextQuestion}>Suivant</button>
              </div>
            </div>

            <div className="results" id="results" style={{display: 'none'}}>
              <div className="results-header">
                <h3 className="results-title">Vos Résultats</h3>
                <div className="score-container">
                  <div className="score-display" id="score-display"></div>
                  <div className="score-level" id="score-level"></div>
                  <div className="score-percentage" id="score-percentage"></div>
                </div>
                <div className="score-description" id="score-description"></div>
                <div className="score-question" id="score-question"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}