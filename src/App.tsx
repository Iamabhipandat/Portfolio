import React, { useState, useEffect } from 'react';
import { ProjectModal } from './components/ProjectModal';
import { FEATURED_PROJECTS } from './data/portfolioData';
import type { ProjectItem } from './types/portfolio';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const visionProject = FEATURED_PROJECTS.find(p => p.id === 'visionmeet-ai') || FEATURED_PROJECTS[0];
  const devopsProject = FEATURED_PROJECTS.find(p => p.id === 'devops-incident-intelligence') || FEATURED_PROJECTS[1];

  return (
    <>
      <header>
        <div className="wrap">
          <a className="logo" href="#home" aria-label="Home">
            Backend engineer
          </a>
          <nav aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="/resume.pdf" download="Abhinav_Tiwari_Resume.pdf">Resume</a>
          </nav>
          <div className="loc-group">
            <div className="loc">
              <span className="dot" />
              Faridabad, Haryana
            </div>
            <button
              onClick={toggleTheme}
              className="theme-btn"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        {/* HERO SECTION */}
        <div className="wrap hero">
          <div>
            <h1>
              AI Backend<br />Engineer
            </h1>
            <p className="lead">
              Hi, I’m Abhinav. I build Java and Spring Boot services, and AI tools that make sense of meetings and incidents.
            </p>
            <div className="chips">
              <a href="https://github.com/Iamabhipandat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
              <a href="https://linkedin.com/in/abhinavtiwari164" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://leetcode.com/u/0hvzpub040" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">lc</a>
              <a href="mailto:tiwariabhinav164@gmail.com" aria-label="Email">@</a>
              <a href="/resume.pdf" download="Abhinav_Tiwari_Resume.pdf" aria-label="Download Resume" title="Download Resume">cv</a>
              <hr />
            </div>
            <div className="stats">
              <div className="stat">
                <b>7.6</b>CGPA in B.Tech Computer Science Engineering (AI &amp; ML)
              </div>
              <div className="stat">
                <b>2</b>AI-powered projects built with LLMs and vector search
              </div>
            </div>
          </div>

          <div className="card" role="img" aria-label="Spring Boot controller code on an amber card">
            <span className="sig">Abhinav Tiwari</span>
            <div className="globe" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f6f4ee" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
              </svg>
            </div>
            <div className="term" aria-hidden="true">
              <em>// Spring Boot</em><br />
              <span>@RestController</span><br />
              <span>@GetMapping</span>("/insights")<br />
              List&lt;Insight&gt; all() &#123;<br />
              &nbsp;&nbsp;return service.findAll();<br />
              &#125;
            </div>
          </div>
        </div>

        {/* CONTRAST BLACK BAND (ABOUT) */}
        <div className="band" id="about">
          <span className="cross" style={{ top: '22px', left: '28px' }}>
            <svg viewBox="0 0 26 26" fill="none" stroke="#f6f4ee">
              <circle cx="13" cy="13" r="6" />
              <path d="M13 0v8M13 18v8M0 13h8M18 13h8" />
            </svg>
          </span>
          <span className="cross" style={{ top: '22px', right: '28px' }}>
            <svg viewBox="0 0 26 26" fill="none" stroke="#f6f4ee">
              <circle cx="13" cy="13" r="6" />
              <path d="M13 0v8M13 18v8M0 13h8M18 13h8" />
            </svg>
          </span>
          <div className="marq" aria-hidden="true">
            <div>
              about . about . about . about . about . about . about . about . about . about . about . about .&nbsp;
            </div>
          </div>
          <div className="wrap about">
            <h2>
              code that<br />holds up.
            </h2>
            <div>
              <p>
                I’m a computer science student focused on Java backend development and AI. I work with Spring Boot, REST APIs, SQL and data structures and algorithms, and I like turning messy information into something people can act on.
              </p>
              <div className="edu">
                <b>B.Tech, Computer Science Engineering (AI &amp; ML)</b>
                <span>J.C. Bose University of Science and Technology, YMCA, Faridabad · 2023 – 2027 · CGPA 7.6</span>
              </div>
              <div className="langs">
                <span>Hindi · Native</span>
                <span>English · Professional working</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <section className="light" id="projects">
          <div className="wrap">
            <h2 className="big">projects</h2>
            
            <article className="row">
              <div>
                <h3>AI Meeting Assistant</h3>
                <div className="tech">FastAPI, React, Python, LLMs, Gemini API, NLP</div>
              </div>
              <ul>
                <li>An AI agent that spots repeated questions in online meetings and drafts contextual answers.</li>
                <li>Semantic similarity finds duplicate questions and highlights unique discussion for speakers.</li>
                <li>A live dashboard shows insights, unanswered questions and AI summaries.</li>
              </ul>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a className="btn" href="https://github.com/Iamabhipandat" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSelectedProject(visionProject)}
                  style={{ background: 'var(--amber)', color: '#0a0a0a', border: '1px solid var(--amber)' }}
                >
                  Interactive Demo ↗
                </button>
              </div>
            </article>

            <article className="row">
              <div>
                <h3>DevOps Incident Post-Mortem &amp; Root Cause Finder</h3>
                <div className="tech">Java, Spring Boot, Cognee Cloud memory, LLMs, Vector DB, Docker</div>
              </div>
              <ul>
                <li>Analyzes logs, alerts and incident reports to suggest probable root causes.</li>
                <li>Uses memory-based retrieval to recommend fixes that worked on past incidents.</li>
                <li>Generates post-mortems with timelines, impact analysis and remediation steps.</li>
              </ul>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a className="btn" href="https://github.com/Iamabhipandat" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSelectedProject(devopsProject)}
                  style={{ background: 'var(--ink)', color: 'var(--bg)', border: '1px solid var(--ink)' }}
                >
                  Architecture Deep Dive ↗
                </button>
              </div>
            </article>

            <div className="row" style={{ borderBottom: '1px solid var(--line)' }} />
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="light" id="skills">
          <div className="wrap">
            <h2 className="big">skills</h2>
            <div className="skills">
              <div className="sk">
                <h3>Languages</h3>
                <p>Java, SQL, JavaScript, Python</p>
              </div>
              <div className="sk">
                <h3>Backend</h3>
                <p>Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs</p>
              </div>
              <div className="sk">
                <h3>Databases</h3>
                <p>MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="sk">
                <h3>Core CS</h3>
                <p>Data Structures &amp; Algorithms, OOP, DBMS, Operating Systems, Computer Networks</p>
              </div>
              <div className="sk">
                <h3>Cloud &amp; DevOps</h3>
                <p>Docker, GitHub Actions (basics), AWS (basics)</p>
              </div>
              <div className="sk">
                <h3>Tools &amp; testing</h3>
                <p>Git, GitHub, Maven, Postman, IntelliJ IDEA, VS Code, JUnit, Mockito (basics)</p>
              </div>
            </div>
            <p style={{ marginTop: '22px', fontSize: '14px', color: 'var(--mute)' }}>
              Certificates: HackerRank Java (Basic/Intermediate) · Coursera Java Programming and Spring Boot courses
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact" id="contact">
          <div className="wrap">
            <h2>
              let’s build<br />something.
            </h2>
            <div className="links">
              <a className="btn solid" href="mailto:tiwariabhinav164@gmail.com">
                tiwariabhinav164@gmail.com
              </a>
              <a className="btn" href="https://linkedin.com/in/abhinavtiwari164" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn" href="https://github.com/Iamabhipandat" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn" href="https://leetcode.com/u/0hvzpub040" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
              <a className="btn" href="/resume.pdf" download="Abhinav_Tiwari_Resume.pdf">
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          © 2026 Abhinav Tiwari · Faridabad, Haryana
        </div>
      </footer>

      {/* Case Study & Interactive Demo Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default App;
