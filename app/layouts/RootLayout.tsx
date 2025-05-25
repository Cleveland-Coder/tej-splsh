// External dependencies
import { ReactNode } from 'react';

// Internal helpers
import { displayAvailableFlag } from '~helpers';

// Internal utilities and config
import { openSans } from '~config/fonts';

function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={openSans.className}>
        {displayAvailableFlag()}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
