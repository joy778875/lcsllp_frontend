import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { verticalsList } from '../data/contentData';
import { ArrowUpRight, Shield } from 'lucide-react';

export default function Verticals() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="VERTICALS & SECTORS"
        title="Who We Work With"
        description="Strategic consultancy tailored across government entities, indigenous manufacturers, startups, academic R&D, and international technology OEMs."
        breadcrumbs={[{ label: 'Verticals', path: '/verticals' }]}
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticalsList.map((vert, idx) => (
            <div
              key={vert.id}
              className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm hover:border-[#607C83] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold text-[#C58A45]">
                  VERTICAL 0{idx + 1}
                </div>

                <h3 className="text-xl font-bold font-display text-[#0B1726] group-hover:text-[#607C83] transition-colors">
                  {vert.title}
                </h3>

                <p className="text-xs font-semibold text-[#607C83]">
                  {vert.subtitle}
                </p>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {vert.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#D9DEE5] text-xs text-[#0B1726]">
                  {vert.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C58A45]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#D9DEE5] mt-6">
                <Link
                  to={`/verticals/${vert.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1726] group-hover:text-[#C58A45] transition-colors"
                >
                  Explore Vertical Focus
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
