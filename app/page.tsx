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
        <Container className="max-w-[360px] my-6 md:my-3">
          <LegacyActionLinkList />
        </Container>
      </main>
      <footer>
        <Container className="max-w-[360px] my-6 md:my-3">
          <SocialLinkList />
        </Container>
      </footer>
    </div>
  );
}

export default LegacyHome;
