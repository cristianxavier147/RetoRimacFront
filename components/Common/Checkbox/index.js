// - Styles
import styles from './checkbox.module.scss';

export default function Checkbox({ id, name, label }) {
  return (
    <div>
      <input
        id={id}
        name={name}
        className={styles.inputCheckbox}
        type="checkbox"
        style={{ display: 'none' }}
      />
      <label htmlFor={id} className={styles.checkbox}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{label}</span>
      </label>
    </div>
  );
}
