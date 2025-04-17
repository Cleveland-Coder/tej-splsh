// Internal styles
import { flagClasses } from './tailwind';

// Internal types
import { FlagProps } from './types';

/**
 * A component that displays a message in a flag-like container
 */
function Flag({ message }: FlagProps) {
  return <div className={flagClasses}>{message}</div>;
}

export default Flag;
