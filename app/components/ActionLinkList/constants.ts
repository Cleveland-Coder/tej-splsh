// Internal types
import { ActionLinkConfig } from './types';

// Internal constants
import { EXTERNAL_LINK_PROPS } from '../../constants';

export const ACTION_LINKS: ActionLinkConfig[] = [
  {
    href: '//www.etsy.com/shop/TinyErica',
    label: 'Shop',
    ...EXTERNAL_LINK_PROPS,
  },
  {
    href: 'mailto:hello@tinyerica.com',
    label: 'Email',
  },
];
