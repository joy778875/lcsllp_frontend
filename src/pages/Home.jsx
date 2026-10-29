import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, PhoneCall, ChevronDown } from 'lucide-react';
import TrustStrip from '../components/TrustStrip';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { clientBelief, servicesList as defaultServices } from '../data/contentData';
import api from '../utils/api';
import { personSchemaArvindSrivastava, seoPages } from '../data/seoData';
import { generateFaqSchema } from '../data/faqData';

const defaultFaqsList = [
  {
    q: 'Who leads the consultancy at Labradorite?',
    a: 'The advisory is led by Air Commodore Arvind Srivastava, an Indian Air Force veteran with 30+ years of military aeronautical engineering service, and former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence.',
  },
  {
    q: 'What areas of defence and aerospace do you specialise in?',
    a: 'Our core competencies include Defence Capital Acquisitions under DAP 2020 (IDDM, Make, D&D categories), Aircraft MRO setup & base modernization, regulatory airworthiness approvals (DGCA/DGAQA/CEMILAC), and aerospace supply chain indigenisation.',
  },
  {
    q: 'How does Labradorite support defence offsets and ToT?',
    a: 'We assist foreign OEMs and Indian entities in structuring offset programs, navigating offset banking, and orchestrating Transfer of Technology (ToT) absorption compliant with MoD guidelines.',
  },
  {
    q: 'Can startups and MSMEs engage with your advisory?',
    a: 'Yes. We guide aerospace startups and MSMEs through iDEX challenges, Make-II/Make-III schemes, MoD vendor registration, and technical pitch alignment against military Service Qualitative Requirements (SQRs).',
  },
  {
    q: 'What is the engagement model for advisory services?',
    a: 'We engage through structured feasibility assessments, long-term project-management retainers, and milestone-linked consultation agreements based on operational scope.',
  },
];

