import React from 'react';
import { 
  ExternalLink, 
  Code2, 
  Binary 
} from 'lucide-react';
import { OPEN_SOURCE_AND_COMMUNITY, DSA_TOPICS, PERSONAL_INFO } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3">
            <span>// 05. JOURNEY &amp; OPEN SOURCE</span>
            <span className="text-slate-600">|</span>
            <span>HACKATHONS, TOOLING &amp; PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Journey &amp; Technical Growth
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
            Practical engagement in hackathon prototypes, open-source computer vision demos, and algorithmic problem-solving.
          </p>
        </div>

        {/* Hackathon & Open-Source Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OPEN_SOURCE_AND_COMMUNITY.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="text-blue-400 font-semibold">{item.role}</span>
                  <span className="text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-white font-mono mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 bg-dark-950 p-2.5 rounded-lg border border-slate-800 mb-3">
                  <span className="text-emerald-400 font-semibold block mb-0.5">Key Learning:</span>
                  {item.keyTakeaway}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Live Hugging Face Space</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Problem Solving & DSA Section (Prompt Section 7) */}
        <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Binary className="w-4 h-4" /> Supporting Engineering Preparation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Data Structures, Algorithms &amp; Problem Solving (Java)
              </h3>
            </div>

            <a
              href={PERSONAL_INFO.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="frosted-pill text-amber-300 hover:border-amber-400/50"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed mb-6 max-w-3xl">
            Active preparation in software engineering fundamentals, algorithm complexity analysis, and object-oriented implementations in Java. Focused on clean modular solutions and boundary case verification.
          </p>

          {/* DSA Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DSA_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="bg-dark-950 p-3.5 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-slate-200">
                    {topic.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {topic.status}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  {topic.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500">
            <span>Primary Language for DSA: Java</span>
            <span>Focus: Time &amp; Space Complexity Trade-offs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
