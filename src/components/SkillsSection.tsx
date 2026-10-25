import React, { useState } from 'react';
import { Terminal, Cpu, Layers, Layout, Database, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const selectedCategory = SKILL_CATEGORIES[selectedCategoryIndex];

  return (
    <section id="skills" className="py-20 relative border-t border-slate-900 bg-dark-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3">
            <span>// 02. TECHNICAL CAPABILITIES</span>
            <span className="text-slate-600">|</span>
            <span>ENGINEERING STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Backend &amp; AI Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
            Structured strictly by actual engineering utility. No artificial percentages or inflated ratings.
          </p>
        </div>

        {/* Category Pills (Inspired by uploaded image 2: frosted frame pills) */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all ${
                selectedCategoryIndex === idx
                  ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 border border-blue-400/50'
                  : 'bg-dark-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-dark-850'
              }`}
            >
              <span className={selectedCategoryIndex === idx ? 'text-white' : 'text-blue-400'}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display Card */}
        <div className="bg-dark-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
          
          {/* Header of Active Category */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                Category {selectedCategoryIndex + 1} of {SKILL_CATEGORIES.length}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {getIcon(selectedCategory.icon)}
                </span>
                {selectedCategory.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-md">
              {selectedCategory.description}
            </p>
          </div>

          {/* Special Callout Note for Programming Languages */}
          {selectedCategory.title === 'Programming Languages' && (
            <div className="mb-6 p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs font-mono text-blue-300 flex items-start gap-3">
              <span className="text-blue-400 font-bold shrink-0">NOTE:</span>
              <span>
                Python and Java are my dedicated primary programming languages for backend architecture and algorithmic computing. Other web technologies (TypeScript, HTML, CSS) are utilized in frontend integration layers.
              </span>
            </div>
          )}

          {/* Grid of Skills within Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-dark-950 p-4 rounded-xl border border-slate-800/90 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white font-mono group-hover:text-blue-300 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {skill.name}
                  </h4>
                  {skill.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {skill.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
