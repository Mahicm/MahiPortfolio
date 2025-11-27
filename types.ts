export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}