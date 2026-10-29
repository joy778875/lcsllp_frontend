import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { companyRegistrationDetails } from '../data/navigationData';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="LEGAL & DISCLAIMER"
        title="Terms of Use &amp; Disclaimer"
        description="Statutory terms, consultancy scope limitations, and disclaimer for Labradorite Consultancy & Services LLP."
        breadcrumbs={[{ label: 'Terms & Disclaimer', path: '/terms' }]}
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#64748B] leading-relaxed">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            1. Consultancy Scope Disclaimer
          </h2>
          <p>
            Labradorite Consultancy &amp; Services LLP provides strategic guidance, technological roadmap positioning, and procedural advisory services based on Defence Acquisition Procedure (DAP 2020), DPM, and Defence Financial Regulations.
          </p>
          <p className="p-4 bg-[#F6F5F1] border-l-4 border-[#C58A45] text-[#0B1726] font-medium rounded-r">
            Labradorite is an independent consultancy firm. We do not issue government procurement approvals, guarantee contract awards, or act as an official agency of the Ministry of Defence, Government of India.
          </p>

          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            2. Intellectual Property &amp; Content
          </h2>
          <p>
            All website trademarks, logos, mineral brand metaphors, and editorial content are the property of Labradorite Consultancy &amp; Services LLP.
          </p>

          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            3. Corporate Identification
          </h2>
          <div className="p-4 bg-[#0B1726] text-white rounded-lg text-xs space-y-1">
            <div><strong>Registered Entity:</strong> {companyRegistrationDetails.name}</div>
            <div><strong>Date of Registration:</strong> {companyRegistrationDetails.registrationDate}</div>
            <div><strong>LLPIN:</strong> {companyRegistrationDetails.llpin}</div>
            <div><strong>PAN / TAN:</strong> {companyRegistrationDetails.pan} / {companyRegistrationDetails.tan}</div>
            <div><strong>GSTIN:</strong> {companyRegistrationDetails.gst}</div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
