// External dependencies
import Script from 'next/script';

// Internal components
import Logo from '../components/Logo';
import SocialLinkList from '../components/SocialLinkList';

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
          <SocialLinkList />
        </footer>
        <Script src="https://use.fontawesome.com/f6e0e51e9b.js"></Script>
      </body>
    </html>
  );
}

export default RootLayout;
