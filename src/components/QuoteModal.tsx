import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, ArrowRight, ShieldCheck, Globe, Mail, User, Phone } from 'lucide-react';
import { CORE_SERVICES, TRAVEL_NICHES } from '../data/agencyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialWebsiteUrl?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  initialWebsiteUrl = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    websiteUrl: initialWebsiteUrl,
    travelNiche: TRAVEL_NICHES[0],
    servicesNeeded: preselectedService ? [preselectedService] : ['Guest Posting & Outreach', 'Search Engine Optimization (SEO & Technical SEO)'],
    monthlyBudget: '$1,500 - $3,500 / mo',
    currentTraffic: '5k - 20k visitors / mo',
    timeline: 'Immediate (Next 14 Days)',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(serviceTitle);
      return {
        ...prev,
        servicesNeeded: exists
          ? prev.servicesNeeded.filter((s) => s !== serviceTitle)
          : [...prev.servicesNeeded, serviceTitle]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const submissionData = new FormData(formElement);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submissionData
    })
      .catch((err) => {
        console.warn("Web3Forms quote notice:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/40 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-['Outfit'] mb-2">
              Proposal Request Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{formData.fullName || 'Travel Partner'}</strong>. Our travel SEO strategists are conducting your preliminary backlink audit for <strong className="text-sky-400">{formData.websiteUrl || 'your domain'}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md w-full mb-6 text-left space-y-1">
              <div><span className="text-slate-500">Selected Services:</span> {formData.servicesNeeded.join(', ')}</div>
              <div><span className="text-slate-500">Travel Niche:</span> {formData.travelNiche}</div>
              <div><span className="text-slate-500">Expected Delivery:</span> Within 24 Business Hours (PDF & Loom Video)</div>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 transition-all cursor-pointer"
            >
              Back to TravelTheEarth
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Tailored Travel Growth Proposal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-2">
              Get Your Free Travel SEO Audit & Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Tell us about your travel brand, destination targets, and growth goals. We will deliver a customized competitor link-gap audit and actionable keyword roadmap within 24 hours.
            </p>

            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* Web3Forms Configuration: Delivers quote inquiries to gpostrequest@gmail.com */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="to_email" value="gpostrequest@gmail.com" />
              <input type="hidden" name="subject" value="Custom Travel SEO Proposal & Quote Request - TravelTheEarth" />
              <input type="hidden" name="from_name" value="TravelTheEarth Quote Intake" />
              <input type="hidden" name="servicesNeeded" value={formData.servicesNeeded.join(', ')} />
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Work Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@yourresort.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Website URL & Travel Niche */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Website URL *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="websiteUrl"
                      required
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      placeholder="https://yourtravelwebsite.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Travel Niche / Industry
                  </label>
                  <select
                    name="travelNiche"
                    value={formData.travelNiche}
                    onChange={(e) => setFormData({ ...formData, travelNiche: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                  >
                    {TRAVEL_NICHES.map((niche) => (
                      <option key={niche} value={niche} className="bg-slate-900">
                        {niche}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Multi-Select Core Services */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Core Services of Interest (Select All That Apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CORE_SERVICES.map((s) => {
                    const isSelected = formData.servicesNeeded.includes(s.title);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.title)}
                        className={`p-2 rounded-xl text-left text-xs font-medium border flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-sky-950/80 border-sky-500 text-sky-200'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                            isSelected
                              ? 'bg-sky-500 border-sky-400 text-white'
                              : 'border-slate-700 bg-slate-900'
                          }`}
                        >
                          {isSelected && '✓'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Monthly Marketing Budget
                  </label>
                  <select
                    name="monthlyBudget"
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                  >
                    <option value="$800 - $1,500 / mo">$800 - $1,500 / mo (Starter Outreach)</option>
                    <option value="$1,500 - $3,500 / mo">$1,500 - $3,500 / mo (Authority Growth)</option>
                    <option value="$3,500 - $7,500 / mo">$3,500 - $7,500 / mo (Aggressive Domination)</option>
                    <option value="$7,500+ / mo">$7,500+ / mo (Enterprise / Global Brands)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Desired Kickoff Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                  >
                    <option value="Immediate (Next 14 Days)">Immediate (Next 14 Days)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Exploring Next Quarter">Exploring Next Quarter</option>
                  </select>
                </div>
              </div>

              {/* Additional Context */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Challenges / Key Destinations (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. We want to rank for 'luxury safari Tanzania' and outrank OTAs on Google Maps..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-900/30 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Analyzing Your Travel Footprint...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request for Free Audit & Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 mt-3">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    100% Confidential
                  </span>
                  <span>•</span>
                  <span>No Obligation Proposal</span>
                  <span>•</span>
                  <span>Zero Spam Guarantee</span>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
