import type { ProjectItem, SkillCategory, AuthStep } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Abhinav Tiwari',
  title: 'AI Backend Engineer',
  secondaryTitles: ['Python Backend Developer', 'Java Full-Stack Developer'],
  headline: 'AI Backend Engineer building intelligent applications and reliable backend systems.',
  tagline: 'Turning AI capabilities into practical products through thoughtful backend engineering.',
  aboutIntro: "I'm a final-year Computer Science Engineering student specializing in AI and Machine Learning, focused on building AI-powered applications and reliable backend systems. I work with Python for AI and backend development and Java with Spring Boot for backend engineering. I enjoy designing APIs, integrating databases, implementing authentication, and building complete software products that solve practical problems.",
  education: {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    specialization: 'Artificial Intelligence and Machine Learning',
    institution: 'J.C. Bose University of Science and Technology, YMCA',
    location: 'Faridabad, Haryana, India',
    period: '2023 – 2027',
    status: 'Final-Year Student',
  },
  links: {
    github: 'https://github.com/Iamabhipandat',
    linkedin: 'https://www.linkedin.com/in/abhinavtiwari164',
    leetcode: 'https://leetcode.com/u/0hvzpub040',
    email: 'tiwariabhinav164@gmail.com',
    huggingface: 'https://huggingface.co/spaces/Iamabhipandat/kornia-image-equalization',
    resume: '/resume.pdf',
  },
  coreFundamentals: [
    'Object-Oriented Programming (OOPs)',
    'Data Structures & Algorithms',
    'Operating Systems & Linux Shell Basics',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'System Design & RESTful Principles'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for backend logic, AI services, and algorithmic problem-solving.',
    icon: 'Terminal',
    skills: [
      { name: 'Python', description: 'Primary language for AI backend services, text processing, and API design.' },
      { name: 'Java', description: 'Core and Advanced Java for robust enterprise backend systems and DSA.' },
    ],
  },
  {
    title: 'Python & AI Backend Engineering',
    description: 'Fast, asynchronous web services and text-processing workflows.',
    icon: 'Cpu',
    skills: [
      { name: 'FastAPI', description: 'Asynchronous REST APIs with Pydantic request/response validation.' },
      { name: 'REST API Design', description: 'Resource-oriented endpoints, HTTP status semantics, error structures.' },
      { name: 'Text Processing & Duplicate Detection', description: 'Similarity calculation algorithms (SequenceMatcher) and question filtering.' },
      { name: 'AI & LLM API Integration', description: 'Integrating model endpoints into backend workflows where genuinely implemented.' },
      { name: 'NLP Fundamentals', description: 'Tokenization, string normalization, lexical similarity, and text classification.' },
      { name: 'Backend Testing & Exception Handling', description: 'Defensive programming, custom HTTP exception handlers, test fixtures.' },
    ],
  },
  {
    title: 'Java Backend Development',
    description: 'Structured enterprise backends using Spring Boot ecosystem.',
    icon: 'Layers',
    skills: [
      { name: 'Spring Boot', description: 'Auto-configuration, dependency injection, and production-ready service architectures.' },
      { name: 'Spring Security', description: 'Stateless filter chains, method security, and authentication interceptors.' },
      { name: 'JWT Authentication', description: 'Token issuance, validation filters, secret management, and expiration flows.' },
      { name: 'Controller-Service-Repository', description: 'Clean multi-layer separation of concerns with domain DTOs.' },
      { name: 'Spring Data JPA & Hibernate', description: 'Entity mappings, transactional persistence, and automated schema migrations.' },
      { name: 'Maven Build Tool', description: 'Dependency management, lifecycle plugins, and multi-module builds.' },
      { name: 'Reactive & Microservice Concepts', description: 'Spring WebClient fundamentals and decoupled service architectures.' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Interactive user interfaces designed to consume and visualize backend services.',
    icon: 'Layout',
    skills: [
      { name: 'React.js & Vite', description: 'Component-driven state architectures with fast HMR bundling.' },
      { name: 'TypeScript', description: 'Strict type safety for API contracts, component props, and domain models.' },
      { name: 'Tailwind CSS', description: 'Utility-first responsive layouts, dark themes, and custom design systems.' },
      { name: 'Next.js 14', description: 'App router architecture and full-stack rendering integration.' },
      { name: 'API Integration & State Sync', description: 'CORS resolution, asynchronous fetch/Axios handling, and loading/error states.' },
    ],
  },
  {
    title: 'Databases & Data Storage',
    description: 'Relational schema design and document storage systems applied per project requirement.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', description: 'Relational data modeling, foreign keys, and indexes for structured entities.' },
      { name: 'MySQL', description: 'Relational database querying, constraints, and JDBC persistence.' },
      { name: 'MongoDB', description: 'Document-oriented schema flexibility for unstructured data payloads.' },
      { name: 'Appwrite', description: 'Backend-as-a-Service data store and authentication integration.' },
      { name: 'DBeaver', description: 'Database management, SQL execution, schema exploration, and performance inspection.' },
    ],
  },
  {
    title: 'Developer Tools & Deployment',
    description: 'Engineering tooling for debugging, containerization, and hosting.',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', description: 'Branching strategies, pull requests, semantic versioning, and code review.' },
      { name: 'Docker', description: 'Containerization concepts, Dockerfiles, and environment isolation.' },
      { name: 'IntelliJ IDEA & VS Code', description: 'Primary IDEs for Java Spring Boot and Python/TypeScript development.' },
      { name: 'Postman', description: 'API contract verification, request collections, and auth token testing.' },
      { name: 'Render & Vercel', description: 'Platform hosting for Python/React web services and frontend deployments.' },
      { name: 'Sentry & Error Monitoring', description: 'Application observability and runtime exception tracking.' },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'visionmeet-ai',
    title: 'VisionMeet AI',
    subtitle: 'AI Meeting Assistant',
    category: 'Python / FastAPI / React / NLP',
    tagline: 'Intelligent meeting question deduplication and discussion filtering engine.',
    status: 'Prototype',
    stack: ['Python', 'FastAPI', 'difflib (SequenceMatcher)', 'React', 'Vite', 'Tailwind CSS', 'Pydantic'],
    problem:
      'In high-volume virtual meetings and webinars, participants frequently submit duplicate or nearly identical questions into the chat. Speakers and moderators waste valuable minutes answering the same query repeatedly, while unique, high-priority questions get pushed down the scrollback.',
    solution:
      'Engineered an intelligent assistant that ingests meeting questions, runs lexical similarity analysis to isolate repetitive queries from unique discussions, and surfaces prioritized insights on a real-time React dashboard.',
    architectureDescription:
      'Meeting Interface sends question payloads to a Python FastAPI backend. The text preprocessing pipeline normalizes the input, executes pairwise similarity scoring against active session questions using difflib.SequenceMatcher, and classifies the question as Duplicate (exceeding threshold, e.g. 0.75) or Unique. Results are returned to the React frontend with classified status tags.',
    architectureSteps: [
      'Meeting Participant submits question via interface',
      'FastAPI endpoint validates payload via Pydantic schema',
      'Text Preprocessing: lowercasing, whitespace trimming, punctuation stripping',
      'Similarity Engine: Pairwise SequenceMatcher comparison against session question pool',
      'Threshold Decision: Score >= 0.75 flagged as duplicate; < 0.75 stored as unique',
      'Dashboard Update: Frontend renders classified stream, saving speaker time'
    ],
    diagramTitle: 'Illustrative Architecture: VisionMeet AI Question Pipeline',
    keyFeatures: [
      'Duplicate-question detection using text-similarity matching',
      'Unique-question stream isolation for focused discussion',
      'Configurable similarity threshold for tuning sensitivity',
      'Session-scoped memory: meeting data retained only during active call',
      'Clean FastAPI REST endpoints with structured JSON schemas',
      'Responsive React dashboard with question categorization indicators'
    ],
    contributions: [
      'Developed the FastAPI backend prototype for question ingestion and evaluation',
      'Implemented the difflib.SequenceMatcher text-similarity comparison algorithm',
      'Designed the React + Vite frontend interface for live question classification',
      'Formulated the privacy-by-design policy for meeting question ephemeral lifecycles',
      'Participated in the AI/multimodal hackathon associated with Kunal Kushwaha & WeMakeDevs'
    ],
    honestStatus:
      'Working hackathon prototype. Uses lexical text-similarity algorithms (SequenceMatcher) rather than heavy neural embeddings or Zoom/Teams bot SDKs. Automatic private replies and production bot integrations are planned roadmap milestones.',
    limitations: [
      'difflib.SequenceMatcher is lexical; it catches syntactically similar questions but can miss heavily rephrased semantic paraphrases',
      'Requires manual question submission in the prototype rather than direct audio stream transcription',
      'Current session state resides in server memory without distributed Redis caching'
    ],
    futureRoadmap: [
      'Transition from SequenceMatcher to local dense sentence-transformer embeddings (e.g., all-MiniLM-L6-v2) for true semantic similarity',
      'WebRTC / audio transcript chunk ingestion for automated real-time question extraction',
      'Automated background deletion routines ensuring zero post-meeting data retention',
      'Integration with external LLM APIs for automated one-click contextual answers to duplicate questions'
    ],
    githubUrl: 'https://github.com/Iamabhipandat',
    liveUrl: undefined,
  },
  {
    id: 'devops-incident-intelligence',
    title: 'DevOps Incident Intelligence',
    subtitle: 'Incident Investigation & Diagnostic Service',
    category: 'Java / Spring Boot / PostgreSQL / REST API',
    tagline: 'Structured backend service for software incident triage, tracking, and diagnostics.',
    status: 'In Development',
    stack: ['Java 17', 'Spring Boot 4', 'Spring Data JPA', 'PostgreSQL', 'Hibernate', 'Spring Boot Actuator', 'Maven', 'Lombok'],
    problem:
      'During software outages and system incidents, developers and on-call engineers are inundated with fragmented log dumps, uncoordinated error reports, and repeated failure patterns across microservices, slowing down Mean Time To Resolution (MTTR).',
    solution:
      'Constructed a reliable Spring Boot backend service that standardizes incident ingestion, enforces relational schema integrity in PostgreSQL, exposes health telemetry via Spring Boot Actuator, and lays the architectural foundation for recurring failure pattern recognition.',
    architectureDescription:
      'Incoming incident reports and system errors are submitted via REST endpoints to Spring Boot controllers. Requests pass through validation layers before entering service components. Spring Data JPA and Hibernate persist incidents to a PostgreSQL relational database. Actuator exposes operational health metrics at /api/health.',
    architectureSteps: [
      'Client / Alert webhook submits incident payload',
      'Spring Boot Controller intercepts and validates request entity',
      'Service layer encapsulates business rules and incident state tracking',
      'Spring Data JPA repository executes transactional persistence to PostgreSQL',
      'Actuator health indicators monitor database and service availability',
      'Structured response returned with incident tracking ID and timestamp'
    ],
    diagramTitle: 'Verified Architecture: Spring Boot Incident Backend',
    keyFeatures: [
      'Spring Boot 4 & Java 17 backend service foundation',
      'Relational PostgreSQL persistence with Hibernate DDL updates',
      'Incident domain entity modeling with primary key generation and field tracking',
      'Operational health monitoring endpoint (/api/health) via REST Controller',
      'Spring Boot Actuator integration for production readiness and metrics',
      'Modular Maven build configuration with comprehensive test scaffolding'
    ],
    contributions: [
      'Architected the Spring Boot application structure (com.abhinav.incidentanalyzer)',
      'Configured the PostgreSQL datasource connectivity and Hibernate JPA dialect',
      'Implemented the Incident JPA entity and schema management',
      'Created the REST HealthController providing system liveness verification',
      'Configured Maven dependencies and Actuator monitoring tools'
    ],
    honestStatus:
      'Active backend service under active development. The core Spring Boot REST architecture, database integration (PostgreSQL), and health endpoints are fully verified in source code. Advanced AI-driven log clustering and automated postmortems represent the documented next phase.',
    limitations: [
      'Currently focused on structured incident record ingestion rather than automated log parsing',
      'PostgreSQL is configured for localhost development; cloud staging deployment is in progress',
      'AI log correlation engine is not yet connected to the Java backend'
    ],
    futureRoadmap: [
      'Implement incident classification endpoints to detect recurring failure signatures',
      'Integrate vector search or local AI embedding microservice for similarity lookup against historical postmortems',
      'Build automated root-cause timeline generation mapping errors to deployment commits',
      'Develop a developer CLI tool for querying incident history directly from the terminal'
    ],
    githubUrl: 'https://github.com/Iamabhipandat',
    liveUrl: undefined,
  }
];

