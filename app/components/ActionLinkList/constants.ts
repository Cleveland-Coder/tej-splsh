// Internal types
import { ActionLinkConfig } from './types';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '~constants';

export const ACTION_LINKS: ActionLinkConfig[] = [
  {
    href: 'mailto:hello@tinyerica.com',
    label: 'Email me about custom work!',
  },
  {
    href: '//www.etsy.com/shop/TinyErica',
    label: 'Shop my collection',
    ...EXTERNAL_LINK_PROPS,
  },
] as const;
