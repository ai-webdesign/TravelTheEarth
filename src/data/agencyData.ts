import { ServiceItem, ProcessStep, FAQItem, CaseStudy } from '../types';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'guest-posting',
    title: 'Guest Posting & Outreach',
    shortTag: 'High-DA Authority Links',
    iconName: 'fa-solid fa-paper-plane',
    lucideIcon: 'Send',
    colorAccent: 'blue',
    metric: 'DR 45-85+',
    metricLabel: 'Verified Real Travel Portals',
    headline: 'Contextual, White-Hat Travel Backlinks That Move Rankings in Competitive Niches',
    description:
      'Supercharge your travel domain authority with genuine editorial placements on real, actively trafficked travel blogs, boutique hotel magazines, destination portals, and lifestyle publications.',
    fullBody: [
      'In the competitive travel and hospitality ecosystem, search engines demand rigorous topical relevance. Generic backlinks from multi-topic link farms not only trigger algorithmic penalties but fail to pass meaningful ranking power. TravelTheEarth conducts manual, publisher-direct outreach to vetted travel editors, destination bloggers, and hospitality media networks.',
      'Every placement is hand-curated to match your destination focus, whether luxury safari expeditions, European boutique hotels, cruise travel agencies, or travel tech SaaS. We craft original, publication-standard 1,200+ word editorial articles with natural contextual anchors that seamlessly position your brand as the authoritative travel solution.',
      'Our team guarantees permanent dofollow links, strict anti-PBN validation, minimum 5,000+ monthly organic search traffic per hosting domain, and complete transparent live reporting with indexed URL verification.'
    ],
    deliverables: [
      '100% manual, white-hat outreach to verified travel webmasters & editors',
      'Minimum Domain Rating (DR) 45+ and organic traffic >5k/mo on Ahrefs/Semrush',
      'Original, travel-specialist 1,200+ word editorial content tailored per publication',
      'Contextual, natural anchor text distribution protecting your backlink profile',
      'Real-time spreadsheet tracking with live URL, anchor, DR, and indexing status'
    ],
    targetAudience: 'Tour operators, travel SaaS, adventure agencies, luxury resorts, and high-growth travel media.',
    deliverablesSummary: '5 to 25+ High-DA contextual links/month, tailored editorial copy, full indexing warranty.',
    pricingStarting: 'From $450 / custom outreach tier'
  },
  {
    id: 'blog-writing-strategy',
    title: 'Blog Writing & Strategy',
    shortTag: 'Topical Authority Content',
    iconName: 'fa-solid fa-compass-drafting',
    lucideIcon: 'Compass',
    colorAccent: 'green',
    metric: 'Topical Clusters',
    metricLabel: 'Pillar & Cluster Framework',
    headline: 'High-Intent Travel Editorial Strategies That Capture Travellers at Every Stage of Booking',
    description:
      'Turn search intent into confirmed travel bookings with programmatic and human-crafted destination guides, packing checklists, seasonal itineraries, and pillar content clusters.',
    fullBody: [
      'A successful travel publication is not built on disjointed, sporadic blog posts. It requires a mathematically structured topical cluster model that proves semantic mastery to search algorithms while answering the hyper-specific queries modern travellers type before booking flights, hotels, and guided tours.',
      'Our travel content strategists combine competitive SERP gap analysis, semantic entity mapping, and seasonal trend forecasting. We map out primary pillar pages (e.g., "Ultimate 14-Day Japan Itinerary") supported by spoke articles ("Hidden Onsens in Hakone", "Japan Rail Pass Worth It in 2026?").',
      'Every post is enriched with curated photography recommendations, structured itineraries, quick-glance comparison tables, and frictionless call-to-actions designed to capture email leads, tour inquiries, and direct affiliate reservations.'
    ],
    deliverables: [
      'Comprehensive travel topical authority roadmaps & 6-month editorial calendar',
      'In-depth search intent mapping (commercial, navigational, transactional keywords)',
      '1,500 - 3,500 word deeply researched destination guides & comparison articles',
      'Semantic internal linking hierarchies passing link equity to core booking pages',
      'Custom meta descriptions, OG social preview copy, and optimized image alt structures'
    ],
    targetAudience: 'Destination marketing organizations, travel influencers, booking platforms, travel blogs.',
    deliverablesSummary: 'Strategic content calendar, 4-12 long-form cluster articles/month, internal linking map.',
    pricingStarting: 'From $650 / month strategy'
  },
  {
    id: 'press-releases',
    title: 'Press Releases (PR Distribution)',
    shortTag: 'Syndicated News Distribution',
    iconName: 'fa-solid fa-bullhorn',
    lucideIcon: 'Megaphone',
    colorAccent: 'amber',
    metric: '400+ Outlets',
    metricLabel: 'AP News, Yahoo Finance & Travel Media',
    headline: 'Authoritative Media Syndication for Resort Launches, Tour Expansions & Travel Milestones',
    description:
      'Gain instant corporate credibility and authoritative media citations through premier travel and business news distribution networks including Associated Press, regional newsrooms, and tourism trade feeds.',
    fullBody: [
      'When your travel brand launches an eco-lodge, introduces novel adventure itineraries, secures hospitality awards, or rolls out innovative booking technology, a standard blog post is insufficient. High-tier press releases place your company directly before travel journalists, tour buyers, and corporate partners.',
      'Our veteran PR copywriters craft journalistic, AP-style press releases that pass stringent editorial compliance checks. We avoid promotional fluff, structuring compelling narratives around industry innovations, sustainability initiatives, and market disruption that travel reporters want to syndicate.',
      'Through partnerships with premier wire networks, your announcement is broadcast across 400+ tier-1 news portals, business journals, local media affiliates, and Google News aggregators, creating rapid branded search signals and valuable citations.'
    ],
    deliverables: [
      'AP-standard press release drafting by seasoned travel & hospitality publicists',
      'Guaranteed syndication across 400+ recognized news outlets & Google News feeds',
      'Inclusion of high-resolution imagery, video embeds, and live brand links',
      'Social media amplification and targeted distribution to verified travel journalists',
      'Comprehensive distribution verification report with live media links & audience reach metrics'
    ],
    targetAudience: 'Hotels & resorts, travel tech startups, regional tourism boards, luxury tour companies.',
    deliverablesSummary: 'Complete AP drafting, editorial approvals, 400+ outlet wire syndication, executive PDF report.',
    pricingStarting: 'From $550 / release campaign'
  },
  {
    id: 'content-writing-copywriting',
    title: 'Content Writing & Copywriting',
    shortTag: 'High-Converting Sales Copy',
    iconName: 'fa-solid fa-pen-nib',
    lucideIcon: 'PenTool',
    colorAccent: 'cyan',
    metric: '+42% Conv.',
    metricLabel: 'Average Landing Page Lift',
    headline: 'Evocative, Sensory Travel Copywriting That Converts Passive Dreamers Into Active Bookers',
    description:
      'Elevate tour descriptions, hotel landing pages, promotional email sequences, and destination brochures with persuasive travel copy that evokes emotion and drives instant reservations.',
    fullBody: [
      'Travel is fundamentally an emotional purchase. Travellers do not purchase flight tickets or hotel rooms; they purchase transformative moments, romantic sunsets, and effortless adventures. If your website copy reads like a sterile logistics itinerary, you are leaking valuable bookings.',
      'We combine sensory storytelling with direct-response psychological triggers. Our copywriting balances vivid imagery—describing the crisp morning air on a Patagonian trek or the aroma of fresh Tuscan truffles—with crystal-clear value propositions, transparent inclusions, social proof, and risk-reversing booking guarantees.',
      'From high-ticket luxury retreat landing pages to automated post-booking email welcome sequences, we ensure every sentence guides the reader seamlessly toward taking out their credit card or requesting a customized itinerary proposal.'
    ],
    deliverables: [
      'Custom landing page copy for signature tours, luxury villas, and travel packages',
      'Sensory tour itinerary descriptions written to maximize perceived excursion value',
      'Email sequences: lead magnets, abandoned checkout recoveries, and seasonal promos',
      'Conversion rate optimization (CRO) audits of existing travel booking funnels',
      'Micro-copy optimization: button labels, trust badges, urgency banners, and FAQ snippets'
    ],
    targetAudience: 'Luxury safari operators, boutique hotels, charter yachts, experiential travel agencies.',
    deliverablesSummary: 'Landing pages, tour descriptions, automated email flows, brand voice guidelines.',
    pricingStarting: 'From $400 / page or package'
  },
  {
    id: 'seo-technical-seo',
    title: 'Search Engine Optimization (SEO & Technical)',
    shortTag: 'Algorithmic Organic Dominance',
    iconName: 'fa-solid fa-magnifying-glass-chart',
    lucideIcon: 'Search',
    colorAccent: 'blue',
    metric: '99+ Vitals',
    metricLabel: 'Mobile Core Web Vitals Score',
    headline: 'Comprehensive Technical Audits, Core Web Vitals & Programmatic Architecture for Travel Websites',
    description:
      'Fix crawl budget bottlenecks, eliminate slow loading speeds, structure JSON-LD travel schemas, and dominate high-intent keywords across Google Search.',
    fullBody: [
      'Travel websites face unique technical SEO hurdles: sprawling faceted navigation filters, tens of thousands of dynamic hotel or flight pages, massive image asset weights, and complex multi-language currency parameters. Without meticulous technical hygiene, search engine crawlers waste crawl budgets on duplicate URLs while your best packages remain unindexed.',
      'TravelTheEarth provides comprehensive technical architecture overhauls. We implement pristine canonicalization structures, configure server-side rendering for JavaScript booking widgets, compress heavy destination imagery using next-gen AVIF/WebP formats, and streamline Core Web Vitals to achieve sub-second Largest Contentful Paint (LCP) scores.',
      'Furthermore, we embed advanced schema markup including TouristAttraction, LodgingBusiness, Trip, FAQPage, and Review schemas, unlocking rich interactive snippet features directly inside Google mobile search results.'
    ],
    deliverables: [
      'Exhaustive 120-point technical SEO audit (Crawl budget, indexation, status codes, canonicals)',
      'Core Web Vitals remediation: LCP, INP, and CLS performance optimization',
      'Advanced Travel Schema integration (TouristDestination, Hotel, Event, Review, FAQPage)',
      'Multi-currency, hreflang internationalization, and localized URL structuring',
      'Keyword gap analysis targeting low-difficulty, high-conversion commercial travel queries'
    ],
    targetAudience: 'OTA platforms, hotel aggregators, regional tour portals, multi-destination travel brands.',
    deliverablesSummary: 'Full code & server audit, schema deployment, monthly technical monitoring, rank tracking.',
    pricingStarting: 'From $850 / monthly retainer'
  },
  {
    id: 'gbp-local-seo',
    title: 'Google Business Profile (GBP & Local SEO)',
    shortTag: 'Local 3-Pack Supremacy',
    iconName: 'fa-solid fa-location-dot',
    lucideIcon: 'MapPin',
    colorAccent: 'green',
    metric: '#1 Local Pack',
    metricLabel: 'Google Maps Search Results',
    headline: 'Capture High-Intent "Near Me" Travellers and Dominate Google Maps in Key Travel Hubs',
    description:
      'Optimize your Google Business Profile, build localized travel citations, manage guest reviews, and capture tourists searching for activities, accommodations, and dining at their destination.',
    fullBody: [
      'When international tourists land in Rome, Bali, or Honolulu, their first instinct is opening Google Maps to search for "best catamaran tour near me", "authentic pasta cooking class", or "luxury boutique hotel". If your business does not occupy the coveted Google Local 3-Pack, that high-margin direct booking goes to your competitor.',
      'Our Local Travel SEO service transforms your Google Business Profile into a revenue-generating asset. We perform geo-grid ranking scans to pinpoint visibility gaps across your city or service area, optimize primary and secondary category taxonomy, craft keyword-optimized service catalogs, and set up automated review generation workflows.',
      'We also syndicate accurate NAP (Name, Address, Phone) data across 60+ tier-1 travel directories (Tripadvisor, Yelp, Apple Maps, Foursquare, travel bureaus), cementing unmatched local search relevance.'
    ],
    deliverables: [
      'Complete Google Business Profile reinstatement, verification, and category optimization',
      'Geo-targeted keyword injection in services, products, descriptions, and weekly updates',
      'Local travel citation audit and cleanup across 60+ global and regional travel directories',
      'Automated review management workflow & strategic response templates for guest reviews',
      'Bi-weekly geo-grid ranking reports showing exact coordinate visibility on Google Maps'
    ],
    targetAudience: 'Local tour guides, boutique bed & breakfasts, dive shops, equipment rentals, safari lodges.',
    deliverablesSummary: 'GBP optimization, weekly posts, citation building, geo-grid heatmap tracking.',
    pricingStarting: 'From $490 / location / month'
  },
  {
    id: 'web-design-ui-ux',
    title: 'Web Design (UI/UX & Responsive)',
    shortTag: 'Modern Mobile-First Design',
    iconName: 'fa-solid fa-laptop-code',
    lucideIcon: 'Layout',
    colorAccent: 'amber',
    metric: '< 1.2s',
    metricLabel: 'Ultra-Fast Page Load Speeds',
    headline: 'Stunning, Immersive Travel Web Design Engineered to Turn Browsers into Confirmed Guests',
    description:
      'Modern, mobile-first websites crafted for modern travellers. Fluid booking flows, high-resolution destination galleries, responsive layouts, and frictionless conversion pathways.',
    fullBody: [
      'Over 74% of travel research and over 58% of actual booking transactions now take place on smartphones. A dated, sluggish website with clunky navigation menus and non-responsive checkout forms directly slashes your conversion rates and wastes your paid advertising budget.',
      'We design breathtaking travel websites that balance aesthetic wonder with ruthless conversion architecture. Using modern Earth-and-Digital palettes, full-bleed retina imagery, cinematic video integration, and intuitive micro-interactions, we transport visitors into the trip of a lifetime before they even submit an inquiry.',
      'Behind the visuals lies rigorous engineering: clean lightweight code, semantic HTML5, fluid responsive breakpoints, accessible UI components, and seamless integrations with booking engines like FareHarbor, Bokun, Checkfront, and Cloudbeds.'
    ],
    deliverables: [
      'Bespoke Figma UI/UX prototypes tailored to your brand identity and luxury aesthetic',
      'Mobile-first, responsive development across smartphone, tablet, laptop, and ultra-wide screens',
      'Interactive destination maps, photo galleries, filterable tour catalogs, and booking calendars',
      'Integration with major travel reservation software (FareHarbor, Bokun, Stripe, PayPal)',
      'Sub-second page speeds, clean semantic code, and on-page SEO best practices built-in'
    ],
    targetAudience: 'Luxury resorts, eco-retreats, adventure travel agencies, boutique travel designers.',
    deliverablesSummary: 'Complete custom UI/UX design, responsive frontend build, booking engine setup, launch QA.',
    pricingStarting: 'From $1,450 / custom project'
  },
  {
    id: 'ai-web-dev-automation',
    title: 'AI Web Development & Automation',
    shortTag: 'Smart Travel Tech Solutions',
    iconName: 'fa-solid fa-brain',
    lucideIcon: 'Cpu',
    colorAccent: 'cyan',
    metric: '24/7 AI Concierge',
    metricLabel: 'Zero Missed Travel Leads',
    headline: 'Next-Generation Travel Applications: AI Itinerary Generators, Smart Concierges & Automated CRM',
    description:
      'Leverage modern artificial intelligence to build custom travel web apps: conversational trip planners, instant multi-day itinerary builders, automated quote generation, and dynamic destination pages.',
    fullBody: [
      'The future of travel booking belongs to brands that provide immediate, hyper-personalized value. Travellers no longer want to browse dozens of static PDF itineraries; they expect customized travel recommendations tailored to their budget, travel dates, dietary preferences, and travel companion styles in real time.',
      'TravelTheEarth engineers custom AI web applications powered by state-of-the-art LLMs and modern web frameworks. We build custom-trained AI Travel Concierges capable of answering complex destination inquiries 24/7 in 50+ languages, qualifying prospective guests, and generating personalized daily schedules in seconds.',
      'We also implement programmatic AI SEO engines that dynamically spin up high-converting, factually grounded landing pages for thousands of route combinations (e.g., "Best 5-Day Hikes from Cusco"), capturing long-tail organic search volume at unprecedented scale.'
    ],
    deliverables: [
      'Custom conversational AI Travel Assistant embedded directly into your website interface',
      'Interactive multi-day AI Trip & Itinerary Builder generating instant PDF & web schedules',
      'Programmatic SEO architecture for thousands of localized destination landing pages',
      'Automated lead qualification & instant quotation pipelines syncing with your CRM',
      'Multi-language real-time translation for global guests and international booking channels'
    ],
    targetAudience: 'Travel tech startups, large tour operators, concierge networks, digital travel aggregators.',
    deliverablesSummary: 'Custom AI agent setup, LLM prompt engineering, API integration, dashboard & automated CRM sync.',
    pricingStarting: 'From $1,250 / module'
  }
];

