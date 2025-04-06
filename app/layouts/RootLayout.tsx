// External dependencies
import Script from 'next/script';

// Internal components
import Logo from '../components/Logo';
import SocialLinkList from '../components/SocialLinkList';
import Container from '../components/Container';

// Internal utilities and config
import { lato } from '../config/fonts';

// Internal constants
import { FONT_AWESOME_SCRIPT_URL } from '../constants';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={lato.variable}>
        <header className="mb-4">
          <Logo />
        </header>
        <main>{children}</main>
        <footer>
          <Container>
            <SocialLinkList />
          </Container>
        </footer>
        <Script src={FONT_AWESOME_SCRIPT_URL}></Script>
      </body>
    </html>
  );
}

export default RootLayout;
