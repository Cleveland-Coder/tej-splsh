// External dependencies
import { AnchorHTMLAttributes } from 'react';

// Internal constants
import { THEME } from '~/constants/theme';

// Internal types
import { FlagProps } from '~/components/Flag/types';

export const BANNER: FlagProps = {
  bgColor: THEME.colors.primary,
  message: '',
} as const;

export const EXTERNAL_LINK_PROPS: AnchorHTMLAttributes<HTMLAnchorElement> = {
  rel: 'noopener noreferrer',
  target: '_blank',
} as const;
