import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Factory, Wrench, Kanban, Award } from 'lucide-react';
import api from '../utils/api';

export default function TrustStrip() {
  const defaultTrustPoints = [
    { title: "Defence Acquisition", desc: "DAP 2020 & DPM Frameworks" },
    { title: "Technology Consultancy", desc: "EOI / RFI / RFP Strategy" },
    { title: "Indigenisation", desc: "Aatmanirbhar Bharat Positioning" },
    { title: "MRO & Sustenance", desc: "TOT & Facility Setup" },
    { title: "Project Management", desc: "PMG Liaison & Milestone Tracking" }
  ];

  const [points, setPoints] = useState(defaultTrustPoints);

  useEffect(() => {
    let isMounted = true;
    api.get('/site-content')
      .then((data) => {
        if (isMounted && data.content && data.content.coreValues && data.content.coreValues.length > 0) {
          const mapped = data.content.coreValues.map((v) => ({
            title: v.title,
            desc: v.statement,
          }));
          setPoints(mapped.slice(0, 5));
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const icons = [ShieldCheck, Cpu, Factory, Wrench, Kanban, Award];

  return (
    <section className="bg-[#FAFAF8] border-b border-stone-200 py-10 sm:py-14 text-[#1A1A1A] relative">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block mb-1">
              Core Capabilities &amp; Ethos
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#1A1A1A]">
              Experience that understands the defence ecosystem.
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-md font-light leading-relaxed">
            Providing high-level consultancy and procedural guidance to defence acquisition entities, MSMEs, and foreign OEMs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-6">
          {points.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-5 rounded-lg bg-white border border-stone-200 hover:border-[#C9A96E] hover:shadow-md transition-all group"
              >
                <Icon className="w-5 h-5 text-[#C9A96E] transition-colors mb-2.5" />
                <h3 className="font-serif text-sm font-normal text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-500 mt-1 line-clamp-2 font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
