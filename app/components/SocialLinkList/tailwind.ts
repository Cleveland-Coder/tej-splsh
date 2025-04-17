/**
 * Tailwind utility classes for the SocialLinkList component
 */
import { THEME } from '~/constants/theme';

export const listSocialClasses = `
  flex
  justify-center
  list-none
  p-0
  text-[var(--social-default)]
`.trim();

export const iconSocialClasses = `
  transition-all
  duration-300
  ease-in-out
  px-4
  text-[45px]
  leading-none
  no-underline
`.trim();

export const iconSocialHoverClasses = {
  facebook: `hover:text-[${THEME.colors.social.facebook}]`,
  instagram: `hover:text-[${THEME.colors.social.instagram}]`,
  pinterest: `hover:text-[${THEME.colors.social.pinterest}]`,
};

export const listSocialStyles: React.CSSProperties = {
  '--social-default': THEME.colors.primary,
} as React.CSSProperties;
