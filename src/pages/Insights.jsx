import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { BookOpen, Calendar, Tag, ArrowUpRight, Search, Clock, User, Sparkles } from 'lucide-react';
import api from '../utils/api';
import { insightArticles } from '../data/insightsData';
import { personSchemaArvindSrivastava } from '../data/seoData';

export default function Insights() {
  const [blogs, setBlogs] = useState(insightArticles);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    api.get('/blogs')
      .then((data) => {
        if (isMounted && data.blogs && data.blogs.length > 0) {
          // Merge API blogs with our 5 core verified articles, avoiding duplicates
          const apiSlugs = new Set(data.blogs.map((b) => b.slug));
          const nonDuplicateLocal = insightArticles.filter((a) => !apiSlugs.has(a.slug));
          setBlogs([...nonDuplicateLocal, ...data.blogs]);
        }
      })
      .catch((err) => {
        console.warn('Using local verified insight articles:', err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['All', ...new Set(blogs.map((b) => b.category).filter(Boolean))];

  const filteredBlogs = blogs.filter((b) => {
    const matchesCat = selectedCategory === 'All' || b.category === selectedCategory;
    const titleText = b.title || '';
    const summaryText = b.excerpt || b.summary || '';
    const matchesSearch =
      searchQuery === '' ||
      titleText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      summaryText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.tags && b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCat && matchesSearch;
  });

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchemaArvindSrivastava,
      {
        '@type': 'CollectionPage',
        '@id': 'https://lcsllp.online/insights/#collection',
        url: 'https://lcsllp.online/insights',
        name: 'Aviation & Defence Strategic Insights - Air Commodore Arvind Srivastava',
        description: 'Authoritative analyses on aircraft MRO trends, Indian defence capital acquisition (DAP 2020), DGCA compliance, and aerospace careers.',
        publisher: {
          '@id': 'https://lcsllp.online/#organization'
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <SEOHead
        title="Aviation & Defence Insights | Air Cmde Arvind Srivastava"
        description="Executive insights on aircraft MRO trends, Indian defence capital acquisition (DAP 2020), DGCA regulations & aerospace careers by Air Cmde Srivastava."
        keywords="aviation insights india, aircraft mro trends, defence capital acquisition dap 2020, dgca compliance basics"
        canonical="https://lcsllp.online/insights"
      />
      <JsonLd schema={schema} id="insights-hub-jsonld" />

      <PageHero
        eyebrow="DEFENCE ECOSYSTEM &amp; STRATEGIC ADVISORY"
        title="Defence Perspectives &amp; Market Insights"
        description="Authoritative executive perspectives on Defence Acquisition Procedure (DAP 2020), Make in India schemes, indigenous MRO capabilities, and strategic aerospace partnerships."
        breadcrumbs={[{ label: 'Insights', path: '/insights' }]}
      />

      <section className="py-16 sm:py-24 max-w-[1500px] mx-auto px-6 sm:px-12 space-y-12">
        {/* Editorial Subheader & Filter Bar */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium text-[#C9A96E] uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Analysis Directorate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#1A1A1A]">
                Policy, Indigenisation &amp; Capability Briefings
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, keywords, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAFAF8] border border-stone-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1A1A1A] placeholder-stone-400 focus:outline-none focus:border-[#C9A96E]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-stone-400 mr-2 font-medium">Filter Domain:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B0B0C] text-[#C9A96E] shadow-md border border-[#C9A96E]/40'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Listing Grid */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs uppercase tracking-widest text-stone-400">Loading Strategic Insights...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="py-20 text-center bg-white border border-stone-200 rounded-2xl p-12 space-y-4">
            <BookOpen className="w-12 h-12 text-[#C9A96E] mx-auto opacity-60" />
            <h3 className="text-xl font-serif text-[#1A1A1A]">No publications found</h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto font-light">
              We couldn't find any articles matching your search query or selected category. Clear filters to view all publications.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-block text-xs uppercase tracking-widest font-medium text-black bg-[#C9A96E] px-6 py-2.5 rounded shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredBlogs.map((article, idx) => (
              <article
                key={article._id || article.slug || idx}
                className="group relative bg-[#0B0B0C] border border-stone-200 hover:border-[#C9A96E] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-900">
                  <img
                    src={article.featuredImage || article.image || '/images/services-hero.jpg'}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.9]"
                    onError={(e) => {
                      e.target.src = '/images/services-hero.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-[#C9A96E]/50 px-3 py-1 rounded text-[10px] font-medium text-[#C9A96E] uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-[#C9A96E]" />
                    <span>{article.category}</span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-stone-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{article.readTime || '7 min read'}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-8 space-y-4 bg-[#0B0B0C] text-white flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[11px] text-stone-400 font-light">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" />
                        {article.publishDate || article.date || '2026'}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#C9A96E]" />
                        {article.author || 'Air Commodore Arvind Srivastava'}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-normal text-white group-hover:text-[#C9A96E] transition-colors leading-snug">
                      <Link to={`/insights/${article.slug || article._id}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed line-clamp-3">
                      {article.excerpt || article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                    <Link
                      to={`/insights/${article.slug || article._id}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-[#C9A96E] group-hover:text-white transition-colors"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C9A96E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
}
