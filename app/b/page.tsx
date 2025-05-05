// Internal components
import Logo from '~components/Logo';

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
      <main></main>
      <footer></footer>
    </div>
  );
}

export default Home;
