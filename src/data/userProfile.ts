import { UserProfile } from '../types';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'Merrin Chacko',
  title: 'Product & Interaction Designer',
  bioParagraphs: [
    "I'm a product & interaction designer specializing in clinical AI systems, cognitive mobile experiences, and tactile computing interfaces.",
    "I focus on simplifying high-consequence workflows—turning dense algorithmic data into calm, trustworthy tools for clinicians, language learners, and distributed teams.",
    "Currently exploring research-led design interventions, point-of-care diagnostics, and physical interaction design."
  ],
  location: 'Stockholm, Sweden',
  photoUrl: '/src/assets/images/designer_portrait_1792953846667.jpg',
  statusBadge: 'Open to select product design leadership & advisory roles',
  email: 'merrin@kth.se',
  linkedin: 'https://www.linkedin.com/in/merrin-chacko-753052185',
  github: 'https://github.com/merrinchacko',
  twitter: 'https://twitter.com',
  readcv: 'https://read.cv'
};

const STORAGE_KEY = 'merrin_portfolio_profile_v3';

export function getStoredProfile(): UserProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('merrin_portfolio_profile_v2') || localStorage.getItem('merrin_portfolio_profile_v1');
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    if (!parsed.linkedin || parsed.linkedin.includes('merrinchacko')) {
      parsed.linkedin = DEFAULT_PROFILE.linkedin;
    }
    if (!parsed.email || parsed.email === 'merrinchacko@gmail.com') {
      parsed.email = DEFAULT_PROFILE.email;
    }
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch (e) {
    console.error('Failed to load profile from localStorage', e);
    return DEFAULT_PROFILE;
  }
}

export function saveStoredProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile to localStorage', e);
  }
}

export function resetStoredProfile(): UserProfile {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('merrin_portfolio_profile_v2');
    localStorage.removeItem('merrin_portfolio_profile_v1');
  } catch (e) {
    console.error('Failed to reset profile', e);
  }
  return DEFAULT_PROFILE;
}
