import es from '../../locales/es/translation.json';
import en from '../../locales/en/translation.json';
import pt from '../../locales/pt/translation.json';

import PolicyPage from '../../src/components/PolicyPage';

interface PageProps {
  params: Promise<{ lang: string }>;
}

const translations = { es, en, pt };

export default async function PoliticaPrivacidadePageRoute({ params }: PageProps) {
  const { lang: langParam } = await params;

  const lang = (langParam === 'es' || langParam === 'en' || langParam === 'pt')
    ? langParam
    : 'pt';

  const t = translations[lang];

  return <PolicyPage t={t} />;
}
