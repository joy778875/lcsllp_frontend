import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';
import { servicesList as fallbackServices } from '../data/contentData';
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Cpu, Wrench, Key, Kanban, Truck, Layers } from 'lucide-react';
import api from '../utils/api';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch dynamic service from backend
    api.get(`/services/${slug}`)
      .then((data) => {
        if (isMounted && data.service) {
          setService(data.service);
        }
      })
      .catch(() => {
        // Fallback to local services list
        api.get('/services')
          .then((res) => {
            if (isMounted && res.services) {
              const found = res.services.find((s) => s.slug === slug || s.id === slug || s._id === slug);
              if (found) setService(found);
              else {
                const fb = fallbackServices.find((s) => s.id === slug || s.slug === slug);
                if (fb) setService(fb);
              }
            }
          })
          .catch(() => {
            const fb = fallbackServices.find((s) => s.id === slug || s.slug === slug);
            if (isMounted && fb) setService(fb);
          });
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-stone-400">Loading Capabilities...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col justify-between">
        <PageHero
          eyebrow="CAPABILITY DIRECTORY"
          title="Service Capability"
          description="Strategic defence consultancy domain tailored to DAP 2020 frameworks."
          breadcrumbs={[
            { label: 'Services', path: '/services' },
            { label: 'Capability Details', path: '#' },
          ]}
        />
        <div className="py-24 text-center max-w-lg mx-auto px-6 space-y-4">
          <Layers className="w-12 h-12 text-[#C9A96E] mx-auto opacity-70" />
          <h2 className="text-2xl font-serif text-[#1A1A1A]">Consultancy Domain Active</h2>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Please browse our comprehensive 6-domain directory for full capability frameworks and advisory processes.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium bg-[#0B0B0C] text-[#C9A96E] px-6 py-3 rounded-lg shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Services</span>
          </Link>
        </div>
        <CTASection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <PageHero
        eyebrow="SERVICES / STRATEGIC ADVISORY"
        title={service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: `/services/${service.slug || service.id}` },
        ]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        {/* Back link */}
        <div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C9A96E]" />
            <span>Back to All Capabilities</span>
          </Link>
        </div>

        {/* Featured Statement Box with 8D Moving Cubes */}
        {service.featuredStatement && (
          <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
            <Moving8DCubesBackground cubeCount={3} opacity={0.3} />
            <div className="space-y-2 relative z-10 max-w-3xl">
              <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
                Strategic Value Proposition
              </span>
              <p className="text-xl sm:text-3xl font-serif italic text-white leading-snug">
                "{service.featuredStatement}"
              </p>
            </div>
            <div className="relative z-10 px-5 py-2.5 bg-white/5 rounded border border-white/10 text-xs font-body font-semibold uppercase tracking-[0.2em] text-[#C9A96E] shrink-0">
              DAP 2020 Aligned
            </div>
          </div>
        )}

        {/* In-Depth Capability Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Full Description & Framework */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium block">
                Domain Specification
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#1A1A1A]">
                Comprehensive Advisory Roadmap
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light space-y-4">
              <p className="text-base font-serif italic text-[#1A1A1A] p-5 bg-[#FAFAF8] border-l-2 border-[#C9A96E] rounded-r">
                {service.shortDesc}
              </p>
              <div className="whitespace-pre-line leading-relaxed">
                {service.fullDesc || service.shortDesc}
              </div>
            </div>

            {/* Tags */}
            {service.tags && service.tags.length > 0 && (
              <div className="pt-4 border-t border-stone-200">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block mb-2 font-medium">
                  Associated Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs uppercase tracking-wider text-stone-700 bg-stone-100 border border-stone-200 px-3 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: High-Res Service Image & Direct CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 group">
              <img
                src={service.image || '/images/service-avionics.jpg'}
                alt={service.title}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = '/images/service-avionics.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
                  IAF Veteran Advisory
                </span>
                <h3 className="font-serif text-xl text-white">{service.title}</h3>
                <p className="text-xs text-stone-300 font-light">Verified Aerospace Standard</p>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-[#0B0B0C] text-white p-8 rounded-2xl border border-white/10 space-y-4 shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium block">
                Direct Engagement
              </span>
              <h3 className="text-xl font-serif text-white">
                Initiate Consultation for {service.title}
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Connect directly with our veteran advisory directors to structure your technology proposal, indigenisation milestone, or commercial partnership.
              </p>
              <Link
                to="/contact"
                className="w-full text-center inline-block text-xs uppercase tracking-[0.2em] font-medium text-black bg-[#C9A96E] hover:bg-[#D5B880] py-3.5 rounded shadow-lg transition-all"
              >
                Discuss an Opportunity &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
