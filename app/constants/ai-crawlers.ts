// User-agent tokens for AI training, scraping, and assistant crawlers. Used
// twice: `app/robots.ts` asks them to stay out, and `proxy.ts` returns 403 to
// the ones that ignore robots.txt (Meta documents that meta-externalfetcher
// does).
//
// Deliberately absent: `facebookexternalhit` (Facebook/Instagram/WhatsApp
// link previews) and the regular search crawlers (Googlebot, Bingbot,
// Applebot). Blocking those breaks share cards and search listings, not AI
// training. Google-Extended and Applebot-Extended are robots.txt-only tokens
// — they never appear in a request's User-Agent — so the proxy never matches
// them, but they are the only way to opt out of Google's and Apple's training.
export const AI_CRAWLERS = [
  // Meta
  'meta-externalagent',
  'meta-externalfetcher',
  'meta-webindexer',
  'FacebookBot',
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Google, Apple (robots.txt-only)
  'Google-Extended',
  'Applebot-Extended',
  // Others
  'Amazonbot',
  'Bytespider',
  'CCBot',
  'cohere-ai',
  'cohere-training-data-crawler',
  'Diffbot',
  'DuckAssistBot',
  'ImagesiftBot',
  'MistralAI-User',
  'omgili',
  'PerplexityBot',
  'Perplexity-User',
  'Timpibot',
  'YouBot',
  'AI2Bot',
  'img2dataset',
] as const;
