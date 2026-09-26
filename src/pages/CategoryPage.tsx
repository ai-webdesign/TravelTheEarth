import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  AlertCircle, 
  RefreshCw,
  BookOpen 
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { BlogCard } from '../components/BlogCard';
import { BlogCardSkeleton } from '../components/BlogCardSkeleton';
import { 
  getWordPressCategories, 
  getWordPressPosts, 
  formatWordPressPost 
} from '../services/wordpress';
import { FormattedBlogPost, WordPressCategory, PaginationInfo } from '../types/wordpress';
import { updatePageSeo } from '../utils/seo';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [currentCategory, setCurrentCategory] = useState<WordPressCategory | null>(null);
  const [posts, setPosts] = useState<FormattedBlogPost[]>([]);
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

  const fetchCategoryAndPosts = async () => {
    if (!categorySlug) return;
    try {
      setLoading(true);
      setError(null);
      const allCats = await getWordPressCategories();
      const matched = allCats.find((c) => c.slug === categorySlug);

      if (!matched) {
        setError(`Category "${categorySlug}" could not be found.`);
        return;
      }

      setCurrentCategory(matched);

      // Update SEO
      updatePageSeo({
        title: `${matched.name} Travel Guides & Case Studies – TravelTheEarth`,
        description: `Explore all ${matched.name} travel marketing playbooks, authority outreach case studies, and SEO guides published on TravelTheEarth.`,
        canonicalUrl: `https://traveltheearth.info/category/${matched.slug}`,
        ogType: 'website',
      });

      // Fetch posts for category
      const res = await getWordPressPosts({
        page: currentPage,
        perPage: 9,
        categoryId: matched.id,
      });

      setPosts(res.posts.map(formatWordPressPost));
      setPagination(res.pagination);

    } catch (err) {
      console.error('Failed to load category posts:', err);
      setError('Unable to load articles for this category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryAndPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categorySlug, currentPage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1 pt-28 pb-20">
        
        {/* Category Header */}
        <section className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
              <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link to="/blog" className="hover:text-sky-400 transition-colors">Blog</Link>
              <span className="text-slate-600">/</span>
              <span className="text-sky-400 font-semibold">{currentCategory ? currentCategory.name : categorySlug}</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/70 text-xs font-semibold text-sky-300 mb-4">
                <Tag className="w-3.5 h-3.5 text-sky-400" />
                <span>Category Archive</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight mb-4">
                Category: <span className="text-gradient-ocean">{currentCategory ? currentCategory.name : categorySlug}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300">
                {currentCategory?.description || `Browse curated industry articles, tactical strategies, and case studies filed under ${currentCategory ? currentCategory.name : categorySlug}.`}
              </p>
            </div>

          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All 30+ Guides</span>
            </Link>
          </div>

          {/* Loading Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Error Message */}
          {!loading && error && (
            <div className="p-10 rounded-2xl bg-slate-900 border border-rose-900/50 text-center max-w-lg mx-auto my-12">
              <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Category Not Found</h3>
              <p className="text-xs text-slate-300 mb-6">{error}</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-colors"
              >
                <span>Return to Blog Directory</span>
              </Link>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && posts.length === 0 && (
            <div className="p-16 rounded-3xl bg-slate-900/60 border border-slate-800 text-center max-w-md mx-auto my-12">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No Articles in this Category</h3>
              <p className="text-xs text-slate-400 mb-6">
                There are currently no published articles in this category.
              </p>
              <Link
                to="/blog"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-sky-400 transition-colors"
              >
                View All Categories
              </Link>
            </div>
          )}

          {/* Real Category Posts Grid */}
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

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Showing Page <span className="text-white font-bold">{pagination.currentPage}</span> of{' '}
                    <span className="text-white font-bold">{pagination.totalPages}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={!pagination.hasPrevPage}
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <button
                      type="button"
                      disabled={!pagination.hasNextPage}
                      onClick={() => setCurrentPage((prev) => Math.min(pagination.totalPages, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
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
