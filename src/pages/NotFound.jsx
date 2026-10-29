import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1726] text-white flex flex-col items-center justify-center py-20 px-4 text-center">
      <SEOHead
        title="404 Page Not Found | Labradorite Aviation Consultancy"
        description="The requested page could not be located on the Labradorite Consultancy portal."
      />
      <div className="p-4 bg-[#14263A] rounded-full border border-[#1E3854] mb-4 text-[#C58A45]">
        <ShieldAlert className="w-10 h-10" />
      </div>
      <span className="text-xs font-mono font-bold text-[#C58A45] tracking-widest uppercase">
        404 Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mt-2 mb-4">
        Requested Resource Unavailable
      </h1>
      <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mb-8">
        The defence consultancy page or resource you are looking for could not be located.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#C58A45] hover:bg-[#B37B3B] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Homepage
      </Link>
    </div>
  );
}
