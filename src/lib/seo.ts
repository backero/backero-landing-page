/**
 * SEO and Structured Data Utilities
 * Helps manage meta tags and structured data for better search engine optimization
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

/**
 * Generate a complete SEO config object with defaults
 */
export const generateSEOConfig = (config: Partial<SEOConfig>): SEOConfig => {
  const baseUrl = "https://backero.in";
  
  return {
    title: "Backero Private Limited | Cosmetics R&D & Manufacturing",
    description:
      "Backero is India's leading research-driven cosmetics manufacturing company specializing in contract manufacturing, R&D, and brand development.",
    keywords:
      "cosmetic manufacturer, R&D, contract manufacturing, skincare, haircare, Treyfa, Kymarie",
    image: `${baseUrl}/og-image.jpg`,
    url: baseUrl,
    type: "website",
    author: "Backero Private Limited",
    ...config,
  };
};

/**
 * Update document meta tags dynamically
 */
export const updateMetaTags = (config: SEOConfig): void => {
  // Update title
  document.title = config.title;

  // Update or create meta description
  const descriptionMeta =
    document.querySelector('meta[name="description"]') ||
    document.createElement("meta");
  descriptionMeta.setAttribute("name", "description");
  descriptionMeta.setAttribute("content", config.description);
  if (!document.head.contains(descriptionMeta)) {
    document.head.appendChild(descriptionMeta);
  }

  // Update keywords
  const keywordsMeta =
    document.querySelector('meta[name="keywords"]') ||
    document.createElement("meta");
  keywordsMeta.setAttribute("name", "keywords");
  keywordsMeta.setAttribute("content", config.keywords);
  if (!document.head.contains(keywordsMeta)) {
    document.head.appendChild(keywordsMeta);
  }

  // Update OG tags
  updateOGTag("og:title", config.title);
  updateOGTag("og:description", config.description);
  if (config.image) {
    updateOGTag("og:image", config.image);
  }
  if (config.url) {
    updateOGTag("og:url", config.url);
  }
  updateOGTag("og:type", config.type || "website");

  // Update Twitter tags
  updateTwitterTag("twitter:title", config.title);
  updateTwitterTag("twitter:description", config.description);
  if (config.image) {
    updateTwitterTag("twitter:image", config.image);
  }

  // Update canonical
  updateCanonical(config.url || "https://backero.in");
};

/**
 * Update or create OG (Open Graph) meta tag
 */
const updateOGTag = (property: string, content: string): void => {
  const meta =
    document.querySelector(`meta[property="${property}"]`) ||
    document.createElement("meta");
  meta.setAttribute("property", property);
  meta.setAttribute("content", content);
  if (!document.head.contains(meta)) {
    document.head.appendChild(meta);
  }
};

/**
 * Update or create Twitter meta tag
 */
const updateTwitterTag = (name: string, content: string): void => {
  const meta =
    document.querySelector(`meta[name="${name}"]`) ||
    document.createElement("meta");
  meta.setAttribute("name", name);
  meta.setAttribute("content", content);
  if (!document.head.contains(meta)) {
    document.head.appendChild(meta);
  }
};

/**
 * Update canonical URL
 */
const updateCanonical = (url: string): void => {
  const canonical =
    document.querySelector("link[rel='canonical']") ||
    document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", url);
  if (!document.head.contains(canonical)) {
    document.head.appendChild(canonical);
  }
};

/**
 * Generate Organization structured data
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Backero Private Limited",
  alternateName: "Backero",
  url: "https://backero.in",
  logo: "https://backero.in/logo.png",
  description:
    "Research-driven cosmetics manufacturing company specializing in contract manufacturing, R&D, and brand development",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  sameAs: [
    "https://www.linkedin.com/company/backero",
    "https://www.instagram.com/backerobrands",
    "https://www.facebook.com/backerobrands",
    "https://twitter.com/backerobrands",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "info@backero.in",
    availableLanguage: ["en"],
  },
};

/**
 * Generate FAQ Schema for AEO
 */
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

/**
 * Generate Product Schema
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  brand: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
  };
};

/**
 * Add JSON-LD script to document
 */
export const addJSONLDScript = (
  data: Record<string, any>,
  id?: string
): void => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  if (id) {
    script.id = id;
  }
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Get or create JSON-LD script
 */
export const updateJSONLDScript = (
  data: Record<string, any>,
  id: string
): void => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};
