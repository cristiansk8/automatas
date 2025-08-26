import React from 'react';

interface TermsTexts {
  title: string;
  intro: string;
  definitions_title: string;
  definitions: string;
  use_title: string;
  use: string;
  responsibility_title: string;
  responsibility: string;
  payments_title: string;
  payments: string;
  privacy_title: string;
  privacy: string;
  intellectual_title: string;
  intellectual: string;
  liability_title: string;
  liability: string;
  modifications_title: string;
  modifications: string;
  jurisdiction_title: string;
  jurisdiction: string;
  contact_title: string;
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
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.definitions_title}</h2>
      <p className="mb-4">{terms.definitions}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.use_title}</h2>
      <p className="mb-4">{terms.use}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.responsibility_title}</h2>
      <p className="mb-4">{terms.responsibility}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.payments_title}</h2>
      <p className="mb-4">{terms.payments}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.privacy_title}</h2>
      <p className="mb-4">{terms.privacy}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.intellectual_title}</h2>
      <p className="mb-4">{terms.intellectual}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.liability_title}</h2>
      <p className="mb-4">{terms.liability}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.modifications_title}</h2>
      <p className="mb-4">{terms.modifications}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.jurisdiction_title}</h2>
      <p className="mb-4">{terms.jurisdiction}</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">{terms.contact_title}</h2>
      <p>{terms.contact}</p>
    </div>
  );
}