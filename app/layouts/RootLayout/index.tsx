// External dependencies
import { ReactNode } from 'react';

// Internal helpers
import { displayAvailableFlag } from '~helpers';

// Internal styles
import { layoutClassnames } from './tailwind';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
        {displayAvailableFlag()}
        <div className={layoutClassnames}>{children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
