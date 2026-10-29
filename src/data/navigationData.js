export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Technology Consultancy', path: '/services/technology-consultancy', desc: 'EOI/RFI/RFP response & tech strategy' },
      { name: 'MRO & Sustenance', path: '/services/mro-sustenance', desc: 'Indigenous ecosystem & TOT setup' },
      { name: 'Leasing Consultancy', path: '/services/leasing-consultancy', desc: 'High-tech asset leasing solutions' },
      { name: 'Project Management', path: '/services/project-management', desc: 'Liaison with PMG & milestone tracking' },
      { name: 'Supply Chain Support', path: '/services/supply-chain-support', desc: 'Defense vendor localization & supply resilience' },
      { name: 'Miscellaneous Services', path: '/services/miscellaneous-services', desc: 'HR setup, new segments & model innovation' },
    ]
  },
  { name: 'Our Team', path: '/team' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
];

export const companyRegistrationDetails = {
  name: 'LABRADORITE CONSULTANCY AND SERVICES LLP',
  registrationDate: '19 Jan 2024',
  llpin: 'ACF-0228',
  pan: 'AALFL3126B',
  tan: 'MRTL02978D',
  gst: '09AALFL3126B1ZL',
  phone1: '+91-9866865141',
  phone2: '+91-9667710141',
  whatsapp: '+91 9667710141',
  email1: 'director@lcsllp.online',
  email2: 'director@lcsllp.online',
  address: {
    block: 'FLAT NO 701 Block K Homes 121',
    area: 'Noida Sector 121 PLOT NO GH 01',
    cityState: 'Noida, Gautam Buddha Nagar, Uttar Pradesh',
    pin: '201307' // Marked in TODO verification list as requested
  }
};
