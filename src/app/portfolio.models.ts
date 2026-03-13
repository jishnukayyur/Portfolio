export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioLink {
  label: string;
  href: string;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  headline: string;
  description: string;
  stack: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  intro: string;
  summary: string;
  availability: string;
  resumeHref: string;
  portrait: {
    src: string;
    alt: string;
  };
  metrics: PortfolioMetric[];
  primaryLinks: PortfolioLink[];
  socialLinks: PortfolioLink[];
  expertise: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
}
