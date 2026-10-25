import React from 'react';

export const DribbbleAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden border-t border-slate-300/60">
      
      {/* Huge Watermark Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center watermark-text text-[14vw] font-black leading-none select-none z-0">
        ABOUT
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        
        {/* Top Centered Pill Badge (like in screenshot) */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-300 shadow-sm text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-6">
          ABOUT ME
        </div>

        {/* Big Bold Uppercase Statement (Exact typography style from screenshot) */}
        <h2 className="text-xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-slate-900 leading-snug max-w-2xl mx-auto mb-12">
          AI BACKEND ENGINEER CRAFTING INTELLECTUAL, HIGH-PERFORMANCE BACKEND SYSTEMS THROUGH FASTAPI, SPRING BOOT, AND RELIABLE REST APIS.
        </h2>

        {/* Center Circular Portrait & 4 Stat Blocks (Exact layout from screenshot) */}
        <div className="relative max-w-lg mx-auto py-6">
          
          {/* Circular Portrait Centerpiece with Coral Halo */}
          <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-coral-500 to-amber-500 shadow-2xl shadow-coral-500/20">
            <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-white overflow-hidden relative">
              <span className="font-display font-black text-3xl sm:text-4xl">AT</span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-coral-400 mt-1">
                YMCA 2027
              </span>
            </div>
          </div>

          {/* Stat 1: Top Left */}
          <div className="absolute top-0 left-2 sm:left-6 text-left">
            <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 leading-none">
              2027
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Graduation Year
            </div>
          </div>

          {/* Stat 2: Top Right */}
          <div className="absolute top-0 right-2 sm:right-6 text-right">
            <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 leading-none">
              02
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Featured Systems
            </div>
          </div>

          {/* Stat 3: Bottom Left */}
          <div className="absolute bottom-2 left-2 sm:left-6 text-left">
            <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-none">
              YMCA
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Faridabad, HR
            </div>
          </div>

          {/* Stat 4: Bottom Right */}
          <div className="absolute bottom-2 right-2 sm:right-6 text-right">
            <div className="text-2xl sm:text-3xl font-display font-black text-slate-900 leading-none">
              JAVA
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              DSA Practiced
            </div>
          </div>

        </div>

        {/* Education & Focus Pill Summary */}
        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-600 bg-white/70 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200">
          <span>B.Tech in CSE (AI &amp; ML)</span>
          <span className="text-slate-300">•</span>
          <span>J.C. Bose UST, YMCA</span>
          <span className="text-slate-300">•</span>
          <span className="text-coral-600 font-bold">Final-Year Student</span>
        </div>

      </div>
    </section>
  );
};
