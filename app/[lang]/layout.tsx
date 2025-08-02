// app/[lang]/layout.tsx

import React from 'react';

// Este es un Server Component, no lleva 'use client'
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // Await the params since they are now a Promise
  const { lang } = await params;
  
  return (
    // La etiqueta <html> y <body> deben estar en el layout raíz,
    // así que este layout solo devuelve los children.
    // Si necesitas un div o algo que envuelva solo las páginas de idioma,
    // puedes ponerlo aquí.
    <>{children}</>
  );
}