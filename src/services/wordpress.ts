import {
  WordPressPost,
  WordPressCategory,
  WordPressFeaturedImage,
  WordPressAuthor,
  PaginatedPostsResponse,
  PaginationInfo,
  FormattedBlogPost,
} from '../types/wordpress';

// Centralized API configuration using Vite environment variables
const API_BASE_URL =
  (import.meta.env.VITE_WORDPRESS_API_URL as string) ||
  'https://traveltheearth.info/wp-json/wp/v2';

const DEFAULT_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=700&q=80';

const DEFAULT_AUTHOR = {
  name: 'TravelTheEarth Editorial',
  role: 'Travel SEO & Growth Specialist',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
};

// In-memory request cache to minimize redundant network roundtrips
const requestCache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL_MS = 60 * 1000; // 1 minute in-memory cache

/**
 * Utility to decode HTML entities (e.g., &#8217; &amp;) safely
 */
export function decodeHtmlEntities(html: string): string {
  if (!html) return '';
  const textarea = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  if (textarea) {
    textarea.innerHTML = html;
    return textarea.value;
  }
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&hellip;/g, '...');
}

/**
 * Strips HTML tags from an excerpt or content string
 */
export function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/\[&hellip;\]/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Calculates estimated read time from word count
 */
export function calculateReadTime(text: string): string {
  const plainText = stripHtml(text);
  const words = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Formats ISO date to human-readable format e.g. "Sept 25, 2026"
 */
export function formatPostDate(isoDate: string): string {
  try {
    const d = new Date(isoDate);
    if (isNaN(d.getTime())) return isoDate;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return isoDate;
  }
}

/**
 * Normalizes a raw WordPressPost into a clean FormattedBlogPost
 */
export function formatWordPressPost(post: WordPressPost): FormattedBlogPost {
  const decodedTitle = decodeHtmlEntities(post.title?.rendered || 'Untitled Post');
  const cleanExcerptText = decodeHtmlEntities(stripHtml(post.excerpt?.rendered || ''));

  // Extract featured image from embedded data or fallback
  let imageUrl = DEFAULT_FALLBACK_IMAGE;
  let imageAlt = decodedTitle;

  const embeddedMedia = post._embedded?.['wp:featuredmedia']?.[0] as WordPressFeaturedImage | undefined;
  if (embeddedMedia) {
    // Prefer large size if available, otherwise source_url
    imageUrl =
      embeddedMedia.media_details?.sizes?.large?.source_url ||
      embeddedMedia.media_details?.sizes?.medium_large?.source_url ||
      embeddedMedia.source_url ||
      DEFAULT_FALLBACK_IMAGE;

    if (embeddedMedia.alt_text) {
      imageAlt = embeddedMedia.alt_text;
    }
  }

  // Extract author safely
  let authorName = DEFAULT_AUTHOR.name;
  let authorRole = DEFAULT_AUTHOR.role;
  let authorAvatar = DEFAULT_AUTHOR.avatar;

  const embeddedAuthorRaw = post._embedded?.author?.[0];
  if (embeddedAuthorRaw && 'name' in embeddedAuthorRaw && typeof embeddedAuthorRaw.name === 'string') {
    const authorObj = embeddedAuthorRaw as WordPressAuthor;
    authorName = authorObj.name;
    if (authorObj.description) {
      authorRole = authorObj.description;
    }
    if (authorObj.avatar_urls) {
      authorAvatar =
        authorObj.avatar_urls['96'] ||
        authorObj.avatar_urls['48'] ||
        DEFAULT_AUTHOR.avatar;
    }
  }

  // Extract categories & tags from _embedded['wp:term']
  const categoriesList: Array<{ id: number; name: string; slug: string }> = [];
  const tagsList: Array<{ id: number; name: string; slug: string }> = [];

  const terms = post._embedded?.['wp:term'];
  if (Array.isArray(terms)) {
    // Term[0] is typically categories
    if (Array.isArray(terms[0])) {
      terms[0].forEach((item) => {
        if ('name' in item) {
          categoriesList.push({
            id: item.id,
            name: decodeHtmlEntities(item.name),
            slug: item.slug,
          });
        }
      });
    }
    // Term[1] is typically tags
    if (Array.isArray(terms[1])) {
      terms[1].forEach((item) => {
        if ('name' in item) {
          tagsList.push({
            id: item.id,
            name: decodeHtmlEntities(item.name),
            slug: item.slug,
          });
        }
      });
    }
  }

  const primaryCategory = categoriesList.length > 0 ? categoriesList[0] : { name: 'Travel Strategy', slug: 'travel-strategy' };

  return {
    id: post.id,
    slug: post.slug,
    title: decodedTitle,
    rawTitle: post.title?.rendered || '',
    excerpt: post.excerpt?.rendered || '',
    cleanExcerpt: cleanExcerptText,
    contentHtml: post.content?.rendered || '',
    date: post.date,
    formattedDate: formatPostDate(post.date),
    modifiedDate: post.modified,
    authorName,
    authorRole,
    authorAvatar,
    imageUrl,
    imageAlt,
    categoryName: primaryCategory.name,
    categorySlug: primaryCategory.slug,
    categories: categoriesList,
    tags: tagsList,
    readTime: calculateReadTime(post.content?.rendered || post.excerpt?.rendered || ''),
    link: post.link,
    yoast: post.yoast_head_json,
  };
}

/**
 * Core cached fetcher with network resilience
 */
async function fetchFromWordPress<T>(endpoint: string, options?: RequestInit): Promise<{ data: T; headers: Headers }> {
  const cacheKey = `${API_BASE_URL}${endpoint}`;
  const cached = requestCache.get(cacheKey);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    return { data: cached.data as T, headers: new Headers() };
  }

  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed: ${response.status} ${response.statusText} (${url})`);
  }

  const data = (await response.json()) as T;
  requestCache.set(cacheKey, { data, timestamp: now });

  return { data, headers: response.headers };
}

/**
 * Fetch paginated WordPress posts with optional category, search, and page parameters
 */
export async function getWordPressPosts(params?: {
  page?: number;
  perPage?: number;
  categoryId?: number;
  search?: string;
  tagId?: number;
}): Promise<PaginatedPostsResponse> {
  const page = params?.page || 1;
  const perPage = params?.perPage || 9;

  const queryParams = new URLSearchParams({
    _embed: '1',
    page: page.toString(),
    per_page: perPage.toString(),
  });

  if (params?.categoryId) {
    queryParams.append('categories', params.categoryId.toString());
  }

  if (params?.search && params.search.trim()) {
    queryParams.append('search', params.search.trim());
  }

  if (params?.tagId) {
    queryParams.append('tags', params.tagId.toString());
  }

  const endpoint = `/posts?${queryParams.toString()}`;
  const { data: posts, headers } = await fetchFromWordPress<WordPressPost[]>(endpoint);

  const totalPostsHeader = headers.get('X-WP-Total') || headers.get('x-wp-total');
  const totalPagesHeader = headers.get('X-WP-TotalPages') || headers.get('x-wp-totalpages');

  const totalPosts = totalPostsHeader ? parseInt(totalPostsHeader, 10) : posts.length;
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : Math.ceil(totalPosts / perPage);

  const pagination: PaginationInfo = {
    totalPosts: isNaN(totalPosts) ? posts.length : totalPosts,
    totalPages: isNaN(totalPages) ? 1 : totalPages,
    currentPage: page,
    perPage,
    hasNextPage: page < (isNaN(totalPages) ? 1 : totalPages),
    hasPrevPage: page > 1,
  };

  return {
    posts,
    pagination,
  };
}

/**
 * Fetch a single WordPress post by its slug with embedded media, author, and categories
 */
export async function getWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  const cleanSlug = encodeURIComponent(slug.trim());
  const endpoint = `/posts?slug=${cleanSlug}&_embed=1`;

  const { data: posts } = await fetchFromWordPress<WordPressPost[]>(endpoint);
  if (!posts || posts.length === 0) {
    return null;
  }
  return posts[0];
}

/**
 * Fetch all categories from WordPress
 */
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const endpoint = '/categories?per_page=100&hide_empty=false';
    const { data: categories } = await fetchFromWordPress<WordPressCategory[]>(endpoint);
    return categories || [];
  } catch (err) {
    console.error('Failed to fetch WordPress categories:', err);
    return [];
  }
}

/**
 * Fetch a category by its slug
 */
export async function getWordPressCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
  try {
    const categories = await getWordPressCategories();
    return categories.find((c) => c.slug === slug) || null;
  } catch {
    return null;
  }
}
