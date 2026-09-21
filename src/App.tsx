import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { StrategySection } from './components/StrategySection';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqAccordion } from './components/FaqAccordion';
import { BlogSection } from './components/BlogSection';
import { CtaLeadSection } from './components/CtaLeadSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Award } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [selectedWebsiteUrl, setSelectedWebsiteUrl] = useState<string>('');

  const handleOpenQuoteModal = (serviceName?: string, websiteUrl?: string) => {
    setSelectedServiceForQuote(serviceName);
    if (websiteUrl) {
      setSelectedWebsiteUrl(websiteUrl);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedServiceForQuote(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-sky-500 selection:text-white flex flex-col">
      {/* Sticky Top Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section with Lead Audit & Proof Counters */}
        <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Specialized Travel SEO Matters - Brief Value Strip */}
        <section className="py-12 bg-slate-900 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center shrink-0 border border-sky-800">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Outfit'] mb-1">
                    100% Niche-Relevant Travel Outlets
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Zero multi-niche link farms. We place editorial guest posts exclusively on legitimate travel magazines, luxury hotel guides, and active destination blogs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Outfit'] mb-1">
                    Direct Booking Conversion Focus
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Organic traffic is only half the battle. We optimize booking funnels, schemas, and mobile speeds so travellers book directly rather than through third-party OTAs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-['Outfit'] mb-1">
                    Next-Gen AI Travel Engineering
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Transform your website with automated AI trip planners, multi-day itinerary builders, and 24/7 smart concierges that capture high-value prospective leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Core Agency Services Section */}
        <ServicesGrid onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4-Step Strategy & Ranking Engine */}
        <StrategySection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Travel ROI Calculator */}
        <RoiCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Real Client Case Studies */}
        <CaseStudiesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Latest Blog Posts & Travel SEO Insights Section */}
        <BlogSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* SEO FAQ Accordion with Search & Categories */}
        <FaqAccordion />

        {/* High-Converting Call to Action Section with Interactive Lead Capture Form */}
        <CtaLeadSection onOpenQuoteModal={handleOpenQuoteModal} />

      </main>

      {/* Global Agency Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Quotation / Proposal Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={selectedServiceForQuote}
        initialWebsiteUrl={selectedWebsiteUrl}
      />
    </div>
  );
}
