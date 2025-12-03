import React from 'react';

interface PolicyTexts {
  title: string;
  intro: string;
  effective_date: string;

  collection_title: string;
  collection: string;
  collection_items: string;

  use_title: string;
  use: string;
  use_items: string;

  sharing_title: string;
  sharing: string;

  cookies_title: string;
  cookies: string;

  security_title: string;
  security: string;

  rights_title: string;
  rights: string;
  rights_items: string;

  thirdparty_title: string;
  thirdparty: string;

  children_title: string;
  children: string;

  changes_title: string;
  changes: string;

  contact_title: string;
  contact: string;
}

interface Props {
  t: {
    policy: PolicyTexts;
  };
}

export default function PolicyPage({ t }: Props) {
  const policy = t.policy;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-gray-900 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">{policy.title}</h1>
      <p className="mb-4">{policy.intro}</p>
      <p className="mb-6 text-sm text-gray-600">{policy.effective_date}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.collection_title}</h2>
      <p className="mb-2">{policy.collection}</p>
      <p className="mb-4 whitespace-pre-line">{policy.collection_items}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.use_title}</h2>
      <p className="mb-2">{policy.use}</p>
      <p className="mb-4 whitespace-pre-line">{policy.use_items}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.sharing_title}</h2>
      <p className="mb-4">{policy.sharing}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.cookies_title}</h2>
      <p className="mb-4">{policy.cookies}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.security_title}</h2>
      <p className="mb-4">{policy.security}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.rights_title}</h2>
      <p className="mb-2">{policy.rights}</p>
      <p className="mb-4 whitespace-pre-line">{policy.rights_items}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.thirdparty_title}</h2>
      <p className="mb-4">{policy.thirdparty}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.children_title}</h2>
      <p className="mb-4">{policy.children}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.changes_title}</h2>
      <p className="mb-4">{policy.changes}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{policy.contact_title}</h2>
      <p>{policy.contact}</p>
    </div>
  );
}