export const AUTH_SYSTEM_STEPS: AuthStep[] = [
  {
    step: 1,
    title: 'Registration & DTO Validation',
    actor: 'Client → AuthController',
    action: 'POST /api/auth/register',
    technicalDetail: 'Incoming RegisterRequest DTO is validated via Jakarta Validation annotations (@NotBlank, @Email, @Size). Prevents malformed data from ever touching the service layer.',
  },
  {
    step: 2,
    title: 'User Creation & Verification Token',
    actor: 'AuthService → UserRepository',
    action: 'Token Generation & Persistence',
    technicalDetail: 'Password hashed with BCrypt. A cryptographically random verification token is generated with an explicit expiry window and persisted to the database.',
  },
  {
    step: 3,
    title: 'Email Verification Flow',
    actor: 'User Email → AuthController',
    action: 'GET /api/auth/verify?token=...',
    technicalDetail: 'Validates token existence and expiry timestamp. On success, updates user account status to verified and invalidates the token to prevent replay attacks.',
  },
  {
    step: 4,
    title: 'Authentication & JWT Issuance',
    actor: 'Client → AuthenticationManager',
    action: 'POST /api/auth/login',
    technicalDetail: 'AuthenticationManager verifies credentials against UserDetailsService. JwtService signs a compact stateless JWT with claims (subject, issuedAt, expiration) and HMAC-SHA secret.',
  },
  {
    step: 5,
    title: 'Stateless Request Interception',
    actor: 'JwtAuthenticationFilter',
    action: 'Bearer Token Extraction',
    technicalDetail: 'OncePerRequestFilter inspects the Authorization header for "Bearer <token>". If absent on public endpoints (e.g. /login), request passes through unhindered.',
  },
  {
    step: 6,
    title: 'Token Validation & SecurityContext',
    actor: 'JwtService → SecurityContextHolder',
    action: 'Claims Verification & Context Population',
    technicalDetail: 'Extracts username, verifies digital signature and expiration. Instantiates UsernamePasswordAuthenticationToken and sets it in SecurityContextHolder for the request lifecycle.',
  },
  {
    step: 7,
    title: 'Protected Resource Authorization',
    actor: 'FilterChain → Controller',
    action: 'Access Granted to Secure Endpoint',
    technicalDetail: 'Spring Security evaluates endpoint authorization rules. If valid, request is dispatched to the controller. Any failure returns 401 Unauthorized or 403 Forbidden with clean JSON error responses.',
  },
];

