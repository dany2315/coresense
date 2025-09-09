'use client';

import { useState } from 'react';

interface AssessmentProps {
  language: 'fr' | 'en';
}

const translations = {
  fr: {
    title: 'Assessment DNA',
    subtitle: 'Évaluez la congruence de votre organisation en 5 minutes',
    startButton: 'Commencer l\'Assessment',
    categories: [
      'Valeurs & Culture',
      'Leadership & Management',
      'Communication & Transparence',
      'Innovation & Adaptabilité',
      'Performance & Résultats'
    ],
    questions: [
      // Valeurs & Culture
      ['Les valeurs de l\'organisation sont clairement définies et communiquées', 'Les collaborateurs connaissent et comprennent les valeurs', 'Les valeurs guident réellement les décisions quotidiennes', 'Les comportements observés reflètent les valeurs déclarées', 'La culture d\'entreprise favorise l\'engagement des collaborateurs'],
      // Leadership & Management
      ['Les leaders incarnent les valeurs de l\'organisation', 'Le style de management est cohérent avec la culture', 'Les décisions de leadership sont transparentes et justifiées', 'Les managers développent leurs équipes selon les valeurs', 'La vision stratégique est partagée et comprise'],
      // Communication & Transparence
      ['La communication interne est ouverte et honnête', 'Les informations importantes sont partagées équitablement', 'Les feedbacks sont donnés de manière constructive', 'Les conflits sont gérés de manière transparente', 'Les canaux de communication sont efficaces'],
      // Innovation & Adaptabilité
      ['L\'organisation encourage la prise d\'initiative', 'Les erreurs sont considérées comme des apprentissages', 'L\'innovation fait partie de la culture', 'L\'organisation s\'adapte rapidement aux changements', 'La créativité est valorisée et récompensée'],
      // Performance & Résultats
      ['Les objectifs sont alignés avec les valeurs', 'Les critères d\'évaluation reflètent la culture', 'La performance collective prime sur l\'individuelle', 'Les succès sont célébrés selon les valeurs', 'Les résultats confirment l\'efficacité de l\'approche']
    ],
    nextButton: 'Question suivante',
    previousButton: 'Question précédente',
    finishButton: 'Terminer l\'Assessment',
    results: {
      title: 'Vos Résultats',
      globalScore: 'Score Global de Congruence',
      categoryScores: 'Scores par Catégorie',
      interpretation: 'Interprétation',
      recommendations: 'Recommandations',
      contact: 'Contactez-nous pour un diagnostic approfondi'
    }
  },
  en: {
    title: 'DNA Assessment',
    subtitle: 'Assess your organization\'s congruence in 5 minutes',
    startButton: 'Start Assessment',
    categories: [
      'Values & Culture',
      'Leadership & Management',
      'Communication & Transparency',
      'Innovation & Adaptability',
      'Performance & Results'
    ],
    questions: [
      // Values & Culture
      ['Organization values are clearly defined and communicated', 'Employees know and understand the values', 'Values truly guide daily decisions', 'Observed behaviors reflect declared values', 'Company culture fosters employee engagement'],
      // Leadership & Management
      ['Leaders embody the organization\'s values', 'Management style is consistent with culture', 'Leadership decisions are transparent and justified', 'Managers develop their teams according to values', 'Strategic vision is shared and understood'],
      // Communication & Transparency
      ['Internal communication is open and honest', 'Important information is shared fairly', 'Feedback is given constructively', 'Conflicts are managed transparently', 'Communication channels are effective'],
      // Innovation & Adaptability
      ['Organization encourages taking initiative', 'Mistakes are considered as learning opportunities', 'Innovation is part of the culture', 'Organization adapts quickly to changes', 'Creativity is valued and rewarded'],
      // Performance & Results
      ['Objectives are aligned with values', 'Evaluation criteria reflect culture', 'Collective performance takes priority over individual', 'Successes are celebrated according to values', 'Results confirm the effectiveness of the approach']
    ],
    nextButton: 'Next question',
    previousButton: 'Previous question',
    finishButton: 'Finish Assessment',
    results: {
      title: 'Your Results',
      globalScore: 'Global Congruence Score',
      categoryScores: 'Scores by Category',
      interpretation: 'Interpretation',
      recommendations: 'Recommendations',
      contact: 'Contact us for an in-depth diagnosis'
    }
  }
};

