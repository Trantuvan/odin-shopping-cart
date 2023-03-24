import clsx from 'clsx';

import styles from '../styles/RootLayout.module.css';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <div className={clsx(styles.appContainer)}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
