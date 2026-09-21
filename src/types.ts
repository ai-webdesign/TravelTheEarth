export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  iconName: string; // FontAwesome icon class, e.g. "fa-solid fa-paper-plane"
  lucideIcon: string;
  colorAccent: 'blue' | 'green' | 'amber' | 'cyan';
  metric: string;
  metricLabel: string;
  headline: string;
  description: string;
  fullBody: string[];
  deliverables: string[];
  targetAudience: string;
  deliverablesSummary: string;
  pricingStarting: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  location: string;
  badge: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

export interface FAQItem {
  id: string;
  question: string;
  category: string;
  answer: string;
  keywords: string[];
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  actions: string[];
  deliverable: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  websiteUrl: string;
  travelNiche: string;
  servicesNeeded: string[];
  monthlyBudget: string;
  currentTraffic: string;
  timeline: string;
  notes: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  tags: string[];
  imageUrl: string;
  keyTakeaways: string[];
}
