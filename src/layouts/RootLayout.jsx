import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import styles from '../styles/RootLayout.module.css';
import { NavBar, Footer } from '../components';

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
