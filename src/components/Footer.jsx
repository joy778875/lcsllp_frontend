import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { companyRegistrationDetails } from '../data/navigationData';
import Logo from './Logo';
import api from '../utils/api';
import AerospaceTacticalBackground from './AerospaceTacticalBackground';

export default function Footer() {
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    api.get('/site-content')
      .then((data) => {
        if (data.content && data.content.footer) {
          setFooterContent(data.content.footer);
        }
      })
      .catch(() => {});
  }, []);

  const phone = footerContent?.phone || companyRegistrationDetails.phone1;
  const email = footerContent?.email || companyRegistrationDetails.email2;
  const addressStr = footerContent?.address || `${companyRegistrationDetails.address.block}, ${companyRegistrationDetails.address.area}, ${companyRegistrationDetails.address.cityState} - ${companyRegistrationDetails.address.pin}`;
  const copyright = footerContent?.copyrightText || '© 2026 Labradorite Consultancy & Services LLP. All rights reserved.';
  const summary = footerContent?.aboutSummary || 'A specialized Defence Acquisition & Technology consultancy team founded around the professional experience of Indian Air Force veterans. Sharing knowledge, experience, and building trust to drive better defence business.';

  return (
    <footer className="bg-[#0B0B0C] text-stone-400 border-t border-white/10 pt-16 pb-10 relative overflow-hidden">
      {/* Background Airplane Image (IAF Jet Flightline) */}
      <img
        src={footerContent?.backgroundImage || '/images/iaf-fighter-jets-tarmac.jpg'}
        alt="IAF Defence Excellence"
        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-15 brightness-50 pointer-events-none"
      />

      {/* Aerodynamic Supersonic Streamlines Background */}
      <AerospaceTacticalBackground
        opacity={0.3}
        accentColor="#C9A96E"
        secondaryColor="#38BDF8"
        showRadar={false}
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/85 to-[#0B0B0C] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Strategic Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <Logo mode="dark" />
            </Link>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md font-light">
              {summary}
            </p>
            
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.22em] mb-1">
                Our Belief
              </div>
              <p className="text-xs text-stone-200 font-serif italic">
                "Our Belief is sharing professional knowledge, experience and building trust builds better business."
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#C9A96E] mb-4 border-l-2 border-[#C9A96E] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Insights &amp; Perspectives
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/visiting-card" className="text-[#C9A96E] hover:text-[#DFCA9B] transition-colors flex items-center gap-1 font-normal">
                  Digital Visiting Card <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#C9A96E] mb-4 border-l-2 border-stone-600 pl-2.5">
              Key Capabilities
            </h3>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <Link to="/services/technology-consultancy" className="hover:text-white transition-colors">
                  Technology Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/mro-sustenance" className="hover:text-white transition-colors">
                  MRO &amp; Sustenance / TOT
                </Link>
              </li>
              <li>
                <Link to="/services/leasing-consultancy" className="hover:text-white transition-colors">
                  Leasing Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="hover:text-white transition-colors">
                  Project Management &amp; PMG
                </Link>
              </li>
              <li>
                <Link to="/services/supply-chain-support" className="hover:text-white transition-colors">
                  Supply Chain Support
                </Link>
              </li>
              <li>
                <Link to="/services/miscellaneous-services" className="hover:text-white transition-colors">
                  Miscellaneous Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Registration & Contact */}
          <div className="space-y-4">
            <h3 className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-[#C9A96E] mb-4 border-l-2 border-[#C9A96E] pl-2.5">
              Registration &amp; Contact
            </h3>
            
            <div className="text-xs space-y-1.5 text-stone-300 bg-white/5 p-3 rounded border border-white/10 font-light">
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-stone-400">Reg. Date:</span>
                <span className="text-white font-normal">{companyRegistrationDetails.registrationDate}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-stone-400">LLPIN:</span>
                <span className="text-white font-normal">{companyRegistrationDetails.llpin}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-stone-400">PAN:</span>
                <span className="text-white font-normal">{companyRegistrationDetails.pan}</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-white/5">
                <span className="text-stone-400">TAN:</span>
                <span className="text-white font-normal">{companyRegistrationDetails.tan}</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-stone-400">GSTIN:</span>
                <span className="text-white font-normal">{companyRegistrationDetails.gst}</span>
              </div>
            </div>

            <div className="text-xs space-y-2 pt-1 font-light">
              <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#C9A96E]" />
                {phone}
              </a>
              <a href={`https://wa.me/${companyRegistrationDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors text-[#25D366]">
                <Phone className="w-3.5 h-3.5" />
                WhatsApp: {companyRegistrationDetails.whatsapp}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                {email}
              </a>
            </div>
          </div>

        </div>

        {/* Registered Address Row */}
        <div className="py-6 border-b border-white/10 text-xs text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-light">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-normal">Registered Address: </span>
              {addressStr}
            </div>
          </div>
          <div className="text-[11px] text-stone-500">
            LLP Name: LABRADORITE CONSULTANCY AND SERVICES LLP
          </div>
        </div>

        {/* Bottom Legal, Attribution & Copyright Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div>{copyright}</div>
            <span className="hidden sm:inline opacity-30">•</span>
            <div className="text-[11px] text-stone-400">
              Website by <a href="https://zonovatechnology.online" target="_blank" rel="noopener" className="hover:text-stone-300 transition-colors underline underline-offset-2">Pratyush Mishra</a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/aviation-consultant-india" className="hover:text-[#C9A96E] transition-colors">
              India Network
            </Link>
            <span className="opacity-30">•</span>
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-30">•</span>
            <Link to="/terms" className="hover:text-stone-300 transition-colors">
              Terms &amp; Disclaimer
            </Link>
            <span className="opacity-30">•</span>
            <Link to="/visiting-card" className="hover:text-[#C9A96E] transition-colors">
              Digital Visiting Card
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
