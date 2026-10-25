import React, { useState } from 'react';
import { ChevronRight, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { VisionMeetDemo } from './VisionMeetDemo';

interface ServiceItem {
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  details: string[];
  codePreview?: {
    lang: string;
    code: string;
  };
  hasDemo?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Python & AI Backend Engineering',
    category: 'High-Performance Asynchronous APIs',
    tags: ['Python', 'FastAPI', 'Pydantic v2', 'REST Endpoints', 'AI/LLM Integration'],
    description:
      'Designing robust asynchronous backend services in Python. Enforcing strict request and response contracts through Pydantic schemas, managing HTTP status codes, handling exceptions defensively, and integrating external model endpoints into dependable workflows.',
    details: [
      'Asynchronous endpoint routing using FastAPI for high-throughput I/O',
      'Pydantic request payload validation and custom response models',
      'Clean exception handlers converting unexpected runtime errors into structured JSON',
      'Defensive AI model integration avoiding brittle dependencies'
    ],
    codePreview: {
      lang: 'Python (FastAPI)',
      code: `@router.post("/api/v1/inference")\nasync def process_payload(req: RequestSchema) -> ResponseSchema:\n    validated = req.clean_text()\n    result = await ai_service.predict(validated)\n    return ResponseSchema(status="SUCCESS", data=result)`
    }
  },
  {
    number: '02',
    title: 'VisionMeet Question Deduplication Engine',
    category: 'Text-Similarity & NLP Pipelines',
    tags: ['difflib.SequenceMatcher', 'Question Deduplication', 'Hackathon Prototype', 'React Dashboard'],
    description:
      'Constructed for the WeMakeDevs / Kunal Kushwaha Hackathon to eliminate repetitive questions in high-volume webinars. Normalizes chat transcripts, runs pairwise lexical similarity comparisons, and routes unique inquiries to the speaker dashboard.',
    details: [
      'Pairwise text comparison utilizing difflib.SequenceMatcher ratio calculations',
      'Configurable sensitivity threshold (0.50 – 0.95) to balance recall and precision',
      'Privacy-by-design: meeting questions are ephemerally cached and purged post-call',
      'Reactive frontend dashboard for real-time speaker insight'
    ],
    hasDemo: true
  },
  {
    number: '03',
    title: 'Enterprise Java & Spring Boot Systems',
    category: 'Multi-Tier Enterprise Architecture',
    tags: ['Java 17', 'Spring Boot 4', 'Controller-Service-Repo', 'Spring Data JPA', 'PostgreSQL'],
    description:
      'Developing structured, maintainable backend applications in Java following the Controller-Service-Repository architecture. Configuring relational datasources in PostgreSQL, managing transactions with Hibernate JPA, and enabling operational observability through Spring Boot Actuator.',
    details: [
      'Clean multi-layer separation isolating business logic from HTTP transport',
      'Spring Data JPA automated query generation and Hibernate schema management',
      'Production telemetry via Spring Boot Actuator (/api/health)',
      'Maven multi-dependency lifecycle and testing configurations'
    ],
    codePreview: {
      lang: 'Java (Spring Boot)',
      code: `@RestController\n@RequestMapping("/api/incidents")\npublic class IncidentController {\n    private final IncidentService service;\n\n    @GetMapping("/health")\n    public ResponseEntity<String> health() {\n        return ResponseEntity.ok("Incident Analyzer Backend is running");\n    }\n}`
    }
  },
  {
    number: '04',
    title: 'Stateless JWT Authentication & Security',
    category: 'Spring Security Filter Chains',
    tags: ['Spring Security', 'JWT Issuance', 'OncePerRequestFilter', 'CORS Debugging'],
    description:
      'Implementing secure, stateless authentication in Spring Boot. Managing password hashing with BCrypt, issuing HMAC-SHA signed JWTs, intercepting requests with JwtAuthenticationFilter, and debugging common security hurdles such as 403 Forbidden errors on CORS preflight OPTIONS requests.',
    details: [
      'Custom JwtAuthenticationFilter extending OncePerRequestFilter',
      'Email verification token entity lifecycle and expiry management',
      'Explicit CORS origin configuration to support decoupled frontend clients',
      'Stateless session management ensuring zero server-side session leaks'
    ],
    codePreview: {
      lang: 'Java (Spring Security)',
      code: `http.sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n    .authorizeHttpRequests(auth -> auth\n        .requestMatchers("/api/auth/**").permitAll()\n        .anyRequest().authenticated())\n    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);`
    }
  },
  {
    number: '05',
    title: 'Relational Database Modeling & Full-Stack Integration',
    category: 'Persistence & Client Communication',
    tags: ['PostgreSQL', 'MySQL', 'React Integration', 'DBeaver', 'API Resilience'],
    description:
      'Structuring relational schemas with primary keys, foreign constraints, and indexes. Connecting React and Vite frontends to backend services, handling loading and error states gracefully, and preventing data loss with validated contracts.',
    details: [
      'Relational schema design and application integration with DBeaver inspection',
      'Client-side asynchronous state synchronization and error boundaries',
      'Environment-based endpoint configurations (.env.example)',
      'Docker containerization concepts for reproducible local environments'
    ],
    codePreview: {
      lang: 'SQL / Relational Schema',
      code: `CREATE TABLE incidents (\n    id BIGSERIAL PRIMARY KEY,\n    title VARCHAR(255) NOT NULL,\n    severity VARCHAR(50) NOT NULL,\n    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()\n);`
    }
  }
];

