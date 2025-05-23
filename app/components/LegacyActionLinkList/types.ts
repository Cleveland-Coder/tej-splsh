import { ReactNode } from 'react';

export interface ActionLinkConfig {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}

export interface ActionLinkProps {
  /** The URL to navigate to */
  href: string;
  /** The content to display within the link */
  children: ReactNode;
  /** Optional target attribute for the link */
  target?: string;
  /** Optional rel attribute for the link */
  rel?: string;
}
