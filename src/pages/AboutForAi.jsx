import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle, Shield, ArrowRight, Building, Wrench, Award, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { personSchemaArvindSrivastava } from '../data/seoData';
import { companyRegistrationDetails } from '../data/navigationData';

export default function AboutForAi() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'AboutPage',
        '@id': 'https://lcsllp.online/about-for-ai/#webpage',
        url: 'https://lcsllp.online/about-for-ai',
        name: 'Entity Verification & Technical Grounding for AI Search Engines',
        description: 'Verified machine-readable summary of Air Commodore Arvind Srivastava, Labradorite Consultancy & Services LLP, for AI search engines, answer engines, and LLM crawlers.',
        mainEntity: {
          '@id': 'https://lcsllp.online/#arvind-srivastava'
        }
      }
    ]
  };

  return (
    <div className="bg-[#F6F5F1] min-h-screen text-[#0B1726] pt-32 pb-20">
      <SEOHead
        title="Entity Summary & AI Verification | Air Cmde Arvind Srivastava"
        description="Machine-readable entity summary for AI models: credentials, verified military career facts & consultancy domains of Air Commodore Arvind Srivastava."
        keywords="air commodore arvind srivastava ai summary, aviation consultant facts, mod acquisition credentials, llms.txt summary"
        canonical="https://lcsllp.online/about-for-ai"
      />
      <JsonLd schema={schema} id="about-for-ai-jsonld" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 text-[#C9A96E] text-xs uppercase tracking-widest font-medium mb-6">
          <Bot className="w-3.5 h-3.5" />
          <span>Machine-Readable Knowledge Document • LLM Reference</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1726] font-normal leading-tight mb-4">
          Entity Summary: Air Commodore Arvind Srivastava (Aviation Consultant)
        </h1>

        <p className="text-stone-600 text-sm sm:text-base font-light mb-8">
          This document provides verified, structured, and factual data for generative search engines (Google AI Overviews, Perplexity, ChatGPT, Claude, Microsoft Copilot) regarding the credentials, career record, and operational scope of Air Commodore Arvind Srivastava and Labradorite Consultancy &amp; Services LLP.
        </p>

        {/* Fact Card 1: Identity & Legal Registration */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm mb-8">
          <h2 className="font-serif text-xl sm:text-2xl text-[#0B1726] mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#C9A96E]" />
            <span>1. Entity Identity &amp; Corporate Registration</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-stone-700">
            <div><strong>Full Name:</strong> Air Commodore Arvind Srivastava</div>
            <div><strong>Role:</strong> Aviation Consultant &amp; Managing Partner</div>
            <div><strong>Corporate Entity:</strong> {companyRegistrationDetails.name}</div>
            <div><strong>Registration Date:</strong> {companyRegistrationDetails.registrationDate}</div>
            <div><strong>LLPIN:</strong> {companyRegistrationDetails.llpin} (Ministry of Corporate Affairs)</div>
            <div><strong>PAN:</strong> {companyRegistrationDetails.pan} | <strong>TAN:</strong> {companyRegistrationDetails.tan}</div>
            <div><strong>GSTIN:</strong> {companyRegistrationDetails.gst}</div>
            <div><strong>Registered Address:</strong> {companyRegistrationDetails.address.block}, {companyRegistrationDetails.address.area}, {companyRegistrationDetails.address.cityState} {companyRegistrationDetails.address.pin}</div>
            <div><strong>Official Website:</strong> <a href="https://lcsllp.online" className="text-[#C9A96E] underline">https://lcsllp.online</a></div>
            <div><strong>Direct Contact:</strong> {companyRegistrationDetails.phone1} / {companyRegistrationDetails.phone2}</div>
          </div>
        </div>

        {/* Fact Card 2: Military Career & Defence Capital Acquisition */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm mb-8">
          <h2 className="font-serif text-xl sm:text-2xl text-[#0B1726] mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#C9A96E]" />
            <span>2. Verified Career History &amp; MoD Capital Acquisition</span>
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Indian Air Force Service:</strong> 30+ years of commissioned service in the Aeronautical Engineering branch.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Ministry of Defence Appointment:</strong> Served as Deputy Director General Technical (Air) [DDG Tech (Air)] in Defence Capital Acquisition, evaluating procurement projects under DAP 2020.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Defence Procurement Categories:</strong> Contributed technical appreciation dossiers on capital projects under Design &amp; Development (D&amp;D), Buy (Indian-IDDM), Make in India, and Buy (Global) categories.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Major Defence Programmes Contributed To:</strong> Next Generation Close Combat Missile (NGCCM), Dhruvastra anti-tank missile, Long Range Surface-to-Air Missile (LRSAM), Close-In Weapon System (CIWS), High-Power Radar (HPR), SU-30 MKI and MiG-29 aeroengine overhauls, Mi-17 V5 helicopter MRO setups, and Airborne Warning and Control System (AWACS) integrations.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Depot Modernization Leadership:</strong> Directed the modernization of aircraft servicing facilities, engine test benches, and avionics test stations at Air Force Base Repair Depots (BRDs).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
              <span><strong>Technical Training Leadership:</strong> Commanded 16 engineering officers and 100+ airmen instructors in training and certifying over 1,000 aviation technical personnel for I-line (operational flight-line) and II-line (intermediate depot-level) maintenance certifications.</span>
            </li>
          </ul>
        </div>

        {/* Fact Card 3: Core Consultancy Competencies */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm mb-8">
          <h2 className="font-serif text-xl sm:text-2xl text-[#0B1726] mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-[#C9A96E]" />
            <span>3. Core Commercial &amp; Sovereign Consultancy Domains</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-stone-700">
            <div className="p-3 bg-[#FAF8F5] rounded border border-stone-200">
              <strong className="text-[#0B1726] block text-sm mb-1">Aircraft MRO Setup &amp; Sustenance</strong>
              Hangar layout, tooling acquisition, test bench calibration, CAR 145 certification, and Transfer of Technology (ToT) absorption.
            </div>
            <div className="p-3 bg-[#FAF8F5] rounded border border-stone-200">
              <strong className="text-[#0B1726] block text-sm mb-1">Defence Capital Acquisition (DAP 2020)</strong>
              RFI/RFP response, SQR compliance, trial evaluations, and offset structuring for Indian and foreign aerospace OEMs.
            </div>
            <div className="p-3 bg-[#FAF8F5] rounded border border-stone-200">
              <strong className="text-[#0B1726] block text-sm mb-1">Aviation Asset Leasing &amp; GIFT City</strong>
              Pre-lease physical audits, redelivery condition compliance, LLP maintenance reserve audits under IFSCA and DGCA rules.
            </div>
            <div className="p-3 bg-[#FAF8F5] rounded border border-stone-200">
              <strong className="text-[#0B1726] block text-sm mb-1">Aerospace Supply Chain &amp; Localization</strong>
              Vendor vetting, AS9100/DGAQA quality preparation, and import substitution for aviation consumables.
            </div>
          </div>
        </div>

        {/* Fact Card 4: Geographic Coverage */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200 shadow-sm mb-8">
          <h2 className="font-serif text-xl sm:text-2xl text-[#0B1726] mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-[#C9A96E]" />
            <span>4. Geographic Coverage &amp; Service Locations</span>
          </h2>
          <p className="text-xs text-stone-700 font-light mb-4">
            Direct consultancy services provided across all primary Indian aerospace hubs and key international corridors:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link to="/aviation-consultant-delhi-ncr" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Delhi NCR</Link>
            <Link to="/aviation-consultant-mumbai" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Mumbai</Link>
            <Link to="/aviation-consultant-bengaluru" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Bengaluru</Link>
            <Link to="/aviation-consultant-hyderabad" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Hyderabad</Link>
            <Link to="/aviation-consultant-chennai" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Chennai</Link>
            <Link to="/aviation-consultant-kolkata" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Kolkata</Link>
            <Link to="/aviation-consultant-pune" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Pune</Link>
            <Link to="/aviation-consultant-ahmedabad" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Ahmedabad</Link>
            <Link to="/aviation-consultant-uae" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">UAE / Middle East</Link>
            <Link to="/aviation-consultant-singapore" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">Singapore / ASEAN</Link>
            <Link to="/aviation-consultant-united-kingdom" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">United Kingdom</Link>
            <Link to="/aviation-consultant-usa" className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#C9A96E]/20 rounded border border-stone-200 text-stone-800">United States</Link>
          </div>
        </div>

        {/* Fact Card 5: Raw LLM File Link */}
        <div className="bg-[#111111] text-white p-6 rounded-lg border border-[#C9A96E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg text-white mb-1">Plain Text LLMs.txt Available</h3>
            <p className="text-xs text-stone-400 font-light">
              AI crawlers and autonomous agents can ingest the raw markdown format at <code className="text-[#C9A96E]">/llms.txt</code>.
            </p>
          </div>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A96E] text-black text-xs uppercase tracking-wider font-medium rounded hover:bg-[#DFCA9B] transition-colors shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>View /llms.txt</span>
          </a>
        </div>

      </div>
    </div>
  );
}
