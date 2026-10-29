import React from 'react';
import { endToEndTimeline } from '../data/contentData';
import { ChevronRight } from 'lucide-react';

export default function Timeline() {
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-hide">
      <div className="min-w-[840px] grid grid-cols-7 gap-3.5">
        {endToEndTimeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Step Card */}
            <div className="p-5 bg-[#141416] border border-white/10 rounded-lg group-hover:border-[#C9A96E] transition-all h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                  <span className="font-serif text-sm font-light text-[#C9A96E]">
                    {item.step}
                  </span>
                  {idx < endToEndTimeline.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-stone-600 hidden lg:block" />
                  )}
                </div>
                <h4 className="font-serif text-xs font-normal text-white group-hover:text-[#C9A96E] transition-colors leading-snug">
                  {item.stage}
                </h4>
              </div>
              <p className="text-[11px] text-stone-400 mt-3 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
