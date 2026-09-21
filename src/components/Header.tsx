import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: 'index.html' },
    { label: 'About Us', href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Blog', href: 'blog.html' },
    { label: 'Contact Us', href: 'contact.html' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top micro-bar for agency trust */}
      <div className="hidden lg:block border-b border-slate-800/40 pb-2 mb-2 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting Q2/Q3 Travel Clients
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              100% White-Hat Travel Outreach Guarantee
            </span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 pr-3 border-r border-slate-800">
              <a
                href="https://www.facebook.com/mamunjuel1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                <i className="fa-brands fa-facebook-f text-[11px]"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mamunjuel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin-in text-[11px]"></i>
              </a>
              <a
                href="https://twitter.com/seoexpert_UF"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                <i className="fa-brands fa-x-twitter text-[11px]"></i>
              </a>
            </div>
            <a
              href="https://wa.me/8801918820001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              +880 1918-820001
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:gpostrequest@gmail.com"
              className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              gpostrequest@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="https://traveltheearth.info/"
          className="flex items-center gap-3 group"
          aria-label="TravelTheEarth Digital Agency Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 via-emerald-600 to-amber-500 p-0.5 shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-sky-400">
              <i className="fa-solid fa-earth-americas text-lg text-gradient-earth group-hover:rotate-12 transition-transform duration-500"></i>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1 font-['Outfit']">
              Travel<span className="text-sky-400">TheEarth</span>
              <span className="text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/60 ml-1">
                Agency
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide">
              Travel SEO & Digital Growth
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-sky-400 transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-quote-btn"
            onClick={() => onOpenQuoteModal()}
            className="relative group px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all duration-300 shadow-md shadow-sky-900/30 hover:shadow-lg hover:shadow-sky-500/25 flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 mt-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Free Quote & Audit</span>
              </button>
              <div className="text-xs text-slate-400 flex flex-col gap-1 text-center mt-2">
                <span>Direct Line: +1 (800) 872-8350</span>
                <span>contact@traveltheearth.info</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
