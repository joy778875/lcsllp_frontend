import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function ProjectManagement() {
  const pmPillars = [
    { title: "Framework Analysis", desc: "Evaluating project management structures against global aerospace best practices and defence procurement rules." },
    { title: "Indigenisation Planning", desc: "Tailoring execution roadmaps directly to Customer Indigenisation Plans and local sourcing mandates." },
    { title: "Technical Consultancy", desc: "Providing expert technical resolution for complex engineering and production challenges." },
    { title: "PMG Liaison", desc: "Close liaison with Project Management Groups (PMG) to iron out operational impediments in the way forward." },
    { title: "Progress Tracking", desc: "Systematic milestone monitoring to verify technical progress and delivery milestones." },
    { title: "Scope Management", desc: "Proactive governance of scope changes, technical variations, and contractual amendments." },
    { title: "Delivery Management", desc: "Ensuring on-time and within-budget contract execution for defense acquisition entities." }
  ];

  const pmSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/project-management/#service',
        name: 'Aerospace Project Management & PMG Advisory | India',
        description: seoPages.projectManagement.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.projectManagement.title}
        description={seoPages.projectManagement.description}
        keywords={seoPages.projectManagement.keywords}
        canonical={seoPages.projectManagement.canonical}
      />
      <JsonLd schema={pmSchema} id="project-management-jsonld" />

      <PageHero
        eyebrow="SERVICES / EXECUTION & PMG LIAISON"
        title="Project Management"
        description="Analysis of project management frameworks aligned with industry best practices and tailored to Customer Indigenisation plans — providing technical consultancy in close liaison with PMG."
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: 'Project Management', path: '/services/project-management' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-3 overflow-hidden">
          <Moving8DCubesBackground cubeCount={3} opacity={0.3} />
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] block">
              Complete Project Management Mandate
            </span>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              "Analysis of project management frameworks by highly skilled, experienced, professional, and experienced consultants aligned with industry best practices and tailored as per Customers Indigenisation plans providing technical consultancy in close liaison to PMG to iron out impediments in the way forward, to track progress, manage scope changes, and ensure on-time and within-budget project delivery."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
            The 7 Pillars of Defence Project Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-[#C9A96E] transition-all space-y-3">
                <div className="font-serif text-xl font-light text-[#C9A96E]">0{idx + 1}</div>
                <h3 className="font-serif text-lg font-normal text-[#1A1A1A]">{pillar.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
