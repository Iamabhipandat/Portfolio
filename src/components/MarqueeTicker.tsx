import React from 'react';

const TICKER_ITEMS = [
  'PYTHON BACKEND',
  'FASTAPI REST APIS',
  'JAVA & SPRING BOOT',
  'POSTGRESQL & JPA',
  'JWT AUTHENTICATION',
  'TEXT SIMILARITY ENGINE',
  'DIFFLIB PIPELINE',
  'DOCKER CONTAINERIZATION',
  'CORE CS FUNDAMENTALS',
  'ALGORITHMIC PROBLEM SOLVING',
  'API CONTRACT VALIDATION',
  'MICROSERVICES CONCEPTS',
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="bg-surface-dark text-white py-4 overflow-hidden border-y border-slate-800">
      <div className="flex w-max animate-marquee space-x-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase">
              {item}
            </span>
            <span className="text-coral-500 font-bold text-base">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
