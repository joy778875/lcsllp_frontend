import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function StartupsMSME() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS / INNOVATION & MSMEs"
        title="Startups & MSMEs"
        description="Helping emerging Indian businesses understand defence opportunities, position proprietary technology, and navigate iDEX, Make initiatives, and EOI/RFI/RFP submissions."
        breadcrumbs={[
          { label: 'Verticals', path: '/verticals' },
          { label: 'Startups & MSMEs', path: '/verticals/startups-msme' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <Rocket className="w-8 h-8 text-[#C58A45]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Empowering Indian Innovators in Defence
              </h2>
              <p className="text-xs text-[#64748B]">Bridging Information Asymmetry for MSMEs</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            Startups and MSMEs are the backbone of the Aatmanirbhar Bharat vision. However, navigating complex defence procurement procedures can present steep entry barriers. Labradorite bridges information asymmetry by helping emerging innovators structure EOI/RFI responses, align with iDEX challenges, and establish strategic partnerships with prime contractors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">iDEX Guidance</h3>
              <p className="text-xs text-[#64748B]">Consultancy support for Innovations for Defence Excellence (iDEX) challenge grants &amp; prototype trials.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">Make-II &amp; Make-III</h3>
              <p className="text-xs text-[#64748B]">Navigating industry-funded indigenisation schemes tailored specifically for Indian MSMEs.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">RFI / RFP Structuring</h3>
              <p className="text-xs text-[#64748B]">Formatting technical specifications and compliance documentation to match MOD procurement norms.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
