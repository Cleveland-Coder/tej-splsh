// External dependencies
import { faFacebookF, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

// Internal types
import { SocialLinkProps } from './types';

export const SOCIAL_LINKS: SocialLinkProps[] = [
  {
    href: '//instagram.com/tinyerica',
    icon: faInstagram,
    title: 'instagram',
  },
  {
    href: '//facebook.com/tinyerica',
    icon: faFacebookF,
    title: 'facebook',
  },
  {
    href: '//pinterest.com/tinyerica',
    icon: faPinterest,
    title: 'pinterest',
  },
] as const;
