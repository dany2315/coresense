'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import UseCases from '../components/UseCases';
import Services from '../components/Services';
import Assessment from '../components/Assessment';

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <main className="min-h-screen bg-black text-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Approach language={language} />
      <UseCases language={language} />
      <Services language={language} />
      <Assessment language={language} />
    </main>
  );
}