import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Landmark, ShieldCheck } from 'lucide-react';

export default function Government() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS / PUBLIC SECTOR"
        title="Government & Defence Entities"
        description="Defence acquisition ecosystem, capability requirement mapping, acquisition processes, technology evaluation, and consultancy support."
        breadcrumbs={[
          { label: 'Verticals', path: '/verticals' },
          { label: 'Government', path: '/verticals/government' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <Landmark className="w-8 h-8 text-[#C58A45]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Supporting Government Defence Acquisition
              </h2>
              <p className="text-xs text-[#64748B]">Process Transparency &amp; Capability Alignment</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            We provide consultancy support focused on defence acquisition processes, technological capability mapping, and indigenisation frameworks to facilitate long-term business development aligned with national defence capability plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">Capability Roadmap Alignment</h3>
              <p className="text-xs text-[#64748B]">Matching supplier technology maturity with Armed Forces long-term capability requirements.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">Procurement Compliance</h3>
              <p className="text-xs text-[#64748B]">Ensuring all proposal frameworks conform strictly with DAP 2020 and Defence Financial Regulations.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
