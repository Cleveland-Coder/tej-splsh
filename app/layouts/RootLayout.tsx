// External dependencies
import { ReactNode } from 'react';

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
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