export const SUPPORTING_ENGINEERING = [
  {
    title: 'Java Spring Boot JWT Authentication Engine',
    category: 'Backend Security Architecture',
    summary: 'Engineered a robust, stateless authentication system using Spring Security and JWT tokens.',
    details: [
      'Implemented RegisterRequest DTOs with strict field validation',
      'Configured custom JwtAuthenticationFilter extending OncePerRequestFilter',
      'Built JwtService for HMAC signing, claims extraction, and expiry validation',
      'Designed email verification token lifecycle with database entity persistence',
      'Configured CORS filter to safely allow specific frontend origins while rejecting unauthorized domains',
      'Diagnosed and resolved common Spring Security edge cases including 403 Forbidden on public preflight OPTIONS requests'
    ]
  },
  {
    title: 'Frontend & Backend API Integration',
    category: 'Full-Stack System Reliability',
    summary: 'Practical experience connecting React client interfaces with asynchronous REST backends.',
    details: [
      'Standardized Axios/Fetch wrappers with bearer token interceptors and automatic logout on 401 response',
      'Resolved CORS cross-origin discrepancies between localhost Vite dev servers and Spring Boot/FastAPI backends',
      'Implemented defensive error handling with toast notifications and graceful offline state degradation',
      'Managed environment-specific configurations via .env files without hardcoding credentials'
    ]
  },
  {
    title: 'Healthcare Management Platform',
    category: 'Supporting Technical Highlight',
    summary: 'Full-stack application utilizing Next.js 14, TypeScript, Tailwind CSS, Appwrite, Twilio SMS, and Sentry for error tracking.',
    details: [
      'Patient registration and appointment scheduling flows',
      'Appwrite backend integration for document persistence and session management',
      'Twilio SMS notifications for appointment confirmation alerts',
      'Sentry exception logging for real-time frontend observability'
    ]
  },
  {
    title: 'Exploratory Systems & Java Backend Practice',
    category: 'Code Architecture Exploration',
    summary: 'Hands-on exploratory implementations strengthening backend fundamentals.',
    details: [
      'Musify: React & TypeScript streaming application deployed on Render',
      'Patient Management Microservice: Spring Boot multi-tier architecture exploring service boundaries',
      'Console-Based Banking Application: Object-oriented core Java implementing transactional balances and account states'
    ]
  }
];

