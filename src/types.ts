export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // percentage
    icon?: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  sublabel: string;
}
