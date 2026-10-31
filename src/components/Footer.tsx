import React from 'react';
import { UserProfile } from '../types';

interface FooterProps {
  profile: UserProfile;
  currentView?: 'home' | 'case-study' | 'about';
  onOpenEditModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="border-t border-neutral-100 py-12 sm:py-16 bg-white text-neutral-500 text-xs leading-[1.5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-800">{profile.name}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href="/assets/aistudio/Merrin_Chacko_CV_1d7a420a.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] px-3 inline-flex items-center rounded-lg hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="min-h-[48px] px-3 inline-flex items-center rounded-lg hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="min-h-[48px] px-3 inline-flex items-center rounded-lg hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
