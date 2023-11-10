import Image from 'next/image';

// - Styles
import styles from './footer.module.scss';

// - Hooks
import useMobileDetection from '../../../utils/hooks';

export default function Footer() {
  const isMobile = useMobileDetection();

  return (
    <footer className={styles.footer}>
      {isMobile ? (
        <Image
          className={styles.footer__logo}
          alt="Rimac Seguros y Reaseguros"
          src="/assets/imgs/LogoWhiteMobile.png"
          width={138}
          height={20}
        />
      ) : (
        <Image
          className={styles.footer__logo}
          alt="Rimac Seguros y Reaseguros"
          src="/assets/imgs/LogoWhite.png"
          width={85}
          height={42}
        />
      )}
      <hr className={styles.footer__separator} />
      <div className={styles.footer__copy}>
        <span>© 2023 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  );
}
