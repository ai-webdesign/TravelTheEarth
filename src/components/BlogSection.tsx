import React, { useState } from 'react';
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
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(`https://traveltheearth.info/blog/${post.slug}`);
    setCopiedSlug(post.slug);
    setTimeout(() => setCopiedSlug(null), 2500);
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

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs font-medium text-slate-400">
              Updated Weekly for Travel Brands
            </span>
          </div>
        </div>

        {/* 3 Modern Blog Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setSelectedPost(post)}
              className="glass-panel rounded-2xl border border-slate-800/90 hover:border-sky-500/50 bg-slate-900/60 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-950/40 cursor-pointer group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-950/90 text-sky-300 border border-sky-700/80 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Reading Time Badge */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-md">
                    <Clock className="w-3 h-3 text-sky-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                {/* Published Date */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] group-hover:text-sky-300 transition-colors line-clamp-2 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Key Takeaway Bullet Highlights */}
                  <div className="space-y-1.5 mb-5 pt-1 border-t border-slate-800/80">
                    {post.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author Info & Read Button Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-sky-500/30"
                    />
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {post.author.name}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {post.author.role}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 group-hover:text-sky-300 group-hover:translate-x-1 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

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

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
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
                  {selectedPost.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
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
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-sky-500/40"
                />
                <div>
                  <span className="text-sm font-bold text-white block">
                    {selectedPost.author.name}
                  </span>
                  <span className="text-xs text-slate-400 block">
                    {selectedPost.author.role} • TravelTheEarth Agency
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => handleShare(selectedPost, e)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{copiedSlug === selectedPost.slug ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Hero Image in Modal */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-2xl bg-sky-950/40 border border-sky-800/60 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Executive Summary & Actionable Key Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {selectedPost.keyTakeaways.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Body Article Content */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t border-slate-800">
              <Tag className="w-3.5 h-3.5 text-slate-500" />
              {selectedPost.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 text-xs border border-slate-800">
                  #{tag}
                </span>
              ))}
            </div>

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
                  const srv = selectedPost.category.includes('Guest Posting') 
                    ? 'Guest Posting & Outreach' 
                    : selectedPost.category.includes('AI') 
                    ? 'AI Web Development & Automation' 
                    : 'Search Engine Optimization (SEO & Technical SEO)';
                  setSelectedPost(null);
                  onOpenQuoteModal?.(srv);
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
