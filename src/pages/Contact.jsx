import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { companyRegistrationDetails } from '../data/navigationData';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ExternalLink, Building, CheckCircle } from 'lucide-react';
import api from '../utils/api';
import { personSchemaArvindSrivastava, seoPages } from '../data/seoData';

export default function Contact() {
  const [siteContent, setSiteContent] = useState(null);
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    let isMounted = true;
    api.get('/site-content')
      .then((data) => {
        if (isMounted && data.content) {
          setSiteContent(data.content);
        }
      })
      .catch(() => {});

    api.get('/maps')
      .then((data) => {
        if (isMounted && data.locations && data.locations.length > 0) {
          setMaps(data.locations);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const phone1 = siteContent?.header?.contactNumber || siteContent?.footer?.phone || companyRegistrationDetails.phone1;
  const phone2 = siteContent?.header?.contactPhone2 || siteContent?.footer?.phone2 || companyRegistrationDetails.phone2;
  const whatsapp = siteContent?.header?.whatsapp || siteContent?.footer?.whatsapp || companyRegistrationDetails.whatsapp;
  const email1 = siteContent?.footer?.email || siteContent?.header?.contactEmail || companyRegistrationDetails.email2;
  const email2 = siteContent?.header?.contactEmail2 || siteContent?.footer?.email2 || companyRegistrationDetails.email1;
  const address = siteContent?.footer?.address || `${companyRegistrationDetails.address.block}, ${companyRegistrationDetails.address.area}, ${companyRegistrationDetails.address.cityState} - ${companyRegistrationDetails.address.pin}`;

  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': 'https://lcsllp.online/contact/#localbusiness',
        name: 'Labradorite Consultancy & Services LLP',
        url: 'https://lcsllp.online/contact',
        telephone: phone1,
        email: email1,
        priceRange: '$$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${companyRegistrationDetails.address.block}, ${companyRegistrationDetails.address.area}`,
          addressLocality: 'Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: companyRegistrationDetails.address.pin,
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '28.5888',
          longitude: '77.3828'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.contact.title}
        description={seoPages.contact.description}
        keywords={seoPages.contact.keywords}
        canonical={seoPages.contact.canonical}
      />
      <JsonLd schema={contactSchema} id="contact-page-jsonld" />

      <PageHero
        eyebrow="GET IN TOUCH"
        title="Let's Build Better Defence Business."
        description="We provide Defence Acquisition and Technology consultancy services to Defence Acquisition entities and companies in or outside India to build business."
        breadcrumbs={[{ label: 'Contact', path: '/contact' }]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Col: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0B0B0C] text-white p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6 shadow-2xl">
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-white border-b border-white/10 pb-4 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C9A96E]" />
                Direct Communication
              </h2>

              <div className="space-y-4 text-xs font-light">
                {/* Mobile Numbers */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[#C9A96E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Direct Mobile Lines:</span>
                    <a href={`tel:${phone1}`} className="text-white font-normal hover:text-[#C9A96E] transition-colors block mt-0.5">
                      {phone1}
                    </a>
                    {phone2 && (
                      <a href={`tel:${phone2}`} className="text-white font-normal hover:text-[#C9A96E] transition-colors block">
                        {phone2}
                      </a>
                    )}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[#25D366]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">WhatsApp Business:</span>
                    <a
                      href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#25D366] font-normal hover:underline transition-colors block mt-0.5"
                    >
                      {whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-stone-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Official Email Addresses:</span>
                    <a href={`mailto:${email1}`} className="text-white font-normal hover:text-[#C9A96E] transition-colors block mt-0.5">
                      {email1}
                    </a>
                    {email2 && (
                      <a href={`mailto:${email2}`} className="text-white font-normal hover:text-[#C9A96E] transition-colors block">
                        {email2}
                      </a>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[#C9A96E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px] uppercase tracking-wider">Registered Corporate Address (Consistent NAP):</span>
                    <address className="not-italic text-stone-200 mt-1 leading-relaxed">
                      {address}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Business Profile & Verification Guidance Card (Task 6) */}
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 shadow-sm space-y-3 text-xs font-light">
              <h3 className="font-serif text-sm font-normal text-[#1A1A1A] uppercase tracking-wider border-b border-stone-200 pb-2 flex items-center justify-between">
                <span>Google Business Profile Guidance</span>
                <Building className="w-4 h-4 text-[#C9A96E]" />
              </h3>
              <p className="text-stone-600 leading-relaxed">
                For optimal local search rankings across Delhi NCR and India, maintain exact Name, Address, and Phone (NAP) uniformity:
              </p>
              <div className="bg-white p-3 rounded border border-stone-200 space-y-1 text-stone-700">
                <div><strong>Business Name:</strong> Labradorite Consultancy &amp; Services LLP</div>
                <div><strong>Primary Category:</strong> Aviation Consultant / Aerospace Consultant</div>
                <div><strong>Address:</strong> Flat 701, Block K, Homes 121, Sector 121, Noida, UP 201307</div>
                <div><strong>Direct Phone:</strong> +91-9866865141</div>
              </div>
            </div>

            {/* Office Locations / Maps */}
            {maps.length > 0 && (
              <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="font-serif text-sm font-normal text-[#1A1A1A] uppercase tracking-wider border-b border-stone-200 pb-2 flex items-center justify-between">
                  <span>Operating Locations</span>
                  <MapPin className="w-4 h-4 text-[#C9A96E]" />
                </h3>
                {maps.map((loc, idx) => (
                  <div key={loc._id || idx} className="space-y-2">
                    <div className="text-xs font-semibold text-stone-800">{loc.label}</div>
                    <div className="text-[11px] text-stone-500 font-light leading-relaxed">{loc.address}</div>
                    {loc.embedUrl && (
                      <div className="w-full h-40 rounded overflow-hidden border border-stone-200 mt-2">
                        <iframe
                          title={loc.label}
                          src={loc.embedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Registration Metadata Card */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm text-xs space-y-3 font-light">
              <h3 className="font-serif text-sm font-normal text-[#1A1A1A] uppercase tracking-wider border-b border-stone-200 pb-2">
                LLP Registration Information
              </h3>
              <div className="space-y-1.5 text-stone-600">
                <div className="flex justify-between">
                  <span className="text-stone-400">Entity Name:</span>
                  <span className="font-medium text-[#1A1A1A]">LABRADORITE CONSULTANCY AND SERVICES LLP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Date of Registration:</span>
                  <span className="font-medium text-[#1A1A1A]">{companyRegistrationDetails.registrationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">LLPIN:</span>
                  <span className="font-medium text-[#1A1A1A]">{companyRegistrationDetails.llpin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">PAN / TAN:</span>
                  <span className="font-medium text-[#1A1A1A]">{companyRegistrationDetails.pan} / {companyRegistrationDetails.tan}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
