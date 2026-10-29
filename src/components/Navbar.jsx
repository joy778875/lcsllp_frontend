import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Shield, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { navLinks, companyRegistrationDetails } from '../data/navigationData';
import Logo from './Logo';
import api from '../utils/api';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dynamicContent, setDynamicContent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch Live Site Content
  useEffect(() => {
    api.get('/site-content')
      .then((data) => {
        if (data.content && data.content.header) {
          setDynamicContent(data.content.header);
        }
      })
      .catch(() => {});
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const contactPhone = dynamicContent?.contactNumber || companyRegistrationDetails.phone1;

  // Marquee announcement items (Default fallback)
  const defaultMarquee = [
    "INDIAN AIR FORCE VETERAN-LED",
    "DEFENCE ACQUISITION & TECHNOLOGY CONSULTANCY",
    "DAP 2020 & DPM ADVISORY",
    "MRO & SUSTENANCE",
    "SUPPLY CHAIN RESILIENCE",
    "AATMANIRBHAR BHARAT ALIGNED",
    "NOIDA & NEW DELHI",
    "STRATEGIC LIFECYCLE ADVISORY"
  ];

  const marqueeItems = (dynamicContent?.marqueeItems && dynamicContent.marqueeItems.length > 0)
    ? dynamicContent.marqueeItems
    : defaultMarquee;

  return (
    <>
      {/* 1. TOP LUXURY CONTINUOUS MARQUEE TICKER (like thenove.in) */}
      <div className="bg-black text-white text-[9.5px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.22em] py-2 overflow-hidden select-none border-b border-white/10 flex whitespace-nowrap z-40 relative">
        <div className="animate-marquee flex items-center">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <React.Fragment key={i}>
              <span className="mx-4 sm:mx-6 font-light tracking-[0.22em] text-white/90">{text}</span>
              <span className="opacity-30 text-[#C9A96E]">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. MAIN HEADER (LIQUID GLASS + LUXURY EDITORIAL STYLE) */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/15 shadow-2xl'
            : 'bg-black/80 backdrop-blur-sm border-b border-white/10'
        }`}
      >
        {/* Main Brand Row - Pixel-Perfect Responsive Layout */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 h-[62px] md:h-[72px] flex items-center justify-between gap-3">
          
          {/* Left on Mobile: Hamburger Button & Logo grouped cleanly without overlapping */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-1 text-white hover:text-[#C9A96E] transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="focus:outline-none focus:ring-1 focus:ring-[#C9A96E] rounded p-0.5 shrink-0">
              <Logo mode="dark" />
            </Link>
          </div>

          {/* Desktop Left Call Link */}
          <a
            href={`tel:${contactPhone}`}
            className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone-300 hover:text-white transition-colors font-light shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>{contactPhone}</span>
          </a>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-[11px] sm:text-[12px] uppercase tracking-[0.16em] font-light shrink-0">
            <Link
              to="/visiting-card"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#C9A96E] hover:text-[#DFCA9B] transition-colors"
            >
              <span>Visiting Card</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation Links Strip */}
        <div className="hidden md:flex items-center justify-center space-x-10 py-2.5 text-[12px] uppercase tracking-[0.16em] font-light transition-colors border-t border-white/10 text-white/90">
          {navLinks.map((item) => {
            if (item.hasDropdown) {
              const isItemActive = location.pathname.startsWith(item.path);
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={item.path}
                    className={`py-1 flex items-center gap-1.5 transition-opacity hover:opacity-75 ${
                      isItemActive ? 'text-[#C9A96E] font-normal' : 'text-white/90'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3 text-[#C9A96E] transition-transform duration-200 group-hover:rotate-180" />
                  </NavLink>

                  {/* Mega Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full -left-12 w-80 bg-[#111111]/95 backdrop-blur-xl border border-white/15 rounded-lg shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-3 py-1.5 text-[9.5px] uppercase font-bold tracking-[0.22em] text-[#C9A96E] border-b border-white/10">
                        Consultancy Domains
                      </div>
                      <div className="py-1">
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="p-2.5 rounded hover:bg-white/5 transition-colors group/sub block"
                          >
                            <div className="text-xs font-normal text-white group-hover/sub:text-[#C9A96E] flex items-center justify-between">
                              <span>{sub.name}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/sub:opacity-100 transition-opacity text-[#C9A96E]" />
                            </div>
                            {sub.desc && (
                              <div className="text-[10.5px] text-stone-400 mt-0.5 line-clamp-1 font-light">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `py-1 transition-opacity hover:opacity-75 ${
                    isActive ? 'text-[#C9A96E] font-normal' : 'text-white/90'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </header>

      {/* 3. MOBILE FULL-SCREEN SLIDING OVERLAY (LUXURY DEFENCE EDITORIAL) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B0B0C] flex flex-col justify-between p-6 animate-in fade-in duration-200 overflow-y-auto">
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <Logo mode="dark" showSubtextOnMobile={true} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 border border-white/15 text-stone-300 hover:text-white hover:border-[#C9A96E] transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Clean Collapsible Accordion for Services */}
          <div className="my-auto py-6 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="border-b border-white/10 pb-2">
                      <div
                        className="flex items-center justify-between py-3 cursor-pointer select-none group"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-2xl font-normal tracking-wide text-white group-hover:text-[#C9A96E] transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider text-[#C9A96E] bg-[#C9A96E]/15 px-2 py-0.5 rounded border border-[#C9A96E]/30 font-medium">
                            6 Domains
                          </span>
                        </div>
                        <button
                          type="button"
                          className="p-1.5 text-stone-400 group-hover:text-[#C9A96E] transition-colors"
                          aria-label="Toggle Services List"
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              mobileServicesOpen ? 'rotate-180 text-[#C9A96E]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Smooth Minimalist Sub-links List */}
                      {mobileServicesOpen && (
                        <div className="ml-2 pl-4 border-l border-[#C9A96E]/40 my-2 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdownItems.map((sub, sIdx) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between text-xs tracking-wider text-stone-300 hover:text-[#C9A96E] py-1.5 transition-colors group/sub"
                            >
                              <span className="font-light">{sub.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A96E] opacity-60 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all" />
                            </Link>
                          ))}

                          <div className="pt-2">
                            <Link
                              to="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A96E] hover:underline"
                            >
                              <span>Explore All Capabilities</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-2xl font-normal tracking-wide block py-3 border-b border-white/10 transition-colors ${
                        isActive ? 'text-[#C9A96E]' : 'text-white hover:text-stone-300'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block text-xs uppercase tracking-[0.2em] font-medium bg-[#C9A96E] text-black py-3.5 rounded-sm shadow-xl"
            >
              Discuss an Opportunity
            </Link>

            <Link
              to="/visiting-card"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block text-xs uppercase tracking-[0.2em] font-medium border border-white/20 text-white py-3 rounded-sm hover:bg-white/5"
            >
              Digital Visiting Card
            </Link>

            <div className="text-center pt-2">
              <a
                href={`tel:${contactPhone}`}
                className="inline-flex items-center gap-2 text-xs text-stone-300 hover:text-white tracking-wider"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>Direct Line: {contactPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
