// Internal components
import ActionLinkList from '~components/ActionLinkList';
import Container from '~components/Container';
import Logo from '~components/Logo';

// Internal constants
import { THEME } from '~constants/theme';

// Internal styles
import { headerClassnames, layoutClassnames } from './tailwind';

function Home() {
  return (
    <div className={layoutClassnames}>
      <header className={headerClassnames}>
        <Logo fill={THEME.colors.blindForest} />
      </header>
      <main>
        <Container>
          <ActionLinkList />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
