'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import './globals.css'; // ✅ funciona solo si globals.css está en la misma carpeta


const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

    let newPath = pathname;

    if (pathname.startsWith('/en')) {
      newPath = pathname.replace('/en', '');
    } else if (pathname.startsWith('/es')) {
      newPath = pathname.replace('/es', '');
    }

    if (lng === 'en') {
      newPath = '/en' + newPath;
    } else if (lng === 'es') {
      // idioma default sin prefijo
    }

    router.push(newPath);
  };

  return (
    <html lang={i18n.language}>
      <body className="">

        <main className="w-full mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
