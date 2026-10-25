import React from 'react';
import { FileText } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DribbbleNavbar: React.FC = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4">
      <div className="flex items-center justify-between">
        
        {/* Left Nav Links */}
        <nav className="flex items-center gap-6 text-xs font-mono font-medium text-slate-700">
          <a href="#hero" className="hover:text-coral-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-coral-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-coral-500 transition-colors">About</a>
          <a href="#portfolio" className="hover:text-coral-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-coral-500 transition-colors">Contact</a>
        </nav>

        {/* Center Brand Name (matching `✦ grafly` in screenshot) */}
        <a href="#" className="flex items-center gap-1.5 font-display text-lg font-black tracking-tight text-slate-900 group">
          <span className="text-coral-500 text-sm">✦</span>
          <span className="group-hover:text-coral-500 transition-colors">abhinav</span>
        </a>

        {/* Right Socials & Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-coral-500 hover:border-coral-500 transition-all shadow-sm"
            title="GitHub"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all shadow-sm"
            title="LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.links.resume}
            download="Abhinav_Tiwari_Resume.pdf"
            className="px-4 py-2 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-slate-900/10 transition-all hover:scale-105"
          >
            <FileText className="w-3 h-3 text-coral-400" />
            <span>Resume</span>
          </a>
        </div>

      </div>
    </header>
  );
};
