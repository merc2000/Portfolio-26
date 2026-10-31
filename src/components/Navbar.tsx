import React from 'react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile;
  currentView: 'home' | 'case-study' | 'about';
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onOpenEditModal: () => void;
}

export const AsteriskIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 28 28"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <rect
        key={i}
        x="12.75"
        y="1.5"
        width="2.5"
        height="7.5"
        rx="1.25"
        transform={`rotate(${i * 30} 14 14)`}
      />
    ))}
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  currentView,
  onNavigateHome,
  onNavigateAbout,
}) => {
  const handleLogoClick = () => {
    if (currentView !== 'home') {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMyWorkClick = () => {
    if (currentView !== 'home') {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('selected-work');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      const el = document.getElementById('selected-work');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-black">
      <div className="w-full px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Left: Asterisk Mark matching reference screenshot */}
        <button
          onClick={handleLogoClick}
          aria-label="Back to home / top"
          className="text-neutral-900 hover:opacity-75 transition-opacity cursor-pointer p-1 -ml-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          <AsteriskIcon className="w-6 h-6 text-black" />
        </button>

        {/* Right: Clean minimal links matching reference screenshot */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm sm:text-[15px] font-normal text-neutral-900">
          <button
            onClick={handleMyWorkClick}
            className={`hover:text-neutral-500 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1 py-1 ${
              currentView === 'home' ? 'font-semibold' : ''
            }`}
          >
            Work
          </button>
          <button
            onClick={onNavigateAbout}
            className={`hover:text-neutral-500 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1 py-1 ${
              currentView === 'about' ? 'font-semibold' : ''
            }`}
          >
            About
          </button>
          <a
            href="/assets/aistudio/Merrin_Chacko_CV_1d7a420a.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded px-1 py-1 inline-flex items-center"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
