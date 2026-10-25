import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DribbbleHero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-6 pb-20 overflow-hidden">
      
      {/* Huge Watermark Background Text (like in screenshot) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center watermark-text text-[13vw] font-black leading-none select-none z-0">
        ENGINEER
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Centerpiece Visual with Glowing Portal & Cursive Signature */}
        <div className="relative max-w-xl mx-auto h-[380px] sm:h-[440px] flex items-center justify-center my-4">
          
          {/* Glowing Red-Orange Circular Backdrop */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full avatar-portal shadow-2xl shadow-coral-500/30 flex items-center justify-center overflow-hidden">
            
            {/* Radial glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20" />
            
            {/* Developer Monogram / Portrait Visual */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-black/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-4xl sm:text-5xl font-display font-black text-white shadow-2xl">
                AT
              </div>
              <div className="mt-3 font-mono text-[10px] tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full text-white/90">
                Python • FastAPI • Spring Boot
              </div>
            </div>

            {/* Floating Black Pills on Circle (Directly like screenshot) */}
            <div className="absolute top-8 left-6 px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold tracking-wider shadow-md">
              AI Systems
            </div>

            <div className="absolute top-12 right-6 px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-mono font-bold tracking-wider shadow-md">
              Backend
            </div>

          </div>

          {/* Overlaid Cursive Script Signature (like 'Jerry Kinda' in reference image) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-20">
            <span className="signature-text text-6xl sm:text-8xl font-bold text-violet-600/90 drop-shadow-md tracking-wide">
              {PERSONAL_INFO.name}
            </span>
          </div>

        </div>

        {/* Lower Banner: Left Headline + Right White Info Card (Exact split layout from reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-4">
          
          {/* Lower Left Headline */}
          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500">
              <span className="text-coral-500 font-bold">Hi I'm</span>
              <span>{PERSONAL_INFO.name}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-slate-900 tracking-tight leading-[0.95]">
              AI BACKEND,<br />
              PYTHON &amp; JAVA<br />
              <span className="text-coral-500">ENGINEER.</span>
            </h1>
          </div>

          {/* Lower Right Floating White Card (Exact layout from reference image) */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans mb-4">
                Final-year CSE (AI &amp; ML) student at J.C. Bose UST (YMCA). Turning AI capabilities into practical products through thoughtful backend engineering.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <a
                  href={`mailto:${PERSONAL_INFO.links.email}`}
                  className="text-xs font-mono font-bold text-slate-900 hover:text-coral-500 transition-colors"
                >
                  {PERSONAL_INFO.links.email}
                </a>

                {/* Circular Black Stamp Button (like in screenshot) */}
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-slate-950 hover:bg-coral-500 text-white flex items-center justify-center transition-all hover:scale-105 shadow-md"
                  title="Let's Talk"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
