import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  X,
  Clock,
  DollarSign
} from 'lucide-react';
import { CORE_SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All 8 Core Services' },
    { id: 'authority', label: 'Authority Links & PR' },
    { id: 'seo', label: 'SEO & Google Maps' },
    { id: 'content', label: 'Editorial & Copywriting' },
    { id: 'tech', label: 'Web Design & AI Tech' }
  ];

  const filteredServices = CORE_SERVICES.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'authority') return service.id === 'guest-posting' || service.id === 'press-releases';
    if (activeCategory === 'seo') return service.id === 'seo-technical-seo' || service.id === 'gbp-local-seo';
    if (activeCategory === 'content') return service.id === 'blog-writing-strategy' || service.id === 'content-writing-copywriting';
    if (activeCategory === 'tech') return service.id === 'web-design-ui-ux' || service.id === 'ai-web-dev-automation';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-xs font-semibold text-sky-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>High-Impact Growth Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5">
            Core Agency Services for <span className="text-gradient-ocean">High-Growth</span> Travel Brands
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every service is tailored specifically for the travel, hospitality, and adventure tourism sectors. From authoritative white-hat editorial outreach to high-converting UI/UX and next-gen AI trip concierges, we build your brand’s unstoppable organic acquisition engine.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-md shadow-sky-900/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const isBlue = service.colorAccent === 'blue';
            const isGreen = service.colorAccent === 'green';
            const isAmber = service.colorAccent === 'amber';
            const isCyan = service.colorAccent === 'cyan';

            return (
              <article
                key={service.id}
                id={`service-${service.id}`}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800 group relative overflow-hidden"
              >
                {/* Accent top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isBlue
                      ? 'bg-gradient-to-r from-sky-500 to-sky-300'
                      : isGreen
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-300'
                      : isAmber
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-300'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-300'
                  } opacity-40 group-hover:opacity-100`}
                ></div>

                <div>
                  {/* Card Header with Icon & Metric Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isBlue
                          ? 'bg-sky-950/80 border-sky-800 text-sky-400 group-hover:bg-sky-900'
                          : isGreen
                          ? 'bg-emerald-950/80 border-emerald-800 text-emerald-400 group-hover:bg-emerald-900'
                          : isAmber
                          ? 'bg-amber-950/80 border-amber-800 text-amber-400 group-hover:bg-amber-900'
                          : 'bg-cyan-950/80 border-cyan-800 text-cyan-400 group-hover:bg-cyan-900'
                      }`}
                    >
                      <i className={`${service.iconName} text-xl`}></i>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700/80">
                        {service.metric}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium mt-0.5">
                        {service.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Service Badge & H3 Heading */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1.5">
                    {service.shortTag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-['Outfit'] group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullets */}
                  <div className="mb-6 pt-4 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Key Deliverables & Standards:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Starting Price & Interactive Triggers */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-slate-400 block">Investment</span>
                    <span className="text-xs font-bold text-amber-300">{service.pricingStarting}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModalService(service)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      Scope & Details
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-sm shadow-sky-900/40"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner for All-in-One Growth Retainers */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-['Outfit']">
                Need a Full-Funnel Travel Marketing Package?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Bundle Guest Posting, Technical Travel SEO, Google Maps 3-Pack, and Web Redesign for maximum organic synergy and preferred retainer pricing.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Comprehensive Travel Retainer (All Services)')}
            className="w-full md:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-900/40 shrink-0"
          >
            <span>Request Full Agency Retainer Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Detailed Service Inspection Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center">
                <i className={`${selectedModalService.iconName} text-lg`}></i>
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                  {selectedModalService.shortTag}
                </span>
                <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
                  {selectedModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-amber-300 mb-4">
              {selectedModalService.headline}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedModalService.fullBody.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Complete Deliverables Checklist:
              </span>
              <ul className="space-y-2">
                {selectedModalService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">Ideal For:</span>
                <span className="text-white font-medium">{selectedModalService.targetAudience}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-1">Pricing Guide:</span>
                <span className="text-amber-300 font-bold">{selectedModalService.pricingStarting}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  const sTitle = selectedModalService.title;
                  setSelectedModalService(null);
                  onOpenQuoteModal(sTitle);
                }}
                className="flex-1 py-3 px-5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Custom Proposal for This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedModalService(null)}
                className="py-3 px-5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
