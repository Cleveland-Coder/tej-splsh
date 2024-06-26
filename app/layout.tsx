import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tiny Erica Jewelry",
  description: "Tiny Erica Jewelry features hand-made jewelery and custom jewelery design that integrates elements of nature into a fresh, clean aesthetic",
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
          content="tiny erica, jewelry, jewelery design, custom, hand-made, silver, rings, charms, gems"
        />
        <meta name="author" content="Raúl Montejo" />
        <meta name="copyright" content="Tiny Erica Jewelry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://tinyerica.com" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a7f62" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <base target="_blank" />
      </head>

      <body className={lato.variable}>
        <header id="header">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 309.26 349.16"
            xmlSpace="preserve"
            className="logo"
          >
            <path d="M95.56,172.42v1.38h-8v20.06h-1.68V173.8h-8v-1.38H95.56z" />
            <path d="M99.81,172.42v21.44h-1.66v-21.44H99.81z" />
            <path d="M124.02,172.42v21.44h-1.37l-16.3-18.74v18.74h-1.66v-21.44h1.41l16.26,18.74v-18.74H124.02z" />
            <path d="M144.76,172.42l-8.33,9.93v11.51h-1.66v-11.51l-8.34-9.93h2l7.17,8.49l7.13-8.49L144.76,172.42z" />
            <path d="M167.76,172.42v1.38h-10v8.58h9.78v1.4h-9.78v8.7h10.28v1.38h-11.99v-21.44H167.76z" />
            <path
              d="M171.43,172.42h5.5c1.88-0.12,3.74,0.4,5.28,1.49c1.21,0.99,1.88,2.49,1.82,4.05c0,2.47-1.36,4.21-4.08,5.22
        c0.71,0.34,1.66,1.42,2.86,3.27l4.85,7.41h-2l-3.7-5.86c-0.76-1.38-1.75-2.62-2.92-3.67c-0.92-0.55-1.98-0.8-3.05-0.73h-2.9v10.28
        h-1.66V172.42z M173.09,173.8v8.39h3.56c1.45,0.09,2.89-0.29,4.11-1.09c1.71-1.4,1.97-3.92,0.57-5.63c-0.17-0.21-0.36-0.4-0.57-0.57
        c-1.24-0.81-2.71-1.19-4.19-1.1H173.09z"
            />
            <path d="M191.08,172.42v21.44h-1.66v-21.44H191.08z" />
            <path
              d="M213.84,173.94v1.81c-2.34-1.31-4.96-2.02-7.64-2.07c-2.51-0.07-4.93,0.92-6.68,2.71c-1.78,1.8-2.75,4.26-2.68,6.79
        c-0.08,2.53,0.9,4.99,2.7,6.77c1.84,1.78,4.33,2.74,6.89,2.65c2.68-0.1,5.3-0.85,7.63-2.19v1.72c-2.33,1.28-4.94,1.97-7.6,2
        c-3.03,0.09-5.97-1.04-8.16-3.14c-4.32-4.27-4.35-11.24-0.08-15.56c0.05-0.05,0.1-0.1,0.15-0.14c2.12-2.06,4.98-3.2,7.94-3.16
        C208.92,172.18,211.49,172.8,213.84,173.94z"
            />
            <path
              d="M227.14,172.26l9.91,21.6h-1.74l-3.39-7.41h-10.49l-3.38,7.41h-1.74l9.92-21.6H227.14z M231.29,185.07L226.67,175
        l-4.61,10.1L231.29,185.07z"
            />
            <path
              d="M87.19,204.9v21.44c0,2.37-0.45,4.01-1.34,4.9c-0.82,0.87-1.96,1.36-3.16,1.35c-0.33,0-0.67-0.02-1-0.06l-0.15-1.57
        c0.33,0.09,0.66,0.13,1,0.13c2,0,3-1.44,3-4.3V204.9H87.19z"
            />
            <path d="M108.94,204.9v1.38h-10v8.58h9.77v1.4h-9.77V225h10.28v1.38H97.25V204.9H108.94z" />
            <path d="M167.7,204.9v1.38h-10v8.58h9.78v1.4h-9.82V225h10.29v1.38H156V204.9H167.7z" />
            <path d="M178.28,204.9V225h10.61v1.38h-12.27V204.9H178.28z" />
            <path
              d="M196.61,204.9h5.5c1.88-0.13,3.75,0.4,5.28,1.5c1.2,0.97,1.88,2.45,1.83,4c0,2.48-1.37,4.22-4.09,5.22
        c0.71,0.34,1.66,1.43,2.86,3.27l4.85,7.41h-2l-3.74-5.87c-0.76-1.38-1.75-2.62-2.92-3.68c-0.92-0.55-1.98-0.8-3.05-0.73h-2.9v10.28
        h-1.66L196.61,204.9z M198.27,206.28v8.4h3.56c1.47,0.1,2.92-0.29,4.15-1.1c0.96-0.74,1.5-1.9,1.44-3.11
        c0.05-1.21-0.49-2.36-1.46-3.08c-1.24-0.82-2.71-1.21-4.19-1.11L198.27,206.28z"
            />
            <path d="M234.45,204.9l-8.33,9.93v11.51h-1.66v-11.51l-8.33-9.93h2l7.17,8.5l7.13-8.5H234.45z" />
            <path d="M134.58,204.9l-9,21.66h-0.49l-9-21.66h1.67l7.6,18.14l7.54-18.14H134.58z" />
            <path d="M147.19,204.9l-9,21.66h-0.43l-9-21.66h1.68l7.6,18.14l7.55-18.14H147.19z" />
            <polygon
              points="110.26,292.59 0.18,186.48 153.88,29.08 309.08,186.48 308.31,187.22 199.34,292.59 197.88,291.08 306.09,186.44 
        153.89,32.08 3.16,186.44 111.72,291.07 "
            />
            <polygon
              points="213.92,278.46 212.79,276.68 305.9,217.32 153.83,67.13 3.34,217.31 96.7,276.63 95.57,278.41 0,217.68 
        153.82,64.17 154.56,64.9 309.26,217.67 "
            />
            <path
              d="M154.87,349.16l-154.6-196L153.88,0l155.11,153.14l-0.58,0.74L154.87,349.16z M3.08,153.32l151.78,192.44l151.31-192.44
      L153.89,3L3.08,153.32z"
            />
          </svg>
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
