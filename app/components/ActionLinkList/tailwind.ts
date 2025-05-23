import { THEME } from '~/constants/theme';
import { lighten } from '~/utils/colors';

// Pre-compute the hover color
const hoverColor = lighten(THEME.colors.blindForest, 10);

/**
 * Tailwind utility classes for the ActionLinkList component
 */
export const btnClassNames = `
  inline-block
  w-full
  max-w-[300px]
  py-3
  px-2
  text-white
  text-lg
  tracking-[1px]
  rounded-lg
  bg-[var(--btn-bg)]
  transition-all
  duration-300
  ease-in-out
  hover:bg-[var(--btn-hover)]
  [&:not(:first-child)]:mt-3
`.trim();

// CSS variables to be set in the component
export const btnStyles: React.CSSProperties = {
  '--btn-bg': THEME.colors.blindForest,
  '--btn-hover': hoverColor,
} as React.CSSProperties;
