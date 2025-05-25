// External dependencies
import Image from 'next/image';

// Internal components
import ActionLinkList from '~components/ActionLinkList';
import Container from '~components/Container';
import Logo from '~components/Logo';

// Internal constants
import { BODY_COPY, IMAGE_PROPS } from './constants';
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
          <Image {...IMAGE_PROPS[0]} className="mt-6 mx-auto" />
          <div className="text-left">
            {BODY_COPY.slice(0, 2).map((copy, index) => (
              <p key={index} className="mt-6">
                {copy}
              </p>
            ))}
          </div>
          <Image {...IMAGE_PROPS[1]} className="mt-6 mx-auto" />
          <div className="text-left">
            {BODY_COPY.slice(2).map((copy, index) => (
              <p key={index} className="mt-6">
                {copy}
              </p>
            ))}
          </div>
        </Container>
        <Container className="max-w-[360px] mt-12 ">
          <ActionLinkList />
        </Container>
      </main>

      <footer>
        <Container className="max-w-[600px]">
          <Image {...IMAGE_PROPS[2]} className="my-12 mx-auto" />
        </Container>
      </footer>
    </div>
  );
}

export default Home;
