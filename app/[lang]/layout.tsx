import React, { ReactNode } from 'react';

// Se convierte el componente en asíncrono para manejar los 'params' como una promesa.
export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  // Se tipan los params como una promesa.
  params: Promise<{ lang: string }>;
}) {
  // Se usa 'await' para obtener el valor del idioma.
  const { lang } = await params;

  return (
    // La etiqueta <html> y <body> van en el layout raíz
    // que se encuentra en `app/layout.tsx`. Este layout es un wrapper anidado.
    <>
      {children}
    </>
  );
}
