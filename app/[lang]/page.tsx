import es from '../locales/es/translation.json';
import en from '../locales/en/translation.json';
import pt from '../locales/pt/translation.json'; // Correctamente importado

import LandingPageClient from './LandingPageClient';

interface PageProps {
  params: { lang: string };
}

// 1. Se añade 'pt' al objeto de traducciones
const translations = { es, en, pt };

export default async function LandingPage({ params }: PageProps) {
  // 2. Se añade 'pt' a la lógica de validación del idioma
  const lang = params.lang === 'en' || params.lang === 'es' || params.lang === 'pt' 
    ? params.lang 
    : 'es'; // Se mantiene 'es' como idioma por defecto

  const t = translations[lang];

  return <LandingPageClient t={t} lang={lang} />;
}