import { useRouter } from 'next/router';
import Image from 'next/image';

// - Styles
import styles from './backbutton.module.scss';

// - Icons
import IconBack from '../../../public/assets/icons/IconBack.svg';
import IconBackMobile from '../../../public/assets/icons/IconBackMobile.svg';

// - Hooks
import useMobileDetection from '../../../utils/hooks';

export default function BackButton() {
  const router = useRouter();
  const isMobile = useMobileDetection();

  return (
    <div className={styles.backButton} onClick={() => router.back()}>
      {isMobile ? (
        <>
          <Image src={IconBackMobile} width={24} height={24} alt="Back" />
        </>
      ) : (
        <>
          <Image src={IconBack} width={20} height={20} alt="Back" />
          <span>Volver</span>
        </>
      )}
    </div>
  );
}
