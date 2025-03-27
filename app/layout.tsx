import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import Logo from './components/Logo';
import Script from 'next/script';
import './globals.css';

const lato = Lato({
  weight: ['100', '300'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tiny Erica Jewelry',
  description:
    'Tiny Erica Jewelry features hand-made jewelry and custom jewelry design that integrates elements of nature into a fresh, clean aesthetic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="tiny erica, jewelry, jewelry design, custom, hand-made, silver, rings, charms, gems"
        />
        <meta name="author" content="Raúl Montejo" />
        <meta name="copyright" content="Tiny Erica Jewelry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://tinyerica.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a7f62" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <base target="_blank" />
      </head>

      <body className={lato.variable}>
        <header id="header">
          <Logo />
        </header>
        {children}
        <footer id="footer">
          <ul className="list-social">
            <li>
              <a href="//instagram.com/tinyerica" title="instagram">
                <span className="icon-social fa fa-instagram"></span>
              </a>
            </li>
            <li>
              <a href="//facebook.com/tinyerica" title="facebook">
                <span className="icon-social fa fa-facebook-square"></span>
              </a>
            </li>
            <li>
              <a href="//pinterest.com/tinyerica" title="pinterest">
                <span className="icon-social fa fa-pinterest-square"></span>
              </a>
            </li>
            <li>
              <a href="//twitter.com/tinyerica" title="twitter">
                <span className="icon-social fa fa-twitter-square"></span>
              </a>
            </li>
          </ul>
        </footer>
        <Script src="https://use.fontawesome.com/f6e0e51e9b.js"></Script>
      </body>
    </html>
  );
}
