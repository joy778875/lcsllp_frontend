import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Network, ShieldCheck, Lock, Radio } from 'lucide-react';

export default function ITNetworking() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="SERVICES / DIGITAL & COMMUNICATION"
        title="IT & Networking Consultancy"
        description="Specialized consultancy for defence-grade communication infrastructure, network planning, and secure IT systems."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'IT & Networking', path: '/services/it-networking' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <Network className="w-8 h-8 text-[#607C83]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Secure Communications &amp; Infrastructure
              </h2>
              <p className="text-xs text-[#64748B]">Capabilities To Be Discussed Per Client Specification</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            We provide strategic IT &amp; Networking consultancy to assist defence entities in evaluating secure communication protocols, network architecture, and operational digital infrastructure. Per client guidelines, specific technical requirements and project parameters are discussed directly with our advisory team.
          </p>

          <div className="p-6 bg-[#0B1726] text-white rounded-lg border border-[#1E3854] space-y-3">
            <span className="text-xs font-bold text-[#C58A45] uppercase tracking-widest block">
              Confidential Engagement Framework
            </span>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Defence networking projects often involve sensitive operational parameters. Our team operates under strict non-disclosure principles to review requirements and propose customized technical solutions.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Discuss Your IT & Networking Requirements" />
    </div>
  );
}
