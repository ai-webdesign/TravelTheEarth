import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Award,
  Zap
} from 'lucide-react';
import { STRATEGY_STEPS } from '../data/agencyData';

interface StrategySectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({ onOpenQuoteModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = STRATEGY_STEPS[activeStepIndex];

  return (
    <section id="strategy" className="py-24 bg-slate-900/60 relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-xs font-semibold text-emerald-400 mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Proven Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5">
            How We Help Travel Websites <span className="text-gradient-forest">Rank & Dominate</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our step-by-step organic acquisition framework has powered over 500 travel brands, luxury resorts, and adventure tour operators to top organic rankings on Google and Google Maps.
          </p>
        </div>

        {/* Interactive Step Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STRATEGY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-800 border-sky-500 shadow-lg shadow-sky-900/30 scale-[1.02]'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400"></div>
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-black font-['Outfit'] ${isActive ? 'text-sky-400' : 'text-slate-500'}`}>
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-700">
                    {step.duration}
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  {step.phase}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-white bg-sky-600 px-3 py-1 rounded-full uppercase tracking-wider">
                  Phase {activeStep.number}
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  Estimated Timeline: {activeStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-4">
                {activeStep.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Strategic Focus & Execution Milestones:
                </span>
                {activeStep.actions.map((action, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Verified Deliverable:
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-amber-300">
                    {activeStep.deliverable}
                  </span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(`Strategy Phase ${activeStep.number}: ${activeStep.title}`)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Apply to My Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Strategic Diagram Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-inner">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Travel Growth Blueprint
                </span>
                <span className="text-[10px] uppercase font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                  White-Hat Standard
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400">Search Engine Indexing Velocity</span>
                    <span className="text-emerald-400 font-bold">Fast-Track Guaranteed</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[94%]"></div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400">Backlink Topical Relevance</span>
                    <span className="text-sky-400 font-bold">100% Niche Contextual</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-sky-500 h-full w-[98%]"></div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400">Direct Booking Conversion Target</span>
                    <span className="text-amber-400 font-bold">+180% to +340% Lift</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[88%]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-sky-950/40 border border-sky-800/60 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    "Unlike generalist agencies that treat travel websites like standard e-commerce, our dedicated travel outreach team understands high-season booking cycles, destination seasonality, and passenger intent."
                  </span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
