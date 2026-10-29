import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ForeignEntities() {
  const steps = [
    { number: "01", title: "Understand", desc: "Evaluating DAP 2020 policy regulations, offset guidelines, and foreign equity limits." },
    { number: "02", title: "Identify", desc: "Mapping active capability requirements across Indian Army, Air Force, Navy, & Space." },
    { number: "03", title: "Position", desc: "Tailoring international technology assets to fit Indian procurement categories." },
    { number: "04", title: "Partner", desc: "Connecting with vetted Indian defence manufacturers for TOT and local joint ventures." },
    { number: "05", title: "Participate", desc: "Guiding compliant submissions for EOI, RFI, and RFP tender processes." },
    { number: "06", title: "Grow", desc: "Establishing sustained MRO facilities, local value addition, and long-term business." }
  ];

  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS / INTERNATIONAL OEMs"
        title="Foreign Technology Entities"
        description="Providing international technology companies with strategic consultancy to explore opportunities, structure local partnerships, and build long-term business in India's defence ecosystem."
        breadcrumbs={[
          { label: 'Verticals', path: '/verticals' },
          { label: 'Foreign Technology Entities', path: '/verticals/foreign-technology-entities' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-[#0B1726] text-white p-8 sm:p-10 rounded-2xl border border-[#1E3854] shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-[#C58A45]" />
            <div>
              <span className="text-xs font-bold text-[#C58A45] uppercase tracking-widest block">
                Market Entry Advisory
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                Entering India's Aerospace &amp; Defence Ecosystem
              </h2>
            </div>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            With India planning to spend more than USD 200 billion on defence modernization over the next decade and opening up the space sector for private participation, foreign OEMs have unprecedented opportunities to enter strategic partnerships with local manufacturers.
          </p>
          <p className="text-xs text-[#607C83] italic">
            * Note: Labradorite provides strategic consultancy and procedural advice; we do not grant regulatory approvals or guarantee contract awards.
          </p>
        </div>

        {/* 6 Step Strategy Flow */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold font-display text-[#0B1726] text-center">
            Strategic Entry Framework for Global Technology OEMs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((st) => (
              <div key={st.number} className="bg-white border border-[#D9DEE5] rounded-xl p-5 shadow-sm space-y-2 hover:border-[#C58A45] transition-all">
                <span className="text-xs font-mono font-bold text-[#C58A45]">{st.number}</span>
                <h4 className="text-base font-bold text-[#0B1726]">{st.title}</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Discuss Foreign OEM Partnership Strategy" />
    </div>
  );
}
