import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function TechnologyConsultancy() {
  const processSteps = [
    { title: "Technology", desc: "Evaluating indigenous proprietary technology & IP." },
    { title: "Opportunity", desc: "Mapping MOD requirement roadmaps & capability gaps." },
    { title: "EOI / RFI", desc: "Structuring compliant Expression of Interest & RFI submissions." },
    { title: "RFP Response", desc: "Crafting technical & commercial RFP bid proposals." },
    { title: "Acquisition", desc: "Navigating DAP 2020 trials & committee evaluations." },
    { title: "Business Growth", desc: "Achieving contract execution & long-term supply integration." }
  ];

  const techSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/technology-consultancy/#service',
        name: 'Defence Aviation Technology Consultancy | RFI RFP Advisory',
        description: seoPages.techConsultancy.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.techConsultancy.title}
        description={seoPages.techConsultancy.description}
        keywords={seoPages.techConsultancy.keywords}
        canonical={seoPages.techConsultancy.canonical}
      />
      <JsonLd schema={techSchema} id="tech-consultancy-jsonld" />

      <PageHero
        eyebrow="SERVICES / STRATEGIC ADVISORY"
        title="Technology Consultancy"
        description="Identifying opportunities and providing technology consultancy for EOI/RFI/RFP responses through iDEX, Make, and other DAP 2020 acquisition processes."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Technology Consultancy', path: '/services/technology-consultancy' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        {/* Featured Statement Box with 8D Cubes */}
        <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <Moving8DCubesBackground cubeCount={3} opacity={0.3} />
          <div className="space-y-2 relative z-10">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
              Core Value Proposition
            </span>
            <p className="text-xl sm:text-2xl font-serif italic text-white leading-snug">
              "If you have the technology, we have the strategy plan to sell that and find a buyer."
            </p>
          </div>
          <div className="relative z-10 px-5 py-2.5 bg-white/5 rounded border border-white/10 text-xs font-body font-semibold uppercase tracking-[0.2em] text-[#C9A96E] shrink-0">
            DAP 2020 &amp; iDEX Aligned
          </div>
        </div>

        {/* Detailed Client Text */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
            Springboard for Defence Technology Development
          </h2>
          
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            The DAP 2020 Defence policy framework is now based on the cornerstone of indigenous manufacturing and establishment of defence corridors focused upon development of indigenous manufacturing. We in turn become the springboard for all development activities undertaken by the government in the defence sector through identifying the opportunities and provide technology consultancy for EOI/RFI/RFP response thru iDEX, Make and other Acquisition processes for business development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-[#FAFAF8] rounded-lg border border-stone-200 space-y-2">
              <h3 className="text-sm font-serif font-normal text-[#1A1A1A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" />
                iDEX &amp; Make Initiatives
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Guiding tech entities through Innovations for Defence Excellence (iDEX) and Make-I / Make-II acquisition categories.
              </p>
            </div>
            <div className="p-5 bg-[#FAFAF8] rounded-lg border border-stone-200 space-y-2">
              <h3 className="text-sm font-serif font-normal text-[#1A1A1A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" />
                Defence Corridor Positioning
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Aligning technology offerings with infrastructure incentives in Uttar Pradesh and Tamil Nadu defence corridors.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Process Flow */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
              Strategic Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
              Technology Commercialization Process
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-lg p-5 shadow-sm relative group hover:border-[#C9A96E] transition-all">
                <div className="font-serif text-xl font-light text-[#C9A96E] mb-2">0{idx + 1}</div>
                <h4 className="font-serif text-sm font-normal text-[#1A1A1A] mb-1.5">{step.title}</h4>
                <p className="text-[11px] text-stone-500 leading-snug font-light">{step.desc}</p>
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-stone-300 absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:block z-10 bg-white rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
