/**
 * Tailwind utility classes for the SocialLinkList component
 */
export const listSocialClasses = `
  flex
  justify-center
  list-none
  p-0
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
  facebook: 'hover:text-[#3b5998]',
  instagram: 'hover:text-[#3f729b]',
  pinterest: 'hover:text-[#cc2127]',
};
