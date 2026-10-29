import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { ShieldCheck, DollarSign, Zap, Clock, TrendingUp } from 'lucide-react';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function Leasing() {
  const leasingBenefits = [
    { title: "No Large Initial Capital Outlay", desc: "Preserves upfront capital budget while granting immediate operational access to state-of-the-art defence assets.", icon: DollarSign },
    { title: "Mitigates Obsolescence Risk", desc: "Prevents technology lock-in by enabling asset upgrades and replacements at contract expiration.", icon: Zap },
    { title: "Accelerated Procurement Timeline", desc: "Faster acquisition pathway compared to traditional decade-long capital procurement cycles under DAP 2020.", icon: Clock },
    { title: "Reduced Administrative Costs", desc: "Lower life-cycle maintenance burden and streamlined contractual administration for procurement entities.", icon: ShieldCheck },
    { title: "Structured Lessor Benefits", desc: "Assured financial returns, predictable cash flows, tax depreciation benefits, and long-term sovereign contracts.", icon: TrendingUp }
  ];

  const leaseSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/leasing-consultancy/#service',
        name: 'Aviation Asset & Aircraft Leasing Advisory | India',
        description: seoPages.leasingConsultancy.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.leasingConsultancy.title}
        description={seoPages.leasingConsultancy.description}
        keywords={seoPages.leasingConsultancy.keywords}
        canonical={seoPages.leasingConsultancy.canonical}
      />
      <JsonLd schema={leaseSchema} id="leasing-consultancy-jsonld" />

      <PageHero
        eyebrow="SERVICES / DAP 2020 LEASING"
        title="Leasing Consultancy"
        description="Expert consultancy for structuring high-technology asset leasing contracts under DAP 2020 guidelines: An economical path to operational readiness and self-reliance."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Leasing Consultancy', path: '/services/leasing-consultancy' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        <div className="bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-3">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block">
            Featured Leasing Focus
          </span>
          <p className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
            "Our Expert in DAP 2020 Acquisition Process in Leasing Contracts and insight for Operational necessity, offer opportunity to provide consultancy support in harnessing this platform of business."
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
            Operational Preparedness Through High-Technology Asset Leasing
          </h2>

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            To continue operational preparedness and training as the nation grows to acquire self-reliance, Leasing of High-Technology Assets is a viable and economical solution to explore technology, assess capabilities, and attain high training standards. Introduced under DAP 2020, leasing enables defence forces to deploy advanced systems rapidly without full upfront ownership costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {leasingBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200 space-y-2 hover:border-[#C9A96E] transition-all">
                  <Icon className="w-5 h-5 text-[#C9A96E]" />
                  <h3 className="font-serif text-base font-normal text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
