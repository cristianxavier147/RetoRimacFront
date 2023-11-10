import Image from 'next/image';

// - Hooks
import useMobileDetection from '../../../utils/hooks';

// - Styles
import styles from './progressbar.module.scss';

// - Icons
import IconProgress from '../../../public/assets/icons/IconProgress.svg';

// - Components
import BackButton from '../../Common/BackButton';

const ProgressBar = ({ step }) => {
  const isMobile = useMobileDetection();

  const progressWidth = (step === 1 ? 3 : step === 2 ? 100 : 0) + '%';

  return (
    <div className={`${styles.progressBar} ${isMobile ? styles.mobile : ''}`}>
      {isMobile ? (
        <div className={styles.mobileProgressBar}>
          <BackButton />
          <div className={styles.progressText}>Paso {step} de 2</div>
          <div className={styles.progressBarMobile}>
            <div
              className={styles.progressBarMobileFill}
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`${styles.step} ${step === 1 ? styles.selected : ''}`}
          >
            <span>1</span>
            <h3>Planes y coberturas</h3>
          </div>
          <Image src={IconProgress} width={25} height={4} alt="Progress" />
          <div
            className={`${styles.step} ${step === 2 ? styles.selected : ''}`}
          >
            <span>2</span>
            <h3>Resumen</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressBar;
