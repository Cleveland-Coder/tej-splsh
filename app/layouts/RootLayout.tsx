import { ReactNode } from 'react';

import Container from '~components/Container';
import Flag from '~components/Flag';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';
import { BANNER } from '~constants';

function displayAvailableFlag(): ReactNode {
  if (!BANNER.message) return null;
  return <Flag bgColor={BANNER.bgColor} message={BANNER.message} />;
}

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
