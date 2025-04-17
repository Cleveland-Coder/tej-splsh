// Internal styles
import styles from './Flag.module.css';

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
  return <div className={styles.flag}>{message}</div>;
}

export default Flag;
