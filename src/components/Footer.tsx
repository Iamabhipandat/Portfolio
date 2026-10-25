import React from 'react';
import { Terminal, Code2, Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-dark-950 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            </div>
            <p className="text-[11px] text-slate-500">
              {PERSONAL_INFO.headline}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              className="hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AI Backend Architecture • Python &amp; Java Spring Boot</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
