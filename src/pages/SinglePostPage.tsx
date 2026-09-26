import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Share2, 
  ArrowLeft, 
  Tag, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Check, 
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import DOMPurify from 'dompurify';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { 
  getWordPressPostBySlug, 
  getWordPressPosts, 
  formatWordPressPost 
} from '../services/wordpress';
import { FormattedBlogPost } from '../types/wordpress';
import { updatePageSeo } from '../utils/seo';

export const SinglePostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<FormattedBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<FormattedBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Quote modal
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const fetchPostData = async () => {
    if (!slug) return;
    try {
      setLoading(true);
      setError(null);
      const rawPost = await getWordPressPostBySlug(slug);
      if (!rawPost) {
        setError('Article not found or may have been moved.');
        return;
      }
      const formatted = formatWordPressPost(rawPost);
      setPost(formatted);

      // Dynamic SEO update with WordPress post metadata
      const seoTitle = formatted.yoast?.title || `${formatted.title} | TravelTheEarth`;
      const seoDesc = formatted.yoast?.description || formatted.cleanExcerpt.slice(0, 160);
      const canonical = `https://traveltheearth.info/blog/${formatted.slug}`;

      updatePageSeo({
        title: seoTitle,
        description: seoDesc,
        canonicalUrl: canonical,
        ogImage: formatted.imageUrl,
        ogType: 'article',
        authorName: formatted.authorName,
        publishedTime: formatted.date,
        modifiedTime: formatted.modifiedDate,
        schema: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: formatted.title,
          description: seoDesc,
          image: [formatted.imageUrl],
          datePublished: formatted.date,
          dateModified: formatted.modifiedDate,
          author: {
            '@type': 'Person',
            name: formatted.authorName,
          },
          publisher: {
            '@type': 'Organization',
            name: 'TravelTheEarth Digital Agency',
            url: 'https://traveltheearth.info',
            logo: {
              '@type': 'ImageObject',
              url: 'https://traveltheearth.info/logo.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonical,
          },
        },
      });

      // Fetch 2-3 related posts in background
      try {
        const catId = formatted.categories.length > 0 ? formatted.categories[0].id : undefined;
        const relatedRes = await getWordPressPosts({ page: 1, perPage: 3, categoryId: catId });
        const filtered = relatedRes.posts
          .map(formatWordPressPost)
          .filter((p) => p.slug !== formatted.slug)
          .slice(0, 2);
        setRelatedPosts(filtered);
      } catch {
        // Silent fallback for related posts
      }

    } catch (err) {
      console.error('Failed to load WordPress post:', err);
      setError('An error occurred while loading this article. Please check back shortly.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Header Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1 pt-28 pb-20">
        
        {/* Loading State */}
        {loading && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-pulse space-y-8">
            <div className="h-4 bg-slate-800 rounded w-48"></div>
            <div className="h-10 bg-slate-800 rounded w-5/6"></div>
            <div className="h-6 bg-slate-800 rounded w-2/3"></div>
            <div className="h-80 bg-slate-800/60 rounded-3xl w-full"></div>
            <div className="space-y-4 pt-4">
              <div className="h-4 bg-slate-800 rounded w-full"></div>
              <div className="h-4 bg-slate-800 rounded w-full"></div>
              <div className="h-4 bg-slate-800 rounded w-4/5"></div>
            </div>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="p-10 rounded-3xl bg-slate-900 border border-rose-900/60 shadow-2xl">
              <AlertCircle className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h1 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-3">
                Article Not Available
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {error}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={fetchPostData}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
                <Link
                  to="/blog"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to All Guides</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Post Content */}
        {!loading && !error && post && (
          <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
            
            {/* Top Back Navigation & Breadcrumb */}
            <div className="flex items-center justify-between gap-4 mb-8 text-xs text-slate-400">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white font-semibold transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to All Articles</span>
              </Link>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="text-slate-400">{post.categoryName}</span>
              </div>
            </div>

            {/* Article Header */}
            <header className="mb-8">
              {/* Category & Read Time Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-sky-950/90 text-sky-300 border border-sky-700/80 shadow-sm">
                  {post.categoryName}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{post.readTime}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.formattedDate}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author & Share Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-11 h-11 rounded-full object-cover border border-sky-500/40"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80';
                    }}
                  />
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {post.authorName}
                    </span>
                    <span className="text-xs text-slate-400 block">
                      {post.authorRole}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>Share Article</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Hero Image */}
            <div className="relative h-72 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden mb-10 border border-slate-800 shadow-2xl bg-slate-950">
              <img
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=700&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Rendered WordPress HTML Article Content */}
            <div
              className="wp-content mb-12 p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 shadow-lg"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.contentHtml || `<p>${post.cleanExcerpt}</p>`),
              }}
            />

            {/* Categories & Tags List */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs">
                <Tag className="w-4 h-4 text-sky-400" />
                <span className="text-slate-400 font-semibold mr-1">Categories:</span>
                {post.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.slug}`}
                    className="px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-sky-300 border border-slate-800 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Bottom Strategic Proposal Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-emerald-950 border border-sky-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-900/60 text-sky-300 text-[11px] font-semibold mb-2">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Actionable Strategy</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
                  Want to apply this strategy to your travel business?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Get a tailored growth audit and editorial link roadmap engineered specifically for your tourism niche.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleOpenQuoteModal(post.categoryName)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Request Custom Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Related Articles Strip */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-slate-800 pt-10">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    Related Travel Growth Articles
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-semibold text-sky-400 block mb-2">
                          {related.categoryName} • {related.formattedDate}
                        </span>
                        <h4 className="text-base font-bold text-white font-['Outfit'] group-hover:text-sky-300 transition-colors line-clamp-2 mb-2">
                          {related.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {related.cleanExcerpt}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-sky-400 font-semibold">
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </article>
        )}

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
