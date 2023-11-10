// - Styles
import styles from './dropdowninput.module.scss';

export default function DropdownInput({
  dropdownName,
  inputName,
  placeholder,
  type,
}) {
  return (
    <div className={styles.dropdownInputWrapper}>
      <div className={styles.dropdownWrapper}>
        <select name={dropdownName} id={dropdownName}>
          <option value="DNI">DNI</option>
          <option value="RUC">RUC</option>
          <option value="CE">CE</option>
          <option value="Pasaporte">Pasaporte</option>
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="inp" className={styles.input}>
          <input
            type={type}
            name={inputName}
            id={inputName}
            placeholder="&nbsp;"
          />
          <span className={styles.label}>{placeholder}</span>
        </label>
      </div>
    </div>
  );
}
