// External dependencies
import { ReactNode } from 'react';

// Internal components
import Container from '~components/Container';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

// Internal helpers
import { displayAvailableFlag } from '~helpers';

// Internal styles
import { bodyClasses } from './tailwind';

// Internal constants
import { THEME } from '~constants/theme';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={bodyClasses}>
        {displayAvailableFlag()}
        <header className="mb-4">
          <Logo fill={THEME.colors.primary} />
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
