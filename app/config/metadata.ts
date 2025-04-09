import type { Metadata } from 'next';
import { SITE } from '~constants/site';
import { THEME } from '~constants/theme';

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords.join(', '),
  authors: [{ name: SITE.author }],
  creator: SITE.title,
  publisher: SITE.title,
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: THEME.colors.primary,
      },
    ],
  },
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.title,
    locale: 'en_US',
    type: 'website',
  },
};
