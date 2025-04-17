// Internal styles
import { containerClasses } from './tailwind';

// Internal types
import { ContainerProps } from './types';

/**
 * A flexible container component that wraps content with consistent padding and max-width
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`${containerClasses} ${className}`.trim()}>{children}</div>;
}
