import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface JumpToSection {
  id: string;
  label: string;
}

interface JumpToMenuProps {
  sections: JumpToSection[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  highlightColor?: string; // e.g. '#1D95CA' or '#F19AB0'
  onHoverSection?: (id: string | null) => void;
  className?: string;
  defaultOpen?: boolean;
}

export const JumpToMenu: React.FC<JumpToMenuProps> = ({
  sections,
  activeSection,
  onSelectSection,
  highlightColor = '#1D95CA',
  onHoverSection,
  className = '',
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <nav
      aria-label="Table of contents"
      className={`bg-white border border-neutral-900 shadow-lg rounded-none w-44 sm:w-48 md:w-52 select-none transition-all duration-200 ${className}`}
    >
      {/* Header with Jump to and toggle chevron */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3.5 py-2 sm:py-2.5 border-b border-neutral-900 flex items-center justify-between font-bold text-xs sm:text-sm text-neutral-950 hover:bg-neutral-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        aria-expanded={isOpen}
      >
        <span className="font-bold tracking-tight">Jump to</span>
        {isOpen ? (
          <ChevronUp className="w-3.5 h-3.5 text-neutral-950 stroke-[2.5]" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-neutral-950 stroke-[2.5]" />
        )}
      </button>

      {/* Section List */}
      {isOpen && (
        <div className="py-1 divide-y divide-neutral-100/40 max-h-[75vh] overflow-y-auto">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            const isBlue = highlightColor === '#1D95CA';

            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => onSelectSection(sec.id)}
                onMouseEnter={() => onHoverSection?.(sec.id)}
                onMouseLeave={() => onHoverSection?.(null)}
                className="group relative w-full text-left px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-normal tracking-wide uppercase text-neutral-900 transition-colors flex items-center justify-between cursor-pointer focus:outline-none focus-visible:bg-neutral-100"
              >
                {/* The text with left-to-right highlight animation */}
                <span className="relative inline-block py-0.5">
                  {/* Highlight bar that animates from left to right */}
                  <span
                    className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0 pointer-events-none"
                    style={{ backgroundColor: highlightColor }}
                  />
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isBlue
                        ? 'group-hover:text-white font-medium'
                        : 'group-hover:text-neutral-950 font-bold'
                    } ${isActive ? 'font-semibold' : ''}`}
                  >
                    {sec.label}
                  </span>
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 ml-2"
                    style={{ backgroundColor: highlightColor }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
