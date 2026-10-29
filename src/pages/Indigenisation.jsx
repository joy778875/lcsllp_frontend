import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { Factory, ShieldCheck } from 'lucide-react';

export default function Indigenisation() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS / DOMESTIC MANUFACTURING"
        title="Indigenisation Entities"
        description="Strategic consultancy around indigenous manufacturing, technology transfer (TOT), defence corridors, and ecosystem development."
        breadcrumbs={[
          { label: 'Verticals', path: '/verticals' },
          { label: 'Indigenisation Entities', path: '/verticals/indigenisation-entities' }
        ]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-[#D9DEE5] pb-4">
            <Factory className="w-8 h-8 text-[#2B8C96]" />
            <div>
              <h2 className="text-2xl font-bold font-display text-[#0B1726]">
                Building Indigenous Manufacturing &amp; MRO Hubs
              </h2>
              <p className="text-xs text-[#64748B]">Aatmanirbhar Bharat Industrial Acceleration</p>
            </div>
          </div>

          <p className="text-sm text-[#64748B] leading-relaxed">
            The establishment of defence industrial corridors forms the springboard for all government development activities in defence. We assist domestic indigenisation entities in navigating Make-I / II / III procurement pathways, establishing local manufacturing infrastructure, and securing Transfer of Technology (TOT) partnerships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">Defence Corridor Integration</h3>
              <p className="text-xs text-[#64748B]">Leveraging policy incentives across Uttar Pradesh and Tamil Nadu Defence Industrial Corridors.</p>
            </div>
            <div className="p-5 bg-[#F6F5F1] rounded-lg border border-[#D9DEE5] space-y-2">
              <h3 className="text-base font-bold text-[#0B1726]">TOT &amp; Joint Ventures</h3>
              <p className="text-xs text-[#64748B]">Structuring technology transfer agreements to build sustained in-country maintenance and overhaul lines.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
