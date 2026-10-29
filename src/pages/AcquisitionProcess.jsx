import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { FileCheck, Shield, CheckCircle2 } from 'lucide-react';

export default function AcquisitionProcess() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="SERVICES / COMPLIANCE & FRAMEWORK"
        title="Acquisition Process Consultancy"
        description="Comprehensive advisory based on complex acquisition processes laid down in the defence framework of DAP 2020, Defence Procurement Manual (DPM), and Defence Financial Regulations."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Acquisition Process', path: '/services/acquisition-process' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <FileCheck className="w-8 h-8 text-[#C58A45]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Navigating Defence Acquisition Frameworks
              </h2>
              <p className="text-xs text-[#64748B]">DAP 2020 &amp; DPM Procedural Advisory</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            Defence acquisition in India demands rigorous procedural compliance across multiple statutory bodies, procurement manuals, and financial guidelines. Our IAF veteran-led team brings deep operational insight into the nuances of Defence Acquisition Procedure (DAP) 2020, DPM rules, and Defence Financial Regulations to help clients find the most effective solutions to their business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <span className="text-xs font-bold text-[#C58A45] uppercase">DAP 2020 Rules</span>
              <h3 className="text-base font-bold text-[#0B1726]">Categorization &amp; IC</h3>
              <p className="text-xs text-[#64748B]">Navigating Buy (Indian-IDDM), Buy (Indian), Buy &amp; Make, and Leasing categories with precise Indigenous Content (IC) accounting.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <span className="text-xs font-bold text-[#2B8C96] uppercase">DPM Compliance</span>
              <h3 className="text-base font-bold text-[#0B1726]">Revenue Procurement</h3>
              <p className="text-xs text-[#64748B]">Procedural alignment for revenue purchases, maintenance contracts, spare parts, and consumable defence procurement.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <span className="text-xs font-bold text-[#607C83] uppercase">Financial Regulations</span>
              <h3 className="text-base font-bold text-[#0B1726]">Financial Audit &amp; Approvals</h3>
              <p className="text-xs text-[#64748B]">Structuring commercial proposals in full accordance with Defence Financial Regulations (DFR) and MoD audit requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
