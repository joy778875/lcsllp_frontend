import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * FighterJetFlyTransition
 * Triggers a supersonic Indian Fighter Jet fly-by across the screen on every page load / option exploration.
 * Features:
 * - Supersonic delta-wing fighter jet with glowing orange afterburner plume
 * - Mach condensation shockwave ring & expanding contrail
 * - Tactical military HUD route readout
 * - Non-blocking pointer-events-none layer
 */
export default function FighterJetFlyTransition() {
  const location = useLocation();
  const [isFlying, setIsFlying] = useState(false);
  const [targetLabel, setTargetLabel] = useState('');

  // Map route pathname to tactical aerospace sortie label
  const getRouteLabel = (path) => {
    if (path === '/') return 'HEADQUARTERS · LABRADORITE DEFENCE';
    if (path === '/about') return 'FOUNDING ETHOS · VETERAN LEADERSHIP';
    if (path === '/team') return 'STRATEGIC ADVISORY · IAF DIRECTORS';
    if (path === '/services') return 'DEFENCE DIRECTORY · ACQUISITION DOMAINS';
    if (path === '/services/technology-consultancy') return 'CAPABILITY 01 · TECHNOLOGY & iDEX';
    if (path === '/services/mro-sustenance') return 'CAPABILITY 02 · MRO & TOT SUSTENANCE';
    if (path === '/services/leasing-consultancy') return 'CAPABILITY 03 · HIGH-TECH ASSET LEASING';
    if (path === '/services/project-management') return 'CAPABILITY 04 · PMG GOVERNANCE';
    if (path === '/services/supply-chain-support') return 'CAPABILITY 05 · SUPPLY CHAIN RESILIENCE';
    if (path === '/services/miscellaneous-services') return 'CAPABILITY 06 · ECOSYSTEM SPECIALIZATION';
    if (path === '/contact') return 'TACTICAL CONTACT · SECURE COMMUNICATIONS';
    if (path === '/visiting-card') return 'DIGITAL CREDENTIALS · EXECUTIVE IDENTITY';
    return 'SORTIE INITIATED';
  };

  useEffect(() => {
    const label = getRouteLabel(location.pathname);
    setTargetLabel(label);
    setIsFlying(true);

    const timer = setTimeout(() => {
      setIsFlying(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isFlying) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
      {/* 1. Tactical HUD Altitude / Radar Bar at Top */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-black/85 backdrop-blur-md border border-[#C9A96E]/50 px-4 py-1.5 rounded-full shadow-2xl animate-in fade-in zoom-in duration-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C9A96E]">
          {targetLabel}
        </span>
        <span className="text-[9px] font-mono text-stone-400">MACH 2.4</span>
      </div>

      {/* 2. Supersonic Fighter Jet Flying Across */}
      <div
        className="absolute top-[35%] -left-[160px] flex items-center animate-fighter-fly"
        style={{
          animation: 'fighterFly 1.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Supersonic Contrail / Smoke Vapor Trail */}
        <div className="w-[340px] h-[3px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-amber-500 rounded-full blur-[1px] relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-2 bg-gradient-to-r from-transparent via-orange-500 to-amber-300 blur-[2px]" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-1 bg-white blur-[0.5px]" />
        </div>

        {/* Mach Cone Shockwave Ring */}
        <div className="relative -ml-6 mr-1">
          <div className="w-12 h-12 rounded-full border-2 border-cyan-400/60 scale-x-50 blur-[1px] animate-pulse" />
        </div>

        {/* Indian Air Force Su-30MKI / Tejas Delta Wing SVG Silhouette */}
        <div className="relative w-28 h-16 transform -rotate-3 filter drop-shadow-[0_0_12px_rgba(201,169,110,0.8)]">
          <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Afterburner Glow */}
            <circle cx="28" cy="45" r="9" fill="#FF4500" opacity="0.9" filter="blur(2px)" />
            <circle cx="24" cy="45" r="5" fill="#FFD700" opacity="0.95" />
            <ellipse cx="14" cy="45" rx="14" ry="3.5" fill="#00E5FF" opacity="0.85" />

            {/* Jet Fuselage */}
            <path
              d="M190 45 L150 41 L100 37 L50 39 L30 42 L25 45 L30 48 L50 51 L100 53 L150 49 Z"
              fill="#E2E8F0"
            />
            {/* Nosecone Radome */}
            <path
              d="M190 45 L165 42 L165 48 Z"
              fill="#0F172A"
            />
            {/* Canopy Glass (Tinted Gold) */}
            <path
              d="M155 43 Q138 41 125 43 Q138 47 155 47 Z"
              fill="#C9A96E"
              opacity="0.9"
            />
            {/* Port Delta Wing */}
            <path
              d="M120 40 L65 10 L50 14 L65 38 Z"
              fill="#94A3B8"
            />
            {/* Starboard Delta Wing */}
            <path
              d="M120 50 L65 80 L50 76 L65 52 Z"
              fill="#94A3B8"
            />
            {/* IAF Indian Roundel (Saffron, White, Green) on Wing */}
            <circle cx="75" cy="24" r="5" fill="#FF9933" />
            <circle cx="75" cy="24" r="3.2" fill="#FFFFFF" />
            <circle cx="75" cy="24" r="1.5" fill="#138808" />

            {/* Twin Vertical Stabilizers */}
            <path
              d="M58 40 L35 24 L28 26 L42 41 Z"
              fill="#64748B"
            />
            <path
              d="M58 50 L35 66 L28 64 L42 49 Z"
              fill="#64748B"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fighterFly {
          0% {
            transform: translate3d(0, 0, 0) scale(0.75);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translate3d(calc(100vw + 240px), -60px, 0) scale(1.05);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
