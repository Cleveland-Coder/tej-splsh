// Internal styles
import { flagClasses } from './tailwind';

/**
 * Props for the Flag component
 */
interface FlagProps {
  /** The message to display in the flag */
  message: string;
}

/**
 * A component that displays a message in a flag-like container
 */
function Flag({ message }: FlagProps) {
  return <div className={flagClasses}>{message}</div>;
}

export default Flag;
