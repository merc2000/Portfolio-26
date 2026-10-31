export interface CaseStudy {
  id: string;
  slug: string;
  year: string;
  client: string;
  discipline: string;
  tagString: string;
  title: string;
  description: string;
  previewImage: string;
  isComingSoon: boolean;
  comingSoonMessage?: string;
  
  // Detailed Case Study Fields
  role?: string;
  timeline?: string;
  team?: string;
  tools?: string[];
  deliverables?: string[];
  constraints?: string;
  impactMetric?: {
    value: string;
    label: string;
  };
  overview?: string;
  problemStatement?: string;
  researchInsights?: {
    number: string;
    title: string;
    description: string;
  }[];
  solutionHighlights?: {
    title: string;
    description: string;
  }[];
  keyLearnings?: string[];
  interactiveDemoType?: 'ultrasound' | 'keyboard' | null;
}

export interface UserProfile {
  name: string;
  title: string;
  bioParagraphs: string[];
  location: string;
  photoUrl: string;
  statusBadge: string;
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  readcv: string;
}
