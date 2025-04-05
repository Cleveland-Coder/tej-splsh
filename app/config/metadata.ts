import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Tiny Erica Jewelry',
  description:
    'Tiny Erica Jewelry features hand-made jewelry and custom jewelry design that integrates elements of nature into a fresh, clean aesthetic',
  keywords: 'tiny erica, jewelry, jewelry design, custom, hand-made, silver, rings, charms, gems',
  authors: [{ name: 'Raúl Montejo' }],
  creator: 'Tiny Erica Jewelry',
  publisher: 'Tiny Erica Jewelry',
  alternates: {
    canonical: 'https://tinyerica.com',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#9a7f62',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Tiny Erica Jewelry',
    description:
      'Tiny Erica Jewelry features hand-made jewelry and custom jewelry design that integrates elements of nature into a fresh, clean aesthetic',
    url: 'http://tinyerica.com',
    siteName: 'Tiny Erica Jewelry',
    locale: 'en_US',
    type: 'website',
  },
};

export default metadata;
