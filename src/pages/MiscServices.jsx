import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function MiscServices() {
  const miscCapabilities = [
    { title: "Experienced HR Setup", desc: "Identifying skilled defence talent and establishing experienced HR frameworks for technical defence operations." },
    { title: "Accessing New Segments", desc: "Unlocking new customer segments across Paramilitary, Armed Forces, Coast Guard, and Defence PSUs." },
    { title: "Business Model Innovation", desc: "Structuring innovative defence commercial models including PPP, leasing, joint ventures, and offsets." },
    { title: "Product Development Transformation", desc: "Aligning proprietary technology R&D with MOD capability requirements and DAP trials." },
    { title: "Customer Support Enhancement", desc: "Transforming post-contract customer support services and depot-level maintenance frameworks." },
    { title: "Bridging Information Asymmetry", desc: "Providing exhaustive coverage and market clarity across the Indian Aerospace & Defence ecosystem." }
  ];

  const miscSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/miscellaneous-services/#service',
        name: 'Aviation Technical Academia & Training Consulting',
        description: seoPages.miscellaneous.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.miscellaneous.title}
        description={seoPages.miscellaneous.description}
        keywords={seoPages.miscellaneous.keywords}
        canonical={seoPages.miscellaneous.canonical}
      />
      <JsonLd schema={miscSchema} id="misc-services-jsonld" />

      <PageHero
        eyebrow="SERVICES / ADVISORY ENHANCEMENTS"
        title="Miscellaneous Services"
        description="Aiding key business challenges: HR setup, accessing new customer segments, innovating business models, transforming product development, and bridging information asymmetry."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Miscellaneous Services', path: '/services/miscellaneous-services' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        <div className="bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-3">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block">
            Client Mandate
          </span>
          <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
            "We also aid on key business challenges, such as identifying skills experienced HR set up, accessing new customer segments, innovating business models, transforming product development, and improving customer support services. Bridge any information asymmetry provide exhaustive coverage of Indian A&D ecosystem."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miscCapabilities.map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm hover:border-[#C9A96E] hover:shadow-lg transition-all space-y-3">
              <span className="font-serif text-2xl font-light text-[#C9A96E] block">0{idx + 1}</span>
              <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">{item.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
