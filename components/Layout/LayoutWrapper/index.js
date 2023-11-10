// - Components
import Footer from '../Footer';
import Header from '../Header';

// - Styles
import styles from './layoutwrapper.module.scss';

function LayoutWrapper({ children, noFooter }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainContent}>{children}</div>
      {!noFooter && <Footer />}
    </div>
  );
}

export default LayoutWrapper;
