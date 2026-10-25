import React, { useState } from 'react';
import { 
  Key, 
  Lock, 
  Layers, 
  AlertTriangle
} from 'lucide-react';
import { AUTH_SYSTEM_STEPS, SUPPORTING_ENGINEERING } from '../data/portfolioData';

export const EngineeringSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStepData = AUTH_SYSTEM_STEPS.find(s => s.step === activeStep) || AUTH_SYSTEM_STEPS[0];

  return (
    <section id="engineering" className="py-20 relative border-t border-slate-900 bg-dark-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dark-900 border border-slate-800 text-xs font-mono text-blue-400 mb-3">
            <span>// 04. SYSTEMS ENGINEERING</span>
            <span className="text-slate-600">|</span>
            <span>BACKEND ARCHITECTURE &amp; SECURITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend Architecture &amp; System Reliability
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
            Practical demonstrations of Spring Boot security filter chains, stateless JWT validation, API integration, and full-stack data integrity.
          </p>
        </div>

        {/* Feature Showcase: Interactive Java JWT Authentication Flow */}
        <div className="vision-box rounded-2xl p-6 sm:p-8 mb-16 relative">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1 block">
                Interactive Architecture Visualizer
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-400" />
                Spring Boot Stateless Authentication &amp; JWT Flow
              </h3>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-dark-950 border border-slate-800 text-slate-400">
              Spring Security 6.x • JWT Filter Chain
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {AUTH_SYSTEM_STEPS.map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  activeStep === s.step
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-dark-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={activeStep === s.step ? 'text-blue-400 font-bold' : 'text-slate-500'}>
                    STEP 0{s.step}
                  </span>
                  {activeStep === s.step && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                </div>
                <div className="text-xs font-mono font-medium truncate">{s.title.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Step Visualizer Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-dark-950 p-6 rounded-xl border border-slate-800">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">
                  {currentStepData.step}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-mono">
                  {currentStepData.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-950/20 p-2 rounded border border-indigo-500/20">
                <span>Protocol / Actor:</span>
                <span className="text-slate-200 font-semibold">{currentStepData.actor}</span>
                <span className="text-slate-600">→</span>
                <span className="text-emerald-400">{currentStepData.action}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                {currentStepData.technicalDetail}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-slate-400">
                  Stateless Session
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-slate-400">
                  HMAC-SHA256 Secret
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-slate-400">
                  OncePerRequestFilter
                </span>
              </div>
            </div>

            {/* Sanitized Architecture Code Snippet */}
            <div className="lg:col-span-5 bg-dark-900 rounded-lg p-4 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="text-slate-500 pb-1 border-b border-slate-800 flex justify-between">
                <span>// Sanitized Security Implementation</span>
                <span className="text-emerald-400">Live Context</span>
              </div>
              <div className="text-purple-400">@Configuration</div>
              <div className="text-purple-400">@EnableWebSecurity</div>
              <div>
                <span className="text-blue-400">public class</span> SecurityConfig &#123;
              </div>
              <div className="pl-4 text-slate-400">
                .authorizeHttpRequests(auth -&gt; auth
              </div>
              <div className="pl-6 text-emerald-400">
                .requestMatchers(<span className="text-amber-300">"/api/auth/**"</span>).permitAll()
              </div>
              <div className="pl-6 text-slate-300">
                .anyRequest().authenticated()
              </div>
              <div className="pl-4 text-slate-400">)</div>
              <div className="pl-4 text-indigo-300">
                .sessionManagement(s -&gt; s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
              </div>
              <div className="pl-4 text-blue-300">
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
              </div>
              <div>&#125;</div>
            </div>
          </div>

          {/* Key Lessons: 403 Forbidden & CORS Debugging */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-950 p-4 rounded-xl border border-slate-800/80">
              <h5 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" /> Debugging 403 Forbidden &amp; CORS Preflight
              </h5>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Diagnosed cross-origin communication failures where browser preflight <code className="text-slate-300">OPTIONS</code> requests were rejected by the security filter chain before authentication. Resolved by explicitly permitting OPTIONS calls in the security filter and binding dedicated <code className="text-slate-300">CorsConfigurationSource</code> beans.
              </p>
            </div>

            <div className="bg-dark-950 p-4 rounded-xl border border-slate-800/80">
              <h5 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5" /> Secret &amp; Expiry Governance
              </h5>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Strict separation of secrets using environment variables (<code className="text-slate-300">JWT_SECRET</code>, <code className="text-slate-300">JWT_EXPIRATION_MS</code>) in application.properties. Implemented graceful expiry handling preventing uncaught exceptions and returning clean JSON error responses to client callers.
              </p>
            </div>
          </div>

        </div>

        {/* Supporting Engineering Highlights Cards (Prompt Section 5) */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            Supporting Engineering &amp; System Integration Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORTING_ENGINEERING.map((item, idx) => (
              <div
                key={idx}
                className="bg-dark-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-mono mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 font-mono leading-relaxed">
                    {item.summary}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 shrink-0">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
