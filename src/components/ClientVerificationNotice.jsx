import React, { useState } from 'react';
import { ClipboardList, ChevronUp, ChevronDown, CheckCircle2, Clock } from 'lucide-react';
import { clientVerificationList } from '../data/contentData';

export default function ClientVerificationNotice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-[#0B1726] border border-[#1E3854] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl hover:bg-[#14263A] transition-colors focus:ring-2 focus:ring-[#607C83]"
      >
        <ClipboardList className="w-3.5 h-3.5 text-[#C58A45]" />
        <span>Client Verification TODO</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-12 left-0 w-80 sm:w-96 bg-[#0B1726] border border-[#1E3854] text-white rounded-xl shadow-2xl p-4 max-h-96 overflow-y-auto animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#1E3854] mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C58A45]">
              Pre-Launch Verification Checklist
            </span>
            <span className="text-[10px] text-[#64748B]">Internal QA</span>
          </div>
          <p className="text-[11px] text-[#94A3B8] mb-3 leading-tight">
            Per client requirements, all claims, statistics, and profile details strictly reflect provided material. Items requiring final signoff:
          </p>

          <div className="space-y-2">
            {clientVerificationList.map((item, index) => {
              const isVerified = item.status.includes('Verified');
              return (
                <div key={index} className="p-2 bg-[#14263A]/80 border border-[#1E3854] rounded text-xs flex items-start justify-between gap-2">
                  <span className="text-[#E2E8F0] text-[11px] leading-tight">
                    {index + 1}. {item.item}
                  </span>
                  <span
                    className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-1 ${
                      isVerified
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                    }`}
                  >
                    {isVerified ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
