export interface WordPressRenderedField {
  rendered: string;
  protected?: boolean;
}

export interface WordPressMediaSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface WordPressFeaturedImage {
  id: number;
  date?: string;
  slug?: string;
  type?: string;
  link?: string;
  title?: WordPressRenderedField;
  author?: number;
  caption?: WordPressRenderedField;
  alt_text?: string;
  media_type?: string;
  mime_type?: string;
  source_url: string;
  media_details?: {
    width?: number;
    height?: number;
    file?: string;
    sizes?: {
      thumbnail?: WordPressMediaSize;
      medium?: WordPressMediaSize;
      medium_large?: WordPressMediaSize;
      large?: WordPressMediaSize;
      full?: WordPressMediaSize;
      [key: string]: WordPressMediaSize | undefined;
    };
  };
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url?: string;
  description?: string;
  link?: string;
  slug?: string;
  avatar_urls?: {
    '24'?: string;
    '48'?: string;
    '96'?: string;
  };
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WordPressTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WordPressEmbeddedData {
  author?: Array<WordPressAuthor | { code?: string; message?: string; data?: { status: number } }>;
  'wp:featuredmedia'?: WordPressFeaturedImage[];
  'wp:term'?: Array<Array<WordPressCategory | WordPressTag>>;
}

export interface WordPressYoastHeadJson {
  title?: string;
  description?: string;
  robots?: {
    index?: string;
    follow?: string;
    [key: string]: unknown;
  };
  canonical?: string;
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  og_image?: Array<{
    url: string;
    width?: number;
    height?: number;
    type?: string;
  }>;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  schema?: Record<string, unknown>;
}

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  guid?: WordPressRenderedField;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WordPressRenderedField;
  content: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  author: number;
  featured_media: number;
  comment_status?: string;
  ping_status?: string;
  sticky: boolean;
  template?: string;
  format?: string;
  categories: number[];
  tags: number[];
  _embedded?: WordPressEmbeddedData;
  yoast_head?: string;
  yoast_head_json?: WordPressYoastHeadJson;
}

export interface PaginationInfo {
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedPostsResponse {
  posts: WordPressPost[];
  pagination: PaginationInfo;
}

export interface FormattedBlogPost {
  id: number;
  slug: string;
  title: string;
  rawTitle: string;
  excerpt: string;
  cleanExcerpt: string;
  contentHtml: string;
  date: string;
  formattedDate: string;
  modifiedDate: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  imageUrl: string;
  imageAlt: string;
  categoryName: string;
  categorySlug: string;
  categories: Array<{ id: number; name: string; slug: string }>;
  tags: Array<{ id: number; name: string; slug: string }>;
  readTime: string;
  link: string;
  yoast?: WordPressYoastHeadJson;
}