export const ServicesAccordion: React.FC = () => {
  // Default to item 01 or 02 open like in the reference screenshot
  const [openIndex, setOpenIndex] = useState<number>(1);

  const toggleItem = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-coral-500 mb-2">
            <span>— My Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            Services &amp; Capabilities I Provide <span className="text-coral-500 text-2xl">✦</span>
          </h2>
          <p className="text-slate-500 text-sm font-sans mt-3">
            Real engineering expertise across Python AI workflows, Java/Spring Boot systems, and reliable API contracts.
          </p>
        </div>

        {/* Accordion List (Directly styled like reference image) */}
        <div className="space-y-4">
          {SERVICES.map((srv, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={srv.number}
                className="rounded-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Closed / Header Button */}
                {!isOpen ? (
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 px-6 sm:px-8 bg-surface-light hover:bg-slate-100/80 border border-slate-200/90 rounded-2xl flex items-center justify-between transition-all group text-left"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-coral-500 transition-colors">
                        {srv.number}.
                      </span>
                      <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-coral-600 transition-colors">
                        {srv.title}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-coral-500 group-hover:border-coral-300 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                ) : (
                  /* Expanded Dark Card (Inspired directly by the active item 02 in user screenshot!) */
                  <div className="bg-surface-dark text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6 cursor-pointer" onClick={() => toggleItem(idx)}>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-sm font-bold text-coral-500">
                          {srv.number}.
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {srv.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-coral-500/30">
                        ✕
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Info & Tags */}
                      <div className="lg:col-span-6 space-y-5">
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {srv.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-full bg-surface-darkCard border border-slate-700/80 text-xs font-mono text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-slate-300 leading-relaxed font-sans">
                          {srv.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-2 pt-2">
                          {srv.details.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5 text-xs font-mono text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-coral-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3">
                          <a
                            href="#projects"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-coral-400 hover:text-coral-300 font-semibold"
                          >
                            <span>Explore in Featured Projects</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Right: Live Interactive Demo or Code Snippet */}
                      <div className="lg:col-span-6">
                        {srv.hasDemo ? (
                          <div className="space-y-2">
                            <div className="text-[11px] font-mono text-coral-400 uppercase tracking-wider flex items-center gap-1.5">
                              <Terminal className="w-3.5 h-3.5" /> Live In-Browser Deduplication Engine
                            </div>
                            <VisionMeetDemo />
                          </div>
                        ) : srv.codePreview ? (
                          <div className="bg-surface-darker rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-500">
                              <span>// {srv.codePreview.lang}</span>
                              <span className="text-coral-400">Verified Pattern</span>
                            </div>
                            <pre className="overflow-x-auto text-xs leading-relaxed text-slate-200">
                              <code>{srv.codePreview.code}</code>
                            </pre>
                          </div>
                        ) : null}
                      </div>

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
