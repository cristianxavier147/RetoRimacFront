// - Styles
import styles from './tag.module.scss';

export default function Tag({ text }) {
  return (
    <div className={styles.tag}>
      <span>{text}</span>
    </div>
  );
}
