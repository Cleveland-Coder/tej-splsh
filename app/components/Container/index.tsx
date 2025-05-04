// Internal styles
import { containerClassNames } from './tailwind';

// Internal types
import { ContainerProps } from './types';

/**
 * A flexible container component that wraps content with consistent padding and max-width
 */
export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`${containerClassNames} ${className}`.trim()}>{children}</div>;
}
