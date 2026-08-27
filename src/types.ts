export type ProjectType = 'developer' | 'designer';

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  summary: string;
  audience: string;
  researchProcess: string;
  tools: string[];
  images: string[];
  color: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface InnovationHighlight {
  title: string;
  description: string;
  role: string;
  impact: string;
}
