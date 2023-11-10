import Head from 'next/head';
import Image from 'next/image';

// - Components
import BackButton from '../components/Common/BackButton';
import LayoutWrapper from '../components/Layout/LayoutWrapper';
import ProgressBar from '../components/Plans/ProgressBar';
import { useFormData } from '../services/context';

// - Styles
import styles from './summary.module.scss';

// - Hooks
import useMobileDetection from '../utils/hooks';

// - Icons
import IconUser from '../public/assets/icons/IconUser.svg';

export default function Summary() {
  const { data } = useFormData();
  const isMobile = useMobileDetection();

  return (
    <>
      <Head>
        <title>Rimac - Resumen</title>
        <meta name="description" content="Rimac - Resumen" key="desc" />
      </Head>
      <LayoutWrapper noFooter>
        <ProgressBar step={2} />
        <div className={styles.summary}>
          {!isMobile && <BackButton />}
          <div className={styles.summary__info}>
            <h1>Resumen del seguro</h1>
            <div>
              <small>Precios calculados para:</small>
              <div className={styles.summary__userData}>
                <Image src={IconUser} width={24} height={24} alt="User" />
                <h2>
                  {data?.user?.name} {data?.user?.lastName}
                </h2>
              </div>
            </div>
            <hr />
            <div className={styles.summary__paymentData}>
              <span>Responsable de pago</span>
              <p>
                {data?.documentType}: {data?.document}
              </p>
              <p>Celular: {data?.phone}</p>
            </div>
            <div className={styles.summary__planData}>
              <span>Plan elegido</span>
              <p>{data?.plan?.name}</p>
              <p>Costo del plan: ${data?.price} al mes</p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
