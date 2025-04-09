import Container from '~components/Container';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body>
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
