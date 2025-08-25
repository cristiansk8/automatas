'use client';

import React from 'react';

interface TermsTexts {
  title: string;
  intro: string;
  definitions: string;
  use: string;
  responsibility: string;
  payments: string;
  privacy: string;
  intellectual: string;
  liability: string;
  modifications: string;
  jurisdiction: string;
  contact: string;
}

interface Props {
  t: {
    terms: TermsTexts;
  };
}

export default function TermsPage({ t }: Props) {
  const terms = t.terms;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-gray-900 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">{terms.title}</h1>
      <p className="mb-4">{terms.intro}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Definiciones</h2>
      <p className="mb-4">{terms.definitions}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Uso de la plataforma</h2>
      <p className="mb-4">{terms.use}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Responsabilidad del usuario</h2>
      <p className="mb-4">{terms.responsibility}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Pagos y facturación</h2>
      <p className="mb-4">{terms.payments}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Privacidad</h2>
      <p className="mb-4">{terms.privacy}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Propiedad intelectual</h2>
      <p className="mb-4">{terms.intellectual}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Limitación de responsabilidad</h2>
      <p className="mb-4">{terms.liability}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Modificaciones</h2>
      <p className="mb-4">{terms.modifications}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Jurisdicción</h2>
      <p className="mb-4">{terms.jurisdiction}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
      <p>{terms.contact}</p>
    </div>
  );
}