export const STRATEGY_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discovery & Audit',
    title: 'Topical Audit & Commercial Keyword Architecture',
    duration: 'Week 1 - 2',
    description:
      'We dissect your travel website’s current backlink footprint, indexing health, Core Web Vitals, and competitor ranking gaps. We identify high-intent destination search queries that deliver qualified travelers rather than vanity traffic.',
    actions: [
      'Complete backlink toxic link scan and domain authority benchmark',
      'SERP intent classification: mapping commercial, informational, and local queries',
      'Competitor link-gap matrix targeting competitor backlinks in your exact travel niche',
      'Immediate technical low-hanging fruit remediation plan'
    ],
    deliverable: 'Executive Travel SEO Roadmap & 6-Month Keyword Architecture Masterplan'
  },
  {
    number: '02',
    phase: 'Authority Outreach',
    title: 'High-DA Travel Editorial Outreach & Media Placement',
    duration: 'Week 3 - 6',
    description:
      'We initiate publisher-direct outreach to vetted travel magazines, destination blogs, and regional tourism publications. Our in-house travel journalists write authoritative editorial features that naturally integrate your brand.',
    actions: [
      'Manual outreach to travel editors with DR 45-85+ and minimum 5,000+ monthly traffic',
      'Custom 1,200+ word editorial drafts matching target publication tone and guidelines',
      'Anchor text variation management protecting against Google over-optimization penalties',
      'Live indexing tracking and social syndicate amplification'
    ],
    deliverable: 'Guaranteed Live Editorial Links with Full Metrics & Indexation Proof'
  },
  {
    number: '03',
    phase: 'Optimization & UX',
    title: 'Technical Precision, Local 3-Pack & Conversion UX',
    duration: 'Week 5 - 8',
    description:
      'We optimize your website for both search engine spiders and human travelers. We deploy specialized travel schemas, eliminate mobile layout shifts, and refine booking checkout funnels to maximize conversion rates.',
    actions: [
      'Full deployment of TouristAttraction, LodgingBusiness, and FAQPage schemas',
      'Core Web Vitals acceleration targeting <1.2s mobile Largest Contentful Paint',
      'Google Business Profile category refinement and 60+ travel citation syndication',
      'Booking funnel CRO adjustments: frictionless forms and prominent social proof'
    ],
    deliverable: 'Validated Schema Deployment, 95+ PageSpeed Score, and GBP 3-Pack Growth'
  },
  {
    number: '04',
    phase: 'Scaling & AI',
    title: 'Programmatic Scaling, AI Concierge & Market Dominance',
    duration: 'Ongoing Monthly',
    description:
      'Once the core ranking foundation is established, we scale your organic moat. We deploy automated AI itinerary builders, programmatic destination hubs, and monthly PR distributions to cement industry dominance.',
    actions: [
      'Continuous link acquisition on tier-1 authority travel portals',
      'Dynamic AI concierges capturing leads 24/7 in multiple languages',
      'Quarterly wire press release campaigns for signature tours and brand milestones',
      'Comprehensive monthly ROI reports detailing traffic growth, rankings, and assisted revenue'
    ],
    deliverable: 'Monthly Executive Performance Dashboard & Compounding Organic Bookings'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    client: 'Azure Coast Charters',
    category: 'Luxury Yacht & Boat Charters',
    location: 'Mediterranean / French Riviera',
    badge: '+420% Organic Bookings',
    challenge:
      'Buried on page 4 of Google for critical commercial queries like "luxury yacht charter Nice" and suffering from slow mobile load times that alienated high-net-worth clients.',
    solution:
      'Executed a targeted 35-link high-DA travel outreach campaign, restructured destination pages with yacht schema, and built a custom responsive booking portal with instant quotes.',
    results: [
      { label: 'Organic Traffic Lift', value: '+310%' },
      { label: 'Target Keywords in Top 3', value: '42 keywords' },
      { label: 'Direct Charter Inquiries', value: '+185%' }
    ],
    quote:
      'TravelTheEarth took us from an invisible charter service to the #1 recommended yacht agency on the French Riviera. The quality of travel guest posts and technical precision was unmatched.',
    author: 'Henri Delacroix',
    role: 'Managing Director, Azure Coast Charters'
  },
  {
    id: 'case-2',
    client: 'Summit Andes Expeditions',
    category: 'Adventure Trekking & Tours',
    location: 'Cusco, Peru',
    badge: '#1 Google Maps 3-Pack',
    challenge:
      'Struggling to compete against large international OTA aggregators for Inca Trail and Salkantay trek queries, with low Google Maps visibility for tourists landing in Cusco.',
    solution:
      'Optimized Google Business Profile with geo-targeted posts, built localized travel citations across South American tourism directories, and deployed an AI Trek Itinerary Planner.',
    results: [
      { label: 'Local Map Views', value: '88k / mo' },
      { label: 'Direct WhatsApp Leads', value: '350+ / mo' },
      { label: 'Cost Per Acquisition', value: '-64%' }
    ],
    quote:
      'The local SEO strategy alone filled our high-season treks 4 months in advance. Our AI itinerary generator keeps travelers on our site and converts them immediately.',
    author: 'Elena Morales',
    role: 'Founder & Lead Guide, Summit Andes Expeditions'
  },
  {
    id: 'case-3',
    client: 'WanderLodge Boutique Eco-Resorts',
    category: 'Eco-Hospitality & Glamping',
    location: 'Costa Rica & Bali',
    badge: '3.4x Revenue Growth',
    challenge:
      'Heavy reliance on third-party OTAs charging 20% commissions. Needed to build direct organic booking channels and establish international brand authority.',
    solution:
      'High-tier PR wire distribution announcing eco-sustainability milestones, coupled with 20+ DA60+ guest posts on luxury travel publications and a high-converting mobile UI redesign.',
    results: [
      { label: 'Direct Web Bookings', value: '62% of total' },
      { label: 'Commission Fees Saved', value: '$84,000/yr' },
      { label: 'Editorial Mentions', value: '18 Top Publications' }
    ],
    quote:
      'Breaking free from OTA commission fees was our primary goal. TravelTheEarth delivered an authority footprint that established our direct resort bookings within six months.',
    author: 'Marcus Vance',
    role: 'Co-Founder, WanderLodge Eco-Resorts'
  }
];

