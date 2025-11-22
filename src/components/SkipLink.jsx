import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
    >
      Salta al contenuto
    </a>
  );
}
