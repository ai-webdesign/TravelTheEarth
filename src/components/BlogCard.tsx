import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { FormattedBlogPost } from '../types/wordpress';

interface BlogCardProps {
  post: FormattedBlogPost;
  onClick?: () => void;
  href?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onClick, href }) => {
  const CardContent = (
    <article
      id={`blog-card-${post.id}`}
      className="glass-panel rounded-2xl border border-slate-800/90 hover:border-sky-500/50 bg-slate-900/60 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-950/40 cursor-pointer group h-full"
      onClick={onClick}
    >
      {/* Image Container with Badges */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={post.imageUrl}
          alt={post.imageAlt || post.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback image if remote URL fails
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&h=500&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-950/90 text-sky-300 border border-sky-700/80 backdrop-blur-md">
            {post.categoryName}
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
          <span>{post.formattedDate}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] group-hover:text-sky-300 transition-colors line-clamp-2 mb-3 leading-snug">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {post.cleanExcerpt || 'Click to read this complete travel insights guide and direct-booking case study.'}
          </p>
        </div>

        {/* Author Info & Read Button Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5">
            <img
              src={post.authorAvatar}
              alt={post.authorName}
              className="w-8 h-8 rounded-full object-cover border border-sky-500/30"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80';
              }}
            />
            <div>
              <span className="text-xs font-semibold text-white block">
                {post.authorName}
              </span>
              <span className="text-[10px] text-slate-400 block line-clamp-1">
                {post.authorRole}
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
  );

  if (href) {
    return (
      <a href={href} className="block h-full text-inherit no-underline">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