export const AGENCY_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Why is niche-relevant guest posting so important for travel websites?',
    category: 'Guest Posting & SEO',
    answer:
      'Google’s ranking algorithms, especially following recent core and helpful content updates, evaluate topical authority rigorously. In the travel niche, backlinks from generic multi-niche websites carry minimal semantic weight and can even raise spam flags. A backlink from a genuine travel blog or destination authority signals to Google that recognized industry peers endorse your content, directly boosting your rankings for competitive booking queries.',
    keywords: ['travel guest posts', 'topical authority', 'backlink strategy', 'safe SEO']
  },
  {
    id: 'faq-2',
    question: 'How do you ensure guest posts and links are 100% white-hat and safe from Google penalties?',
    category: 'Safety & Compliance',
    answer:
      'We adhere to a strict manual outreach standard. We never use Private Blog Networks (PBNs), link farms, automated software, or paid link schemes that violate Google Search Essentials. Every target publication is hand-evaluated for consistent organic search traffic, clean historical anchor profiles, editorial editorial standards, and genuine human readership. Every guest article is custom-written by experienced travel writers to provide genuine value to the host publication’s audience.',
    keywords: ['white hat SEO', 'no PBNs', 'Google compliance', 'link safety']
  },
  {
    id: 'faq-3',
    question: 'How quickly can our travel agency or hotel expect to see measurable SEO results?',
    category: 'Timeline & ROI',
    answer:
      'Most travel websites see initial keyword ranking improvements within 45 to 60 days of implementing technical on-page fixes and having initial guest posts indexed. Significant compounding of organic traffic and direct booking inquiries typically accelerates between months 3 and 6 as search engines crawl and attribute topical authority across your content clusters and backlink portfolio.',
    keywords: ['SEO timeline', 'organic ranking speed', 'travel traffic lift']
  },
  {
    id: 'faq-4',
    question: 'How does Google Business Profile (GBP) optimization help travel and tour operators?',
    category: 'Local SEO',
    answer:
      'Travellers frequently search on smartphones using geo-modified terms like "tours near me", "best dive shop in Sanur", or "airport transfer to resort". Google prioritizes local Google Maps 3-Pack results above standard organic listings for these high-intent searches. Our GBP optimization ensures your business ranks at the top with verified categories, optimized service menus, geo-tagged imagery, active customer reviews, and consistent directory citations.',
    keywords: ['Google Business Profile', 'local travel SEO', 'Google Maps 3-pack', 'near me searches']
  },
  {
    id: 'faq-5',
    question: 'What is included in your AI Web Development and Automation service?',
    category: 'AI & Web Development',
    answer:
      'Our AI web development goes far beyond standard static websites. We engineer custom interactive AI tools tailored for travel brands, including 24/7 conversational booking concierges, multi-day dynamic trip planners that generate customized itineraries based on user preferences, programmatic destination landing page engines, and automated lead nurturing systems that sync directly with your email CRM or reservation software.',
    keywords: ['AI travel web development', 'AI trip planner', 'travel concierge chatbot', 'programmatic travel SEO']
  },
  {
    id: 'faq-6',
    question: 'Do we own all content, backlinks, and website code created during our campaign?',
    category: 'Ownership & Deliverables',
    answer:
      'Yes, 100%. You retain full intellectual property ownership of all custom-written blog articles, PR distribution releases, website source code, Figma design assets, and permanent guest post placements. We provide complete transparent reporting, so you always have a permanent record of all published assets and live links.',
    keywords: ['client ownership', 'transparent reporting', 'permanent links']
  },
  {
    id: 'faq-7',
    question: 'Can you work with our existing booking engine (FareHarbor, Bokun, Rezdy, Cloudbeds)?',
    category: 'Integrations & Web Design',
    answer:
      'Absolutely. Our web design and development team has extensive experience integrating all major hospitality and tour reservation engines including FareHarbor, Bokun, Rezdy, Checkfront, Cloudbeds, Sirvoy, and custom Stripe/PayPal checkout solutions. We ensure booking widgets load instantly without slowing down page speeds or causing mobile layout shifts.',
    keywords: ['FareHarbor integration', 'Bokun', 'travel booking widgets', 'reservation system']
  },
  {
    id: 'faq-8',
    question: 'What information do you need from us to generate a free audit and customized proposal?',
    category: 'Getting Started',
    answer:
      'To provide an accurate, high-impact growth strategy, we simply need your website URL, primary travel niche or destinations served, and your top growth priorities (such as acquiring high-DA backlinks, fixing technical SEO, dominating Google Maps, or revamping your website with AI tools). Fill out our quick quote form or schedule a discovery call to receive your customized audit within 24 hours.',
    keywords: ['free SEO audit', 'custom quote', 'travel growth proposal']
  }
];

