import Image from 'next/image';

// - Styles
import styles from './userselect.module.scss';

const UserSelect = ({ src, title, description, selected, onClick }) => {
  const userSelectClasses = `${styles.userSelect} ${selected ? styles.selected : ''}`;
  const radioCheckClasses = `${styles.radioCheck}`;

  return (
    <div className={userSelectClasses} onClick={onClick}>
      <div>
        <Image width={42} height={42} priority src={src} alt={title} />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      {selected && (
        <div className={radioCheckClasses}>
          <div className={styles.checkmark}>✔</div>
        </div>
      )}
    </div>
  );
};

export default UserSelect;
