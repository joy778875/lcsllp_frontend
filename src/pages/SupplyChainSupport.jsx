import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Truck, ShieldCheck, Layers, Network, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function SupplyChainSupport() {
  const supplyPillars = [
    {
      title: "Vendor Identification & Tier Mapping",
      desc: "Identifying certified Indian precision manufacturing units, sub-tier component suppliers, and specialized raw material providers.",
      icon: Network
    },
    {
      title: "Indigenisation & Make-in-India Integration",
      desc: "Aligning supply chains with positive indigenisation lists, local value addition norms, and offset fulfillment obligations.",
      icon: Layers
    },
    {
      title: "Quality & Defence Standards Compliance",
      desc: "Guidance on military specifications, aerospace quality management (AS9100), and vendor qualification audits.",
      icon: ShieldCheck
    },
    {
      title: "Supply Continuity & Risk Mitigation",
      desc: "Formulating secondary sourcing strategies, lifecycle obsolescence plans, and long-term MRO spares security.",
      icon: Truck
    }
  ];

  const scSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/supply-chain-support/#service',
        name: 'Defence Aviation Supply Chain & Indigenization Advisory',
        description: seoPages.supplyChain.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.supplyChain.title}
        description={seoPages.supplyChain.description}
        keywords={seoPages.supplyChain.keywords}
        canonical={seoPages.supplyChain.canonical}
      />
      <JsonLd schema={scSchema} id="supply-chain-jsonld" />

      <PageHero
        eyebrow="SERVICES / SUPPLY CHAIN SUPPORT"
        title="Supply Chain Support"
        description="Strategic positioning, tier-integration, indigenisation mapping, and resilient supply chain advisory for the aerospace and defence ecosystem."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Supply Chain Support', path: '/services/supply-chain-support' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        {/* Client Content Pending Notice Banner */}
        <div className="bg-[#0B0B0C] border-l-4 border-[#C9A96E] rounded-xl p-6 sm:p-8 shadow-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-[#C9A96E] shrink-0 mt-0.5">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
                  Content Finalization Notice
                </span>
                <span className="text-[9.5px] bg-[#C9A96E]/20 text-[#C9A96E] px-2 py-0.5 rounded font-medium uppercase tracking-wider">
                  Pending Client Inputs
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                Detailed Scope Under Customization
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed max-w-2xl font-light">
                We are finalizing specific scope items, technical deliverables, and partner qualification parameters for Supply Chain Support. Have specific requirements or ready content? Share your content or brief with our advisory team.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#DFCA9B] text-black font-medium text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-sm transition-all shrink-0 shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            Provide Content / Scope
          </Link>
        </div>

        {/* Featured Strategic Focus */}
        <div className="bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-3">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block">
            Featured Strategic Focus
          </span>
          <p className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
            "Optimizing defense supply chain resilience, vendor localization, and tier-integration to build enduring self-reliance in aerospace and defence manufacturing."
          </p>
        </div>

        {/* Strategic Capabilities Grid */}
        <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
              Core Advisory Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
              Defence Supply Chain Advisory Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-3xl font-light">
              From raw materials sourcing to Tier-1 system integration, Labradorite provides end-to-end strategic advisory to help foreign and domestic defence manufacturers build compliant, resilient, and cost-effective supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {supplyPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 bg-[#FAFAF8] rounded-xl border border-stone-200 space-y-3 hover:border-[#C9A96E] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white rounded-lg border border-stone-200 text-[#C9A96E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base font-normal text-[#1A1A1A]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Quick Checklist */}
          <div className="pt-6 border-t border-stone-200">
            <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">
              Key Focus Areas for Indian Defence Supply Chains
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Positive Indigenisation List compliance",
                "Tier-2 & Tier-3 vendor auditing",
                "Offset banking & fulfillment support",
                "Defence industrial corridor linkage",
                "Spares & obsolescence management",
                "Long-term rate contract optimization"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-600 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
