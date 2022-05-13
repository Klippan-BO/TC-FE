import Nav from './Nav.jsx';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

function Layout({ children }) {
  const router = useRouter();
  const showNav = !router.pathname.includes('/login');
  return (
    <>
      { showNav && <Nav /> }
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;
