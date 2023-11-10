import Image from 'next/image';

// - Components
import Button from '../../Common/Button';

// - Styles
import styles from './planselect.module.scss';

const PlanSelect = ({ plan, onSelect, applyDiscount }) => {
  const { name, price, description, url } = plan;

  const getPlanPrice = applyDiscount ? price * 0.95 : price;

  return (
    <div className={styles.planSelect}>
      <div className={styles.planSelect__info}>
        <div className={styles.planSelect__infoText}>
          <h2>{name}</h2>
          <small>Costo del plan</small>
          <p>${getPlanPrice} al mes</p>
        </div>
        <div className={styles.planSelect__infoImg}>
          <Image width={56} height={56} priority src={url} alt={name} />
        </div>
      </div>
      <ul className={styles.planSelect__descriptions}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={styles.planSelect__button}>
        <Button onClick={() => onSelect(plan)} text="Seleccionar plan" />
      </div>
    </div>
  );
};

export default PlanSelect;
