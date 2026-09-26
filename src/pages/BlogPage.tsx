import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  AlertCircle,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { BlogCard } from '../components/BlogCard';
import { BlogCardSkeleton } from '../components/BlogCardSkeleton';
import { 
  getWordPressPosts, 
  getWordPressCategories, 
  formatWordPressPost 
} from '../services/wordpress';
import { FormattedBlogPost, WordPressCategory, PaginationInfo } from '../types/wordpress';
import { updatePageSeo } from '../utils/seo';

export const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<FormattedBlogPost[]>([]);
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSearch, setActiveSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<PaginationInfo>({
    totalPosts: 0,
    totalPages: 1,
    currentPage: 1,
    perPage: 9,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Quote modal
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  // Set page SEO on mount
  useEffect(() => {
    updatePageSeo({
      title: 'Travel SEO & Growth Resource Center – TravelTheEarth',
      description: 'Explore 30+ actionable travel SEO guides, high-DA guest posting case studies, local search tactics, and direct-booking blueprints for travel operators.',
      canonicalUrl: 'https://traveltheearth.info/blog',
      ogType: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'TravelTheEarth Travel SEO & Industry Blog',
        url: 'https://traveltheearth.info/blog',
        description: 'Actionable guides and strategies for travel founders, tour operators, and hospitality leaders.',
      },
    });
  }, []);

  // Fetch categories once on mount
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const cats = await getWordPressCategories();
        // Filter out empty categories
        const nonEmpty = cats.filter((c) => c.count > 0);
        setCategories(nonEmpty);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCats();
  }, []);

  // Fetch posts whenever page, category, or activeSearch changes
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getWordPressPosts({
        page: currentPage,
        perPage: 9,
        categoryId: selectedCategoryId || undefined,
        search: activeSearch || undefined,
      });

      const formatted = res.posts.map(formatWordPressPost);
      setPosts(formatted);
      setPagination(res.pagination);
    } catch (err) {
      console.error('Error loading WordPress posts:', err);
      setError('Unable to load articles from the WordPress CMS. Please check your internet connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedCategoryId, activeSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    setActiveSearch(searchTerm.trim());
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setActiveSearch('');
    setCurrentPage(1);
  };

  const handleCategorySelect = (catId: number | null) => {
    setSelectedCategoryId(catId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1 pt-28 pb-20">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-14 border-b border-slate-800/60">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-sky-500/10 via-emerald-500/10 to-transparent blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
              <a href="/" className="hover:text-sky-400 transition-colors">Home</a>
              <span className="text-slate-600">/</span>
              <span className="text-sky-400 font-semibold">Travel Growth & SEO Hub</span>
              {selectedCategoryId && (
                <>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-300">
                    {categories.find((c) => c.id === selectedCategoryId)?.name}
                  </span>
                </>
              )}
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/70 text-xs font-semibold text-sky-300 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Agency Insights • Connected to Live WordPress CMS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight mb-5">
                Travel SEO & Growth <br />
                <span className="text-gradient-ocean">Resource Center</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
                Field-tested playbooks, white-hat link-building breakdowns, local Google Business Profile ranking blueprints, and direct-booking case studies from our team of senior travel search engineers.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md max-w-2xl">
                <div className="relative w-full flex items-center">
                  <Search className="w-4 h-4 text-slate-400 absolute left-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search 30+ articles by keyword..."
                    className="w-full bg-transparent pl-11 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-3 text-slate-400 hover:text-white"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-xs font-bold text-white shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Trust Indicators Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/60 text-xs">
                <div>
                  <span className="text-lg font-bold text-white font-['Outfit'] block">100% White-Hat</span>
                  <span className="text-slate-400 text-[11px]">Zero Private Blog Networks</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-sky-400 font-['Outfit'] block">DA 40–80+</span>
                  <span className="text-slate-400 text-[11px]">Verified Editorial Links</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-emerald-400 font-['Outfit'] block">31+ Real Guides</span>
                  <span className="text-slate-400 text-[11px]">Live WordPress Archives</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-amber-400 font-['Outfit'] block">Sub-Second</span>
                  <span className="text-slate-400 text-[11px]">Fast Edge Delivery</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Category Tabs & Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          
          {/* Category Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-['Outfit'] block mb-1">
                Curated Knowledge Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Explore Strategy Playbooks
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => handleCategorySelect(null)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                  selectedCategoryId === null
                    ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white border-transparent shadow-md shadow-sky-950/40'
                    : 'text-slate-400 hover:text-white border-transparent'
                }`}
              >
                <span>All Articles</span>
                {pagination.totalPosts > 0 && !selectedCategoryId && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 text-white">
                    {pagination.totalPosts}
                  </span>
                )}
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                    selectedCategoryId === cat.id
                      ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white font-bold border-transparent shadow-md'
                      : 'text-slate-400 hover:text-white border-transparent'
                  }`}
                >
                  <Tag className="w-3 h-3 text-sky-400" />
                  <span>{cat.name}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-slate-800 text-slate-300">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Search / Category Indicator */}
          {(activeSearch || selectedCategoryId) && (
            <div className="flex items-center justify-between p-4 mb-8 rounded-xl bg-slate-900/70 border border-sky-800/40 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span>Filtering by:</span>
                {activeSearch && (
                  <span className="px-2.5 py-1 rounded-md bg-sky-950 text-sky-300 border border-sky-800 font-medium">
                    Search: "{activeSearch}"
                  </span>
                )}
                {selectedCategoryId && (
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                    Category: {categories.find((c) => c.id === selectedCategoryId)?.name}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryId(null);
                  setActiveSearch('');
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
                className="text-xs text-sky-400 hover:text-white underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Loading Skeleton Grid (9 items) */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Error Message */}
          {!loading && error && (
            <div className="p-10 rounded-2xl bg-slate-900 border border-rose-900/50 text-center max-w-lg mx-auto my-12">
              <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Unable to Retrieve Articles</h3>
              <p className="text-xs text-slate-300 mb-6">{error}</p>
              <button
                type="button"
                onClick={fetchPosts}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry Connection</span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
            <div className="p-16 rounded-3xl bg-slate-900/60 border border-slate-800 text-center max-w-md mx-auto my-12">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-xs text-slate-400 mb-6">
                No published articles matched your search query or selected category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategoryId(null);
                  setActiveSearch('');
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-sky-400 transition-colors cursor-pointer"
              >
                Reset Search & Categories
              </button>
            </div>
          )}

          {/* Real 9-per-page Posts Grid */}
          {!loading && !error && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    href={`/blog/${post.slug}`}
                  />
                ))}
              </div>

              {/* Real WordPress Pagination Controls */}
              {pagination.totalPages > 1 && (
                <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Showing Page <span className="text-white font-bold">{pagination.currentPage}</span> of{' '}
                    <span className="text-white font-bold">{pagination.totalPages}</span> ({pagination.totalPosts} total articles)
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      type="button"
                      disabled={!pagination.hasPrevPage}
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: pagination.totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            pageNum === pagination.currentPage
                              ? 'bg-sky-600 text-white shadow-md'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      disabled={!pagination.hasNextPage}
                      onClick={() => setCurrentPage((prev) => Math.min(pagination.totalPages, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

        </section>

        {/* Free SEO Audit Bottom Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-sky-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-xs text-sky-400 font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Ready to Rank Your Travel Brand?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Get a Free 27-Point Travel SEO & Backlink Gap Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Discover exact competitor keywords, backlink opportunities on DA 50+ travel magazines, and technical booking conversion leaks.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenQuoteModal('Travel SEO & Direct Booking Strategy')}
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all shadow-xl shadow-sky-900/30 flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Request Free Custom Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Quote / Proposal Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
};
