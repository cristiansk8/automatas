import es from '../../locales/es/translation.json';
import en from '../../locales/en/translation.json';
import pt from '../../locales/pt/translation.json';

// Importamos tu componente existente desde la ruta correcta
import TermsPage from '../../src/components/TermsPage';

interface PageProps {
  // Los params se tipan como una promesa, como hemos establecido en los layouts.
  params: Promise<{ lang: string }>;
}

// Un objeto que mapea el idioma al archivo de traducción correspondiente.
const translations = { es, en, pt };

// Este componente es asíncrono para manejar la promesa de los params.
export default async function TerminosPage({ params }: PageProps) {
  // Usamos 'await' para obtener el valor del idioma.
  const { lang: langParam } = await params;
  
  // Validamos el idioma y usamos 'es' como fallback.
  const lang = (langParam === 'es' || langParam === 'en' || langParam === 'pt') 
    ? langParam 
    : 'es';

  // Cargamos el objeto de traducción completo que tu componente TermsPage espera.
  const t = translations[lang];

  // Renderizamos tu componente TermsPage y le pasamos la traducción.
  // Tu componente ya espera una prop 't' que contiene el objeto 'terms'.
  return <TermsPage t={t} />;
}