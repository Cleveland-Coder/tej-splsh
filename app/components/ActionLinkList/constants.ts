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
    spaced: true,
    ...EXTERNAL_LINK_PROPS,
  },
  {
    children: 'Say hi on Threads',
    href: '//threads.net/tinyerica',
    ...EXTERNAL_LINK_PROPS,
  },
  {
    children: 'Follow along on Instagram',
    href: '//instagram.com/tinyerica',
    spaced: true,
    ...EXTERNAL_LINK_PROPS,
  },
] as const;
