import styles from './Flag.module.css';

interface FlagProps {
  message: string;
}

function Flag({ message }: FlagProps) {
  return <div className={styles.flag}>{message}</div>;
}

export default Flag;
