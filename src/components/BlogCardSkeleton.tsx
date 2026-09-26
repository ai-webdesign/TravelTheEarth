import React from 'react';

export const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-900/50 overflow-hidden flex flex-col animate-pulse h-full">
      {/* Image Skeleton */}
      <div className="h-52 w-full bg-slate-800/60 relative">
        <div className="absolute top-3.5 left-3.5 w-24 h-6 rounded-full bg-slate-700/60"></div>
        <div className="absolute top-3.5 right-3.5 w-16 h-6 rounded-full bg-slate-700/60"></div>
        <div className="absolute bottom-3 left-4 w-28 h-4 rounded bg-slate-700/60"></div>
      </div>

      {/* Body Skeleton */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="h-5 bg-slate-700/70 rounded w-5/6"></div>
          <div className="h-5 bg-slate-700/70 rounded w-3/4"></div>
          <div className="space-y-2 pt-2">
            <div className="h-3.5 bg-slate-800/80 rounded w-full"></div>
            <div className="h-3.5 bg-slate-800/80 rounded w-full"></div>
            <div className="h-3.5 bg-slate-800/80 rounded w-4/5"></div>
          </div>
        </div>

        {/* Footer Skeleton */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-700/70"></div>
            <div className="space-y-1.5">
              <div className="w-20 h-3 bg-slate-700/70 rounded"></div>
              <div className="w-24 h-2.5 bg-slate-800/80 rounded"></div>
            </div>
          </div>
          <div className="w-20 h-4 bg-slate-800/80 rounded"></div>
        </div>
      </div>
    </div>
  );
};
