import { THEME } from '~/constants/theme';
import { darken } from '~/utils/colors';

// Pre-compute the hover color
const hoverColor = darken(THEME.colors.primary, 20);

/**
 * Tailwind utility classes for the ActionLinkList component
 */
export const btnClasses = `
  inline-block
  w-full
  max-w-[300px]
  py-3
  text-white
  text-[32px]
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
  '--btn-bg': THEME.colors.primary,
  '--btn-hover': hoverColor,
} as React.CSSProperties;
