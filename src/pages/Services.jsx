import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Timeline from '../components/Timeline';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';
import { servicesList as fallbackServices } from '../data/contentData';
import { ArrowUpRight } from 'lucide-react';
import api from '../utils/api';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function Services() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    let isMounted = true;
    api.get('/services')
      .then((data) => {
        if (isMounted && data.services && data.services.length > 0) {
          // Normalize service fields (id or slug)
          const mapped = data.services.map((s) => ({
            ...s,
            id: s.slug || s.id || s._id,
          }));
          setServices(mapped);
        }
      })
      .catch((err) => {
        console.warn('Using local fallback services list:', err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'Service',
        '@id': 'https://lcsllp.online/services/#service',
        name: 'Aviation & Defence Acquisition Consultancy Services',
        description: seoPages.services.description,
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core Aviation Capabilities',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technology Consultancy & DAP 2020 RFI/RFP Support' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aircraft MRO Setup, Depot Modernization & ToT Absorption' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aviation Leasing & GIFT City Asset Due Diligence' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Defence Project Management & PMG Liaison' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aerospace Supply Chain Support & Indigenization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical Training & CAR 147 Curriculum Structuring' } }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.services.title}
        description={seoPages.services.description}
        keywords={seoPages.services.keywords}
        canonical={seoPages.services.canonical}
      />
      <JsonLd schema={servicesSchema} id="services-page-jsonld" />

      <PageHero
        eyebrow="DEFENCE CONSULTANCY SERVICES"
        title="Defence expertise for complex acquisition and technology challenges."
        description="We offer highly skilled, experienced, professional consultants for your business. Trustworthy advisory related to the aerospace and defence industry based on the DAP 2020 / DPM framework."
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.26em] block">
            Full Service Directory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1A1A]">
            Comprehensive Strategic Advisory Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
            Tailored solutions aligned with Defence Acquisition Procedure (DAP) 2020, Defence Procurement Manual (DPM), and Defence Financial Regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service._id || service.id || index}
              className="group relative bg-[#0B0B0C] border border-stone-200 hover:border-[#C9A96E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Visual Image Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
                <img
                  src={service.image || '/images/service-avionics.jpg'}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded text-[10px] font-body font-bold text-[#C9A96E]">
                  0{index + 1}
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] uppercase tracking-[0.18em] text-stone-300">
                  Domain
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3.5 bg-[#0B0B0C] text-white flex-grow flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#C9A96E] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {service.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] uppercase tracking-wider text-stone-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-4">
                  <Link
                    to={`/services/${service.slug || service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] font-medium text-[#C9A96E] group-hover:text-white transition-colors"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Integration with Obsidian Glass Look & 8D Cubes */}
        <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-12 rounded-2xl border border-white/10 space-y-6 shadow-2xl overflow-hidden">
          <Moving8DCubesBackground
            cubeCount={4}
            accentColor="#C9A96E"
            secondaryColor="#60A5FA"
            opacity={0.35}
          />
          <div className="relative z-10 space-y-2 border-l-2 border-[#C9A96E] pl-4">
            <span className="text-[10px] sm:text-[11px] font-light text-[#C9A96E] uppercase tracking-[0.26em] block">
              Standard Engagement Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white">
              Consultancy Engagement Lifecycle
            </h3>
            <p className="text-xs text-stone-300 font-light">
              From RFI response to contract management process for successful accomplishment of defence contracts.
            </p>
          </div>

          <Timeline />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
