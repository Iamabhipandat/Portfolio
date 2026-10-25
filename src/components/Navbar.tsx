import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#engineering' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-5 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-lg shadow-slate-900/5'
            : 'bg-white/80 backdrop-blur-md border border-slate-200/60'
        }`}
      >
        {/* Brand / Logo (matching reference style) */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-coral-500/30">
            AT
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-coral-500 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Center Pill Menu (Matching reference navigation pill) */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-light px-3 py-1.5 rounded-full border border-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 rounded-full text-xs font-mono font-medium text-slate-600 hover:text-slate-900 hover:bg-white transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.links.resume}
            download="Abhinav_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-mono font-bold transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-coral-500" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-coral-500 hover:bg-coral-600 text-white text-xs font-mono font-bold transition-all shadow-md shadow-coral-500/25"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-mono font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <a
              href={PERSONAL_INFO.links.resume}
              download="Abhinav_Tiwari_Resume.pdf"
              className="flex-1 py-2 text-center rounded-full bg-slate-100 text-xs font-mono font-bold text-slate-800"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-full bg-coral-500 text-xs font-mono font-bold text-white"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
