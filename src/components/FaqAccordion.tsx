import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Search } from 'lucide-react';
import { AGENCY_FAQS } from '../data/agencyData';

export const FaqAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Guest Posting & SEO', 'Safety & Compliance', 'Local SEO', 'AI & Web Development'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = AGENCY_FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-xs font-semibold text-sky-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Search Optimization & Client Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5">
            Frequently Asked Questions on <span className="text-gradient-ocean">Travel SEO & Growth</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our white-hat guest posting process, Google Business Profile local rankings, and AI-powered travel web development.
          </p>
        </div>

        {/* Quick Search & Category Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-8">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-start sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-sky-500/40 shadow-xl shadow-sky-950/20'
                    : 'bg-slate-900/50 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-950 text-sky-400 border border-sky-800/80 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      Q
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                        {faq.question}
                      </h3>
                      <span className="text-[11px] font-semibold text-emerald-400 block mt-0.5">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sky-950 text-sky-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">
                        Topic Tags:
                      </span>
                      {faq.keywords.map((kw, kwIdx) => (
                        <span
                          key={kwIdx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-sky-300 border border-slate-800"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Have a specific question about your travel website?</h4>
            <p className="text-xs text-slate-400">Our senior travel SEO strategists review custom requests directly.</p>
          </div>
          <a
            href="mailto:contact@traveltheearth.info"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Email Strategist Team
          </a>
        </div>

      </div>
    </section>
  );
};
