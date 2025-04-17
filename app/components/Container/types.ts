import { ReactNode } from 'react';

/**
 * Props for the Container component
 */
export interface ContainerProps {
  /** The content to be wrapped by the container */
  children: ReactNode;
  /** Optional additional CSS classes to apply to the container */
  className?: string;
}
