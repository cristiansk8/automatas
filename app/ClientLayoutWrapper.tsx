// app/ClientLayoutWrapper.tsx

'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  // Esta función no la usas en el layout, podrías moverla al header o donde esté el selector
  const switchLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // ... tu lógica de cambio de ruta ...
    // router.push(newPath);
  };

  return (
    <html lang={i18n.language}>
      <body>
        <main className="w-full mx-auto">{children}</main>
      </body>
    </html>
  );
}