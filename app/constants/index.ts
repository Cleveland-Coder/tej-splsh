import { THEME } from '~/constants/theme';
import { AnchorHTMLAttributes } from 'react';

interface BannerType {
  bgColor: string;
  message: string;
}

export const EXTERNAL_LINK_PROPS: AnchorHTMLAttributes<HTMLAnchorElement> = {
  rel: 'noopener noreferrer',
  target: '_blank',
} as const;

export const BANNER: BannerType = {
  bgColor: THEME.colors.primary,
  message: '',
} as const;
