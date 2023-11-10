// - Styles
import styles from './input.module.scss';

export default function Input({ placeholder, id, name, type }) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="inp" className={styles.input}>
        <input type={type} id={id} name={name} placeholder="&nbsp;" />
        <span className={styles.label}>{placeholder}</span>
      </label>
    </div>
  );
}
