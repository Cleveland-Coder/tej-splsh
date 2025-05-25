// Internal types
import { ActionLinkProps } from './types';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '~constants';

export const ACTION_LINKS: ActionLinkProps[] = [
  {
    children: 'Email me about custom work!',
    href: 'mailto:hello@tinyerica.com',
  },
  {
    children: 'Shop my collection',
    href: '//www.etsy.com/shop/TinyErica',
    ...EXTERNAL_LINK_PROPS,
  },
] as const;
