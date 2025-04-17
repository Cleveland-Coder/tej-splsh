// Internal styles
import { flagClasses } from './tailwind';

// Internal types
import { FlagProps } from './types';

/**
 * A component that displays a message in a flag-like container
 */
function Flag({ bgColor, message }: FlagProps) {
  return (
    <div className={flagClasses} style={{ backgroundColor: bgColor }}>
      {message}
    </div>
  );
}

export default Flag;
