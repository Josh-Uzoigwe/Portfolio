export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'Mobile' | 'Blockchain' | 'AI & Tools';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  secondaryCategories?: ProjectCategory[];
  featured?: boolean;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  highlights: string[];
  visualType: 'sats' | 'northstone' | 'leoned' | 'elohimtech' | 'escrow' | 'celopulse' | 'codementor';
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Work' | 'Leadership';
  liveUrl?: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  detail: string;
  badge: string;
}

export interface SkillCategory {
  index: string;
  title: string;
  subtitle: string;
  skills: string[];
}
