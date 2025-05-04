/**
 * Tailwind utility classes for the SocialLinkList component
 */
import { THEME } from '~/constants/theme';

export const listSocialClassNames = `
  flex
  justify-center
  list-none
  p-0
  text-[var(--social-default)]
`.trim();

export const iconSocialClassNames = `
  transition-all
  duration-300
  ease-in-out
  px-4
  text-[45px]
  leading-none
  no-underline
`.trim();

export const iconSocialHoverClassNames = {
  facebook: `hover:text-[var(--social-facebook)]`,
  instagram: `hover:text-[var(--social-instagram)]`,
  pinterest: `hover:text-[var(--social-pinterest)]`,
};

export const listSocialStyles: React.CSSProperties = {
  '--social-default': THEME.colors.primary,
  '--social-facebook': THEME.colors.social.facebook,
  '--social-instagram': THEME.colors.social.instagram,
  '--social-pinterest': THEME.colors.social.pinterest,
} as React.CSSProperties;
