import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { aboutContent as fallbackAbout, clientBelief as fallbackBelief } from '../data/contentData';
import { ShieldCheck, Award, Calendar, CheckCircle, ExternalLink, Wrench, Building, Users } from 'lucide-react';
import Moving8DCubesBackground from '../components/Moving8DCubesBackground';
import api from '../utils/api';
import { personSchemaArvindSrivastava } from '../data/seoData';

export default function About() {
  const [content, setContent] = useState(fallbackAbout);
  const [belief, setBelief] = useState(fallbackBelief);
  const [aboutImage, setAboutImage] = useState('/images/service-pmg.jpg');

  useEffect(() => {
    let isMounted = true;
    api.get('/site-content')
      .then((data) => {
        if (isMounted && data.content && data.content.about) {
          const ab = data.content.about;
          setContent({
            heroTag: ab.heroTag || fallbackAbout.heroTag,
            headline: ab.headline || fallbackAbout.headline,
            story: [
              ab.story1 || fallbackAbout.story[0],
              ab.story2 || fallbackAbout.story[1],
            ],
            objectiveSections: ab.objectiveSections && ab.objectiveSections.length > 0
              ? ab.objectiveSections
              : fallbackAbout.objectiveSections,
            closingStatement: ab.closingStatement || fallbackAbout.closingStatement,
          });

          if (ab.clientBeliefQuote) {
            setBelief((prev) => ({
              ...prev,
              quote: ab.clientBeliefQuote,
            }));
          }

          if (ab.image) {
            setAboutImage(ab.image);
          }
        }
      })
      .catch((err) => {
        console.warn('Using local fallback about content:', err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'AboutPage',
        '@id': 'https://lcsllp.online/about/#aboutpage',
        url: 'https://lcsllp.online/about',
        name: 'About Air Commodore Arvind Srivastava | Aviation Consultant',
        description: 'Verified biographical and technical career profile of Air Commodore Arvind Srivastava (IAF Retd), Aeronautical Engineer and former DDG Technical (Air).',
        mainEntity: {
          '@id': 'https://lcsllp.online/#arvind-srivastava'
        }
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
            name: 'About',
            item: 'https://lcsllp.online/about'
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title="Air Commodore Arvind Srivastava | Aviation Consultant Bio"
        description="Bio of Air Cmde Arvind Srivastava (IAF Retd): 30+ yrs service, Aeronautical Engineer & former DDG Technical (Air) in Defence Capital Acquisition, MoD."
        keywords="air commodore arvind srivastava, aviation consultant bio, aeronautical engineer iaf, ddg technical air mod"
        canonical="https://lcsllp.online/about"
      />
      <JsonLd schema={aboutSchema} id="about-page-jsonld" />

      <PageHero
        eyebrow={content.heroTag || "ABOUT LABRADORITE"}
        title={content.headline || "Built on experience. Driven by integrity."}
        description="A specialized Acquisition & Technology Consultancy team formed around the operational experience of Indian Air Force Veterans and dedicated to Aatmanirbhar Bharat."
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />

      {/* 1. FOUNDING STORY */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.26em] block">
                Our Founding Ethos
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1A1A]">
                Veteran Acumen &amp; Strategic Vision
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                <p className="p-5 bg-[#F4F3F0] border-l-2 border-[#C9A96E] text-[#1A1A1A] font-serif italic text-base rounded-r">
                  "{content.story[0]}"
                </p>
                <p>
                  "{content.story[1]}"
                </p>
              </div>

              <div className="p-6 bg-[#0B0B0C] text-white rounded-xl border border-white/10">
                <div className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
                  Our Core Philosophy
                </div>
                <div className="font-serif italic text-base text-white mt-1.5">
                  "{belief.quote}"
                </div>
              </div>
            </div>

            {/* Side Card with Aerospace Imagery */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B0B0C] text-white rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Strategic Defence Leadership"
                    className="w-full h-full object-cover brightness-[0.85]"
                    onError={(e) => {
                      e.target.src = '/images/service-pmg.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs font-body font-semibold text-[#C9A96E]">
                    IAF Veteran Advisory Board
                  </div>
                </div>

                <div className="p-7 space-y-5">
                  <h3 className="font-serif text-lg font-normal text-white border-b border-white/10 pb-3 flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#C9A96E]" />
                    Key Organizational Pillars
                  </h3>

                  <ul className="space-y-3.5 text-xs text-stone-300 font-light">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 shrink-0" />
                      <span><strong className="text-white font-normal">IAF Veteran Leadership:</strong> 30+ years of operational service in Indian Air Force aeronautical engineering frameworks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 shrink-0" />
                      <span><strong className="text-white font-normal">DAP 2020 Expertise:</strong> Former Deputy Director General Technical (Air) in Defence Capital Acquisition, MoD.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 shrink-0" />
                      <span><strong className="text-white font-normal">Ecosystem Bridge:</strong> Connecting startups, MSMEs, Indian companies, and foreign aerospace OEMs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] mt-1.5 shrink-0" />
                      <span><strong className="text-white font-normal">Self-Reliance Commitment:</strong> Direct technical alignment with Aatmanirbhar Bharat and IDDM mandates.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VERIFIED LEADERSHIP BIO & CAREER TIMELINE (E-E-A-T) */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.26em]">
              Verified Leadership Biography
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A]">
              Air Commodore Arvind Srivastava (Aviation Consultant)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              30+ years in the Indian Air Force; Aeronautical Engineer; former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="text-xs font-bold text-[#C9A96E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Phase I</span>
              </div>
              <h3 className="font-serif text-lg text-[#0B1726] mb-2">IAF Aeronautical Engineering</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Commissioned Aeronautical Engineering Officer in the Indian Air Force. Commanded frontline aircraft maintenance operations and servicing squadrons for fighter and transport platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="text-xs font-bold text-[#C9A96E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                <span>Phase II</span>
              </div>
              <h3 className="font-serif text-lg text-[#0B1726] mb-2">Base Repair Depot Modernization</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Directed modernization of aircraft servicing facilities, engine test benches, and avionics test stations at Air Force Base Repair Depots (BRDs).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="text-xs font-bold text-[#C9A96E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Phase III</span>
              </div>
              <h3 className="font-serif text-lg text-[#0B1726] mb-2">Technical Training Leadership</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Led 16 engineering officers and 100+ senior airmen instructors in training and certifying over 1,000 aviation technical personnel for I &amp; II-line maintenance certification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm relative">
              <div className="text-xs font-bold text-[#C9A96E] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>Phase IV</span>
              </div>
              <h3 className="font-serif text-lg text-[#0B1726] mb-2">MoD Defence Capital Acquisition</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Served as DDG Technical (Air) in Defence Capital Acquisition, Ministry of Defence; contributed technical appreciation on projects under D&amp;D, IDDM, Make, and Global categories.
              </p>
            </div>
          </div>

          {/* Programmes Accurately Described as Acquisition Process Contributions */}
          <div className="bg-[#111111] text-white p-8 sm:p-10 rounded-2xl border border-[#C9A96E]/30 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.26em]">
                Defence Capital Acquisition Track Record
              </span>
              <h3 className="text-2xl font-serif font-normal text-white">
                Major Programmes Contributed to in Acquisition Processes
              </h3>
              <p className="text-xs text-stone-400 font-light">
                Technical appreciation, feasibility evaluation, and procurement oversight provided across key national aerospace and defence initiatives:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-light">
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">NGCCM</strong>
                <span className="text-stone-300">Next Generation Close Combat Missile technical appreciation.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">Dhruvastra</strong>
                <span className="text-stone-300">Helina anti-tank guided missile trial evaluation parameters.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">LRSAM</strong>
                <span className="text-stone-300">Long Range Surface-to-Air Missile acquisition processes.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">SU-30 &amp; MiG-29 Engines</strong>
                <span className="text-stone-300">Aeroengine overhaul setup and lifecycle sustenance advisory.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">CIWS</strong>
                <span className="text-stone-300">Close-In Weapon System air defence evaluation.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">High-Power Radar</strong>
                <span className="text-stone-300">Ground-based surveillance radar procurement appreciation.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">Mi-17 V5 Helicopter MRO</strong>
                <span className="text-stone-300">Depot-level servicing infrastructure and spares pipeline.</span>
              </div>
              <div className="p-3.5 bg-white/5 rounded border border-white/10">
                <strong className="text-white block font-medium mb-1">AWACS</strong>
                <span className="text-stone-300">Airborne Early Warning platform maintenance integrations.</span>
              </div>
            </div>

            {/* Author Profile and Metadata */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-400 gap-4">
              <div>
                <span>Last Updated: </span>
                <span className="text-white font-medium">October 29, 2026</span>
                <span className="mx-2">•</span>
                <span>Verified Entity: </span>
                <span className="text-[#C9A96E]">Air Commodore Arvind Srivastava (IAF Retd.)</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/arvind-srivastava-iaf-aviation-consultant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-[#C9A96E] flex items-center gap-1 transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  to="/about-for-ai"
                  className="text-stone-300 hover:text-[#C9A96E] flex items-center gap-1 transition-colors"
                >
                  <span>AI Entity Factsheet</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COMPANY BUSINESS OBJECTIVE */}
      <section className="py-16 sm:py-24 bg-[#FAFAF8] border-b border-stone-200">
        <div className="max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.26em]">
              Strategic Context &amp; Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A]">
              Our Business Objective
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
              Macroeconomic and policy framework governing the Indian Aerospace &amp; Defence sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.objectiveSections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm hover:border-[#C9A96E] hover:shadow-lg transition-all space-y-4"
              >
                <div className="font-serif text-2xl font-light text-[#C9A96E]">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1A1A1A]">
                  {sec.heading}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Final Business Statement */}
          <div className="relative bg-[#0B0B0C] text-white p-8 sm:p-12 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto space-y-4 shadow-2xl overflow-hidden">
            <Moving8DCubesBackground
              cubeCount={4}
              accentColor="#C9A96E"
              secondaryColor="#60A5FA"
              opacity={0.35}
            />
            <div className="relative z-10 space-y-3">
              <span className="text-[10px] sm:text-[11px] font-light text-[#C9A96E] uppercase tracking-[0.26em] block">
                Summary Statement
              </span>
              <p className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                "{content.closingStatement}"
              </p>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