export const OPEN_SOURCE_AND_COMMUNITY = [
  {
    title: 'Kornia Differentiable Vision Demo on Hugging Face',
    role: 'Open-Source Explorer & Tooling Contributor',
    date: 'Active Space',
    link: 'https://huggingface.co/spaces/Iamabhipandat/kornia-image-equalization',
    description:
      'Created an interactive Hugging Face Space utilizing Gradio to demonstrate Kornia differentiable computer vision capabilities—specifically tensor-based image enhancement and histogram equalization algorithms.',
    keyTakeaway: 'Hands-on experience with PyTorch/Kornia tensor transformations, image processing pipelines, and Gradio interface deployment.'
  },
  {
    title: 'WeMakeDevs / Kunal Kushwaha Hackathon',
    role: 'Participant & Backend Builder (VisionMeet AI)',
    date: 'Hackathon Milestone',
    description:
      'Collaborated on VisionMeet AI during a developer hackathon focusing on practical AI tools. Built the question deduplication API using FastAPI and difflib, demonstrating how lightweight text algorithms can solve real meeting friction.',
    keyTakeaway: 'Rapid prototyping under time constraints, API contract negotiation with frontend team, and iterative feature scoping.'
  },
  {
    title: 'Open Source Community Engagement & GSoC Prep',
    role: 'Community Learner & Contributor',
    date: 'Ongoing',
    description:
      'Engaged in open-source developer communities, reviewing codebases such as Kornia, exploring maintainer issue workflows (including issue #53 discussions), and following open-source best practices in version control and documentation.',
    keyTakeaway: 'Understanding collaborative pull request workflows, issue triage, and maintainer standards.'
  }
];

export const DSA_TOPICS = [
  { name: 'Arrays & Two Pointers', status: 'Practiced', detail: 'Sliding windows, in-place manipulation, prefix sums' },
  { name: 'Searching & Binary Search', status: 'Practiced', detail: 'Rotated arrays, peak element, boundary conditions' },
  { name: 'Sorting Algorithms', status: 'Practiced', detail: 'Merge sort, quicksort fundamentals, selection/insertion' },
  { name: 'Linked Lists', status: 'Practiced', detail: 'Cycle detection (Floyd’s algorithm), reversal, recursive merges' },
  { name: 'Stacks & Queues', status: 'Practiced', detail: 'Monotonic stacks, parentheses validation, BFS queues' },
  { name: 'Hash Maps & Sets', status: 'Practiced', detail: 'Frequency counters, two-sum variations, anagram groupings' },
  { name: 'Recursion & Backtracking', status: 'Practiced', detail: 'Subsets generation, permutations, base-case induction' },
  { name: 'Binary Trees & BSTs', status: 'Practiced', detail: 'In-order traversal, LCA, level-order breadth exploration' },
];
