// External dependencies
import { ReactNode } from 'react';

// Internal components
import Container from '~components/Container';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

// Internal helpers
import { displayAvailableFlag } from '~helpers';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        {displayAvailableFlag()}
        <header className="mb-4">
          <Logo />
        </header>
        <main>{children}</main>
        <footer>
          <Container>
            <SocialLinkList />
          </Container>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
