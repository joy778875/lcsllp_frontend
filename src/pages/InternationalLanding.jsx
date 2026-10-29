import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Globe, Shield, CheckCircle, ArrowRight, Building, PhoneCall } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import CTASection from '../components/CTASection';
import { internationalHubs } from '../data/cityData';
import { personSchemaArvindSrivastava } from '../data/seoData';
import { generateFaqSchema } from '../data/faqData';

export default function InternationalLanding({ regionSlug: propRegionSlug }) {
  const { region: paramRegion } = useParams();
  const slug = propRegionSlug || paramRegion;

  const hub = internationalHubs.find((h) => h.slug === slug);

  if (!hub) {
    return <Navigate to="/aviation-consultant-india" replace />;
  }

  const hreflangs = [
    { lang: 'en-IN', href: 'https://lcsllp.online/aviation-consultant-india' },
    { lang: 'en-AE', href: 'https://lcsllp.online/aviation-consultant-uae' },
    { lang: 'en-SG', href: 'https://lcsllp.online/aviation-consultant-singapore' },
    { lang: 'en-GB', href: 'https://lcsllp.online/aviation-consultant-united-kingdom' },
    { lang: 'en-US', href: 'https://lcsllp.online/aviation-consultant-usa' },
    { lang: 'x-default', href: 'https://lcsllp.online/' }
  ];

  const intlSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'ProfessionalService',
        '@id': `https://lcsllp.online/aviation-consultant-${hub.slug}/#service`,
        name: `Aviation Consultancy for ${hub.name} - Air Commodore Arvind Srivastava`,
        url: `https://lcsllp.online/aviation-consultant-${hub.slug}`,
        description: hub.metaDesc,
        priceRange: '$$$$',
        provider: {
          '@id': 'https://lcsllp.online/#organization'
        },
        areaServed: {
          '@type': 'Country',
          name: hub.name
        }
      },
      generateFaqSchema(hub.faqs),
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
            name: 'Global Aviation Advisory',
            item: 'https://lcsllp.online/aviation-consultant-india'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: hub.name,
            item: `https://lcsllp.online/aviation-consultant-${hub.slug}`
          }
        ]
      }
    ]
  };

  const otherHubs = internationalHubs.filter((h) => h.slug !== hub.slug);

  return (
    <div className="bg-[#F6F5F1] min-h-screen text-[#0B1726]">
      <SEOHead
        title={hub.metaTitle}
        description={hub.metaDesc}
        keywords={`aviation consultant ${hub.name.toLowerCase()}, aerospace consultant ${hub.name.toLowerCase()}, defence capital acquisition india ${hub.name.toLowerCase()}`}
        canonical={`https://lcsllp.online/aviation-consultant-${hub.slug}`}
        hreflangs={hreflangs}
      />
      <JsonLd schema={intlSchema} id={`intl-${hub.slug}-jsonld`} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#111111] via-[#1A1A1A] to-[#222222] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-stone-400">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="hover:text-[#C9A96E]">Home</Link></li>
              <li>/</li>
              <li><Link to="/aviation-consultant-india" className="hover:text-[#C9A96E]">Global Advisory</Link></li>
              <li>/</li>
              <li className="text-[#C9A96E] font-medium" aria-current="page">{hub.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-medium mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>International Aviation &amp; Defence Advisory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-4xl">
            {hub.h1}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#C9A96E] font-light max-w-3xl">
            {hub.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A96E] text-black font-medium text-xs uppercase tracking-widest hover:bg-[#DFCA9B] transition-colors rounded-sm shadow-xl"
            >
              <span>Schedule International Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:9866865141as@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-light text-xs uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm"
            >
              <span>Email Office Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
                Cross-Border Aerospace Engagement
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mt-2 mb-6">
                Bilateral Strategic Landscape &amp; Market Access
              </h2>
              <div className="prose max-w-none text-stone-700 font-light leading-relaxed text-sm sm:text-base space-y-4">
                {hub.overview.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mb-6">
                Specialized Services for {hub.name} Primes &amp; Investors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {hub.servicesOffered.map((service, idx) => (
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

            <div className="border-t border-stone-200 pt-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E]">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1726] mt-2 mb-6">
                Common Queries for {hub.name} Clients
              </h2>
              <div className="space-y-4">
                {hub.faqs.map((faq, idx) => (
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

          {/* Right Sidebar */}
          <div className="space-y-8">
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
                  <span>DAP 2020 Defence Acquisition Advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Offsets &amp; ToT Absorption Evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C9A96E]" />
                  <span>Indian Vendor Verification &amp; Auditing</span>
                </div>
              </div>
              <Link
                to="/about"
                className="w-full text-center block py-2.5 bg-stone-100 hover:bg-stone-200 text-[#0B1726] text-xs uppercase tracking-wider font-medium rounded transition-colors"
              >
                View Full Credentials
              </Link>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-lg border border-stone-200">
              <h3 className="font-serif text-base text-[#0B1726] mb-4">
                Other International Corridors
              </h3>
              <ul className="space-y-2.5 text-xs font-light">
                {otherHubs.map((h) => (
                  <li key={h.slug}>
                    <Link
                      to={`/aviation-consultant-${h.slug}`}
                      className="text-stone-700 hover:text-[#C9A96E] flex items-center justify-between py-1 border-b border-stone-200/60 transition-colors"
                    >
                      <span>Aviation Advisory for {h.name}</span>
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
                  <span>Explore India Domestic Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
