import React, { useState } from 'react';

interface ServiceEntry {
  id: string;
  title: string;
  summary: string;
  tags: string[];
}

const SERVICES_DATA: ServiceEntry[] = [
  {
    id: '01',
    title: 'AI & PYTHON BACKEND',
    summary: 'FastAPI asynchronous REST APIs, Pydantic request/response schema validation, custom exception handlers, and external AI model integration.',
    tags: ['FastAPI', 'Python', 'Pydantic v2', 'REST APIs']
  },
  {
    id: '02',
    title: 'JAVA & SPRING BOOT SYSTEMS',
    summary: 'Enterprise Controller-Service-Repository multi-tier patterns, Spring Data JPA with PostgreSQL, Hibernate transactions, and Actuator health telemetry.',
    tags: ['Spring Boot 4', 'Java 17', 'PostgreSQL', 'JPA / Hibernate']
  },
  {
    id: '03',
    title: 'TEXT SIMILARITY & DEDUPLICATION',
    summary: 'Pairwise SequenceMatcher lexical similarity pipelines designed for meeting transcript deduplication with ephemeral session privacy.',
    tags: ['difflib', 'NLP Fundamentals', 'SequenceMatcher', 'Session Caching']
  },
  {
    id: '04',
    title: 'JWT AUTHENTICATION & SECURITY',
    summary: 'Stateless Spring Security filter chains, OncePerRequestFilter interceptors, email verification tokens, and CORS preflight debugging.',
    tags: ['Spring Security', 'JWT Filter', 'BCrypt', 'CORS Governance']
  }
];

export const DribbbleServices: React.FC = () => {
  const [openId, setOpenId] = useState<string>('01');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="services" className="relative py-16 overflow-hidden border-t border-slate-300/60">
      
      {/* Huge Watermark Background Text (like in screenshot) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full text-center watermark-text text-[14vw] font-black leading-none select-none z-0">
        SERVICE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Tag on the right (like in screenshot) */}
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
            01 // CAPABILITIES
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-coral-500 pb-0.5">
            SERVICES |
          </span>
        </div>

        {/* Accordion List (Matching + / — cards in reference image) */}
        <div className="space-y-4">
          {SERVICES_DATA.map((srv) => {
            const isOpen = openId === srv.id;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 overflow-hidden"
              >
                {/* Header Row */}
                <button
                  onClick={() => toggle(srv.id)}
                  className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left group"
                >
                  <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-slate-900 group-hover:text-coral-500 transition-colors">
                    {srv.title}
                  </h3>

                  <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center font-mono font-bold text-base text-slate-700 group-hover:border-coral-500 group-hover:text-coral-500 transition-colors">
                    {isOpen ? '—' : '+'}
                  </div>
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100">
                    <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-3xl mb-4">
                      {srv.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {srv.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
