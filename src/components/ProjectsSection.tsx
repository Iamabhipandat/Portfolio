import React, { useState } from 'react';
import { Layers, ArrowRight, Terminal, Cpu } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { VisionMeetDemo } from './VisionMeetDemo';

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3">
            <span>// 03. CORE IMPLEMENTATIONS</span>
            <span className="text-slate-600">|</span>
            <span>EXACTLY TWO FEATURED SYSTEMS</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Engineering Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
                Real architectures built with Python/FastAPI and Java/Spring Boot. Fully documented trade-offs, actual implementation status, and future technical roadmap.
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-dark-900 border border-slate-800 text-slate-400">
              Strict 2-Project Portfolio Architecture
            </div>
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="vision-box rounded-2xl p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-blue-400">{project.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-mono px-3 py-1 rounded-full font-medium border ${
                    project.status === 'Prototype'
                      ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  }`}>
                    ● {project.status}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 border border-slate-800 text-slate-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-slate-200 font-medium mb-6">
                {project.tagline}
              </p>

              {/* Grid: Problem/Solution and Interactive Playground */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                
                {/* Details Column */}
                <div className="lg:col-span-6 space-y-5">
                  
                  {/* Problem & Solution */}
                  <div className="space-y-3 font-mono text-xs sm:text-sm">
                    <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Problem Statement:
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">{project.problem}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-dark-950 border border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Proposed Technical Solution:
                      </div>
                      <p className="text-slate-300 leading-relaxed font-sans">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-dark-850 border border-slate-800 text-xs font-mono text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram Steps */}
                  <div className="bg-dark-950 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" /> {project.diagramTitle}
                    </div>
                    <div className="space-y-2">
                      {project.architectureSteps.slice(0, 4).map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <span className="text-blue-400 text-[10px] font-bold">[{idx + 1}]</span>
                          <span className="truncate">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Column: Interactive Testbench (VisionMeet) or Architecture Explorer (DevOps Incident) */}
                <div className="lg:col-span-6">
                  {project.id === 'visionmeet-ai' ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" /> Interactive Deduplication Bench
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Live Client Simulation</span>
                      </div>
                      <VisionMeetDemo />
                    </div>
                  ) : (
                    /* DevOps Incident Intelligence Backend Explorer */
                    <div className="bg-dark-950 border border-slate-800 rounded-xl p-5 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-indigo-400" />
                          <span className="font-mono text-xs font-bold text-slate-200">
                            SPRING BOOT SERVICE DIAGNOSTICS
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          HTTP 200 OK
                        </span>
                      </div>

                      {/* Code Snippet from Verified Repo */}
                      <div className="bg-dark-900 rounded-lg p-3.5 font-mono text-xs text-slate-300 space-y-2 border border-slate-800">
                        <div className="text-slate-500">// Verified Repository: IncidentAnalyzerApplication</div>
                        <div className="text-blue-400">@GetMapping("/api/health")</div>
                        <div className="text-purple-400">public String <span className="text-yellow-400">health</span>() &#123;</div>
                        <div className="pl-4 text-emerald-300">return "Incident Analyzer Backend is running";</div>
                        <div>&#125;</div>
                      </div>

                      {/* PostgreSQL Schema Details */}
                      <div className="bg-dark-900/60 rounded-lg p-3.5 border border-slate-800/80 text-xs font-mono space-y-1.5">
                        <div className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center justify-between">
                          <span>PostgreSQL Relational Storage</span>
                          <span className="text-slate-500">Hibernate DDL: update</span>
                        </div>
                        <div className="text-slate-300">
                          Entity: <code className="text-indigo-300 font-bold">com.abhinav.incidentanalyzer.entity.Incident</code>
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Primary Key: <code className="text-amber-300">@Id private Long id;</code>
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Driver: <span className="text-cyan-300">org.postgresql:postgresql:runtime</span>
                        </div>
                      </div>

                      {/* Future AI Roadmap Notice */}
                      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-lg p-3 text-xs font-mono text-indigo-200">
                        <span className="text-indigo-400 font-bold block mb-1">PLANNED NEXT MILESTONE:</span>
                        Vector embeddings &amp; automated root-cause timeline analysis are documented roadmap goals to be connected to the Spring Boot REST core.
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Card Footer: Buttons to view case study & code */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-medium flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
                  >
                    <span>Read Full Technical Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs flex items-center gap-2 transition-colors"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>

                <div className="text-xs font-mono text-slate-500">
                  Engineering Honesty: Verified Against Source Code
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
