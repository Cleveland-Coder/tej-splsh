import { ReactNode } from 'react';

export interface ActionLinkProps {
  /** The content to display within the link */
  children: ReactNode;
  /** The URL to navigate to */
  href: string;
  /** Optional rel attribute for the link */
  rel?: string;
  /** Optional marker to add spacing between links */
  spaced?: boolean;
  /** Optional target attribute for the link */
  target?: string;
}
