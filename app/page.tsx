import Logo from '~components/Logo';
import ActionLinkList from './components/ActionLinkList';
import Container from './components/Container';
import { THEME } from '~constants/theme';
import SocialLinkList from '~components/SocialLinkList';

function Home() {
  return (
    <>
      <header className="mb-4">
        <Logo fill={THEME.colors.primary} />
      </header>
      <main>
        <Container>
          <ActionLinkList />
        </Container>
      </main>
      <footer>
        <Container>
          <SocialLinkList />
        </Container>
      </footer>
    </>
  );
}

export default Home;
