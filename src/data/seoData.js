/**
 * seoData.js
 * Comprehensive SEO, OpenGraph, Canonical & Structured Data Configurations
 * Strictly adhering to:
 * - Titles <60 characters with primary keyword upfront
 * - Descriptions <155 characters
 * - Only verified factual claims
 */

export const siteBaseUrl = 'https://lcsllp.online';

export const personSchemaArvindSrivastava = {
  '@type': 'Person',
  '@id': `${siteBaseUrl}/#arvind-srivastava`,
  name: 'Air Commodore Arvind Srivastava',
  alternateName: ['Air Cmde Arvind Srivastava', 'Arvind Srivastava IAF'],
  jobTitle: 'Aviation Consultant & Aeronautical Engineer',
  worksFor: {
    '@type': 'Organization',
    '@id': `${siteBaseUrl}/#organization`,
    name: 'Labradorite Consultancy & Services LLP',
    url: siteBaseUrl
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Air Force Technical College (AFTC)'
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Indian Institute of Technology (IIT)'
    }
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Military Commission',
      name: 'Commissioned Aeronautical Engineering Officer, Indian Air Force'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Government Appointment',
      name: 'Former Deputy Director General Technical (Air) [DDG Tech (Air)], Defence Capital Acquisition, Ministry of Defence'
    }
  ],
  knowsAbout: [
    'Aviation Consultancy',
    'Aircraft Maintenance Repair and Overhaul (MRO)',
    'Defence Capital Acquisition (DAP 2020)',
    'Aeronautical Engineering',
    'DGCA CAR 145 and CAR M Regulations',
    'Air Force Base Repair Depot (BRD) Modernization',
    'Aeroengine Overhaul (SU-30 MKI, MiG-29)',
    'Helicopter MRO (Mi-17 V5)',
    'Missile & Radar Defence Acquisition (NGCCM, Dhruvastra, LRSAM, CIWS, AWACS)',
    'Make in India & IDDM Aerospace Procurement',
    'I and II-line Aircraft Maintenance Certification'
  ],
  description: 'Indian Air Force veteran with 30+ years service. Aeronautical Engineer and former DDG Technical (Air) in Defence Capital Acquisition, MoD. Specialist in aircraft MRO, defence procurement, and technical certification.',
  sameAs: [
    'https://www.linkedin.com/in/arvind-srivastava-iaf-aviation-consultant',
    'https://www.consultancy.in',
    'https://lcsllp.online/about'
  ]
};

