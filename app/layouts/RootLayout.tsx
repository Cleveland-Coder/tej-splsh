// External dependencies
import Script from 'next/script';

// Internal components
import Logo from '../components/Logo';

// Internal utilities and config
import { lato } from '../config/fonts';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={lato.variable}>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
        <footer>
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

export default RootLayout;
