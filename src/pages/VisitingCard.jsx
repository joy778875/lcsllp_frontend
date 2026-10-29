import React, { useState } from 'react';
import { companyRegistrationDetails } from '../data/navigationData';
import { Phone, MessageSquare, Mail, Download, Shield, User, Copy, Check, ArrowUpRight } from 'lucide-react';
import Logo from '../components/Logo';
import SEOHead from '../components/SEOHead';
import { seoPages } from '../data/seoData';

export default function VisitingCard() {
  const [copied, setCopied] = useState(false);

  const handleSaveContact = () => {
    // Generate vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Air Commodore Arvind Srivastava - Aviation Consultant
ORG:Labradorite Consultancy & Services LLP
TITLE:Aviation Consultant & Aeronautical Engineer
TEL;TYPE=CELL:${companyRegistrationDetails.phone1}
TEL;TYPE=WORK:${companyRegistrationDetails.phone2}
EMAIL:${companyRegistrationDetails.email1}
URL:https://lcsllp.online
ADR;TYPE=WORK:;;${companyRegistrationDetails.address.block}, ${companyRegistrationDetails.address.area};Noida;UP;${companyRegistrationDetails.address.pin};India
NOTE:Former DDG Technical (Air), Defence Capital Acquisition (MoD). 30+ yrs IAF Veteran.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Air_Commodore_Arvind_Srivastava.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Air Commodore Arvind Srivastava (Retd.)\nAviation Consultant | Labradorite Consultancy & Services LLP\nPhone: ${companyRegistrationDetails.phone1}\nEmail: ${companyRegistrationDetails.email1}\nWebsite: https://lcsllp.online`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white py-12 px-4 sm:px-6 relative overflow-hidden flex flex-col justify-center items-center">
      <SEOHead
        title={seoPages.visitingCard.title}
        description={seoPages.visitingCard.description}
        keywords={seoPages.visitingCard.keywords}
        canonical={seoPages.visitingCard.canonical}
      />
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#C9A96E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full relative z-10 space-y-6">
        
        {/* Top Tagline */}
        <div className="text-center space-y-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#C9A96E]">
            Digital Visiting Card
          </span>
          <h1 className="text-xs text-stone-400 font-light">
            Labradorite Consultancy &amp; Services LLP
          </h1>
        </div>

        {/* Digital Card Shell */}
        <div className="bg-[#141416] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

          {/* Logo Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <Logo mode="dark" />
            <div className="p-2 bg-white/5 border border-white/10 rounded-full text-[#C9A96E]">
              <Shield className="w-5 h-5" />
            </div>
          </div>

          {/* Contact Representative Details */}
          <div className="space-y-1">
            <div className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#C9A96E]" />
              Executive Leadership
            </div>
            <h2 className="text-2xl font-serif font-normal text-white">
              Arvind
            </h2>
            <p className="text-xs text-[#C9A96E] uppercase tracking-wider font-light">
              Founder &amp; Director
            </p>
            <p className="text-[11px] text-stone-300 pt-1 font-light">
              Defence Acquisition &amp; Technology Consultancy
            </p>
          </div>

          {/* Contact Details List */}
          <div className="space-y-2.5 text-xs pt-1 font-light">
            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-stone-400">Mobile Direct:</span>
              <a href={`tel:${companyRegistrationDetails.phone1}`} className="text-white hover:text-[#C9A96E] font-normal">
                {companyRegistrationDetails.phone1}
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-stone-400">WhatsApp:</span>
              <a href={`https://wa.me/${companyRegistrationDetails.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="text-[#25D366] font-normal">
                {companyRegistrationDetails.whatsapp}
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-stone-400">Email:</span>
              <a href={`mailto:${companyRegistrationDetails.email2}`} className="text-white hover:text-[#C9A96E] text-[11px] font-normal">
                {companyRegistrationDetails.email2}
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-lg border border-white/5 flex items-center justify-between">
              <span className="text-stone-400">Official Web:</span>
              <span className="text-white text-[11px] font-normal">
                labradorite.co.in
              </span>
            </div>
          </div>

          {/* Registration Details */}
          <div className="text-[10px] text-stone-400 pt-2 border-t border-white/10 flex items-center justify-between font-light">
            <span>LLPIN: {companyRegistrationDetails.llpin}</span>
            <span>PAN: {companyRegistrationDetails.pan}</span>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${companyRegistrationDetails.phone1}`}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#DFCA9B] text-black font-medium text-xs uppercase tracking-wider py-3 rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${companyRegistrationDetails.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs uppercase tracking-wider py-3 rounded-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href={`mailto:${companyRegistrationDetails.email2}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider py-3 rounded-sm transition-colors border border-white/10"
            >
              <Mail className="w-4 h-4 text-[#C9A96E]" />
              Email
            </a>

            <button
              onClick={handleSaveContact}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-wider py-3 rounded-sm transition-colors border border-white/10"
            >
              <Download className="w-4 h-4 text-[#C9A96E]" />
              Save Contact
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-stone-400 hover:text-white py-1 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Card details copied to clipboard!' : 'Copy Card Details'}
          </button>

        </div>

      </div>
    </div>
  );
}
