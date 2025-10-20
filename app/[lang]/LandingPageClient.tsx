'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LeadForm from '../src/components/LeadForm';
import EcommerceLogosCarousel from '../src/components/Commerce';
import FeaturesSection from '../src/components/features';
import ProductCard from '../src/components/ProductCard';
import Portfolio from '../src/components/Portfolio';

interface Translation {
  portfolio: {
    header: { title: string; subtitle: string };
    projects: {
      id: number;
      title: string;
      description: string;
      client: string;
      url: string;
      image: string;
      technologies: string[];
      iconType: string;
    }[];
    cta: { title: string; description: string; buttonText: string };
  };
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
  productCreator: {
    title: string;
    description: string;
    btnCreate: string;
    features: {
      seo: string;
      standardize: string;
      sync: string;
      speed: string;
      consistency: string;
      scalability: string;
    };
  };
}

interface Props {
  t: Translation;
  lang: string;
}

export default function LandingPageClient({ t, lang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
      {/* ✅ HEADER con transparencia dinámica */}
      <header
        className={`w-full fixed top-0 z-50 transition-all duration-300 ease-in-out 
          ${scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800 py-3'
            : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="inline-flex items-center transition-all duration-300 ease-in-out">
            <Image
              src="/logo-neural-flow.png"
              alt="Logo"
              width={scrolled ? 60 : 80}
              height={scrolled ? 18 : 24}
              priority
              className="transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-neutral-300 font-medium text-xl">
              <li>
                <a href="#features" className="hover:text-white transition-colors duration-200">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </nav>

          {/* Right side: Language + Mobile menu */}
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-white focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center backdrop-blur-md">
          <nav>
            <ul className="flex flex-col items-center space-y-8 text-neutral-300 font-medium text-3xl">
              <li><a href="#features" onClick={() => setIsMenuOpen(false)}>{t.nav.features}</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a></li>
            </ul>
          </nav>
        </div>
      )}

{/* ✅ HERO con línea visual azul del Portafolio */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative px-6 md:px-12 py-32 text-center bg-neutral-950 overflow-hidden"
>
  {/* 🎥 Video de fondo */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute z-0 w-full h-full top-0 left-0 object-cover"
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>

  {/* 🖤 Capa de oscurecimiento con degradado */}
  <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-black/90 z-10" />

  <div className="relative z-20">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#39b3e1] to-[#2a9dc9]">
        {t.hero.title1}
      </span>
      <span className="block text-white">{t.hero.title2}</span>
    </h1>

    <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-300">
      {t.hero.description}
    </p>

    {/* 🎯 Botones con línea visual azul */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="px-6 py-3 rounded-lg font-semibold bg-[#39b3e1] text-white hover:bg-[#2a9dc9] transition-all duration-300 shadow-lg hover:shadow-[#39b3e1]/40"
      >
        {t.hero.btnJoin}
      </a>
      <a
        href="#features"
        className="px-6 py-3 rounded-lg font-semibold border border-[#39b3e1]/50 text-white hover:bg-[#39b3e1]/10 hover:border-[#39b3e1] transition-all duration-300"
      >
        {t.hero.btnExplore}
      </a>
    </div>
  </div>
</motion.section>



      <EcommerceLogosCarousel />
      <Portfolio t={t.portfolio} />

      <motion.div
        id="features"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FeaturesSection t={t} />
      </motion.div>

      <ProductCard
        title={t.productCreator.title}
        description={t.productCreator.description}
        highlights={[
          { title: 'SEO', description: t.productCreator.features.seo },
          { title: 'Standardization', description: t.productCreator.features.standardize },
          { title: 'Speed', description: t.productCreator.features.speed },
          { title: 'Consistency', description: t.productCreator.features.consistency },
          { title: 'Scalability', description: t.productCreator.features.scalability },
        ]}
        ctaLabel={t.hero.btnJoin}
        ctaHref="#contact"
        mediaType="video"
        mediaSrc="/talobot-video.mp4"
      />

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 py-24 text-center bg-black"
      >
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-white">{t.slogan.line1} </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.slogan.line2}
          </span>
        </h2>
        <p className="max-w-xl mx-auto text-neutral-300">{t.slogan.description}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-12 py-24 bg-gradient-to-tr from-neutral-900 to-black text-white text-center rounded-t-3xl"
      >
        <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
        <p className="mb-6 max-w-xl mx-auto text-neutral-400">{t.cta.description}</p>
        <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-block">
          {t.cta.btnStart}
        </a>
      </motion.section>

      <LeadForm />

      <footer
        id="contact"
        className="px-6 md:px-12 py-10 text-center border-t border-neutral-800 text-neutral-500 text-sm bg-black"
      >
        <p>© {new Date().getFullYear()} Ta. {t.footer.rights}</p>
        <p className="mt-1">{t.footer.slogan}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href={
              lang === 'es'
                ? '/es/terminos'
                : lang === 'pt'
                  ? '/pt/termos'
                  : `/${lang}/terms`
            }
            className="hover:underline"
          >
            {t.footer.terms}
          </a>
          <a href="#privacy" className="hover:underline">
            {t.footer.privacy}
          </a>
          <a href="#contact" className="hover:underline">
            {t.footer.contact}
          </a>
        </div>
      </footer>
    </div>
  );
}
