import React from 'react';
import { ArrowUpRight, FileText, Code2, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 bg-surface-light overflow-hidden">
      
      {/* Subtle radial glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-coral-500/10 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Centered Greeting Badge (Directly like screenshot) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-mono text-slate-700">
            <span>👋</span>
            <span className="font-semibold text-coral-600">Hello There!</span>
            <span className="text-slate-400">|</span>
            <span>Available for AI Backend &amp; Software Roles</span>
          </div>
        </div>

        {/* Big Bold Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            I'm <span className="text-slate-900">{PERSONAL_INFO.name}</span>
            <span className="text-coral-500 inline-block ml-1">✦</span>
          </h1>

          <p className="text-lg sm:text-xl font-mono text-coral-600 font-semibold max-w-2xl mx-auto">
            {PERSONAL_INFO.title}
          </p>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
            "{PERSONAL_INFO.tagline}"
          </p>
        </div>

        {/* Centerpiece Showcase: Arched Frame & Floating Glass Cards (Exact Layout from Reference Image) */}
        <div className="relative max-w-4xl mx-auto my-6">
          
          {/* Main Arched Backdrop */}
          <div className="relative mx-auto w-full max-w-[500px] h-[420px] sm:h-[460px] arch-frame bg-gradient-to-b from-coral-500 via-coral-500 to-amber-500 shadow-2xl shadow-coral-500/20 p-2 flex flex-col justify-end overflow-hidden">
            
            {/* Visual Grid & Geometric Texture */}
            <div className="absolute inset-0 bg-dots-pattern bg-dots-sm opacity-20 pointer-events-none" />
            
            {/* Center Tech Graphic / Visual Representation */}
            <div className="relative z-10 w-full h-[360px] flex flex-col items-center justify-center p-6 text-white text-center">
              
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 flex items-center justify-center text-white text-3xl font-extrabold shadow-xl mb-4">
                AT
              </div>

              <div className="font-mono text-xs uppercase tracking-widest text-white/90 font-bold mb-1">
                AI Backend Architect
              </div>
              <div className="font-mono text-[11px] text-white/80 bg-black/20 px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
                Python • FastAPI • Java • Spring Boot
              </div>

              {/* Mini Terminal Preview on avatar */}
              <div className="w-full max-w-xs bg-surface-darker/80 backdrop-blur-md rounded-xl p-3 border border-white/20 text-left font-mono text-[10px] text-emerald-400 space-y-1 shadow-2xl">
                <div>&gt; initialize_pipeline()</div>
                <div className="text-slate-300">&gt; SequenceMatcher: READY</div>
                <div className="text-amber-300">&gt; Spring Security: STATELESS</div>
              </div>

            </div>

            {/* Bottom floating dual action pill OVER the arch (just like reference image!) */}
            <div className="relative z-20 -mb-2 pb-5 flex items-center justify-center gap-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full bg-surface-dark hover:bg-black text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl transition-transform hover:scale-105"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-coral-400" />
              </a>

              <a
                href={PERSONAL_INFO.links.resume}
                download="Abhinav_Tiwari_Resume.pdf"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl transition-transform hover:scale-105 border border-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-coral-500" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Left Floating Testimonial/Quote Card (Exact positioning like reference image) */}
          <div className="hidden sm:block absolute left-0 top-1/4 -translate-x-4 lg:-translate-x-12 w-64 floating-card p-4 z-20">
            <div className="flex items-center gap-1 text-coral-500 text-xs font-bold mb-1">
              <span>★ ★ ★ ★ ★</span>
            </div>
            <p className="text-xs text-slate-700 italic leading-snug font-sans mb-3">
              "Focused on building AI-powered applications and reliable backend systems that solve practical problems."
            </p>
            <div className="flex items-center justify-between text-[11px] font-mono border-t border-slate-100 pt-2 text-slate-500">
              <span className="font-semibold text-slate-800">YMCA, Faridabad</span>
              <span className="text-coral-500 font-bold">2023–2027</span>
            </div>
          </div>

          {/* Right Floating Quick Stats Card (Exact positioning like reference image) */}
          <div className="hidden sm:block absolute right-0 top-1/3 translate-x-4 lg:translate-x-12 w-64 floating-card p-4 z-20 space-y-2">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Core Engineering Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-mono font-semibold">
                Python &amp; FastAPI
              </span>
              <span className="px-2.5 py-1 rounded-full bg-coral-500 text-white text-[11px] font-mono font-semibold">
                Spring Boot 4
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-mono font-semibold">
                PostgreSQL &amp; JPA
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-mono font-semibold">
                LeetCode Prep
              </span>
            </div>
          </div>

          {/* Floating Circle Socials (Right beneath on mobile, or bottom corner) */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-coral-500 hover:border-coral-400 transition-all shadow-sm"
              title="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-500 hover:border-amber-400 transition-all shadow-sm"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-coral-500 hover:border-coral-400 transition-all shadow-sm"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
