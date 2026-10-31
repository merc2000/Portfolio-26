import React from 'react';
import { MapPin } from 'lucide-react';
import { UserProfile } from '../types';
import heroImage from '../assets/images/regenerated_image_1793034530539.jpg';

interface HeroSectionProps {
  profile: UserProfile;
  onOpenEditModal: () => void;
  onPhotoUploaded?: (dataUrl: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
}) => {
  const imageSrc = profile.photoUrl && profile.photoUrl.startsWith('data:')
    ? profile.photoUrl
    : heroImage;

  return (
    <section className="relative w-full bg-white border-b border-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Exact Headline Layout from Reference Screenshot */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] font-normal tracking-[-0.015em] text-black leading-[1.2] lg:leading-[1.18] select-text">
              <span className="block">Interaction Designer,</span>
              <span className="block mt-1 sm:mt-1.5">
                <span>with a </span>
                <span className="font-handwritten font-bold text-[1.14em] inline-block tracking-normal ml-0.5">curious</span>
                <span className="inline-block w-2 sm:w-3"></span>
                <span className="font-handwritten font-bold text-[1.14em] inline-block tracking-normal">mind</span>
              </span>
              <span className="block mt-1 sm:mt-1.5">
                <span>and a </span>
                <span className="font-handwritten font-bold text-[1.14em] inline-block tracking-normal ml-0.5">creative</span>
                <span className="inline-block w-2 sm:w-3"></span>
                <span className="font-handwritten font-bold text-[1.14em] inline-block tracking-normal">eye</span>
              </span>
            </h1>

            {/* Location */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-2 text-base sm:text-lg font-normal text-neutral-800">
              <MapPin className="w-4 h-4 text-neutral-600 shrink-0" />
              <span>Stockholm, Sweden</span>
            </div>
          </div>

          {/* Right Column: Layered Sticky Notes & Polaroid Stack matching screenshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group max-w-[250px] sm:max-w-[280px] lg:max-w-[300px] w-full my-6">
              {/* TARGET ELEMENT: Polaroid frame with layered backing notes */}
              <div className="relative select-none transition-transform duration-300 group-hover:scale-[1.015]">
                {/* Mint Sticky Note behind */}
                <div
                  className="absolute -top-3 -left-5 sm:-top-4 sm:-left-6 w-44 sm:w-52 h-48 sm:h-56 bg-[#d8f3eb] rounded-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.06)] -rotate-6 select-none p-3.5 pointer-events-none transition-transform duration-300 group-hover:-rotate-8 flex flex-col justify-start"
                  aria-hidden="true"
                >
                  <span className="font-handwritten text-xs sm:text-sm text-neutral-700/80 leading-snug">
                    Living in Stockholm,<br />
                    loving design &amp;<br />
                    art...
                  </span>
                </div>

                {/* Lime Sticky Note behind */}
                <div
                  className="absolute -bottom-2.5 -right-3 sm:-bottom-4 sm:-right-5 w-44 sm:w-52 h-48 sm:h-56 bg-[#e7f49f] rounded-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.06)] rotate-6 select-none p-3.5 pointer-events-none transition-transform duration-300 group-hover:rotate-8 flex items-end justify-end"
                  aria-hidden="true"
                >
                  <span className="font-handwritten text-xs sm:text-sm text-neutral-700/70">passion</span>
                </div>

                {/* Polaroid Frame */}
                <div className="relative bg-white p-3 pt-3 pb-11 sm:p-3.5 sm:pt-3.5 sm:pb-13 rounded-[2px] shadow-[0_16px_36px_rgba(0,0,0,0.16),0_2px_8px_rgba(0,0,0,0.06)] border border-black/[0.08] rotate-[2deg] group-hover:rotate-0 transition-transform duration-300">
                  <div className="relative overflow-hidden bg-neutral-100 border border-black/10 rounded-[1px]">
                    <img
                      src={imageSrc}
                      alt={`${profile.name} - Product Designer`}
                      className="w-full aspect-[4/4.8] sm:aspect-[4/4.6] object-cover pointer-events-none"
                      onError={(e) => {
                        // Fallback if needed
                        e.currentTarget.src = '/assets/aistudio/hero_photo_stack_2x.png';
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