export const seoPages = {
  home: {
    title: 'Best Aviation Consultant India | Air Cmde Arvind Srivastava',
    description: 'Best aviation consultant in India: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs). Aircraft MRO, defence procurement & DGCA compliance advisory.',
    keywords: 'best aviation consultant, aviation consultant india, aircraft mro consultant, defence capital acquisition consultant, air commodore arvind srivastava',
    canonical: `${siteBaseUrl}/`
  },
  about: {
    title: 'Air Commodore Arvind Srivastava | Aviation Consultant Bio',
    description: 'Bio of Air Cmde Arvind Srivastava (IAF Retd): 30+ yrs service, Aeronautical Engineer & former DDG Technical (Air) in Defence Capital Acquisition.',
    keywords: 'air commodore arvind srivastava, aviation consultant bio, iaf aeronautical engineer, ddg technical air mod',
    canonical: `${siteBaseUrl}/about`
  },
  services: {
    title: 'Aviation Consultancy Services | MRO & Defence Acquisition',
    description: 'Aviation consultancy services by Air Cmde Arvind Srivastava: Aircraft MRO setup, MoD capital acquisition, leasing advisory & defence supply chain.',
    keywords: 'aviation consultancy services, aircraft mro consulting, defence acquisition advisory, dgca compliance',
    canonical: `${siteBaseUrl}/services`
  },
  techConsultancy: {
    title: 'Defence Aviation Technology Consultancy | RFI RFP Advisory',
    description: 'Expert technical evaluation for defence aerospace acquisitions under DAP 2020: Make-II, IDDM, Global categories by former DDG Technical (Air).',
    keywords: 'defence aviation technology consultancy, dap 2020 consultant, iddm procurement advisory',
    canonical: `${siteBaseUrl}/services/technology-consultancy`
  },
  mroSustenance: {
    title: 'Aircraft MRO Setup & Sustenance Consulting | Air Cmde Srivastava',
    description: 'Aircraft MRO consultancy: depot modernization, Transfer of Technology (ToT), tooling, and I & II-line maintenance certification frameworks.',
    keywords: 'aircraft mro consultant, mro setup india, depot modernization, tot absorption',
    canonical: `${siteBaseUrl}/services/mro-sustenance`
  },
  leasingConsultancy: {
    title: 'Aviation Asset & Aircraft Leasing Advisory | India',
    description: 'Strategic technical leasing consultancy: pre-lease inspections, redelivery records audit, aircraft valuation & GIFT City leasing structuring.',
    keywords: 'aircraft leasing consultant india, aviation asset advisory, gift city aircraft lease',
    canonical: `${siteBaseUrl}/services/leasing-consultancy`
  },
  projectManagement: {
    title: 'Aerospace Project Management & PMG Advisory | India',
    description: 'Defence aviation project management: liaison with MoD Project Management Groups (PMG), milestone reviews, and flight-line induction audits.',
    keywords: 'aerospace project management, pmg liaison mod, defence milestone tracking',
    canonical: `${siteBaseUrl}/services/project-management`
  },
  supplyChain: {
    title: 'Defence Aviation Supply Chain & Indigenization Advisory',
    description: 'Aerospace vendor localization, Make in India indigenization, MIL-SPEC compliance, and supply chain resilience for tier-1/2 defence OEMs.',
    keywords: 'defence aviation supply chain, aerospace vendor localization, make in india aerospace',
    canonical: `${siteBaseUrl}/services/supply-chain-support`
  },
  miscellaneous: {
    title: 'Aviation Technical Academia & Training Consulting',
    description: 'Aviation training curriculum advisory: CAR 147 / CAR 66 alignment, military-to-civilian conversion, and technical human capital structuring.',
    keywords: 'aviation technical training consultant, car 147 advisory, dgca ame training',
    canonical: `${siteBaseUrl}/services/miscellaneous-services`
  },
  team: {
    title: 'Aviation Advisory Leadership | Air Cmde Arvind Srivastava',
    description: 'Meet leadership team of Labradorite: Air Cmde Arvind Srivastava (IAF Veteran, 30+ yrs) and multidisciplinary aerospace technical advisors.',
    keywords: 'aviation consultancy team, air commodore arvind srivastava leadership, defence consultants',
    canonical: `${siteBaseUrl}/team`
  },
  contact: {
    title: 'Contact Aviation Consultant | Air Cmde Arvind Srivastava',
    description: 'Consult Air Cmde Arvind Srivastava for aircraft MRO, defence capital acquisition, and DGCA regulatory advisory. Headquarters in Noida NCR.',
    keywords: 'contact aviation consultant, hire aviation consultant india, defence consultant noida',
    canonical: `${siteBaseUrl}/contact`
  },
  insights: {
    title: 'Aviation & Defence Insights | Air Cmde Arvind Srivastava',
    description: 'Authoritative analyses on aircraft MRO trends, Indian defence capital acquisition, DGCA compliance, and aerospace career development.',
    keywords: 'aviation insights india, aircraft mro trends, defence acquisition articles, dgca compliance basics',
    canonical: `${siteBaseUrl}/insights`
  },
  aboutForAi: {
    title: 'Entity Summary & AI Verification | Air Cmde Arvind Srivastava',
    description: 'Verified machine-readable entity summary for AI search engines: credentials, career record, and consultancy domains of Air Cmde Arvind Srivastava.',
    keywords: 'air commodore arvind srivastava ai entity, aviation consultant facts, mod credentials',
    canonical: `${siteBaseUrl}/about-for-ai`
  },
  visitingCard: {
    title: 'Digital Visiting Card | Air Cmde Arvind Srivastava',
    description: 'Official digital business card of Air Commodore Arvind Srivastava, Aviation Consultant & Managing Partner at Labradorite Consultancy & Services LLP.',
    keywords: 'air commodore arvind srivastava visiting card, aviation consultant contact vcard',
    canonical: `${siteBaseUrl}/visiting-card`
  }
};
