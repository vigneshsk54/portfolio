export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  features: string[];
  architecture: string[];
  challenges: { problem: string; solution: string }[];
  impact: string[];
  status: "Published Research" | "Deployed" | "Completed";
  links: { github: string; demo?: string };
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  eyebrow: string;
  skills: { name: string; level: number }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  detail: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  detail: string;
}
