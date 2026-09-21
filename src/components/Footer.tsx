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
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="tel:+18008728350" className="hover:text-white transition-colors">
                Toll-Free: +1 (800) 872-8350
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <a href="mailto:contact@traveltheearth.info" className="hover:text-white transition-colors">
                contact@traveltheearth.info
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
              href="https://twitter.com/traveltheearthinfo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://linkedin.com/company/traveltheearth"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://facebook.com/traveltheearthinfo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/traveltheearthinfo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
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
            <span>© {new Date().getFullYear()} TravelTheEarth Digital Agency. All rights reserved.</span>
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
