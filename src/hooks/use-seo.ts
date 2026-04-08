import { useEffect } from 'react';
import { SEOConfig, updateMetaTags, updateJSONLDScript } from '@/lib/seo';

/**
 * Hook to manage SEO meta tags and structured data
 * @param config SEO configuration for the page
 * @param structuredData Optional JSON-LD structured data
 * @param structuredDataId Unique ID for the JSON-LD script
 */
export const useSEO = (
  config: SEOConfig,
  structuredData?: Record<string, any>,
  structuredDataId: string = 'page-schema'
): void => {
  useEffect(() => {
    // Update meta tags
    updateMetaTags(config);

    // Update structured data if provided
    if (structuredData) {
      updateJSONLDScript(structuredData, structuredDataId);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [config, structuredData, structuredDataId]);
};

export default useSEO;
