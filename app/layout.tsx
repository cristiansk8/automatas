// app/layout.tsx

import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Neuralflow',
  description: 'Dont be a bot',
};

// Este es un Server Component. No usa hooks ni 'use client'.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Aquí no hay conocimiento del idioma, lo cual es correcto.
  // El idioma se manejará en los componentes hijos.
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}