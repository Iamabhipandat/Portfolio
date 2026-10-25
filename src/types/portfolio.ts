export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  status: 'Prototype' | 'In Development' | 'Architecture Design';
  stack: string[];
  problem: string;
  solution: string;
  architectureDescription: string;
  architectureSteps: string[];
  keyFeatures: string[];
  contributions: string[];
  honestStatus: string;
  limitations: string[];
  futureRoadmap: string[];
  githubUrl?: string;
  liveUrl?: string;
  diagramTitle: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export interface AuthStep {
  step: number;
  title: string;
  actor: string;
  action: string;
  technicalDetail: string;
}
