// External dependencies
import { ReactNode } from 'react';

// Internal styles
import styles from './Container.module.css';

/**
 * Props for the Container component
 */
interface ContainerProps {
  /** The content to be wrapped by the container */
  children: ReactNode;
  /** Optional additional CSS classes to apply to the container */
  className?: string;
}

/**
 * A flexible container component that wraps content with consistent padding and max-width
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`${styles.container} ${className}`.trimEnd()}>{children}</div>;
}
