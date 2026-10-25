# Abhinav Tiwari — AI Backend Engineer Portfolio

> **AI Backend Engineer building intelligent applications and reliable backend systems.**  
> *"Turning AI capabilities into practical products through thoughtful backend engineering."*

---

## 🎯 Professional Identity & Positioning

- **Primary Title**: AI Backend Engineer
- **Secondary Positioning**: Python Backend Developer & Java Full-Stack Developer
- **Education**: B.Tech in Computer Science Engineering (Specialization: Artificial Intelligence & Machine Learning)
- **Institution**: J.C. Bose University of Science and Technology, YMCA, Faridabad, Haryana, India (Graduation: 2023–2027, Final-Year Student)
- **Verified Links**:
  - **GitHub**: [https://github.com/Iamabhipandat](https://github.com/Iamabhipandat)
  - **LinkedIn**: [https://www.linkedin.com/in/abhinavtiwari164](https://www.linkedin.com/in/abhinavtiwari164)
  - **LeetCode**: [https://leetcode.com/u/0hvzpub040](https://leetcode.com/u/0hvzpub040)
  - **Hugging Face Space**: [https://huggingface.co/spaces/Iamabhipandat/kornia-image-equalization](https://huggingface.co/spaces/Iamabhipandat/kornia-image-equalization)
  - **Email**: [tiwariabhinav164@gmail.com](mailto:tiwariabhinav164@gmail.com)

---

## 🏗️ System Architecture

This portfolio is architected as an engineering-focused, production-grade showcase built with:

### Frontend
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS + Custom Vision Bounding-Box HUD styling (inspired by computer vision viewfinder optics)
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Interactive Features**:
  - **Live VisionMeet Deduplication Test Bench**: Interactive browser simulation executing Python's `SequenceMatcher` algorithm with adjustable similarity threshold sliders.
  - **Interactive Spring Boot JWT Authentication Stepper**: 7-stage interactive architecture visualizer detailing DTO validation, token generation, filter chain interception, and stateless context authorization.
  - **Direct Resume Download**: Bundled verified PDF download directly accessible at `/resume.pdf`.

### Backend (Optional Python FastAPI Microservice)
- **Framework**: FastAPI (Python 3.11+)
- **Schemas**: Pydantic v2 data models with Jakarta-equivalent validation constraints
- **Services**: `DeduplicationService` executing pairwise similarity scoring via Python's standard `difflib.SequenceMatcher`
- **Security**: Bot honeypot traps, CORS origins whitelisting, defensive exception handling
- **Testing**: Pytest unit test suites for algorithmic similarity verification

```
ai-backend-portfolio/
├── dist/                     # Optimized production bundle
├── public/
│   └── resume.pdf            # Verified PDF resume asset
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Frosted glass floating navigation
│   │   ├── HeroSection.tsx   # Professional positioning & interactive code console
│   │   ├── AboutSection.tsx  # Academic background & role inspection boxes
│   │   ├── SkillsSection.tsx # Python, Java, DBs, frontend, developer tools
│   │   ├── ProjectsSection.tsx # Exactly 2 featured projects
│   │   ├── VisionMeetDemo.tsx# In-browser SequenceMatcher deduplication bench
│   │   ├── ProjectModal.tsx  # In-depth technical case studies
│   │   ├── EngineeringSection.tsx # Spring Boot JWT auth flow & API integration
│   │   ├── JourneySection.tsx# Hackathons, Kornia Hugging Face demo, Java DSA
│   │   ├── ContactSection.tsx# Validated message form with honeypot & mailto fallback
│   │   ├── Footer.tsx        # Copyright 2026, status telemetry, quick links
│   │   └── Icons.tsx         # Clean SVG brand components
│   ├── data/
│   │   └── portfolioData.ts  # Verified source-of-truth data store
│   ├── types/
│   │   └── portfolio.ts      # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── backend/                  # Optional Python FastAPI service
│   ├── app/
│   │   ├── api/routes/       # Health, Questions (/dedup), Contact routes
│   │   ├── core/             # Configuration & logging
│   │   ├── schemas/          # Pydantic request/response models
│   │   ├── services/         # Deduplication service logic
│   │   └── main.py           # FastAPI app entrypoint
│   ├── tests/
│   │   └── test_dedup.py     # Unit tests for text similarity
│   ├── Dockerfile            # Container build specification
│   ├── pyproject.toml        # Dependencies definition
│   └── .env.example          # Environment placeholder
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Featured Projects (Strictly Two)

### 1. VisionMeet AI — AI Meeting Assistant
- **Context**: Hackathon project associated with Kunal Kushwaha & WeMakeDevs.
- **Problem**: Repetitive queries flood meeting transcripts, forcing speakers to answer identical questions and pushing unique discussions out of view.
- **Solution**: FastAPI backend prototype utilizing `difflib.SequenceMatcher` for text similarity detection paired with a reactive React/Vite dashboard.
- **Implementation Status**: Working hackathon prototype. Evaluates lexical question similarity and demonstrates privacy-by-design ephemeral storage.
- **Known Limitations**: Lexical similarity catches syntactic variations (e.g., 89.5% match on *"When will the session recording be shared?"* vs *"When will the recording be shared?"*) but requires dense neural embeddings (sentence-transformers) for deep semantic paraphrases.

### 2. DevOps Incident Intelligence
- **Context**: Incident investigation and troubleshooting backend service.
- **Problem**: Fragmented system logs and alerts delay on-call root-cause identification and Mean Time To Resolution (MTTR).
- **Solution**: Structured Java 17 and Spring Boot 4 backend service integrating Spring Data JPA, Hibernate, PostgreSQL, and Spring Boot Actuator (`/api/health`).
- **Implementation Status**: Core backend service with verified PostgreSQL datasource, `Incident` JPA entity, and operational health monitoring in source code. Advanced AI-driven log clustering and postmortem summaries represent documented roadmap goals.

---

## 🛡️ Supporting Engineering Highlights

- **Java Spring Boot JWT Authentication Engine**: Multi-tier stateless authentication featuring custom `JwtAuthenticationFilter`, `JwtService` HMAC validation, email verification token lifecycles, and CORS preflight debugging for browser `OPTIONS` requests.
- **Full-Stack API Integration**: Practical experience with Axios/Fetch interceptors, asynchronous error handling, and environment-driven API URLs (`VITE_API_URL`).
- **Supporting Technical Highlights**: Healthcare Management Platform (Next.js 14, TypeScript, Tailwind, Appwrite, Twilio SMS, Sentry) and exploratory Java microservices (patient management service, console banking app).
- **Open-Source Tooling**: Interactive Hugging Face Space utilizing Gradio to demonstrate Kornia differentiable computer vision and image histogram equalization.
- **Data Structures & Algorithms**: Consistent algorithmic practice in Java across arrays, binary search, two pointers, sliding windows, linked lists, hash maps, recursion, and binary trees (LeetCode profile: `0hvzpub040`).

---

## 💻 Local Development Instructions

### Prerequisites
- Node.js >= 18 (Tested on v24.16.0)
- npm >= 10 (Tested on 11.13.0)
- Python >= 3.10 (Tested on 3.14.6) for optional FastAPI backend

### 1. Run Frontend
```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build & Verify Production Bundle
```bash
# Type check and build optimized bundle
npm run build
```
The output will be placed in `dist/`.

### 3. Run Optional FastAPI Backend
```bash
cd backend

# Install dependencies
pip install -e .

# Run development server
uvicorn app.main:app --reload --port 8000
```
FastAPI interactive Swagger documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

### 4. Run Backend Tests
```bash
python backend/tests/test_dedup.py
```

---

## 🚢 Deployment Guide

### Deploying Frontend to Vercel
1. Push repository to GitHub (`Iamabhipandat/portfolio` or your chosen repository name).
2. Connect repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploying Backend to Render (Optional)
1. In Render, select **New Web Service** connected to your repository.
2. Root Directory: `backend`
3. Environment: `Python 3`
4. Build Command: `pip install -e .`
5. Start Command: `uvicorn app.main:app --host 0.0.0.0 --port 10000`

---

## 📜 Engineering Honesty & Ethics Notice

As stipulated in the master build requirements:
- No fabricated employment history, awards, or fake metrics.
- Exactly two featured projects are showcased.
- Python and Java are strictly designated as primary programming languages.
- Clear technical boundaries differentiate completed prototypes from future roadmap items.

---

© 2026 Abhinav Tiwari. Built for scalable backend engineering and intelligent application development.