export const TRAVEL_NICHES = [
  'Tour Operators & Day Excursions',
  'Luxury Resorts & Boutique Hotels',
  'Adventure Travel & Eco-Tourism',
  'Travel Tech & Booking SaaS',
  'Yacht Charters & Cruise Lines',
  'Safari Lodges & Wildlife Expeditions',
  'Destination Management (DMC)',
  'Travel Blogs & Digital Nomad Media',
  'Vacation Rentals & Villa Management',
  'Other Travel / Hospitality Vertical'
];

export const STATS_COUNTERS = [
  { value: '500+', label: 'Travel Brands Scaled', icon: 'fa-solid fa-earth-americas' },
  { value: '15,000+', label: 'High-DA Guest Posts Placed', icon: 'fa-solid fa-link' },
  { value: '3.8M+', label: 'Monthly Organic Visits Driven', icon: 'fa-solid fa-chart-line' },
  { value: '98.4%', label: 'Client Retention Rate', icon: 'fa-solid fa-handshake-angle' }
];

export const MEDIA_PARTNERS = [
  { name: 'Lonely Planet Contributors', icon: 'fa-solid fa-compass' },
  { name: 'Tripadvisor Partner Network', icon: 'fa-solid fa-map-location-dot' },
  { name: 'Forbes Travel Council', icon: 'fa-solid fa-award' },
  { name: 'Skift Travel Intelligence', icon: 'fa-solid fa-plane-departure' },
  { name: 'Matador Network Media', icon: 'fa-solid fa-camera-retro' },
  { name: 'Associated Press Syndication', icon: 'fa-solid fa-newspaper' }
];

