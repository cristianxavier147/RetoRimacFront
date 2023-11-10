import FormProvider from '../services/context';
import '../styles.scss';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </FormProvider>
  );
}

export default MyApp;
