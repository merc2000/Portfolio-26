import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { CaseStudy } from '../types';

interface SelectedWorkProps {
  caseStudies: CaseStudy[];
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onLockedClick: (caseStudy: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  caseStudies,
  onSelectCaseStudy,
  onLockedClick,
}) => {
  const [hoveredLockedId, setHoveredLockedId] = useState<string | null>(null);

  return (
    <section id="selected-work" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header as in the screenshot (64px bottom margin) */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.2]">
            Selected Work
          </h2>
        </div>

        {/* 3 Case Studies List (64px / 80px page level whitespace) */}
        <div className="space-y-16 sm:space-y-20">
          {caseStudies.map((study) => {
            const isLocked = study.isComingSoon;

            return (
              <div
                key={study.id}
                className="group relative"
                onMouseEnter={() => {
                  if (isLocked) setHoveredLockedId(study.id);
                }}
                onMouseLeave={() => {
                  if (isLocked) setHoveredLockedId(null);
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Visual Showcase (matching 2 split panels in image) */}
                  <div className="lg:col-span-7">
                    <div
                      onClick={() => {
                        if (isLocked) {
                          onLockedClick(study);
                        } else {
                          onSelectCaseStudy(study);
                        }
                      }}
                      className={`relative w-full aspect-[16/9] sm:aspect-[1.8/1] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/70 shadow-xs transition-all duration-300 ${
                        isLocked
                          ? 'cursor-not-allowed opacity-95 group-hover:border-neutral-300'
                          : 'cursor-pointer hover:shadow-md hover:border-neutral-300'
                      }`}
                    >
                      <img
                        src={study.previewImage}
                        alt={study.title}
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                          isLocked ? 'group-hover:scale-[1.01]' : 'group-hover:scale-[1.03]'
                        }`}
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('/public/')) {
                            target.src = '/public' + study.previewImage;
                          } else {
                            target.src = '/assets/aistudio/image_acb7aab8.png';
                          }
                        }}
                      />

                      {/* Coming Soon Hover Overlay for the last case study */}
                      {isLocked && hoveredLockedId === study.id && (
                        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px] flex items-center justify-center transition-all duration-200 z-10">
                          <div className="bg-white text-neutral-900 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-semibold tracking-wide">
                            <Clock className="w-4 h-4 text-neutral-600" />
                            <span>Coming Soon</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Case Study Text Details */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    
                    {/* Unboxed Metadata Kicker (8px bottom margin) */}
                    <div className="text-xs sm:text-[13px] font-medium tracking-wide text-neutral-500 mb-2">
                      {study.tagString}
                    </div>

                    {/* Headline / Title (tighter line height <= 1.2, 16px bottom margin) */}
                    <h3
                      onClick={() => {
                        if (isLocked) {
                          onLockedClick(study);
                        } else {
                          onSelectCaseStudy(study);
                        }
                      }}
                      className={`text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-[1.2] mb-4 transition-colors ${
                        isLocked
                          ? 'cursor-not-allowed'
                          : 'cursor-pointer hover:text-neutral-600'
                      }`}
                    >
                      {study.title}
                    </h3>

                    {/* Description (1.5 line height, 24px bottom margin) */}
                    <p className="text-sm sm:text-base text-neutral-600 font-normal leading-[1.5] mb-6">
                      {study.description}
                    </p>

                    {/* Action Link: "See project →" for active case studies, or "Coming soon" for upcoming projects */}
                    {isLocked ? (
                      <div className="min-h-[48px] inline-flex items-center">
                        <span className="text-sm font-medium text-neutral-500">
                          Coming soon
                        </span>
                      </div>
                    ) : (
                      <div className="relative inline-flex items-center">
                        <button
                          type="button"
                          onClick={() => onSelectCaseStudy(study)}
                          className="min-h-[48px] inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 group-hover:gap-3 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded"
                        >
                          <span>See project</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
