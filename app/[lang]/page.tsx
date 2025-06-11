import es from '../locales/es/translation.json';
import en from '../locales/en/translation.json';

import LandingPageClient from './LandingPageClient';

interface PageProps {
  params: { lang: string };
}

const translations = { es, en };

export default function LandingPage({ params }: PageProps) {
  const lang = params.lang === 'en' || params.lang === 'es' ? params.lang : 'es';
  const t = translations[lang];

  return <LandingPageClient t={t} lang={lang} />;
}