export const BLOG_POSTS: import('../types').BlogPost[] = [
  {
    id: 'travel-seo-blueprint-2026',
    title: 'The 2026 Travel SEO Blueprint: How Tour Operators Outrank OTAs on Google',
    slug: 'travel-seo-blueprint-outrank-otas',
    category: 'Travel SEO & Rankings',
    readTime: '7 min read',
    date: 'Sep 18, 2026',
    author: {
      name: 'Julian Montgomery',
      role: 'Director of Search Intelligence',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
    },
    excerpt: 'Why multi-day tour operators and boutique resorts are breaking free from 20% OTA commission fees by mastering topical travel authority, programmatic destination schemas, and experiential intent.',
    content: [
      'For years, online travel agencies (OTAs) like Expedia, Booking.com, and Viator dominated high-volume travel keywords. However, Google’s recent Helpful Content and core algorithm updates have swung the pendulum back toward authentic, firsthand travel operators with genuine topical authority.',
      'By implementing semantic destination clusters—connecting signature itineraries, packing guides, weather seasonality, and localized FAQ schema—independent travel operators can capture high-converting bottom-funnel queries that OTAs cannot answer authentically.',
      'Furthermore, integrating live booking widget speeds and Core Web Vitals optimizations ensures that when travelers arrive at your direct reservation page, frictionless checkout keeps conversion rates above 4.5%.'
    ],
    tags: ['Travel SEO', 'OTA Independence', 'Core Web Vitals', 'Destination Schema'],
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    keyTakeaways: [
      'Topical authority clusters outrank thin OTA destination listings for high-intent queries',
      'Firsthand operator experience triggers positive Google E-E-A-T ranking signals',
      'Direct booking schema captures rich snippet real estate in Google mobile search results'
    ]
  },
  {
    id: 'authority-link-matrix-guest-posting',
    title: 'The Authority Link Matrix: Why Niche Travel Guest Posts Move Competitive Keywords',
    slug: 'authority-link-matrix-travel-guest-posting',
    category: 'Guest Posting & Outreach',
    readTime: '6 min read',
    date: 'Sep 14, 2026',
    author: {
      name: 'Sofia Calderon',
      role: 'Head of Editorial Outreach',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
    },
    excerpt: 'A strategic breakdown of how search engines evaluate topical relevance in hospitality. Discover why one DR 65 link on a verified travel magazine outperforms 50 generic directory links.',
    content: [
      'In travel search algorithms, link context is everything. Google evaluates the hosting domain’s topical relevance, co-occurring travel keywords, and the authentic readership engagement of the referring article.',
      'Backlinks placed on multi-niche guest post farms offer diminishing returns and carry algorithmic risk. In contrast, acquiring contextual editorial placements within respected travel publications, regional tourism guides, and luxury lifestyle portals delivers sustainable domain authority.',
      'At TravelTheEarth, our manual publisher relationships ensure that every guest post features authentic 1,200+ word editorial narratives, natural contextual anchor text, and guaranteed permanent indexation.'
    ],
    tags: ['Guest Posting', 'Backlink Strategy', 'Domain Rating', 'White-Hat Outreach'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    keyTakeaways: [
      'Topical alignment between referring domain and target page multiplies link equity',
      'Strict vetting for minimum 5k+ monthly search traffic eliminates toxic link profiles',
      'Editorial placements with natural branded anchors build lasting algorithmic trust'
    ]
  },
  {
    id: 'ai-web-development-travel-concierge',
    title: 'AI Web Development in Tourism: Integrating Dynamic Trip Planners & Smart Concierges',
    slug: 'ai-web-development-travel-automation',
    category: 'AI Web Dev & UX',
    readTime: '8 min read',
    date: 'Sep 10, 2026',
    author: {
      name: 'Darius Thorne',
      role: 'Lead AI Solutions Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    excerpt: 'How custom AI travel concierges, multi-day itinerary builders, and automated booking assistants are boosting on-site session durations and inquiry conversion rates by up to 42%.',
    content: [
      'Modern travelers expect instant, bespoke answers when planning vacations across different time zones. Static contact forms and generic PDFs are no longer enough to win bookings from affluent travelers comparing multiple destinations.',
      'By deploying custom AI web tools—such as conversational trip planning concierges that match itineraries to traveler preferences and budgets—travel brands can provide 24/7 personalized customer journeys directly in the browser.',
      'These intelligent applications capture qualified traveler preferences, phone numbers, and travel dates automatically, feeding hot leads directly into tour management platforms and CRM pipelines.'
    ],
    tags: ['AI Travel Web', 'Itinerary Builders', 'Conversion Rate', 'Smart Concierges'],
    imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    keyTakeaways: [
      'Interactive AI itinerary builders increase average page dwell time by 3.2 minutes',
      'Automated conversational concierges capture high-value inquiries while staff sleep',
      'Zero latency integration with reservation engines converts intent into confirmed deposits'
    ]
  }
];