export default function Assessment({ language }: AssessmentProps) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const t = translations[language];
  const totalQuestions = 25;
  const currentCategory = Math.floor(currentQuestion / 5);
  const questionInCategory = currentQuestion % 5;

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScores = () => {
    const categoryScores = [];
    for (let i = 0; i < 5; i++) {
      const categoryAnswers = answers.slice(i * 5, (i + 1) * 5);
      const categoryScore = categoryAnswers.reduce((sum, score) => sum + score, 0) / 5;
      categoryScores.push(categoryScore);
    }
    const globalScore = categoryScores.reduce((sum, score) => sum + score, 0) / 5;
    return { globalScore, categoryScores };
  };

  const RadarChart = ({ scores }: { scores: number[] }) => {
    const size = 200;
    const center = size / 2;
    const radius = 70;
    const angles = scores.map((_, i) => (i * 2 * Math.PI) / 5 - Math.PI / 2);
    
    const points = scores.map((score, i) => {
      const r = (score / 5) * radius;
      const x = center + r * Math.cos(angles[i]);
      const y = center + r * Math.sin(angles[i]);
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="flex justify-center mb-8">
        <svg width={size} height={size} className="radar-chart">
          {/* Grid circles */}
          {[1, 2, 3, 4, 5].map(level => (
            <circle
              key={level}
              cx={center}
              cy={center}
              r={(level / 5) * radius}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Grid lines */}
          {angles.map((angle, i) => (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Data polygon */}
          <polygon
            points={points}
            fill="rgba(255,255,255,0.2)"
            stroke="white"
            strokeWidth="2"
          />
          
          {/* Data points */}
          {scores.map((score, i) => {
            const r = (score / 5) * radius;
            const x = center + r * Math.cos(angles[i]);
            const y = center + r * Math.sin(angles[i]);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="white"
              />
            );
          })}
          
          {/* Labels */}
          {t.categories.map((category, i) => {
            const labelRadius = radius + 20;
            const x = center + labelRadius * Math.cos(angles[i]);
            const y = center + labelRadius * Math.sin(angles[i]);
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="10"
                className="font-medium"
              >
                {category}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  if (showResults) {
    const { globalScore, categoryScores } = calculateScores();
    
    return (
      <section id="assessment" className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              {t.results.title}
            </h2>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 lg:p-12">
            {/* Global Score */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-white">{t.results.globalScore}</h3>
              <div className="text-6xl font-bold text-white mb-2">
                {(globalScore * 20).toFixed(0)}%
              </div>
              <div className="text-gray-300">
                {globalScore >= 4 ? 'Excellente congruence' : 
                 globalScore >= 3 ? 'Bonne congruence' : 
                 globalScore >= 2 ? 'Congruence modérée' : 'Congruence faible'}
              </div>
            </div>

            {/* Radar Chart */}
            <RadarChart scores={categoryScores} />

            {/* Category Scores */}
            <div className="mb-8">
              <h4 className="text-xl font-bold mb-6 text-white text-center">
                {t.results.categoryScores}
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {categoryScores.map((score, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {(score * 20).toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-300">
                      {t.categories[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300">
                {t.results.contact}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!started) {
    return (
      <section id="assessment" className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="bg-gray-900 rounded-xl p-8 lg:p-12 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              {t.categories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-black font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-sm font-medium text-white">{category}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            {t.startButton}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="assessment" className="py-20 lg:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-400">
              Question {currentQuestion + 1} / {totalQuestions}
            </span>
            <span className="text-sm text-gray-400">
              {t.categories[currentCategory]}
            </span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-900 rounded-xl p-8 lg:p-12">
          <h3 className="text-xl lg:text-2xl font-bold mb-8 text-white text-center">
            {t.questions[currentCategory][questionInCategory]}
          </h3>

          {/* Rating Scale */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => handleAnswer(score)}
                className={`w-12 h-12 rounded-full font-bold text-lg transition-all duration-300 ${
                  answers[currentQuestion] === score
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {score}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-400 mb-8">
            <span>Pas du tout d'accord</span>
            <span>Tout à fait d'accord</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.previousButton}
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={answers[currentQuestion] === undefined}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === totalQuestions - 1 ? t.finishButton : t.nextButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}