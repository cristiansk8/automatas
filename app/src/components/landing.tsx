'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    let newPath = pathname;
    const currentLangPrefix = pathname.split('/')[1];
    const supportedLangs = ['es', 'en'];

    if (supportedLangs.includes(currentLangPrefix)) {
      newPath = pathname.replace(`/${currentLangPrefix}`, '');
    }

    if (lng !== 'es') {
      newPath = `/${lng}${newPath}`;
    }

    router.push(newPath);
  };

  const featuresObj = t('features', { returnObjects: true }) as Record<string, { title: string; description: string }>;
  const features = Object.values(featuresObj);

  const logoGradient = "from-yellow-400 to-amber-500";
  const logoText = "text-blue-900";
  const logoHover = "hover:text-yellow-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white font-sans">
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl w-14 h-14 flex items-center justify-center shadow-md">
              <img src="/talo.png" alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <span className="text-white text-xl font-semibold hidden sm:block">
              Automatiza, conecta y fideliza
            </span>
          </div>

          <nav className="flex items-center gap-4">
            <ul className="flex space-x-6 text-sm sm:text-base">
              <li className={`${logoHover} transition-colors`}>
                <a href="#features">{t('nav.features')}</a>
              </li>
              <li className={`${logoHover} transition-colors`}>
                <a href="#about">{t('nav.about')}</a>
              </li>
              <li className={`${logoHover} transition-colors`}>
                <a href="#contact">{t('nav.contact')}</a>
              </li>
            </ul>
            <select
              onChange={(e) => switchLanguage(e.target.value)}
              value={i18n.language}
              className="bg-transparent border border-yellow-400 text-yellow-400 rounded px-2 py-1"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </nav>
        </header>

        <section className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="block text-yellow-300">{t('hero.title1')}</span>
              <span className="block">{t('hero.title2')}</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`bg-gradient-to-r ${logoGradient} ${logoText} font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition`}>
                {t('hero.btnJoin')}
              </button>
              <button className={`border-2 border-yellow-400 text-yellow-400 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 hover:${logoText} transition`}>
                {t('hero.btnExplore')}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`bg-gradient-to-r ${logoGradient} rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center`}>
              <img src="/talo.png" alt="Logo" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </section>

        <section className="text-center mb-24">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">{t('slogan.line1')}</span>
            <span className="text-yellow-300">{t('slogan.line2')}</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('slogan.description')}
          </p>
        </section>

        <section id="features" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('featuresTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-800 bg-opacity-30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:border-yellow-400 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-10 mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
          <button className={`bg-gradient-to-r ${logoGradient} ${logoText} font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition`}>
            {t('cta.btnStart')}
          </button>
        </section>
      </main>

      <footer className="border-t border-blue-800 py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className={`bg-gradient-to-r ${logoGradient} rounded-xl w-12 h-12 flex items-center justify-center`}>
              <img src="/talo.png" alt="Logo" className="w-6 h-6 object-contain" />
            </div>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Ta. {t('footer.rights')}</p>
          <p className="text-gray-500 mt-2">{t('footer.slogan')}</p>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className={`text-gray-400 ${logoHover} transition`}>{t('footer.terms')}</a>
            <a href="#" className={`text-gray-400 ${logoHover} transition`}>{t('footer.privacy')}</a>
            <a href="#" className={`text-gray-400 ${logoHover} transition`}>{t('footer.contact')}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
