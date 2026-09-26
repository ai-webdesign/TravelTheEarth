/**
 * Dynamic SEO and OpenGraph metadata updater for React pages
 */
export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  authorName?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, unknown>;
}

export function updatePageSeo(meta: SeoMetadata): void {
  if (typeof document === 'undefined') return;

  // Title
  document.title = meta.title;

  // Helper to create or update meta tags
  const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta
  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);

  // Canonical Link
  const currentUrl = meta.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://traveltheearth.info/');
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', currentUrl);

  // Open Graph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', meta.ogType || 'website');

  const defaultOgImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=630&q=80';
  const ogImg = meta.ogImage || defaultOgImage;
  setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImg);

  // Twitter / X
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImg);

  // Article specific OG tags
  if (meta.ogType === 'article') {
    if (meta.publishedTime) {
      setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', meta.publishedTime);
    }
    if (meta.modifiedTime) {
      setMetaTag('meta[property="article:modified_time"]', 'property', 'article:modified_time', meta.modifiedTime);
    }
    if (meta.authorName) {
      setMetaTag('meta[property="article:author"]', 'property', 'article:author', meta.authorName);
    }
  }

  // Schema.org Structured Data
  let schemaScript = document.getElementById('dynamic-jsonld-schema') as HTMLScriptElement | null;
  if (meta.schema) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-jsonld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(meta.schema);
  } else if (schemaScript) {
    schemaScript.remove();
  }
}
