import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';
import { Wrench, Factory, RefreshCw, Handshake } from 'lucide-react';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function Sustenance() {
  const mroSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/mro-sustenance/#service',
        name: 'Aircraft MRO Setup & Sustenance Consulting | Air Cmde Srivastava',
        description: seoPages.mroSustenance.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.mroSustenance.title}
        description={seoPages.mroSustenance.description}
        keywords={seoPages.mroSustenance.keywords}
        canonical={seoPages.mroSustenance.canonical}
      />
      <JsonLd schema={mroSchema} id="mro-sustenance-jsonld" />

      <PageHero
        eyebrow="SERVICES / INDIGENOUS SUSTENANCE"
        title="MRO & Sustenance Consultancy"
        description="Developing indigenous ecosystems, Transfer of Technology (TOT), and establishing the right Indian operational partner to set up state-of-the-art facilities and grow long-term defence business."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'MRO & Sustenance', path: '/services/mro-sustenance' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-3 overflow-hidden">
          <Moving8DCubesBackground cubeCount={3} opacity={0.3} />
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block">
              Featured Strategic Focus
            </span>
            <p className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
              "If you have the technology, we have the strategy plan focused upon development of indigenous ecosystem and MRO /sustenance capabilities to TOT and find right Indian front to set up facility and grow business."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-3 hover:border-[#C9A96E] transition-all">
            <Factory className="w-6 h-6 text-[#C9A96E]" />
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">Indigenous Ecosystem</h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">Setting up domestic manufacturing &amp; component repair hubs inside India's designated defence corridors.</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-3 hover:border-[#C9A96E] transition-all">
            <RefreshCw className="w-6 h-6 text-[#C9A96E]" />
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">Transfer of Technology (TOT)</h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">Structuring technology transfer agreements between foreign OEMs and Indian production partners.</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-3 hover:border-[#C9A96E] transition-all">
            <Handshake className="w-6 h-6 text-[#C9A96E]" />
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">Indian Operational Front</h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">Identifying trustworthy local joint ventures, offset partners, and operational execution units.</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-3 hover:border-[#C9A96E] transition-all">
            <Wrench className="w-6 h-6 text-[#C9A96E]" />
            <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">Long-term Sustenance</h3>
            <p className="text-xs text-stone-500 font-light leading-relaxed">Ensuring life-cycle repair support, overhaul lines, and spare parts supply security for Armed Forces.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
