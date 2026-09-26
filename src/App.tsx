import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { SinglePostPage } from './pages/SinglePostPage';
import { CategoryPage } from './pages/CategoryPage';

// Auto-scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Redirects client-side to static HTML pages
function RedirectToStatic({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-xs font-medium">Navigating to page...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        {/* Dynamic WordPress Blog Routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/" element={<BlogPage />} />
        <Route path="/blog.html" element={<BlogPage />} />
        
        {/* Single Blog Post */}
        <Route path="/blog/:slug" element={<SinglePostPage />} />
        <Route path="/blog/:slug/" element={<SinglePostPage />} />

        {/* Category Archives */}
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/category/:categorySlug/" element={<CategoryPage />} />

        {/* Static HTML Routes */}
        <Route path="/about" element={<RedirectToStatic url="/about.html" />} />
        <Route path="/about/" element={<RedirectToStatic url="/about.html" />} />
        <Route path="/services" element={<RedirectToStatic url="/services.html" />} />
        <Route path="/services/" element={<RedirectToStatic url="/services.html" />} />
        <Route path="/contact" element={<RedirectToStatic url="/contact.html" />} />
        <Route path="/contact/" element={<RedirectToStatic url="/contact.html" />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
