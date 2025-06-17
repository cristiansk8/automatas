// app/[lang]/layout.tsx

import React from 'react';

// Este es un Server Component, no lleva 'use client'
export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    // La etiqueta <html> y <body> deben estar en el layout raíz,
    // así que este layout solo devuelve los children.
    // Si necesitas un div o algo que envuelva solo las páginas de idioma,
    // puedes ponerlo aquí.
    <>{children}</>
  );
}