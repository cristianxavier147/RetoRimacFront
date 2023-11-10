import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// - Components
import UserSelect from '../components/Plans/UserSelect';
import PlanSelect from '../components/Plans/PlanSelect';
import ProgressBar from '../components/Plans/ProgressBar';
import BackButton from '../components/Common/BackButton';
import LayoutWrapper from '../components/Layout/LayoutWrapper';

// - Utils
import { calculateAge, convertToPascalCase } from '../utils/functions';

// - Styles
import styles from './plans.module.scss';

// - Services
import { fetchPlansData } from '../services/api';

// - Context
import { useFormData } from '../services/context';

// - Hooks
import useMobileDetection from '../utils/hooks';

// - Icons
import IconPlanExternal from '../public/assets/icons/IconPlanExternal.svg';
import IconPlanUser from '../public/assets/icons/IconPlanUser.svg';

export default function PlansForm() {
  const router = useRouter();
  const isMobile = useMobileDetection();
  const { setFormValues, data } = useFormData();

  const [plansData, setPlansData] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(null);
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {
    fetchPlansData()
      .then((data) => {
        setPlansData(data);
      })
      .catch((error) => {
        console.error('Error fetching plans data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedPlan && userOption) {
      setFormValues({
        plan: selectedPlan,
        userType: userOption,
        price: selectedPlanPrice,
      });
      router.push('/summary');
    }
  }, [selectedPlan, userOption, selectedPlanPrice]);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setSelectedPlanPrice(
      userOption === 'option2' ? plan.price * 0.95 : plan.price
    ); // Apply discount if needed
  };

  const handleUserOption = (item) => {
    setUserOption(item);
  };

  const userAge = calculateAge(data?.user?.birthDay);

  const suitablePlans = plansData?.list?.filter((plan) => userAge <= plan.age);

  //Add image URL to each plan
  suitablePlans?.forEach((plan, index) => {
    const planNameToPascalCase = convertToPascalCase(plan.name);
    const url = `/assets/icons/Icon${planNameToPascalCase}.png`;

    plan.url = url;
  });

  return (
    <>
      <Head>
        <title>Rimac - Planes</title>
        <meta name="description" content="Rimac - Planes" key="desc" />
      </Head>
      <LayoutWrapper noFooter>
        <section className={styles.plans}>
          <ProgressBar step={1} />
          <div className={styles.plans__wrapper}>
            {!isMobile && <BackButton />}
            <h1>{data?.user?.name} ¿Para quién deseas cotizar?</h1>
            <h2>Selecciona la opción que se ajuste más a tus necesidades.</h2>
            <div className={styles.plans__userBoxes}>
              <UserSelect
                title="Para mi"
                description="Realiza una cotización para uno de tus familiares o cualquier persona."
                selected={userOption === 'option1'}
                onClick={() => handleUserOption('option1')}
                src={IconPlanUser}
              />
              <UserSelect
                title="Para alguien más"
                description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                selected={userOption === 'option2'}
                onClick={() => handleUserOption('option2')}
                src={IconPlanExternal}
              />
            </div>
            <div className={styles.plans__boxes}>
              {userOption &&
                suitablePlans?.map((plan, index) => (
                  <PlanSelect
                    key={index}
                    plan={plan}
                    onSelect={handlePlanSelection}
                    applyDiscount={userOption === 'option2'}
                  />
                ))}
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  );
}
