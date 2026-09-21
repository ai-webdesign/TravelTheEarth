import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Mail, 
  Globe, 
  Layers, 
  MessageSquare, 
  CheckCircle2, 
  Phone,
  Send
} from 'lucide-react';
import { CORE_SERVICES } from '../data/agencyData';

interface CtaLeadSectionProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const CtaLeadSection: React.FC<CtaLeadSectionProps> = ({ onOpenQuoteModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    service: 'Guest Posting & Outreach',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.websiteUrl.trim()) return;

    setIsSubmitting(true);
    const formElement = e.currentTarget;
    const submissionData = new FormData(formElement);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData
    })
      .catch((err) => {
        console.warn("Web3Forms lead notice:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      websiteUrl: '',
      service: 'Guest Posting & Outreach',
      message: ''
    });
    setIsSuccess(false);
  };

  return (
    <section 
      id="lead-cta"
      className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 relative border-b border-slate-800/80 overflow-hidden"
    >
      {/* Ambient background glows matching theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-600/15 via-emerald-600/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-xs font-semibold text-sky-400 mb-5 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Ready for Top Travel Rankings?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit'] mb-5 leading-tight">
            Stop Losing Direct Bookings to <span className="text-gradient-ocean">High-Commission OTAs</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Claim your customized travel website audit, competitor link-gap analysis, and tailored growth proposal. Our senior travel SEO team will reveal exact ranking opportunities for your destinations.
          </p>
        </div>

        {/* Interactive Lead Capture Form Container */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/30 shadow-2xl relative overflow-hidden bg-slate-900/90 backdrop-blur-xl">
          
          {isSuccess ? (
            <div className="py-10 px-4 text-center max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/40 shadow-lg shadow-emerald-950/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-3">
                Lead Audit Request Confirmed!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our travel SEO strategists have queued an analysis for <strong className="text-sky-400">{formData.websiteUrl}</strong> regarding <strong className="text-emerald-400">{formData.service}</strong>. You will receive your tailored link-gap audit and actionable roadmap within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 text-left space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Email:</span>
                  <span className="text-slate-200 font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Service:</span>
                  <span className="text-amber-300 font-semibold">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Website:</span>
                  <span className="text-sky-300 font-mono">{formData.websiteUrl}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
                {onOpenQuoteModal && (
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(formData.service)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Open Comprehensive Pricing Builder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-5 text-left"
            >
              {/* Web3Forms Configuration: Delivers submissions to gpostrequest@gmail.com */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="to_email" value="gpostrequest@gmail.com" />
              <input type="hidden" name="subject" value="New Free Strategy & Audit Request - TravelTheEarth" />
              <input type="hidden" name="from_name" value="TravelTheEarth Lead Desk" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block">
                    Direct Agency Lead Capture
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
                    Request Your Free Strategy & Audit
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-700/60 self-start sm:self-auto">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>24-Hour Turnaround</span>
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* 1. Name */}
                <div>
                  <label htmlFor="cta-lead-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4 text-sky-400" />
                    </div>
                    <input
                      id="cta-lead-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full pl-10 pr-3.5 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                {/* 2. Email */}
                <div>
                  <label htmlFor="cta-lead-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work Email <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4 text-sky-400" />
                    </div>
                    <input
                      id="cta-lead-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@yourtravelagency.com"
                      className="w-full pl-10 pr-3.5 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                {/* 3. Website URL */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <label htmlFor="cta-lead-website" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Website URL <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Globe className="w-4 h-4 text-sky-400" />
                    </div>
                    <input
                      id="cta-lead-website"
                      name="websiteUrl"
                      type="text"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://yourtravelbrand.com"
                      className="w-full pl-10 pr-3.5 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* 4. Service Dropdown */}
              <div>
                <label htmlFor="cta-lead-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Primary Service Needed <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Layers className="w-4 h-4 text-emerald-400" />
                  </div>
                  <select
                    id="cta-lead-service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all cursor-pointer"
                  >
                    {CORE_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                        {srv.title} ({srv.shortTag})
                      </option>
                    ))}
                    <option value="Full Agency Growth Retainer (All Services)" className="bg-slate-900 text-amber-300 font-semibold">
                      ★ Full Agency Growth Retainer (All 8 Core Services)
                    </option>
                  </select>
                </div>
              </div>

              {/* 5. Message */}
              <div>
                <label htmlFor="cta-lead-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message & Growth Goals (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4 h-4 text-sky-400" />
                  </div>
                  <textarea
                    id="cta-lead-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your target destinations, current keyword rankings, or challenges competing against OTAs..."
                    className="w-full pl-10 pr-3.5 py-3 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button & Direct Call Line */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="cta-lead-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-4 px-8 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-sky-900/40 hover:scale-[1.01] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing Your Travel Niche...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Send Message & Claim Free Travel SEO Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href="tel:+18008728350"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call +1 (800) 872-8350</span>
                </a>
              </div>

              {/* Trust badges footer */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  No Contracts Required
                </span>
                <span>•</span>
                <span>Guaranteed Live Indexation</span>
                <span>•</span>
                <span>100% White-Hat Outreach</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
