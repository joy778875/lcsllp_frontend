import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { companyRegistrationDetails } from '../data/navigationData';
import AerospaceTacticalBackground from './AerospaceTacticalBackground';
import api from '../utils/api';

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    api.get('/site-content')
      .then((data) => {
        if (isMounted && data.content && data.content.cta) {
          setCtaData(data.content.cta);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  const displayEyebrow = ctaData?.eyebrow || 'Strategic Defence Engagement';
  const displayTitle = title || ctaData?.title || 'Discuss an Opportunity With Our Consultancy Team.';
  const displaySubtitle = subtitle || ctaData?.description || 'We provide Defence Acquisition and Technology consultancy services to Defence Acquisition entities and companies in or outside India to build business.';
  const displayButtonText = buttonText || ctaData?.primaryButtonText || 'Discuss an Opportunity';
  const displayButtonLink = buttonLink || ctaData?.primaryButtonLink || '/contact';
  const displayPhone = ctaData?.secondaryButtonPhone || companyRegistrationDetails.phone1;
  const displayImage = ctaData?.backgroundImage || '/images/iaf-fighter-jets-tarmac.jpg';

  return (
    <section className="relative bg-[#0B0B0C] text-white py-20 sm:py-28 border-t border-white/10 overflow-hidden group">
      {/* 1. Indian Air Force Fighter Jet Airplane Background Image */}
      <img
        src={displayImage}
        alt="Indian Air Force Fighter Jet on Tarmac"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.28] group-hover:scale-105 transition-transform duration-1000"
        onError={(e) => {
          e.target.src = '/images/iaf-fighter-jets-tarmac.jpg';
        }}
      />

      {/* 2. Gradient Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-black/80 to-[#0B0B0C] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/85 pointer-events-none" />

      {/* 3. Aerodynamic Supersonic Streamlines & Tactical Radar */}
      <AerospaceTacticalBackground
        opacity={0.45}
        accentColor="#C9A96E"
        secondaryColor="#38BDF8"
        showRadar={true}
      />

      {/* 4. Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-[10.5px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.28em] bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#C9A96E]/30">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span>{displayEyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white max-w-3xl mx-auto leading-tight">
          {displayTitle}
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
          {displaySubtitle}
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to={displayButtonLink}
            className="inline-block text-center text-xs uppercase tracking-[0.2em] font-medium bg-[#C9A96E] text-black hover:bg-[#DFCA9B] transition-all px-9 py-4 rounded-sm shadow-2xl backdrop-blur-sm"
          >
            {displayButtonText}
          </Link>
          
          <a
            href={`tel:${displayPhone}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-white border border-white/30 hover:bg-white hover:text-black hover:border-white transition-all px-8 py-3.5 rounded-sm backdrop-blur-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>{displayPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
