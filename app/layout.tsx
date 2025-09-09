import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Core-Sense - Révélez le potentiel de votre organisation',
  description: 'Core-Sense analyse la congruence entre vos valeurs, votre culture et vos pratiques pour optimiser votre performance organisationnelle.',
  keywords: 'congruence organisationnelle, culture d\'entreprise, transformation, leadership, assessment DNA',
  authors: [{ name: 'Core-Sense' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Core-Sense - Révélez le potentiel de votre organisation',
    description: 'Core-Sense analyse la congruence entre vos valeurs, votre culture et vos pratiques pour optimiser votre performance organisationnelle.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}