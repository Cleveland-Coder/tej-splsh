import { THEME } from '~/constants/theme';

interface BannerType {
  bgColor: string;
  message: string;
}

interface ExternalLinkProps {
  rel: string;
  target: string;
}

export const EXTERNAL_LINK_PROPS: ExternalLinkProps = {
  rel: '_blank',
  target: 'noopener noreferrer',
} as const;

export const BANNER: BannerType = {
  bgColor: THEME.colors.primary,
  message: '',
} as const;
