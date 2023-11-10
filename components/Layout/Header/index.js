import Image from 'next/image';
import Link from 'next/link';

// - Styles
import styles from './header.module.scss';

// - Icons
import IconTelephone from '../../../public/assets/icons/IconTelephoneSolid.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.header__logo}
          alt="Rimac Seguros y Reaseguros"
          src="/assets/imgs/LogoRed.png"
          width={73}
          height={36}
        />
      </Link>
      <div className={styles.header__callToAction}>
        <small>¡Compra por este medio!</small>
        <div>
          <Image src={IconTelephone} width={20} height={20} alt="Phone" />
          <a href="tel:+014116001">(01) 411 6001</a>
        </div>
      </div>
    </header>
  );
}
