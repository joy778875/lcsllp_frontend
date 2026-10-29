import React, { useState, useEffect } from 'react';
import { Cookie, Shield, ChevronDown, ChevronUp, Check, X, SlidersHorizontal } from 'lucide-react';

const STORAGE_KEY = 'labradorite_cookie_consent_v1';

export default function CookieConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('necessary');
  const [preferences, setPreferences] = useState({
    necessary: true, // Always locked
    preferences: true,
    statistics: true,
    marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setPreferences((prev) => ({ ...prev, ...parsed }));
      } catch (e) {
        // Fallback
      }
    }

    const handleOpenBanner = () => {
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-banner', handleOpenBanner);
    return () => window.removeEventListener('open-cookie-banner', handleOpenBanner);
  }, []);

  const handleSave = (finalPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs));
    setPreferences(finalPrefs);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    handleSave({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true
    });
  };

  const handleAllowSelection = () => {
    handleSave(preferences);
  };

  const handleDeny = () => {
    handleSave({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false
    });
  };

  const toggleCategory = (key) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Floating Badge to Re-Open Preferences anytime (Desktop only to prevent mobile clutter) */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="hidden sm:flex fixed bottom-4 left-4 z-40 bg-[#0B0B0C]/90 hover:bg-[#1A1A1A] text-stone-300 hover:text-[#C9A96E] p-2.5 rounded-full border border-white/15 shadow-xl backdrop-blur-md transition-all hover:scale-105 group items-center justify-center"
          title="Cookie & Privacy Settings"
          aria-label="Open Cookie Settings"
        >
          <Cookie className="w-4 h-4 text-[#C9A96E]" />
          <span className="sr-only">Cookie Settings</span>
        </button>
      )}

      {/* Main Cookie Consent Modal / Drawer */}
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-6 flex justify-center pointer-events-none">
          <div className="w-full max-w-4xl bg-[#0B0B0C] border border-white/20 text-stone-200 rounded-2xl shadow-2xl pointer-events-auto backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Top Bar with Accent Strip */}
            <div className="h-1 bg-gradient-to-r from-[#C9A96E] via-amber-400 to-[#C9A96E]" />

            <div className="p-5 sm:p-7 space-y-5">
              {/* Header & Main Text */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-[#C9A96E]" />
                    <h2 className="text-lg sm:text-xl font-serif text-white font-normal">
                      This website uses cookies
                    </h2>
                  </div>
                  <button
                    onClick={handleDeny}
                    className="text-stone-400 hover:text-white transition-colors p-1"
                    title="Close and use necessary cookies only"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-300 leading-relaxed font-light">
                  We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
                </p>
              </div>

              {/* Consent Selection Checkboxes (Amphenol / Cookiebot format) */}
              <div className="pt-1 border-t border-white/10">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#C9A96E] font-medium mb-3">
                  Consent Selection
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {/* 1. Necessary */}
                  <label className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 cursor-not-allowed select-none">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-4 h-4 rounded text-[#C9A96E] bg-stone-900 border-white/20 accent-[#C9A96E] cursor-not-allowed"
                    />
                    <div className="text-xs">
                      <span className="font-medium text-white block">Necessary</span>
                      <span className="text-[10px] text-[#C9A96E] font-light">Always active</span>
                    </div>
                  </label>

                  {/* 2. Preferences */}
                  <label
                    onClick={() => toggleCategory('preferences')}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition-colors ${
                      preferences.preferences
                        ? 'bg-white/10 border-[#C9A96E]/50'
                        : 'bg-white/5 border-white/10 text-stone-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#C9A96E] bg-stone-900 border-white/20 accent-[#C9A96E] cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="font-medium text-white block">Preferences</span>
                      <span className="text-[10px] text-stone-400 font-light">Customization</span>
                    </div>
                  </label>

                  {/* 3. Statistics */}
                  <label
                    onClick={() => toggleCategory('statistics')}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition-colors ${
                      preferences.statistics
                        ? 'bg-white/10 border-[#C9A96E]/50'
                        : 'bg-white/5 border-white/10 text-stone-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.statistics}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#C9A96E] bg-stone-900 border-white/20 accent-[#C9A96E] cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="font-medium text-white block">Statistics</span>
                      <span className="text-[10px] text-stone-400 font-light">Analytics</span>
                    </div>
                  </label>

                  {/* 4. Marketing */}
                  <label
                    onClick={() => toggleCategory('marketing')}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer select-none transition-colors ${
                      preferences.marketing
                        ? 'bg-white/10 border-[#C9A96E]/50'
                        : 'bg-white/5 border-white/10 text-stone-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => {}}
                      className="w-4 h-4 rounded text-[#C9A96E] bg-stone-900 border-white/20 accent-[#C9A96E] cursor-pointer"
                    />
                    <div className="text-xs">
                      <span className="font-medium text-white block">Marketing</span>
                      <span className="text-[10px] text-stone-400 font-light">Targeted Ads</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Show details link / accordion */}
              <div className="border-t border-white/10 pt-3">
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C9A96E] hover:text-[#DFCA9B] underline underline-offset-4 transition-colors font-medium"
                >
                  {showDetails ? (
                    <>
                      <span>Hide details</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>Show details</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {showDetails && (
                  <div className="mt-3 p-4 bg-white/5 border border-white/10 rounded-xl space-y-3 text-xs text-stone-300 font-light max-h-56 overflow-y-auto">
                    <div className="space-y-1">
                      <span className="font-medium text-white block text-[11px] uppercase tracking-wider">
                        • Necessary (Always Active)
                      </span>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <span className="font-medium text-white block text-[11px] uppercase tracking-wider">
                        • Preferences
                      </span>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <span className="font-medium text-white block text-[11px] uppercase tracking-wider">
                        • Statistics
                      </span>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/5">
                      <span className="font-medium text-white block text-[11px] uppercase tracking-wider">
                        • Marketing
                      </span>
                      <p className="text-stone-400 text-[11px] leading-relaxed">
                        Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={handleDeny}
                  className="px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-all text-center"
                >
                  Deny / Necessary Only
                </button>

                <button
                  type="button"
                  onClick={handleAllowSelection}
                  className="px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-medium text-white border border-[#C9A96E]/70 hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 rounded transition-all text-center"
                >
                  Allow Selection
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-black bg-[#C9A96E] hover:bg-[#D5B880] rounded shadow-lg transition-all text-center font-sans"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
