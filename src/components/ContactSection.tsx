import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, MessageSquare, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-bot spam protection
  });
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Spam honeypot detection
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please complete all required fields before sending.',
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare mailto link with encoded URI parameters
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.links.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Email draft generated in your default mail client. You can also email tiwariabhinav164@gmail.com directly.',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-900 bg-dark-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3">
            <span>// 06. COMMUNICATION</span>
            <span className="text-slate-600">|</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Conversation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
            Available for AI backend, Python backend, and Java full-stack software engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white font-mono mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" /> Direct Communication Channels
              </h3>

              <div className="space-y-4 text-xs font-mono">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-[10px] text-slate-500">PRIMARY EMAIL</div>
                      <a href={`mailto:${PERSONAL_INFO.links.email}`} className="text-slate-200 hover:text-blue-400 truncate block">
                        {PERSONAL_INFO.links.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-dark-850 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors block"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-500">LINKEDIN PROFILE</div>
                      <div className="text-slate-200">abhinavtiwari164</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400">Connect ↗</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors block"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-slate-300 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-500">GITHUB REPOSITORIES</div>
                      <div className="text-slate-200">Iamabhipandat</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Explore ↗</span>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-500">BASE LOCATION</div>
                    <div className="text-slate-200">Faridabad, Haryana, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400">● Available</span> for full-time engineering roles, associate software engineer positions, and graduate opportunities.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white font-mono mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" /> Send a Structured Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                All submissions are formatted and dispatched directly to my inbox with no tracking intermediaries.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam (invisible to human users) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-dark-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-dark-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI Backend Engineer Role / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Content <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your inquiry, project scope, or opportunity details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-dark-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 font-mono transition-colors resize-none"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3 rounded-xl text-xs font-mono ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-950/30 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-mono text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Transmit Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
