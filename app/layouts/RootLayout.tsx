import Container from '~components/Container';
import Flag from '~components/Flag';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let message = null;
  // message = 'FLASH SALE: 20% off select items. Code: FLASH20';

  return (
    <html lang="en-US">
      <body>
        {message && <Flag bgColor="#9a7f62" message={message} />}
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
