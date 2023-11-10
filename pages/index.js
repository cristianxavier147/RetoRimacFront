import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

// - Components
import Button from '../components/Common/Button';
import Tag from '../components/Common/Tag';
import Input from '../components/Common/Input';
import Checkbox from '../components/Common/Checkbox';
import DropdownInput from '../components/Common/DropdownInput';

// - Styles
import styles from './index.module.scss';

// - Services
import { fetchUserData } from '../services/api';

// - Context
import { useFormData } from '../services/context';
import LayoutWrapper from '../components/Layout/LayoutWrapper';

export default function Home() {
  const router = useRouter();
  const { setFormValues } = useFormData();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate form values
    const documentValue = e.target.elements.document.value;
    const documentTypeValue = e.target.elements.documentType.value;
    const phoneValue = e.target.elements.phone.value;
    const policyChecked = e.target.elements.policy.checked;
    const commsChecked = e.target.elements.comms.checked;

    if (
      documentValue.trim() === '' ||
      documentTypeValue.trim() === '' ||
      phoneValue.trim() === '' ||
      !policyChecked ||
      !commsChecked
    ) {
      // Show alert if any field is empty
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    setFormValues({
      document: documentValue,
      documentType: documentTypeValue,
      phone: phoneValue,
      policy: policyChecked,
      comms: commsChecked,
      user: userData,
    });

    router.push('/plans');
  };

  return (
    <>
      <Head>
        <title>Rimac - Seguro Salud Flexible</title>
        <meta
          name="description"
          content="Rimac - Seguro Salud Flexible"
          key="desc"
        />
      </Head>
      <LayoutWrapper>
        <section className={styles.home}>
          <aside>
            <Image
              className={styles.home__heroImg}
              src={'/assets/imgs/hero.png'}
              loading="eager"
              fill={true}
              objectFit="cover"
              objectPosition="center"
              alt="Rimac Seguros y Reaseguros"
            />
          </aside>
          <form onSubmit={onSubmit} className={styles.home__form}>
            <div className={styles.home__formHeadings}>
              <div className={styles.home__formHeadingsWrapper}>
                <div>
                  <Tag text="Seguro Salud Flexible" />
                  <h1>Creado para ti y tu familia</h1>
                </div>
                <div className={styles.home__formImg}>
                  <Image
                    className={styles.home__heroImg}
                    src={'/assets/imgs/hero.png'}
                    loading="eager"
                    fill={true}
                    objectFit="cover"
                    objectPosition="center"
                    alt="Rimac Seguros y Reaseguros"
                  />
                </div>
              </div>
              <hr className={styles.home__separator} />
              <h3>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </h3>
            </div>
            <div className={styles.home__formInputs}>
              <DropdownInput
                placeholder="Nro. de documento"
                dropdownName="documentType"
                inputName="document"
                type="number"
              />
              <Input placeholder="Celular" name="phone" type="number" />
            </div>
            <div className={styles.home__formTerms}>
              <Checkbox
                id="privacyPolicy"
                label="Acepto la Política de Privacidad"
                name="policy"
              />
              <Checkbox
                id="commsPolicy"
                label="Acepto la Política Comunicaciones Comerciales"
                name="comms"
              />
              <a href="#">Aplican Términos y Condiciones.</a>
            </div>
            <Button type="submit" text={'Cotiza aquí'} />
          </form>
        </section>
      </LayoutWrapper>
    </>
  );
}
