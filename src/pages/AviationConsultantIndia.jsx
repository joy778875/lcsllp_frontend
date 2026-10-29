import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Shield, Award, CheckCircle, Plane, Wrench, Building2, PhoneCall } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import CTASection from '../components/CTASection';
import { indianCities } from '../data/cityData';
import { personSchemaArvindSrivastava } from '../data/seoData';
import { directAnswerBlocks } from '../data/faqData';

export default function AviationConsultantIndia() {
  const hubSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'ProfessionalService',
        '@id': 'https://lcsllp.online/aviation-consultant-india/#service',
        name: 'Aviation Consultancy India - Air Commodore Arvind Srivastava',
        url: 'https://lcsllp.online/aviation-consultant-india',
        description: 'Pan-India aviation, aircraft MRO, and defence capital acquisition consultancy covering Tier-1 hubs: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, and Ahmedabad.',
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Bengaluru' },
          { '@type': 'City', name: 'Hyderabad' },
          { '@type': 'City', name: 'Chennai' },
          { '@type': 'City', name: 'Kolkata' },
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Ahmedabad' }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lcsllp.online/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Aviation Consultant India',
            item: 'https://lcsllp.online/aviation-consultant-india'
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#F6F5F1] min-h-screen text-[#0B1726]">
      <SEOHead
        title="Best Aviation Consultant in India | Air Cmde Arvind Srivastava"
        description="Air Commodore Arvind Srivastava: Leading aviation consultant in India across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune & Ahmedabad."
        keywords="aviation consultant india, best aviation consultant, defence capital acquisition consultant india, aircraft mro consultant india"
        canonical="https://lcsllp.online/aviation-consultant-india"
      />
      <JsonLd schema={hubSchema} id="hub-india-jsonld" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-stone-400">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-[#C9A96E]">Home</Link></li>
              <li>/</li>
              <li className="text-[#C9A96E] font-medium" aria-current="page">Aviation Consultant India</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-medium mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>National Aviation Advisory Network</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl">
            Best Aviation Consultant Across India’s Premier Aerospace Hubs
          </h1>

          <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-3xl font-light leading-relaxed">
            Led by <strong>Air Commodore Arvind Srivastava</strong>, Indian Air Force veteran with 30+ years of aeronautical engineering service and former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence. Delivering verified, fact-grounded advisory for commercial airlines, MRO providers, defence contractors, and aerospace enterprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A96E] text-black font-medium text-xs uppercase tracking-widest hover:bg-[#DFCA9B] transition-colors rounded-sm shadow-xl"
            >
              <span>Schedule National Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919866865141"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-light text-xs uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C9A96E]" />
              <span>+91-9866865141</span>
            </a>
          </div>
        </div>
      </section>



      {/* Multi-City Network Grid */}
      <section className="py-20 max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
            Geographic Coverage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1726] mt-3">
            Tier-1 City Aviation &amp; Aerospace Corridors
          </h2>
          <p className="text-stone-600 mt-4 text-sm sm:text-base font-light">
            Each city landing page provides tailored analysis of local airports, MRO hangars, defence laboratories, and regional DGCA jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indianCities.map((city) => (
            <Link
              key={city.slug}
              to={`/aviation-consultant-${city.slug}`}
              className="group bg-white p-6 rounded-lg border border-stone-200 hover:border-[#C9A96E] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-md bg-[#FAF8F5] group-hover:bg-[#C9A96E]/15 text-[#C9A96E] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 group-hover:text-[#C9A96E] transition-colors">
                    {city.state}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#0B1726] group-hover:text-[#C9A96E] transition-colors mb-2">
                  {city.name}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-2 font-light mb-4">
                  {city.heroSubtitle}
                </p>

                <div className="space-y-1 text-[11px] text-stone-600 border-t border-stone-100 pt-3">
                  <div className="flex items-center gap-1.5 truncate">
                    <Plane className="w-3 h-3 text-[#C9A96E] shrink-0" />
                    <span className="truncate">{city.localAirports[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <Wrench className="w-3 h-3 text-[#C9A96E] shrink-0" />
                    <span className="truncate">{city.mroHubs[0]}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-[#C9A96E] group-hover:translate-x-1 transition-transform">
                <span>View {city.name} Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Competencies Summary */}
      <section className="py-16 bg-[#161616] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-white">
              Sovereign &amp; Commercial Advisory Capabilities
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-2 font-light">
              Ground-truth technical expertise derived from 30+ years in the Indian Air Force and Ministry of Defence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-300">
            <div className="bg-white/5 p-6 rounded border border-white/10">
              <Building2 className="w-8 h-8 text-[#C9A96E] mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">MoD Defence Capital Acquisition</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Direct experience evaluating projects under D&amp;D, IDDM, Make (India), and Global categories under DAP 2020 as former DDG Tech (Air).
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded border border-white/10">
              <Wrench className="w-8 h-8 text-[#C9A96E] mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">MRO Infrastructure &amp; Modernization</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Directed modernization of aircraft servicing facilities, engine test benches, and avionics test stands across military Base Repair Depots (BRDs).
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded border border-white/10">
              <Award className="w-8 h-8 text-[#C9A96E] mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">Technical Training &amp; Certifications</h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Led 16 officers and 100+ airmen instructors in training and certifying 1,000+ personnel for I &amp; II-line aircraft maintenance certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
