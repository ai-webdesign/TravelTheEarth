import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { CORE_SERVICES } from '../data/agencyData';

interface FooterProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      {/* Main Directory Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <a href="https://traveltheearth.info/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center text-slate-950 font-bold">
              <i className="fa-solid fa-earth-americas text-base"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
              Travel<span className="text-sky-400">TheEarth</span>
            </span>
          </a>

          <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
            TravelTheEarth is a premier full-service digital marketing agency dedicated exclusively to travel, hospitality, and tourism enterprises. We combine white-hat authority guest posting, technical travel SEO, Google Business Profile local rank, and custom AI web applications.
          </p>

          <div className="space-y-2 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Global Remote Agency • Serving Clients in 35+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href="https://wa.me/8801918820001" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors font-medium">
                Phone & WhatsApp: +880 1918-820001
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="mailto:gpostrequest@gmail.com" className="hover:text-white transition-colors">
                gpostrequest@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="https://traveltheearth.info/" className="hover:text-white transition-colors">
                https://traveltheearth.info/
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <a
              href="https://www.facebook.com/mamunjuel1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mamunjuel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/seoexpert_UF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/8801918820001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
            </a>
          </div>
        </div>

        {/* 8 Core Services Column 1 */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
            Authority & SEO
          </span>
          <ul className="space-y-2.5">
            <li>
              <button
                onClick={() => onOpenQuoteModal('Guest Posting & Outreach')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Guest Posting & Outreach
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('Search Engine Optimization (SEO & Technical SEO)')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                SEO & Technical SEO
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('Google Business Profile (GBP Optimization & Local SEO)')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Google Business Profile (GBP)
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('Press Releases (PR Distribution)')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Press Releases (PR Wire)
              </button>
            </li>
          </ul>
        </div>

        {/* 8 Core Services Column 2 */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
            Content & Development
          </span>
          <ul className="space-y-2.5">
            <li>
              <button
                onClick={() => onOpenQuoteModal('Blog Writing & Strategy')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Blog Writing & Strategy
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('Content Writing & Copywriting')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Content Writing & Copywriting
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('Web Design (UI/UX & Responsive Development)')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                Web Design (UI/UX)
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal('AI Web Development & Automation')}
                className="hover:text-sky-400 transition-colors text-left"
              >
                AI Web Development & Automation
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Nav & Resources */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
            Site Navigation
          </span>
          <ul className="space-y-2.5">
            <li>
              <a href="index.html" className="hover:text-sky-400 transition-colors font-medium text-slate-300">
                Home →
              </a>
            </li>
            <li>
              <a href="about.html" className="hover:text-sky-400 transition-colors font-medium text-slate-300">
                About Us →
              </a>
            </li>
            <li>
              <a href="services.html" className="hover:text-sky-400 transition-colors font-medium text-slate-300">
                Services (All 8 Core) →
              </a>
            </li>
            <li>
              <a href="blog.html" className="hover:text-sky-400 transition-colors font-medium text-slate-300">
                Blog & Resource Center →
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-sky-400 transition-colors font-medium text-slate-300">
                Contact Us →
              </a>
            </li>
            <li>
              <a href="#case-studies" className="hover:text-sky-400 transition-colors">
                Client Case Studies
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-sky-400 transition-colors">
                Latest Blog Insights
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-sky-400 transition-colors">
                Travel SEO FAQs
              </a>
            </li>
            <li>
              <button
                onClick={() => onOpenQuoteModal()}
                className="text-amber-400 font-semibold hover:underline text-left"
              >
                Get Free Travel Audit →
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal & Copyright */}
      <div className="border-t border-slate-850 bg-slate-950 py-6 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-2">
            <span>© 2026 All Rights Reserved | Designed & Managed by Mahfuz Rahman</span>
            <span className="text-slate-600">|</span>
            <a href="https://traveltheearth.info/" className="text-sky-400 hover:underline">
              traveltheearth.info
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Editorial & Outreach Ethics</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Google Compliance Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
