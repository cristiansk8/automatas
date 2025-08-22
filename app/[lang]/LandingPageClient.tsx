'use client';

// 1. Importa useState
import React, { useState } from 'react';
import Image from 'next/image';
import LeadForm from '../src/components/LeadForm';
import EcommerceLogosCarousel from '../src/components/Commerce';
import FeaturesSection from '../src/components/features';


// ... (Las interfaces Translation y Props no cambian)
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
  // 2. Añade un estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* Header */}
      <header className="w-full px-6 md:px-12 py-6 flex justify-between items-center border-b border-neutral-800 bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="inline-flex items-center justify-center p-2 bg-white-500 rounded-full">
          <Image
            src="/logo.png"
            alt="Descripción de tu logo"
            width={120}
            height={50}
            priority
          />
        </div>

        {/* Navegación para Escritorio (sin cambios) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-neutral-300 font-medium text-xl">
            <li><a href="#features" className="hover:text-white transition-colors duration-200">{t.nav.features}</a></li>
            <li><a href="#about" className="hover:text-white transition-colors duration-200">{t.nav.about}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors duration-200">{t.nav.contact}</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <select
            value={lang}
            onChange={(e) => (window.location.href = `/${e.target.value}`)}
            className="bg-transparent border border-neutral-700 text-white rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option className="text-black" value="es">ES</option>
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="pt">PT</option>
          </select>

          {/* 3. Botón de Menú Móvil (Hamburguesa) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                // Icono de "X" para cerrar
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icono de Hamburguesa
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 4. Panel de Menú Móvil (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center">
          <nav>
            <ul className="flex flex-col items-center space-y-8 text-neutral-300 font-medium text-3xl">
              <li>
                <a href="#features" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}


      {/* El resto de tu página (Hero, Features, etc.) no necesita cambios */}
      {/* ... */}
      {/* Hero */}
      <section className="relative px-6 md:px-12 py-32 text-center bg-black overflow-hidden">

        {/* 1. Video de Fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full top-0 left-0 object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        {/* 2. Capa de superposición (Overlay) */}
        {/* Esta capa oscurece un poco el video para que el texto sea legible. */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* 3. Contenido del Hero (tu código original) */}
        {/* Le cambiamos el z-index a z-20 para que esté por encima de todo */}
        <div className="relative z-20">
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
      <EcommerceLogosCarousel />
      {/* Features */}

      <FeaturesSection t={t} />

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
      <LeadForm />
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