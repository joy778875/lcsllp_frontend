import React from 'react';

export default function Logo({ mode = 'light', showSubtextOnMobile = false }) {
  const isDark = mode === 'dark'; // Dark background mode (white text)

  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 group select-none">
      {/* Labradorite Polished Gemstone Emblem Frame */}
      <div className="relative overflow-hidden rounded-lg bg-[#0B0B0C] border border-white/15 p-1 shadow-md group-hover:border-[#C9A96E] transition-colors shrink-0">
        <img
          src="/labradorite-logo.jpg"
          alt="Labradorite Gemstones Emblem"
          className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Typography Wordmark - Luxury Editorial Serif */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className={`font-serif tracking-[0.2em] sm:tracking-[0.24em] text-sm sm:text-base md:text-lg font-normal uppercase leading-tight truncate ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
            LABRADORITE
          </span>
          <span className="w-1 h-1 rounded-full bg-[#C9A96E] shrink-0" />
        </div>

        {/* Subtext: Visible on mobile and desktop */}
        <div className="flex flex-col">
          <span className={`text-[8px] sm:text-[9.5px] font-light tracking-[0.16em] sm:tracking-[0.2em] uppercase mt-0.5 truncate ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
            CONSULTANCY &amp; SERVICES LLP
          </span>

          <span className="hidden sm:block text-[7px] sm:text-[8px] font-medium tracking-[0.22em] uppercase text-[#C9A96E] truncate">
            DEFENCE ACQUISITION &amp; TECHNOLOGY
          </span>
        </div>
      </div>
    </div>
  );
}
