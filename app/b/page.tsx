// Internal components
import ActionLinkList from '~components/ActionLinkList';
import Container from '~components/Container';
import Logo from '~components/Logo';

// Internal constants
import { THEME } from '~constants/theme';

// Internal utilities and config
import { arsenalBoldItalic } from '~config/fonts';

// Internal styles
import { headerClassnames, layoutClassnames } from './tailwind';

function Home() {
  return (
    <div className={layoutClassnames}>
      <header className={headerClassnames}>
        <Logo fill={THEME.colors.blindForest} />
      </header>
      <main>
        <Container className="max-w-[600px]">
          <div className={`${arsenalBoldItalic.className} text-center`}>
            <h1 className="text-4xl font-bold">Tiny Erica Jewelry</h1>
            <p className="text-lg mt-4">
              Celebrate who you are and who you love with a bespoke collection of 14k gold and
              sterling silver jewelry designed on paper, crafted by hand, and made to last&hellip;
            </p>
          </div>
        </Container>
        <Container className="max-w-[360px] mt-12 ">
          <ActionLinkList />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
