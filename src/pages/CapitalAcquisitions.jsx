import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function CapitalAcquisitions() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="SERVICES / CAPITAL PROCUREMENT"
        title="Capital Acquisitions"
        description="Expert consultancy in DAP 2020 acquisition processes, operational necessity evaluation, and defence technology roadmaps for high-value capital procurement."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Capital Acquisitions', path: '/services/capital-acquisitions' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#0B1726] text-white p-8 sm:p-10 rounded-2xl border border-[#1E3854] shadow-xl space-y-4">
          <span className="text-xs font-bold text-[#C58A45] uppercase tracking-widest block">
            Featured Strategic Insight
          </span>
          <p className="text-xl sm:text-2xl font-bold font-display text-white italic">
            "Our Expert in DAP 2020 Acquisition Process and insight for Operational necessity Defence Technology roadmap offer consultancy support in harnessing new acquisition participation."
          </p>
        </div>

        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-display text-[#0B1726]">
            Harnessing New Acquisition Participation
          </h2>
          <p className="text-sm text-[#64748B] leading-relaxed">
            With the Ministry of Defence planning over USD 200 billion in capital modernization over the next decade, capital acquisitions represent the highest-value tier of Indian defence procurement. Our consultants help vendors align their strategic capability offerings with the long-term perspective plans (LTIPP), Capability Development Plans, and operational necessity statements issued by the Indian Armed Forces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C58A45]" />
                Operational Necessity Mapping
              </h3>
              <p className="text-xs text-[#64748B]">Understanding service-specific operational requirements and urgent capability gap roadmaps.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2B8C96]" />
                Capital Procurement Categorization
              </h3>
              <p className="text-xs text-[#64748B]">Structuring proposals under Buy (Indian-IDDM) or Make categories for maximum procurement preference.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
