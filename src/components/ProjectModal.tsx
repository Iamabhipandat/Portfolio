import React from 'react';
import { X, Layers, ShieldCheck, Terminal, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from './Icons';
import type { ProjectItem } from '../types/portfolio';
import { VisionMeetDemo } from './VisionMeetDemo';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-dark-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              TECHNICAL CASE STUDY
            </span>
            <span className="text-xs font-mono text-slate-400">
              ID: {project.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-dark-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Header info */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <span className={`text-xs font-mono px-3 py-1 rounded-full font-medium border ${
                project.status === 'Prototype'
                  ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                  : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              }`}>
                ● Status: {project.status}
              </span>
            </div>
            <p className="text-lg text-blue-400 font-mono mb-4">{project.subtitle}</p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.tagline}</p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-dark-800 border border-slate-700 text-xs font-mono text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* If VisionMeet AI, render interactive demo inside modal as well! */}
          {project.id === 'visionmeet-ai' && (
            <div>
              <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Live Interactive Deduplication Test Bench
              </h4>
              <VisionMeetDemo />
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-950 p-5 rounded-xl border border-rose-900/30 bg-gradient-to-br from-rose-950/10 to-transparent">
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Engineering Challenge & Motivation
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-dark-950 p-5 rounded-xl border border-emerald-900/30 bg-gradient-to-br from-emerald-950/10 to-transparent">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Proposed Technical Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Pipeline & Visual Diagram */}
          <div className="bg-dark-950 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" /> {project.diagramTitle}
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Data Flow Lifecycle
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-mono">
              {project.architectureDescription}
            </p>

            {/* Pipeline Step Flow */}
            <div className="space-y-3">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-dark-850 border border-slate-800/80 text-xs sm:text-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-300 font-mono">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implemented Features vs Contributions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-850 p-5 rounded-xl border border-slate-800">
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">
                Implemented Features
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-dark-850 p-5 rounded-xl border border-slate-800">
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">
                My Direct Technical Contributions
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
                {project.contributions.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 shrink-0">→</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Honest Status, Limitations & Future Roadmap */}
          <div className="bg-dark-950 p-6 rounded-xl border border-slate-800 space-y-5">
            <div>
              <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Current Implementation Status & Engineering Honesty
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono bg-dark-850 p-3.5 rounded-lg border border-slate-800">
                {project.honestStatus}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h5 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Known Limitations
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {project.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500/80">•</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-2">
                  Planned Future Improvements
                </h5>
                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {project.futureRoadmap.map((road, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500/80">⇥</span>
                      <span>{road}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono flex items-center gap-2 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" /> View Verified Repository
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium transition-colors"
            >
              Close Deep Dive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
