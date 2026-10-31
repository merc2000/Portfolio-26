import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';
import { UserProfile } from '../types';

interface AboutPageProps {
  profile: UserProfile;
  onNavigateHome?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  profile,
}) => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-24 sm:pb-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 pt-12 sm:pt-16">
        {/* Bio Content */}
        <div className="max-w-3xl">
          <div className="text-base sm:text-lg text-neutral-700 leading-[1.65] font-normal">
            <h1 className="text-2xl sm:text-3xl text-neutral-900 font-normal leading-[1.4] text-balance mb-3.5 sm:mb-4">
              Hello, I'm <strong className="font-semibold text-black">{profile.name}</strong>—an interaction designer and master's student in Interactive Media Technology at KTH, Stockholm, with a background in Computer Science.
            </h1>

            <div className="space-y-4">
              <p>
                My interests lie at the intersection of human-computer interaction, design research, and critical perspectives on technology. I'm particularly curious about how design decisions shape our everyday experiences and relationships with digital systems. 
              </p>

              <p>
                I approach design with curiosity, questioning assumptions and looking beyond the immediate problem.
              </p>

              <p>
                I believe good design begins with understanding people, their contexts, and the complexities of their experiences. 
              </p>
            </div>

            {/* Resume & Social CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="/assets/aistudio/Merrin_Chacko_CV_1d7a420a.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-black text-neutral-800 text-sm font-semibold transition-colors inline-flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
