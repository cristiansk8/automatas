'use client';

import React from 'react';

interface Translation {
  nav: { features: string; about: string; contact: string };
  hero: {
    title1: string;
    title2: string;
    description: string;
    btnJoin: string;
    btnExplore: string;
  };
  featuresTitle: string;
  features: { title: string; description: string }[];
  slogan: { line1: string; line2: string; description: string };
  cta: { title: string; description: string; btnStart: string };
  footer: {
    rights: string;
    slogan: string;
    terms: string;
    privacy: string;
    contact: string;
  };
}

interface Props {
  t: Translation;
  lang: string;
}

export default function LandingPageClient({ t, lang }: Props) {
  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 flex justify-between items-center border-b border-neutral-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold tracking-wide text-white">Ta</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-neutral-300 font-medium">
            <li><a href="#features" className="hover:text-white transition-colors duration-200">{t.nav.features}</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-200">{t.nav.about}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-200">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <select
          value={lang}
          onChange={(e) => (window.location.href = `/${e.target.value}`)}
          className="bg-transparent border border-neutral-700 text-white rounded px-2 py-1 text-sm focus:outline-none"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 py-32 text-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.hero.title1}</span>
            <span className="block text-white">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300">{t.hero.description}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-white"
            >
              {t.hero.btnJoin}
            </a>
            <a
              href="#features"
              className="border border-neutral-600 px-6 py-3 rounded-lg text-white hover:bg-neutral-800 transition"
            >
              {t.hero.btnExplore}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-12 py-24 bg-neutral-950">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.featuresTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.features.map((feature, i) => (
            <div key={i} className="bg-neutral-900 p-6 rounded-xl shadow-md border border-neutral-800">
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slogan */}
      <section id="about" className="px-6 md:px-12 py-24 text-center bg-black">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-white">{t.slogan.line1} </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{t.slogan.line2}</span>
        </h2>
        <p className="max-w-xl mx-auto text-neutral-300">{t.slogan.description}</p>
      </section>

      {/* Call to Action */}
      <section className="px-6 md:px-12 py-24 bg-gradient-to-tr from-neutral-900 to-black text-white text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
        <p className="mb-6 max-w-xl mx-auto text-neutral-400">{t.cta.description}</p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block"
        >
          {t.cta.btnStart}
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-12 py-10 text-center border-t border-neutral-800 text-neutral-500 text-sm bg-black">
        <p>© {new Date().getFullYear()} Ta. {t.footer.rights}</p>
        <p className="mt-1">{t.footer.slogan}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#terms" className="hover:underline">{t.footer.terms}</a>
          <a href="#privacy" className="hover:underline">{t.footer.privacy}</a>
          <a href="#contact" className="hover:underline">{t.footer.contact}</a>
        </div>
      </footer>
    </div>
  );
}
