import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, Plane, Wrench, Shield, CheckCircle, ArrowRight, Building, PhoneCall, ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import CTASection from '../components/CTASection';
import { indianCities } from '../data/cityData';
import { personSchemaArvindSrivastava } from '../data/seoData';
import { generateFaqSchema } from '../data/faqData';

export default function CityLanding({ citySlug: propCitySlug }) {
  const { city: paramCity } = useParams();
  const slug = propCitySlug || paramCity;

  const city = indianCities.find((c) => c.slug === slug);

  if (!city) {
    return <Navigate to="/aviation-consultant-india" replace />;
  }

  // Schema generation
  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': `https://lcsllp.online/aviation-consultant-${city.slug}/#service`,
        name: `Aviation Consultant in ${city.name} - Air Commodore Arvind Srivastava`,
        url: `https://lcsllp.online/aviation-consultant-${city.slug}`,
        description: city.metaDesc,
        priceRange: '$$$$',
        telephone: '+91-9866865141',
        email: '9866865141as@gmail.com',
        areaServed: {
          '@type': 'City',
          name: city.name
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'FLAT NO 701 Block K Homes 121, Noida Sector 121',
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201307',
          addressCountry: 'IN'
        },
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        }
      },
      generateFaqSchema(city.faqs),
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
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: city.name,
            item: `https://lcsllp.online/aviation-consultant-${city.slug}`
          }
        ]
      }
    ]
  };

  const otherCities = indianCities.filter((c) => c.slug !== city.slug);

  return (
    <div className="bg-[#F6F5F1] min-h-screen text-[#0B1726]">
      <SEOHead
        title={city.metaTitle}
        description={city.metaDesc}
        keywords={`aviation consultant ${city.name.toLowerCase()}, best aviation consultant ${city.name.toLowerCase()}, aircraft mro ${city.name.toLowerCase()}, defence consultant ${city.name.toLowerCase()}`}
        canonical={`https://lcsllp.online/aviation-consultant-${city.slug}`}
      />
      <JsonLd schema={pageSchema} id={`city-${city.slug}-jsonld`} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-stone-400">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-[#C9A96E]">Home</Link></li>
              <li>/</li>
              <li><Link to="/aviation-consultant-india" className="hover:text-[#C9A96E]">Aviation Consultant India</Link></li>
              <li>/</li>
              <li className="text-[#C9A96E] font-medium" aria-current="page">{city.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-medium mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Regional Aviation Advisory • {city.state}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl">
            {city.h1}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#C9A96E] font-light max-w-3xl">
            {city.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A96E] text-black font-medium text-xs uppercase tracking-widest hover:bg-[#DFCA9B] transition-colors rounded-sm shadow-xl"
            >
              <span>Consult Air Commodore Srivastava</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919866865141"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-light text-xs uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#C9A96E]" />
              <span>Direct: +91-9866865141</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local Aviation Ecosystem Infobox */}
      <section className="bg-white border-b border-stone-200 py-10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A96E] font-semibold mb-3">
                <Plane className="w-4 h-4" />
                <span>Local Airports &amp; Bases</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5 font-light">
                {city.localAirports.map((airport, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C9A96E]">•</span>
                    <span>{airport}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A96E] font-semibold mb-3">
                <Wrench className="w-4 h-4" />
                <span>Major MRO &amp; Depot Hubs</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5 font-light">
                {city.mroHubs.map((mro, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C9A96E]">•</span>
                    <span>{mro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] border border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A96E] font-semibold mb-3">
                <Building className="w-4 h-4" />
                <span>Regulators &amp; Defence Commands</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5 font-light">
                {city.regulatorsDefence.map((reg, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C9A96E]">•</span>
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (600+ words genuine local context) */}
      <section className="py-16 max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Editorial Column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
                Aviation Landscape in {city.name}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mt-2 mb-6">
                Strategic Overview &amp; Local Aviation Dynamics
              </h2>
              <div className="prose max-w-none text-stone-700 font-light leading-relaxed text-sm sm:text-base space-y-4">
                {city.overview.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mb-6">
                Technical Advisory Context in {city.name}
              </h2>
              <div className="prose max-w-none text-stone-700 font-light leading-relaxed text-sm sm:text-base space-y-4">
                {city.localContext.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* City-Specific Services */}
            <div className="border-t border-stone-200 pt-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mb-6">
                Specialized Services for {city.name} Aerospace Clients
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {city.servicesOffered.map((service, idx) => (
                  <div key={idx} className="bg-white p-5 rounded border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1726] mb-2">
                      <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0" />
                      <span>{service.title}</span>
                    </div>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local FAQs Section (AEO optimized) */}
            <div className="border-t border-stone-200 pt-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mt-2 mb-6">
                Aviation Consultancy in {city.name}: Common Queries
              </h2>
              <div className="space-y-4">
                {city.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm">
                    <h3 className="font-serif text-base sm:text-lg text-[#0B1726] font-normal mb-2 flex items-start gap-2">
                      <span className="text-[#C9A96E] font-serif text-lg leading-none">Q.</span>
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Consultant Profile & Other Cities */}
          <div className="space-y-8">
            {/* Consultant Bio Card */}
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A96E]">
                Lead Consultant
              </span>
              <h3 className="font-serif text-xl text-[#0B1726] mt-1 mb-2">
                Air Commodore Arvind Srivastava
              </h3>
              <p className="text-xs text-stone-500 font-light mb-4">
                IAF Veteran (30+ Years) • Aeronautical Engineer • Former DDG Technical (Air), Defence Capital Acquisition (MoD)
              </p>
              <div className="space-y-2 text-xs text-stone-600 font-light border-t border-stone-100 pt-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>30+ Years Military Aeronautical Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Former DDG Tech (Air) in MoD Capital Acquisition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Modernized Aircraft Servicing Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Trained &amp; Certified 1,000+ Personnel</span>
                </div>
              </div>
              <Link
                to="/about"
                className="w-full text-center block py-2.5 bg-stone-100 hover:bg-stone-200 text-[#0B1726] text-xs uppercase tracking-wider font-medium rounded transition-colors"
              >
                View Complete Military Bio
              </Link>
            </div>

            {/* Other Cities Links */}
            <div className="bg-[#FAF8F5] p-6 rounded-lg border border-stone-200">
              <h3 className="font-serif text-base text-[#0B1726] mb-4">
                Other Indian Aviation Hubs
              </h3>
              <ul className="space-y-2.5 text-xs font-light">
                {otherCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/aviation-consultant-${c.slug}`}
                      className="text-stone-700 hover:text-[#C9A96E] flex items-center justify-between py-1 border-b border-stone-200/60 transition-colors"
                    >
                      <span>Aviation Consultant in {c.name}</span>
                      <ArrowRight className="w-3 h-3 text-[#C9A96E]" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-stone-200">
                <Link
                  to="/aviation-consultant-india"
                  className="text-xs uppercase tracking-widest text-[#C9A96E] font-medium flex items-center gap-1 hover:underline"
                >
                  <span>All India Aviation Network Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Contact Direct Card */}
            <div className="bg-[#111111] text-white p-6 rounded-lg border border-[#C9A96E]/30">
              <h3 className="font-serif text-lg text-white mb-2">
                Initiate a Confidential Discussion
              </h3>
              <p className="text-xs text-stone-400 font-light mb-4">
                Engage Air Commodore Arvind Srivastava directly for technical appreciation, MRO facility setup, or DGCA compliance in {city.name}.
              </p>
              <a
                href="tel:+919866865141"
                className="w-full text-center block py-3 bg-[#C9A96E] text-black text-xs uppercase tracking-widest font-medium rounded hover:bg-[#DFCA9B] transition-colors"
              >
                Call +91-9866865141
              </a>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
