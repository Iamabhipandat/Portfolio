import React, { useState } from 'react';
import { ArrowUpRight, Terminal, ExternalLink, Layers } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';

export const DribbblePortfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visionProject = FEATURED_PROJECTS.find(p => p.id === 'visionmeet-ai') || FEATURED_PROJECTS[0];
  const devopsProject = FEATURED_PROJECTS.find(p => p.id === 'devops-incident-intelligence') || FEATURED_PROJECTS[1];

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden border-t border-slate-300/60">
      
      {/* Huge Watermark Background Text (like in screenshot) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center watermark-text text-[11vw] font-black leading-none select-none z-0">
        LATEST PORTFOLIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              02 // IMPLEMENTATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase text-slate-900 tracking-tight">
              Featured Systems &amp; Engineering
            </h2>
          </div>

          <div className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold shadow-sm">
            Strict 2-Project Portfolio Architecture
          </div>
        </div>

        {/* 4-Card Visual Grid (Exact layout from screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: VisionMeet AI (Vibrant Orange Card) */}
          <div className="group relative rounded-3xl bg-gradient-to-br from-coral-500 to-coral-600 p-8 text-white shadow-xl shadow-coral-500/20 overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-black/20 text-white backdrop-blur-sm">
                  ● Prototype • Python / FastAPI
                </span>
                <span className="text-white/80 font-mono text-xs">01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white mt-2">
                VisionMeet AI
              </h3>

              <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed max-w-md">
                Meeting question deduplication engine using difflib.SequenceMatcher lexical similarity matching and ephemeral session memory.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white">FastAPI</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white">difflib</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 text-white">React Dashboard</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(visionProject)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-xs font-mono font-bold hover:bg-slate-100 transition-all shadow-md group-hover:scale-105"
              >
                <Terminal className="w-3.5 h-3.5 text-coral-500" />
                <span>Test Live Bench &amp; Case Study</span>
              </button>

              <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: DevOps Incident Intelligence (Clean Dark Slate Card) */}
          <div className="group relative rounded-3xl bg-surface-dark p-8 text-white shadow-xl shadow-black/10 overflow-hidden flex flex-col justify-between min-h-[340px] border border-slate-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-slate-800 text-emerald-400">
                  ● In Development • Spring Boot
                </span>
                <span className="text-slate-500 font-mono text-xs">02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white mt-2">
                DevOps Incident Intel
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-md">
                Backend service for software incident investigation, PostgreSQL schema integrity, and Actuator operational health telemetry.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">Spring Boot 4</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">PostgreSQL</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">Actuator</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(devopsProject)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral-500 text-white text-xs font-mono font-bold hover:bg-coral-600 transition-all shadow-md group-hover:scale-105"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Inspect Architecture &amp; Health</span>
              </button>

              <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Spring Boot JWT Security Engine */}
          <div className="group relative rounded-3xl bg-white p-8 text-slate-900 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col justify-between min-h-[280px] border border-slate-200/90">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Supporting Highlight • Security
                </span>
                <span className="text-slate-400 font-mono text-xs">03</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-slate-900 mt-2">
                Spring Boot JWT Auth Engine
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Stateless authentication filter chains, HMAC-SHA token validation, expiry governance, and CORS preflight resolution.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">Spring Security</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">OncePerRequestFilter</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="#engineering"
                className="text-xs font-mono font-bold text-coral-600 hover:text-coral-500 flex items-center gap-1"
              >
                <span>View 7-Stage Interactive Flow</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Kornia Hugging Face Gradio Demo */}
          <div className="group relative rounded-3xl bg-white p-8 text-slate-900 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col justify-between min-h-[280px] border border-slate-200/90">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                  Open Source • Hugging Face
                </span>
                <span className="text-slate-400 font-mono text-xs">04</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-slate-900 mt-2">
                Kornia Vision Space
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Interactive Hugging Face Space demonstrating Kornia differentiable computer vision &amp; tensor histogram equalization via Gradio.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">Hugging Face</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">Gradio</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">PyTorch</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="https://huggingface.co/spaces/Iamabhipandat/kornia-image-equalization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-violet-600 hover:text-violet-500 flex items-center gap-1"
              >
                <span>Launch Live Space ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
