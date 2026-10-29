import React, { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import TeamCard from '../components/TeamCard';
import CTASection from '../components/CTASection';
import { teamMembers as fallbackTeam } from '../data/contentData';
import { UserCheck } from 'lucide-react';
import api from '../utils/api';

import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { seoPages, personSchemaArvindSrivastava } from '../data/seoData';

export default function Team() {
  const [team, setTeam] = useState(fallbackTeam);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    api.get('/team')
      .then((data) => {
        if (isMounted && data.team && data.team.length > 0) {
          setTeam(data.team);
        }
      })
      .catch((err) => {
        console.warn('Using local fallback team list:', err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const teamSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'AboutPage',
        '@id': 'https://lcsllp.online/team/#webpage',
        url: 'https://lcsllp.online/team',
        name: 'Aviation Advisory Leadership | Air Commodore Arvind Srivastava',
        description: seoPages.team.description,
        mainEntity: {
          '@id': 'https://lcsllp.online/#arvind-srivastava'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={seoPages.team.title}
        description={seoPages.team.description}
        keywords={seoPages.team.keywords}
        canonical={seoPages.team.canonical}
      />
      <JsonLd schema={teamSchema} id="team-page-jsonld" />

      <PageHero
        eyebrow="LEADERSHIP & ADVISORY"
        title="Our Team"
        description="A team brought together by professional experience, defence knowledge, integrity and a shared commitment to building better business."
        breadcrumbs={[{ label: 'Our Team', path: '/team' }]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
              <UserCheck className="w-4 h-4" />
              <span>Verified Leadership Listing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
              Indian Air Force Veterans &amp; Professional Consultants
            </h2>
            <p className="text-xs text-stone-500 max-w-2xl font-light leading-relaxed">
              All listed team profiles reflect verified advisory leadership. Official service records and member photographs are maintained in accordance with client disclosure standards.
            </p>
          </div>
          <div className="px-5 py-2.5 bg-[#0B0B0C] text-[#C9A96E] rounded text-xs font-body font-semibold uppercase tracking-[0.2em] shrink-0 border border-white/10">
            {team.length} Core Advisory Partners
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={member._id || member.id || index} member={member} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
