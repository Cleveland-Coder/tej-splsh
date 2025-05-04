// Internal components
import ActionLinkList from './components/ActionLinkList';
import Container from './components/Container';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

// Internal constants
import { THEME } from '~constants/theme';

// Internal styles
import { headerClassnames, layoutClassnames } from './tailwind';

function Home() {
  return (
    <div className={layoutClassnames}>
      <header className={headerClassnames}>
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
    </div>
  );
}

export default Home;
