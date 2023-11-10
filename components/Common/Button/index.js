// - Styles
import styles from './button.module.scss';

export default function Button({ text, type, onClick }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
