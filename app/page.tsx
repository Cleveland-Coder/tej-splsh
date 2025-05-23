// Internal components
import LegacyActionLinkList from '~components/LegacyActionLinkList';
import Container from '~components/Container';
import Logo from '~components/Logo';
import SocialLinkList from '~components/SocialLinkList';

// Internal constants
import { THEME } from '~constants/theme';

// Internal styles
import { headerClassnames, layoutClassnames } from './tailwind';

function LegacyHome() {
  return (
    <div className={layoutClassnames}>
      <header className={headerClassnames}>
        <Logo fill={THEME.colors.primary} />
      </header>
      <main>
        <Container>
          <LegacyActionLinkList />
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

export default LegacyHome;
