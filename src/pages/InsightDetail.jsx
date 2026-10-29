import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { Calendar, ArrowLeft, Clock, User, Share2, Check, BookOpen, ShieldCheck, Award, MapPin } from 'lucide-react';
import api from '../utils/api';
import { insightArticles } from '../data/insightsData';
import { personSchemaArvindSrivastava } from '../data/seoData';
import { indianCities } from '../data/cityData';

export default function InsightDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // First check local verified insight articles
    const localMatch = insightArticles.find((a) => a.slug === slug);
    if (localMatch) {
      if (isMounted) {
        setBlog(localMatch);
        setLoading(false);
      }
      return;
    }

    // Otherwise try API
    api.get(`/blogs/${slug}`)
      .then((data) => {
        if (isMounted && data.blog) {
          setBlog(data.blog);
        }
      })
      .catch(() => {
        api.get('/blogs')
          .then((res) => {
            if (isMounted && res.blogs) {
              const found = res.blogs.find((b) => b.slug === slug || b._id === slug);
              if (found) setBlog(found);
            }
          })
          .catch(() => {});
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs uppercase tracking-widest text-stone-400">Loading Article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col justify-between">
        <PageHero
          eyebrow="PUBLICATION NOT FOUND"
          title="Article Not Available"
          description="The strategic commentary you are looking for may have been archived or updated."
          breadcrumbs={[
            { label: 'Insights', path: '/insights' },
            { label: 'Not Found', path: '#' },
          ]}
        />
        <div className="py-24 text-center max-w-lg mx-auto px-6 space-y-4">
          <BookOpen className="w-12 h-12 text-[#C9A96E] mx-auto opacity-70" />
          <p className="text-sm text-stone-600 font-light">
            Please return to the publications directory to browse active defence policy perspectives.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium bg-[#0B0B0C] text-[#C9A96E] px-6 py-3 rounded-lg shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Insights</span>
          </Link>
        </div>
        <CTASection />
      </div>
    );
  }

  // Generate Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'TechArticle',
        '@id': `https://lcsllp.online/insights/${blog.slug || slug}/#article`,
        headline: blog.title,
        description: blog.excerpt || blog.summary,
        author: {
          '@id': 'https://lcsllp.online/#arvind-srivastava'
        },
        publisher: {
          '@id': 'https://lcsllp.online/#organization'
        },
        datePublished: blog.publishDate || blog.date || '2026-06-01',
        dateModified: blog.lastUpdated || '2026-10-29',
        mainEntityOfPage: `https://lcsllp.online/insights/${blog.slug || slug}`,
        articleSection: blog.category,
        keywords: `${blog.category}, aviation consultant, air commodore arvind srivastava, aircraft mro, defence acquisition`
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lcsllp.online/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: 'https://lcsllp.online/insights'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: `https://lcsllp.online/insights/${blog.slug || slug}`
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title={blog.metaTitle || `${blog.title.slice(0, 50)} | Aviation Insights`}
        description={blog.metaDesc || blog.excerpt || blog.summary}
        keywords={`aviation consultant, aircraft mro, ${blog.category?.toLowerCase()}, defence acquisition`}
        canonical={`https://lcsllp.online/insights/${blog.slug || slug}`}
        ogType="article"
      />
      <JsonLd schema={articleSchema} id={`article-${blog.slug || slug}-jsonld`} />

      <PageHero
        eyebrow={`STRATEGIC PERSPECTIVE · ${(blog.category || 'DEFENCE').toUpperCase()}`}
        title={blog.title}
        description={blog.subtitle || blog.summary}
        breadcrumbs={[
          { label: 'Insights', path: '/insights' },
          { label: blog.title, path: `/insights/${blog.slug || slug}` },
        ]}
      />

      <article className="py-16 sm:py-20 max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
        {/* Navigation & Metadata Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C9A96E]" />
            <span>Back to Insights Directory</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-xs text-stone-600 hover:border-[#C9A96E] hover:text-black transition-all bg-white"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#C9A96E]" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>

        {/* Featured Banner Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 max-h-[500px]">
          <img
            src={blog.featuredImage || blog.image || '/images/services-hero.jpg'}
            alt={blog.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/images/services-hero.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-light">
              <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" />
                Published: {blog.publishDate || blog.date || '2026'}
              </span>
              {blog.lastUpdated && (
                <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[#C9A96E]">
                  Last Updated: {blog.lastUpdated}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <User className="w-3.5 h-3.5 text-[#C9A96E]" />
                {blog.author || 'Air Commodore Arvind Srivastava'}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                <Clock className="w-3.5 h-3.5 text-[#C9A96E]" />
                {blog.readTime || '7 min read'}
              </span>
            </div>

            <div className="bg-[#C9A96E] text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded">
              {blog.category}
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-14 shadow-sm space-y-8">
          {/* Executive Summary Callout */}
          <div className="p-6 bg-[#0B0B0C] text-white rounded-xl border border-white/10 space-y-2">
            <div className="text-[10px] font-medium text-[#C9A96E] uppercase tracking-[0.25em] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C9A96E]" />
              <span>Executive Briefing Summary</span>
            </div>
            <p className="font-serif italic text-base text-stone-200 leading-relaxed">
              "{blog.excerpt || blog.summary}"
            </p>
          </div>

          {/* Formatted Content */}
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed font-light text-sm sm:text-base space-y-6">
            {blog.content.split('\n\n').map((paragraph, pIdx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h2 key={pIdx} className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A] pt-6 border-t border-stone-200 mt-8">
                    {trimmed.replace('### ', '')}
                  </h2>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h3 key={pIdx} className="text-xl font-serif font-normal text-[#C9A96E] pt-4">
                    {trimmed.replace('#### ', '')}
                  </h3>
                );
              }
              return (
                <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio Box (E-E-A-T requirement) */}
          <div className="mt-12 pt-8 border-t border-stone-200 bg-[#FAF8F5] p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-start gap-6">
            <div className="p-4 bg-[#0B0B0C] rounded-full text-[#C9A96E] shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-stone-700">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A96E]">
                About the Author
              </span>
              <h3 className="font-serif text-xl text-[#0B1726]">
                Air Commodore Arvind Srivastava (Aeronautical Engineer &amp; Aviation Consultant)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Indian Air Force veteran with 30+ years of service. Former Deputy Director General Technical (Air) in Defence Capital Acquisition at the Ministry of Defence (MoD). Directed the modernization of aircraft servicing facilities and trained over 1,000 aviation technical personnel. Lead Consultant at Labradorite Consultancy &amp; Services LLP.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium">
                <Link to="/about" className="text-[#C9A96E] hover:underline flex items-center gap-1">
                  Read Full Career Bio &rarr;
                </Link>
                <Link to="/contact" className="text-stone-700 hover:text-black flex items-center gap-1">
                  Schedule Direct Advisory &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Topic Cluster: Internal Linking (Task 6 requirement) */}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96E] mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Explore Relevant Services &amp; Regional Hubs</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <Link to="/services/mro-sustenance" className="p-3 bg-stone-50 hover:bg-[#C9A96E]/10 rounded border border-stone-200 transition-colors">
                <strong className="block text-[#0B1726] mb-1">Aircraft MRO &amp; Sustenance</strong>
                <span>Depot modernization &amp; ToT setups</span>
              </Link>
              <Link to="/services/technology-consultancy" className="p-3 bg-stone-50 hover:bg-[#C9A96E]/10 rounded border border-stone-200 transition-colors">
                <strong className="block text-[#0B1726] mb-1">Defence Capital Acquisition</strong>
                <span>DAP 2020 SQR &amp; RFP advisory</span>
              </Link>
              <Link to="/aviation-consultant-india" className="p-3 bg-stone-50 hover:bg-[#C9A96E]/10 rounded border border-stone-200 transition-colors">
                <strong className="block text-[#0B1726] mb-1">India Aviation Hub Network</strong>
                <span>Delhi, Mumbai, Bengaluru &amp; more</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Strategic Engagement Box */}
        <div className="bg-[#0B0B0C] text-white rounded-2xl p-8 sm:p-12 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium">
              Consultation Advisory
            </span>
            <h3 className="text-2xl font-serif font-normal text-white">
              Applying these insights to your aerospace programme?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Air Commodore Arvind Srivastava provides direct advisory on DAP 2020 proposals, MRO facility modernization, and DGCA compliance.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block text-xs uppercase tracking-widest font-medium text-black bg-[#C9A96E] hover:bg-[#D5B880] px-8 py-3.5 rounded shadow-lg transition-all shrink-0"
          >
            Consult Air Commodore Srivastava &rarr;
          </Link>
        </div>
      </article>

      <CTASection />
    </div>
  );
}
