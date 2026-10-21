// External dependencies
import type { MetadataRoute } from 'next';

// Internal constants
import { AI_CRAWLERS } from '~constants/ai-crawlers';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: [...AI_CRAWLERS], disallow: '/' },
      { userAgent: '*', allow: '/' },
    ],
  };
}
