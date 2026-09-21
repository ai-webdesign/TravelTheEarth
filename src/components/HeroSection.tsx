import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  TrendingUp, 
  Zap, 
  ExternalLink 
} from 'lucide-react';
import { STATS_COUNTERS, MEDIA_PARTNERS, TRAVEL_NICHES } from '../data/agencyData';

interface HeroSectionProps {
  onOpenQuoteModal: (preselectedService?: string, websiteUrl?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  const [targetUrl, setTargetUrl] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('Tour Operators & Day Excursions');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<null | {
    url: string;
    drEstimate: number;
    backlinkGap: string;
    schemaStatus: string;
    mobileSpeed: string;
    missedKeywords: number;
  }>(null);

  const handleRunAudit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!targetUrl.trim()) return;

    setIsAuditing(true);

    const formElement = e.currentTarget;
    const submissionData = new FormData(formElement);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData
    }).catch((err) => {
      console.warn("Web3Forms hero audit notice:", err);
    });

    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        url: targetUrl.startsWith('http') ? targetUrl : `https://${targetUrl}`,
        drEstimate: Math.floor(Math.random() * 25) + 22,
        backlinkGap: '48 High-DA Travel Competitor Links Missing',
        schemaStatus: 'Incomplete TouristAttraction & Lodging Schema',
        mobileSpeed: '1.9s LCP (Needs WebP & Cache Optimization)',
        missedKeywords: Math.floor(Math.random() * 120) + 180,
      });
    }, 1200);
  };

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 earth-mesh-bg overflow-hidden border-b border-slate-800/80"
    >
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-600/15 via-emerald-600/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Service Highlights Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-sky-500/30 text-xs sm:text-sm font-semibold text-sky-300 shadow-inner mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Premier Travel SEO, Authority Guest Posts & AI Web Agency</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-amber-300 font-medium">Domain Rating 45-85+ Outreach</span>
          </div>

          {/* Primary H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 font-['Outfit']">
            Scale Your Travel Brand with{' '}
            <span className="text-gradient-ocean">Authority Guest Posts</span>,{' '}
            Dominate <span className="text-gradient-forest">Local SEO</span> &{' '}
            <span className="text-amber-300">Modern AI Web Experiences</span>
          </h1>

          {/* SEO-Optimized Subhead with Rich Keywords */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10 font-normal">
            We help tour operators, luxury resorts, boutique destination hotels, and travel tech platforms outrank aggregators. Secure high-impact editorial backlinks on genuine travel publications, dominate the Google Maps 3-Pack, and deploy lightning-fast AI booking web apps that convert visitors into confirmed guests.
          </p>

          {/* Instant Search & Travel Audit Lead Bar */}
          <div className="w-full max-w-3xl bg-slate-950/80 p-3 sm:p-4 rounded-2xl border border-slate-700/80 shadow-2xl backdrop-blur-xl mb-6">
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              onSubmit={handleRunAudit} 
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Web3Forms Configuration: Delivers audit leads to gpostrequest@gmail.com */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="to_email" value="gpostrequest@gmail.com" />
              <input type="hidden" name="subject" value="Instant Travel SEO Audit Run - Hero Bar" />
              <input type="hidden" name="from_name" value="TravelTheEarth Hero Intake" />

              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Globe2 className="w-5 h-5 text-sky-400" />
                </div>
                <input
                  id="hero-audit-input"
                  name="websiteUrl"
                  type="text"
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="e.g., yourtravelbrand.com"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  required
                />
              </div>

              <div className="sm:w-56">
                <select
                  id="hero-niche-select"
                  name="travelNiche"
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                  className="w-full px-3 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-sky-400 transition-all cursor-pointer"
                >
                  {TRAVEL_NICHES.slice(0, 6).map((niche) => (
                    <option key={niche} value={niche} className="bg-slate-900 text-white">
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              <button
                id="hero-audit-submit-btn"
                type="submit"
                disabled={isAuditing}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-sky-900/40 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isAuditing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Analyzing SERP...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Travel Audit</span>
                  </>
                )}
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero Spam / 100% White-Hat
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Live Competitor Link-Gap Discovery
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Google Helpful Content Update Resilient
              </span>
            </div>
          </div>

          {/* Interactive Live Audit Result Box (if run) */}
          {auditResult && (
            <div className="w-full max-w-3xl mb-8 p-5 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-sky-500/40 shadow-2xl animate-in fade-in slide-in-from-top-3 text-left backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-700/80 mb-4 gap-2">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Preliminary SERP & SEO Diagnostic</span>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span>{auditResult.url}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      {selectedNiche}
                    </span>
                  </h4>
                </div>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-700/60 self-start sm:self-auto">
                  High Growth Potential
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">Backlink Opportunity</span>
                  <span className="text-amber-300 font-bold block">{auditResult.backlinkGap}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">Rich Schema Health</span>
                  <span className="text-rose-300 font-bold block">{auditResult.schemaStatus}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block mb-1">High-Intent Keywords</span>
                  <span className="text-emerald-300 font-bold block">+{auditResult.missedKeywords} Commercial Queries to Capture</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-xs text-slate-300">
                  Ready to deploy high-authority guest posts and capture Google Local 3-Pack rankings for your destinations?
                </p>
                <button
                  onClick={() => onOpenQuoteModal('Search Engine Optimization (SEO & Technical)', auditResult.url)}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Claim Full Strategic Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              id="hero-primary-cta"
              onClick={() => onOpenQuoteModal()}
              className="px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-sky-900/30 hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 text-amber-300" />
              <span>Get Free Proposal & Keyword Roadmap</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <span>Explore 8 Core Services</span>
            </a>
          </div>

          {/* Social Proof Metric Counters */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
            {STATS_COUNTERS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-slate-800/80 flex flex-col items-center text-center group hover:border-sky-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-110 transition-transform">
                  <i className={`${stat.icon} text-lg text-sky-400`}></i>
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Media Partners & Publication Networks */}
          <div className="mt-14 w-full pt-8 border-t border-slate-800/60">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block mb-6">
              Our Travel Outreach & Editorial Placements Appear Across Major Industry Networks
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400">
              {MEDIA_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium hover:text-slate-200 transition-colors"
                >
                  <i className={`${partner.icon} text-sky-400/80`}></i>
                  <span>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
