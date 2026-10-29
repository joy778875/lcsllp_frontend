import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Timeline from '../components/Timeline';
import { Compass, ShieldCheck } from 'lucide-react';

export default function EndToEnd() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="SERVICES / COMPLETE LIFECYCLE"
        title="End-to-End Assistance"
        description="At Labradorite, we have a dedicated team fully responsible to help you find the right consultancy advice. We aim to stand by you from the beginning of your journey from RFI response to Contract Management process."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'End-to-End Assistance', path: '/services/end-to-end-assistance' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#0B1726] text-white p-8 sm:p-10 rounded-2xl border border-[#1E3854] shadow-xl space-y-4">
          <span className="text-xs font-bold text-[#C58A45] uppercase tracking-widest block">
            Dedicated Advisory Commitment
          </span>
          <p className="text-xl sm:text-2xl font-bold font-display text-white italic">
            "From RFI Response to Contract Management for Successful Accomplishment of Contract."
          </p>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Our team stays embedded alongside your organisation through every procedural checkpoint, trial stage, offset audit, and milestone review.
          </p>
        </div>

        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold font-display text-[#0B1726]">
            The Complete 7-Stage Acquisition Pathway
          </h2>
          
          <Timeline />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