export default function Home() {
  const [services, setServices] = useState(defaultServices);
  const [openFaq, setOpenFaq] = useState(null);
  const [faqs, setFaqs] = useState(defaultFaqsList);

  const [sectionVisibility, setSectionVisibility] = useState({
    showHero: true,
    showTrustStrip: true,
    showServices: true,
    showPhilosophy: true,
    showFaqs: true,
    showCta: true,
  });

  const [heroBanner, setHeroBanner] = useState({
    title: 'Building better business through knowledge, experience & trust.',
    subtitle: 'Defence Acquisition and Technology consultancy for Indian and global aerospace entities, grounded in DAP 2020 guidelines and military integrity.',
    eyebrow: 'Aatmanirbhar Bharat · IAF Veteran-Led Advisory',
    imageUrl: '/images/iaf-fighter-jets-hero.jpg',
    badgeText: 'IAF Veteran Leadership',
    link: '/services',
  });

  const [philosophyData, setPhilosophyData] = useState({
    eyebrow: 'Brand Philosophy & Mission',
    heading: 'Transformation through insight & military integrity.',
    quote: clientBelief.quote,
    text: 'Labradorite serves as a platform for transformation in Indian aerospace and defence. Founded around the operational experience of Indian Air Force veterans, we illuminate strategic pathways across complex procedural and indigenisation landscapes.',
    image: '/images/iaf-fighter-jets-tarmac.jpg',
  });

  useEffect(() => {
    let isMounted = true;

    // Fetch active banners from backend
    api.get('/banners')
      .then((data) => {
        if (isMounted && data.banners && data.banners.length > 0) {
          const active = data.banners.find((b) => b.active) || data.banners[0];
          setHeroBanner((prev) => ({
            ...prev,
            title: active.title || prev.title,
            subtitle: active.subtitle || prev.subtitle,
            eyebrow: active.eyebrow || prev.eyebrow,
            imageUrl: active.imageUrl || prev.imageUrl,
            badgeText: active.badgeText || prev.badgeText,
            link: active.link || prev.link,
          }));
        }
      })
      .catch(() => {});

    // Fetch dynamic services
    api.get('/services')
      .then((data) => {
        if (isMounted && data.services && data.services.length > 0) {
          const mapped = data.services.map((s) => ({
            ...s,
            id: s.slug || s.id || s._id,
          }));
          setServices(mapped);
        }
      })
      .catch(() => {});

    // Fetch siteContent for philosophy, FAQs & section visibility
    api.get('/site-content')
      .then((data) => {
        if (isMounted && data.content) {
          const hm = data.content.home;
          const ab = data.content.about;
          if (hm || ab) {
            setPhilosophyData({
              eyebrow: hm?.philosophyEyebrow || 'Brand Philosophy & Mission',
              heading: hm?.philosophyHeading || 'Transformation through insight & military integrity.',
              quote: hm?.philosophyQuote || ab?.clientBeliefQuote || clientBelief.quote,
              text: hm?.philosophyText || 'Labradorite serves as a platform for transformation in Indian aerospace and defence. Founded around the operational experience of Indian Air Force veterans, we illuminate strategic pathways across complex procedural and indigenisation landscapes.',
              image: hm?.philosophyImage || '/images/iaf-fighter-jets-tarmac.jpg',
            });
          }

          if (data.content.sectionVisibility) {
            setSectionVisibility(data.content.sectionVisibility);
          }

          if (data.content.faqs && data.content.faqs.length > 0) {
            setFaqs(data.content.faqs);
          }
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const spotlightServices = services.slice(0, 3);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': 'https://lcsllp.online/#organization',
        name: 'Labradorite Consultancy & Services LLP',
        url: 'https://lcsllp.online/',
        logo: 'https://lcsllp.online/labradorite-logo.jpg',
        telephone: '+91-9866865141',
        email: '9866865141as@gmail.com',
        priceRange: '$$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'FLAT NO 701 Block K Homes 121, Noida Sector 121',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201307',
          addressCountry: 'IN',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Aviation Consultancy Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aircraft MRO Setup & Sustenance' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Defence Capital Acquisition Advisory (DAP 2020)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Aircraft Leasing & Asset Due Diligence' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DGCA & BCAS Regulatory Airworthiness Compliance' } },
          ],
        },
      },
      generateFaqSchema(faqs),
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.home.title}
        description={seoPages.home.description}
        keywords={seoPages.home.keywords}
        canonical={seoPages.home.canonical}
      />
      <JsonLd schema={homeSchema} id="home-structured-data" />

      {/* 1. CINEMATIC HERO SECTION */}
      {sectionVisibility.showHero !== false && (
        <section className="relative w-full bg-[#0B0B0C] text-white overflow-hidden sm:h-[88vh] sm:min-h-[580px] flex flex-col justify-between">
          <div className="relative w-full aspect-[16/10] sm:aspect-auto sm:absolute sm:inset-0 sm:h-full sm:w-full overflow-hidden bg-[#0B0B0C]">
            <img
              src={heroBanner.imageUrl || '/images/iaf-fighter-jets-hero.jpg'}
              alt={heroBanner.title}
              className="w-full h-full object-cover sm:object-center object-[50%_45%] brightness-[0.92] sm:brightness-[0.80] transition-transform duration-1000 group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.src = '/images/iaf-fighter-jets-hero.jpg';
              }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-black/20 to-black/40 sm:bg-gradient-to-t sm:from-black/95 sm:via-black/35 sm:to-black/40 pointer-events-none" />
            
            <div className="absolute top-4 left-4 sm:hidden bg-black/60 backdrop-blur-md border border-[#C9A96E]/40 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.22em] text-[#C9A96E] flex items-center gap-1.5 font-medium">
              <Award className="w-3 h-3 text-[#C9A96E]" />
              <span>{heroBanner.badgeText || 'IAF Veteran Advisory'}</span>
            </div>
          </div>

          <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-12 w-full pt-4 pb-12 sm:pb-20 sm:h-full flex flex-col justify-end">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.28em] text-[#C9A96E] font-light">
                <Award className="w-4 h-4 text-[#C9A96E]" />
                <span>{heroBanner.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-wide text-white leading-[1.12]">
                {heroBanner.title}
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-stone-200 font-light max-w-3xl leading-relaxed tracking-wider">
                {heroBanner.subtitle}
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
                <Link
                  to={heroBanner.link || '/services'}
                  className="inline-block text-center text-xs uppercase tracking-[0.2em] font-medium text-black bg-[#C9A96E] hover:bg-[#DFCA9B] transition-all px-8 py-3.5 rounded-sm shadow-xl"
                >
                  Explore Capabilities
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.18em] font-medium text-white border border-white/40 hover:bg-white/10 transition-colors px-6 py-3.5 rounded-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Discuss an Opportunity</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. CORE CAPABILITIES / TRUST STRIP */}
      {sectionVisibility.showTrustStrip !== false && <TrustStrip />}

      {/* 3. STRATEGIC CAPABILITIES SPOTLIGHT */}
      {sectionVisibility.showServices !== false && (
        <section className="py-16 sm:py-24 bg-[#FAFAF8] border-b border-stone-200">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-12 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C9A96E] font-medium block mb-2">
                  Strategic Focus Areas
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1A1A]">
                  Key Consultancy Capabilities
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#1A1A1A] hover:text-[#C9A96E] transition-colors font-medium underline underline-offset-8"
              >
                <span>Explore All {services.length} Services</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A96E]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {spotlightServices.map((service, index) => (
                <div
                  key={service._id || service.id || index}
                  className="group relative bg-[#0B0B0C] border border-stone-200 hover:border-[#C9A96E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                    <img
                      src={service.image || '/images/service-avionics.jpg'}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded text-[10px] font-body font-bold text-[#C9A96E]">
                      0{index + 1}
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[9px] uppercase tracking-[0.18em] text-stone-300">
                      Domain
                    </div>
                  </div>

                  <div className="p-6 space-y-3 bg-[#0B0B0C] text-white flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
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
                        <span>Explore Capability Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-black bg-[#C9A96E] hover:bg-[#D5B880] px-8 py-3.5 rounded shadow-lg transition-all"
              >
                <span>View Full {services.length}-Domain Directory</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. BRAND PHILOSOPHY & IAF VETERAN OPERATIONAL FRONT */}
      {sectionVisibility.showPhilosophy !== false && (
        <section className="py-16 sm:py-20 bg-[#F4F3F0] text-[#1A1A1A] border-b border-stone-200">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C9A96E] font-medium block">
                  {philosophyData.eyebrow}
                </span>

                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A] leading-tight">
                  {philosophyData.heading}
                </h2>

                <blockquote className="p-5 bg-white border-l-2 border-[#C9A96E] rounded shadow-sm text-base font-serif italic text-[#1A1A1A]">
                  "{philosophyData.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {philosophyData.text}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#1A1A1A] hover:text-[#C9A96E] transition-colors underline underline-offset-8"
                  >
                    Our Full Story &amp; Objective &rarr;
                  </Link>

                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-stone-600 hover:text-black transition-colors"
                  >
                    Meet the Advisory Board &rarr;
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-300 group">
                  <img
                    src={philosophyData.image || '/images/iaf-fighter-jets-tarmac.jpg'}
                    alt="Indian Air Force Veteran Operational Front"
                    className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = '/images/iaf-fighter-jets-tarmac.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-light">
                      Operational Front
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                      Rooted in IAF Veteran Experience
                    </h3>
                    <p className="text-[11px] text-stone-300 font-light">
                      DAP 2020 Compliance • DPM • Offset Structuring • TOT Advisory
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. EDITABLE FAQ SECTION */}
      {sectionVisibility.showFaqs !== false && faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-[#C9A96E] font-medium block">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A]">
                Aviation &amp; Defence Advisory: In-Depth FAQ
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                Clarifications on credentials, procurement procedures, MRO setup, and client engagement.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-[#FAF8F5]"
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenFaq(isOpen ? null : idx);
                      }}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg text-[#0B1726] font-normal">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C9A96E] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-200/60 pt-4 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. FINAL LUXURY CTA */}
      {sectionVisibility.showCta !== false && <CTASection />}
    </div>
  );
}
