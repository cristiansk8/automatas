'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface FooterProps {
  footer: {
    rights: string;
    slogan: string;
    terms: string;
    privacy: string;
    contact: string;
  };
  lang: string;
}

// Este objeto mapea cada idioma a su URL específica para la página de términos.
// Es la "fuente de la verdad" para estas rutas.
const termsPaths: { [key: string]: string } = {
  en: '/en/terms',
  es: '/es/terminos',
  pt: '/pt/termos',
};

const Footer: React.FC<FooterProps> = ({ footer, lang }) => {
  const pathname = usePathname();

  const handleLangChange = (newLang: string) => {
    // Creamos una lista con todas las rutas de términos posibles.
    const allTermsPaths = Object.values(termsPaths);

    // Comprobamos si la página actual es una de las de términos.
    if (allTermsPaths.includes(pathname)) {
      // Si lo es, redirigimos a la página de términos del nuevo idioma.
      window.location.href = termsPaths[newLang];
    } else {
      // Si es cualquier otra página, simplemente reemplazamos el idioma en la URL.
      // Por ejemplo, de /es/about a /en/about.
      const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
      window.location.href = newPath;
    }
  };

  return (
    <footer id="contact" className="px-6 md:px-12 py-10 text-center border-t border-neutral-800 text-neutral-500 text-sm bg-black">
      <p>© {new Date().getFullYear()} Ta. {footer.rights}</p>
      <p className="mt-1">{footer.slogan}</p>
      <div className="flex justify-center gap-6 mt-4">
        {/* CORRECCIÓN: Usamos el objeto termsPaths para obtener el enlace correcto */}
        <a href={termsPaths[lang]} className="hover:underline">
          {footer.terms}
        </a>
        <a href="#privacy" className="hover:underline">{footer.privacy}</a>
        <a href="#contact" className="hover:underline">{footer.contact}</a>
      </div>
      <div className="mt-6">
        <select
          value={lang}
          // Usamos la nueva lógica mejorada para cambiar de idioma
          onChange={(e) => handleLangChange(e.target.value)}
          className="bg-transparent border border-neutral-700 text-white rounded px-2 py-1 text-sm focus:outline-none"
        >
          <option className="text-black" value="es">ES</option>
          <option className="text-black" value="en">EN</option>
          <option className="text-black" value="pt">PT</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
