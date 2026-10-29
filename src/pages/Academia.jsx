import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export default function Academia() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS / RESEARCH & R&D"
        title="Academia & Research Institutions"
        description="Facilitating knowledge, technology transfer, and joint research collaboration between academic institutions, DRDO programmes, and industry defence developers."
        breadcrumbs={[
          { label: 'Verticals', path: '/verticals' },
          { label: 'Academia', path: '/verticals/academia' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <GraduationCap className="w-8 h-8 text-[#607C83]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Academic R&amp;D &amp; Technology Transfer
              </h2>
              <p className="text-xs text-[#64748B]">Institutional Collaboration Frameworks</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            Academic research centers and university technology labs generate crucial fundamental breakthroughs in materials science, aerospace engineering, and autonomous systems. Labradorite provides strategic consultancy to help academic entities align research output with DRDO programmes and industry commercialization pathways.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
