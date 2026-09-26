import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  X, 
  CheckCircle2, 
  Tag, 
  Share2, 
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import DOMPurify from 'dompurify';
import { getWordPressPosts, formatWordPressPost } from '../services/wordpress';
import { FormattedBlogPost } from '../types/wordpress';
import { BlogCard } from './BlogCard';
import { BlogCardSkeleton } from './BlogCardSkeleton';

interface BlogSectionProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenQuoteModal }) => {
  const [posts, setPosts] = useState<FormattedBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<FormattedBlogPost | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const fetchLatestPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getWordPressPosts({ page: 1, perPage: 3 });
      const formatted = res.posts.map(formatWordPressPost);
      setPosts(formatted);
    } catch (err) {
      console.error('Error fetching latest WordPress posts:', err);
      setError('Unable to load latest articles from CMS. Please refresh or check back shortly.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const handleShare = (post: FormattedBlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedSlug(post.slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    }
  };

  return (
    <section id="blog" className="py-20 bg-slate-950 relative border-b border-slate-800/80 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-xs font-semibold text-sky-400 mb-3.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Travel Search Intelligence & Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Latest <span className="text-gradient-ocean">Travel SEO & Industry Insights</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
              Actionable guides, data-driven backlink strategies, and conversion blueprints written by senior travel SEO consultants and digital growth architects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-auto">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-sky-500/50 text-xs font-bold text-sky-400 hover:text-white transition-all shadow-md group"
            >
              <span>View All 30+ Guides</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-rose-900/50 text-center max-w-xl mx-auto">
            <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-2">Notice</h3>
            <p className="text-xs text-slate-300 mb-4">{error}</p>
            <button
              onClick={fetchLatestPosts}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Loading</span>
            </button>
          </div>
        )}

        {/* Dynamic Real WordPress Blog Cards Grid */}
        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="p-12 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <p className="text-sm text-slate-300 font-medium">No published articles found at this time.</p>
          </div>
        )}

        {/* Bottom Banner for Editorial Inquiries */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/30 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Outfit']">
                Want to publish a guest article or feature your destination?
              </h4>
              <p className="text-xs text-slate-400">
                We accept curated editorial contributions from verified travel founders, tour operators, and tourism boards.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenQuoteModal?.('Guest Posting & Outreach')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 hover:text-sky-300 border border-slate-700 transition-colors shrink-0 cursor-pointer"
          >
            Submit Editorial Inquiry →
          </button>
        </div>

      </div>

      {/* Full Article Reader Modal for Seamless Instant Reading */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-950 text-sky-300 border border-sky-800">
                  {selectedPost.categoryName}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.formattedDate}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] leading-snug">
                {selectedPost.title}
              </h2>
            </div>

            {/* Author Strip */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={selectedPost.authorAvatar}
                  alt={selectedPost.authorName}
                  className="w-10 h-10 rounded-full object-cover border border-sky-500/40"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80';
                  }}
                />
                <div>
                  <span className="text-sm font-bold text-white block">
                    {selectedPost.authorName}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {selectedPost.authorRole}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`/blog/${selectedPost.slug}`}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-700/60 text-xs text-sky-300 font-medium transition-colors"
                >
                  <span>Permalink</span>
                  <ArrowRight className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleShare(selectedPost, e)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{copiedSlug === selectedPost.slug ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Hero Image in Modal */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.imageAlt || selectedPost.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=700&q=80';
                }}
              />
            </div>

            {/* Rendered WordPress HTML Content */}
            <div
              className="wp-content mb-8"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(selectedPost.contentHtml || `<p>${selectedPost.cleanExcerpt}</p>`),
              }}
            />

            {/* Categories & Tags */}
            {selectedPost.categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-slate-800">
                <Tag className="w-3.5 h-3.5 text-slate-500" />
                {selectedPost.categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="px-2.5 py-1 rounded-md bg-slate-950 hover:bg-slate-800 text-sky-400 text-xs border border-slate-800 transition-colors"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950 via-slate-900 to-emerald-950 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white font-['Outfit']">
                  Ready to implement this strategy for your brand?
                </h4>
                <p className="text-xs text-slate-300">
                  Speak directly with our senior travel SEO team and receive a competitor gap audit.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedPost(null);
                  onOpenQuoteModal?.('Travel SEO & Direct Booking Strategy');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Request Custom Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
