import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import AerospaceTacticalBackground from './AerospaceTacticalBackground';

export default function PageHero({ eyebrow, title, description, breadcrumbs }) {
  return (
    <section className="bg-[#0B0B0C] text-white py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      {/* Dynamic Supersonic Aerospace Streamlines & Tactical Radar */}
      <AerospaceTacticalBackground
        opacity={0.5}
        accentColor="#C9A96E"
        secondaryColor="#38BDF8"
        showRadar={true}
      />

      {/* Subtle Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        
        <div className="mt-6 max-w-3xl space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.28em]">
              <span className="w-1 h-1 rounded-full bg-[#C9A96E]" />
              {eyebrow}
            </div>
          )}
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-wide text-white leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed font-light tracking-wide max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
