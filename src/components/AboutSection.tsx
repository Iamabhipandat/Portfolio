import React from 'react';
import { GraduationCap, Binary, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface-light border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-coral-500 mb-2">
            <span>— Academic &amp; Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            About My Engineering Journey <span className="text-coral-500 text-2xl">✦</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic About Statement & Core CS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-sans mb-6">
                "{PERSONAL_INFO.aboutIntro}"
              </p>

              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2 font-bold">
                  <Binary className="w-4 h-4 text-coral-500" /> Core Computer Science Fundamentals
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PERSONAL_INFO.coreFundamentals.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-light border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-coral-500/10 border border-coral-500/20 flex items-center justify-center text-coral-600 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-coral-600 font-bold mb-1">
                    {PERSONAL_INFO.education.status.toUpperCase()} • {PERSONAL_INFO.education.period}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <div className="text-sm text-slate-700 font-medium mt-1">
                    Specialization in {PERSONAL_INFO.education.specialization}
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-2">
                    {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Roles & Architecture Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Technical Roles &amp; Boundaries
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-coral-50 text-coral-600 font-bold border border-coral-200">
                  Verified
                </span>
              </div>

              {/* Box 1 */}
              <div className="p-4 rounded-xl bg-surface-light border border-slate-200">
                <div className="text-xs font-mono text-coral-600 font-bold mb-1">[PRIMARY FOCUS]</div>
                <div className="text-sm font-bold text-slate-900">AI Backend &amp; Python Services</div>
                <p className="text-xs text-slate-600 font-sans mt-1">
                  FastAPI REST APIs, Pydantic validation schemas, text-similarity deduplication pipelines.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-4 rounded-xl bg-surface-light border border-slate-200">
                <div className="text-xs font-mono text-slate-500 font-bold mb-1">[ENTERPRISE SYSTEMS]</div>
                <div className="text-sm font-bold text-slate-900">Java &amp; Spring Boot Engineering</div>
                <p className="text-xs text-slate-600 font-sans mt-1">
                  Spring Security, JWT filter chains, Controller-Service-Repository, PostgreSQL JPA persistence.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-4 rounded-xl bg-surface-light border border-slate-200">
                <div className="text-xs font-mono text-slate-500 font-bold mb-1">[DATABASE LAYER]</div>
                <div className="text-sm font-bold text-slate-900">Relational &amp; Document Storage</div>
                <p className="text-xs text-slate-600 font-sans mt-1">
                  PostgreSQL schemas, Hibernate JPA lifecycle, MySQL, and DBeaver management.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
