import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialLinkProps {
  /** The URL to navigate to */
  href: string;
  /** The FontAwesome icon to display */
  icon: IconProp;
  /** The title/name of the social media platform */
  title: string;
}
