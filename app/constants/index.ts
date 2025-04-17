interface ExternalLinkProps {
  rel: string;
  target: string;
}

export const EXTERNAL_LINK_PROPS: ExternalLinkProps = {
  rel: '_blank',
  target: 'noopener noreferrer',
} as const;
