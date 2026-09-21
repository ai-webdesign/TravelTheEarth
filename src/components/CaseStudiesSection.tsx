import React from 'react';
import { Award, TrendingUp, MapPin, CheckCircle, ArrowRight, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';

interface CaseStudiesSectionProps {
  onOpenQuoteModal: (clientCase?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="case-studies" className="py-24 bg-slate-900/40 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-xs font-semibold text-sky-400 mb-4">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Proven Travel Industry Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5">
            Real Results from <span className="text-gradient-ocean">Travel Brands</span> Worldwide
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            See how boutique resorts, adventure expedition operators, and luxury charters scaled their organic rankings, captured Google Maps 3-packs, and increased direct bookings.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group hover:border-sky-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                    {study.badge}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    {study.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                  {study.client}
                </h3>
                <span className="text-xs font-semibold text-slate-400 block mb-4">
                  {study.category}
                </span>

                <div className="space-y-3 mb-6 text-xs text-slate-300 leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-rose-300 block mb-1">Challenge:</strong>
                    {study.challenge}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                    <strong className="text-sky-300 block mb-1">Our Solution:</strong>
                    {study.solution}
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-800 mb-6 text-center">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="bg-slate-900/60 p-2 rounded-lg">
                      <span className="text-sm font-extrabold text-amber-300 font-['Outfit'] block">
                        {res.value}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="relative pl-6 italic text-xs text-slate-300 mb-6">
                  <Quote className="w-4 h-4 text-sky-500 absolute top-0 left-0" />
                  "{study.quote}"
                  <div className="not-italic mt-2">
                    <span className="font-bold text-white block">{study.author}</span>
                    <span className="text-[11px] text-slate-400">{study.role}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteModal(`Case Study Inquiries: ${study.client}`)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-sky-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
